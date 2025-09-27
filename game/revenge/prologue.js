/* ПРОЛОГ */
function the_beginning() {
  heroName = document.getElementById("hName").value
  $(".revenge_body").scrollTop(0) /*  Возврат скролла вверх */
  $(".container").fadeOut({
    duration: 3000,
    easing: "linear",
    complete: function () {
      $(".container").empty()
      var newLayout = $(
        '<div class="row"><div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 order-lg-1 order-md-3 order-sm-3 order-xs-3"><div class="q_text"><p class="text"></p></div></div><div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 order-lg-2 order-md-1 order-sm-1 order-xs-1 order-first q_pic"><div class="q_pic_image" id="pic"><img id="main_pic" src=""></div></div><div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 order-lg-3 order-md-4 order-sm-4 order-xs-4"><div class="q_keys" id="option_btn"><div class="keys_btn"><button class="btn"></button></div></div></div><div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 order-lg-4 order-md-2 order-sm-2 order-xs-2 order-first q_monitor"><div class="q_monitor_states"><p id="time"><span></span></p><p id="name"><span></span></p><p id="health"><span></span></p><p id="status"><span></span></p><p id="satiety"><span></span></p><p id="drunkenness"><span></span></p><p><span class="underlined">У Вас есть:</span></p><p id="caps"><span></span></p><p id="shotgun"><span></span></p><p id="gun"><span></span></p><p id="grenade"><span></span></p><p id="stimpack"><span></span></p><p id="antidote"><span></span></p><p id="holodisk"><span></span></p><p id="beer"><span></span></p><p id="booze"><span></span></p><p id="version"><span>Версия игры: 1.1.1</span></p></div></div></div><div class="row keys_slq"><div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 order-lg-1 order-md-2 order-sm-2 order-xs-2"><div class="save_load_quit_buttons text-center"><img id="key_save_negative" src="img/revenge/blank.gif"/><img id="key_load" src="img/revenge/blank.gif"/><img id="key_quit" src="img/revenge/blank.gif"/></div></div><div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 order-lg-2 order-md-1 order-sm-1 order-xs-1 order-first save_load_screen text-center"><div class="saveload_status"><p id="saveload_status_text"></p></div></div></div><div class="row"><div class="col-lg-3 col-md-12 col-sm-12 col-xs-12"></div><div class="col-lg-8 col-md-12 col-sm-12 col-xs-12"><div class="volume volume_off text-center"><img id="vol_btn" src="img/revenge/vol_off.png"></div></div><div class="col-lg-3 col-md-12 col-sm-12 col-xs-12"></div><div class="col-lg-3 col-md-12 col-sm-12 col-xs-12"></div></div>'
      )
      $(".container").append(newLayout)
      change_name("Младший рыцарь", heroName)
      change_name(rank, heroName)
      setTimeout(function () {
        $("#vol_btn").trigger("click")
      }, 1000)
      change_time(0)
      lower_health(0)
      lower_satiety(0)
      change_image("img/revenge/pic_1.jpg")
      change_text(
        "<p>Остатки сна безбожно стираются из Вашей памяти дьявольской трескотнёй самодельного будильника. Несколько секунд Вы хлопали глазами. <span class='yes'>Сосед</span> по кубрику зашевелился под своим одеялом.</p>"
      )
      change_buttons({ Осмотреться: seeAround, "Сделать зарядку": training })
      /* Сохранение */
      currentFunction =
        the_beginning /* Сохранение имени функции в будущий объект куки */
      setCookie("ccurrentFunction", currentFunction)
      $(".container").fadeIn(3000)
    },
  })
}

function seeAround() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  $("#key_save_negative").attr("id", "key_save")
  change_time(0.01)
  change_image("img/revenge/pic_2.jpg")
  change_text(
    "<p>Вы жили в стандартном кубрике <span class='yes'>Братства</span>. Всё было просто и по-военному. Три койки, стол, шкафчики для личных вещей и совмещённый <span class='yes'>санузел</span>. Несмотря на наличие трёх коек, Вы жили вдвоём с сослуживцем <span class='yes'>Стэном</span>. Он – Ваш коллега по ремонтному цеху и добрый товарищ. Третий сосед в очередной раз подал рапорт на перевод в другую комнату.</p>"
  )
  if (trainingStatus === true) {
    change_buttons({ Осмотреться: seeAround, "Пойти в душ": bath })
  } else {
    change_buttons({ "Сделать зарядку": training })
  }
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = seeAround
  setCookie("ccurrentFunction", currentFunction)
}

function training() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  $("#key_save_negative").attr("id", "key_save")
  change_time(0.3)
  change_image("img/revenge/pic_2a.jpg")
  change_text(
    "<p>Вы спрыгнули с кровати и принялись махать руками и ногами, разминая сонное тело. Ваш друг присоединился к Вам. За простыми упражнениями последовали сложные – поднятие гантелей и тяжёлых гирь. Под конец вы надели перчатки и стали от души молотить друг друга.</p><p>Наконец с утренней тренировкой было покончено. Тело приятно гудело, настроение стало приподнятым, а Вы сами себя чувствовали бодро.</p>"
  )
  trainingStatus = true
  change_buttons({ Осмотреться: seeAround, "Пойти в душ": bath })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = training
  setCookie("ccurrentFunction", currentFunction)
  setCookie("ctrainingStatus", trainingStatus)
}

function bath() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.1)
  change_image("img/revenge/pic_3.jpg")
  change_text(
    "<p>Вы зашли в <span class='yes'>санузел</span>. Вас всегда смущала странная организация рыцарских кубриков – душевая кабина была одна, зато было два туалета и роскошный писсуар. Но это было сложностью только для любителей тренироваться в собственных комнатах, так как большая часть личного состава бежала утром в общий <span class='yes'>спортзал</span>, в котором проблем с душевыми не было.</p><p>Пока <span class='yes'>Стэн</span> принимал душ, Вы умывались и чистили зубы. Ваши мысли были заняты одним – зависший рапорт о переводе в охрану внешнего периметра бункера. Вы любили свою работу в мастерской. Но читая ежедневные донесения патрулей и просматривая  архивные записи о внешнем мире, Вы понимали, что навсегда остаться под толщей земли Вы не сможете. Внешний мир манил Вас. Тяга к новым знаниям и своего рода приключениям не давала Вам покоя.</p>"
  )
  change_buttons({ "Принять душ": washing })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = bath
  setCookie("ccurrentFunction", currentFunction)
}

function washing() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_3a.jpg")
  change_text(
    "<p>Вы не торопились. Будильник всегда стоял на полчаса раньше нужного. Вы были уверены, что лучше подняться пораньше и делать всё вдумчиво и не торопясь, чем в спешке и тяп-ляп. Тугие прохладные струи воды приятно массировали разгорячённое тело. Приняв душ, Вы почувствовали себя великолепно. Всё-таки спорт – это великое дело!</p><p>После принятия водных процедур, Вы надели на себя униформу со знаками различия <span class='yes'>младшего рыцаря</span>. <span class='yes'>Стэн</span> уже ждал вас у выхода.</p><p>Вместе вы спустились в просторное помещение <span class='yes'>столовой</span> и заняли свободный столик. За соседним столом расположились <span class='yes'>двое</span> бойцов из <span class='yes'>разведотряда</span>. Вы с восхищением и некоторой завистью смотрели на их шевроны. <span class='yes'>Паладины</span>, не обращая на Вас никакого внимания, с вожделением уплетали свой завтрак.</p><p>- Всё мечтаешь о переводе, - <span class='yes'>Стэн</span> весело подмигнул Вам. </p><p>Вы отвлеклись от <span class='yes'>паладинов-разведчиков</span>.</p>"
  )
  change_buttons({
    "Да я уже трижды рапорт подавал. Два раза отказ приходил.": hope,
    "Теперь уже жалею о прошении. Если одобрят, то скорее всего переведут в другую комнату.":
      despair,
  })
  currentFunction = washing
  setCookie("ccurrentFunction", currentFunction)
}

function hope() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_3b.jpg")
  change_text(
    "<p>- Ну, на третий раз точно должно повезти, - сразу ответил <span class='yes'>Стэн</span> и стал говорить тише, - Ты же знаешь. Я не любитель слухов, но вчера я слышал разговор складских… Будто бы говорили о том, что приготовили <span class='yes'>снаряжение</span> для нового <span class='yes'>рыцаря-механика</span>. Смекаешь?</p><p>- Мог кто-то и из скрипторов перевестись, - ответили Вы, надеясь сглазить сказанное в свою пользу.</p><p>- Мог. Сегодня узнаем, - Ваш <span class='yes'>друг</span> принялся интенсивно работать ложкой.</p>"
  )
  change_buttons({
    "Спросить Стэна о планах на вечер": prospects,
    "Молча доесть и отправиться на службу": service,
  })
  currentFunction = hope
  setCookie("ccurrentFunction", currentFunction)
}

function despair() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  raise_satiety(1)
  change_image("img/revenge/pic_3b.jpg")
  change_text(
    "<p>- Хорошо бы, - хохотнул <span class='yes'>Стэн</span>, - может хоть менее беспокойного соседа подселят!</p><p>- Вот это ты гадюка, - изумились Вы, - это я-то буйный? А кто на прошлой неделе устроил пожар в цехе?! <span class='yes'>Кайл</span> до сих пор в ярости. Знал бы он, что ты сделал кальян из силового шлема… Кстати, о буйстве. Один из охранников внешнего периметра, из тех, кто встречает торговцев, пронёс бутылку «<span class='yes'>Мэд Дога</span>». Сегодня после отбоя в соседнем кубрике будет весело! Зовут в гости. Ты идёшь?</p><p>- Нет, - протянул <span class='yes'>Стэн</span>, - я пас. Работы привалило. Писцы разработали усиленный гамма-излучатель для <span class='yes'>гатлинг-лазера</span>. Я упросил <span class='yes'>Кайла</span>, чтобы он запер меня в <span class='yes'>мастерской</span> после отбоя.</p><p>- Ну, как знаешь, - насупились Вы.</p>"
  )
  change_buttons({ "Молча доесть и отправиться на службу": service })
  currentFunction = despair
  setCookie("ccurrentFunction", currentFunction)
}

function prospects() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  stan = true
  raise_satiety(1)
  change_image("img/revenge/pic_3b.jpg")
  change_text(
    "<p>- <span class='yes'>Стэн</span>, - Вы заговорщицки пнули <span class='yes'>товарища</span> по ноге, - помнишь <span class='yes'>Базза</span>?</p><p>- Это из охраны внешнего периметра что ль?</p><p>- Ага, - Вы понизили голос, - в  общем, он выторговал у какого-то <span class='yes'>торговца</span> бутылку отпадного пойла! В его кубрике после отбоя будет <span class='yes'>вечеринка</span>. Я слышал, что даже <span class='yes'>Роза Сарона</span> собиралась придти. Ты как? С нами?</p><p><span class='yes'>Стэн</span> уже инстинктивно собрался отказать, но услышав имя <span class='yes'>девушки-писца</span>, задумался.</p><p>- <span class='yes'>Роза</span> тоже должна придти? - спросил он.</p><p>- Наверняка не пропустит, - Ваши губы растянулись в довольной ухмылке от уха до уха.</p><p>- Ну… - протянул <span class='yes'>Стэн</span> и хлопнул по столу рукой, - пойду! Один раз живём! Пойду.</p><p>- А вот это верно подмечено, - Вы прикончили свой кислородный коктейль и поднялись из-за стола, - всё! Пора лететь. Труба зовёт.</p>"
  )
  change_buttons({ "Помчаться в ремонтный цех": service })
  currentFunction = prospects
  setCookie("ccurrentFunction", currentFunction)
}
function service() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_4.jpg")
  change_text(
    "<p>Распорядок в <span class='yes'>Братстве Стали</span> был организован таким образом, что подчинённые приходили к месту службы в то время, когда начальники уже были на своих местах. Покидали рабочие места подчинённые раньше. Поэтому Вас совсем не удивило то, что, когда Вы вошли в помещение ремонтного цеха, <span class='yes'>старший рыцарь Кайл</span> уже прикручивал последний элемент <span class='yes'>силовой брони T-51b</span>, которая вчера вечером была разобрана до последнего болтика.</p>"
  )
  change_buttons({
    Осмотреться: seeWorkPlace,
    "Подойти на доклад к командиру Кайлу": Kale,
  })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = service
  setCookie("ccurrentFunction", currentFunction)
}
function seeWorkPlace() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.01)
  change_image("img/revenge/pic_5.jpg")
  change_text(
    "<p>Вы в ремонтном цехе <span class='yes'>Братства Стали</span>. <span class='yes'>3 уровень</span> бункера. С любовью Вы посмотрели на стройные ряды шкафов и полок с различным техническим оборудованием. Там лежали печатные платы и сервоприводы, моторы и инструменты, миллионы запчастей, из которых каждый день Вы со своими сослуживцами делали оружие и броню на продажу торговцам, периодически привозящим в <span class='yes'>Братство</span> провизию.</p>"
  )
  change_buttons({ "Подойти на доклад к командиру Кайлу": Kale })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = seeWorkPlace
  setCookie("ccurrentFunction", currentFunction)
}
function Kale() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.02)
  change_image("img/revenge/pic_4.jpg")
  change_text(
    "<p>Вы подошли к <span class='yes'>старшему рыцарю Кайлу</span> и бодро поприветствовали своего начальника.</p><p>- А, младший рыцарь! – приложив кулак к левому плечу, поприветствовал Вас <span class='yes'>Кайл</span>. - Как всегда — точно по расписанию. Ну что же… пришла пора прощаться!</p><p>Не совсем понимая, но храня надежду, Вы молча уставились на своего командира.</p><p>- Да, да. – улыбался <span class='yes'>старший рыцарь</span>. - Ваш рапорт на должность рыцаря-механика в патрульном взводе удовлетворён. Так что поздравляю с новым званием и должностью. Отныне я Вам больше не начальник. Проследуйте за дальнейшими инструкциями к паладину <span class='yes'>Талусу</span>.</p>"
  )
  change_buttons({
    "Как же вы тут без меня теперь?": kaleQa,
    "Благодарю за совместную службу! Это был бесценный опыт.": kaleQb,
  })
  currentFunction = Kale
  setCookie("ccurrentFunction", currentFunction)
}
function kaleQa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.02)
  change_image("img/revenge/pic_4.jpg")
  change_text(
    "<p>- Рыцарь, - усмехнулся <span class='yes'>Кайл</span>. – Вы хоть и прекрасно справлялись со своими обязанностями, но, как Вы знаете, незаменимых людей нет. Вот, смотрите, сколько кандидатов мне уже прислали на Вашу должность.</p><p>С этими словами он показал Вам внушительных размеров список. Вы бегло пробежались по именам в нём.</p><p>«И, правда, желающих попасть сюда немало! Есть даже весьма достойные кандидатуры» - подумали Вы про себя.</p>"
  )
  change_buttons({
    "Благодарю за совместную службу! Это был бесценный опыт.": kaleQb,
  })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = kaleQa
  setCookie("ccurrentFunction", currentFunction)
}
function kaleQb() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.02)
  change_image("img/revenge/pic_4.jpg")
  change_text(
    "<p>- Ad Victoriam, рыцарь! – <span class='yes'>Кайл</span> ещё раз приложил кулак к своему плечу. – Мне тоже было радостно служить с Вами. А теперь ступайте. <span class='yes'>Талус</span> уже ждёт Вас. Он сейчас на <span class='yes'>1 уровне</span> в <span class='yes'>спортзале</span>.</p><p>С этими словами <span class='yes'>Кайл</span> отложил список и потащил отремонтированную силовую броню в угол мастерской.</p><p>Вам же предстояло спуститься на <span class='yes'>1 уровень</span> бункера и пройти в <span class='yes'>спортзал</span>, где <span class='yes'>паладин Талус</span> занимался с рядовыми-послушниками.</p>"
  )
  change_buttons({ "Выйти в коридор": thirdLevel })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = kaleQb
  setCookie("ccurrentFunction", currentFunction)
}
function thirdLevel() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  if (getPowerArmor === true) {
    change_image("img/revenge/pic_6a.jpg")
  } else {
    change_image("img/revenge/pic_6.jpg")
  }
  change_text(
    "<p>Вы на <span class='yes'>3 уровне</span> бункера. Тут расположены <span class='yes'>ремонтный цех</span> и <span class='yes'>библиотека</span>. <span class='yes'>Ваша комната</span> также находится на этом уровне. Высокотехнологичный <span class='yes'>лифт</span> готов Вас доставить на все <span class='yes'>четыре уровня</span> бункера <span class='yes'>Братства</span>.</p>"
  )
  change_buttons({
    "Зайти в библиотеку": library,
    "Заглянуть в мастерскую": workshop,
    "Войти в свою комнату": room,
    "Войти в лифт": lift_3,
  })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = thirdLevel
  setCookie("ccurrentFunction", currentFunction)
}

function lift_3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.1)
  change_image("img/revenge/pic_7.jpg")
  change_text(
    "<p>Вы вошли в лифт. Перед Вами <span class='yes'>четыре</span> кнопки с цифрами <span class='yes'>уровней</span> бункера.</p><p>Сейчас Вы на <span class='yes'>3 уровне</span>.</p>"
  )
  change_buttons({
    "1 уровень": firstLevel,
    "2 уровень": secondLevel,
    "3 уровень": thirdLevel,
    "4 уровень": fourthLevel,
  })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = lift_3
  setCookie("ccurrentFunction", currentFunction)
}
function library() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  if (getPowerArmor === true) {
    change_image("img/revenge/pic_8a.jpg")
  } else {
    change_image("img/revenge/pic_8.jpg")
  }
  change_text(
    "<p>Вы зашли в модуль с десятками электронных терминалов. Это место ежедневного труда десятков <span class='yes'>учёных-писцов</span> Ордена. Благодаря усилиям этих прогрессивных людей <span class='yes'>Братство</span> сохранило технологии старого мира и приумножило количество современных разработок.</p><p> Вам лучше никого не беспокоить и не отвлекать от исследований.</p>"
  )
  change_buttons({ "Выйти в коридор": thirdLevel })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = library
  setCookie("ccurrentFunction", currentFunction)
}
function workshop() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  if (getPowerArmor === true) {
    change_image("img/revenge/pic_5a.jpg")
  } else {
    change_image("img/revenge/pic_5b.jpg")
  }
  change_text(
    "<p>Вы вернулись в помещение <span class='yes'>мастерской</span>. Рыцари что-то непрерывно сверлили, спаивали, крутили и разбирали. Ваш друг <span class='yes'>Стэн</span> стоял у верстака и внимательно осматривал лежащий перед ним внушительных размеров <span class='yes'>гатлинг-лазер</span>.</p><p> Все в этом помещении выглядели чрезвычайно важными и занятыми. Отвлекать Ваших теперь уже бывших коллег не стоило.</p>"
  )
  change_buttons({ "Выйти в коридор": thirdLevel })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = workshop
  setCookie("ccurrentFunction", currentFunction)
}
function room() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  if (getPowerArmor === true) {
    change_image("img/revenge/pic_10a.jpg")
  } else {
    change_image("img/revenge/pic_10.jpg")
  }
  change_text(
    "<p>Вы снова заглянули в свою комнату. Чистота и порядок, оставленные утром, никем не были нарушены. Скорей бы вечер – у Вас на столе новая подборка журналов об исследованиях внешнего мира.</p>"
  )
  change_buttons({ "Выйти в коридор": thirdLevel })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = room
  setCookie("ccurrentFunction", currentFunction)
}

function fourthLevel() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  if (getPowerArmor === true) {
    change_image("img/revenge/pic_11a.jpg")
  } else {
    change_image("img/revenge/pic_11.jpg")
  }
  change_text(
    "<p>Вы на <span class='yes'>4 уровне</span> Братства. Это место, в котором сосредоточен весь высший командный состав Ордена. Без заранее оформленного пропуска для аудиенции с руководством тут делать нечего.</p><p><span class='yes'>Патруль</span>, дежуривший возле лифта, немедленно задал Вам вопрос:</p><p>- Ваш пропуск, рыцарь?</p>"
  )
  change_buttons({
    "Мне нужно к начальству!": guard_4a,
    "В комнате оставил.": guard_4b,
    "Извините, этажом ошибся.": guard_4c,
  })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = fourthLevel
  setCookie("ccurrentFunction", currentFunction)
}
function lift_4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.1)
  change_image("img/revenge/pic_12.jpg")
  change_text(
    "<p>Вы вошли в лифт. Перед Вами <span class='yes'>четыре</span> кнопки с цифрами <span class='yes'>уровней</span> бункера.</p><p>Сейчас Вы на <span class='yes'>4 уровне</span>.</p>"
  )
  change_buttons({
    "1 уровень": firstLevel,
    "2 уровень": secondLevel,
    "3 уровень": thirdLevel,
    "4 уровень": fourthLevel,
  })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = lift_4
  setCookie("ccurrentFunction", currentFunction)
}
function guard_4a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  change_image("img/revenge/pic_13.jpg")
  change_text(
    "<p>- Судя по всему, пропуска нет… - резюмировал один из <span class='yes'>стражей</span>. – Будем и дальше комедию ломать? Ведь знаешь же – без спецпропуска пройти на уровень никак не получится.</p>"
  )
  change_buttons({
    "В комнате оставил.": guard_4b,
    "Извините, этажом ошибся.": guard_4c,
  })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = guard_4a
  setCookie("ccurrentFunction", currentFunction)
}
function guard_4b() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  change_image("img/revenge/pic_13.jpg")
  change_text(
    "<p>- Ну так возвращайся за ним! – <span class='yes'>стражник</span> грозно посмотрел на Вас.</p><p>Стало понятно, что дальше разговор не получится.</p>"
  )
  change_buttons({ "Войти в лифт": lift_4 })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = guard_4b
  setCookie("ccurrentFunction", currentFunction)
}
function guard_4c() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  change_image("img/revenge/pic_13.jpg")
  change_text(
    "<p>- Ничего. У меня тоже так спросонья бывает, - усмехнулся <span class='yes'>паладин</span> и тут же нахмурился. – Ступайте, рыцарь. Без пропуска – не положено.</p>"
  )
  change_buttons({ "Войти в лифт": lift_4 })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = guard_4c
  setCookie("ccurrentFunction", currentFunction)
}

function secondLevel() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  if (getPowerArmor === true) {
    change_image("img/revenge/pic_14a.jpg")
  } else {
    change_image("img/revenge/pic_14.jpg")
  }
  change_text(
    "<p>Вы на <span class='yes'>2 уровне</span> бункера. Тут расположены <span class='yes'>учебные классы</span> и <span class='yes'>медицинский блок</span>. У Вас были смешанные ощущения от нахождения на этом уровне. С одной стороны, Вы любили учиться и даже сейчас всё свободное время проводили за профильными трудами. С другой стороны, Вы терпеть не могли медиков Братства. Последние часто экономили на обезболивающих препаратах и делали несложные операции без анестетиков. От этих воспоминаний у Вас дрогнули плечи.</p>"
  )
  change_buttons({
    "Пройти в медицинский блок": medic,
    "Заглянуть в учебные классы": classRoom,
    "Войти в лифт": lift_2,
  })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = secondLevel
  setCookie("ccurrentFunction", currentFunction)
}
function lift_2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.1)
  change_image("img/revenge/pic_15.jpg")
  change_text(
    "<p>Вы вошли в лифт. Перед Вами <span class='yes'>четыре</span> кнопки с цифрами <span class='yes'>уровней</span> бункера.</p><p>Сейчас Вы на <span class='yes'>2 уровне</span>.</p>"
  )
  change_buttons({
    "1 уровень": firstLevel,
    "2 уровень": secondLevel,
    "3 уровень": thirdLevel,
    "4 уровень": fourthLevel,
  })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = lift_2
  setCookie("ccurrentFunction", currentFunction)
}
function medic() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  if (getPowerArmor === true) {
    change_image("img/revenge/pic_16a.jpg")
  } else {
    change_image("img/revenge/pic_16.jpg")
  }
  change_text(
    "<p>Как только Вы вошли в помещение, на Вас с криками налетела <span class='yes'>медсестра</span>:</p><p>- Уходите, уходите! Вы что, не читаете, что написано на дверях блока? У нас операция идёт!</p><p>- Извините, - пробормотали Вы и направились к выходу.</p>"
  )
  change_buttons({ "Выйти в коридор": secondLevel })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = medic
  setCookie("ccurrentFunction", currentFunction)
}
function classRoom() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  if (getPowerArmor === true) {
    change_image("img/revenge/pic_17a.jpg")
  } else {
    change_image("img/revenge/pic_17.jpg")
  }
  change_text(
    "<p>Вы открыли блок одного из учебных классов и увидели стройные ряды терминалов и колдующих над ними послушников. У них явно проводился какой-то экзамен, так как в классе было сразу несколько именитых писцов и рыцарей. <span class='yes'>Один</span> из них сразу подбежал к Вам:</p><p>- Рыцарь, Вам заняться нечем? Покиньте немедленно помещение!</p><p>Вы сразу почувствовали себя не в своей тарелке. Заняться Вам действительно было чем.</p>"
  )
  change_buttons({ "Выйти в коридор": secondLevel })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = classRoom
  setCookie("ccurrentFunction", currentFunction)
}

function firstLevel() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  if (getPowerArmor === true) {
    change_image("img/revenge/pic_18a.jpg")
  } else {
    change_image("img/revenge/pic_18.jpg")
  }
  change_text(
    "<p>Вы в просторном холле <span class='yes'>1 уровня</span> бункера Братства. Тут находятся <span class='yes'>комната охраны</span>, <span class='yes'>кабинет</span> старшего паладина <span class='yes'>Ромбуса</span>, <span class='yes'>главный склад</span> и <span class='yes'>тренировочный зал</span>. В последнем Вы провели немало времени.</p>"
  )
  if ((getPowerArmor === true) & (guardRoomMeeting === false)) {
    change_buttons({
      "Войти в комнату охраны": guardRoom,
      "Войти в кабинет Ромбуса": rombusRoom,
      "Пройти к складу": storage,
      "Войти в тренировочный зал": gym,
      "Войти в лифт": lift_1,
    })
  } else if ((getPowerArmor === false) & (guardRoomMeeting === false)) {
    change_buttons({
      "Войти в комнату охраны": guardRoom,
      "Пройти к складу": storage,
      "Войти в тренировочный зал": gym,
      "Войти в лифт": lift_1,
    })
  } else if ((getPowerArmor === true) & (guardRoomMeeting === true)) {
    change_buttons({
      "Войти в кабинет Ромбуса": rombusRoom,
      "Пройти к складу": storage,
      "Войти в тренировочный зал": gym,
      "Войти в лифт": lift_1,
    })
  } else if ((getPowerArmor === false) & (guardRoomMeeting === true)) {
    change_buttons({
      "Пройти к складу": storage,
      "Войти в тренировочный зал": gym,
      "Войти в лифт": lift_1,
    })
  }
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === false) & (talusPermission === true)) {
    BOS_timeover_2()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_3()
  }
  currentFunction = firstLevel
  setCookie("ccurrentFunction", currentFunction)
}
function lift_1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.1)
  change_image("img/revenge/pic_19.jpg")
  change_text(
    "<p>Вы вошли в лифт. Перед Вами <span class='yes'>четыре</span> кнопки с цифрами <span class='yes'>уровней</span> бункера.</p><p>Сейчас Вы на <span class='yes'>1 уровне</span>.</p>"
  )
  change_buttons({
    "1 уровень": firstLevel,
    "2 уровень": secondLevel,
    "3 уровень": thirdLevel,
    "4 уровень": fourthLevel,
  })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = lift_1
  setCookie("ccurrentFunction", currentFunction)
}
function guardRoom() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  guardRoomMeeting = true
  change_time(0.2)
  if (getPowerArmor === true) {
    change_image("img/revenge/pic_20a.jpg")
  } else {
    change_image("img/revenge/pic_20.jpg")
  }
  change_text(
    "<p>На входе в караульное помещение Вас встретил суровый <span class='yes'>паладин - начальник</span> охраны бункера и вытолкал Вас из комнаты.</p><p>- Ещё раз войдёшь сюда без разрешения, упеку на губу. Две недели отдыхать будешь, обещаю! – пригрозил Вам <span class='yes'>офицер</span>.</p>"
  )
  change_buttons({ "Оказаться в холле": firstLevel })
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = guardRoom
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cguardRoomMeeting", guardRoomMeeting)
}
/* Ограничение по времени в Братстве - к Талусу */
function BOS_timeover() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_13.jpg")
  change_text(
    "<p>Неожиданно на Ваше плечо опустилась рука. Вы вздрогнули и обернулись. Перед Вами стоял <span class='yes'>младший паладин Рейн</span> - заместитель <span class='yes'>паладина Талуса</span>.</p><p> - КАКОГО ХЕРА ТЫ ТУТ БРОДИШЬ, ИДИОТ?!!! - налетел на Вас <span class='yes'>Рейн</span>. - Ты же зачислен в патрульный отряд. А ну-ка живо за мной к <span class='yes'>Талусу</span>! </p>"
  )
  change_buttons({ "Следовать за Рейном": gym })
  currentFunction = BOS_timeover
  setCookie("ccurrentFunction", currentFunction)
}
function gym() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  if (getPowerArmor === true) {
    change_image("img/revenge/pic_22a.jpg")
  } else {
    change_image("img/revenge/pic_22.jpg")
  }
  change_text(
    "<p>Вы оказались в просторном помещении тренировочного зала бункера. Именно здесь закаляется сталь. Кроме общей физической подготовки, послушников учат приёмам рукопашного и ножевого боя, обращению с оружием и основам выживания.</p><p>Руководит тренировками будущих рыцарей и писцов <span class='yes'>паладин Талус</span>. Кроме него занятия проводит <span class='yes'>старший рыцарь Томас</span>. Вы вошли в разгар тренировки, которую проводил <span class='yes'>Томас</span>. <span class='yes'>Паладин Талус</span> же внимательно следил за ходом занятия.</p>"
  )
  if (talusPermission === false) {
    change_buttons({
      "Подойти к Талусу": talus,
      "Понаблюдать за тренировкой": watchTraining,
      "Покинуть тренировочный зал": firstLevel,
    })
  } else {
    change_buttons({
      "Понаблюдать за тренировкой": watchTraining,
      "Покинуть тренировочный зал": firstLevel,
    })
  }
  currentFunction = gym
  setCookie("ccurrentFunction", currentFunction)
}
function watchTraining() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.1)
  change_image("img/revenge/pic_23.jpg")
  change_text(
    "<p>Некоторое время Вы любовались интенсивной тренировкой молодняка. Вы вспомнили, как несколько лет назад сами проводили в этом зале дни напролёт. Талус и Томас тренировали и Вас в своё время. Ох, и трудное время это было! Должно быть, тренировочный мат посреди зала до сих пор пропитан семью вёдрами Вашего пота.</p>"
  )
  if (talusPermission === false) {
    change_buttons({
      "Подойти к Талусу": talus,
      "Покинуть тренировочный зал": firstLevel,
    })
  } else {
    change_buttons({ "Покинуть тренировочный зал": firstLevel })
  }
  currentFunction = watchTraining
  setCookie("ccurrentFunction", currentFunction)
}
function talus() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  change_image("img/revenge/pic_24.jpg")
  change_text(
    "<p>Чеканным шагом Вы подошли к <span class='yes'>паладину</span> и отрапортовали о прибытии. <span class='yes'>Талус</span> довольно крякнул и протянул Вам руку.</p><p>- Отлично, младший рыцарь, – произнёс он. - Тебя не просто так перевели в патрульный отряд именно сегодня. Поступили сведения об усилении активности рейдеров на поверхности. Высшее руководство решило расширить количество патрулей наверху. Так вот, сегодня ночью большой отряд рейдеров был замечен <span class='yes'>на востоке</span> от бункера. Тебе необходимо срочно явиться на брифинг к <span class='yes'>паладину Ромбусу</span>, все уже практически собрались у него. Ты переходишь под его непосредственное руководство. Этот момент ясен?</p>"
  )
  change_buttons({
    "Так точно!": talus_q1,
    "А как же моё звание, паладин?": talus_q2,
  })
  currentFunction = talus
  setCookie("ccurrentFunction", currentFunction)
}
function talus_q1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_name("Рыцарь", heroName)
  talusPermission = true
  change_time(0.05)
  change_image("img/revenge/pic_24.jpg")
  change_text(
    "<p><span class='yes'>Талус</span> кивнул.</p><p>- Вам наверняка сказали, - продолжил он. – Вам присвоено звание <span class='yes'>рыцаря</span>. А посему, перед тем, как явиться на собрание к <span class='yes'>старшему паладину Ромбусу</span>, Вам следует обратиться к интенданту <span class='yes'>Майклу</span> за новой формой и, что для Вас наверняка будет приятной новостью, силовой бронёй.</p><p>Вы не выдержали и заулыбались. <span class='yes'>Силовая броня</span> – предмет особой гордости для рыцаря. Только рыцари и паладины боевых отрядов и охраны имели право её носить. Эта мечта всего Вашего детства и юности наконец-то сбылась.</p><p>Увидев Вашу улыбку, <span class='yes'>Талус</span> протянул Вам <span class='yes'>бумаги</span>:</p><p>- Передайте эти накладные интенданту <span class='yes'>Майклу</span> для получения брони и снаряжения, а после бегом направляйтесь к <span class='yes'>старшему паладину Ромбусу</span>. Ad Victoriam, рыцарь!</p>"
  )
  change_buttons({ "Покинуть тренировочный зал": firstLevel })
  currentFunction = talus_q1
  setCookie("ccurrentFunction", currentFunction)
  setCookie("ctalusPermission", talusPermission)
}
function talus_q2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_name("Рыцарь", heroName)
  talusPermission = true
  change_time(0.05)
  change_image("img/revenge/pic_24.jpg")
  change_text(
    "<p><span class='yes'>Талус</span> ухмыльнулся.</p><p> Вы торопите события вместо того, чтобы отвечать старшему офицеру по форме, – сурово ответил паладин. – Вам действительно присвоено звание <span class='yes'>рыцаря</span>. А посему, перед тем, как явиться на собрание к <span class='yes'>старшему паладину Ромбусу</span>, Вам следует обратиться к интенданту <span class='yes'>Майклу</span> за новой формой и, что для Вас наверняка будет приятной новостью, силовой бронёй.</p><p>Вы не выдержали и заулыбались. <span class='yes'>Силовая броня</span> – предмет особой гордости для рыцаря. Только рыцари и паладины боевых отрядов и охраны имели право её носить. Эта мечта всего Вашего детства и юности наконец-то сбылась.</p><p>Увидев Вашу улыбку, <span class='yes'>Талус</span> протянул Вам бумаги и смягчил суровый тон:</p><p>- Передайте эти бумаги интенданту <span class='yes'>Майклу</span> для получения брони и снаряжения и бегом направляйтесь к <span class='yes'>старшему паладину Ромбусу</span>. Ad Victoriam, рыцарь!</p>"
  )
  change_buttons({ "Покинуть тренировочный зал": firstLevel })
  currentFunction = talus_q2
  setCookie("ccurrentFunction", currentFunction)
  setCookie("ctalusPermission", talusPermission)
}

function storage() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  if (getPowerArmor === true) {
    change_image("img/revenge/pic_21a.jpg")
  } else {
    change_image("img/revenge/pic_21.jpg")
  }
  change_text(
    "<p>Вы пришли ко входу на <span class='yes'>склад</span> Братства Стали. Это особая зона, в которой хранились все технологии и вооружение бункера. Доступ на склад разрешён только интенданту <span class='yes'>Майклу</span> и особому взводу охраны.</p><p><span class='yes'>Майкл</span> сидел в старом кресле, зарывшись в ворох разных заявок и накладных. По долгу службы Вам часто приходилось к нему обращаться для получения разных деталей со склада.</p>"
  )
  if (michaelFirstMeeting === false) {
    change_buttons({
      "Поздороваться с Майклом": michael_d1,
      "Вернуться в холл уровня": firstLevel,
    })
  } else if (
    (michaelFirstMeeting === true) & (talusPermission === false) ||
    (michaelFirstMeeting === true) &
      (talusPermission === true) &
      (getPowerArmor === true)
  ) {
    change_buttons({ "Вернуться в холл уровня": firstLevel })
  } else if ((michaelFirstMeeting === true) & (talusPermission === true)) {
    change_buttons({
      "Отдать разрешение Майклу": michael_d3,
      "Вернуться в холл уровня": firstLevel,
    })
  }
  if ((time >= 10) & (talusPermission === false)) {
    BOS_timeover()
  }
  if ((time >= 11) & (getPowerArmor === true) & (rombusMeeting === false)) {
    BOS_timeover_2()
  }
  currentFunction = storage
  setCookie("ccurrentFunction", currentFunction)
}

function michael_d1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  michaelFirstMeeting = true
  change_time(0.05)
  change_image("img/revenge/pic_21.jpg")
  change_text(
    "<p>Вы подошли к <span class='yes'>Майклу</span> и по-дружески протянули ему руку:</p><p>- Привет, <span class='yes'>Майк</span>! Я за снаряжением, слышал уже, небось!</p><p><span class='yes'>Майкл</span> пожал Вашу руку и начал кривляться:</p><p> Здорово, лыцаль! Как же не слышал? Вчера по радио передавали. Чувствую, тебе не терпится нацепить новую форму, да в бой?! А бумаги от <span class='yes'>Талуса</span> уже захватил?</p>"
  )
  if (talusPermission === true) {
    change_buttons({
      "Конечно, Майки, держи крепко!": michael_d3,
      "Нет, нету у меня их.": michael_d2,
    })
  } else {
    change_buttons({ "Нет, нету у меня их.": michael_d2 })
  }
  currentFunction = michael_d1
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cmichaelFirstMeeting", michaelFirstMeeting)
}
function michael_d2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  change_image("img/revenge/pic_21.jpg")
  change_text(
    "<p>- Ну тогда ноги в руки и бегом за бумагами к <span class='yes'>Талусу</span>, брат. – <span class='yes'>Майкл</span> изобразил пальцами бегущие ноги. – Как же я тебе выдам амуницию без разрешения? Ты ж знаешь, что порядок превыше всего!</p>"
  )
  change_buttons({ "Я скоро вернусь с ними.": firstLevel })
  currentFunction = michael_d2
  setCookie("ccurrentFunction", currentFunction)
}
function michael_d3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  change_image("img/revenge/pic_21.jpg")
  change_text(
    "<p><span class='yes'>Майкл</span> взял <span class='yes'>бумаги</span>, которые Вы ему протянули, и стал внимательно их изучать.</p><p>- Ага. Ага. Так… - бормотал он. – Отлично! Обожди чуток, я на склад и обратно.</p><p><span class='yes'>Майкл</span> скрылся за дверями склада, а Вы плюхнулись в его кресло и погрузились в его бумаги. Порывшись в документах пару минут, Вы решили, что это довольно скучное занятие. Откинувшись в кресле, Вы сложили ноги на стол. Именно в такой позе увидел Вас <span class='yes'>Майк</span>, когда вышел из складского помещения, волоча за собой массивную <span class='yes'>силовую броню</span>.</p><p>- Ну ты вообще офонарел, я вижу, - отвесив Вам плюху, беззлобно заквохтал <span class='yes'>Майк</span>. – Так. Что тебе назначили… Форма рыцаря, <span class='yes'>ремонтный набор</span>, полагающийся тебе по должности. Эта прекрасная <span class='yes'>силовая броня</span>… О, и вот… тебе понравится! Великолепный <span class='yes'>лазерный пистолет</span> Ваттс 1000. Лёгкий как сверчок в руке! Минутку. Вот, получите-распишитесь!</p>"
  )
  change_buttons({
    "Осмотреть силовую броню": lookPA,
    "Осмотреть ремонтный набор": lookTools,
    "Осмотреть лазерный пистолет": lookLaserPistol,
    "Принять снаряжение": getAmmunation,
  })
  currentFunction = michael_d3
  setCookie("ccurrentFunction", currentFunction)
}
function lookPA() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.01)
  change_image("img/revenge/pic_25.jpg")
  change_text(
    "<p>Перед Вами стояла на полу <span class='yes'>силовая броня Т-51b</span>. Венец довоенного производства индивидуальных защитных комплектов. Уникальный бронированный комплекс исключительно сложных устройств, требующий особых навыков от оператора.</p><p>Разработанная компанией «Вест-Тек», <span class='yes'>силовая броня Т-51b</span> была ключевым фактором успеха моторизованных войск США в операции по освобождению Анкориджа в <span class='yes'>2077 г</span>.</p>"
  )
  change_buttons({
    "Осмотреть ремонтный набор": lookTools,
    "Осмотреть лазерный пистолет": lookLaserPistol,
    "Принять снаряжение": getAmmunation,
  })
  currentFunction = lookPA
  setCookie("ccurrentFunction", currentFunction)
}
function lookTools() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.01)
  change_image("img/revenge/pic_27.jpg")
  change_text(
    "<p>Стандартный комплект инструментов и материалов  для самостоятельного ремонта любого оружия и брони.</p><p>Конечно, если повреждения снаряжения не критические!</p>"
  )
  change_buttons({
    "Осмотреть силовую броню": lookPA,
    "Осмотреть лазерный пистолет": lookLaserPistol,
    "Принять снаряжение": getAmmunation,
  })
  currentFunction = lookTools
  setCookie("ccurrentFunction", currentFunction)
}
function lookLaserPistol() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.01)
  change_image("img/revenge/pic_26.jpg")
  change_text(
    "<p>Вам хорошо знакомо это оружие. <span class='yes'>Лазерный пистолет</span> Ваттс 1000. Таких пистолетов Вы собрали сотни собственными руками. Относительно маломощная гражданская модель. Это было связано с использованием лазерного диода вместо фокусирующих кристаллов.</p><p>Достанься он Вам пораньше, Вы бы приколхозили к нему магнитную систему калибровки для увеличения пробивной способности.</p><p>Эх, а Вы надеялись на что-то более серьёзное!</p>"
  )
  change_buttons({
    "Осмотреть силовую броню": lookPA,
    "Осмотреть ремонтный набор": lookTools,
    "Принять снаряжение": getAmmunation,
  })
  currentFunction = lookLaserPistol
  setCookie("ccurrentFunction", currentFunction)
}
function getAmmunation() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  getPowerArmor = true
  change_time(0.03)
  change_image("img/revenge/pic_21a.jpg")
  change_text(
    "<p>Не тратя время на слова, Вы влезли в вожделенную <span class='yes'>силовую броню</span> и включили автоматизированный комплекс диагностики этого сложного устройства. Проверив все системы, Вы взяли небольшой <span class='yes'>лазерный пистолет</span> и воскликнули:</p><p>- Лёгкий как сверчок, говоришь?! То есть остальным здоровенные шестиствольные дуры, а мне какой-то жалкий сверчок?!</p><p><span class='yes'>Майкл</span> захохотал.</p><p>- Греби давай, - утирая слёзы от смеха, простонал он. – Вот когда принесёшь разрешение на что-нибудь более габаритное, то и разговор будет другой!</p>"
  )
  change_buttons({ "Вернуться в холл уровня": firstLevel })
  currentFunction = getAmmunation
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cgetPowerArmor", getPowerArmor)
}

/* Ограничение по времени в Братстве - к Ромубусу */
function BOS_timeover_2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_13.jpg")
  change_text(
    "<p>Неожиданно на Ваше плечо опустилась рука. Вы вздрогнули и обернулись. Перед Вами стоял <span class='yes'>младший паладин Рейн</span> - заместитель <span class='yes'>паладина Талуса</span>.</p><p> - КАКОГО ХЕРА ТЫ ТУТ БРОДИШЬ, ИДИОТ?!!! - налетел на Вас <span class='yes'>Рейн</span>. - Ты же уже получил разрешение от <span class='yes'>Ромбуса</span> на получение снаряжения. А ну-ка живо за мной к <span class='yes'>Майклу</span>! </p>"
  )
  change_buttons({ "Следовать за Рейном": storage })
  currentFunction = BOS_timeover_2
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_timeover_3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_13.jpg")
  change_text(
    "<p>Неожиданно на Ваше плечо опустилась рука. Вы вздрогнули и обернулись. Перед Вами стоял <span class='yes'>младший паладин Рейн</span> - заместитель <span class='yes'>паладина Талуса</span>.</p><p> - КАКОГО ХЕРА ТЫ ТУТ БРОДИШЬ, ИДИОТ?!!! - налетел на Вас <span class='yes'>Рейн</span>. - Ты же зачислен в патрульный отряд. Тебя уже ждут на собрании! А ну-ка живо за мной к <span class='yes'>Ромбусу</span>! </p>"
  )
  change_buttons({ "Следовать за Рейном": rombusRoom })
  currentFunction = BOS_timeover_3
  setCookie("ccurrentFunction", currentFunction)
}
function rombusRoom() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rombusMeeting = true
  change_time(0.2)
  change_image("img/revenge/pic_29.jpg")
  change_text(
    "<p>У <span class='yes'>старшего паладина Ромбуса</span> было полно народу, когда Вы вошли. Среди прочих Вы увидели <span class='yes'>Старейшину Мэксона</span> — сына знаменитого <span class='yes'>Роджера Мэксона</span>, который <span class='yes'>78</span> лет назад основал Братство Стали. Появление <span class='yes'>Старейшины</span> на первом уровне бункера - событие нерядовое. Вы доложили о прибытии <span class='yes'>Ромбусу</span> и заняли место среди других рыцарей и паладинов.</p>"
  )
  change_buttons({
    "Рисовать цветочек на коленке силовой брони": rombusRoom_2,
    "Внимательно слушать Старейшину": rombusRoom_3,
  })
  currentFunction = rombusRoom
  setCookie("ccurrentFunction", currentFunction)
  setCookie("crombusMeeting", rombusMeeting)
}
function rombusRoom_2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rombusMeeting = true
  change_time(0.3)
  change_image("img/revenge/pic_29.jpg")
  change_text(
    "<p>Однажды Вам приглянулась одна особа из взвода охраны. Тогда она не обратила на Вас внимания. Но теперь, когда Вы рыцарь в сияющих доспехах… Другое дело!</p><p>Пока остальные сидели, навострив уши, Вы решили, не тратя времени даром, украсить свою силовую броню рисунком для покорения сердца прекрасной дамы.</p><p>Достав довоенный фломастер, Вы принялись старательно выводить линии. Когда Вы уже заканчивали рисовать шикарный бутон розы, по Вашему запястью довольно крепко ударили. Фломастер вылетел из руки и укатился под стулья.</p><p>- Боец, прекрати страдать ерундой, - зарычал на Вас <span class='yes'>старший паладин Ромбус</span>. – Слушай <span class='yes'>Старейшину</span>.</p><p>Вы с грустью посмотрели на своё колено: «Вот сволочь. Такую картину для особы испортил!»</p>"
  )
  change_buttons({ "Внимательно слушать Старейшину": rombusRoom_3 })
  currentFunction = rombusRoom_2
  setCookie("ccurrentFunction", currentFunction)
  setCookie("crombusMeeting", rombusMeeting)
}
function rombusRoom_3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rombusMeeting = true
  change_time(0.5)
  change_image("img/revenge/pic_29.jpg")
  change_text(
    "<p>Солдаты! - обратился к присутствующим <span class='yes'>Старейшина Мэксон</span>. - Поступила информация от тех редких караванов, которые посещают нас здесь, в <span class='yes'>Лост Хиллз</span>, о частых нападениях рейдеров на торговый город <span class='yes'>Хаб</span> и караваны, выходящие из города. В последнее время атаки на торговые караваны стали более дерзкими и частыми, в результате чего торговля <span class='yes'>Хаба</span> в северном направлении практически парализована. Братству нет дела до разборок группировок на поверхности, однако мы жизненно зависим от поставок продовольствия и расходных деталей для систем жизнеобеспечения нашего бункера. Высшим руководством Братства было принято решение о беспрецедентной помощи торговцам. Последние сообщили о том, что нападающие рейдеры называют себя бандой <span class='yes'>Гадюк</span>. Вооружены преимущественно копьями и ножами, реже стрелковым оружием.</p><p>В этот момент <span class='yes'>Старейшина</span> прервался для того, чтобы сделать глоток воды. Все присутствующие зааплодировали.</p>"
  )
  change_buttons({
    "Присоединиться к овациям": rombusRoom_4,
    "Сидеть спокойно": rombusRoom_4,
  })
  currentFunction = rombusRoom_3
  setCookie("ccurrentFunction", currentFunction)
  setCookie("crombusMeeting", rombusMeeting)
}
function rombusRoom_4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.5)
  change_image("img/revenge/pic_29.jpg")
  change_text(
    "<p><span class='yes'>Старейшина</span> улыбнулся и жестом остановил бурные и продолжительные аплодисменты.</p><p>Спасибо, братья! - поблагодарил он и продолжил. - Проклятые дикари были замечены нашими разведчиками на востоке в трёх милях от нашего бункера. Какая дерзость! Из-за них до бункера в течение двух месяцев не дошло три каравана. Истребление этих ничтожных тварей будет хорошей тренировкой для братьев и сестёр, уставших от стрельбы по мишеням в тире. Я лично собираюсь возглавить отряд из двух паладинов и пяти рыцарей. Вместе мы не оставим от рейдеров и следа! Ad Victoriam, воины!</p>"
  )
  change_buttons({
    "Заорать громче остальных: Ad Victoriam!": BOS_wasteland,
    "Передумать быть рыцарем в патруле": prologue_fail,
  })
  currentFunction = rombusRoom_4
  setCookie("ccurrentFunction", currentFunction)
}

/* Бой Братства, гибель Старейшины */
function BOS_wasteland() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_30.jpg")
  change_text(
    '<p>Вместе с остальными Вы выбрались на поверхность бункера. Солнце резануло по глазам, несмотря на наличие в шлеме силовой брони затемняющих линз. На поверхности Вы были лишь однажды, будучи послушником. Вас и других курсантов вывели на поверхность для проведения практического занятия по выживанию в суровых условиях Пустоши. Вас всегда тянуло наверх. Жажда нового опыта не покидала вашу голову, поэтому рутинная работа в ремонтном цехе осточертела довольно быстро. Вы мечтали о том, что когда-нибудь станете участником далёких экспедиций, будете искать новые знания и технологии, как наставляет кодекс Братства Стали. И вот Вы — один из солдат наземного патруля, да ещё под руководством <span class="yes">Старейшины Мэксона</span>.</p><p>«Мечты сбываются, <span class="yes">Вероника</span>» - так Вы сказали бы своей возлюбленной, которая так и осталась в Ваших мечтах.</p>'
  )
  change_buttons({ "Занять своё место в отряде": BOS_battle })
  currentFunction = BOS_wasteland
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(1)
  change_image("img/revenge/pic_31.jpg")
  change_text(
    '<p>Сначала отряд шёл довольно медленно. Дикий пустынный зной раскалил броню добела, заработала система охлаждения <span class="yes">силовой брони</span>. Стало не так жарко. В целом Вы чувствовали себя комфортно.</p><p><span class="yes">Мэксон</span> приказал ускорить шаг и бежать трусцой настолько быстро, насколько это было можно сделать в массивной броне. Пустынная пыль, поднятая ногами отряда, подхватывалась горячим ветром и поднималась высоко в небо, оставляя за отрядом огромные пылевые облака. Никто не собирался заставать рейдеров врасплох. Это должна была быть одна из самых лёгких и быстрых операций Братства.</p><p>Через 40 минут Вы подошли к старому полуразрушенному зданию придорожного <span class="yes">магазина</span>, служившего вероятным пристанищем для рейдеров. Метрах в 30 напротив магазина расположились невысокие <span class="yes">холмы</span>.</p>'
  )
  change_buttons({
    "Присмотреться к холмам вокруг": BOS_battle_1,
    "Подойти ко входу в магазин и заглянуть внутрь": BOS_battle_2,
    "Остановиться и сделать вид, что камень застрял в сапоге": BOS_battle_3,
  })
  currentFunction = BOS_battle
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.01)
  change_image("img/revenge/pic_32.jpg")
  change_text(
    '<p>Внезапно Вы заметили <span class="yes">головы</span>, выглядывающие из-за холмов напротив здания. Вслед за головами показались блестящие стволы винчестеров. Времени на раздумья практически не осталось.</p>'
  )
  change_buttons({
    "Крикнуть: «На холмах рейдеры!»": BOS_battle_11,
    "Выстрелить по ближайшей голове на холмах": BOS_battle_12,
    "Метнуться ко входу в магазин": BOS_battle_13,
  })
  currentFunction = BOS_battle_1
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_33.jpg")
  change_text(
    '<p>На Ваш крик рейдеры мгновенно среагировали и открыли ураганный огонь по отряду. Опытные бойцы Братства сразу рассредоточились и заняли позиции для стрельбы. Старейшина Мэксон встал возле угла здания магазина и открыл огонь из своего гатлинга. Вы же от неожиданности залегли на <span class="yes">открытой местности</span>. Одно дело теория, другое практика. В первом реальном бою Вы не смогли сразу принять верное решение.</p><p>Бандиты сосредоточили основной огонь на Вашей позиции, так как Вы стали лёгкой мишенью. Индикатор состояния силовой брони начал мигать. Броня хорошо держала отдельные попадания, но под таким массированным огнём долго ей не протянуть. В этот  момент к Вам подскочил <span class="yes">Ромбус</span> и начал стучать по Вашему шлему:</p><p>- Вставай немедленно, боец! Перемещайся за <span class="yes">валуны</span> под холмами. Я прикрываю.</p><p>Паладин встал во весь рост и направил лазерную винтовку в сторону противника. От смертоносных лучей враги падали как подкошенные. Вы же благополучно добрались до укрытия. Отсюда было удобно <span class="yes">зайти рейдерам во фланг</span>. Будь с Вами ещё пара бойцов, то враг потерпел бы сокрушительное поражение. С другой стороны, можно было вести огонь с <span class="yes">этой позиции</span> в практически полной для себя безопасности.</p>'
  )
  change_buttons({
    "Стрелять по врагу со своей позиции": BOS_battle_111,
    "Атаковать врага с фланга": BOS_battle_112,
    "Оглянуться на здание позади": BOS_battle_113,
  })
  currentFunction = BOS_battle_11
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.3)
  change_image("img/revenge/pic_33.jpg")
  change_text(
    '<p>Вы сделали несколько выстрелов, но промахнулись. Из-под холма вести огонь оказалось очень неудобно. Рейдеры старались использовать ландшафт для укрытия. Враг оказался на гораздо более выгодных позициях, чем ваш отряд.</p><p>Нужно либо отходить обратно к зданию <span class="yes">магазина</span> и вести огонь из него, либо заходить <span class="yes">во фланг</span> противнику самостоятельно и использовать элемент внезапности. Вы посмотрели в сторону основного отряда, однако не увидели возможности запросить поддержку. Паладины и рыцари под руководством <span class="yes">Ромбуса</span> находились значительно левее вашей позиции и медленно шли в лобовую атаку, ведя непрерывный огонь и стараясь не давать рейдерам возможности высовываться из-за холмов.</p>'
  )
  change_buttons({
    "Атаковать врага с фланга": BOS_battle_112,
    "Оглянуться на здание позади": BOS_battle_113,
  })
  currentFunction = BOS_battle_111
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_112() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_34.jpg")
  change_text(
    '<p>Вы обошли валуны у подножья холма справа и начали взбираться на вершину, чтобы атаковать рейдеров с их <span class="yes">левого фланга</span>. Враг и основной отряд скрылись из Вашего поля зрения. Это создало элемент внезапности, на который Вы так надеялись. С другой стороны, нельзя было заходить с тыла - Ваш отряд мог не увидеть Вас во время атаки. Когда рейдеры переключили бы своё внимание на Вас, Вы могли бы остаться без возможной поддержки.</p><p>Таким образом, Вы взбирались на холм с его <span class="yes">южной</span> стороны и, оказавшись наверху, стали бы видны своему отряду, который шёл к холму с <span class="yes">запада</span>. Вы добрались до вершины и аккуратно высунули голову из-за пригорка. Перед Вами лежали около полутора десятков рейдеров и сосредоточенно вели стрельбу по отряду внизу. Видимо, пока Вы взбирались на холм, инициатива перешла к врагу. Отряд же остановил продвижение и залёг, оставаясь на <span class="yes">открытой местности</span>. </p>'
  )
  change_buttons({
    "Встать во весь рост и открыть огонь по врагу": BOS_battle_finalStage,
    "Уничтожать рейдеров, периодически высовываясь из-за пригорка":
      BOS_battle_finalStage_2,
  })
  currentFunction = BOS_battle_112
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_113() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_38.jpg")
  change_text(
    '<p>В пылу битвы Вы не сразу заметили, что <span class="yes">трое</span> рейдеров бросились на <span class="yes">Старейшину Мэксона</span> с ножами и кувалдами. <span class="yes">Один</span> из них уже успел перебить трубки систем фильтрации воздуха в силовой броне, а <span class="yes">второй</span> бросил под ноги <span class="yes">Старейшине</span> газовую гранату. <span class="yes">Третий</span> же был испепелён очередью из гатлинг-лазера <span class="yes">Старейшины</span>.</p>'
  )
  change_buttons({
    "Выстрелить прицельно в нападающих на Старейшину со своей позиции":
      BOS_battle_elderHelmet_1,
    "Броситься к Старейшине на помощь": BOS_battle_elderHelmet_2,
  })
  currentFunction = BOS_battle_113
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_12() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_33.jpg")
  change_text(
    '<p>Недаром Вы были одним из лучших по стрельбе в своём подразделении — метким выстрелом Вы снесли лучом из своего <span class="yes">пистолета</span> полчерепа ближайшему рейдеру, зато на его месте появилось ещё четверо туземцев, которые держали в руках штурмовые винтовки.</p><p>Закипел бой. <span class="yes">Старейшина Мэксон</span> встал возле угла здания магазина и открыл огонь из своего гатлинга. Более опытные бойцы отряда рассредоточились и тоже начали стрелять. После короткой перестрелки <span class="yes">двоим бойцам</span> из отряда <span class="yes">Ромбуса</span> удалось занять первый этаж <span class="yes">магазина</span>, и теперь они вели огонь из окна здания. Пули свистели вокруг Вас, пролетая над головой и врезаясь в землю под ногами.</p>'
  )
  change_buttons({
    "Занять позицию за валуном под холмами": BOS_battle_121,
    "Залечь на открытой местности": BOS_battle_122,
    "Занять позицию на втором этаже здания": BOS_battle_211,
  })
  currentFunction = BOS_battle_12
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_121() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_33.jpg")
  change_text(
    '<p>Вы сделали кувырок вправо и побежали в сторону от своего отряда, к <span class="yes">южному склону</span> холма. Рейдеры не заметили в разгаре боя, как одинокий боец добрался до валунов у подножия. Таким образом, Вы благополучно добрались до укрытия. Отсюда было удобно зайти рейдерам <span class="yes">во фланг</span>. Будь с Вами ещё пара бойцов, враг потерпел бы сокрушительное поражение. С другой стороны, можно вести огонь с <span class="yes">этой позиции</span> в практически полной для себя безопасности.</p>'
  )
  change_buttons({
    "Стрелять по врагу со своей позиции": BOS_battle_111,
    "Атаковать врага с фланга": BOS_battle_112,
    "Оглянуться на здание позади": BOS_battle_113,
  })
  currentFunction = BOS_battle_121
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_122() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_33.jpg")
  change_text(
    '<p>Грохот выстрелов и столь массированный огонь ввели Вас в ступор. От неожиданности Вы залегли на <span class="yes">открытой местности</span>. Одно дело теория, другое практика. В первом реальном бою Вы не смогли сразу принять верное решение.</p><p>Бандиты сосредоточили основной огонь на Вашей позиции, так как Вы стали лёгкой мишенью. Индикатор состояния брони начал мигать. Силовая броня хорошо держала отдельные попадания, но под таким массированным огнём долго ей не протянуть. В этот  момент к Вам подскочил <span class="yes">Ромбус</span> и начал стучать по Вашему шлему:</p><p>- Вставай немедленно, боец! Перемещайся за <span class="yes">валуны</span> под холмами. Я прикрываю.</p><p>Паладин встал во весь рост и направил могучий гатлинг-лазер в сторону противника. От смертоносных лучей враги падали как подкошенные. Вы же благополучно добрались до укрытия. Отсюда было удобно зайти рейдерам <span class="yes">во фланг</span>, будь с Вами ещё пара бойцов, враг потерпел бы сокрушительное поражение. С другой стороны, можно вести огонь с <span class="yes">этой позиции</span> в практически полной для себя безопасности.</p>'
  )
  change_buttons({
    "Стрелять по врагу со своей позиции": BOS_battle_111,
    "Атаковать врага с фланга": BOS_battle_112,
    "Оглянуться на здание позади": BOS_battle_113,
  })
  currentFunction = BOS_battle_122
  setCookie("ccurrentFunction", currentFunction)
}

function BOS_battle_13() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_35.jpg")
  change_text(
    '<p>Увидев врага, Вы бросились ко входу в <span class="yes">здание</span>, чтобы занять место для лучшей обороны позиции.</p><p>Выбив ногой трухлявую дверь, Вы попали под автоматную очередь рейдера, устроившего засаду внутри здания. От неожиданности Вы на мгновение зажмурились. Через секунду Вы осознали, что полимерные сплавы Вашей <span class="yes">брони</span> надёжно защищают от пуль противника.</p>'
  )
  change_buttons({
    "Расстрелять рейдера из лазерного пистолета": BOS_battle_21,
    "Подойти вплотную к рейдеру и убить его голыми руками": BOS_battle_22,
    "Выбежать из здания": BOS_battle_23,
  })
  currentFunction = BOS_battle_13
  setCookie("ccurrentFunction", currentFunction)
}

function BOS_battle_2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_35.jpg")
  change_text(
    '<p>Вы сделали знак <span class="yes">паладину Ромбусу</span>, что собираетесь проверить <span class="yes">магазин</span>. Тот кивнул в ответ и жестом направил к Вам ещё <span class="yes">двух</span> бойцов. Вы аккуратно приоткрыли ветхую дверь и вошли в здание. В углу комнаты сидел <span class="yes">рейдер</span> и держал вход под прицелом, поэтому Вы не сумели среагировать вовремя. <span class="yes">Рейдер</span> открыл огонь из мелкокалиберной винтовки. От неожиданности Вы на мгновение зажмурились. Через секунду Вы осознали, что полимерные сплавы Вашей <span class="yes">брони</span> надёжно защищают от пуль противника.</p>'
  )
  change_buttons({
    "Расстрелять рейдера из лазерного пистолета": BOS_battle_21,
    "Подойти вплотную к рейдеру и убить его голыми руками": BOS_battle_22,
    "Выбежать из здания": BOS_battle_23,
  })
  currentFunction = BOS_battle_2
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.1)
  change_image("img/revenge/pic_35.jpg")
  change_text(
    '<p>Вы остановились, делая вид, что у Вас застрял камешек. Это при том, что в силовой броне нет сапог и она полностью герметична. Однако строй Вы нарушили и в Вас тут же врезался <span class="yes">паладин Ромбус</span>, идущий позади Вас.</p><p>- Не нарушай строй, - хлопнул он Вас по шлему. – Иди, проверь это <span class="yes">здание</span>.</p><p>Вы с внутренней неохотой направились ко входу. Вместе с Вами пошли ещё двое: <span class="yes">рыцарь</span> и <span class="yes">паладин</span>.</p><p>Вы аккуратно приоткрыли ветхую дверь и вошли в <span class="yes">магазин</span>. В углу помещения сидел <span class="yes">рейдер</span> и держал вход под прицелом, поэтому Вы не сумели среагировать вовремя. <span class="yes">Рейдер</span> открыл по Вам огонь из мелкокалиберной винтовки. От неожиданности Вы на мгновение зажмурились. Через секунду Вы осознали, что полимерные сплавы Вашей <span class="yes">брони</span> надёжно защищают от пуль противника.</p>'
  )
  change_buttons({
    "Расстрелять рейдера из лазерного пистолета": BOS_battle_21,
    "Подойти вплотную к рейдеру и убить его голыми руками": BOS_battle_22,
    "Выбежать из здания": BOS_battle_23,
  })
  currentFunction = BOS_battle_3
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_21() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_36.jpg")
  change_text(
    '<p>Вы направили <span class="yes">лазерный пистолет</span> в сторону подонка и одним выстрелом отделили голову врага от туловища. Бегло осмотрев помещение, Вы убедились в том, что рейдер был тут один.</p><p><span class="yes">Паладин</span> и <span class="yes">рыцарь</span> из отряда заняли позиции у окна и стали вести плотный огонь по противнику. Снаружи шёл ожесточённый бой. Вы услышали крик <span class="yes">Старейшины</span> снаружи: "Вперёд, прикрываю!".</p>'
  )
  change_buttons({
    "Занять позицию на втором этаже здания": BOS_battle_211,
    "Выбежать из здания": BOS_battle_23,
  })
  currentFunction = BOS_battle_21
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_22() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_37.jpg")
  change_text(
    '<p>Вы приняли решение раздавить эту тварь голыми руками. Вы грозно двинулись на одинокого врага с намерением сделать из него котлету. Рейдер продолжал непрерывно стрелять из винтовки, несмотря на тщетность своих усилий. Мелкокалиберные пули не пробивали <span class="yes">броню</span> и рикошетили во все стороны.</p><p>Когда Вы были в метре от врага, несколько пуль отрикошетили от Вашей <span class="yes">брони</span> и попали в самого стрелка. Получив смертельные ранения, рейдер упал на пол и больше не поднимался. Паладин и рыцарь из отряда заняли позиции у окна и стали вести плотный огонь по противнику. Снаружи шёл ожесточённый бой. Вы услышали крик <span class="yes">Старейшины</span> снаружи: "Вперёд, прикрываю!".</p>'
  )
  change_buttons({
    "Занять позицию на втором этаже здания": BOS_battle_211,
    "Выбежать из здания": BOS_battle_23,
  })
  currentFunction = BOS_battle_22
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_23() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_34.jpg")
  change_text(
    '<p>Вы выбежали из здания и оказались под ураганным огнём со стороны холма. Индикатор состояния <span class="yes">брони</span> угрожающе замигал. Хватит носиться по полю боя, пока Ваша <span class="yes">броня</span> ещё в нормальном состоянии! Худшее, что может сейчас случиться, это оказаться без защиты.</p>'
  )
  change_buttons({
    "Занять позицию на втором этаже здания": BOS_battle_211,
    "Занять позицию за валуном под холмами": BOS_battle_121,
  })
  currentFunction = BOS_battle_23
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_211() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_33.jpg")
  change_text(
    '<p>Вы поднялись по лестнице на остов второго этажа <span class="yes">магазина</span>. Найдя укрытие, Вы старались одиночными выстрелами достать врага. Но рейдеры умело использовали ландшафт и старались не открываться ниже плеч. После нескольких выстрелов Вы поняли, что вести с этой позиции огонь из <span class="yes">пистолета</span> крайне неэффективно.</p><p>Отряд <span class="yes">Ромбуса</span> под шквальным огнём противника упорно шёл в лобовую атаку. Им не хватало поддержки огнём. Единственным выходом в сложившейся ситуации было непрерывно вести огонь по вершине холма, не давая противнику возможности поднять голову.</p>'
  )
  change_buttons({
    "Спуститься на первый этаж и занять другую позицию": BOS_battle_elderHelmet,
  })
  currentFunction = BOS_battle_211
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_elderHelmet() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_38.jpg")
  change_text(
    '<p>Выйдя из здания, Вы увидели, что <span class="yes">трое</span> рейдеров с ножами и кувалдами бросились на <span class="yes">Старейшину Мэксона</span>, отступившего от здания <span class="yes">магазина</span> на пару десятков метров. <span class="yes">Один</span> из них уже успел перебить трубки систем фильтрации воздуха в силовой броне Мэксона, а <span class="yes">второй</span> бросил под ноги Старейшины газовую гранату. <span class="yes">Третий</span> же был испепелён очередью из гатлинг-лазера Старейшины.</p>'
  )
  change_buttons({
    "Выстрелить прицельно в нападающих на Старейшину со своей позиции":
      BOS_battle_elderHelmet_1,
    "Броситься к Старейшине на помощь": BOS_battle_elderHelmet_2,
  })
  currentFunction = BOS_battle_elderHelmet
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_elderHelmet_1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_38.jpg")
  change_text(
    '<p>Вы выстрелили в рейдеров, облепивших со всех сторон <span class="yes">Мэксона</span> и, чудом не попав в <span class="yes">Старейшину</span>, убили самого рослого. Второй бандит был убит самим <span class="yes">Старейшиной</span>. Пока Вы бежали к <span class="yes">Старейшине</span>, тот смог самостоятельно выбраться из зоны поражения и снять повреждённый шлем.</p><p>Подбежав к отравленному газом главе Братства, Вы помогли ему добраться до южного угла <span class="yes">магазина</span> и укрыться от пуль, роем пролетавших над головами.</p>'
  )
  change_buttons({
    "Присесть рядом и посочувствовать Старейшине": BOS_battle_elderHelmet_11,
    "Попросить разрешения провести срочный ремонт повреждённого шлема":
      BOS_battle_elderHelmet_12,
    "Попросить разрешения вернуться на поле боя": BOS_battle_elderHelmet_13,
  })
  currentFunction = BOS_battle_elderHelmet_1
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_elderHelmet_11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_38.jpg")
  change_text(
    '<p>Вы сели рядом со <span class="yes">Старейшиной</span> и принялись причитать о том, как сильно тому досталось.</p><p>- Хватит разводить нюни, солдат, - сурово прервал Вас <span class="yes">Мэксон</span>. – Наши братья в тяжелой ситуации, пока мы здесь сидим. Немедленно направляйся к вон тому валуну у холмов и зайди врагу во фланг. Я буду здесь, прикрою тебя и основную группу. Приготовься.</p><p><span class="yes">Мэксон</span> пнул сломанный шлем ногой и установил на сошки гатлинг.</p><p>- Пошёл, пошёл, пошёл! - закричал он Вам и открыл огонь по вершинам холмов.</p><p>Огонь из гатлинга так плотно накрыл позиции рейдеров, что Вы без проблем добрались до валуна. Да и отряд <span class="yes">паладина Ромбуса</span> смог продвинуться ближе.</p>'
  )
  change_buttons({ "Зайти во фланг рейдерам": BOS_battle_112 })
  currentFunction = BOS_battle_elderHelmet_11
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_elderHelmet_12() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_38.jpg")
  change_text(
    '<p>Вы подняли шлем <span class="yes">Старейшины</span> и попросили разрешения починить его с помощью свого <span class="yes">ремнабора</span>.</p><p>Ты с ума сошёл, боец?! - заорал <span class="yes">Мэксон</span>. - Отравляющее вещество попало в систему фильтрации, я не надену этот шлем, пока он не пройдёт дезинфекцию. А ты немедленно направляйся к месту сражения. Эти дикари могут задавить численностью наш отряд. Никто не ожидал, что они могут так легко вывести герметичный шлем из строя, и будут применять против нас отравляющие газы.</p><p><span class="yes">Мэксон</span> выхватил у Вас из рук свой шлем и отбросил его в сторону. После чего установил на сошки гатлинг.</p></p><p>- Немедленно направляйся к вон тому валуну у холмов и зайди врагу во фланг. Я буду здесь, прикрою тебя и основную группу. Давай, по моей команде, - Старейшина Мэксон направил гатлинг в сторону холмов. - Пошёл, пошёл, пошёл!</p><p>Огонь из гатлинга так плотно накрыл позиции рейдеров, что Вы без проблем добрались до валуна. Да и отряд <span class="yes">паладина Ромбуса</span> смог продвинуться ближе.</p>'
  )
  change_buttons({ "Зайти во фланг рейдерам": BOS_battle_112 })
  currentFunction = BOS_battle_elderHelmet_12
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_elderHelmet_13() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_38.jpg")
  change_text(
    '<p>- <span class="yes">Старейшина Мэксон</span>, сэр, - обратились Вы к еле дышащему главе Братства. – Позвольте вернуться на поле битвы, помочь братьям.</p><p><span class="yes">Старейшина</span> отбросил в сторону свой шлем и закричал:</p><p>- Вот это правильно, солдат! Только для тебя будет особое задание. Немедленно направляйся к вон тому валуну у холмов и зайди врагу <span class="yes">во фланг</span>. Я буду здесь, прикрою основную группу. Приготовься.</p><p><span class="yes">Мэксон</span> установил на сошки свой гатлинг.</p><p>- Пошёл, пошёл, пошёл! - закричал он Вам и открыл огонь по вершинам холмов.</p><p>Огонь из гатлинга так плотно накрыл позиции рейдеров, что Вы без проблем добрались до валуна. Да и отряд <span class="yes">паладина Ромбуса</span> смог продвинуться ближе.</p>'
  )
  change_buttons({ "Зайти во фланг рейдерам": BOS_battle_112 })
  currentFunction = BOS_battle_elderHelmet_13
  setCookie("ccurrentFunction", currentFunction)
}

function BOS_battle_elderHelmet_2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_39.jpg")
  change_text(
    '<p>Справедливо решив, что <span class="yes">Старейшине</span>, оказавшемуся в окружении, как никогда нужна Ваша помощь, Вы бросились к нему на выручку. 10 метров, отделяющих Вас от него, Вы преодолели за секунду и почти в упор расстреляли прытких рейдеров. <span class="yes">Старейшина</span> катался в <span class="yes">силовой броне</span> по земле, задыхаясь от газов, проникающих в его <span class="yes">шлем</span>. Вам нужно принять решение, как помочь <span class="yes">Старейшине</span>, пока остальные заняты уничтожением врага.</p>'
  )
  change_buttons({
    "Оттащить Мэксона за угол здания": BOS_battle_elderHelmet_21,
    "Сорвать шлем с головы Старейшины": BOS_battle_elderHelmet_22,
  })
  currentFunction = BOS_battle_elderHelmet_2
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_elderHelmet_21() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_40.jpg")
  change_text(
    '<p>Вы приняли лучшее решение, какое было возможно принять в данной ситуации. Оказавшись за углом здания, <span class="yes">Мэксон</span> снял шлем и стал жадно глотать свежий воздух пересохшим ртом.</p>'
  )
  change_buttons({
    "Присесть рядом и посочувствовать Старейшине": BOS_battle_elderHelmet_11,
    "Попросить разрешения провести срочный ремонт повреждённого шлема":
      BOS_battle_elderHelmet_12,
    "Попросить разрешения вернуться на поле боя": BOS_battle_elderHelmet_13,
  })
  currentFunction = BOS_battle_elderHelmet_21
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_elderHelmet_22() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_38.jpg")
  change_text(
    '<p>Непонятно что ударило Вам в голову, но Вы решили для начала сорвать шлем с головы <span class="yes">Старейшины</span>. Вы отщёлкнули замок и стащили повреждённый шлем с <span class="yes">Мэксона</span>. После глубокого вдоха отравляющего газа <span class="yes">Старейшина</span> потерял сознание. Отлично.</p><p>Вы, скрипя от напряжения зубами, поволокли главу Братства к углу магазина. Тащить такой вес было слишком тяжело даже для сервоприводов <span class="yes">силовой брони</span>. Уложив <span class="yes">Старейшину</span> на землю за магазином, Вы приготовились делать ему искусственное дыхание. Однако, в последний момент <span class="yes">Мэксон</span> открыл глаза, быстро придя в себя на свежем воздухе.</p><p>- Идиот, - заорал на Вас <span class="yes">Старейшина Мэксон</span>. – Сначала спасти, чтобы потом убить, чёрт тебя дери?! Ты вообще башкой не думаешь?!</p><p><span class="yes">Старейшина</span> выглянул из-за угла и быстро оценил обстановку на поле боя.</p><p>- Так, боец, - крикнул он Вам. – Слушай внимательно. Немедленно направляйся к вон тому валуну у подножья холмов и зайди врагу <span class="yes">во фланг</span>. Я буду здесь, прикрою основную группу. Приготовься.</p><p><span class="yes">Мэксон</span> установил на сошки свой гатлинг.</p><p>- Пошёл, пошёл, пошёл! - закричал он Вам и открыл огонь по вершинам холмов.</p><p>Огонь из гатлинга так плотно накрыл позиции рейдеров, что Вы без проблем добрались до валуна. Да и отряд <span class="yes">паладина Ромбуса</span> смог продвинуться ближе.</p>'
  )
  change_buttons({ "Зайти во фланг рейдерам": BOS_battle_112 })
  currentFunction = BOS_battle_elderHelmet_22
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_finalStage() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_33.jpg")
  change_text(
    '<p>«Пора кончать с ними» - решили Вы и, встав на вершине холма, стали расстреливать рейдеров практически в упор. Разбойники, не ожидавшие удара с фланга, потеряв практически всех бойцов, бросились врассыпную. <span class="yes">Паладин Ромбус</span>, восхитившись Вашей доблестью, поднял отряд для завершения атаки. Бойцы Братства карабкались на холм, стараясь уничтожить всех врагов до единого.</p><p>- Добить! Не дайте ублюдкам уйти! - кричал <span class="yes">Ромбус</span>.</p><p>Однако полностью уничтожить банду оказалось невозможно. Ближе всех к врагу были Вы, но в Вашем <span class="yes">пистолете</span> не оставалось <span class="yes">зарядов</span>. А отряд Ромбуса всё ещё взбирался на вершину.</p><p>Всё, что Вы могли делать - это смотреть вслед удирающим отщепенцам. Преследовать быстроногих преступников в тяжелой <span class="yes">силовой броне</span> было непосильной задачей.</p>'
  )
  change_buttons({
    "Оглянуться на позицию, откуда стрелял Старейшина Мэксон": makson_death,
  })
  currentFunction = BOS_battle_finalStage
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_battle_finalStage_2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_33.jpg")
  change_text(
    '<p>Стараясь не подвергаться лишней опасности, Вы принялись стрелять по врагу из укрытия. Стоял адский грохот от выстрелов, и рейдеры не сразу заметили, как лишились доброй половины отряда и преимущества.</p><p>Наконец <span class="yes">Ромбус</span> смог возобновить движение к холму. Рейдеры, увидев, что проигрывают битву, бросились врассыпную. Некоторые побежали в Вашу сторону. Вам не оставалось ничего, кроме как уничтожить их.</p><p>- Добить! Не дайте ублюдкам уйти! - кричал <span class="yes">Ромбус</span>.</p><p>Однако полностью уничтожить банду оказалось невозможно. Ближе всех к врагу были Вы, но в вашем <span class="yes">пистолете</span> не оставалось <span class="yes">зарядов</span>. А отряд Ромбуса всё ещё взбирался на вершину.</p><p>Всё, что Вы могли делать - это смотреть вслед удирающим отщепенцам. Преследовать быстроногих преступников в тяжелой <span class="yes">силовой броне</span> было непосильной задачей.</p>'
  )
  change_buttons({
    "Оглянуться на позицию, откуда стрелял Старейшина Мэксон": makson_death,
  })
  currentFunction = BOS_battle_finalStage_2
  setCookie("ccurrentFunction", currentFunction)
}
function makson_death() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_41.jpg")
  change_text(
    '<p>Вы заметили, что <span class="yes">Старейшина</span> лежит на земле, а его оружие лежит в стороне. Действительно, во время боя Вы и не обратили внимания на то, в какой момент прекратился огонь поддержки <span class="yes">Старейшины Мэксона</span>.</p><p>Вы с криком бросились к нему.</p><p><span class="yes">Старейшина</span> был жив. К своему огромному удивлению, Вы увидели стрелу, засевшую в трапеции ближе к плечу <span class="yes">Мэксона</span>. И несмотря на его полное боли и страданий лицо, Вы были в полной уверенности, что бой завершён без потерь. Вам даже удалось отличиться.</p>'
  )
  change_buttons({
    "Позвать медика": makson_death_1,
    "Осмотреть рану Старейшины": makson_death_2,
    "Приободрить Старейшину Мэксона": makson_death_3,
  })
  currentFunction = makson_death
  setCookie("ccurrentFunction", currentFunction)
}
function makson_death_1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_43.jpg")
  change_text(
    '<p>Вы стали кричать: «Медика сюда! <span class="yes">Старейшина</span> ранен!» и махали руками и так бегущему к Вам и <span class="yes">Мэксону</span> отряду.</p><p>Прибывший на место <span class="yes">медик</span> отпихнул Вас в сторону и стал изучать рану <span class="yes">Старейшины</span>. Судя по сдержанным фразам <span class="yes">врача</span>, Вы поняли, что хоть сама рана и не серьёзная, стрела была отравлена каким-то <span class="yes">неизвестным ядом</span>.</p><p>Затем <span class="yes">врач</span> попросил всех расступиться и принялся проводить реанимационные действия. <span class="yes">Ромбус</span> отправил Вас и других бойцов проверять трупы рейдеров и собирать с тел вооружение.</p><p>Вы с остальными отошли от <span class="yes">Ромбуса</span> и <span class="yes">медика</span>, занимающегося <span class="yes">Старейшиной</span>, и принялись осматривать трупы врагов. На теле каждого Вы обнаружили множество причудливых татуировок. В основном это были змеи и огонь. «Действительно Гадюки» - подумали Вы и внезапно вспомнили о том, что сегодня Ваши руки стали запачканы кровью человека.</p>'
  )
  change_buttons({
    "Вы потрясены событиями этого дня": makson_death_4,
    "Вы были готовы к такому повороту событий": makson_death_5,
  })
  currentFunction = makson_death_1
  setCookie("ccurrentFunction", currentFunction)
}
function makson_death_2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_43.jpg")
  change_text(
    '<p>Пока братья бежали к вам, Вы аккуратно осмотрели рану. Ранение было не смертельным, однако сама рана выглядела подозрительной. Вместе с кровью из неё вытекало нечто жёлтое и дурнопахнущее. Вам не хватило знаний, чтобы определить правильную схему помощи раненому в этом случае. <span class="yes">Старейшине</span> с каждой секундой становилось хуже.</p><p>Прибывший на место <span class="yes">медик</span> отпихнул Вас в сторону и стал изучать рану <span class="yes">Старейшины</span>. Судя по сдержанным фразам <span class="yes">врача</span>, Вы поняли, что хоть сама рана и не серьёзная, стрела была отравлена каким-то <span class="yes">неизвестным ядом</span>.</p><p>Затем <span class="yes">врач</span> попросил всех расступиться и принялся проводить реанимационные действия. <span class="yes">Ромбус</span> отправил Вас и других бойцов проверять трупы рейдеров и собирать с тел вооружение.</p><p>Вы с остальными отошли от <span class="yes">Ромбуса</span> и <span class="yes">медика</span>, занимающегося <span class="yes">Старейшиной</span>, и принялись осматривать трупы врагов. На теле каждого Вы обнаружили множество причудливых татуировок. В основном это были змеи и огонь. «Действительно Гадюки» - подумали Вы и внезапно вспомнили о том, что сегодня Ваши руки стали запачканы кровью человека.</p>'
  )
  change_buttons({
    "Вы потрясены событиями этого дня": makson_death_4,
    "Вы были готовы к такому повороту событий": makson_death_5,
  })
  currentFunction = makson_death_2
  setCookie("ccurrentFunction", currentFunction)
}
function makson_death_3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_43.jpg")
  change_text(
    '<p>Вы с грустью смотрели на раненого главу Братства Стали и понимали, что не в силах ему помочь. Решив как-то воодушевить <span class="yes">Старейшину</span>, Вы стали рассказывать ему о практически полном уничтожении рейдеров, о том, что потерь среди личного состава нет и о том, что дальше всё будет хорошо.</p><p>- Ты молодец, рыцарь, - с трудом произнёс <span class="yes">Мэксон</span>. -  Враг будет разбит, запомни. Видишь, оказался я без шлема и стал жертвой подлой атаки исподтишка. Но ничего, и так бывает…</p><p><span class="yes">Старейшина</span> ещё хотел что-то Вам сказать, однако в этот момент подоспел <span class="yes">медик</span> и остальные бойцы из Вашего отряда. <span class="yes">Врач</span> отпихнул Вас в сторону и стал изучать рану. Судя по его сдержанным фразам, Вы поняли, что хоть сама рана и не серьёзная, стрела была отравлена каким-то <span class="yes">неизвестным ядом</span>.</p><p>Затем <span class="yes">врач</span> попросил всех расступиться и принялся проводить реанимационные действия. <span class="yes">Ромбус</span> отправил Вас и других бойцов проверять трупы рейдеров и собирать с тел вооружение.</p><p>Вы с остальными отошли от <span class="yes">Ромбуса</span> и <span class="yes">медика</span>, занимающегося <span class="yes">Старейшиной</span>, и принялись осматривать трупы врагов. На теле каждого Вы обнаружили множество причудливых татуировок. В основном это были змеи и огонь. «Действительно Гадюки» - подумали Вы и внезапно вспомнили о том, что сегодня Ваши руки стали запачканы кровью человека.</p>'
  )
  change_buttons({
    "Вы потрясены событиями этого дня": makson_death_4,
    "Вы были готовы к такому повороту событий": makson_death_5,
  })
  currentFunction = makson_death_3
  setCookie("ccurrentFunction", currentFunction)
}
function makson_death_4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_44.jpg")
  change_text(
    '<p>Мысль об убийстве стольких людей за один только день плотно засела у Вас в голове. Вы пытались дать себе оправдание, ведь всё-таки это были враги, которые убивали людей, несколько минут назад пытались убить Вас и Ваших братьев и соратников. Примириться было сложно, однако Вы понимали, что рано или поздно это придётся принять. Ведь поступив на службу в элитный отряд, Вы связали свою жизни с <span class="yes">защитой</span> всех обитателей бункера. А значит, и возможным убийством людей, ставящих под угрозу жизнь членов стального Ордена. С другой стороны… наверняка ещё будет возможность <span class="yes">отказаться</span> и вернуться в свою мастерскую.</p><p>Ваши мысли были прерваны криком за спиной.</p>'
  )
  change_buttons({
    "Вернуться к бойцам, столпившимся вокруг Старейшины": makson_death_6,
  })
  currentFunction = makson_death_4
  setCookie("ccurrentFunction", currentFunction)
}
function makson_death_5() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_45.jpg")
  change_text(
    '<p>Вы не задержали эту мысль в голове надолго. В конце концов, ликвидация врагов <span class="yes">Братства</span> должна отныне стать частью Вашей жизни. Сегодня Вами был сделан первый шаг. Внутренне Вы были довольны, что этот первый шаг стал не таким сложным, как Вы его себе представляли.</p><p>«Впереди будет ещё множество славных битв. Таких битв как эта!» - подумали Вы и услышали крик за спиной.</p>'
  )
  change_buttons({
    "Вернуться к бойцам, столпившимся вокруг Старейшины": makson_death_6,
  })
  currentFunction = makson_death_5
  setCookie("ccurrentFunction", currentFunction)
}
function makson_death_6() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_42.jpg")
  change_text(
    '<p><span class="yes">Мэксон</span> был мёртв. Сын основателя Братства Стали <span class="yes">Роджера Мэксона</span>, свидетель начала Великой Войны, участник десятков наземных операций Братства был убит шальной стрелой грязного пустынного рейдера. Яд проник в кровеносную систему и за считанные минуты убил <span class="yes">Верховного Старейшину</span>. Глаза его смотрели в небо, а губы застыли в искусственной улыбке, словно желая приободрить ветеранов и едва оперившихся рыцарей - «Ничего, и так бывает, братья!». <span class="yes">Старший паладин Ромбус</span> вытащил голодиск с последними словами <span class="yes">Старейшины</span> из командирского <span class="yes">Pip-Boy 2000 B.E.</span></p>'
  )
  change_buttons({ "Вернуться с отрядом в бункер": BOS_bunker })
  currentFunction = makson_death_6
  setCookie("ccurrentFunction", currentFunction)
}

/* После битвы */
function BOS_bunker() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 20
  change_time(0)
  change_image("img/revenge/pic_46.jpg")
  change_text(
    '<p>Путь назад вы проделали в полном молчании. У командования ушло несколько часов на то, чтобы собрать воедино все события этого ужасного дня и подготовиться к траурной церемонии. На прощание со <span class="yes">Старейшиной</span> собрались все обитатели <span class="yes">Лост-Хиллз</span>.</p><p>Гражданская панихида длилась около часа. Было сказано много хороших слов о <span class="yes">Старейшине Мэксоне</span>, о его отце, о будущем Братства. Были даны обещания уничтожить всех рейдеров до единого. Особенно пламенно выступал <span class="yes">старший паладин Ромбус</span>. Зал был воодушевлён и все в едином порыве поддержали его. Затем все начали расходиться. Высшие члены командования стояли недалеко от трибуны и что-то оживлённо обсуждали.</p>'
  )
  change_buttons({
    "Остаться сидеть на своём месте": BOS_bunker_1,
    "Подойти к гробу и попрощаться со Старейшиной": BOS_bunker_2,
    "Покинуть зал собрания": BOS_bunker_3,
  })
  currentFunction = BOS_bunker
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_bunker_1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(1)
  change_image("img/revenge/pic_47.jpg")
  change_text(
    '<p>Зал медленно пустел. Каждый подходил к гробу и преклонял голову перед <span class="yes">Старейшиной Мэксоном</span>. Вы же не могли оторваться от скамьи. Вы всё ещё были потрясены событиями этого дня и не могли смириться с потерей лидера. Как теперь всё будет? Кто встанет у руля? Его <span class="yes">сын</span>? Или <span class="yes">Совет Старейшин</span>? Вопросы, вопросы, которые Вы не могли задать.</p><p>- Рыцарь, - голос одного из старейшин прервал Ваши мысли. - Как здорово, что Вы задержались, мы как раз о Вас говорим. Пройдемте в кабинет заседаний <span class="yes">Совета</span>.</p><p>Вы встрепенулись и пошли за высшими руководителями Ордена в их кабинет.</p>'
  )
  change_buttons({ "Выслушать старейшин": BOS_bunker_4 })
  currentFunction = BOS_bunker_1
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_bunker_2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  change_image("img/revenge/pic_48.jpg")
  change_text(
    '<p>Гроб <span class="yes">Старейшины</span> был закрыт и лица его Вы не видели. Около минуты Вы находились у гроба в смятении. Затем, найдя в себе силы, Вы приложили сжатый кулак к левому плечу, но произнести «Ad Victoriam» никак не смогли. Неожиданно Вы услышали, как Вас зовут…</p><p>- Рыцарь, - голос одного из старейшин прервал Ваши мысли. - Как здорово, что Вы задержались, мы как раз о Вас говорим. Пройдемте в кабинет заседаний <span class="yes">Совета</span>.</p><p>Вы отняли кулак от плеча и пошли за высшими руководителями Ордена в их кабинет.</p>'
  )
  change_buttons({ "Выслушать старейшин": BOS_bunker_4 })
  currentFunction = BOS_bunker_2
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_bunker_3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  change_image("img/revenge/pic_47.jpg")
  change_text(
    '<p>Вы так и не смогли заставить себя подойти к гробу <span class="yes">Старейшины Мэксона</span>. Вы не верили в случившееся. Ещё днём этот великий человек вёл свой отряд в бой, и вот сейчас Вы видите вместо него простой гроб из дерева.</p><p>Наконец Вы встали и, не подходя близко к гробу, направились к выходу.</p><p>- Не нашли в себе силы проститься, рыцарь? – услышали Вы голос за спиной.</p><p>Вы резко обернулись и увидели идущего к Вам старейшину из <span class="yes">Совета</span>.</p><p>- Ничего, я понимаю Ваши чувства, - продолжил он. – А мы как раз о Вас говорим. Пройдемте в кабинет заседаний <span class="yes">Совета</span>.</p><p>Вы покорно пошли за высшими руководителями Ордена в их кабинет.</p>'
  )
  change_buttons({ "Выслушать старейшин": BOS_bunker_4 })
  currentFunction = BOS_bunker_3
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_bunker_4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  change_image("img/revenge/pic_49.jpg")
  change_text(
    '<p>Как Вы уже слышали, рыцарь, <span class="yes">Совет</span> принял решение о полном уничтожении рейдеров из банды <span class="yes">Гадюк</span> в регионе. Смерть <span class="yes">Старейшины Мэксона</span> не должна быть напрасной. Также, ликвидировав угрозу, мы рассчитываем расширить торговлю с <span class="yes">Хабом</span> и наладить график постоянных поставок. Однако у нас есть проблема. Братство не представлено на поверхности, о нас ходит множество слухов и легенд. Солдаты патруля и охранники у входа — единственные из Ордена, кого обитатели Пустоши могли встретить на поверхности. Мы не можем знать наверняка, снимали ли солдаты патруля свои шлемы на поверхности, рассекретив таким образом свою личность. Вы показали себя умелым воином, готовым в случае нестандартных ситуаций принимать самостоятельные решения. И мы хотим поручить Вам <span class="yes">ответственное задание</span>. Готовы?</p>'
  )
  change_buttons({
    "Так точно! Я готов к любому заданию Братства.": BOS_bunker_5,
    "Прошу меня простить, но я не чувствую в себе силы для продолжения. Позвольте мне вернуться к работе в ремонтном цеху. Я чувствую, что буду более полезен здесь, в бункере.":
      prologue_fail_2,
  })
  currentFunction = BOS_bunker_4
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_bunker_5() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  change_image("img/revenge/pic_49.jpg")
  change_text(
    '<p>- Прекрасно. На другой ответ мы и не рассчитывали, - удовлетворённо сказал старейшина из Совета. - Ваша основная задача, рыцарь, установить точное месторасположения <span class="yes">главной базы Гадюк</span>. Патрулей у нас мало, а времени ещё меньше. Можно прочёсывать пустыню годами, но так и не найти нору, в которой сидят эти змеи. Мы уверены, что частые атаки на караваны связаны с тем, что в <span class="yes">Хабе</span> есть информатор бандитов, который сливает на <span class="yes">главную базу</span> рейдеров информацию о маршрутах и грузах выходящих караванов. В Пустоши Вы — человек новый. Это Ваше преимущество. Сохраните в тайне Вашу принадлежность к Братству. Отправляйтесь в <span class="yes">Хаб</span> и найдите выходы на членов банды <span class="yes">Гадюк</span>.</p><p>- Разрешите выполнять? - спросили Вы.</p><p>- Поторопитесь, рыцарь. Выступать нужно прямо сейчас. У Вас всего <span class="yes">14 дней</span> на выполнение задания, а это значит, что покинуть <span class="yes">Хаб</span> Вы должны <span class="yes">не позднее вечера 9 дня</span>, чтобы у Вас хватило времени на обратную дорогу. <span class="yes">Старейшина</span> должен быть отмщён как можно скорее, иначе мы опасаемся бунта среди личного состава. Горячие головы уже предлагают идти и прочёсыпать <span class="yes">Пустошь</span> в поисках главной базы <span class="yes">рейдеров</span>. Так что мы на Вас надеемся. Интендант <span class="yes">Майкл</span> уже получил все необходимые распоряжения относительно Вас. Зайдите к нему перед выходом. И вот ещё что… <span class="yes">Силовую броню</span> и прочее <span class="yes">снаряжение</span>, естественно, придётся оставить на складе. Ad Victoriam!</p>'
  )
  change_buttons({ "Выйти в коридор": BOS_bunker_6a })
  currentFunction = BOS_bunker_5
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_bunker_6a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (stan === false) {
    change_image("img/revenge/pic_49b.jpg")
    change_text(
      '<p>Выйдя из зала собраний, Вы направились на <span class="yes">3 этаж</span>. Вам захотелось повидаться с <span class="yes">другом</span> на прощание. Войдя в свой кубрик, Вы никого не обнаружили. Провернув ещё раз  утренний разговор у себя в голове, Вы вспомнили, что <span class="yes">Стэн</span> должен был сегодня работать в <span class="yes">мастерской</span> до упора. Орать посреди ночи возле запертого цеха Вы не решились.</p><p>С досады Вы смахнули со стола на пол стопку журналов об исследованиях внешнего мира. Теперь уже нет времени на научно-популярную литературу.</p>'
    )
  } else {
    change_image("img/revenge/pic_49a.jpg")
    change_text(
      '<p>Выйдя из зала собраний, Вы направились на <span class="yes">3 этаж</span>. Вам захотелось повидаться с <span class="yes">другом</span> на прощание. Подходя к своему кубрику, Вы услышали звуки начинающегося веселья у соседей. Вы вспомнили, что сослуживцы из соседнего кубрика планировали устроить посиделки с алкоголем.</p><p>Вы тихонько подошли к двери и прислушались. Изнутри послышался заливистый смех <span class="yes">Розы Сарона</span> и отчётливый голос <span class="yes">Стэна</span>, который рассказывал ей одну из своих шуток.</p><p>«Ну, хоть у него всё хорошо складывается», - подумали Вы. Было очевидно, что проститься никак не получится.</p><p>«Ладно, до встречи, старина. Авось, ещё свидимся», - прошептали Вы и зашагали прочь от двери весёлой компании.</p>'
    )
  }
  change_buttons({ "Спуститься на первый этаж": BOS_bunker_6 })
  currentFunction = BOS_bunker_6a
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_bunker_6() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.6)
  change_image("img/revenge/pic_21c.jpg")
  change_text(
    '<p>Вы шли по тёмным коридорам к лифту. Уже прозвучал отбой, и, кроме патрулей из внутренней охраны бункера, Вы никого не встречали. Поднявшись на <span class="yes">1 уровень</span>, Вы прошли к столу <span class="yes">Майкла</span>, который, несмотря на поздний час, работал и явно задержался на службе из-за Вас.</p><p><span class="yes">Майкл</span> встретил Вас простым кивком головы. От его обычной широкой улыбки не осталось и следа.</p><p>- Видишь как вышло, брат, <span class="yes">Старейшины Мэксона</span> больше нет с нами, - начал он. Некоторое время Вы находились в тишине, потом <span class="yes">Майкл</span> встрепенулся и стал доставать заранее приготовленные вещи.</p><p>- Ну что, в путь? Только я и охрана у входа в бункер знаем о твоём выходе. Смотри не болтай. Твоя секретность — это самое главное, друг. Итак, выходи из <span class="yes">силовой брони</span>. Не волнуйся, она будет тебя ждать у меня на <span class="yes">складе</span>. И я уже подготовил твоё <span class="yes">снаряжение</span>. <span class="yes">Крышки от бутылок</span> — это валюта региона наверху. По курсу обмена сориентируешься на месте, в бункере мы ими не пользуемся.</p>'
  )
  change_buttons({ "Посмотреть, что выдал Вам Майкл": BOS_bunker_7 })
  currentFunction = BOS_bunker_6
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_bunker_7() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  cans += 4
  raise_caps(100)
  rifle_ammo += 24
  getShotgun = true
  change_shotgun()
  raise_stimpacks(2)
  change_time(0.05)
  change_image("img/revenge/pic_21c.jpg")
  change_text(
    '<p>Вы явно ожидали большего. Среди выданных Вам вещей Вы обнаружили: комплект <span class="yes">кожаной брони</span>, двухзарядный <span class="yes">дробовик</span> и <span class="yes">24 патрона</span> к нему, <span class="yes">2 стимулятора</span>, <span class="yes">нож</span>, <span class="yes">газовую зажигалку</span>, <span class="yes">набор отмычек</span> и мешок с облезлыми <span class="yes">крышками</span> от бутылок. Из провианта было <span class="yes">4 банки</span> с консервированным мясом и <span class="yes">фляга</span> с водой. Диета, однако.</p>'
  )
  change_buttons({
    "Возмутиться и попросить больше": BOS_bunker_8,
    "Поблагодарить за всё и принять снаряжение": BOS_bunker_9,
  })
  currentFunction = BOS_bunker_7
  setCookie("ccurrentFunction", currentFunction)
  setCookie("ccans", cans)
  setCookie("cgetShotgun", getShotgun)
}
function BOS_bunker_8() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  change_image("img/revenge/pic_21b.jpg")
  change_text(
    '<p>- И это всё? - громко возмутились Вы. – Ни еды, ни брони, ни оружия?! Ты совсем с ума сошёл, козёл? Как я выживу там наверху?</p><p>- А ты хотел, чтобы тебе танк подогнали ко входу?! - закричал на Вас <span class="yes">Майкл</span>. - Как ты не поймёшь, рыбья башка, ты не должен привлечь к себе лишнее внимание! Энергетическое оружие, силовая броня и остальные прелести нашей жизни встречаются крайне редко на Пустошах! Такой арсенал вызовет нездоровые подозрения. Еды в обрез, чтобы дошёл, а не свалился под тяжестью груза где-нибудь на полпути. Всё, ставь тут свою подпись и греби давай, достал уже!</p><p>Хочешь - не хочешь, а Вам пришлось выйти из <span class="yes">силовой брони</span> и оставить <span class="yes">лазерный пистолет</span>. Вы приняли новое <span class="yes">снаряжение</span> и хмуро попрощались с <span class="yes">интендантом</span>. Тот, ничего Вам не ответив, быстрым шагом направился к лифту.</p>'
  )
  change_buttons({ "Подняться на поверхность": BOS_bunker_out })
  currentFunction = BOS_bunker_8
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_bunker_9() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  change_image("img/revenge/pic_21b.jpg")
  change_text(
    '<p>Вы проверили снаряжение и сердечно поблагодарили <span class="yes">Майкла</span> за всё. У Вас было неприятное чувство, что Вы можете не вернуться из столь опасного путешествия. Вы сдали свою броню и оружие и облачились в лёгкое <span class="yes">кожаное обмундирование</span>, подогнанное точно по Вашему размеру. На ремнях было множество подсумков, по которым Вы удобно распихали всё своё <span class="yes">снаряжение</span>.</p><p>Пожав на прощание руку, <span class="yes">Майкл</span> направился в сторону лифта.</p>'
  )
  change_buttons({ "Подняться на поверхность": BOS_bunker_out })
  currentFunction = BOS_bunker_9
  setCookie("ccurrentFunction", currentFunction)
}
function BOS_bunker_out() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 21
  change_time(0.2)
  change_image("img/revenge/pic_50.jpg")
  change_text(
    '<p>Выйдя из лифта, ведущего на поверхность, Вы передёрнули плечами от непривычной прохлады. Дневной зной не устоял под потоками ледяного ночного ветра пустыни. Вы стояли перед входом в бункер Братства Стали. <span class="yes">Лост-Хиллз</span> во всём своём великолепии — маленькое здание с лифтом в бункер и два стража перед входом. Больше ничего не осталось от довоенного городка. Вокруг были сплошные завалы - вечная хворь оставшихся крупных городов.</p><p>Вы крались по разрушенным улицам как тень, петляя из переулка в переулок. Единственное, о чём Вы мечтали – это нe попасться в зубы какой-нибудь хищной твари, коих на просторах Пустоши водилось немало.</p><p>Через несколько минут Вы покинули город, и перед Вами раскинулись бескрайние просторы пустыни. <span class="yes">Хаб</span> находится в <span class="yes">4 днях</span> пути. Таким образом, если поторопиться, у Вас останется достаточно времени на выполнение задания. И всё же лучше оставить времени с запасом, чтобы не провалить сроки в случае возникновения непредвиденных обстоятельств.</p>'
  )
  change_buttons({ "Уйти в ночь": main_quest_wasteland })
  currentFunction = BOS_bunker_out
  setCookie("ccurrentFunction", currentFunction)
}
