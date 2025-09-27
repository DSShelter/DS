function main_quest_wasteland() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(1)
  change_image("img/revenge/pic_51.jpg")
  change_text(
    '<p>Вы шли уже около <span class="yes">часа</span>, когда ощутили дикую усталость. Вас прямо валило с ног. Лучше бы Вам было поспать перед дальней дорогой. Однако, крайние условия конспирации и срочности вынудили Вас покинуть бункер сразу после получения задания. Теперь же Вам нужно было <span class="yes">восстановить силы</span>, чтобы продолжать путь.</p>'
  )
  change_buttons({
    "Найти подходящее место для ночлега": main_quest_wasteland_1,
    "Превозмочь себя и продолжить путь": main_quest_wasteland_2,
  })
  currentFunction = main_quest_wasteland
  setCookie("ccurrentFunction", currentFunction)
}

/* На заправке */
function main_quest_wasteland_1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 23.5
  change_image("img/revenge/pic_53.jpg")
  change_text(
    '<p>Из последних сил Вы стали искать место для ночлега. Как раз впереди виднелась <span class="yes">старая автозаправка</span>. Главное сейчас укрыться от пронизывающего ночного ветра. А где спать Вам уже было абсолютно безразлично.</p>'
  )
  change_buttons({
    "Открыть дверь и заглянуть внутрь": main_quest_wasteland_11,
    "Посмотреть в окно": main_quest_wasteland_12,
  })
  currentFunction = main_quest_wasteland_1
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.1)
  change_image("img/revenge/pic_55.jpg")
  change_text(
    '<p>Ничего не поделаешь, остаётся надеяться лишь на американский авось и лезть в здание, проводя разведку боем. Приоткрыв дверь и держа свой <span class="yes">дробовик</span> наготове, Вы заглянули внутрь помещения. При свете Луны Вы увидели блестящий ствол, направленный прямо на Вас. Сон как рукой сняло.</p>'
  )
  change_buttons({
    "Выстрелить в темноту и сделать кувырок в сторону":
      main_quest_wasteland_111,
    "Сделать кувырок в сторону и быть готовым ко всему":
      main_quest_wasteland_112,
    "Покориться судьбе и стоять на месте, вдруг владелец ствола окажется проворнее Вас и застрелит при малейшем движении":
      main_quest_wasteland_113,
  })
  currentFunction = main_quest_wasteland_11
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_12() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.1)
  change_image("img/revenge/pic_54.jpg")
  change_text(
    '<p>Окна в этом <span class="yes">здании</span> были мутные настолько, что при свете Луны было невозможно разобрать, что за ними скрывается.</p>'
  )
  change_buttons({
    "Открыть дверь и заглянуть внутрь": main_quest_wasteland_11,
  })
  currentFunction = main_quest_wasteland_12
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 1
  change_shotgun()
  change_time(0.2)
  change_image("img/revenge/pic_52.jpg")
  change_text(
    '<p>Не искушая судьбу понапрасну, Вы выстрелили по Вашим расчётам в грудь обладателя <span class="yes">пистолета</span> и резко отпрыгнули в сторону, сделав кувырок. Растянувшись на песке, Вы во все уши стали вслушиваться в ночную тишину. Наверное, Вы всё-таки приложили засранца, так как никаких звуков из помещения не доносилось.</p>'
  )
  change_buttons({
    "Крикнуть «Кто там?» и ждать ответа": main_quest_wasteland_1111,
    "Подползти к двери и заглянуть внутрь": main_quest_wasteland_1112,
  })
  currentFunction = main_quest_wasteland_111
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_112() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.2)
  change_image("img/revenge/pic_52.jpg")
  change_text(
    '<p>Вы сделали быстрый кувырок влево и легли на землю, направив ствол своего <span class="yes">дробовика</span> в сторону выхода. Нужно предпринять, что-нибудь.</p>'
  )
  change_buttons({
    "Крикнуть «Кто там?» и ждать ответа": main_quest_wasteland_1111,
    "Подползти к двери и заглянуть внутрь": main_quest_wasteland_1112,
    "Вскочить, распахнуть дверь ногой и выстрелить дуплетом, чтобы наверняка уложить засранца":
      main_quest_wasteland_1123,
  })
  currentFunction = main_quest_wasteland_112
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_113() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.7)
  change_image("img/revenge/pic_56.jpg")
  change_text(
    '<p>Вы замерли на месте, понимая, что любое резкое движение может спровоцировать держащего Вас на мушке. В тупом молчании Вы простояли секунд десять. Фигура, нацелившая на Вас <span class="yes">ствол</span>, сидела в кресле - качалке и не шевелилась. Наконец Вы не выдержали:</p><p>- Друг, - обратились Вы к незнакомцу. – Ты не будешь против, если я опущу <span class="yes">оружие</span>. Я не причиню тебя зла, я просто хотел укрыться у тебя на заправке от ветра.</p><p>Однако, незнакомец молчал. Вы аккуратно опустили <span class="yes">ружьё</span>, следя за <span class="yes">пистолетом</span>. Что-то странное было и в поведении незнакомца, и в том, как он держал своё оружие. Догадываясь что тут к чему, Вы достали зажигалку и чиркнули колёсиком. Вашему взору предстало печальное зрелище: возле входа в кресле сидел старик, труп которого был белым как лист бумаги. Судя по всему, он умер недавно. Твердая рука его крепко сжимала <span class="yes">пистолет</span>. Больше в маленьком помещении автозаправки никого не было.</p>'
  )
  change_buttons({
    "Без сил упасть на тахту в углу комнаты": main_quest_wasteland_sleep,
  })
  currentFunction = main_quest_wasteland_113
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_1111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.1)
  change_image("img/revenge/pic_52.jpg")
  change_text(
    "<p>Вы громко крикнули в сторону дверного проёма, однако, ответа так и не дождались. Видимо, тот, кто там засел, если был жив, оказался со стальными нервами. Но и Вам ждать кто кого пересидит не хотелось. Тем более, время было не на Вашей стороне.</p>"
  )
  change_buttons({
    "Подползти к двери и заглянуть внутрь": main_quest_wasteland_1112,
    "Вскочить, распахнуть дверь ногой и выстрелить дуплетом, чтобы наверняка уложить засранца":
      main_quest_wasteland_1123,
  })
  currentFunction = main_quest_wasteland_1111
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_1112() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.1)
  change_image("img/revenge/pic_56.jpg")
  change_text(
    '<p>Стараясь не издавать звуков, Вы подползли к двери и ещё раз заглянули внутрь. Блестящий ствол был на месте. Присмотревшись, Вы заметили, что <span class="yes">пистолет</span>, направленный в сторону выхода не делает ни малейшего движения.</p><p>Под грохот стука Вашего сердца Вы чиркнули колёсиком зажигалки и извлекли огонь. Вашему взору предстало печальное зрелище: возле входа в кресле сидел старик, труп которого был белым как лист бумаги. Судя по всему, он умер недавно. Твердая рука его крепко сжимала <span class="yes">пистолет</span>. Больше в маленьком помещении <span class="yes">автозаправки</span> никого не было.</p>'
  )
  change_buttons({
    "Без сил упасть на тахту в углу комнаты": main_quest_wasteland_sleep,
  })
  currentFunction = main_quest_wasteland_1112
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_1123() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 2
  change_shotgun()
  change_time(0.1)
  change_image("img/revenge/pic_56.jpg")
  change_text(
    '<p>Злой, уставший, потерявший всякое терпение, Вы подскочили к двери и со всей силы саданули по ней ногой. Дверь распахнулась и в свете Луны  Вы увидели незнакомца, сидящего в кресле-качалке. В руках у него по-прежнему был <span class="yes">пистолет</span>, направленный в Вашу сторону.</p><p>Не давая засранцу ни одного шанса, Вы в упор выстрелили незнакомцу в грудь. По инерции кресло стало раскачиваться впёрёд-назад, однако, ни поза, ни положение рук у хозяина помещения не изменились.</p><p>Догадываясь что тут к чему, Вы достали зажигалку и чиркнули колёсиком. Вашему взору предстало печальное зрелище: возле входа в кресле сидел старик, труп которого был белым как лист бумаги. Судя по всему, он умер недавно. Твердая рука его крепко сжимала <span class="yes">пистолет</span>. Больше в маленьком помещении <span class="yes">автозаправки</span> никого не было.</p>'
  )
  change_buttons({
    "Без сил упасть на тахту в углу комнаты": main_quest_wasteland_sleep,
  })
  currentFunction = main_quest_wasteland_1123
  setCookie("ccurrentFunction", currentFunction)
}

/* Встреча с волками */
function main_quest_wasteland_2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.5)
  change_image("img/revenge/pic_57.jpg")
  change_text(
    '<p>«Только не останавливаться! Только вперёд,» - твердили Вы себе.</p><p> Упёрто шагая в ночь, Вы шли навстречу опасным приключениям. Они в свою очередь не заставили себя ждать. Из темноты на Вас уставились не менее <span class="yes">шести</span> пар горящих глаз. Вы остановились. Казалось, душа упала в пятки. Глаза не мигая, уставились на Вас. Затем послышался протяжный волчий вой.</p>'
  )
  change_buttons({
    "Выстрелить в сторону волков и бежать": main_quest_wasteland_21,
  })
  currentFunction = main_quest_wasteland_2
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_21() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 2
  change_shotgun()
  change_time(0.5)
  lower_health(5)
  change_image("img/revenge/pic_53.jpg")
  change_text(
    '<p>Вы мгновенно представили, что дальше будет, поэтому без раздумий выхватили <span class="yes">дробовик</span> и выпустили два заряда в <span class="yes">волков</span>. Сделав это, Вы бросились назад со всех ног. Звери, судя по всему не ожидавшие внезапной атаки, растерянно остались на месте возле павших собратьев. Опомнившись, <span class="yes">волки</span> бросились за Вами в погоню, стремительно сокращая расстояние.</p><p>Впереди маячила небольшая будка старой придорожной <span class="yes">автозаправки</span>. Один из <span class="yes">волков</span> уже был всего в паре метров от Вас, поэтому проверять открыта дверь или нет Вы не стали, с разбегу сиганув прямо на крышу будки. Пока Вы подтягивались, стараясь зацепиться ногами за выступ в стене, <span class="yes">волк</span> всё-таки успел вцепиться Вам в ногу. К счастью, зубы скользнули по коже, лишь слегка <span class="yes">оцарапав</span> её. Штанам повезло меньше. Вы с облегчением посмотрели вниз. В свете Луны Вы увидали <span class="yes">четырёх</span> здоровенных хищников, которые бесновались у стен будки, не в силах Вас достать.</p>'
  )
  change_buttons({
    "Подождать 10 минут": main_quest_wasteland_211,
    "Расстрелять волков из дробовика": main_quest_wasteland_212,
  })
  currentFunction = main_quest_wasteland_21
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_211() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.16)
  change_image("img/revenge/pic_58.jpg")
  change_text(
    '<p>Вы решили подождать на <span class="yes">крыше</span> пока твари уйдут, надеясь на то, что ледяной ветер заставит их убраться восвояси. Однако не тут-то было. На вой зверюг, судя по звукам, прибежало ещё несколько. Шум внизу стоял невыносимый.</p>'
  )
  change_buttons({
    "Подождать ещё 10 минут": main_quest_wasteland_2111,
    "Расстрелять волков из дробовика": main_quest_wasteland_212,
  })
  currentFunction = main_quest_wasteland_211
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_2111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.16)
  change_image("img/revenge/pic_58.jpg")
  change_text(
    '<p>Стараясь не шуметь, Вы вытащили из рюкзака за спиной теплое одеяло и закутались в него поглубже, так как уже порядком замёрзли.</p><p><span class="yes">Волки</span> и не думали уходить, наоборот – хитрые твари решили взять Вас измором. Снизу постоянно слышалась какая-то возня и скулёж.</p>'
  )
  change_buttons({
    "Подождать ещё 10 минут": main_quest_wasteland_21111,
    "Расстрелять волков из дробовика": main_quest_wasteland_212,
  })
  currentFunction = main_quest_wasteland_2111
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_21111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.16)
  change_image("img/revenge/pic_58.jpg")
  change_text(
    "<p>Вам здорово продрогли. На крыше свистал такой ветер, что Ваше хвалённое одеяло практически не спасало. Так и заболеть недолго.</p><p>Тем временем, звери внизу затеяли какую-то разборку между собой. Те, которые не принимали участие в драке, истошно выли. Всё происходящее казалось каким-то адом на Земле.</p>"
  )
  change_buttons({
    "Подождать ещё 10 минут": main_quest_wasteland_211111,
    "Расстрелять волков из дробовика": main_quest_wasteland_212,
  })
  currentFunction = main_quest_wasteland_21111
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_211111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.16)
  change_image("img/revenge/pic_52.jpg")
  change_text(
    '<p>Вы решили дождаться своей смерти на этой проклятой крыше, судя по всему. Свернувшись в калач и заткнув уши, Вы устало смотрели на необычайно ясное и красивое звёздное небо. Вы чувствовали, что засыпаете…</p><p>Внезапно один из <span class="yes">волков</span> завизжал, как подстреленный и бросился наутёк. Вся стая с диким воем бросилась за подранком. Вы смотрели в след зверюгам, скрывающимся в темноте. Подождав ещё некоторое время, Вы решили, что возвращаться волки, судя по всему, не собирались. Решив, что ещё легко отделались, Вы отбросили всякую идею продолжать скитаться среди ночи по Пустоши. Тем более, что спать хотелось неимоверно.</p><p>Вы спрыгнули вниз и посмотрели на <span class="yes">здание</span>, на крыше которого спаслись от пустынных монстров. Главное сейчас укрыться от пронизывающего ночного ветра. А где спать Вам уже было абсолютно безразлично.</p>'
  )
  change_buttons({
    "Открыть дверь и заглянуть внутрь": main_quest_wasteland_11,
    "Посмотреть в окно": main_quest_wasteland_12,
  })
  currentFunction = main_quest_wasteland_211111
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_212() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 2
  change_shotgun()
  change_time(0.16)
  change_image("img/revenge/pic_52.jpg")
  change_text(
    '<p>Перезарядив <span class="yes">ружьё</span>, Вы саданули картечью в голову самому крупному из хищников. Второй заряд достался одному из его прихвостней. Других <span class="yes">волков</span> убить Вы не успели – увидев смерть своего <span class="yes">вожака</span>, оставшиеся в живых хищники бежали прочь от злополучной <span class="yes">заправки</span>.</p><p>Вы перезарядили <span class="yes">дробовик</span> и подождали ещё некоторое время. Судя по всему, возвращаться звери не собирались. Решив, что ещё легко отделались, Вы отбросили всякую идею продолжать скитаться среди ночи по Пустоши. Тем более, что спать хотелось неимоверно, а ледяной ветер стал пронизывать до костей.</p><p>Вы спрыгнули вниз и посмотрели на <span class="yes">здание</span>, на крыше которого спаслись от пустынных монстров. Главное сейчас укрыться от пронизывающего ночного ветра. А где спать Вам уже было абсолютно безразлично.</p>'
  )
  change_buttons({
    "Открыть дверь и заглянуть внутрь": main_quest_wasteland_11,
    "Посмотреть в окно": main_quest_wasteland_12,
  })
  currentFunction = main_quest_wasteland_212
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_sleep() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  day = 2
  time = 10
  change_time(0)
  change_image("img/revenge/pic_59.jpg")
  change_text(
    '<p>Вам снился сон. Вокруг была стрельба и серый дым. Вы шли в этом дыму наугад, не разбирая дороги. Через некоторое время впереди стал различаться силуэт. Вы подошли к нему ближе. Силуэт приобрел очертания фигуры человека в длинном плаще. Вы тронули его за плечо. Фигура развернулась к Вам и подняла капюшон. Это был <span class="yes">Старейшина Мэксон</span>.<p>- Не останавливайся, рыцарь... - шёпотом сказал Вам <span class="yes">Мэксон</span>.</p><p>Внезапно пуля прошила голову <span class="yes">Старейшины</span> и Ваши глаза застелила ослепительная пелена.</p>'
  )
  change_buttons({ Проснуться: main_quest_wasteland_wakeup })
  currentFunction = main_quest_wasteland_sleep
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_wakeup() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_60.jpg")
  change_text(
    '<p>Вы открыли глаза и недовольно прищурились. Яркий луч света, пробивающийся сквозь прорехи в крыше, бил прямо в лицо. По ощущениям было уже часов <span class="yes">10 утра</span>. Вы сверились с часами — внутреннее чутьё времени никогда не подводило. Нужно было продолжать путь. Вам было оказано высокое доверие и подвести командование нельзя.</p>'
  )
  change_buttons({
    "Осмотреть помещение автозаправки": main_quest_wasteland_gasStation,
    "Выбраться наружу": main_quest_wasteland_gasStationOut,
  })
  currentFunction = main_quest_wasteland_wakeup
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_gasStation() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  change_image("img/revenge/pic_61.jpg")
  change_text(
    '<p>Судя по всему, до Вашего визита тут доживал свой век одинокий старик. Перед мутным окном стоял <span class="yes">стол</span>, на котором было разбросано множество разнообразного хлама. Напротив входа сидел в кресле-качалке, напугавший Вас <span class="yes">труп</span>. Позади него стоял <span class="yes">шкаф</span>.</p>'
  )
  if ((getDisk === true) & (getPistol === true)) {
    stationDead = true
    setCookie("cstationDead", stationDead)
  }
  if (
    (stationTable === false) &
    (stationCupboard === false) &
    (stationDead === false)
  ) {
    change_buttons({
      "Осмотреть стол": main_quest_wasteland_gasStation1,
      "Осмотреть шкаф": main_quest_wasteland_gasStation2,
      "Осмотреть труп": main_quest_wasteland_gasStation3,
      "Выбраться наружу": main_quest_wasteland_gasStationOut,
    })
  } else if (
    (stationTable === true) &
    (stationCupboard === false) &
    (stationDead === false)
  ) {
    change_buttons({
      "Осмотреть шкаф": main_quest_wasteland_gasStation2,
      "Осмотреть труп": main_quest_wasteland_gasStation3,
      "Выбраться наружу": main_quest_wasteland_gasStationOut,
    })
  } else if (
    (stationTable === true) &
    (stationCupboard === true) &
    (stationDead === false)
  ) {
    change_buttons({
      "Осмотреть труп": main_quest_wasteland_gasStation3,
      "Выбраться наружу": main_quest_wasteland_gasStationOut,
    })
  } else if (
    (stationTable === true) &
    (stationCupboard === true) &
    (stationDead === true)
  ) {
    change_buttons({ "Выбраться наружу": main_quest_wasteland_gasStationOut })
  } else if (
    (stationTable === true) &
    (stationCupboard === false) &
    (stationDead === true)
  ) {
    change_buttons({
      "Осмотреть шкаф": main_quest_wasteland_gasStation2,
      "Выбраться наружу": main_quest_wasteland_gasStationOut,
    })
  } else if (
    (stationTable === false) &
    (stationCupboard === true) &
    (stationDead === false)
  ) {
    change_buttons({
      "Осмотреть стол": main_quest_wasteland_gasStation1,
      "Осмотреть труп": main_quest_wasteland_gasStation3,
      "Выбраться наружу": main_quest_wasteland_gasStationOut,
    })
  } else if (
    (stationTable === false) &
    (stationCupboard === true) &
    (stationDead === true)
  ) {
    change_buttons({
      "Осмотреть стол": main_quest_wasteland_gasStation1,
      "Выбраться наружу": main_quest_wasteland_gasStationOut,
    })
  } else if (
    (stationTable === false) &
    (stationCupboard === false) &
    (stationDead === true)
  ) {
    change_buttons({
      "Осмотреть стол": main_quest_wasteland_gasStation1,
      "Осмотреть шкаф": main_quest_wasteland_gasStation2,
      "Выбраться наружу": main_quest_wasteland_gasStationOut,
    })
  }
  currentFunction = main_quest_wasteland_gasStation
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_gasStation1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  stationTable = true
  change_image("img/revenge/pic_62.jpg")
  change_text(
    '<p>На <span class="yes">столе</span> ничего полезного вы не нашли. Всё было завалено различным никчёмным мусором.</p>'
  )
  change_buttons({ "Отойти от стола": main_quest_wasteland_gasStation })
  currentFunction = main_quest_wasteland_gasStation1
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cstationTable", stationTable)
  currentFunction = main_quest_wasteland_gasStation1
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_gasStation2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.1)
  stationCupboard = true
  cans += 2
  change_image("img/revenge/pic_63.jpg")
  change_text(
    '<p>В шкафу вы обнаружили <span class="yes">две</span> банки консервированного <span class="yes">мяса</span>.</p><p>"На дороге не валяется," - решили Вы и спрятали найденную пищу у себя в рюкзаке.</p>'
  )
  change_buttons({ "Отойти от шкафа": main_quest_wasteland_gasStation })
  currentFunction = main_quest_wasteland_gasStation2
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cstationCupboard", stationCupboard)
  setCookie("ccans", cans)
}
function main_quest_wasteland_gasStation3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  change_image("img/revenge/pic_64.jpg")
  change_text(
    '<p>Вам даже стало жаль бедолагу. При беглом осмотре Вы обнаружили, что <span class="yes">старик</span> всё-таки помер не своей смертью — в левом боку зияла здоровенная дыра от удара чем-то массивным и острым. По всей видимости топором или мачете. Кресло-качалка и пол под ним были залиты запёкшейся кровью – бедняга потерял её слишком много для того чтобы спастись самостоятельно.</p><p>То ли он скрывался от кого-то, то ли стал жертвой нападения разбойников - было не ясно. Понятно было лишь то, что без боя он сдаваться не собирался.</p>'
  )
  if ((seeDeadPockets === true) & (getDisk === false) & (getPistol === false)) {
    change_buttons({
      "Забрать голодиск": main_quest_wasteland_gasStation33,
      "Вытащить из руки пистолет": main_quest_wasteland_gasStation32,
      "Оставить труп в покое": main_quest_wasteland_gasStation,
    })
  } else if (
    (seeDeadPockets === false) &
    (getDisk === false) &
    (getPistol === true)
  ) {
    change_buttons({
      "Пошарить по карманам старика": main_quest_wasteland_gasStation31,
      "Оставить труп в покое": main_quest_wasteland_gasStation,
    })
  } else if (
    (seeDeadPockets === false) &
    (getDisk === false) &
    (getPistol === false)
  ) {
    change_buttons({
      "Пошарить по карманам старика": main_quest_wasteland_gasStation31,
      "Вытащить из руки пистолет": main_quest_wasteland_gasStation32,
      "Оставить труп в покое": main_quest_wasteland_gasStation,
    })
  } else if (
    (seeDeadPockets === true) &
    (getDisk === false) &
    (getPistol === true)
  ) {
    change_buttons({
      "Забрать голодиск": main_quest_wasteland_gasStation33,
      "Оставить труп в покое": main_quest_wasteland_gasStation,
    })
  } else if (
    (seeDeadPockets === true) &
    (getDisk === true) &
    (getPistol === false)
  ) {
    change_buttons({
      "Вытащить из руки пистолет": main_quest_wasteland_gasStation32,
      "Оставить труп в покое": main_quest_wasteland_gasStation,
    })
  } else {
    change_buttons({ "Ищи ошибку в условиях!": restart })
  }
  currentFunction = main_quest_wasteland_gasStation3
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_gasStation31() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.1)
  raise_caps(200)
  pistol_ammo += 12
  seeDeadPockets = true
  change_gun()
  change_image("img/revenge/pic_65.jpg")
  change_text(
    '<p>Ого! Вот это улов! В кармане куртки старика Вы нашли увесистую сумку с <span class="yes">крышками</span>. Быстро пересыпав их в свой рюкзак, Вы определили, что их было около <span class="yes">200</span> штук. В другом кармане был потёртый <span class="yes">голодиск</span>, прочитать его содержание Вы не могли — <span class="yes">ПипБой</span> Вам не полагался, да и взять его с собой не было возможности. Зачем старик таскал с собой <span class="yes">голодиск</span> без <span class="yes">ПипБоя</span> было не ясно. На поясе висел подсумок с ещё одним <span class="yes">магазином</span> для <span class="yes">пистолета</span>. Всё это добро Вы аккуратно рассовали по своим карманам.</p><p>Что же касается <span class="yes">диска</span>, то тут Вы не могли решить нужен он Вам или нет. Таскать с собой бесполезный хлам глупо, с другой стороны… вдруг эта ерунда кому-то окажется полезна?</p>'
  )
  change_buttons({
    "Забрать голодиск": main_quest_wasteland_gasStation33,
    "Оставить труп в покое": main_quest_wasteland_gasStation,
  })
  currentFunction = main_quest_wasteland_gasStation31
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cseeDeadPockets", seeDeadPockets)
}
function main_quest_wasteland_gasStation32() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  getPistol = true
  pistol_ammo += 12
  change_gun()
  change_time(0.1)
  change_image("img/revenge/pic_66.jpg")
  change_text(
    '<p>Ох, нелёгкая это оказалась задача — вытащить <span class="yes">пистолет</span> из окоченевшей руки. С большим трудом Вам удалось заполучить это оружие. Вы заложили его сзади за пояс. Мало ли.</p>'
  )
  change_buttons({ "Оставить труп в покое": main_quest_wasteland_gasStation })
  currentFunction = main_quest_wasteland_gasStation32
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_gasStation33() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  getDisk = true
  add_disk()
  change_image("img/revenge/pic_65.jpg")
  change_text(
    '<p>«Проверю по возможности», - решили Вы и положили <span class="yes">голодиск</span> в рюкзак.</p>'
  )
  change_buttons({ "Оставить труп в покое": main_quest_wasteland_gasStation })
  currentFunction = main_quest_wasteland_gasStation33
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_wasteland_gasStationOut() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  cans -= 1
  change_time(0.5)
  raise_satiety(1)
  change_image("img/revenge/pic_30.jpg")
  change_text(
    '<p>Перед Вами во все стороны раскинулась, пышущая жаром <span class="yes">Пустошь</span>. Куда бы не упал взгляд везде был жёлтый песок и потрескавшаяся почва. Эту картину дополняли то там, то сям редкие кустики травы и вечные спутники этих мест — перекати-поле. Вы <span class="yes">позавтракали</span>, полюбовавшись пейзажами постапокалиптического мира. Однако, нужно было двигать вперёд. Оставалось только выбрать: идти по еле различимой среди песков <span class="yes">дороге</span>, делая крюк, либо идти напрямик через <span class="yes">пески</span>.</p><p>Идти по <span class="yes">дороге</span> легко и безопасно. Во-первых, Вы не собьетесь с пути, во-вторых, всегда есть где переночевать. Дорога до города займёт около <span class="yes">4 суток</span>.</p><p>С другой стороны можно пройти напрямую через <span class="yes">Пустошь</span> и сэкономить немного немало – целые <span class="yes">сутки</span>. Но… что ещё Вас может ждать в этих чёртовых песках кроме ночного ледяного ветра?</p>'
  )
  change_buttons({
    "Идти по дороге": main_quest_road,
    "Идти по пересечённой местности": main_quest_sands,
  })
  currentFunction = main_quest_wasteland_gasStationOut
  setCookie("ccurrentFunction", currentFunction)
  setCookie("ccans", cans)
}

/* ПУТЬ К ХАБУ ПО ДОРОГЕ */

function main_quest_road() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  wastelandRoad = true
  change_image("img/revenge/pic_74.jpg")
  change_text(
    '<p>Вы пошли по <span class="yes">дороге</span>, понимая, что сделаете крюк. Это оказалось весьма осмотрительным решением — мало ли какие неприятности Вы могли встретить в тех диких <span class="yes">песках</span>. Вы сразу вспомнили полночи, проведённые без сна перед этим — от мыслей оказаться под ледяным пустынным ветром без всякого убежища у Вас стыла кровь в венах.</p>'
  )
  change_buttons({ "Продолжить путь": main_quest_road1 })
  currentFunction = main_quest_road
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cwastelandRoad", wastelandRoad)
}
function main_quest_road1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  day = 3
  time = 7
  change_time(0)
  cans -= 1
  change_image("img/revenge/pic_68.jpg")
  change_text(
    '<p>Следующие <span class="yes">сутки</span> Вы провели в практически непрерывном движении. Переночевать  удалось в неплохо сохранившемся <span class="yes">магазине</span> у дороги. Сам <span class="yes">магазин</span> был давным-давно разграблен, окна выбиты и в помещении гулял ветер. Однако, полуподвальное помещение бытовки осталось не тронутым - входная дверь была цела. Вы неплохо выспались, а проснувшись, <span class="yes">подкрепились</span> из своих запасов. Снаружи послышался шум и чьи-то голоса.</p>'
  )
  change_buttons({
    "Осторожно выглянуть из подсобки": main_quest_road11,
    "Отправиться во всеоружии к неожиданным гостям": main_quest_road12,
  })
  currentFunction = main_quest_road1
  setCookie("ccurrentFunction", currentFunction)
  setCookie("ccans", cans)
}
function main_quest_road11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.1)
  change_image("img/revenge/pic_69.jpg")
  change_text(
    '<p>Судя по описаниям, которые Вы читали в библиотеке Братства, это был <span class="yes">торговый караван</span>. Их было <span class="yes">шестеро</span>: <span class="yes">четверо</span> из них были тяжело вооружены и одеты в кожаную броню, <span class="yes">двое</span> других носили пыльники в пол и широкополые шляпы.  Вся эта процессия остановилась здесь для того чтобы передохнуть и напоить из бочек с водой тягловых <span class="yes">браминов</span>. О <span class="yes">браминах</span> Вы читали в библиотеке, но своими глазами видели их впервые.</p>'
  )
  change_buttons({
    "Присмотреться к браминам": main_quest_road111,
    "Выйти и дружелюбно поздороваться": main_quest_road112,
    "Отправиться во всеоружии к неожиданным гостям": main_quest_road12,
  })
  currentFunction = main_quest_road11
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_road111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0.05)
  change_image("img/revenge/pic_70.jpg")
  change_text(
    '<p>Вы увидели за окном несколько <span class="yes">тягловых двуглавых коров</span>, которые были запряжены в причудливые телеги, сделанные из задних половин довоенных автомобилей. Из выводов писцов, Вы узнали забавный факт об этих удивительных созданиях: двухголовость для этого вида животных является нормой в постапокалиптическом мире, а изредка появляющиеся на свет одноголовые брамины - то есть обычные довоенные коровы - считаются уродами-мутантами.</p>'
  )
  change_buttons({
    "Выйти и дружелюбно поздороваться": main_quest_road112,
    "Отправиться во всеоружии к неожиданным гостям": main_quest_road12,
  })
  currentFunction = main_quest_road111
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_road112() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(1)
  change_image("img/revenge/pic_71.jpg")
  change_text(
    '<p>Проявив чудеса вежливости в этом мире, Вы узнали, что этот <span class="yes">караван</span> держит путь из небольшого городка на восточном побережье <span class="yes">Основного Региона</span>. <span class="yes">Начальник</span> каравана – один из парней в длинных пыльниках - оказался тем ещё сказочником и целый <span class="yes">час</span> травил Вам  какие-то невероятные истории о его сражениях со страшными чудовищами с огромными когтями на длинных лапах. По его словам, он убил с десяток этих тварей собственноручно. <span class="yes">Охранники</span> только услужливо кивали и театрально охали, когда речь заходила об очередном разорванном на куски монстре.</p>'
  )
  change_buttons({
    "Поблагодарить за рассказ и выйти на дорогу": main_quest_road1121,
    "Насмехаться над удалью караванщика": main_quest_road1122,
  })
  currentFunction = main_quest_road112
  setCookie("ccurrentFunction", currentFunction)
}
function main_quest_road12() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(1)
  meetCaravanArmed = true
  change_image("img/revenge/pic_72.jpg")
  change_text(
    '<p>«Мало ли что», - подумали Вы и расчехлив <span class="yes">дробовик</span> вышли на встречу <span class="yes">каравану</span>.</p><p>- Ого-го, - закричал один из <span class="yes">охранников</span>, увидев Вас. Остальные тот час выхватили своё оружие. Вы замерли. Ну и, правда, чего другого Вы ждали от этих прожженных пустынных странников, побывавших не в одном сражении? У большинства из них лица были испещрены глубокими шрамами, словно подтверждающими их опыт. Такие пристрелят и ухом не поведут, почуяв реальную угрозу.</p><p>- Дружище, - сказал <span class="yes">начальник</span> каравана – человек в длинном плаще и с вечной улыбкой на лице. – Не кипишуй? Ты явно не из рейдеров. Опусти пушку.</p><p>Пораскинув мозгами, Вы решили всё же убрать оружие, дабы не раскинуть мозгами на самом деле. Их <span class="yes">главный</span> тут же сделал знак своим <span class="yes">спутникам</span> тоже опустить винтовки. Вы разговорились. <span class="yes">Начальник</span> каравана оказался тем ещё сказочником и целый <span class="yes">час</span> травил Вам какие-то невероятные истории о его сражениях со страшными чудовищами с огромными когтями на длинных лапах. По его словам, он убил с десяток этих тварей собственноручно. Охранники только услужливо кивали и театрально охали, когда речь заходила об очередном разорванном на куски монстре.</p>'
  )
  change_buttons({
    "Поблагодарить за рассказ и выйти на дорогу": main_quest_road1121,
    "Насмехаться над удалью караванщика": main_quest_road1122,
  })
  currentFunction = main_quest_road12
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cmeetCaravanArmed", meetCaravanArmed)
}
function main_quest_road1121() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  raise_health(15)
  day = 4
  time = 9
  change_time(0)
  if (meetCaravanArmed === true) {
    lower_caps(30)
    change_image("img/revenge/pic_73.jpg")
    change_text(
      '<p>- Спасибо за историю, к сожалению, но мне уже пора, - сказали Вы говорливому <span class="yes">караванщику</span> и двинулись дальше по дороге.</p><p>- Эй, друг, ты же не дослушал мой рассказ!» - закричал Вам вслед болтливый пройдоха - Куда путь держишь?</p><p>Узнав, что Вы идёте в <span class="yes">Хаб</span>, он был страшно рад и предложил подбросить Вас до города всего за <span class="yes">30 крышек</span>. Отказываться Вы по понятным причинам не стали. Весь оставшийся путь Вы с утра до ночи слушали разные истории из жизни караванщиков. Они оказались славными ребятами. Кроме того Вы здорово <span class="yes">сократили</span> путь, поехав на повозке. Всего <span class="yes">сутки</span> Вы провели в компании новых друзей, которые ещё и <span class="yes">кормили</span> Вас вкусным ужином.</p><p>Так, весело трясясь в повозке, Вы доехали до <span class="yes">окраины</span> города <span class="yes">Хаба</span>. На прощание болтливый <span class="yes">купец</span> попросил Вас заглянуть в главный офис <span class="yes">Торговцев Водой</span> в <span class="yes">южной</span> части города.</p>'
    )
  } else {
    change_image("img/revenge/pic_73.jpg")
    change_text(
      '<p>- Спасибо за историю, к сожалению, но мне уже пора, - сказали Вы говорливому <span class="yes">караванщику</span> и двинулись дальше по дороге.</p><p>- Эй, друг, ты же не дослушал мой рассказ!» - закричал Вам вслед болтливый пройдоха - Куда путь держишь?</p><p>Узнав, что Вы идёте в <span class="yes">Хаб</span>, он был страшно рад и предложил <span class="yes">бесплатно</span> подбросить Вас до <span class="yes">города</span>. Отказываться Вы по понятным причинам не стали. Весь оставшийся путь Вы с утра до ночи слушали разные истории из жизни караванщиков. Они оказались славными ребятами. Кроме того Вы здорово <span class="yes">сократили</span> путь, поехав на повозке. Всего <span class="yes">сутки</span> Вы провели в компании новых друзей, которые ещё и кормили Вас вкусным ужином.</p><p>Так, весело трясясь в повозке, Вы доехали до <span class="yes">окраины</span> города <span class="yes">Хаба</span>. На прощание болтливый <span class="yes">купец</span> попросил Вас заглянуть в главный офис <span class="yes">Торговцев Водой</span> в <span class="yes">южной</span> части города.</p>'
    )
  }
  change_buttons({ "Слезть с повозки": main_quest_Hub })
  currentFunction = main_quest_road1121
  setCookie("ccurrentFunction", currentFunction)
}

/* ИДТИ К ГОРОДУ ЧЕРЕЗ ПУСТОШЬ */

function main_quest_sands() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  raise_health(5)
  day = 5
  time = 11
  change_time(0)
  cans -= 3
  rifle_ammo -= 1
  raise_satiety(3)
  change_shotgun()
  lower_health(20)
  change_image("img/revenge/pic_75.jpg")
  change_text(
    '<p>Вы решили не тратить лишнее время и двинулись в <span class="yes">пески</span>. Ох, и жуткое это оказалось путешествие. В первый же день пути Вы прокляли всё на свете. От дикой жары постоянно хотелось пить и отдыхать. Но это было самое малое из того что Вам пришлось пережить. В конце дня пришёл и страшный ночной холод. Помня о Вашей первой ночи, проведённой на поверхности, Вы стали заранее подыскивать себе <span class="yes">место</span> для <span class="yes">ночёвки</span>. К Вашему счастью такое место нашлось – это была разрушенная от старости <span class="yes">ферма</span>, в которой не было ни одного целого окона, а двери, сорванные с петель, валялись тут же на полу. Но Вам было уже плевать на удобства, лишь бы скрыться от дикого ветра.</p><p>Следующие дни пути были похожи на предыдущие. Вы, казалось, уже практически приспособились к внешним суровым условиям. Однако, под самый конец пути Вам встретился, не пойми откуда взявшийся, огромный <span class="yes">волк</span>. Злобная зверюга напала на Вас сзади, <span class="yes">вырвав кусок плоти</span> из ноги. Прежде чем хищник бросился на Вас во второй раз, Вы <span class="yes">смогли убить</span> его наповал выстрелом из <span class="yes">ружья</span>.</p><p>Так или иначе, но Вам удалось добраться до города. Стоило идти таким путём или нет уже было не важно. Вы живы, а значит способны выполнить задание, возложенное на Вас командованием.</p>'
  )
  change_buttons({ "Войти в город": main_quest_Hub })
  currentFunction = main_quest_sands
  setCookie("ccurrentFunction", currentFunction)
  setCookie("ccans", cans)
}
function main_quest_road1122() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  badWaterMerchant = true
  raise_health(5)
  day = 5
  time = 12
  change_time(0)
  cans -= 3
  if (cans <= 0) {
    lower_satiety(1)
  } else {
    raise_satiety(3)
  }
  change_image("img/revenge/pic_74.jpg")
  change_text(
    '<p>Вас разозлила самовлюблённость этого осла и Вы стали всячески подтрунивать над его «отвагой». Весёлый <span class="yes">караванщик</span> неожиданно переменился в лице. Его явно разрывало от обиды и желания наказать насмешника, однако, добрый нрав и благоразумие взяли вверх.</p><p>- Иди ты к чёрту, - процедил он сквозь зубы и отвернулся. Остальные стали смотреть на Вас настороженно, хотя за <span class="yes">оружием</span> тянуться никто не стал.</p><p>Вы горделиво окинули взглядом <span class="yes">караванщиков</span> и, не прощаясь, зашагали по <span class="yes">дороге</span>. Через некоторое время <span class="yes">караванщики</span> на повозках нагнали Вас и поинтересовались куда Вы держите путь. Узнав что в <span class="yes">Хаб</span>, <span class="yes">начальник</span> каравана насмешливо предложил подбросить вас за «жалкие <span class="yes">300 крышек</span>». Опешив от такой наглости, Вы послали его к такой матери, приправив всё это отборной бранью. Тогда <span class="yes">караванщик</span> метнул в Вас окурок от сигареты, которую мусолил между пальцев, и хохоча помчался дальше по дороге. В ярости Вы бежали за повозкой несколько десятков метров, но куда Вам было до быстроногих коров, запряжённых в упряжку.</p><p>Так или иначе, но Вам удалось добраться до <span class="yes">города</span>, не встретив больше никого на большой дороге.</p>'
  )
  change_buttons({ "Войти в город": main_quest_Hub })
  currentFunction = main_quest_road1122
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cbadWaterMerchant", badWaterMerchant)
  setCookie("ccans", cans)
}
