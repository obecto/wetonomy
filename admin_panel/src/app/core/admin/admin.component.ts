import {Component, OnInit, Inject, ViewChild, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import {Subscription} from "rxjs";
import {MediaChange, ObservableMedia} from "@angular/flex-layout";
import {Router, NavigationEnd} from "@angular/router";
import * as screenfull from 'screenfull';
import { MdSnackBar } from "@angular/material";
import { MdDialog } from '@angular/material';
import { ChangeDetectorRef } from '@angular/core';

import { DataService } from '../../data.service';
import { DialogService } from '../../dialog.service'

@Component({
	selector: 'ms-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
	
	@ViewChild('sidenav')
	sidenav;
	
	private _mediaSubscription: Subscription;
	sidenavOpen: boolean = false;
	sidenavMode: string = 'side';
	isMobile: boolean = false;
	
	private _routerEventsSubscription: Subscription;
	
	quickpanelOpen: boolean = false;
	
	isFullscreen: boolean = false;
	
	constructor(
	private media: ObservableMedia,
	private router: Router,
	private dataService: DataService,
	private snackBar: MdSnackBar,
	private viewContainerRef: ViewContainerRef,
	private dialogService : DialogService,
	) { }
	
	ngOnInit() {
		this.dataService.setNotificationCallback(this.onEvent);
		
		this._mediaSubscription = this.media.asObservable().subscribe((change: MediaChange) => {
			let isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
			
			this.isMobile = isMobile;
			this.sidenavMode = (isMobile) ? 'over' : 'side';
			this.sidenavOpen = !isMobile;
		});
		
		this._routerEventsSubscription = this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd && this.isMobile) {
				this.sidenav.close();
			}
		});
		
		if(!this.dataService.isConnected()) this.router.navigate(['/login']);
	}
	
	toggleFullscreen() {
		if (screenfull.enabled) {
			screenfull.toggle();
			this.isFullscreen = !this.isFullscreen;
		}
	}
	
	ngOnDestroy() {
		this._mediaSubscription.unsubscribe();
	}
	
	onActivate(e, scrollContainer) {
		scrollContainer.scrollTop = 0;
	}
	
	onEvent = (message: string) => {
		this.snackBar.open(message, "Close", {});
		this.dialogService.appendMessage("Transaction complete", message, this.viewContainerRef);
	}
}