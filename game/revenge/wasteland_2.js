/* СНОВА ПУСТОШЬ */
function mainQuest_Wasteland() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  day += 1
  time = 3
  change_time(0)
  change_image("img/revenge/pic_215.jpg")
  if (killDon === true) {
    change_text(
      '<p>Вы вышли из <span class="yes">города</span> и снова оказались по власти <span class="yes">Пустоши</span>. Теперь она Вам уже была не так страшна, как при первой встрече.</p><p>- Ну, здравствуй, мать, - ухмыльнулись Вы про себя, вновь ступив на жёлтые пески.</p><p>Хэндо ждал Вас в <span class="yes">старой ферме</span> на севере от <span class="yes">Хаба</span>. Вы спешили изо всех сил. Времени было мало. Теперь успех всей Вашей миссии зависел от встречи <span class="yes">рейдером</span>.</p><p>Вы шли по мягкому песку до глубокой ночи и совершенно выбились из сил, хотя так и не ушли далеко от человеческой цивилизации – впереди показалась <span class="yes">заброшенная ферма</span>.</p>'
    )
    change_buttons({
      "Расположиться на ночлег в старой ферме": mainQuest_Wasteland1,
    })
  } else {
    change_text(
      '<p>Вы вышли из <span class="yes">города</span> и снова оказались по власти <span class="yes">Пустоши</span>. Теперь она Вам уже была не так страшна, как при первой встрече.</p><p>- Ну, здравствуй, мать, - ухмыльнулись Вы про себя, вновь ступив на жёлтые пески.</p><p>Судя по координатам, <span class="yes">база Гадюк</span> расположена к <span class="yes">северу</span> от <span class="yes">Хаба</span>. Вы спешили изо всех сил. Времени было мало.</p><p>Вы шли по мягкому песку до глубокой ночи и совершенно выбились из сил, хотя так и не ушли далеко от человеческой цивилизации – впереди показалась <span class="yes">заброшенная ферма</span>.</p>'
    )
    change_buttons({
      "Расположиться на ночлег в старой ферме": mainQuest_Wasteland1,
    })
  }
  currentFunction = mainQuest_Wasteland
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Wasteland1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (sheriffGreeneSecondTask === true) {
    if (Lip === true) {
      raise_satiety(4)
      change_image("img/revenge/pic_216.jpg")
      change_text(
        '<p>Вы осторожно открыли дверь и просунули ствол <span class="yes">дробовика</span> в проём и сразу же услышали ровный шёпот:</p><p>- Опусти оружие <span class="yes">' +
          heroName +
          '</span>. Это я – <span class="yes">Лип</span>.</p><p>Вы облегчённо выдохнули и зачехлили оружие. Внутри помещения сидел Ваш <span class="yes">напарник</span> и ел свинину с бобами из банки. Увидев, что у Вас нет припасов, <span class="yes">Лип</span> достал ещё одну банку из своего рюкзака и кинул её Вам в руки. Пока Вы с аппетитом уписывали пищу, Ваш <span class="yes">спутник</span> принялся изготавливать довольно мудреную ловушку на входе. </p>'
      )
      change_buttons({
        "Спросить у Липа о боевом опыте": mainQuest_Good_Lip0,
        "Приготовиться ко сну": mainQuest_Good_Lip2,
      })
    } else {
      change_image("img/revenge/pic_218.jpg")
      change_text(
        '<p>Вы осторожно открыли дверь и просунули ствол <span class="yes">дробовика</span> в проём. Внутри было не с кем воевать, поэтому быстро обежав глазами помещение, Вы зачехлили <span class="yes">оружие</span> и расстелили на <span class="yes">кровати</span> в углу своё одеяло.</p><p>После этого Вы соорудили простую ловушку из нити пары пустых бутылок на входе. Мало ли кого занесёт к Вам в гости этой холодной ночью?</p><p>Разжигать огонь Вы не стали, чтобы не привлекать к одинокой <span class="yes">ферме</span> лишнего внимания. Закончив все приготовления, Вы рухнули на <span class="yes">кровать</span> и крепко уснули.</p>'
      )
      change_buttons({ "Проспать до утра": mainQuest_Good_Alone })
    }
  } else if (killDon === true) {
    change_image("img/revenge/pic_219.jpg")
    change_text(
      '<p>Подходя к входу, Вы заметили, как от стены <span class="yes">фермы</span> отделилась <span class="yes">тень</span> и направилась в Вашу сторону.</p><p>Сердце начало биться сильнее, а рука легла на полированную рукоять <span class="yes">дробовика</span>. Когда Вы уже были готовы выхватить <span class="yes">оружие</span>, на свет Луны вышла долговязая фигура с длинными волосами. <span class="yes">Хэндо</span> сделал Вам знак остановиться.</p><p>- Ушёл из города, молодец, - похвалил Вас <span class="yes">рейдер</span>. - Нам нельзя здесь оставаться. Неизвестно, когда они направят патрули по нашим следам. Идём, я знаю <span class="yes">одно место</span>. Все вопросы потом.</p><p>Вам ничего не оставалось, как покорно идти за ним. Другого плана Вы пока не придумали.</p>'
    )
    change_buttons({ "Идти за Хэндо": mainQuest_Bad_Hendo })
  } else {
    change_text("<p>Невозможный вариант! Ищи ошибку в логике.</p>")
    change_buttons({ "Перезагрузить приложение": restart })
  }
  currentFunction = mainQuest_Wasteland1
  setCookie("ccurrentFunction", currentFunction)
}

/* ДОБРАЯ ВЕТКА */

/* С НАПАРНИКОМ */
function mainQuest_Good_Lip0() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_217.jpg")
  change_text(
    '<p>Чтобы как-то разрядить обстановку и получше узнать своего <span class="yes">спутника</span> Вы решили навязать ему незатейливую беседу.</p><p><span class="yes">Лип</span> оказался славным малым с боевым опытом охраны караванов.</p><p>- Я начинал, как охранник у «<span class="yes">Дальнобойщиков</span>». – <span class="yes">Лип</span> говорил неспешно, заканчивая мастерить ловушку. – Ходил с ними два года. Пару раз в месяц стабильно происходили нападения рейдеров на караван. Чаще всего это были <span class="yes">Гадюки</span>. Они похожи на каких-то суеверных туземцев, но их средства ведения боя – отравленные стрелы и копья – делают их крайне опасными противниками. На основных маршрутах крайне мало мест для внезапного нападения. Поэтому мы чаще всего были готовы к атакам.</p>'
  )
  change_buttons({
    "Почему сейчас караваны несут такие потери?": mainQuest_Good_Lip,
    "Какие города ты посещал?": mainQuest_Good_Lip1,
    "Приготовиться ко сну": mainQuest_Good_Lip2,
  })
  currentFunction = mainQuest_Good_Lip0
  setCookie("ccurrentFunction", currentFunction)
}

function mainQuest_Good_Lip() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lipDialog = true
  setCookie("clipDialog", lipDialog)
  change_image("img/revenge/pic_217.jpg")
  change_text(
    '<p>- Да, здорово ты видно спать хочешь! – усмехнулся Ваш <span class="yes">попутчик</span>. - Потому что старина <span class="yes">Донни</span> сдавал все маршруты и даты передвижений <span class="yes">Гадюкам</span>. Ты не думай, что эти дикари идиоты. Они большие мастера маскировки. К тому моменту когда <span class="yes">Дон</span> стал сливать всю информацию <span class="yes">рейдерам</span>, я уже перешёл на службу в <span class="yes">полицию Хаба</span>. Так что не могу тебе  рассказать, как именно происходили спланированные нападения. Думаю, они просто прятались заранее в песках и вылезали в нужный момент как чёрт из табакерки.</p>'
  )
  change_buttons({
    "Какие города ты посещал?": mainQuest_Good_Lip1,
    "Приготовиться ко сну": mainQuest_Good_Lip2,
  })
  currentFunction = mainQuest_Good_Lip
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Lip1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_217.jpg")
  change_text(
    '<p>- Многие, практически все самые крупные в регионе: <span class="yes">Шейди Сэндс</span>, <span class="yes">Джанктаун</span>, <span class="yes">Могильник</span>. Бывал даже один раз в <span class="yes">Некрополисе</span>. Безобразный климат там. И атмосферка гнетущая.</p>'
  )
  if (lipDialog === true) {
    change_buttons({
      "Расскажи о Шейди Сэндс.": mainQuest_Good_Lip11,
      "Расскажи о Джанктауне.": mainQuest_Good_Lip12,
      "Расскажи о Могильнике.": mainQuest_Good_Lip13,
      "Что за Некрополис?": mainQuest_Good_Lip14,
      "Приготовиться ко сну": mainQuest_Good_Lip2,
    })
  } else {
    change_buttons({
      "Расскажи о Шейди Сэндс.": mainQuest_Good_Lip11,
      "Расскажи о Джанктауне.": mainQuest_Good_Lip12,
      "Расскажи о Могильнике.": mainQuest_Good_Lip13,
      "Что за Некрополис?": mainQuest_Good_Lip14,
      "Почему сейчас караваны несут такие потери?": mainQuest_Good_Lip,
      "Приготовиться ко сну": mainQuest_Good_Lip2,
    })
  }
  currentFunction = mainQuest_Good_Lip1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Lip11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_217.jpg")
  change_text(
    '<p>- Скучный городок. Это маленькое поселение, которое вечно страдает от всяких бед. В основном их тревожат рейдеры всех мастей, ну и мутанты <span class="yes">Пустоши</span> не дают расслабиться. Лидер у них – нормальный мужик. Справедливый, рассудительный. Зовут <span class="yes">Арадеш</span>. Он один с маленькой дочкой на руках. То ли <span class="yes">Таня</span>, то ли <span class="yes">Тандя</span>, забыл имя. – <span class="yes">Лип</span> заулыбался.</p>'
  )
  if (lipDialog === true) {
    change_buttons({
      "Расскажи о Джанктауне.": mainQuest_Good_Lip12,
      "Расскажи о Могильнике.": mainQuest_Good_Lip13,
      "Что за Некрополис?": mainQuest_Good_Lip14,
      "Приготовиться ко сну": mainQuest_Good_Lip2,
    })
  } else {
    change_buttons({
      "Расскажи о Джанктауне.": mainQuest_Good_Lip12,
      "Расскажи о Могильнике.": mainQuest_Good_Lip13,
      "Что за Некрополис?": mainQuest_Good_Lip14,
      "Почему сейчас караваны несут такие потери?": mainQuest_Good_Lip,
      "Приготовиться ко сну": mainQuest_Good_Lip2,
    })
  }
  currentFunction = mainQuest_Good_Lip11
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Lip12() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_217.jpg")
  change_text(
    '<p>- Хлам, а не город. Все дома склеены из какого-то мусора. Не даром, что раньше там была огромная свалка. Ну, название видимо оттуда и пошло. Мэр у них <span class="yes">Киллиан Даркуотер</span>. Настоящий ковбой из старых вестернов! Зато там есть казино. Не такое как в <span class="yes">Хабе</span>, но скоротать вечерок можно. </p><p><span class="yes">Лип</span> почесал затылок и продолжил.</p><p>- Хозяин казино - <span class="yes">Гизмо</span>. Здоровый жирный индюк. Говорят, он делает деньги не честным путём.</p>'
  )
  if (lipDialog === true) {
    change_buttons({
      "Расскажи о Шейди Сэндс.": mainQuest_Good_Lip11,
      "Расскажи о Могильнике.": mainQuest_Good_Lip13,
      "Что за Некрополис?": mainQuest_Good_Lip14,
      "Приготовиться ко сну": mainQuest_Good_Lip2,
    })
  } else {
    change_buttons({
      "Расскажи о Шейди Сэндс.": mainQuest_Good_Lip11,
      "Расскажи о Могильнике.": mainQuest_Good_Lip13,
      "Что за Некрополис?": mainQuest_Good_Lip14,
      "Почему сейчас караваны несут такие потери?": mainQuest_Good_Lip,
      "Приготовиться ко сну": mainQuest_Good_Lip2,
    })
  }
  currentFunction = mainQuest_Good_Lip12
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Lip13() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_217.jpg")
  change_text(
    '<p>- В <span class="yes">Могильнике</span> я бывал частенько. Раньше город назывался <span class="yes">Лос-Анджелес</span>. Но это довоенное название. Там повсюду веет смертью, кости довоенных жителей до сих пор можно найти в старых, разрушенных зданиях. Отсюда теперешнее название города.</p><p>- Я читал о <span class="yes">Лос-Анджелесе</span>… - Вы поперхнулись. – В старом журнале с картинками. Красивый город. Был.</p><p>- Ага, - <span class="yes">Лип</span> не обратил никакого внимания на Вашу заминку. – Сейчас <span class="yes">Могильник</span> поделён между двумя группировками: <span class="yes">Лезвиями</span> и <span class="yes">Регуляторами</span>. Поговаривают, что обе группировки потомки выходцев из <span class="yes">демонстрационного убежища</span> на юге города. На месте <span class="yes">убежища</span> сейчас почти построили красивый <span class="yes">Собор</span>. Будет время - обязательно загляни туда.</p>'
  )
  if (lipDialog === true) {
    change_buttons({
      "Расскажи о Шейди Сэндс.": mainQuest_Good_Lip11,
      "Расскажи о Джанктауне.": mainQuest_Good_Lip12,
      "Что за Некрополис?": mainQuest_Good_Lip14,
      "Приготовиться ко сну": mainQuest_Good_Lip2,
    })
  } else {
    change_buttons({
      "Расскажи о Шейди Сэндс.": mainQuest_Good_Lip11,
      "Расскажи о Джанктауне.": mainQuest_Good_Lip12,
      "Что за Некрополис?": mainQuest_Good_Lip14,
      "Почему сейчас караваны несут такие потери?": mainQuest_Good_Lip,
      "Приготовиться ко сну": mainQuest_Good_Lip2,
    })
  }
  currentFunction = mainQuest_Good_Lip13
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Lip14() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_217.jpg")
  change_text(
    '<p><span class="yes">Лип</span> вздрогнул от нахлынувших воспоминаний.</p><p>- Это город <span class="yes">гулей</span>. Раз ты спрашиваешь, то, наверное,  и не слышал об этих существах никогда. – <span class="yes">Напарник</span> вопросительно взглянул на Вас.</p><p>Вы отрицательно помотали головой.</p><p>- Странно… - <span class="yes">Лип</span> сделал паузу и задумался. – Почему природа иногда исторгает такое? Они страшно обожжены, кожа такая, будто её живьем с них сдирали, а потом ещё прижарили раны из огнемёта. Раньше они были людьми. Это всё радиация. С нами имели дело разумные <span class="yes">гули</span>. Покупали в основном продовольствие в обмен на воду, которой у них, признаться, неисчерпаемое количество. Но я однажды встретил в Пустоши <span class="yes">диких</span>…</p><p>Руки собеседника заметно тряслись.</p><p>- Их была целая стая – продолжил <span class="yes">Лип</span>. - Мы стреляли, пока у нас не стали клинить ружья. Перебили не менее пяти десятков этих тварей. Больше я никогда не ходил в ту сторону. Отказывался от любых денег.</p>'
  )
  if (lipDialog === true) {
    change_buttons({
      "Расскажи о Шейди Сэндс.": mainQuest_Good_Lip11,
      "Расскажи о Джанктауне.": mainQuest_Good_Lip12,
      "Расскажи о Могильнике.": mainQuest_Good_Lip13,
      "Приготовиться ко сну": mainQuest_Good_Lip2,
    })
  } else {
    change_buttons({
      "Расскажи о Шейди Сэндс.": mainQuest_Good_Lip11,
      "Расскажи о Джанктауне.": mainQuest_Good_Lip12,
      "Расскажи о Могильнике.": mainQuest_Good_Lip13,
      "Почему сейчас караваны несут такие потери?": mainQuest_Good_Lip,
      "Приготовиться ко сну": mainQuest_Good_Lip2,
    })
  }
  currentFunction = mainQuest_Good_Lip14
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Lip2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  day += 1
  time = 7
  change_time(0)
  change_image("img/revenge/pic_218.jpg")
  change_text(
    '<p>Вы прилегли на кровать и мгновенно заснули. День был насыщенным на события и отнял много сил. Позади серьёзные испытания, но теперь осталось лишь проверить данные, полученные от <span class="yes">рейдера</span>, и вернуться домой.</p><p>Ночь прошла спокойно. Ваш <span class="yes">спутник</span>, привычный к подобным суровым условиям, пропал около <span class="yes">3 часов</span> и проснулся готовым продолжать путь. Вы же позволили себе полежать ещё <span class="yes">часок</span>. Перед последним рывком нужны были силы.</p>'
  )
  change_buttons({ "Продолжить путь": mainQuest_Good_Vipers })
  currentFunction = mainQuest_Good_Lip2
  setCookie("ccurrentFunction", currentFunction)
}

/* БЕЗ СПУТНИКА */
function mainQuest_Good_Alone() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  day += 1
  time = 8
  raise_satiety(4)
  change_time(0)
  change_image("img/revenge/pic_221.jpg")
  change_text(
    '<p>Вы прилегли на кровать и мгновенно заснули. День был насыщенным на события и отнял много сил. Позади серьёзные испытания, но теперь осталось лишь проверить данные, полученные от <span class="yes">рейдера</span>, и вернуться домой.</p><p>Ночь прошла спокойно. Вы позволили себе полежать больше нужного. Перед последним рывком нужны были силы.</p><p>Перед уходом Вы обыскали своё пристанище на предмет чего-нибудь перекусить. Потратив некоторое время, Вам всё же удалось отыскать <span class="yes">схрон с консервами</span> под одной из половиц, которая явно выделялась на фоне остальных.</p><p>Пока Вы ели Вам пришла в голову мысль, что это место не такое уж и заброшенное, раз кто-то оставил здесь заначку. Однако сегодня Вам повезло. В очередной раз. Отбросив в сторону пустую банку, Вы вышли наружу и, убедившись в отсутствии кого бы то ни было на горизонте, продолжили путь.</p>'
  )
  change_buttons({ "Продолжить путь": mainQuest_Good_Vipers })
  currentFunction = mainQuest_Good_Alone
  setCookie("ccurrentFunction", currentFunction)
}

/* Злая ветка - напарник Хэндо */
function mainQuest_Bad_Hendo() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  raise_satiety(4)
  change_image("img/revenge/pic_321.jpg")
  health < 61
    ? ((health = 90),
      lower_health(0),
      change_text(
        '<p>В полной тишине Вы добрались до <span class="yes">маленькой пещеры</span> в паре километров <span class="yes">к северо-западу</span> от <span class="yes">старой фермы</span>. <span class="yes">Хэндо</span> сообщил Вам, что это место абсолютно безопасное и тут можно переночевать.</p><p>Внутри <span class="yes">пещеры</span>, которая оказалась обжитой и уютной, он разжёг костёр, а затем занялся Вашими ранами. После применения препаратов и бинтов Вы почувствовали себя намного лучше. <span class="yes">Рейдер</span> сел у костра и стал есть какие-то сушеные кусочки мяса из своей сумки. В животе у Вас заурчало. Увидев, что у Вас нет с собой никаких припасов, он поделился с Вами едой. На удивление мясо оказалось невероятно вкусным, хотя внешний вид его вызывал подозрения.</p><p>- Крыса? – Осторожно спросили Вы.</p><p>- Китятина, - усмехнулся <span class="yes">рейдер</span>, продолжая усиленно работать челюстями.</p><p>- Откуда ж тут киты?</p><p>- С неба иногда падают, - без капли иронии ответил Вам <span class="yes">паренёк</span>.</p><p>Когда с ужином было покончено, <span class="yes">Хэндо</span> начал разговор:</p><p>- Я вижу, что ты уже понял кто я?</p>'
      ))
    : change_text(
        '<p>В полной тишине Вы добрались до <span class="yes">маленькой пещеры</span> в паре километров <span class="yes">к северо-западу</span> от <span class="yes">старой фермы</span>. <span class="yes">Хэндо</span> сообщил Вам, что это место абсолютно безопасное и тут можно переночевать.</p><p>Внутри <span class="yes">пещеры</span>, которая оказалась обжитой и уютной, он разжёг костёр. В животе заурчало. <span class="yes">Рейдер</span> ел какие-то сушеные кусочки мяса из своей сумки. Увидев, что у Вас нет с собой никаких припасов, он поделился с Вами едой. На удивление мясо оказалось невероятно вкусным, хотя внешний вид его вызывал подозрения.</p><p>- Крыса? – Осторожно спросили Вы.</p><p>- Китятина, - усмехнулся <span class="yes">рейдер</span>, продолжая усиленно работать челюстями.</p><p>- Откуда ж тут киты?</p><p>- С неба иногда падают, - без капли иронии ответил Вам <span class="yes">паренёк</span>.</p><p>Когда с ужином было покончено, <span class="yes">Хэндо</span> начал разговор:</p><p>- Я вижу, что ты уже понял кто я?</p>'
      )
  change_buttons({
    "Конечно, ты один из рейдеров, которые атакуют городские караваны.":
      mainQuest_Bad_Hendo1,
    "Нет, кто ты?": mainQuest_Bad_Hendo2,
  })
  currentFunction = mainQuest_Bad_Hendo
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Hendo1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_318.jpg")
  change_text(
    '<p><span class="yes">Хэндо</span> самодовольно усмехнулся.</p><p>- Именно, - воскликнул он. – Я – связной <span class="yes">Гадюк</span> в <span class="yes">Хабе</span>. Теперь, когда контакт с полицией накрылся, мне назад дороги нет.</p><p>Поймав Ваш взгляд, он уточнил:</p><p>- Причина не в том, что ты убил того <span class="yes">копа</span>. Просто ниточки, за которые я тянул для управления им, начали обрываться. Ещё до твоего прихода в <span class="yes">город</span>. Если человек гнилой, то он будет гнить даже в том случае, если переметнётся на другую сторону.</p><p>Забросив в рот очередной кусок мяса и наспех прожевав его, <span class="yes">рейдер</span> продолжил:</p><p>- В общем, я уже собирался заканчивать свою работу в <span class="yes">Хабе</span>. <span class="yes">Дон</span> же хотел сдать меня, а это уже в мои планы не входило. Я бы убил этого ублюдка сам, но тут появился ты. Убивать ты умеешь, я это видел. Ты безжалостен. Поэтому я предлагаю тебе вариант. Мы вместе идём к лидеру нашей банды – <span class="yes">Аспиду</span>. Если ты придёшься ему по нраву, то он тебя примет в нашу <span class="yes">общину</span>. С нами тебя ждут захватывающие приключения! Идёт?</p>'
  )
  change_buttons({
    "Сперва позволь задать несколько вопросов.": mainQuest_Bad_Hendo11,
    "Идёт! Всегда мечтал разбойничать на дорогах!": mainQuest_Bad_Hendo3a1,
    "Нет, подонок! Я никогда к Вам не присоединюсь!": mainQuest_Bad_Hendo3a2,
  })
  currentFunction = mainQuest_Bad_Hendo1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Hendo2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_318.jpg")
  change_text(
    '<p><span class="yes">Хэндо</span> захохотал как гиена. </p><p>- Вот это ты пройдоха, - воскликнул он. – Сразу всё понял, но решил проверить! Ну, что ж… Осторожность – очень хорошее качество в нашем деле. Я – связной <span class="yes">Гадюк</span> в <span class="yes">Хабе</span>. Теперь, когда контакт с полицией накрылся, мне назад дороги нет.</p><p>Поймав Ваш взгляд, он уточнил:</p><p>- Причина не в том, что ты убил того <span class="yes">копа</span>. Просто ниточки, за которые я тянул для управления им, начали обрываться. Ещё до твоего прихода в <span class="yes">город</span>. Если человек гнилой, то он будет гнить даже в том случае, если переметнётся на другую сторону.</p><p>Забросив в рот очередной кусок мяса и наспех прожевав его, <span class="yes">рейдер</span> продолжил:</p><p>- В общем, я уже собирался заканчивать свою работу в <span class="yes">Хабе</span>. <span class="yes">Дон</span> же хотел сдать меня, а это уже в мои планы не входило. Я бы убил этого ублюдка сам, но тут появился ты. Убивать ты умеешь, я это видел. Ты безжалостен. Поэтому я предлагаю тебе вариант. Мы вместе идём к лидеру нашей банды – <span class="yes">Аспиду</span>. Если ты придёшься ему по нраву, то он тебя примет в нашу <span class="yes">общину</span>. С нами тебя ждут захватывающие приключения! Идёт?</p>'
  )
  change_buttons({
    "Сперва позволь задать несколько вопросов.": mainQuest_Bad_Hendo11,
    "Идёт! Всегда мечтал разбойничать на дорогах!": mainQuest_Bad_Hendo3a1,
    "Нет, подонок! Я никогда к Вам не присоединюсь!": mainQuest_Bad_Hendo3a2,
  })
  currentFunction = mainQuest_Bad_Hendo2
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Hendo11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_318.jpg")
  change_text(
    '<p>- У нас вся ночь впереди для вопросов, - осклабился <span class="yes">бандит</span>. – Давай задавай! Я прямо аж в догадках теряюсь о чём ты меня спросишь…</p><p><span class="yes">Хэндо</span> отбросил в сторону попавшуюся ему в сушёном мясе кость и привалился спиной на остов разломанной кровати.</p>'
  )
  change_buttons({
    "Кто такой этот Аспид?": mainQuest_Bad_Hendo111,
    "Откуда вы взялись на Пустоши?": mainQuest_Bad_Hendo112,
    "Что тебе известно о нападении Гадюк на Братство Стали?":
      mainQuest_Bad_Hendo113,
    "Ладно, к чёрту вопросы. Я готов принять решение…": mainQuest_Bad_Hendo3a,
  })
  currentFunction = mainQuest_Bad_Hendo11
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Hendo11a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_318.jpg")
  change_text(
    '<p>– Бомби! Я прямо аж в догадках теряюсь о чём ты меня на этот раз спросишь…</p><p><span class="yes">Хэндо</span>, не мигая, смотрел на Вас. Не смотря на улыбку на лице, в его взгяляде чувствовалось нечто недоброе.</p>'
  )
  change_buttons({
    "Кто такой этот Аспид?": mainQuest_Bad_Hendo111,
    "Откуда вы взялись на Пустоши?": mainQuest_Bad_Hendo112,
    "Что тебе известно о нападении Гадюк на Братство Стали?":
      mainQuest_Bad_Hendo113,
    "Ладно, к чёрту вопросы. Я готов принять решение…": mainQuest_Bad_Hendo3a,
  })
  currentFunction = mainQuest_Bad_Hendo11a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Hendo111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_318.jpg")
  change_text(
    '<p>- Ну, прежде всего никогда не называй <span class="yes">вождя</span> «этот Аспид», с серьёзным выражением лица предупредил Вас <span class="yes">рейдер</span>. – Он наш лидер, вождь и Верховный жрец. Его слово закон. Только от него зависит, станешь ли ты членом общины или будешь изгнан. Если ты будешь дерзок, то он бросит тебя в <span class="yes">Яму</span> в жертву Великой Змее.</p><p>Вы поёжились. Слова фанатика произвели на Вас должное впечатление.</p><p>Зато <span class="yes">Хэндо</span>, увидев ваше замешательство, вновь бросил кусочек сушенных мясных чипсов в рот. Его лицо приняло вновь приняло насмешливо-безмятежное выражение.</p>'
  )
  change_buttons({
    "Ещё один вопрос...": mainQuest_Bad_Hendo11a,
    "Ладно, хватит вопросов. Я готов принять решение…": mainQuest_Bad_Hendo3a,
  })
  currentFunction = mainQuest_Bad_Hendo111
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Hendo112() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_318.jpg")
  if (viperStory === false) {
    change_text(
      '<p>История длинная… тебе как, покороче или со всеми подробностями? – <span class="yes">Хэндо</span> вытащил бутылку воды, отхлебнул от неё и внимательно посмотрел на Вас.</p>'
    )
    change_buttons({
      "Давай покороче, не будем время тратить.": mainQuest_Bad_Hendo1121,
      "Расскажи мне всю историю. Мне интересно.": mainQuest_Bad_Hendo1122,
      "Вернёмся к истории позже. Я хотел бы узнать о другом.":
        mainQuest_Bad_Hendo11a,
    })
  } else {
    change_text(
      '<p>Я ж тебе уже её всю рассказал! – проворчал <span class="yes">Хэндо</span>. - Не вижу смысла ещё раз пересказывать, раз ты всё равно такой беспамятный.</p>'
    )
    change_buttons({
      "Ну, тогда поведай мне о другом.": mainQuest_Bad_Hendo11a,
      "Ладно, хватит вопросов. Я готов принять решение…": mainQuest_Bad_Hendo3a,
    })
  }
  currentFunction = mainQuest_Bad_Hendo112
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Hendo1121() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_318.jpg")
  change_text(
    '<p><span class="yes">Рейдер</span> недовольно фыркнул.</p><p>- Так я и думал… - он, почесал подбородок. – <span class="yes">Фауст</span> – отец <span class="yes">Аспида</span> - вместе с большой группой людей покинул <span class="yes">лет 15</span> назад <span class="yes">Убежище 15</span>. Вот такой каламбур! Вместе они организовали небольшой <span class="yes">лагерь</span> возле оазиса в <span class="yes">Пустыне</span>. Мы и сейчас живём там. Чтобы выжить, мы грабим караваны и небольшие общины. Вот и всё.</p>'
  )
  change_buttons({
    "Ещё один вопрос...": mainQuest_Bad_Hendo11a,
    "Ладно, хватит вопросов. Я готов принять решение…": mainQuest_Bad_Hendo3a,
  })
  currentFunction = mainQuest_Bad_Hendo1121
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Hendo1122() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_318.jpg")
  change_text(
    '<p><span class="yes">Хэндо</span> явно рад был посвятить Вас в историю своих людей. Глотнув ещё воды, он начал свой рассказ.</p><p>- Весной <span class="yes">2141 года</span> отец нашего лидера <span class="yes">Джонатан Фауст</span> вывел из <span class="yes">Убежища 15</span> группу из примерно <span class="yes">200</span> человек и повёл их в пустыню. Много дней спустя, пройдя через сеть пещер, они обнаружили среди гор оазис, вокруг которого решили разбить <span class="yes">лагерь</span>. В центре оазиса была <span class="yes">яма</span>, в которую случайно упал <span class="yes">Джонатан</span>. Там он был укушен Священными Норными Змеями. Интересно? – спросил он у Вас.</p>'
  )
  change_buttons({
    "Захватывающе! Пожалуйста, продолжай.": mainQuest_Bad_Hendo1123,
    "Угу…": mainQuest_Bad_Hendo1123,
  })
  currentFunction = mainQuest_Bad_Hendo1122
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Hendo1123() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_318.jpg")
  change_text(
    '<p>- Отлично, - <span class="yes">Хэндо</span> поворошил угли в костре и продолжил. – Выйдя из ямы, <span class="yes">Фауст</span> сказал своим людям, что когда был на дне, ему явился бог, указавший ему Истинный Путь. Они должны приносить жертвы Богам Ямы и будут жить в счастье и благополучии. Но, естественно, ему никто не поверил. Многие говорили, что <span class="yes">Фауст</span> сошёл с ума. Тогда из его рукавов выползли две огромные Норные Гадюки и нападали на всех, кто был в лагере. Даже на самого <span class="yes">Фауста</span>.</p>'
  )
  change_buttons({
    "Да, ладно?!": mainQuest_Bad_Hendo1124,
    "Змеи? Бывает же!": mainQuest_Bad_Hendo1124,
  })
  currentFunction = mainQuest_Bad_Hendo1123
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Hendo1124() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  viperStory = true
  setCookie("cviperStory", viperStory)
  change_image("img/revenge/pic_318.jpg")
  change_text(
    '<p>- Ага, - <span class="yes">собеседник</span> фанатично сплёл из пальцев замысловатую фигуру. – <span class="yes">Фаусту</span> эти укусы были нипочём, а остальные были отравлены их ядом. В конце концов, он убил этих змей. Большая часть людей погибла, а выжило всего человек <span class="yes">сорок</span>. Яд изменил их сознание, но они уверовали в Великую Змею и приняли Извилистый Путь.</p><p><span class="yes">Рейдер</span> всё яростнее и яростнее взывал к различным символам. Вы же окончательно запутались в его бессвязной истории. Но вот он, наконец, закончил:</p><p>- Так был рождён наш <span class="yes">клан Гадюк</span>, а <span class="yes">Яма</span> посреди <span class="yes">поселения</span> стала нашей Святыней, - <span class="yes">Хэндо</span> театрально опустил руки к земле.</p>'
  )
  change_buttons({
    "Спасибо за рассказ, но у меня созрел ещё один вопрос.":
      mainQuest_Bad_Hendo11a,
    "Ладно, хватит вопросов. Я готов принять решение…": mainQuest_Bad_Hendo3a,
  })
  currentFunction = mainQuest_Bad_Hendo1124
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Hendo113() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_319.jpg")
  change_text(
    '<p>А вот тут Вы явно дали промашку. <span class="yes">Рейдер</span> молниеносно выхватил нож и приставил его к Вашей шее.</p><p>- Откуда ты знаешь про тот бой? Ты из рядов этой стальной чумы? – зашипел <span class="yes">Хэндо</span>.</p><p>Дело принимало не шуточный оборот. Он явно готов убить Вас без малейшего сожаления.</p>'
  )
  change_buttons({
    Соврать: mainQuest_Bad_Hendo1131,
    "Рассказать правду": mainQuest_Bad_Hendo1132,
  })
  currentFunction = mainQuest_Bad_Hendo113
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Hendo1131() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_319.jpg")
  change_text(
    '<p>Вы сделали удивлённое лицо и воскликнули:</p><p>- Как я могу быть в <span class="yes">Братстве</span>?! Разве у них такое оружие и броня? Я видел их, они, подобно средневековым рыцарям, ходят в стальных доспехах. И стреляют из лучемётов.</p><p>Кажется, прокатило и <span class="yes">Хэндо</span> поверил Вам.</p><p>- Тогда отвечай, жаба, - заорал он Вам прямо в лицо, по-прежнему давя ножом на горло. – Откуда ты узнал про эту битву?!</p><p>Вы немедленно нашлись:</p><p>- Я охранял караван, который шёл в <span class="yes">Хаб</span> с запада. Охранник <span class="yes">Братства Стали</span> у входа в <span class="yes">бункер</span> сказал нам, что на дорогах опасно и поведал нам о сражении, в котором они потеряли их <span class="yes">Старейшину</span>.</p><p><span class="yes">Рейдер</span> отнял нож от Вашего горла и захохотал.</p><p>- Так мы всё-таки убили их вождя? Это же чудесно! Извини, что не поверил тебе сначала, друг. Спасибо за эту прекрасную весть!</p><p>Вы еле удержались, чтобы не разорвать эту тварь на запчасти. Но внешне Вы изобразили на лице подобие улыбки.</p>'
  )
  change_buttons({
    "Да, ничего! С кем не бывает! Но у меня ещё вопрос.": mainQuest_Bad_Hendo3,
    "Ладно, хватит вопросов. Я готов принять решение…": mainQuest_Bad_Hendo3a,
  })
  currentFunction = mainQuest_Bad_Hendo1131
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Hendo3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_319.jpg")
  change_text(
    '<p><span class="yes">Хэндо</span> покачал головой:</p><p>- Знаешь, пожалуй хватит вопросов. А то мы так ещё до чего-либо договоримся. Говори, чего решил. Идём вместе к нашему <span class="yes">лидеру</span>?</p><p><span class="yes">Рейдер</span> прищурил один глаз.</p>'
  )
  change_buttons({
    "Идёт! Всегда мечтал разбойничать на дорогах!": mainQuest_Bad_Hendo3a1,
    "Нет, подонок! Я никогда к Вам не присоединюсь!": mainQuest_Bad_Hendo3a2,
  })
  currentFunction = mainQuest_Bad_Hendo3
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Hendo3a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_318.jpg")
  change_text(
    '<p>- И то правда. - согласился <span class="yes">Хэндо</span>. - Уже давно спать пора. Завтра рано вставать. На наш след к утру наверняка выйдут. Чего надумал в итоге?</p>'
  )
  change_buttons({
    "Идёт! Всегда мечтал разбойничать на дорогах!": mainQuest_Bad_Hendo3a1,
    "Нет, подонок! Я никогда к Вам не присоединюсь!": mainQuest_Bad_Hendo3a2,
  })
  currentFunction = mainQuest_Bad_Hendo3a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Hendo3a1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_320.jpg")
  change_text(
    '<p><span class="yes">Хэндо</span> обрадовался:</p><p>- Другое дело! А то я, было, подумал, что ты соскочить решил, - простодушно восклицал <span class="yes">рейдер</span>. – А теперь, когда мы всё решили, самое время отдохнуть. Завтра предстоит дорога.</p><p>Видимо этот простак действительно Вам доверился, так как он без промедления улёгся на старый, истлевающий тюфяк в углу пещеры, и мгновенно уснул.</p><p>Вы же, облокотившись спиной о прохладную стену пещеры, погрузились в раздумья. Во-первых, решение забраться в самое сердце логова рейдеров было чрезвычайно рискованным. Во-вторых, случись чего, Вы будете один против десятков, а может и сотен самых отъявленных головорезов на <span class="yes">Пустоши</span>.</p><p>Эти мысли довольно долго не давали Вам покоя. В конце концов, Вы отбросили все колебания прочь, решив, что пусть всё будет как будет. Может Вас даже наградят в итоге. Посмертно.</p>'
  )
  change_buttons({ Уснуть: mainQuest_Bad_Hendo4 })
  currentFunction = mainQuest_Bad_Hendo3a1
  setCookie("ccurrentFunction", currentFunction)
}
