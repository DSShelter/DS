/* СЕРВИСНЫЕ ФУНКЦИИ */

/* Глобальные переменные */
/* Имя текущей функции для сохранения и загрузки */
var currentFunction = null
/* Имя героя и звание */
var heroName = "Павлик"
var rank = "Посвящённый"
/* День, время и часть дня */
var day = 1
var time = 5
var daytime = " "

var HubLeftDays = 0
var HubRoomLeftDays = 0
var HubRoomLeftDays2 = 0

/* Здоровье */
var health = 100
var health_status = ""

var status = "" /* Бодрость */

/* Сытость */
var satiety = 3
var satiety_status = ""

/* Инвентарь */
var cans = 0 /* Консервы */
var caps = 0 /* Крышки */
var rifle_ammo = 0 /* Патроны к ружью */
var pistol_ammo = 0 /* Патроны к пистолету */
var grenade = 0 /* Граната */
var stimpacks = 0 /* Стимуляторы */
var booze = 0 /* Самогон */
var beer = 0 /* Пиво */

/* Сюжетные переменные */
var trainingStatus = false /* Статус тренировки в начале игры */
var stan = false /* Стэн встречается с Розой Сарона */
var guardRoomMeeting = false /* Зашёл в комнату охраны */
var talusPermission = false /* Поговорил с Талусом */
var michaelFirstMeeting = false /* Встретился с Майклом */
var rombusMeeting = false /* Пришёл в кабинет Ромбуса */
var getPowerArmor = false /* Получил силовую броню и снаряжение */
var getShotgun = false /* Получил дробовик */
var stationTable = false /* Осмотрел стол на заправке */
var stationCupboard = false /* Осмотрел шкаф на заправке */
var stationDead = false /* Осмотрел труп на заправке */
var seeDeadPockets = false /* Осмотрел карманы трупа */
var getDisk = false /* Забрал голодиск */
var getPistol = false /* Получил пистолет */
var wastelandRoad = false /* Пошёл в Хаб по дороге */
var meetCaravanArmed = false /* Вышел к каравану с оружием */
var badWaterMerchant = false /* Поругался с начальником каравана */
var creigFirstMeetGood = false /* Первая встреча с Крейгом закончилась по доброму */
var creigFirstMeetBad = false /* Первая встреча с Крейгом закончилась плохо */
var creigAskGood = false /* Крейг попросил купить ему пива */
var creigDrunked = false /* Крейг нажрался */
var creigAskGood2 = false /* Крейг попросил организовать ему баню и жильё */
var deckerGlad = false /* Декер доволен общением */
var deckerBonus = false /* Попросить у Декера больше денег */
var getDeckerQuest = false /* Задание от Декера */
var deckerQuest = false /* Кейн указал местонахождение Дона */
var changeHubLocation = false /* Начало выполнения злой ветки - изменение локации Хаба */
var guardBasters = false /* Разыграл охраников сообщением о преступлении */
var goToJail = false /* Сел в тюрьму */
var bethFirstMeeting = false /* Первый раз зашёл к Бэт */
var getHubSilencer = false /* Купил глушитель */
var bethAgree = false /* Бэт согласилась на помывку бездомного */
var bethDontLoveYou = false /* Нагрубить Бэт */
var rentRoom = false /* Снял комнату в Хабе */
var drunkardStatus = 0 /* Статус трезвости */
var crimsonCaravanFirstMeet = false /* Зашёл в офис Красного Каравана */
var angryBob = false /* Разозлил Боба */
var chooseEasyWay = false /* Воспользовался связями с караванщиком */
var marthaFirstMeet = false /* Вошёл в кабинет Марты */
var additionalTask = false /* Дополнительная задача выполнена */
var BOSknown = false /* выдал принадлежность к Братству Стали Шерифу или Кенни*/
var BOSknown2 = false /* выдал принадлежность к Братству Стали Декеру*/
var BOSknown3 = false /* выдал принадлежность к Братству Стали Марте*/
var marthaMeetBad = false /* Поругался с Мартой */
var meetHarold = false /* Встретился с Гарольдом */
var meetHaroldGood = false /* Дал Гарольду немного денег */
var haroldName = false /* Спросил как зовут Гарольда */
var haroldAge = false /* Спросил сколько лет Гарольду */
var haroldBase = false /* Спросил о мутации Гарольда */
var haroldHome = false /* Спросил о доме Гарольда */
var getSheriffGreeneFirstTask = false /* Получил первое задание шерифа о помощи Крейгу */
var sheriffGreeneFirstTask = false /* Первое задание шерифа о помощи Крейгу */
var KennyFirstMeet = false /* Встретился с Кенни впервые */
var sheriffGreeneFirstTaskEasy = false /* Не стал выполнять первое задание, раскрыв принадлежность к Братству */
var angryGreene = false /* Наврал о преступлении шерифу Грину */
var getSheriffGreeneSecondTask = false /* Получил второе задание шерифа о слежке за Доном */
var mainGoodQuestBegin = false /* Начало основного квеста доброй ветки */
var newLifeKreig = false /* Помочь Крейгу начать новую жизнь */
var donAttention = 0 /* Шкала тревожности Дона */
var bethFallInLove = false /* Бэт влюблена в Вас */
var shtift1 = false /* Штифт 1 в верном положении */
var shtift2 = false /* Штифт 2 в верном положении */
var shtift3 = false /* Штифт 3 в верном положении */
var shtift4 = false /* Штифт 4 в верном положении */
var storageFight = false /* Согласился учавствовать в сражении на складе */
var donDeathKennyInj = false /* Отказался учавствовать в перестрелке - Дон убит, Кенни ранен */
var killDon = false /* Выполнил заказ Декера */
var raiderMainBaseKnown = false /* Узнал месторасположение главной базы Гадюк */
var mainRaiderNameKnown = false /* Узнал имя главаря Гадюк + получил противоядие */
var sheriffGreeneSecondTask = false /* Второе задание шерифа о слежке за Доном */
var donAboutRaider = false /* Дон рассказал о Хэндо */
var donAboutBase = false /* Дон рассказал о базе рейдеров */
var Lip = false /* Вы взяли Липа в напарники */
var getGrenade = false /* Получил гранату от Грина */
var meetSeed = false /* Познакомился с Сидом */
var nightPatrolKetch = false /* Пойман ночным патрулём без ключа от номера */
var inBadOldTown = false /* Зашёл в район Старого Города во время задания Декера */
var inBadOldTownSecond = false /* Зашёл в район Старого города второй раз */
var loudMurder = false /* Нашумел при убийстве Дона */
var knifeFight = false /* Борьба с Доном (смерть от ножа) */
var killDonWithKnife = false /* Убил Дона ножом */
var deckerDone = false /* Задание Декера выполнено (Кейн больше не будет разговаривать, на складе будет засада) */
var lipDialog = false /* Диалог с Липом */
var getHostage = false /* Захватил заложника */
var viperStory = false /* разговор с Хэндо */
var lightBattle = false /* В финальной битве 3 противника (злая ветка или напарник ушёл) */
var heroDead = false /* Смерть главного героя */
var TotalBOSknown = false /* Личность раскрыта (для концовок) */

/* Объект текущего прогресса для передачи данных в куки (позже решил передавать в LocalStorage, название переменной осталось прежнее) */
var cookieData = {
  ccurrentFunction: null,
  cheroName: null,
  crank: null,
  cday: 0,
  ctime: 0,
  cdaytime: null,
  cHubLeftDays: 0,
  cHubRoomLeftDays: 0,
  cHubRoomLeftDays2: 0,
  chealth: 0,
  chealth_status: null,
  cstatus: null,
  csatiety: 0,
  csatiety_status: null,
  ccans: 0,
  ccaps: 0,
  crifle_ammo: 0,
  cpistol_ammo: 0,
  cgrenade: 0,
  cstimpacks: 0,
  cbooze: 0,
  cbeer: 0,
  ctrainingStatus: false,
  cstan: false,
  cguardRoomMeeting: false,
  ctalusPermission: false,
  cmichaelFirstMeeting: false,
  crombusMeeting: false,
  cgetPowerArmor: false,
  cgetShotgun: false,
  cstationTable: false,
  cstationCupboard: false,
  cstationDead: false,
  cseeDeadPockets: false,
  cgetDisk: false,
  cgetPistol: false,
  cwastelandRoad: false,
  cmeetCaravanArmed: false,
  cbadWaterMerchant: false,
  ccreigFirstMeetGood: false,
  ccreigFirstMeetBad: false,
  ccreigAskGood: false,
  ccreigDrunked: false,
  ccreigAskGood2: false,
  cdeckerGlad: false,
  cdeckerBonus: false,
  cgetDeckerQuest: false,
  cdeckerQuest: false,
  cchangeHubLocation: false,
  cguardBasters: false,
  cgoToJail: false,
  cbethFirstMeeting: false,
  cgetHubSilencer: false,
  cbethAgree: false,
  cbethDontLoveYou: false,
  crentRoom: false,
  cdrunkardStatus: 0,
  ccrimsonCaravanFirstMeet: false,
  cangryBob: false,
  cchooseEasyWay: false,
  cmarthaFirstMeet: false,
  cadditionalTask: false,
  cBOSknown: false,
  cBOSknown2: false,
  cBOSknown3: false,
  cmarthaMeetBad: false,
  cmeetHarold: false,
  cmeetHaroldGood: false,
  charoldName: false,
  charoldAge: false,
  charoldBase: false,
  charoldHome: false,
  cgetSheriffGreeneFirstTask: false,
  csheriffGreeneFirstTask: false,
  cKennyFirstMeet: false,
  csheriffGreeneFirstTaskEasy: false,
  cangryGreene: false,
  cgetSheriffGreeneSecondTask: false,
  cmainGoodQuestBegin: false,
  cnewLifeKreig: false,
  cdonAttention: 0,
  cbethFallInLove: false,
  cshtift1: false,
  cshtift2: false,
  cshtift3: false,
  cshtift4: false,
  cstorageFight: false,
  cdonDeathKennyInj: false,
  ckillDon: false,
  craiderMainBaseKnown: false,
  cmainRaiderNameKnown: false,
  csheriffGreeneSecondTask: false,
  cdonAboutRaider: false,
  cdonAboutBase: false,
  cLip: false,
  cgetGrenade: false,
  cmeetSeed: false,
  cnightPatrolKetch: false,
  cinBadOldTown: false,
  cinBadOldTownSecond: false,
  cloudMurder: false,
  cknifeFight: false,
  ckillDonWithKnife: false,
  cdeckerDone: false,
  clipDialog: false,
  cgetHostage: false,
  cviperStory: false,
  clightBattle: false,
  cheroDead: false,
}

var cookieDataGet = {} /* Загрузка JSON с переменными из Local Storage */
var newCookieData = {} /* Преобразование JSON с переменными из Local Storage */
var saveCurFunc = null /* Загрузка сохранённой функции из Local Storage */

/* Создание объекта для сохранения в куки */
function setCookie(key, option) {
  cookieData[key] = option
  cookieData.ccurrentFunction = currentFunction
}

/* Сохранение */
$(document).on("click", "#key_save", function () {
  /* Звук нажатия */
  btn_sound()
  /* Сохранение в Local Storage */
  localStorage.setItem("savename", currentFunction)
  localStorage.setItem("savegame", JSON.stringify(cookieData))
  /* Запись об успешном сохранении */
  $("#saveload_status_text").fadeIn(0)
  document.getElementById("saveload_status_text").innerHTML = ""
  writeTextByJS("saveload_status_text", [" Успешное сохранение "], 50)
  $("#saveload_status_text").fadeOut(5000)
  // $('#saveload_status_text').fadeIn(1000);
  // // $('#saveload_status_text').fadeOut(5000);
})
$(document).on("click", "#key_save_negative", function () {
  /* Звук нажатия */
  btn_sound()
  /* Запись об успешном сохранении */
  $("#saveload_status_text").fadeIn(0)
  document.getElementById("saveload_status_text").innerHTML = ""
  writeTextByJS("saveload_status_text", [" Сохранение тут невозможно! "], 50)
  $("#saveload_status_text").fadeOut(5000)
  // $('#saveload_status_text').fadeIn(1000);
  // // $('#saveload_status_text').fadeOut(5000);
})

/* Загрузка с начального экрана */
$(document).on("click", "#key_load_new", function () {
  /* Звук нажатия */
  btn_sound()
  /* Контейнер эрана игры */
  $(".container").empty()
  var newLayout = $(
    '<div class="row"><div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 order-lg-1 order-md-3 order-sm-3 order-xs-3"><div class="q_text"><p class="text"></p></div></div><div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 order-lg-2 order-md-1 order-sm-1 order-xs-1 order-first q_pic"><div class="q_pic_image" id="pic"><img id="main_pic" src=""></div></div><div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 order-lg-3 order-md-4 order-sm-4 order-xs-4"><div class="q_keys" id="option_btn"><div class="keys_btn"><button class="btn"></button></div></div></div><div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 order-lg-4 order-md-2 order-sm-2 order-xs-2 order-first q_monitor"><div class="q_monitor_states"><p id="time"><span></span></p><p id="name"><span></span></p><p id="health"><span></span></p><p id="status"><span></span></p><p id="satiety"><span></span></p><p id="drunkenness"><span></span></p><p><span class="underlined">У Вас есть:</span></p><p id="caps"><span></span></p><p id="shotgun"><span></span></p><p id="gun"><span></span></p><p id="grenade"><span></span></p><p id="stimpack"><span></span></p><p id="antidote"><span></span></p><p id="holodisk"><span></span></p><p id="beer"><span></span></p><p id="booze"><span></span></p><p id="version"><span>Версия игры: 2.0</span></p></div></div></div><div class="row keys_slq"><div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 order-lg-1 order-md-2 order-sm-2 order-xs-2"><div class="save_load_quit_buttons text-center"><img id="key_save" src="img/revenge/blank.gif"/><img id="key_load" src="img/revenge/blank.gif"/><img id="key_quit" src="img/revenge/blank.gif"/></div></div><div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 order-lg-2 order-md-1 order-sm-1 order-xs-1 order-first save_load_screen text-center"><div class="saveload_status"><p id="saveload_status_text"></p></div></div></div><div class="row"><div class="col-lg-3 col-md-12 col-sm-12 col-xs-12"></div><div class="col-lg-8 col-md-12 col-sm-12 col-xs-12"><div class="volume volume_off text-center"><img id="vol_btn" src="img/revenge/vol_off.png"></div></div><div class="col-lg-3 col-md-12 col-sm-12 col-xs-12"></div><div class="col-lg-3 col-md-12 col-sm-12 col-xs-12"></div></div>'
  )
  $(".container").append(newLayout)
  /* Возврат функции из Local Store */
  saveCurFunc = localStorage.getItem("savename")
  saveCurFunc = eval("(" + saveCurFunc + ")")
  currentFunction = saveCurFunc

  /* Возврат переменных из Local Store */
  cookieDataGet = localStorage.getItem("savegame")
  newCookieData = JSON.parse(cookieDataGet)

  heroName = newCookieData.cheroName
  rank = newCookieData.crank
  day = newCookieData.cday
  time = newCookieData.ctime
  daytime = newCookieData.cdaytime
  health = newCookieData.chealth
  health_status = newCookieData.chealth_status
  status = newCookieData.cstatus
  satiety = newCookieData.csatiety
  satiety_status = newCookieData.csatiety_status
  cans = newCookieData.ccans
  caps = newCookieData.ccaps
  rifle_ammo = newCookieData.crifle_ammo
  pistol_ammo = newCookieData.cpistol_ammo
  grenade = newCookieData.cgrenade
  stimpacks = newCookieData.cstimpacks
  booze = newCookieData.cbooze
  beer = newCookieData.cbeer
  trainingStatus = newCookieData.ctrainingStatus
  stan = newCookieData.cstan
  guardRoomMeeting = newCookieData.cguardRoomMeeting
  talusPermission = newCookieData.ctalusPermission
  michaelFirstMeeting = newCookieData.cmichaelFirstMeeting
  rombusMeeting = newCookieData.crombusMeeting
  getPowerArmor = newCookieData.cgetPowerArmor
  getShotgun = newCookieData.cgetShotgun
  stationTable = newCookieData.cstationTable
  stationCupboard = newCookieData.cstationCupboard
  stationDead = newCookieData.cstationDead
  seeDeadPockets = newCookieData.cseeDeadPockets
  getDisk = newCookieData.cgetDisk
  getPistol = newCookieData.cgetPistol
  wastelandRoad = newCookieData.cwastelandRoad
  meetCaravanArmed = newCookieData.cmeetCaravanArmed
  badWaterMerchant = newCookieData.cbadWaterMerchant
  HubLeftDays = newCookieData.cHubLeftDays
  HubRoomLeftDays = newCookieData.cHubRoomLeftDays
  HubRoomLeftDays2 = newCookieData.cHubRoomLeftDays2
  creigFirstMeetGood = newCookieData.ccreigFirstMeetGood
  creigFirstMeetBad = newCookieData.ccreigFirstMeetBad
  creigAskGood = newCookieData.ccreigAskGood
  creigDrunked = newCookieData.ccreigDrunked
  creigAskGood2 = newCookieData.ccreigAskGood2
  deckerGlad = newCookieData.cdeckerGlad
  deckerBonus = newCookieData.cdeckerBonus
  getDeckerQuest = newCookieData.cgetDeckerQuest
  deckerQuest = newCookieData.cdeckerQuest
  changeHubLocation = newCookieData.cchangeHubLocation
  guardBasters = newCookieData.cguardBasters
  goToJail = newCookieData.cgoToJail
  bethFirstMeeting = newCookieData.cbethFirstMeeting
  getHubSilencer = newCookieData.cgetHubSilencer
  bethAgree = newCookieData.cbethAgree
  bethDontLoveYou = newCookieData.cbethDontLoveYou
  rentRoom = newCookieData.crentRoom
  drunkardStatus = newCookieData.cdrunkardStatus
  crimsonCaravanFirstMeet = newCookieData.ccrimsonCaravanFirstMeet
  angryBob = newCookieData.cangryBob
  chooseEasyWay = newCookieData.cchooseEasyWay
  marthaFirstMeet = newCookieData.cmarthaFirstMeet
  additionalTask = newCookieData.cadditionalTask
  BOSknown = newCookieData.cBOSknown
  BOSknown2 = newCookieData.cBOSknown2
  BOSknown3 = newCookieData.cBOSknown3
  marthaMeetBad = newCookieData.cmarthaMeetBad
  meetHarold = newCookieData.cmeetHarold
  meetHaroldGood = newCookieData.cmeetHaroldGood
  haroldName = newCookieData.charoldName
  haroldAge = newCookieData.charoldAge
  haroldBase = newCookieData.charoldBase
  haroldHome = newCookieData.charoldHome
  getSheriffGreeneFirstTask = newCookieData.cgetSheriffGreeneFirstTask
  sheriffGreeneFirstTask = newCookieData.csheriffGreeneFirstTask
  KennyFirstMeet = newCookieData.cKennyFirstMeet
  sheriffGreeneFirstTaskEasy = newCookieData.csheriffGreeneFirstTaskEasy
  angryGreene = newCookieData.cangryGreene
  getSheriffGreeneSecondTask = newCookieData.cgetSheriffGreeneSecondTask
  mainGoodQuestBegin = newCookieData.cmainGoodQuestBegin
  newLifeKreig = newCookieData.cnewLifeKreig
  donAttention = newCookieData.cdonAttention
  bethFallInLove = newCookieData.cbethFallInLove
  shtift1 = newCookieData.cshtift1
  shtift2 = newCookieData.cshtift2
  shtift3 = newCookieData.cshtift3
  shtift4 = newCookieData.cshtift4
  storageFight = newCookieData.cstorageFight
  donDeathKennyInj = newCookieData.cdonDeathKennyInj
  killDon = newCookieData.ckillDon
  raiderMainBaseKnown = newCookieData.craiderMainBaseKnown
  mainRaiderNameKnown = newCookieData.cmainRaiderNameKnown
  sheriffGreeneSecondTask = newCookieData.csheriffGreeneSecondTask
  donAboutRaider = newCookieData.cdonAboutRaider
  donAboutBase = newCookieData.cdonAboutBase
  Lip = newCookieData.cLip
  getGrenade = newCookieData.cgetGrenade
  meetSeed = newCookieData.cmeetSeed
  nightPatrolKetch = newCookieData.cnightPatrolKetch
  inBadOldTown = newCookieData.cinBadOldTown
  inBadOldTownSecond = newCookieData.cinBadOldTownSecond
  loudMurder = newCookieData.cloudMurder
  knifeFight = newCookieData.cknifeFight
  killDonWithKnife = newCookieData.ckillDonWithKnife
  deckerDone = newCookieData.cdeckerDone
  lipDialog = newCookieData.clipDialog
  getHostage = newCookieData.cgetHostage
  viperStory = newCookieData.cviperStory
  lightBattle = newCookieData.clightBattle
  heroDead = newCookieData.cheroDead

  /* Оперативный объект приравнивается загруженному */
  cookieData = newCookieData

  currentFunction()
  $("#key_save_negative").attr("id", "key_save")

  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#time span").remove()
  change_time(0)
  $("#name span").remove()
  change_name(rank, heroName)
  $("#health span").remove()
  lower_health(0)
  $("#status span").remove()

  var new_status = $("<span>" + status + "</span>")
  $("#status").append(new_status)
  new_status.hide()
  new_status.fadeIn(0)

  $("#satiety span").remove()
  lower_satiety(0)
  $("#drunkenness span").remove()
  lower_drunkardStatus(0)
  $("#caps span").remove()
  if (caps > 0) {
    raise_caps(0)
  }
  $("#shotgun span").remove()
  if (getShotgun === true || rifle_ammo > 0) {
    change_shotgun()
  }
  $("#gun span").remove()
  if (getPistol === true || pistol_ammo > 0) {
    change_gun()
  }
  $("#grenade span").remove()
  if (grenade > 0) {
    raise_grenade(0)
  }
  $("#stimpack span").remove()
  if (stimpacks > 0) {
    raise_stimpacks(0)
  }
  $("#antidote span").remove()
  if (mainRaiderNameKnown === true) {
    add_antidote()
  }
  $("#holodisk span").remove()
  if (getDisk === true) {
    add_disk()
  }
  $("#beer span").remove()
  if (beer > 0) {
    raise_beer(0)
  }
  $("#booze span").remove()
  if (booze > 0) {
    raise_booze(0)
  }

  /* Запись об успешной загрузке */
  $("#saveload_status_text").fadeIn(0)
  document.getElementById("saveload_status_text").innerHTML = ""
  writeTextByJS("saveload_status_text", [" Успешная загрузка сохранения "], 50)
  $("#saveload_status_text").fadeOut(5000)
  // $('#saveload_status_text').fadeIn(1000);
  // $('#saveload_status_text').fadeOut(5000);

  // Автовоспроизведение музыки
  if ($(".btn").length > 0) {
    setTimeout(function () {
      if ($(".volume").hasClass("volume_off")) {
        $("#vol_btn").trigger("click")
      }
    }, 5000)
  }
})

/* Загрузка */
$(document).on("click", "#key_load", function () {
  /* Звук нажатия */
  btn_sound()
  /* Возврат функции из Local Store */
  saveCurFunc = localStorage.getItem("savename")
  saveCurFunc = eval("(" + saveCurFunc + ")")
  currentFunction = saveCurFunc

  /* Возврат переменных из Local Store */
  cookieDataGet = localStorage.getItem("savegame")
  newCookieData = JSON.parse(cookieDataGet)

  heroName = newCookieData.cheroName
  rank = newCookieData.crank
  day = newCookieData.cday
  time = newCookieData.ctime
  daytime = newCookieData.cdaytime
  health = newCookieData.chealth
  health_status = newCookieData.chealth_status
  status = newCookieData.cstatus
  satiety = newCookieData.csatiety
  satiety_status = newCookieData.csatiety_status
  cans = newCookieData.ccans
  caps = newCookieData.ccaps
  rifle_ammo = newCookieData.crifle_ammo
  pistol_ammo = newCookieData.cpistol_ammo
  grenade = newCookieData.cgrenade
  stimpacks = newCookieData.cstimpacks
  booze = newCookieData.cbooze
  beer = newCookieData.cbeer
  trainingStatus = newCookieData.ctrainingStatus
  stan = newCookieData.cstan
  guardRoomMeeting = newCookieData.cguardRoomMeeting
  talusPermission = newCookieData.ctalusPermission
  michaelFirstMeeting = newCookieData.cmichaelFirstMeeting
  rombusMeeting = newCookieData.crombusMeeting
  getPowerArmor = newCookieData.cgetPowerArmor
  getShotgun = newCookieData.cgetShotgun
  stationTable = newCookieData.cstationTable
  stationCupboard = newCookieData.cstationCupboard
  stationDead = newCookieData.cstationDead
  seeDeadPockets = newCookieData.cseeDeadPockets
  getDisk = newCookieData.cgetDisk
  getPistol = newCookieData.cgetPistol
  wastelandRoad = newCookieData.cwastelandRoad
  meetCaravanArmed = newCookieData.cmeetCaravanArmed
  badWaterMerchant = newCookieData.cbadWaterMerchant
  HubLeftDays = newCookieData.cHubLeftDays
  HubRoomLeftDays = newCookieData.cHubRoomLeftDays
  HubRoomLeftDays2 = newCookieData.cHubRoomLeftDays2
  creigFirstMeetGood = newCookieData.ccreigFirstMeetGood
  creigFirstMeetBad = newCookieData.ccreigFirstMeetBad
  creigAskGood = newCookieData.ccreigAskGood
  creigDrunked = newCookieData.ccreigDrunked
  creigAskGood2 = newCookieData.ccreigAskGood2
  deckerGlad = newCookieData.cdeckerGlad
  deckerBonus = newCookieData.cdeckerBonus
  getDeckerQuest = newCookieData.cgetDeckerQuest
  deckerQuest = newCookieData.cdeckerQuest
  changeHubLocation = newCookieData.cchangeHubLocation
  guardBasters = newCookieData.cguardBasters
  goToJail = newCookieData.cgoToJail
  bethFirstMeeting = newCookieData.cbethFirstMeeting
  getHubSilencer = newCookieData.cgetHubSilencer
  bethAgree = newCookieData.cbethAgree
  bethDontLoveYou = newCookieData.cbethDontLoveYou
  rentRoom = newCookieData.crentRoom
  drunkardStatus = newCookieData.cdrunkardStatus
  crimsonCaravanFirstMeet = newCookieData.ccrimsonCaravanFirstMeet
  angryBob = newCookieData.cangryBob
  chooseEasyWay = newCookieData.cchooseEasyWay
  marthaFirstMeet = newCookieData.cmarthaFirstMeet
  additionalTask = newCookieData.cadditionalTask
  BOSknown = newCookieData.cBOSknown
  BOSknown2 = newCookieData.cBOSknown2
  BOSknown3 = newCookieData.cBOSknown3
  marthaMeetBad = newCookieData.cmarthaMeetBad
  meetHarold = newCookieData.cmeetHarold
  meetHaroldGood = newCookieData.cmeetHaroldGood
  haroldName = newCookieData.charoldName
  haroldAge = newCookieData.charoldAge
  haroldBase = newCookieData.charoldBase
  haroldHome = newCookieData.charoldHome
  getSheriffGreeneFirstTask = newCookieData.cgetSheriffGreeneFirstTask
  sheriffGreeneFirstTask = newCookieData.csheriffGreeneFirstTask
  KennyFirstMeet = newCookieData.cKennyFirstMeet
  sheriffGreeneFirstTaskEasy = newCookieData.csheriffGreeneFirstTaskEasy
  angryGreene = newCookieData.cangryGreene
  getSheriffGreeneSecondTask = newCookieData.cgetSheriffGreeneSecondTask
  mainGoodQuestBegin = newCookieData.cmainGoodQuestBegin
  newLifeKreig = newCookieData.cnewLifeKreig
  donAttention = newCookieData.cdonAttention
  bethFallInLove = newCookieData.cbethFallInLove
  shtift1 = newCookieData.cshtift1
  shtift2 = newCookieData.cshtift2
  shtift3 = newCookieData.cshtift3
  shtift4 = newCookieData.cshtift4
  storageFight = newCookieData.cstorageFight
  donDeathKennyInj = newCookieData.cdonDeathKennyInj
  killDon = newCookieData.ckillDon
  raiderMainBaseKnown = newCookieData.craiderMainBaseKnown
  mainRaiderNameKnown = newCookieData.cmainRaiderNameKnown
  sheriffGreeneSecondTask = newCookieData.csheriffGreeneSecondTask
  donAboutRaider = newCookieData.cdonAboutRaider
  donAboutBase = newCookieData.cdonAboutBase
  Lip = newCookieData.cLip
  getGrenade = newCookieData.cgetGrenade
  meetSeed = newCookieData.cmeetSeed
  nightPatrolKetch = newCookieData.cnightPatrolKetch
  inBadOldTown = newCookieData.cinBadOldTown
  inBadOldTownSecond = newCookieData.cinBadOldTownSecond
  loudMurder = newCookieData.cloudMurder
  knifeFight = newCookieData.cknifeFight
  killDonWithKnife = newCookieData.ckillDonWithKnife
  deckerDone = newCookieData.cdeckerDone
  lipDialog = newCookieData.clipDialog
  getHostage = newCookieData.cgetHostage
  viperStory = newCookieData.cviperStory
  lightBattle = newCookieData.clightBattle
  heroDead = newCookieData.cheroDead

  /* Оперативный объект приравнивается загруженному */
  cookieData = newCookieData

  currentFunction()
  $("#key_save_negative").attr("id", "key_save")

  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#time span").remove()
  change_time(0)
  $("#name span").remove()
  change_name(rank, heroName)
  $("#health span").remove()
  lower_health(0)
  $("#status span").remove()

  var new_status = $("<span>" + status + "</span>")
  $("#status").append(new_status)
  new_status.hide()
  new_status.fadeIn(0)

  $("#satiety span").remove()
  lower_satiety(0)
  $("#drunkenness span").remove()
  lower_drunkardStatus(0)
  $("#caps span").remove()
  if (caps > 0) {
    raise_caps(0)
  }
  $("#shotgun span").remove()
  if (getShotgun === true || rifle_ammo > 0) {
    change_shotgun()
  }
  $("#gun span").remove()
  if (getPistol === true || pistol_ammo > 0) {
    change_gun()
  }
  $("#grenade span").remove()
  if (grenade > 0) {
    raise_grenade(0)
  }
  $("#stimpack span").remove()
  if (stimpacks > 0) {
    raise_stimpacks(0)
  }
  $("#antidote span").remove()
  if (mainRaiderNameKnown === true) {
    add_antidote()
  }
  $("#holodisk span").remove()
  if (getDisk === true) {
    add_disk()
  }
  $("#beer span").remove()
  if (beer > 0) {
    raise_beer(0)
  }
  $("#booze span").remove()
  if (booze > 0) {
    raise_booze(0)
  }

  /* Запись об успешной загрузке */
  $("#saveload_status_text").fadeIn(0)
  document.getElementById("saveload_status_text").innerHTML = ""
  writeTextByJS("saveload_status_text", [" Успешная загрузка сохранения "], 50)
  $("#saveload_status_text").fadeOut(5000)
  $("#saveload_status_text").fadeIn(1000)
  $("#saveload_status_text").fadeOut(5000)
})

// Тестирование: перезапуск
function restart() {
  change_image("img/revenge/restart.jpg")
  change_text(
    "<p>К сожалению, Вам так и не удалось пройти игру до конца. Вы можете начать <span class='yes'>заново</span> или <span class='yes'>загрузиться</span> на последнюю точку сохранения.</p>"
  )
  change_buttons({ "Начать сначала": reloadPage })
  $("#key_save").attr("id", "key_save_negative")
}

// Функция перезагрузки страницы
function reloadPage() {
  location.reload()
}

/* ФУНКЦИИ УПРАВЛЕНИЯ СОСТОЯНИЯМИ */

/* Смена Монитора состояния */
/* Календарь и усталость */
function change_time(new_time) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#time span").remove()
  $("#status span").remove()
  /* Смена счётчика часов */
  time = time + new_time
  /* Условие смены отрезка суток */
  if (time === 0 || time < 1) {
    daytime = "Полночь"
    status = "У Вас слипаются глаза"
  } else if (time === 1 || time < 4) {
    daytime = "Глубокая ночь"
    status = "Вы падаете с ног от усталости"
  } else if (time === 4 || time < 6) {
    daytime = "Раннее утро"
    status = "Вы бодры и полны сил"
  } else if (time === 6 || time < 10) {
    daytime = "Утро"
    status = "Вы бодры и полны сил"
  } else if (time === 10 || time < 12) {
    daytime = "Позднее утро"
    status = "Вы полны сил"
  } else if (time === 12 || time < 13) {
    daytime = "Полдень"
    status = "Вы полны сил"
  } else if (time === 13 || time < 16) {
    daytime = "Разгар дня"
    status = "Вы слегка притомились"
  } else if (time === 16 || time < 19) {
    daytime = "Вечер"
    status = "Вы устали"
  } else if (time === 19 || time < 20) {
    daytime = "Сумерки"
    status = "Вы очень устали"
  } else if (time === 20 || time < 22) {
    daytime = "Ночь"
    status = "Вы зеваете"
  } else if (time === 22 || time < 23.99) {
    daytime = "Поздняя ночь"
    status = "Вы хотите спать"
  }
  /* 24 часа в сутках */
  if (time > 23.9) {
    time = 0
    day = day + 1
  }
  /* Запись в объект куки */
  setCookie("ctime", time)
  setCookie("cday", day)
  /* Отображение времени */
  var new_daytime = $(
    "<span>" + "2155 г. - День " + day + " - " + daytime + "</span>"
  )
  $("#time").append(new_daytime)
  new_daytime.hide()
  new_daytime.fadeIn(0)
  /* Отображение бодрости */
  var new_status = $("<span>" + status + "</span>")
  $("#status").append(new_status)
  new_status.hide()
  new_status.fadeIn(0)
}

// Звание и имя ГГ
function change_name(new_rank, name) {
  rank = new_rank
  heroName = String(name)

  // Сбрасываем скролл
  $(".q_monitor_states").scrollTop(0)

  // Удаляем старые элементы
  $("#name").empty()

  // Создаем безопасные элементы и вставляем текст через .text()
  var $rankSpan = $("<span>").addClass("underlined").text(rank)
  var $space = $("<span>").text(" ")
  var $heroSpan = $("<span>").addClass("heroNameColor").text(heroName)

  var $container = $("<span>")
    .append($rankSpan)
    .append($space)
    .append($heroSpan)

  $("#name").append($container)
  $container.hide().fadeIn(200)

  // Сохраняем куки безопасно — кодируем значение
  setCookie("crank", encodeURIComponent(rank))
  setCookie("cheroName", encodeURIComponent(heroName))
}

// Здоровье
function lower_health(health_number) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#health span").remove()
  health -= health_number
  if (health > 100) {
    health = 100
  }
  /* Запись в объект куки */
  setCookie("chealth", health)
  if (health === 100) {
    health_status = "Вы абсолютно здоровы"
  } else if (health === 99 || health > 90) {
    health_status = "У Вас царапина"
  } else if (health === 90 || health > 60) {
    health_status = "Вы ранены"
  } else if (health === 60 || health > 35) {
    health_status = "Вы тяжело ранены"
  } else if (health === 35 || health > 15) {
    health_status = "Вы в критическом состоянии"
  } else if (health === 15 || health > 0) {
    health_status = "Вы умираете"
  } else if (health === 0 || health < 0) {
    health_status = "Вы погибли"
  }
  var new_health_status = $("<span>" + health_status + "</span>")
  $("#health").append(new_health_status)
  new_health_status.hide()
  new_health_status.fadeIn(0)
}
function raise_health(health_number) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#health span").remove()
  health += health_number
  if (health > 100) {
    health = 100
  }
  /* Запись в объект куки */
  setCookie("chealth", health)
  if (health === 100) {
    health_status = "Вы абсолютно здоровы"
  } else if (health === 99 || health > 90) {
    health_status = "У Вас царапина"
  } else if (health === 90 || health > 75) {
    health_status = "Вы ранены"
  } else if (health === 75 || health > 35) {
    health_status = "Вы тяжело ранены"
  } else if (health === 35 || health > 15) {
    health_status = "Вы в критическом состоянии"
  } else if (health === 15 || health > 0) {
    health_status = "Вы умираете"
  } else if (health === 0 || health < 0) {
    health_status = "Вы погибли"
  }
  var new_health_status = $("<span>" + health_status + "</span>")
  $("#health").append(new_health_status)
  new_health_status.hide()
  new_health_status.fadeIn(0)
}

/* Изменение сытости */
function raise_satiety(satiety_number) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#satiety span").remove()
  satiety += satiety_number
  if (satiety > 4) {
    satiety = 4
  }
  /* Запись в объект куки */
  setCookie("csatiety", satiety)
  if (satiety === 4) {
    satiety_status = "Вы сыты"
  } else if (satiety === 3) {
    satiety_status = "Вы проголодались"
  } else if (satiety === 2) {
    satiety_status = "Вы сьели бы слона"
  } else if (satiety === 1 || satiety < 0) {
    satiety_status = "Вы падаете в годный обморок"
  }
  var new_satiety_status = $("<span>" + satiety_status + "</span>")
  $("#satiety").append(new_satiety_status)
  new_satiety_status.hide()
  new_satiety_status.fadeIn(0)
}

function lower_satiety(satiety_number) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#satiety span").remove()
  satiety -= satiety_number
  if (satiety < 0) {
    satiety = 0
  }
  /* Запись в объект куки */
  setCookie("csatiety", satiety)
  if (satiety === 4) {
    satiety_status = "Вы сыты"
  } else if (satiety === 3) {
    satiety_status = "Вы проголодались"
  } else if (satiety === 2) {
    satiety_status = "Вы сьели бы слона"
  } else if (satiety === 1) {
    satiety_status = "Вы падаете в годный обморок"
  } else if (satiety === 0) {
    satiety_status = "Вы умираете от голода"
  }
  var new_satiety_status = $("<span>" + satiety_status + "</span>")
  $("#satiety").append(new_satiety_status)
  new_satiety_status.hide()
  new_satiety_status.fadeIn(0)
}

/* Опьянение */
function raise_drunkardStatus(drunkenness_number) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#drunkenness span").remove()
  drunkardStatus += drunkenness_number
  if (drunkardStatus > 4) {
    drunkardStatus = 4
  }
  /* Запись в объект куки */
  setCookie("cdrunkardStatus", drunkardStatus)
  if (drunkardStatus === 0) {
    drunkenness_status = "Вы трезвы" /* Не будет отображаться */
  } else if (drunkardStatus === 1) {
    drunkenness_status = "Вам лучше не садиться за руль"
  } else if (drunkardStatus === 2) {
    drunkenness_status = "Вы навеселе"
  } else if (drunkardStatus === 3) {
    drunkenness_status = "Вы нарезались"
  } else if (drunkardStatus === 4) {
    drunkenness_status = "Вы ничего не помните"
  }
  var new_drunkenness_status = $("<span>" + drunkenness_status + "</span>")
  $("#drunkenness").append(new_drunkenness_status)
  new_drunkenness_status.hide()
  new_drunkenness_status.fadeIn(0)
  if (drunkardStatus === 0) {
    $("#drunkenness span").remove()
  }
}
function lower_drunkardStatus(drunkenness_number) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#drunkenness span").remove()
  drunkardStatus -= drunkenness_number
  if (drunkardStatus < 0) {
    drunkardStatus = 0
  }
  /* Запись в объект куки */
  setCookie("cdrunkardStatus", drunkardStatus)
  if (drunkardStatus === 0) {
    drunkenness_status = "Вы трезвы" /* Не будет отображаться */
  } else if (drunkardStatus === 1) {
    drunkenness_status = "Вам лучше не садиться за руль"
  } else if (drunkardStatus === 2) {
    drunkenness_status = "Вы навеселе"
  } else if (drunkardStatus === 3) {
    drunkenness_status = "Вы нарезались"
  } else if (drunkardStatus === 4) {
    drunkenness_status = "Вы ничего не помните"
  }
  var new_drunkenness_status = $("<span>" + drunkenness_status + "</span>")
  $("#drunkenness").append(new_drunkenness_status)
  new_drunkenness_status.hide()
  new_drunkenness_status.fadeIn(0)
  if (drunkardStatus === 0) {
    $("#drunkenness span").remove()
  }
}

/* ИНВЕНТАРЬ */
/* Крышки в инвентаре */
function raise_caps(caps_number) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#caps span").remove()
  caps += caps_number
  /* Запись в объект куки */
  setCookie("ccaps", caps)
  var new_caps_status = $("<span>" + "Крышки: " + caps + "</span>")
  $("#caps").append(new_caps_status)
  new_caps_status.hide()
  new_caps_status.fadeIn(0)
}
function lower_caps(caps_number) {
  $("#caps span").remove()
  caps -= caps_number
  /* Запись в объект куки */
  setCookie("ccaps", caps)
  var new_caps_status = $("<span>" + "Крышки: " + caps + "</span>")
  $("#caps").append(new_caps_status)
  new_caps_status.hide()
  new_caps_status.fadeIn(0)
}

/* Пистолет в инвентаре */
function change_gun() {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#gun span").remove()
  var new_gun_status
  if ((getPistol === false) & (getHubSilencer === false)) {
    new_gun_status = $(
      "<span>" + "Патроны для пистолета: " + pistol_ammo + "</span>"
    )
  } else if ((getPistol === false) & (getHubSilencer === true)) {
    new_gun_status = $(
      "<span>" + "Глушитель. Патроны для пистолета: " + pistol_ammo + "</span>"
    )
  } else if ((getPistol === true) & (getHubSilencer === false)) {
    new_gun_status = $(
      "<span>" + "Пистолет." + " Патроны: " + pistol_ammo + " шт." + "</span>"
    )
  } else if ((getPistol === true) & (getHubSilencer === true)) {
    new_gun_status = $(
      "<span>" +
        "Пистолет с глушителем." +
        " Патроны: " +
        pistol_ammo +
        " шт." +
        "</span>"
    )
  }
  $("#gun").append(new_gun_status)
  new_gun_status.hide()
  new_gun_status.fadeIn(0)
  /* Запись в объект куки */
  setCookie("cgetPistol", getPistol)
  setCookie("cgetHubSilencer", getHubSilencer)
  setCookie("cpistol_ammo", pistol_ammo)
}

/* Дробовик в инвентаре */
function change_shotgun() {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#shotgun span").remove()
  var new_shotgun_status
  if (getShotgun === false) {
    $("#shotgun span").remove()
  } else {
    new_shotgun_status = $(
      "<span>" + "Дробовик." + " Патроны: " + rifle_ammo + " шт." + "</span>"
    )
  }
  $("#shotgun").append(new_shotgun_status)
  new_shotgun_status.hide()
  new_shotgun_status.fadeIn(0)
  /* Запись в объект куки */
  setCookie("cgetShotgun", getShotgun)
  setCookie("crifle_ammo", rifle_ammo)
}
function throw_shotgun() {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#shotgun span").remove()
  getShotgun = false
  /* Запись в объект куки */
  setCookie("cgetShotgun", getShotgun)
}

/* Граната в инвентаре */
function raise_grenade(grenade_number) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#grenade span").remove()
  grenade += grenade_number
  getGrenade = true
  var new_grenade_status = $("<span>Граната</span>")
  $("#grenade").append(new_grenade_status)
  new_grenade_status.hide()
  new_grenade_status.fadeIn(0)
  /* Запись в объект куки */
  setCookie("cgrenade", grenade)
  setCookie("cgetGrenade", getGrenade)
}
function low_grenade(grenade_number) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  grenade -= grenade_number
  getGrenade = false
  $("#grenade span").remove()
  /* Запись в объект куки */
  setCookie("cgrenade", grenade)
  setCookie("cgetGrenade", getGrenade)
}

/* Стимуляторы в инвентаре */
function raise_stimpacks(stimpack_number) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#stimpack span").remove()
  stimpacks += stimpack_number
  var new_stimpack_status = $(
    "<span>" + "Стимуляторы: " + stimpacks + " шт." + "</span>"
  )
  $("#stimpack").append(new_stimpack_status)
  new_stimpack_status.hide()
  new_stimpack_status.fadeIn(0)
  /* Запись в объект куки */
  setCookie("cstimpacks", stimpacks)
}
function lower_stimpacks(stimpack_number) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#stimpack span").remove()
  stimpacks -= stimpack_number
  var new_stimpack_status = $(
    "<span>" + "Стимуляторы: " + stimpacks + " шт." + "</span>"
  )
  $("#stimpack").append(new_stimpack_status)
  new_stimpack_status.hide()
  new_stimpack_status.fadeIn(0)
  if (stimpacks === 0) {
    $("#stimpack span").remove()
  }
  /* Запись в объект куки */
  setCookie("cstimpacks", stimpacks)
}

/* Противоядие в инвентаре */
function add_antidote() {
  $(".q_monitor_states").scrollTop(0)
  $("#antidote span").remove()
  var new_antidote_status = $("<span>" + "Противоядие" + "</span>")
  $("#antidote").append(new_antidote_status)
  new_antidote_status.hide()
  new_antidote_status.fadeIn(0)
}
function remove_antidote() {
  mainRaiderNameKnown = false
  $(".q_monitor_states").scrollTop(0)
  $("#antidote span").remove()
  /* Запись в объект куки */
  setCookie("cmainRaiderNameKnown", mainRaiderNameKnown)
}

/* Голодиск в инвентаре */
function add_disk() {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#holodisk span").remove()
  getDisk = true
  var new_holodisk_status = $("<span>" + "Голодиск" + "</span>")
  $("#holodisk").append(new_holodisk_status)
  new_holodisk_status.hide()
  new_holodisk_status.fadeIn(0)
  /* Запись в объект куки */
  setCookie("cgetDisk", getDisk)
}

/* Пиво в инвентаре */
function raise_beer(beer_number) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#beer span").remove()
  beer += beer_number
  var new_beer_status = $("<span>" + "Пиво: " + beer + " шт." + "</span>")
  $("#beer").append(new_beer_status)
  new_beer_status.hide()
  new_beer_status.fadeIn(0)
  /* Запись в объект куки */
  setCookie("cbeer", beer)
}
function lower_beer(beer_number) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#beer span").remove()
  beer -= beer_number
  var new_beer_status = $("<span>" + "Пиво: " + beer + " шт." + "</span>")
  $("#beer").append(new_beer_status)
  new_beer_status.hide()
  new_beer_status.fadeIn(0)
  if (beer === 0) {
    $("#beer span").remove()
  }
  /* Запись в объект куки */
  setCookie("cbeer", beer)
}
/* Самогон в инвентаре */
function raise_booze(booze_number) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#booze span").remove()
  booze += booze_number
  var new_booze_status = $("<span>" + "Самогон: " + booze + " шт." + "</span>")
  $("#booze").append(new_booze_status)
  new_booze_status.hide()
  new_booze_status.fadeIn(0)
  /* Запись в объект куки */
  setCookie("cbooze", booze)
}
function lower_booze(booze_number) {
  $(".q_monitor_states").scrollTop(0) /*  Возврат скролла вверх */
  $("#booze span").remove()
  booze -= booze_number
  var new_booze_status = $("<span>" + "Самогон: " + booze + " шт." + "</span>")
  $("#booze").append(new_booze_status)
  new_booze_status.hide()
  new_booze_status.fadeIn(0)
  if (booze === 0) {
    $("#booze span").remove()
  }
  /* Запись в объект куки */
  setCookie("cbooze", booze)
}

/* Изъятие и возврат всех вещей из инвентаря в заключении */
function removeItems() {
  $("#caps span").addClass("hideInv")
  $("#shotgun span").addClass("hideInv")
  $("#gun span").addClass("hideInv")
  $("#grenade span").addClass("hideInv")
  $("#stimpack span").addClass("hideInv")
  $("#antidote span").addClass("hideInv")
  $("#holodisk span").addClass("hideInv")
  $("#beer span").addClass("hideInv")
  $("#booze span").addClass("hideInv")
}
function addItems() {
  $("#caps span").removeClass("hideInv")
  $("#shotgun span").removeClass("hideInv")
  $("#gun span").removeClass("hideInv")
  $("#grenade span").removeClass("hideInv")
  $("#stimpack span").removeClass("hideInv")
  $("#antidote span").removeClass("hideInv")
  $("#holodisk span").removeClass("hideInv")
  $("#beer span").removeClass("hideInv")
  $("#booze span").removeClass("hideInv")
}

/* Смерть */
function death() {
  lower_health(100)
  $("#status span").remove()
  $("#satiety span").remove()
  $("#drunkenness span").remove()
  removeItems()
}

/* UI действия */

// Смена текста на начальном экране
function change_greet_text(new_text) {
  $("p.greet_text p").remove()
  var new_txt = $(new_text)
  $("p.greet_text").append(new_txt)
  new_txt.hide()
  new_txt.fadeIn(200)
  $("p.greet_text").scrollTop(0) /* Возврат скролла вверх */
}

// Смена текста
function change_text(new_text) {
  $("p.text p").remove()
  var new_txt = $(new_text)
  $("p.text").append(new_txt)
  new_txt.hide()
  new_txt.fadeIn(200)
  $("p.text").scrollTop(0) /* Возврат скролла вверх */
}

// Смена текста в ЭПИЛОГЕ
function change_final_text(new_text) {
  $("p.final_text p").remove()
  var new_txt = $(new_text)
  $("p.final_text").append(new_txt)
  new_txt.hide()
  new_txt.fadeIn(3000)
  $("p.final_text").scrollTop(0) /* Возврат скролла вверх */
}

// Смена текста после ЭПИЛОГА
function change_final_credits(new_text) {
  $("div.final_credits p").remove()
  var new_txt = $(new_text)
  $("div.final_credits").append(new_txt)
  new_txt.hide()
  new_txt.fadeIn(3000)
  $("div.final_credits").scrollTop(0) /* Возврат скролла вверх */
}

// Смена изображения
function change_image(new_image_url) {
  $("#main_pic").attr("src", new_image_url)
}

function change_final_image(new_image_url) {
  $("#final_main_pic").attr("src", new_image_url)
}

// Смена кнопок
function change_buttons(buttons) {
  $(".keys_btn").scrollTop(0) /*  Возврат скролла вверх */
  button_div = $("div.keys_btn")
  button_div.empty()
  for (var btn_name in buttons) {
    var new_button = $('<button class="btn"></button>' + "<br>")
    new_button.text(btn_name)
    new_button.click(buttons[btn_name])
    button_div.append(new_button)
    button_div.append(" ")
  }
}

/* Кнопка выхода на начальном экране */
$(document).on("click", "#key_quit_new", function () {
  window.location = "games.html"
})

/* Кнопка выхода */
$(document).on("click", "#key_quit", function () {
  window.location = "games.html"
})

// Эффект печатающей машинки
function writeTextByJS(id, text, speed) {
  var ele = document.getElementById(id),
    txt = text.join("").split("")
  var interval = setInterval(
    function () {
      if (!txt[0]) {
        return clearInterval(interval)
      }
      ele.innerHTML += txt.shift()
    },
    speed != undefined ? speed : 100
  )
  return false
}

// Звук кнопок
function btn_sound() {
  var player = new Audio("music/button.mp3")
  player.play()
}

/* Музыка */
var playing = false // текущее состояние плеера
var player = new Audio("music/gorge.mp3")
player.preload = "auto"
player.addEventListener("ended", function () {
  // слушаем окончание трека
  playing = false
  $("#vol_btn").attr("src", "img/revenge/vol_off.png")
  $(".volume").removeClass("volume_on")
  $(".volume").addClass("volume_off")
  btn_sound()
})

$(document).on("click", "#vol_btn", function () {
  btn_sound()
  if ($("div.volume").hasClass("volume_off")) {
    $("#vol_btn").attr("src", "img/revenge/vol_on.png")
    $(".volume").removeClass("volume_off")
    $(".volume").addClass("volume_on")

    $("#saveload_status_text").fadeIn(0)
    document.getElementById("saveload_status_text").innerHTML = ""
    writeTextByJS("saveload_status_text", [" Музыка включена "], 50)
    $("#saveload_status_text").fadeOut(5000)
    player.play()
  } else {
    $("#vol_btn").attr("src", "img/revenge/vol_off.png")
    $(".volume").removeClass("volume_on")
    $(".volume").addClass("volume_off")
    $("#saveload_status_text").fadeIn(0)
    document.getElementById("saveload_status_text").innerHTML = ""
    writeTextByJS("saveload_status_text", [" Музыка остановлена "], 50)
    $("#saveload_status_text").fadeOut(5000)
    player.pause()
  }
  playing = !playing
})
