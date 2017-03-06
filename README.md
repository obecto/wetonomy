# Obitcoin

[Актуална версия на проекта за тестване][prj]

##### Моля да обърнете внимание на изискванията за инсталацията на безплатното браузър разжирение [Metamask][msk]
То осъществява връзката до Ethereum blockchain мрежата.

За да може да извършвате дейности с договори в мрежата ви трябва акаунт със средства в криптовалутата. Засега се използва Ropsten test network като мрежа за тестване на нашите инстанции на договора, защото самата мрежа е предназначена за това. Приготвил съм Ethereum акаунт с достатъчно средства (които нямат реална стойност в мрежата) за ваше удобство. Моля, следвайте следните стъпки за настройване и тестване на прототипа:

- Инсталирайте [браузър разжирението][msk]
- Стартирайте го, приемете общите условия за ползване и изберете опцията "Import existing DEN"

![alt tag](http://i.imgur.com/5rKyuoF.png)

- В полето "Wallet seed" въведете следните 12 думи: "illegal goat income maid bargain junk bargain child story alone want dismiss" и парола по ваш избор, която ще бъде използвана за криптиране на данните.

![alt tag](http://i.imgur.com/mTYkKry.png)

- Трябва да ви се зареди следния акаунт с ненулев баланс от Ether. Моля да проверите дали сте свързани към Ropsten Test Network от горния ъгъл вляво.

![alt tag](http://i.imgur.com/6kivMKh.png)

Настройката е готова. [Можете да посетите тестовата версия на проекта][prj]. Можете да си създадете собствена инстанция на криптодоговора. За ваше удобство съм създал вече настроен криптодоговор в мрежата от името на Ethereum акаунта който преди малко настроихте. Може да го достъпите като въведете следния адрес в login формата:
- 0x46ad720ddb202cb6526f4e6932190cd572c2249d

Понеже е от името на вашия акаунт, вие имате правото да извършвате транзакции в договора.
Някои от транзакциите, които можете да създадете, са следните:
- Добавяне / редактиране на член в договора
- Добавяне / редактиране на debt pools (групи от хора, работещи върху същия проект)
- Изпращане на точки на определени членове в определени групи (натрупване на дълг)
- Откупуване на точки в определена група. Откупените точки ще бъдат разпределени по всеки човек от групата спрямо правилата за разпределение

##### Внимание! Ropsten test мрежата може да не е стабилна на моменти. Понеже е второстепенна мрежа за тестване без голям Hashrate, тя може да бъде атакувана и забавяна. Това може да резултира до много бавно време за изчакване на транзакции. Подобни атаки са теоретически невъзможни главната Ethereum мрежа, за която е предназначен този проект.

[msk]: <https://metamask.io/>
[prj]: <https://kingofallchunks.github.io/obitcoin/>