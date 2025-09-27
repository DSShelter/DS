function mainQuest_Good_FinalBattle() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (Lip === true) {
    change_image("img/revenge/pic_239.jpg")
    change_text(
      '<p>Поспешность в данной ситуации Вас подвела – за поворотом дороги, огибающей холм, Вы наткнулись на большой отряд <span class="yes">рейдеров</span>.</p><p>Их было <span class="yes">шестеро</span>, все держали в руках оружие, направленное в сторону Вас и Вашего спутника. Видимо это и была охрана внешнего периметра лагеря <span class="yes">Гадюк</span>. Вооружены и одеты они были не так как остальные обитатели лагеря, а как обычные бандиты с <span class="yes">Пустоши</span>.</p><p>Их <span class="yes">лидер</span> осклабился в кривой усмешке:</p><p>- Что, не ожидали?! А мы тут ставки уже делали, сдохнешь ты, - он ткнул в Вашу сторону пальцем. – в пещере или охрана лагеря скормит тебя змеям. Ну, кажется, мы все проиграли. Ну, что, пойдёте с нами добровольно?</p>'
    )
    if (getPistol === true) {
      change_buttons({
        "Сдаться рейдерам": mainQuest_Good_FinalBattle21,
        "Притвориться, что Вы сдаётесь и бросить на землю свой дробовик":
          mainQuest_Good_FinalBattle22,
        "Выстрелить в лидера": mainQuest_Good_FinalBattle23,
      })
    } else {
      change_buttons({
        "Сдаться рейдерам": mainQuest_Good_FinalBattle21,
        "Выстрелить в лидера": mainQuest_Good_FinalBattle23,
      })
    }
  } else {
    if (getGrenade === true) {
      change_image("img/revenge/pic_239a.jpg")
      change_text(
        '<p>Поспешность в данной ситуации Вас подвела – за поворотом дороги, огибающей холм, Вы наткнулись на большой отряд <span class="yes">рейдеров</span>.</p><p>Их было <span class="yes">шестеро</span>. Все держали в руках оружие, направленное Вашу сторону. Видимо это и была охрана внешнего периметра лагеря <span class="yes">Гадюк</span>.</p><p><span class="yes">Лидер</span> отряда налётчиков осклабился в кривой усмешке:</p><p>- Что, не ожидал?! А мы тут ставки уже делали, сдохнешь ты, - он ткнул в Вашу сторону пальцем, – в пещере или охрана лагеря скормит тебя змеям. Ну, кажется, мы все проиграли. Ну, что, пойдёшь с нами добровольно?</p>'
      )
      if (getPistol === true) {
        change_buttons({
          "Сдаться рейдерам": mainQuest_Good_FinalBattleAlone1,
          "Притвориться, что Вы сдаётесь и бросить на землю свой дробовик":
            mainQuest_Good_FinalBattleAlone2,
          "Выстрелить в лидера": mainQuest_Good_FinalBattleAlone3,
          "Бросить под ноги рейдерам гранату": mainQuest_Good_FinalBattleAlone4,
        })
      } else {
        change_buttons({
          "Сдаться рейдерам": mainQuest_Good_FinalBattleAlone1,
          "Выстрелить в лидера": mainQuest_Good_FinalBattleAlone3,
          "Бросить под ноги рейдерам гранату": mainQuest_Good_FinalBattleAlone4,
        })
      }
    } else {
      lightBattle = true
      setCookie("clightBattle", lightBattle)
      change_image("img/revenge/pic_239b.jpg")
      change_text(
        '<p>Поспешность в данной ситуации Вас подвела – за поворотом дороги, огибающей холм, Вы наткнулись на большой отряд <span class="yes">рейдеров</span>.</p><p>Их было по-прежнему <span class="yes">трое</span>, все держали в руках оружие, направленное в Вашу сторону.</p><p><span class="yes">Лидер</span> отряда осклабился в кривой усмешке:</p><p>- Что, не ожидал?! Так я и знал, что кинешь ты <span class="yes">Хэндо</span>. Небось, трупом уже лежит? Балбес молодой… Ну, что, пойдёшь с нами добровольно?</p>'
      )
      if (getPistol === true) {
        change_buttons({
          "Сдаться рейдерам": mainQuest_Good_FinalBattleAlone1,
          "Притвориться, что Вы сдаётесь и бросить на землю свой дробовик":
            mainQuest_Bad_FinalBattle2,
          "Выстрелить в лидера": mainQuest_Bad_FinalBattle3,
        })
      } else {
        change_buttons({
          "Сдаться рейдерам": mainQuest_Good_FinalBattleAlone1,
          "Выстрелить в лидера": mainQuest_Bad_FinalBattle3,
        })
      }
    }
  }
  currentFunction = mainQuest_Good_FinalBattle
  setCookie("ccurrentFunction", currentFunction)
}

/* Добрая ветка - С НАПАРНИКОМ */
/* Предательство */
function mainQuest_Good_FinalBattle21() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_240.jpg")
  change_text(
    '<p>К невероятному изумлению Вашего <span class="yes">спутника</span> Вы бросили всё своё оружие в сторону <span class="yes">рейдеров</span> и подняли руки вверх. Издав отчаянный крик, он бросился за близлежащие валуны. Вы упали на землю и закрыли голову руками. Какой же Вы удивительный предатель!</p><p><span class="yes">Лип</span> стал яростно отстреливался от наседавшего на него противника. Вы слышали стрельбу, но лежали зажмурившись. Внезапно Вам захотелось оказаться дома – в <span class="yes">Лост-Хиллз</span>, увидеть родных ещё разок…</p><p>Вы лежали, зажмурившись пока не поняли, что чёрное дело сделано.</p>'
  )
  change_buttons({
    "Продолжать лежать с закрытыми глазами": mainQuest_Good_FinalBattle211,
    "Посмотреть, что стало с Липом": mainQuest_Good_FinalBattle212,
    "Вскочить и убежать прочь": mainQuest_Good_FinalBattle213,
  })
  currentFunction = mainQuest_Good_FinalBattle21
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattle211() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_241.jpg")
  change_text(
    '<p>Не смотря ни на что, Вы продолжили лежать с закрытыми глазами. Вам думали о доме, о том, как глупо всё получилось.</p><p>"Нет! Я не умру… Я буду умолять о пощаде, выдам всё что знаю, но не умру…"</p<p>Поток Ваших мыслей прервал <span class="yes">взрыв</span>. Вздрогнув, Вы открыли глаза и повернули голову в сторону хлопка.</p><p>Ваш <span class="yes">напарник</span> перед смертью вырвал чеку у гранаты и положил её под себя. Когда <span class="yes">рейдеры</span> начали осматривать его изрешечённое пулями тело, то он смог забрать с собой на тот свет ещё <span class="yes">двух</span> подонков.</p><p>Оставшиеся в живых <span class="yes">бандиты</span> набросились на Вас и стали избивать.</p>'
  )
  change_buttons({ "Потерять сознание": mainQuest_Good_FinalBattle2111 })
  currentFunction = mainQuest_Good_FinalBattle211
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattle212() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_241.jpg")
  change_text(
    '<p>Вы широко распахнули глаза и повернули голову в сторону Вашего бывшего <span class="yes">напарника</span>. Бедняга погиб, успев застрелить лишь одного <span class="yes">бандита</span>, и теперь лежал за валунами, навалившись телом на правую руку.</p><p><span class="yes">Лидер</span> разбойников с ещё одним отщепенцем сделали контрольный выстрел по <span class="yes">Липу</span> и начали осматривать его тело. Внезапно раздался громкий взрыв и <span class="yes">рейдеров</span>, склонившихся над мертвым телом, разорвало на куски. Ваш <span class="yes">напарник</span> перед смертью вырвал чеку у <span class="yes">гранаты</span> и положил её под себя. Всё-таки этот <span class="yes">парень</span> был героем.</p><p>Оставшиеся в живых <span class="yes">бандиты</span> набросились на Вас и стали избивать.</p>'
  )
  change_buttons({ "Потерять сознание": mainQuest_Good_FinalBattle2111 })
  currentFunction = mainQuest_Good_FinalBattle212
  setCookie("ccurrentFunction", currentFunction)
}

/* ЭТАП 1 */
/* Бой с рейдерами с пистолетом */
function mainQuest_Good_FinalBattle22() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 4
  change_gun()
  throw_shotgun()
  change_image("img/revenge/pic_242.jpg")
  change_text(
    '<p>Вы сделали вид что сдаётесь: левую руку подняли вверх, а правой сдёрнули с плеча свою <span class="yes">двустволку</span> и бросили её на землю. Сделав это, Вы подмигнули <span class="yes">Липу</span> и он мгновенно понял Ваш план. Одновременно вы прыгнули в разные стороны. В прыжке Вы выхватили из-за пояса <span class="yes">пистолет</span> и сделали <span class="yes">четыре</span> выстрела в сторону <span class="yes">рейдеров</span>. Тоже самое сделал <span class="yes">Лип</span>.</p><p><span class="yes">Двое</span> рейдеров упали замертво. Остальные открыли шквальный огонь. Вы заняли позицию за холмом, а Ваш <span class="yes">напарник</span> засел за огромными валунами, так кстати оказавшимися неподалёку.</p>'
  )
  change_buttons({ "Оценить ситуацию": mainQuest_Good_FinalBattle221 })
  currentFunction = mainQuest_Good_FinalBattle22
  setCookie("ccurrentFunction", currentFunction)
}

/* Бой с рейдерами с дробовиком */
function mainQuest_Good_FinalBattle23() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_health(60)
  if (health > 0) {
    rifle_ammo -= 2
    change_shotgun()
    change_image("img/revenge/pic_251.jpg")
    change_text(
      '<p>Вы столько вытерпели, столько прошли, чтобы какая-то пустынная гадюка ставила крест на всём деле? Ну, нет! По крайней мере, без боя Вы решили не сдаваться. Резко сдёрнув с плеча <span class="yes">дробовик</span>, Вы саданули дуплетом в сторону <span class="yes">лидера</span> рейдеров и его ближайшего <span class="yes">прихлебателя</span>.</p><p>Выпустив <span class="yes">два</span> заряда, Вы прыгнули влево и спрятались за холмом. Это был смелый поступок – Вы убили <span class="yes">лидера</span> и ещё одного <span class="yes">рейдера</span>. Однако, прежде чем Вы скрылись за холмом, враг успел Вас достать. Вы были <span class="yes">серьёзно ранены</span> в правое подреберье. Алая кровь просочилась сквозь куртку и потекла струйкой по ногам вниз. Пуля прошла навылет.</p><p>Зажав рану, Вы посмотрели в сторону своего <span class="yes">напарника</span>. У него всё было гораздо лучше. <span class="yes">Одного</span> противника <span class="yes">Лип</span> положил наповал и теперь целился в ближайшего к нему <span class="yes">бандита</span>. Ваше положение осложнилось тем, что враг перешёл в наступление.</p>'
    )
    change_buttons({ "Оценить положение": mainQuest_Good_FinalBattle231 })
  } else {
    death()
    change_image("img/revenge/pic_251a.jpg")
    change_text(
      '<p>Вы столько вытерпели, столько прошли, чтобы какая-то пустынная гадюка ставила крест на всём деле? Ну, нет! По крайней мере, без боя Вы решили не сдаваться. Резко сдёрнув с плеча <span class="yes">дробовик</span>, Вы сделали дуплет в сторону <span class="yes">лидера</span> рейдеров и его ближайшего <span class="yes">прихлебателя</span>.</p><p>Выпустив <span class="yes">два</span> заряда, Вы прыгнули влево. Это был смелый поступок – Вы убили <span class="yes">лидера</span> и ещё одного <span class="yes">рейдера</span>. Однако, прежде чем Вы скрылись за холмом, враг успел Вас достать. Пуля прошила печень. Рана оказалась смертельной.</p><p><span class="yes">Вы погибли</span>, так и не выполнив задания <span class="yes">Братства</span>.</p>'
    )
    change_buttons({ "Игра окончена!": restart })
  }
  currentFunction = mainQuest_Good_FinalBattle23
  setCookie("ccurrentFunction", currentFunction)
}

/* ЭТАП 2 */
/* Бой с рейдерами с пистолетом */
function mainQuest_Good_FinalBattle221() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_243.jpg")
  change_text(
    '<p>В магазине Вашего <span class="yes">пистолета</span> оставалось ещё <span class="yes">8 патронов</span>. Врагов оставалось <span class="yes">четверо</span>, при этом их <span class="yes">лидер</span> остался жив. <span class="yes">Главный рейдер</span> вместе с ещё одним, <span class="yes">тяжеловооружённым отморозком</span> , бежали к Вашей позиции по дороге. Другой, прыткий и вооружённый холодным оружием <span class="yes">рейдер</span> лез по холму, чтобы броситься на Вас сверху. <span class="yes">Четвёртый</span> же бежал к <span class="yes">Липу</span> и попасть по нему, не выйдя на дорогу, было невозможно.</p>'
  )
  change_buttons({
    "Застрелить их лидера": mainQuest_Good_FinalBattle2211,
    "Убить рейдера на холме": mainQuest_Good_FinalBattle2212,
    "Выстрелить по тяжеловооружённому рейдеру": mainQuest_Good_FinalBattle2213,
  })
  currentFunction = mainQuest_Good_FinalBattle221
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattle2211() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 3
  change_gun()
  lower_health(30)
  if (health > 0) {
    change_image("img/revenge/pic_244.jpg")
    change_text(
      '<p><span class="yes">Главный гад</span> достанется только Вам! Для него Вы не пожалели <span class="yes">трёх</span> выстрелов из своего <span class="yes">пистолета</span>. Две пули точно легли в цель и сражённый <span class="yes">главарь бандитов</span> упал. Зато его <span class="yes">подручный</span> не растерялся и открыл по Вам плотный огонь из винтовки главаря. Одна пуля засела у Вас в плече, что заставило Вас вновь скрыться за холмом.</p><p>Вы увидели, что <span class="yes">Лип</span> уложил ещё одного, ближнего к нему. Таким образом, врагов осталось всего <span class="yes">двое</span>. Но эти двое сосредоточились на том, чтобы достать Вас.</p>'
    )
    change_buttons({
      "Расстрелять рейдера на холме": mainQuest_Good_FinalBattle36,
      "Выстрелить по рейдеру, который бежит к Вам со стороны дороги":
        mainQuest_Good_FinalBattle35,
      "Бросить пистолет на землю и поднять руки": mainQuest_Good_FinalBattle34,
    })
  } else {
    death()
    change_image("img/revenge/pic_244a.jpg")
    change_text(
      '<p><span class="yes">Главный гад</span> достанется только Вам! Для него Вы не пожалели <span class="yes">трёх</span> выстрелов из своего <span class="yes">пистолета</span>. Две пули точно легли в цель и сражённый <span class="yes">главарь бандитов</span> упал. Зато его <span class="yes">подручный</span> не растерялся и открыл по Вам плотный огонь из винтовки главаря. Одна из пуль попала Вам прямо в лоб.</p><p><span class="yes">Вы погибли.</span></p>'
    )
    change_buttons({ "Игра окончена!": restart })
  }
  currentFunction = mainQuest_Good_FinalBattle2211
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattle2212() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 1
  change_gun()
  lower_health(60)
  if (health > 0) {
    change_image("img/revenge/pic_245.jpg")
    change_text(
      '<p>- <span class="yes">Этот с ножом</span> станет серьёзной проблемой, - решили Вы. – Лучше уложить его сейчас.</p><p>Хорошенько прицелилившись, Вы пустили пулю прямо ему в череп. Труп <span class="yes">рейдера</span> упал к Вашим ногам. Вы оглянулись и увидели, что <span class="yes">Лип</span> уложил ещё одного, ближнего к нему. Таким образом, врагов осталось всего <span class="yes">двое</span>. В этот момент <span class="yes">главарь</span> налётчиков и <span class="yes">тяжеловооружённый рейдер</span> показались из-за холма и открыли огонь в Вашу сторону. <span class="yes">Тяжеловооружённый бандит</span> лишь слегка оцарапал выстрелом Ваше плечо, зато их <span class="yes">лидер</span> попал Вам в живот, при этом пуля прошла навылет. <span class="yes">Ранение было серьёзным</span>. Но враги оказались перед Вами и жизнь повисла на волоске…</p>'
    )
    change_buttons({
      "Вколоть стимулятор": mainQuest_Good_FinalBattle3a1,
      "Выпустить все оставшиеся патроны по лидеру":
        mainQuest_Good_FinalBattle3a2,
      "Расстрелять весь магазин в тяжеловооружённого рейдера":
        mainQuest_Good_FinalBattle3a3,
    })
  } else {
    death()
    change_image("img/revenge/pic_245a.jpg")
    change_text(
      '<p>- <span class="yes">Этот с ножом</span> станет серьёзной проблемой, - решили Вы. – Лучше уложить его сейчас.</p><p>Хорошенько прицелилившись, Вы пустили пулю прямо ему в череп. Труп <span class="yes">рейдера</span> упал к Вашим ногам. Вы оглянулись и увидели, что <span class="yes">Лип</span> уложил ещё одного, ближнего к нему. Таким образом, врагов осталось всего <span class="yes">двое</span>. В этот момент <span class="yes">главарь</span> налётчиков и <span class="yes">тяжеловооружённый рейдер</span> показались из-за холма и открыли огонь в Вашу сторону. <span class="yes">Тяжеловооружённый бандит</span> лишь слегка оцарапал выстрелом Ваше плечо, зато их <span class="yes">лидер</span> попал Вам в живот, при этом пуля прошла навылет. К несчастью эта рана оказалась фатальной.</p><p><span class="yes">Вы погибли.</span></p>'
    )
    change_buttons({ "Игра окончена!": restart })
  }
  currentFunction = mainQuest_Good_FinalBattle2212
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattle2213() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 5
  change_gun()
  lower_health(50)
  if (health > 0) {
    change_image("img/revenge/pic_246.jpg")
    change_text(
      '<p><span class="yes">Налётчик</span> в тяжёлых металлических доспехах показался Вам самым серьёзным противником. Он действительно выглядел устрашающе в своей стальной броне с шипами на плечах. Вы выстрелили в него <span class="yes">5 раз</span>, и все пули попали точно в цель. Вам казалось, что этого выродка ничто не остановит, но внезапно могучий рейдер рухнул замертво на пыльную дорогу.</p><p>Увидев смерть ещё одного своего бойца, <span class="yes">лидер</span> взвыл от ярости и выпустил в Вас целый рой пуль, одна из которых засела у Вас в плече, что заставило Вас вновь скрыться за холмом.</p><p>Вы увидели, как <span class="yes">Лип</span> уложил ещё одного, ближнего к нему. Врагов оставалось всего <span class="yes">двое</span>. И тут на Вас сверху спрыгнул проворный <span class="yes">рейдер</span> с ножом. Этим ножом он нанёс Вам рваную рану в левое бедро. <span class="yes">Лидер</span> же бежал к Вашей позиции по дороге и находился в нескольких метрах от Вас. Жизнь повисла на волоске…</p>'
    )
    change_buttons({
      "Выстрелить в упор в рейдера с ножом": mainQuest_Good_FinalBattle37,
      "Выстрелить по лидеру, который бежит к Вам по дороге":
        mainQuest_Good_FinalBattle32,
      "Бросить пистолет на землю и поднять руки": mainQuest_Good_FinalBattle33a,
    })
  } else {
    death()
    change_image("img/revenge/pic_246a.jpg")
    change_text(
      '<p><span class="yes">Налётчик</span> в тяжёлых металлических доспехах показался Вам самым серьёзным противником. Он действительно выглядел устрашающе в своей стальной броне с шипами на плечах. Вы выстрелили в него <span class="yes">5 раз</span>, и все пули попали точно в цель. Вам казалось, что этого выродка ничто не остановит, но внезапно могучий рейдер рухнул замертво на пыльную дорогу.</p><p>Увидев смерть ещё одного своего бойца, <span class="yes">лидер</span> взвыл от ярости и выпустил в Вас целый рой пуль, одна из которых угодила Вам прямо в лоб.</p><p><span class="yes">Вы погибли.</span></p>'
    )
    change_buttons({ "Игра окончена": restart })
  }
  currentFunction = mainQuest_Good_FinalBattle2213
  setCookie("ccurrentFunction", currentFunction)
}

/* Бой с рейдерами с дробовиком */
function mainQuest_Good_FinalBattle231() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_252.jpg")
  change_text(
    '<p>У Вас потемнело в глазах. Рана оказалась серьезнее чем Вы полагали вначале. Вам нужна <span class="yes">срочная</span> помощь. Хотя бы <span class="yes">стимулятор</span>, способный затянуть рану и остановить кровотечение. С другой стороны враги уже подбираются к Вам и их количество нужно сокращать.</p><p>Вы увидели, как <span class="yes">Лип</span> уложил ещё одного <span class="yes">рейдера</span>. Таким образом, врагов осталось всего <span class="yes">двое</span>. Но эти двое сосредоточились на том, чтобы достать Вас. <span class="yes">Один</span> из них, шипя от ярости, уже карабкался на холм, чтобы напасть на Вас сверху, <span class="yes">другой</span> обходил холм справа от Вас и был ближе к <span class="yes">Липу</span>.</p>'
  )
  if (stimpacks > 0) {
    change_buttons({
      "Вколоть стимулятор": mainQuest_Good_FinalBattle2311,
      "Убить рейдера на холме": mainQuest_Good_FinalBattle2312,
      "Выстрелить по рейдеру, который ближе к Липу":
        mainQuest_Good_FinalBattle2313,
    })
  } else {
    change_buttons({
      "Убить рейдера на холме": mainQuest_Good_FinalBattle2312,
      "Выстрелить по рейдеру, который ближе к Липу":
        mainQuest_Good_FinalBattle2313,
    })
  }
  currentFunction = mainQuest_Good_FinalBattle231
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattle2311() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_stimpacks(1)
  change_image("img/revenge/pic_253.jpg")
  change_text(
    '<p>Вам нужно было время для того чтобы восстановиться после ранения и перезарядить <span class="yes">дробовик</span>. Вы вытащили из сумки шприц <span class="yes">стимулятора</span>. Не медля ни секунды, Вы, превозмогая боль, воткнули <span class="yes">стимулятор</span> прямо в рану и ввели препарат. Боль мгновенно утихла и кровотечение было остановлено, в том числе и с той стороны откуда пуля вышла.</p><p>Только Вы успели перезарядить <span class="yes">ружьё</span>, как на Вас сверху спрыгнул проворный <span class="yes">рейдер с ножом</span>. Этим ножом он нанёс Вам рваную рану в левое бедро. Другой <span class="yes">рейдер</span> бежал к Вашей позиции по дороге и находился в нескольких метрах. Жизнь повисла на волоске…</p>'
  )
  change_buttons({
    "Выстрелить в упор в рейдера с ножом": mainQuest_Good_FinalBattle31,
    "Выстрелить по рейдеру, который бежит к Вам по дороге":
      mainQuest_Good_FinalBattle32a,
    "Бросить ружьё на землю и поднять руки": mainQuest_Good_FinalBattle33,
  })
  currentFunction = mainQuest_Good_FinalBattle2311
  setCookie("ccurrentFunction", currentFunction)
}

/* ЭТАП 3 */
/* Бой с рейдерами с пистолетом */
function mainQuest_Good_FinalBattle35() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  health = 1
  lower_health(0)
  pistol_ammo = 0
  change_gun()
  change_image("img/revenge/pic_247.jpg")
  change_text(
    '<p>Вы решили открыть огонь по <span class="yes">рейдеру</span>, который бежал по дороге. Хорошо прицелившись, Вы убили <span class="yes">бегущего по дороге</span> бандита меткими выстрелами.</p><p>Опрометчиво оставленный без Вашего внимания <span class="yes">рейдер с ножом</span> в тот же миг обрушился на Вас сверху, нанеся Вам <span class="yes">тяжёлые раны</span>. Он был убит бегущим на выручку <span class="yes">Липом</span>.</p>'
  )
  change_buttons({ "Бой окончен": mainQuest_Good_Final_1 })
  currentFunction = mainQuest_Good_FinalBattle35
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattle3a2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo = 0
  change_gun()
  change_image("img/revenge/pic_256.jpg")
  if (health > 15) {
    change_text(
      '<p>Адреналин в крови заглушил боль от нанесённого ранения. Перед собой Вы видели только безжалостных ублюдков, заслуживающих лишь одного... С яростным криком Вы разрядили в <span class="yes">главаря</span> рейдеров все оставшиеся патроны. Его изрешечённый пулями труп упал в нескольких метрах перед Вами.</p><p>Готовый принять смерть, Вы смотрели с ненавистью на <span class="yes">тяжеловооружённого рейдера</span>, приближавшегося к Вам. Патронов не осталось и Вы со злости швырнули <span class="yes">пистолет</span> прямо в лицо врага. Получив удар, он замертво рухнул на землю, придавив Ваши ноги.</p><p>Ничего не понимая, Вы ошарашено смотрели на поверженного бандита. Из под его брони вытекала на землю алая струйка крови. К Вам приблизился Ваш <span class="yes">спутник</span>, спасший Вам жизнь.</p>'
    )
    change_buttons({ "Бой окончен": mainQuest_Good_FinalBattle4 })
  } else {
    change_text(
      '<p>Адреналин в крови заглушил боль от нанесённого ранения. Перед собой Вы видели только безжалостных ублюдков, заслуживающих лишь одного... С яростным криком Вы разрядили в <span class="yes">главаря</span> рейдеров все оставшиеся патроны. Его изрешечённый пулями труп упал в нескольких метрах перед Вами.</p><p>Готовый принять смерть, Вы смотрели с ненавистью на <span class="yes">тяжеловооружённого рейдера</span>, приближавшегося к Вам. Патронов не осталось и Вы со злости швырнули <span class="yes">пистолет</span> прямо в лицо врага. Получив удар, он замертво рухнул на землю, придавив Ваши ноги.</p><p>Ничего не понимая, Вы ошарашено смотрели на поверженного бандита. Из под его брони вытекала на землю алая струйка крови. К Вам приблизился Ваш <span class="yes">спутник</span>.</p>'
    )
    change_buttons({ "Бой окончен": mainQuest_Good_Final_1 })
  }
  currentFunction = mainQuest_Good_FinalBattle3a2
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattle3a3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  health = 1
  lower_health(0)
  pistol_ammo = 0
  change_gun()
  change_image("img/revenge/pic_257.jpg")
  change_text(
    '<p>Адреналин в крови заглушил боль от нанесённого ранения. Перед собой Вы видели только безжалостных ублюдков, заслуживающих лишь одного.... С яростным криком Вы начали стрелять в <span class="yes">тяжеловооруженного бандита</span>. Но умирать он явно не хотел, стреляя по Вам в ответ. Пули одна за другой пронзали Вашу грудь, но Вы держались. На помощь бежал Ваш <span class="yes">спутник</span>, стреляя на ходу во врагов. Последняя пуля в магазине, выпущенная из Вашего <span class="yes">пистолета</span> поставила точку в этой битве.</p>'
  )
  change_buttons({ "Бой окончен": mainQuest_Good_Final_1 })
  currentFunction = mainQuest_Good_FinalBattle3a3
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattle36() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo = 0
  change_gun()
  change_image("img/revenge/pic_258.jpg")
  if (health > 15) {
    change_text(
      '<p>Вы решили, что главная опасность кроется в этом проворном <span class="yes">выродке с ножом</span>. Он был всё ближе и ближе. Вот-вот и он бы кинулся на Вас со своим тесаком, однако Вы, практически не целясь, разрядили в него все оставшиеся боеприпасы. Мертвоё тело скатилось к Вашим ногам со склона горы.</p><p>Вы оглянулись в сторону <span class="yes">последнего</span> противника, но он уже был мёртв. Ваш <span class="yes">напарник</span> метким выстрелом остановил его и этим <span class="yes">спас Вам жизнь</span>.</p>'
    )
    change_buttons({ "Бой окончен": mainQuest_Good_FinalBattle4 })
  } else {
    change_text(
      '<p>Вы решили, что главная опасность кроется в этом проворном <span class="yes">выродке с ножом</span>. Он был всё ближе и ближе. Вот-вот и он бы кинулся на Вас со своим тесаком, однако Вы, практически не целясь, разрядили в него все оставшиеся боеприпасы. Мертвоё тело скатилось к Вашим ногам со склона горы.</p><p>Вы оглянулись в сторону <span class="yes">последнего</span> противника, но он уже был мёртв. Ваш <span class="yes">напарник</span> метким выстрелом остановил его.</p>'
    )
    change_buttons({ "Бой окончен": mainQuest_Good_Final_1 })
  }
  currentFunction = mainQuest_Good_FinalBattle36
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattle37() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo = 0
  change_gun()
  change_image("img/revenge/pic_259.jpg")
  if (health > 15) {
    change_text(
      '<p>Вы навели на яростного врага <span class="yes">пистолет</span> и разрядили в него весь оставшийся магазин. Изрешечённого <span class="yes">рейдера</span> отбросило в сторону. Вы резко развернулись в сторону последнего врага, но раненая нога подвела Вас. От резкой боли Вы упали на землю и устремили взор на главаря рейдеров с готовностью принять смерть.</p><p><span class="yes">Последний</span> смотрел на Вас налитыми кровью глазами. На его лице был лишь злобный оскал неотвратимой смерти. Он поднял свою винтовку собираясь выстрелить в Вас, но Ваш <span class="yes">спутник</span> спас Вам жизнь, убив <span class="yes">главаря</span> метким выстрелом</p>'
    )
    change_buttons({ "Бой окончен": mainQuest_Good_FinalBattle4 })
  } else {
    change_text(
      '<p>Вы навели на яростного врага <span class="yes">пистолет</span> и разрядили в него весь оставшийся магазин. Изрешечённого <span class="yes">рейдера</span> отбросило в сторону. Вы резко развернулись в сторону последнего врага, но раненая нога подвела Вас. От резкой боли Вы упали на землю и устремили взор на главаря рейдеров с готовностью принять смерть.</p><p><span class="yes">Последний</span> смотрел на Вас налитыми кровью глазами. На его лице был лишь злобный оскал неотвратимой смерти. Он поднял свою винтовку собираясь выстрелить в Вас, но Ваш <span class="yes">спутник</span> убил <span class="yes">главаря</span> метким выстрелом</p>'
    )
    change_buttons({ "Бой окончен": mainQuest_Good_Final_1 })
  }
  currentFunction = mainQuest_Good_FinalBattle37
  setCookie("ccurrentFunction", currentFunction)
}

/* Бой с рейдерами с дробовиком */
function mainQuest_Good_FinalBattle31() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 2
  change_shotgun()
  change_image("img/revenge/pic_254.jpg")
  change_text(
    '<p>Вы навели на яростного врага ствол <span class="yes">дробовика</span> и выстрелили в него дуплетом. <span class="yes">Рейдера</span> отбросило в сторону на метр. Упав на землю, бандит больше не поднялся. В изнеможении  Вы упали на землю и устремили взор на оставшегося врага с готовностью принять смерть.</p><p><span class="yes">Последний рейдер</span> уже готов был застрелить Вас, но в этот момент пуля, выпущенная <span class="yes">Липом</span>, прошила его голову навылет. Поверженный враг рухнул к Вашим ногам.</p>'
  )
  if (health > 15) {
    change_buttons({ "Бой окончен": mainQuest_Good_FinalBattle4 })
  } else {
    change_buttons({ "Бой окончен": mainQuest_Good_Final_1 })
  }
  currentFunction = mainQuest_Good_FinalBattle31
  setCookie("ccurrentFunction", currentFunction)
}

function mainQuest_Good_FinalBattle4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  raise_health(40)
  change_image("img/revenge/pic_255.jpg")
  change_text(
    '<p><span class="yes">Лип</span> подбежал к Вам.</p><p>- Жив? Жив, дружище? – крикнул он Вам, бросая в руки <span class="yes">стимулятор</span>.</p><p>- Да, жив вроде, – ответили Вы, вкалывая <span class="yes">шприц</span> в рану. Вы действительно были живы и даже готовы продолжать путь, одно только привело вас в ужас… В вашей ноге торчал <span class="yes">дротик</span>. Точно таким же <span class="yes">дротиком</span>, отравленным <span class="yes">ядом</span>, был ранен <span class="yes">Старейшина Мэксон</span>. В пылу битвы Вы не заметили этого ранения. Сколько же времени уже прошло? Счёт шёл на минуты. Вы вытащили маленький <span class="yes">дротик</span> из ноги и увидели, как из раны потекла ядовито-жёлтая слизь. Сомнений не было – Вы отравлены и скоро умрёте.</p><p>- А, да ерунда. – Воскликнул <span class="yes">Лип</span>, показывая свои свежие раны. – В меня <span class="yes">два</span> таких попало. Ничего страшного.</p><p>Времени объяснять ему подробности у Вас не было. Вы достали единственную дозу <span class="yes">противоядия</span>, которую взяли у <span class="yes">Хэндо</span>. Теперь Вам осталось лишь одно – <span class="yes">решить</span>, кто из вас будет жить дальше: этот наивный осёл или Вы. </p>'
  )
  change_buttons({
    "Отдать лекарство Липу": mainQuest_Good_Final_2,
    "Принять противоядие самому": mainQuest_Good_Final_3,
  })
  currentFunction = mainQuest_Good_FinalBattle4
  setCookie("ccurrentFunction", currentFunction)
}

/* БЕЗ НАПАРНИКА */
/* Сдаться врагу */
function mainQuest_Good_FinalBattleAlone1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  removeItems()
  if (lightBattle === true) {
    change_image("img/revenge/pic_268a.jpg")
  } else {
    change_image("img/revenge/pic_268.jpg")
  }
  change_text(
    '<p>К изумлению <span class="yes">бандитов</span> Вы отбросили своё оружие в сторону и подняли руки вверх. Кажется, пустынные <span class="yes">разбойники</span> и сами не ожидали такой лёгкой развязки.</p><p>Скрутив Вам руки за спиной, <span class="yes">рейдеры</span> втолкнули Вас в пещерную тьму.</p>'
  )
  change_buttons({
    "Следовать за рейдерами": mainQuest_Good_FinalBattleAlone11,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_269.jpg")
  change_text(
    '<p>Вы покорно шли за <span class="yes">бандитами</span>, размышляя над тем как бы незаметно улизнуть. Однако возможности сделать это так и не представилось. <span class="yes">Лидер</span> пустынных разбойников крепко держал Вас за плечо, не давая Вам и шагу ступить в сторону.</p><p>Наконец солнечный свет разрезал мрак. Вы оказались в <span class="yes">лагере Гадюк</span>. Охрана внешнего периметра подвела Вас к <span class="yes">главе поселения</span>. Высокий длинноволосый рейдер в длинной робе смотрел на Вас пронзающим взглядом.</p><p>- Я – <span class="yes">Аспид</span>. Сын великого <span class="yes">Фауста</span>. Верховный жрец Великой змеи, - представился величавый <span class="yes">вождь</span> клана <span class="yes">Гадюк</span>. Затем его тон стал резким, а взгляд ещё более пронзающим. – Отвечай, что ты делаешь в наших землях?</p>'
  )
  change_buttons({
    "Я хочу присоединиться к Вам, великие войны!":
      mainQuest_Good_FinalBattleAlone111,
    "Я рыцарь Братства Стали! Мы ненавидим Вас всей душой за убийство нашего Старейшины. Мы принесём вам смерть!":
      mainQuest_Good_Alone_Final_1,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone11
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_269.jpg")
  change_text(
    '<p>На этот раз <span class="yes">Аспид</span> долго сверлил Вас глазами. Вам стало не по себе. Наконец он молвил, обращаясь к своим людям:</p><p>- Я вижу насквозь его чёрную душонку! Есть только один способ выяснить истинную суть этого человека. – <span class="yes">Жрец</span> вытащил из поясной сумки <span class="yes">флакон</span> и бросил его Вам. – Пей!</p>'
  )
  change_buttons({
    Выпить: mainQuest_Good_FinalBattleAloneDeath,
    Отказаться: mainQuest_Good_FinalBattleAloneDeath1,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone111
  setCookie("ccurrentFunction", currentFunction)
}

/* ЭТАП 1 (пистолет) */
function mainQuest_Good_FinalBattleAlone2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 2
  change_gun()
  throw_shotgun()
  change_image("img/revenge/pic_271.jpg")
  change_text(
    '<p>Вы сделали вид что сдаётесь: левую руку подняли вверх, а правой сдёрнули с плеча свою <span class="yes">двустволку</span> и бросили её на землю. <span class="yes">Рейдеры</span>, увидев это, расслабились и отвели оружие в сторону. Внезапно Вы прыгнули в сторону, выхватив из-за пояса <span class="yes">пистолет</span>. В прыжке Вы сделали <span class="yes">два</span> выстрела в сторону <span class="yes">рейдеров</span>. <span class="yes">Один</span> из разбойников упал замертво. Остальные же открыли шквальный огонь. Вы заняли позицию за холмом.</p>'
  )
  change_buttons({ "Оценить ситуацию": mainQuest_Good_FinalBattleAlone2a })
  currentFunction = mainQuest_Good_FinalBattleAlone2
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone2a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_272.jpg")
  change_text(
    '<p>В магазине Вашего пистолета ещё <span class="yes">' +
      pistol_ammo +
      '</span> патронов. Врагов оставалось <span class="yes">пятеро</span>, при этом их <span class="yes">лидер</span> остался жив.</p><p>Прыткий, <span class="yes">вооружённый холодным оружием рейдер</span>, лез на холм, чтобы броситься на Вас сверху. Достать его не представлялось возможным.</p><p><span class="yes">Главный рейдер</span> вместе с ещё одним своим <span class="yes">соратником</span> бежали к Вашей позиции по дороге. <span class="yes">Лидер</span> бандитов был вооружен винтовкой. <span class="yes">Рейдер</span> слева от лидера держал в руках пистолет, но носил тяжёлую <span class="yes">металлическую броню</span>. </p><p>Справа от главаря были <span class="yes">двое</span>: один – <span class="yes">бандит с красным ирокезом</span> и кувалдой в руках – бросился поднимать винтовку с убитого Вами рейдера; вторая – <span class="yes">женщина</span>, вооружённая копьём замешкалась, не понимая бороться ли ей за оружие с другим членом банды или присоединиться к главарю. Последние противники были на приличном расстоянии, поэтому прицельно каждого из них не достать. Можно было выстрелить только в их сторону в надежде зацепить кого-либо из них.</p>'
  )
  change_buttons({
    "Выстрелить по рейдеру в тяжелой броне": mainQuest_Good_FinalBattleAlone21,
    "Выстрелить в лидера разбойников": mainQuest_Good_FinalBattleAlone22,
    "Попытаться достать кого-нибудь из легковооружённых рейдеров":
      mainQuest_Good_FinalBattleAlone23,
    "Бросить в противника гранату": mainQuest_Good_FinalBattleAlone24,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone2a
  setCookie("ccurrentFunction", currentFunction)
}

/* ЭТАП 2 (пистолет) */
function mainQuest_Good_FinalBattleAlone21() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 5
  change_gun()
  lower_health(30)
  change_image("img/revenge/pic_273.jpg")
  change_text(
    '<p><span class="yes">Налётчик в стальных доспехах</span> показался Вам самым серьёзным противником. Он действительно выглядел устрашающе в своём шлеме из человеческого черепа. Вы выстрелили в него <span class="yes">5 раз</span>, и все пули попали точно в цель. Казалось, что этого подонка ничто не остановит, но внезапно могучий рейдер рухнул замертво на пыльную дорогу.</p><p>Увидев смерть ещё одного своего бойца, <span class="yes">лидер</span> бандитов взвыл от ярости и выпустил в Вас целый рой пуль из своей винтовки, одна из которых засела у Вас в плече, что заставило Вас вновь скрыться за холмом.</p><p>Врагов оставалось <span class="yes">четверо</span>. Вы были ранены. На вершине холма показался бритый наголо <span class="yes">рейдер с</span> большим <span class="yes">тесаком</span> в руке. Со стороны дороги прямо на Вас бежали <span class="yes">лидер</span> группы и <span class="yes">рейдер с ирокезом</span>, в руках которого была автоматическая винтовка, подобранная с первого трупа. Где-то за ними была <span class="yes">девка с копьём</span>, отставшая чтобы поднять пистолет с убитого вами ранее налётчика. Дела Ваши совсем худые. Жизнь повисла на волоске…</p>'
  )
  change_buttons({
    "Выстрелить в лидера": mainQuest_Good_FinalBattleAlone211,
    "Выстрелить в рейдера с ножом": mainQuest_Good_FinalBattleAlone212,
    "Расстрелять рейдера с ирокезом": mainQuest_Good_FinalBattleAlone213,
    "Бросить в противника гранату": mainQuest_Good_FinalBattleAlone214,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone21
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone22() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 3
  change_gun()
  lower_health(30)
  change_image("img/revenge/pic_280.jpg")
  change_text(
    '<p>Для <span class="yes">главного гада</span> Вы не пожалели <span class="yes">трёх выстрелов</span> из своего пистолета. Две пули точно легли в цель, и сражённый <span class="yes">главарь</span> рейдеров упал замертво. Зато его <span class="yes">подручный в тяжёлых доспехах</span> не растерялся и открыл по Вам плотный огонь из винтовки павшего. Одна пуля засела у Вас в плече, что заставило Вас вновь скрыться за холмом.</p><p>Врагов оставалось <span class="yes">четверо</span>. Вы были ранены. На вершине холма показался бритый наголо <span class="yes">рейдер с</span> большим <span class="yes">тесаком</span> в руке. Со стороны дороги прямо на Вас бежали <span class="yes">налётчик в тяжёлой броне</span> и <span class="yes">рейдер с ирокезом</span>, в руках которого была автоматическая винтовка, подобранная с первого трупа. Где-то за ними была <span class="yes">девка с копьём</span>, отставшая чтобы поднять пистолет, который швырнул в её сторону <span class="yes">рейдер в тяжёлой броне</span>. Дела Ваши совсем худые. Жизнь повисла на волоске…</p>'
  )
  change_buttons({
    "Выстрелить по рейдеру в тяжелой броне": mainQuest_Good_FinalBattleAlone221,
    "Выстрелить в рейдера с ножом": mainQuest_Good_FinalBattleAlone222,
    "Расстрелять рейдера с ирокезом": mainQuest_Good_FinalBattleAlone223,
    "Бросить в противника гранату": mainQuest_Good_FinalBattleAlone224,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone22
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone23() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 2
  change_gun()
  lower_health(30)
  change_image("img/revenge/pic_287.jpg")
  change_text(
    '<p>Сделав <span class="yes">пару выстрелов</span> в сторону копошащихся над трупом рейдеров, Вы поняли, что это была пустая затея. С такого расстояния из пистолета по ним было сложно попасть.</p><p>Зато <span class="yes">лидер</span> рейдеров со своим <span class="yes">подручным в тяжёлой броне</span>, завидев Вас, открыли огонь из винтовки и пистолета. Одна из выпущенных пуль засела у Вас в плече, что заставило Вас вновь скрыться за холмом.</p><p>Врагов оставалось по-прежнему <span class="yes">пятеро</span>. Вы были ранены. На вершине холма показался бритый наголо <span class="yes">рейдер с</span> большим <span class="yes">тесаком</span> в руке. Со стороны дороги прямо на Вас бежали <span class="yes">лидер</span> рейдеров, <span class="yes">налётчик в тяжёлой броне</span>, <span class="yes">рейдер с ирокезом</span>, в руках которого была автоматическая винтовка, подобранная с первого трупа. Где-то за ними была <span class="yes">девка с копьём</span>. Мысленно посчитав количество оставшихся патронов в магазине, Вы осознали, что одолеть рейдеров у Вас наврядли выйдет. Оставалось надеяться, что вы заберёте с собой побольше этих тварей.</p>'
  )
  change_buttons({
    "Расстрелять в рейдеров весь оставшийся боезапас":
      mainQuest_Good_FinalBattleAlone231,
    "Бросить в противника гранату": mainQuest_Good_FinalBattleAlone232,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone23
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone24() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  low_grenade(1)
  change_image("img/revenge/pic_290.jpg")
  change_text(
    '<p>Добрым словом Вы помянули <span class="yes">шерифа Грина</span>, нащупав в кармане подаренную им <span class="yes">гранату</span>. Быстро  выдернув чеку, Вы метнули увесистый боезапас в сторону бегущих на Вас врагов. Зажав уши, Вы широко открыли рот на всякий случай.</p><p>Взрыв оказался не таким громким, как Вы рассчитывали. Выглянув из-за укрытия, Вы увидели не соизмеримый с хлопком эффект. <span class="yes">Лидера</span> рейдеров и <span class="yes">бандита в тяжёлой броне</span> разметало по пыльной дороге. <span class="yes">Двое</span> других были живы, но их, вероятно сильно оглушило, так как они бестолково шатались из стороны в сторону по дороге, прикрывая руками уши.</p><p>Эти <span class="yes">двое</span> были хорошей мишенью, но на вершине холма уже показался проворный <span class="yes">рейдер с ножом</span>. Он неумолимо быстро приближался к Вам.</p>'
  )
  change_buttons({
    "Выстрелить в рейдера с ножом": mainQuest_Good_FinalBattleAlone241,
    "Расстрелять шатающихся по дороге бандитов":
      mainQuest_Good_FinalBattleAlone242,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone24
  setCookie("ccurrentFunction", currentFunction)
}

/* ЭТАП 3 (пистолет) */
function mainQuest_Good_FinalBattleAlone214() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  low_grenade(1)
  lower_health(40)
  if (health > 0) {
    change_image("img/revenge/pic_277.jpg")
    change_text(
      '<p>На мгновение Вы высунулись из-за холма, чтобы метнуть в <span class="yes">рейдеров</span> на дороге <span class="yes">гранату</span>. Сделав это, Вы вновь скрылись за пригорком, зажав уши руками и на всякий случай открыв рот.</p><p>Холопок оказался не таким сильным, как Вы ожидали, однако эффект превзошёл все надежды: <span class="yes">лидера</span> рейдеров разметало по всей дороге, а ближайший к нему <span class="yes">бандит с ирокезом</span> упал замертво в нескольких метрах. <span class="yes">Девушка</span> осталась жива, хотя была ранена и оглушена. Она поднялась на ноги, подняла с земли <span class="yes">пистолет</span> и, пошатываясь, двинулась в Вашу сторону.</p><p>В этот момент на Вас сверху обрушился проворный <span class="yes">рейдер с ножом</span>. Этим тесаком он нанёс Вам рваную рану в левое бедро. Вы упали на спину. Из перебитой артерии фонтаном хлынула кровь.</p>'
    )
    change_buttons({
      "Застрелить рейдера с ножом": mainQuest_Good_FinalBattleAlone2141,
      "Убить девушку с пистолетом": mainQuest_Good_FinalBattleAlone2142,
    })
  } else {
    death()
    change_image("img/revenge/pic_277a.jpg")
    change_text(
      '<p>На мгновение Вы высунулись из-за холма, чтобы метнуть в <span class="yes">рейдеров</span> на дороге <span class="yes">гранату</span>. Сделав это, Вы вновь скрылись за пригорком, зажав уши руками и на всякий случай открыв рот.</p><p>Холопок оказался не таким сильным, как Вы ожидали, однако эффект превзошёл все надежды: <span class="yes">лидера</span> рейдеров разметало по всей дороге, а ближайший к нему <span class="yes">бандит с ирокезом</span> упал замертво в нескольких метрах. <span class="yes">Девушка</span> осталась жива, хотя была ранена и оглушена. Она поднялась на ноги, подняла с земли <span class="yes">пистолет</span> и, пошатываясь, двинулась в Вашу сторону.</p><p>В этот момент на Вас сверху обрушился проворный <span class="yes">рейдер с ножом</span>. Этим тесаком он нанёс Вам рваную рану в область желудка. Вы упали на спину. Из живота фонтаном хлынула кровь. Рана оказалась фатальной.</p><p><span class="yes">Вы погибли.</span></p>'
    )
    change_buttons({ "Игра окончена": restart })
  }
  currentFunction = mainQuest_Good_FinalBattleAlone214
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone224() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  low_grenade(1)
  lower_health(40)
  if (health > 0) {
    change_image("img/revenge/pic_284.jpg")
    change_text(
      '<p>На мгновение Вы высунулись из-за холма, чтобы метнуть в <span class="yes">рейдеров</span> на дороге <span class="yes">гранату</span>. Сделав это, Вы вновь скрылись за пригорком, зажав уши руками и на всякий случай открыв рот.</p><p>Холопок оказался не таким сильным, как Вы ожидали, однако эффект превзошёл все надежды: <span class="yes">рейдера в металлической броне</span> разметало по всей дороге, а ближайший к нему <span class="yes">бандит с ирокезом</span> упал замертво в нескольких метрах. <span class="yes">Девушка</span> осталась жива, хотя была ранена и оглушена. Она поднялась на ноги, подняла с земли <span class="yes">пистолет</span> и, пошатываясь, двинулась в Вашу сторону.</p><p>В этот момент на Вас сверху обрушился проворный <span class="yes">рейдер с ножом</span>. Этим тесаком он нанёс Вам рваную рану в левое бедро. Вы упали на спину. Из перебитой артерии фонтаном хлынула кровь.</p>'
    )
    change_buttons({
      "Застрелить рейдера с ножом": mainQuest_Good_FinalBattleAlone2241,
      "Убить девушку с пистолетом": mainQuest_Good_FinalBattleAlone2242,
    })
  } else {
    death()
    change_image("img/revenge/pic_284a.jpg")
    change_text(
      '<p>На мгновение Вы высунулись из-за холма, чтобы метнуть в <span class="yes">рейдеров</span> на дороге <span class="yes">гранату</span>. Сделав это, Вы вновь скрылись за пригорком, зажав уши руками и на всякий случай открыв рот.</p><p>Холопок оказался не таким сильным, как Вы ожидали, однако эффект превзошёл все надежды: <span class="yes">рейдера в металлической броне</span> разметало по всей дороге, а ближайший к нему <span class="yes">бандит с ирокезом</span> упал замертво в нескольких метрах. <span class="yes">Девушка</span> осталась жива, хотя была ранена и оглушена. Она поднялась на ноги, подняла с земли <span class="yes">пистолет</span> и, пошатываясь, двинулась в Вашу сторону.</p><p>В этот момент на Вас сверху обрушился проворный <span class="yes">рейдер с ножом</span>. Этим тесаком он нанёс Вам рваную рану в область желудка. Вы упали на спину. Из живота фонтаном хлынула кровь. Рана оказалась фатальной.</p><p><span class="yes">Вы погибли.</span></p>'
    )
    change_buttons({ "Игра окончена": restart })
  }
  currentFunction = mainQuest_Good_FinalBattleAlone224
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone232() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  low_grenade(1)
  lower_health(40)
  if (health > 0) {
    change_image("img/revenge/pic_289.jpg")
    change_text(
      '<p>Вы решили принять смерть достойно, как подобает рыцарю <span class="yes">Братства Стали</span>. Метнув и из-за пригорка <span class="yes"></span>гранату, Вы бросились прочь из своего укрытия на дорогу, увернувшись в последний момент от ножа <span class="yes">рейдера</span>, бросившегося на Вас сверху. От сильного взрыва Вас отбросило назад на метр и посекло осколками.</p><p>Адреналин в крови зашкаливал, казалось, мир застыл в ожидании Ваших действий. Приподнявшись, Вы направили ствол в сторону бритого <span class="yes">рейдера с ножом</span> и вышибли ему мозги. Резко повернувшись, Вы увидели, что <span class="yes">троих</span> рейдеров разбросало по дороге, но остался в живых <span class="yes">рейдер в</span> тяжёлой <span class="yes">металлической броне</span>. Одновременно вы стали стрелять друг в друга.</p><p>Пулю за пулей Вы направляли в сторону безжалостного врага. Тот тоже не оставался в долгу: в Ваше тело врезались одна за другой пули из его пистолета. В конце концов, одна из пуль прошила упрямый лоб бандита. Он упал, заливая пыльную землю своей кровью. Упали и Вы. Мысли хаотично кружились в голове, сосредоточиться было невозможно. Страшно хотелось закрыть глаза…</p>'
    )
    change_buttons({ ЭПИЛОГ: epilogue })
  } else {
    death()
    change_image("img/revenge/pic_289a.jpg")
    change_text(
      '<p>Вы решили принять смерть достойно, как подобает рыцарю <span class="yes">Братства Стали</span>. Метнув и из-за пригорка <span class="yes"></span>гранату, Вы бросились прочь из своего укрытия на дорогу, увернувшись в последний момент от ножа <span class="yes">рейдера</span>, бросившегося на Вас сверху. От сильного взрыва Вас отбросило назад на метр и посекло осколками.</p><p>Адреналин в крови зашкаливал, казалось, мир застыл в ожидании Ваших действий. Приподнявшись, Вы направили ствол в сторону бритого <span class="yes">рейдера с ножом</span> и вышибли ему мозги. Резко повернувшись, Вы увидели, что <span class="yes">троих</span> рейдеров разбросало по дороге, но остался в живых <span class="yes">рейдер в</span> тяжёлой <span class="yes">металлической броне</span>. Одновременно вы стали стрелять друг в друга.</p><p>Пулю за пулей Вы направляли в сторону безжалостного врага. Тот тоже не оставался в долгу: в Ваше тело врезались одна за другой пули из его пистолета. В конце концов, одна из пуль прошила упрямый лоб бандита. Он упал, заливая пыльную землю своей кровью. Упали и Вы. Раны, полученные в этом бою, оказались смертельными.</p><p><span class="yes">Вы погибли.</span></p>'
    )
    change_buttons({ "Игра окончена": restart })
  }
  currentFunction = mainQuest_Good_FinalBattleAlone232
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone241() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 1
  change_gun()
  change_image("img/revenge/pic_291.jpg")
  change_text(
    '<p>- Этот с ножом станет серьёзной проблемой, - решили Вы. – Лучше уложить его сейчас.</p><p>Хорошенько прицелившись,  Вы выпустили пулю прямо в его бритый череп. Труп <span class="yes">бандита</span> упал к Вашим ногам. Оглянувшись, Вы увидели, что <span class="yes">двое</span> оставшихся в живых <span class="yes">рейдеров</span> показались из-за холма. <span class="yes">Бандит с ирокезом</span> на голове сжимал в руках винтовку. <span class="yes">Девушка</span> семенила за ним, опираясь на копье, с которым решила не расставаться.</p><p>Оба были оглушены, но по-прежнему опасны.</p>'
  )
  change_buttons({
    "Расстрелять рейдера с ирокезом": mainQuest_Good_FinalBattleAlone2411,
    "Убить девушку с копьём": mainQuest_Good_FinalBattleAlone2412,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone241
  setCookie("ccurrentFunction", currentFunction)
}

/* ЭТАП 1 (дробовик) */
function mainQuest_Good_FinalBattleAlone3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_health(60)
  if (health > 0) {
    rifle_ammo -= 2
    change_shotgun()
    change_image("img/revenge/pic_295.jpg")
    change_text(
      '<p>Вы столько вытерпели, столько прошли, чтобы какая-то пустынная гадюка ставила крест на всём деле? Ну, нет! По крайней мере, без боя Вы решили не сдаваться. Резко сдёрнув с плеча <span class="yes">дробовик</span>, Вы саданули дуплетом в сторону <span class="yes">лидера</span> рейдеров и его ближайшего <span class="yes">прихлебателя</span>.</p><p>Выпустив <span class="yes">два</span> заряда, Вы прыгнули влево и спрятались за холмом. Это был смелый поступок – Вы убили <span class="yes">лидера</span> и ещё одного <span class="yes">рейдера</span>. Однако, прежде чем Вы скрылись за холмом, враг успел Вас достать. Вы были <span class="yes">серьёзно ранены</span> в правое подреберье. Алая кровь просочилась сквозь куртку и потекла струйкой по ногам вниз. Пуля прошла навылет.</p><p>Зажав рану, Вы скорчились от сильной боли.</p>'
    )
    change_buttons({ "Оценить положение": mainQuest_Good_FinalBattleAlone3a })
  } else {
    death()
    change_image("img/revenge/pic_295a.jpg")
    change_text(
      '<p>Вы столько вытерпели, столько прошли, чтобы какая-то пустынная гадюка ставила крест на всём деле? Ну, нет! По крайней мере, без боя Вы решили не сдаваться. Резко сдёрнув с плеча <span class="yes">дробовик</span>, Вы сделали дуплет в сторону <span class="yes">лидера</span> рейдеров и его ближайшего <span class="yes">прихлебателя</span>.</p><p>Выпустив <span class="yes">два</span> заряда, Вы прыгнули влево. Это был смелый поступок – Вы убили <span class="yes">лидера</span> и ещё одного <span class="yes">рейдера</span>. Однако, прежде чем Вы скрылись за холмом, враг успел Вас достать. Пуля прошила печень. Рана оказалась смертельной.</p><p><span class="yes">Вы погибли</span>, так и не выполнив задания <span class="yes">Братства</span>.</p>'
    )
    change_buttons({ "Игра окончена!": restart })
  }
  currentFunction = mainQuest_Good_FinalBattleAlone3
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone3a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_296.jpg")
  change_text(
    '<p>У Вас потемнело в глазах. Рана оказалась серьезнее чем Вы полагали вначале. Вам нужна <span class="yes">срочная</span> помощь. Хотя бы <span class="yes">стимулятор</span>, способный затянуть рану и остановить кровотечение. С другой стороны враги уже подбираются к Вам и их количество нужно сокращать.</p><p>Налётчиков осталось <span class="yes">четверо</span>. Один из них – бритый наголо <span class="yes">рейдер с</span> огромным <span class="yes">ножом</span> – бросился к холму, чтобы напасть на Вас сверху.</p><p><span class="yes">Бандит в</span> тяжёлой <span class="yes">металлической броне</span> бежал по дороге. <span class="yes">Двое</span> других отстали, чтобы взять оружие с трупов. Вам нужно как-то выиграть больше времени.</p>'
  )
  if (stimpacks > 0) {
    change_buttons({
      "Вколоть стимулятор": mainQuest_Good_FinalBattleAlone31,
      "Стрелять по рейдеру в металлической броне":
        mainQuest_Good_FinalBattleAlone32,
      "Попытаться достать рейдеров, поднимающих оружие":
        mainQuest_Good_FinalBattleAlone33,
      "Метнуть гранату в противника": mainQuest_Good_FinalBattleAlone34,
    })
  } else {
    change_buttons({
      "Стрелять по рейдеру в металлической броне":
        mainQuest_Good_FinalBattleAlone32,
      "Попытаться достать рейдеров, поднимающих оружие":
        mainQuest_Good_FinalBattleAlone33,
      "Метнуть гранату в противника": mainQuest_Good_FinalBattleAlone34,
    })
  }
  currentFunction = mainQuest_Good_FinalBattleAlone3a
  setCookie("ccurrentFunction", currentFunction)
}

/* ЭТАП 2 (дробовик) */
function mainQuest_Good_FinalBattleAlone31() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_stimpacks(1)
  raise_health(40)
  change_image("img/revenge/pic_297.jpg")
  change_text(
    '<p>Вам нужно было восстановиться после ранения и перезарядить дробовик. Вы вытащили из сумки шприц <span class="yes">стимулятора</span>. Не медля ни секунды, Вы, превозмогая боль, воткнули <span class="yes">стимулятор</span> прямо в рану и ввели препарат. Боль мгновенно утихла, и кровотечение было остановлено, в том числе и с той стороны откуда пуля вышла.</p><p>Только Вы успели перезарядить <span class="yes">ружьё</span>, наверху холма показался проворный <span class="yes">рейдер с ножом</span>. Вы выглянули из своего укрытия в сторону дороги. Враг перегруппировался теперь они бежали плотной группой из <span class="yes">трёх</span> человек в вашу сторону.</p>'
  )
  change_buttons({
    "Уничтожить рейдера с ножом": mainQuest_Good_FinalBattleAlone311,
    "Расстрелять группу противника на дороге":
      mainQuest_Good_FinalBattleAlone312,
    "Метнуть гранату в сторону группы врагов":
      mainQuest_Good_FinalBattleAlone313,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone31
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone34() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  low_grenade(1)
  change_image("img/revenge/pic_305.jpg")
  change_text(
    '<p>Добрым словом Вы помянули <span class="yes">шерифа Грина</span>, нащупав в кармане подаренную им <span class="yes">гранату</span>. Быстро  выдернув чеку, Вы метнули увесистый боезапас в сторону бегущих на Вас врагов. Зажав уши, Вы широко открыли рот на всякий случай.</p><p>Взрыв оказался не таким громким, как Вы рассчитывали. Выглянув из-за укрытия, Вы увидели не соизмеримый с хлопком эффект. <span class="yes">Бандита в тяжёлой броне</span> разметало по пыльной дороге. <span class="yes">Двое</span> других были живы, но их, вероятно сильно оглушило, так как они бестолково шатались из стороны в сторону по дороге, прикрывая руками уши.</p><p>Эти <span class="yes">двое</span> были хорошей мишенью, но на вершине холма уже показался проворный <span class="yes">рейдер с ножом</span>. Он неумолимо быстро приближался к Вам.</p>'
  )
  change_buttons({
    "Выстрелить в рейдера с ножом": mainQuest_Good_FinalBattleAlone341,
    "Вколоть стимулятор": mainQuest_Good_FinalBattleAlone342,
    "Расстрелять шатающихся по дороге бандитов":
      mainQuest_Good_FinalBattleAlone343,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone34
  setCookie("ccurrentFunction", currentFunction)
}

/* ЭТАП 3 (дробовик) */
function mainQuest_Good_FinalBattleAlone311() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 1
  change_shotgun()
  lower_health(20)
  change_image("img/revenge/pic_298.jpg")
  change_text(
    '<p>- Этот с ножом станет серьёзной проблемой, - решили Вы. – Лучше уложить его сейчас.</p><p>Хорошенько прицелившись, Вы выпустили заряд прямо в бритый череп <span class="yes">бандита на холме</span>. Труп рейдера упал к Вашим ногам. Выбросив отстрелянную гильзу и доложив патрон в ствол, Вы оглянулись и увидели, что <span class="yes">трое</span> оставшихся в живых рейдеров показались и открыли по Вам огонь. Одна из выпущенных пуль оцарапала Вам плечо.</p><p>Ваша жизнь повисла на волоске…</p>'
  )
  change_buttons({
    "Расстрелять группу противника из дробовика":
      mainQuest_Good_FinalBattleAlone3111,
    "Метнуть гранату во врагов гранату": mainQuest_Good_FinalBattleAlone3112,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone311
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone342() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  raise_health(20)
  lower_stimpacks(1)
  change_image("img/revenge/pic_309.jpg")
  change_text(
    '<p>Вам нужно было время для того чтобы восстановиться после ранения. Вы вытащили из сумки шприц <span class="yes">стимулятора</span>. Не медля более ни секунды, Вы, превозмогая боль, воткнули <span class="yes">стимулятор</span> прямо в рану и ввели препарат. Боль мгновенно утихла и кровотечение было остановлено, в том числе и с той стороны откуда пуля вышла.</p><p>В этот момент на Вас сверху спрыгнул проворный <span class="yes">рейдер с ножом</span>. Этим ножом он нанёс Вам рваную рану в левое бедро. Остальные <span class="yes">налётчики</span> медленно приближались к Вашей позиции со стороны дороги. Жизнь повисла на волоске…</p>'
  )
  change_buttons({
    "Выстрелить в рейдера с ножом": mainQuest_Good_FinalBattleAlone3421,
    "Расстрелять оглушённых бандитов": mainQuest_Good_FinalBattleAlone3422,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone342
  setCookie("ccurrentFunction", currentFunction)
}

/* ЭТАП 1 (граната) */
function mainQuest_Good_FinalBattleAlone4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  low_grenade(1)
  change_image("img/revenge/pic_311.jpg")
  change_text(
    '<p>Добрым словом Вы помянули <span class="yes">шерифа Грина</span>, нащупав в кармане подаренную им <span class="yes">гранату</span>. Быстро  выдернув чеку, Вы метнули увесистый боезапас в сторону, не ожидавших такого сюрприза, врагов. Пока <span class="yes">рейдеры</span> ошарашено смотрели на медленно крутившуюся вокруг своей оси <span class="yes">гранату</span>, Вы бросились в укрытие, зажав уши и широко открыв рот на всякий случай.</p><p>Взрыв оказался не таким громким, как Вы рассчитывали. Выглянув из-за укрытия, Вы увидели не соизмеримый с хлопком эффект. <span class="yes">Лидера</span> рейдеров и <span class="yes">двух</span> ближайших к нему налётчиков разметало в разные стороны по пыльной дороге.</p><p>Проворный бритый наголо <span class="yes">рейдер с ножом</span> в руке оказался цел и невредим. Он кинулся к холму, за которым скрывались Вы, с намерением напасть на Вас сверху. Оказавшись у подножия холма, он скрылся из виду.</p><p><span class="yes">Двое</span> других бандитов тоже остались в живых, но их, вероятно, сильно оглушило. Они бестолково шатались из стороны в сторону по дороге, прикрывая руками уши.</p>'
  )
  change_buttons({
    "Выстрелить в рейдера с красным ирокезом":
      mainQuest_Good_FinalBattleAlone41,
    "Выстрелить в девушку-налётчицу": mainQuest_Good_FinalBattleAlone42,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone4
  setCookie("ccurrentFunction", currentFunction)
}

/* ЭТАП 2 (граната) */
function mainQuest_Good_FinalBattleAlone41() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 2
  change_shotgun()
  lower_health(30)
  change_image("img/revenge/pic_312.jpg")
  change_text(
    '<p>Пока Вы брали на мушку приметного <span class="yes">парня с</span> большим красным <span class="yes">ирокезом</span> на голове, <span class="yes">рейдеры</span> на дороге пришли в себя и принялись собирать оружие с павших соратников. Не успел <span class="yes">рейдер с ирокезом</span> поднять винтовку главаря, как Вы всадили в него пару зарядов картечью. Мощный удар зарядов отбросил врага назад. Упав на спину, <span class="yes">рейдер</span> больше не поднялся.</p><p>Зато, вооружившаяся пистолетом, <span class="yes">девка</span> открыла по Вам огонь. Одна из пуль угодила Вам в плечо, заставив вновь скрыться за пригорком.</p><p>В этот момент на вершине холма показалась бритая голова <span class="yes">налётчика с ножом</span>. Расстояние между вами стало стремительно сокращаться.</p>'
  )
  change_buttons({
    "Выстрелить в рейдера с ножом": mainQuest_Good_FinalBattleAlone411,
    "Расстрелять девушку с пистолетом": mainQuest_Good_FinalBattleAlone412,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone41
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone42() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 2
  change_shotgun()
  lower_health(60)
  change_image("img/revenge/pic_315.jpg")
  change_text(
    '<p>Пока Вы брали на мушку <span class="yes">налётчицу</span> со смуглой кожей, <span class="yes">рейдеры</span> на дороге пришли в себя и принялись собирать оружие с павших соратников. Не успела <span class="yes">девушка</span> поднять с земли пистолет, как Вы всадили в неё пару зарядов картечью. Мощный заряд отбросил врага назад. Упав на спину, <span class="yes">налётчица</span> больше не поднялась.</p><p>Зато, вооружившийся винтовкой главаря, <span class="yes">рейдер с ирокезом</span> открыл по Вам огонь. Одна из пуль угодила Вам в живот, заставив вновь скрыться за пригорком. Ранение оказалось более чем серёзным.</p><p>В этот момент на вершине холма показалась бритая голова <span class="yes">налётчика с ножом</span>. Расстояние между вами стало стремительно сокращаться.</p>'
  )
  change_buttons({
    "Выстрелить в рейдера с ножом": mainQuest_Good_FinalBattleAlone421,
    "Расстрелять налётчика с ирокезом": mainQuest_Good_FinalBattleAlone422,
  })
  currentFunction = mainQuest_Good_FinalBattleAlone42
  setCookie("ccurrentFunction", currentFunction)
}

/* Злая ветка - БЕЗ НАПАРНИКА */
/* ЭТАП 1 (пистолет) */
function mainQuest_Bad_FinalBattle2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 2
  change_gun()
  throw_shotgun()
  change_image("img/revenge/pic_324.jpg")
  change_text(
    '<p>Вы сделали вид что сдаётесь: левую руку подняли вверх, а правой сдёрнули с плеча свою <span class="yes">двустволку</span> и бросили её на землю. <span class="yes">Рейдеры</span>, увидев это, расслабились и отвели оружие в сторону. Внезапно Вы прыгнули в сторону, выхватив из-за пояса <span class="yes">пистолет</span>. В прыжке Вы сделали <span class="yes">два</span> выстрела в сторону <span class="yes">рейдеров</span>. <span class="yes">Один</span> из разбойников упал замертво. Остальные же открыли шквальный огонь. Вы заняли позицию за холмом.</p>'
  )
  change_buttons({ "Оценить ситуацию": mainQuest_Bad_FinalBattle2a })
  currentFunction = mainQuest_Bad_FinalBattle2
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_FinalBattle2a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_325.jpg")
  change_text(
    '<p>В магазине Вашего <span class="yes">пистолета</span> оставалось ещё <span class="yes">' +
      pistol_ammo +
      '</span> патронов. Врагов оставалось <span class="yes">двое</span>, при этом их <span class="yes">лидер</span> остался жив.</p><p><span class="yes">Главный рейдер</span> вместе с ещё одним своим <span class="yes">соратником</span> бежали к Вашей позиции по дороге</p><p><span class="yes">Лидер</span> бандитов был вооружен винтовкой.</p><p><span class="yes">Рейдер слева</span> от лидера держал в руках пистолет, но носил <span class="yes">тяжёлую</span> массивную <span class="yes">броню</span>.</p>'
  )
  change_buttons({
    "Выстрелить по рейдеру в тяжелой броне": mainQuest_Bad_FinalBattle21,
    "Выстрелить в лидера разбойников": mainQuest_Bad_FinalBattle22,
  })
  currentFunction = mainQuest_Bad_FinalBattle2a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_FinalBattle21() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 5
  change_gun()
  lower_health(50)
  if (health > 0) {
    change_image("img/revenge/pic_326.jpg")
    change_text(
      '<p><span class="yes">Налётчик</span> в <span class="yes">тяжёлых доспехах</span> показался Вам самым серьёзным противником. Он действительно выглядел устрашающе в своём шлеме из человеческого черепа. Вы выстрелили в него <span class="yes">5 раз</span>, и все пули попали точно в цель. Казалось, что этого подонка ничто не остановит, но внезапно могучий <span class="yes">рейдер</span> рухнул замертво на пыльную дорогу.</p><p>Увидев смерть ещё одного своего бойца, <span class="yes">лидер</span> бандитов взвыл от ярости и выпустил в Вас целый рой пуль из своей винтовки, одна из которых засела у Вас в правом подреберье, что заставило Вас вновь скрыться за холмом.</p><p>Рана оказалась тяжелой. Алая кровь просочилась сквозь куртку и потекла струйкой по ногам вниз. Пуля прошла навылет. Вам нужна была срочная помощь. Хотя бы <span class="yes">стимулятор</span>, способный затянуть рану и остановить кровотечение. С другой стороны <span class="yes">лидер</span> налётчиков уже подбирается к Вам и вот-вот покажется из-за угла.</p>'
    )
    if (stimpacks > 0) {
      change_buttons({
        "Вколоть стимулятор": mainQuest_Bad_FinalBattle211,
        "Стрелять по лидеру рейдеров": mainQuest_Bad_FinalBattle212,
      })
    } else {
      change_buttons({
        "Стрелять по лидеру рейдеров": mainQuest_Bad_FinalBattle212,
      })
    }
  } else {
    change_image("img/revenge/pic_326a.jpg")
    change_text(
      '<p><span class="yes">Налётчик</span> в <span class="yes">тяжёлых доспехах</span> показался Вам самым серьёзным противником. Он действительно выглядел устрашающе в своём шлеме из человеческого черепа. Вы выстрелили в него <span class="yes">5 раз</span>, и все пули попали точно в цель. Казалось, что этого подонка ничто не остановит, но внезапно могучий <span class="yes">рейдер</span> рухнул замертво на пыльную дорогу.</p><p>Увидев смерть ещё одного своего бойца, <span class="yes">лидер</span> бандитов взвыл от ярости и выпустил в Вас целый рой пуль из своей винтовки, одна из которых угодила прямо в сердце.</p><p><span class="yes">Вы погибли.</span></p>'
    )
    change_buttons({ "Игра окончена!": restart })
  }
  currentFunction = mainQuest_Bad_FinalBattle21
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_FinalBattle22() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 3
  change_gun()
  lower_health(30)
  if (health > 0) {
    change_image("img/revenge/pic_327.jpg")
    change_text(
      '<p>Для <span class="yes">главного гада</span> Вы не пожалели <span class="yes">трёх</span> выстрелов из своего пистолета. Две пули точно легли в цель, и сражённый <span class="yes">лидер</span> отряда рейдеров упал замертво. Зато его <span class="yes">подручный в тяжёлых доспехах</span> не растерялся и открыл по Вам плотный огонь из своего пистолета.</p><p>Одна пуля засела у Вас в плече, что заставило Вас вновь скрыться за холмом. Рана оказалась не смертельной, Вы были в состоянии продолжить бой.</p>'
    )
    if (stimpacks > 0) {
      change_buttons({
        "Вколоть стимулятор": mainQuest_Bad_FinalBattle221,
        "Стрелять по рейдеру в тяжелой броне": mainQuest_Bad_FinalBattle222,
      })
    } else {
      change_buttons({
        "Стрелять по рейдеру в тяжелой броне": mainQuest_Bad_FinalBattle222,
      })
    }
  } else {
    death()
    change_image("img/revenge/pic_327a.jpg")
    change_text(
      '<p>Для <span class="yes">главного гада</span> Вы не пожалели <span class="yes">трёх</span> выстрелов из своего пистолета. Две пули точно легли в цель, и сражённый <span class="yes">лидер</span> отряда рейдеров упал замертво. Зато его <span class="yes">подручный в тяжёлых доспехах</span> не растерялся и открыл по Вам плотный огонь из своего пистолета.</p><p>Одна из выпущенных пуль угодила прямо в сердце.</p><p><span class="yes">Вы погибли.</span></p>'
    )
    change_buttons({ "Игра окончена": restart })
  }
  currentFunction = mainQuest_Bad_FinalBattle22
  setCookie("ccurrentFunction", currentFunction)
}

/* ЭТАП 2 (пистолет) */
function mainQuest_Bad_FinalBattle211() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo = 0
  change_gun()
  lower_stimpacks(1)
  lower_health(30)
  if (health > 0) {
    change_image("img/revenge/pic_328.jpg")
    change_text(
      '<p>Вам нужно было восстановиться после ранения. Вытащив из сумки шприц <span class="yes">стимулятора</span>, не медля ни секунды, Вы, превозмогая боль, воткнули <span class="yes">стимулятор</span> прямо в рану и ввели препарат. Боль мгновенно утихла, и кровотечение было остановлено, в том числе и с той стороны, откуда пуля вышла.</p><p>Не успели Вы отбросить пустой шприц в сторону, как из-за угла показался последний враг – <span class="yes">лидер</span> отряда рейдеров. Он тут же открыл огонь. Вы резко упали на землю в надежде увернуться от роя пуль, выпущенных противником, и открыли огонь по врагу из своего пистолета.</p><p>Одна из Ваших пуль попала <span class="yes">противнику</span> прямо в лоб. Тот, как подкошенный, рухнул на землю. Но и врагу удалось Вас достать. Весь израненный, но живой, Вы стояли над трупами поверженных врагов…</p>'
    )
    change_buttons({ ЭПИЛОГ: epilogue })
  } else {
    death()
    change_image("img/revenge/pic_328a.jpg")
    change_text(
      '<p>Вам нужно было восстановиться после ранения. Вытащив из сумки шприц <span class="yes">стимулятора</span>, не медля ни секунды, Вы, превозмогая боль, воткнули <span class="yes">стимулятор</span> прямо в рану и ввели препарат. Боль мгновенно утихла, и кровотечение было остановлено, в том числе и с той стороны, откуда пуля вышла.</p><p>Не успели Вы отбросить пустой шприц в сторону, как из-за угла показался последний враг – <span class="yes">лидер</span> отряда рейдеров. Он тут же открыл огонь. Вы резко упали на землю в надежде увернуться от роя пуль, выпущенных противником, и открыли огонь по врагу из своего пистолета.</p><p>Одна из пуль, выпущенных врагом, попала Вам в голову, пробив череп навылет.</p><p><span class="yes">Вы погибли.</span></p>'
    )
    change_buttons({ "Игра окончена!": restart })
  }
  currentFunction = mainQuest_Bad_FinalBattle211
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_FinalBattle221() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo = 0
  change_gun()
  lower_stimpacks(1)
  lower_health(40)
  if (health > 0) {
    change_image("img/revenge/pic_329.jpg")
    change_text(
      '<p>Вы решили восстановиться после лёгкого ранения. Вытащив из сумки шприц <span class="yes">стимулятора</span>, не медля ни секунды, Вы, превозмогая боль, воткнули <span class="yes">стимулятор</span> прямо в рану и ввели препарат. Боль мгновенно утихла, и кровотечение было остановлено, в том числе и с той стороны, откуда пуля вышла.</p><p>Не успели Вы отбросить пустой шприц в сторону, как из-за угла показался последний враг – <span class="yes">рейдер</span> в <span class="yes">металлической броне</span>. Он тут же открыл огонь из своего пистолета. Вы получили ранение в живот и упали на землю. Выбросив руку с пистолетом вперёд, Вы из последних сил открыли огонь по злобному <span class="yes">бандиту</span>.</p><p>Одна из Ваших пуль попала <span class="yes">противнику</span> прямо в лоб. Тот, как подкошенный, рухнул на землю. Но и врагу удалось Вас достать. Весь израненный, но живой, Вы смотрели на трупы поверженных врагов…</p>'
    )
    change_buttons({ ЭПИЛОГ: epilogue })
  } else {
    death()
    change_image("img/revenge/pic_329a.jpg")
    change_text(
      '<p>Вы решили восстановиться после лёгкого ранения. Вытащив из сумки шприц <span class="yes">стимулятора</span>, не медля ни секунды, Вы, превозмогая боль, воткнули <span class="yes">стимулятор</span> прямо в рану и ввели препарат. Боль мгновенно утихла, и кровотечение было остановлено, в том числе и с той стороны, откуда пуля вышла.</p><p>Не успели Вы отбросить пустой шприц в сторону, как из-за угла показался последний враг – <span class="yes">рейдер</span> в <span class="yes">металлической броне</span>. Он тут же открыл огонь из своего пистолета. Вы получили ранение в живот и упали на землю. Выбросив руку с пистолетом вперёд, Вы из последних сил открыли огонь по злобному <span class="yes">бандиту</span>.</p><p>Одна из пуль, выпущенных <span class="yes">врагом</span>, попала Вам в голову, пробив череп навылет.</p><p><span class="yes">Вы погибли.</span></p>'
    )
    change_buttons({ "Игра окончена!": restart })
  }
  currentFunction = mainQuest_Bad_FinalBattle221
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_FinalBattle222() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo = 0
  change_gun()
  change_image("img/revenge/pic_330.jpg")
  change_text(
    '<p>Рассчитывая, что Вы получили более тяжёлое ранение, <span class="yes">рейдер</span> бежал вперёд, опустив ствол пистолета вниз. Внезапно для врага Вы вновь высунулись из-за пригорка и открыли огонь.</p><p>Никак не успев среагировать, <span class="yes">рейдер</span> получил ранения в голову и шею. <span class="yes">Бандит</span> упал замертво, так и не успев сделать больше ни одного выстрела.</p><p>Прижимая к себе раненую руку, Вы стояли над трупами поверженных врагов…</p>'
  )
  change_buttons({ ЭПИЛОГ: epilogue })
  currentFunction = mainQuest_Bad_FinalBattle222
  setCookie("ccurrentFunction", currentFunction)
}

/* ЭТАП 1 (доробовик) */
function mainQuest_Bad_FinalBattle3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 2
  lower_health(50)
  change_shotgun()
  change_image("img/revenge/pic_332.jpg")
  change_text(
    '<p>Вы столько вытерпели, столько прошли, чтобы какая-то пустынная гадюка ставила крест на всём деле? Ну, нет! По крайней мере, без боя Вы решили не сдаваться. Резко сдёрнув с плеча <span class="yes">дробовик</span>, Вы саданули дуплетом в сторону <span class="yes">лидера</span> рейдеров.</p><p>Выпустив <span class="yes">два</span> заряда, Вы прыгнули влево и спрятались за холмом. Это был смелый поступок – Вы убили <span class="yes">главаря</span> отряда. Однако, прежде чем Вы скрылись за холмом, враги успели Вас достать. Вы были <span class="yes">серьёзно ранены</span> в правое подреберье. Алая кровь просочилась сквозь куртку и потекла струйкой по ногам вниз. Пуля прошла навылет.</p><p>Зажав рану, Вы постарались оценить своё положение.</p>'
  )
  change_buttons({ "Оценить ситуацию": mainQuest_Bad_FinalBattle3a })
  currentFunction = mainQuest_Bad_FinalBattle3
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_FinalBattle3a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_233.jpg")
  change_text(
    '<p>В глазах потемнело. Рана оказалась серьезнее чем Вы полагали вначале. Вам нужна <span class="yes">срочная</span> помощь. Хотя бы <span class="yes">стимулятор</span>, способный затянуть рану и остановить кровотечение. С другой стороны враги уже подбираются к Вам и их количество нужно сокращать.</p><p>Один из них – длинноволосый <span class="yes">рейдер</span> с <span class="yes">автоматической винтовкой</span> – бежал по дороге к Вашей позиции.</p><p>Другой - <span class="yes">налётчик</span> в тяжёлой <span class="yes">металлической броне</span> – отстал от своего соратника, чтобы подобрать <span class="yes">винтовку</span> павшего <span class="yes">главаря</span> отряда. </p>'
  )
  change_buttons(
    stimpacks > 0
      ? {
          "Вколоть стимулятор": mainQuest_Bad_FinalBattle31,
          "Стрелять по рейдеру с автоматом": mainQuest_Bad_FinalBattle32,
          "Стрелять по рейдеру в тяжелой броне": mainQuest_Bad_FinalBattle33,
        }
      : {
          "Стрелять по рейдеру с автоматом": mainQuest_Bad_FinalBattle32,
          "Стрелять по рейдеру в тяжелой броне": mainQuest_Bad_FinalBattle33,
        }
  )
  currentFunction = mainQuest_Bad_FinalBattle3a
  setCookie("ccurrentFunction", currentFunction)
}

/* ЭТАП 2 (доробовик) */
function mainQuest_Bad_FinalBattle31() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_stimpacks(1)
  raise_health(40)
  change_image("img/revenge/pic_335.jpg")
  change_text(
    '<p>Вам нужно было восстановиться после ранения и перезарядить дробовик. Вы вытащили из сумки шприц. Не медля ни секунды, Вы, превозмогая боль, воткнули <span class="yes">стимулятор</span> прямо в рану и ввели препарат. Боль мгновенно утихла, и кровотечение было остановлено, в том числе и с той стороны откуда пуля вышла.</p><p>Вы выглянули из своего укрытия в сторону дороги. <span class="yes">Враг</span> перегруппировался и теперь они рассредоточено  бежали в вашу сторону. Теперь было важно не ошибиться с выбором цели.</p>'
  )
  change_buttons({
    "Стрелять по рейдеру с автоматом": mainQuest_Bad_FinalBattle311,
    "Стрелять по рейдеру в тяжелой броне": mainQuest_Bad_FinalBattle312,
  })
  currentFunction = mainQuest_Bad_FinalBattle31
  setCookie("ccurrentFunction", currentFunction)
}

/* ФИНАЛЫ */
/* ФИНАЛЫ для хорошей ветки */
function mainQuest_Good_Final_1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  heroDead = true
  setCookie("cheroDead", heroDead)
  death()
  change_image("img/revenge/pic_248.jpg")
  if (getDisk === true) {
    change_text(
      '<p><span class="yes">Лип</span> подбежал к Вам и со слезами в глазах склонился над Вами.</p><p>- Что ж ты так, дружище? – еле вымолвил он.</p><p>Тут не нужен был доктор, чтобы понять – Ваши раны были <span class="yes">смертельными</span>. Чтобы остановить кровотечение и снять боль <span class="yes">Лип</span> вколол Вам несколько <span class="yes">стимуляторов</span>, но Вы чувствовали, что это уже не имеет смысла.</p><p>- <span class="yes">Лип</span>, - тихо произнесли Вы. – Ты должен помочь мне. Есть город <span class="yes">Лост-Хиллз</span>, знаешь?</p><p>Ваш <span class="yes">напарник</span> утвердительно кивнул.</p><p>- Так вот, в его развалинах ты найдёшь бункер <span class="yes">Братства Стали</span>. – продолжили Вы из последних сил. – Он находится в восточной части города. Найти не составит труда, там дежурит охрана по периметру. Нужно во что бы то ни стало передать им информацию о точном месторасположении <span class="yes">базы Гадюк</span>. Поспеши.</p><p>Вы закашлялись – кровь пошла горлом.</p><p>- Да, вот ещё, - вспомнили Вы. – Передай эту штуку охранникам бункера. Мне кажется, на ней может быть важная информация.</p><p>С этими словами Вы вытащили из кармана <span class="yes">голодиск</span>, найденный Вами на <span class="yes">старой заправке</span>, и передали его своему <span class="yes">спутнику</span>.</p><p>- Ступай, друг. Выполни эту просьбу… - Вы отвернулись и больше на него не смотрели.</p><p><span class="yes">Лип</span> всхлипнул и медленно побрёл на <span class="yes">восток</span>. Вам показалось, что он пробормотал слово «прощай». Но Вам было уже всё равно. Боли Вы не чувствовали. Припав спиной к большому камню, Вы смотрели на уходящее за горизонт степи солнце. Вы думали о доме и о родных. Думали о <span class="yes">Братстве</span>. Вам было жаль, что задание так и не было выполнено Вами. Но оставалась надежда на то, что, в конце концов, <span class="yes">Старейшина Мэксон</span> будет отомщён. Может быть, вспомнят и про Вас.</p><p>С последними лучами солнца остановился поток Ваших мыслей.</p>'
    )
  } else {
    change_text(
      '<p><span class="yes">Лип</span> подбежал к Вам и со слезами в глазах склонился над Вами.</p><p>- Что ж ты так, дружище? – еле вымолвил он.</p><p>Тут не нужен был доктор, чтобы понять – Ваши раны были <span class="yes">смертельными</span>. Чтобы остановить кровотечение и снять боль <span class="yes">Лип</span> вколол Вам несколько <span class="yes">стимуляторов</span>, но Вы чувствовали, что это уже не имеет смысла.</p><p>- <span class="yes">Лип</span>, - тихо произнесли Вы. – Ты должен помочь мне. Есть город <span class="yes">Лост-Хиллз</span>, знаешь?</p><p>Ваш <span class="yes">напарник</span> утвердительно кивнул.</p><p>- Так вот, в его развалинах ты найдёшь бункер <span class="yes">Братства Стали</span>. – продолжили Вы из последних сил. – Он находится в восточной части города. Найти не составит труда, там дежурит охрана по периметру. Нужно во что бы то ни стало передать им информацию о точном месторасположении <span class="yes">базы Гадюк</span>. Поспеши.</p><p>Вы закашлялись – кровь пошла горлом.</p><p>- Ступай, друг. Выполни эту просьбу… - Вы отвернулись и больше на него не смотрели.</p><p><span class="yes">Лип</span> всхлипнул и медленно побрёл на <span class="yes">восток</span>. Вам показалось, что он пробормотал слово «прощай». Но Вам было уже всё равно. Боли Вы не чувствовали. Припав спиной к большому камню, Вы смотрели на уходящее за горизонт степи солнце. Вы думали о доме и о родных. Думали о <span class="yes">Братстве</span>. Вам было жаль, что задание так и не было выполнено Вами. Но оставалась надежда на то, что, в конце концов, <span class="yes">Старейшина Мэксон</span> будет отомщён. Может быть, вспомнят и про Вас.</p><p>С последними лучами солнца остановился поток Ваших мыслей.</p>'
    )
  }
  change_buttons({ ЭПИЛОГ: epilogue })
  currentFunction = mainQuest_Good_Final_1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Final_2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  heroDead = true
  setCookie("cheroDead", heroDead)
  death()
  change_image("img/revenge/pic_249.jpg")
  if (getDisk === true) {
    change_text(
      '<p>Вам выпал шанс познать величайшую из добродетелей – <span class="yes">самопожертвование</span>.</p><p>- Пей немедленно! – не своим голосом заорали Вы, швырнув ему флакон с <span class="yes">противоядием</span>. – Иначе через несколько минут ты умрёшь.</p><p>- А ты… - начал лепетать <span class="yes">Лип</span>.</p><p>- У меня есть ещё, – обречённо махнули рукой Вы.</p><p><span class="yes">Лип</span> мгновенно выпил содержимое флакона и стал пристально смотреть на Вас.</p><p>Тут Вы почувствовали озноб, появилась дрожь конечностей. Вам стало ясно, что времени осталось немного.</p><p>- <span class="yes">Лип</span>, - хрипло произнесли Вы. – Ты должен помочь мне. Есть город <span class="yes">Лост-Хиллз</span>, знаешь?</p><p>- Почему ты не пьёшь лекарство? – <span class="yes">Лип</span> начал подозревать, что Вы провели его.</p><p>- Потому что я тебя обманул. Не перебивай и выдави яд из своих ран, – отрезали Вы. – Времени не осталось! Ты знаешь, где <span class="yes">Лост-Хиллз</span> или нет?</p><p><span class="yes">Лип</span> молча кивнул. Из глаз его полились слёзы. Он слушал Вас и выдавливал жёлтый яд из своего тела.</p><p>- Так вот, в его развалинах ты найдёшь бункер <span class="yes">Братства Стали</span>, – продолжили Вы из последних сил. – Он находится в восточной части города. Найти не составит труда, там дежурит охрана по периметру. Нужно во что бы то ни стало передать им информацию о точном месторасположении <span class="yes">базы Гадюк</span>. Поспеши.</p><p>Вам стало трудно дышать. Вы чувствовали, что конец близко.</p><p>- Да, вот ещё, - вспомнили Вы. – Передай эту штуку охранникам бункера. Мне кажется, на ней может быть важная информация.</p><p>С этими словами Вы вытащили из кармана <span class="yes">голодиск</span>, найденный Вами на <span class="yes">старой заправке</span>, и передали его своему <span class="yes">спутнику</span>.</p><p>- Да, хотелось бы вернуться д… - Вы прервались на полуслове и через несколько секунд <span class="yes">Лип</span> услышал Ваш последний выдох.</p><p>Постояв несколько минут у Вашего тела, <span class="yes">Лип</span> взвалил его на плечи и медленно пошёл по дороге на <span class="yes">восток</span>. К вечеру с ним поравнялась телега, в которой сидели местные крестьяне. Выслушав историю его злоключений, крестьяне предложили свою помощь и доставили <span class="yes">Липа</span> и Ваше тело в <span class="yes">Лост-Хиллз</span>.</p>'
    )
  } else {
    change_text(
      '<p>Вам выпал шанс познать величайшую из добродетелей – <span class="yes">самопожертвование</span>.</p><p>- Пей немедленно! – не своим голосом заорали Вы, швырнув ему флакон с <span class="yes">противоядием</span>. – Иначе через несколько минут ты умрёшь.</p><p>- А ты… - начал лепетать <span class="yes">Лип</span>.</p><p>- У меня есть ещё, – обречённо махнули рукой Вы.</p><p><span class="yes">Лип</span> мгновенно выпил содержимое флакона и стал пристально смотреть на Вас.</p><p>Тут Вы почувствовали озноб, появилась дрожь конечностей. Вам стало ясно, что времени осталось немного.</p><p>- <span class="yes">Лип</span>, - хрипло произнесли Вы. – Ты должен помочь мне. Есть город <span class="yes">Лост-Хиллз</span>, знаешь?</p><p>- Почему ты не пьёшь лекарство? – <span class="yes">Лип</span> начал подозревать, что Вы провели его.</p><p>- Потому что я тебя обманул. Не перебивай и выдави яд из своих ран, – отрезали Вы. – Времени не осталось! Ты знаешь, где <span class="yes">Лост-Хиллз</span> или нет?</p><p><span class="yes">Лип</span> молча кивнул. Из глаз его полились слёзы. Он слушал Вас и выдавливал жёлтый яд из своего тела.</p><p>- Так вот, в его развалинах ты найдёшь бункер <span class="yes">Братства Стали</span>, – продолжили Вы из последних сил. – Он находится в восточной части города. Найти не составит труда, там дежурит охрана по периметру. Нужно во что бы то ни стало передать им информацию о точном месторасположении <span class="yes">базы Гадюк</span>. Поспеши.</p><p>Вам стало трудно дышать. Вы чувствовали, что конец близко.</p><p>- Да, хотелось бы вернуться д… - Вы прервались на полуслове и через несколько секунд <span class="yes">Лип</span> услышал Ваш последний выдох.</p><p>Постояв несколько минут у Вашего тела, <span class="yes">Лип</span> взвалил его на плечи и медленно пошёл по дороге на <span class="yes">восток</span>. К вечеру с ним поравнялась телега, в которой сидели местные крестьяне. Выслушав историю его злоключений, крестьяне предложили свою помощь и доставили <span class="yes">Липа</span> и Ваше тело в <span class="yes">Лост-Хиллз</span>.</p>'
    )
  }
  change_buttons({ ЭПИЛОГ: epilogue })
  currentFunction = mainQuest_Good_Final_1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Final_3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  remove_antidote()
  change_image("img/revenge/pic_250.jpg")
  change_text(
    '<p>Вам выпал шанс познать величайшую из добродетелей – <span class="yes">самопожертвование</span>. Но вы отказались.</p><p>Решив, что миссию, возложенную на Вас <span class="yes">Братством</span>, нельзя доверить первому встречному, Вы быстро опорожнили пузырёк с <span class="yes">противоядием</span> и выдавили яд из раны.</p><p>- Ну, что, друг, - начал Ваш <span class="yes">спутник</span>. – Пришла пора нам прощаться. Я вернусь в <span class="yes">Хаб</span>. Только вот…</p><p><span class="yes">Лип</span> прервался на полуслове и упал на землю.</p><p>- Что с тобой? - Притворно спросили Вы.</p><p>- Я думаю, ты знаешь, что со мной, - с горечью ответил <span class="yes">Лип</span>. – Дай и мне лекарство!</p><p>- У меня его нет. Была всего одна доза… И я её выпил, – ответили Вы и опустили глаза.</p><p><span class="yes">Лип</span> помолчал некоторое время.</p><p>- Ну, что ж, - произнёс он. – Понять можно... Я чувствую, что сейчас уйду. Но, у меня к тебя одна просьба.  Не бросай меня тут, ладно? Я не хочу, чтобы мой труп разорвали на куски стервятники.</p><p>- Обещаю, - ответили Вы, но поняли, что <span class="yes">Лип</span> ваших слов уже не услышал. Он смотрел на Вас стеклянными глазами.</p><p>Вы отошли в сторону от дороги и нашли подходящее место с мягким грунтом. Несколько часов вы рыли могилу своим ножом. Когда дело было сделано, Вы поковыляли на восток. Уходящее солнце последними лучами освещало шесть трупов на дороге и маленькую могилу.</p>'
  )
  change_buttons({ ЭПИЛОГ: epilogue })
}
function mainQuest_Good_FinalBattleAlone242() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 0
  change_gun()
  lower_health(40)
  if (health > 0) {
    change_image("img/revenge/pic_294.jpg")
    change_text(
      '<p>Не испытывая и капли жалости к этим практических беспомощным налётчикам, Вы стали расстреливать их из своего <span class="yes">пистолета</span>. Патронов у Вас оставалось немного, но все они легли точно в цель.</p><p>В этот момент на Вас сверху обрушился проворный <span class="yes">рейдер с ножом</span>. Этим тесаком он нанёс Вам рваную рану в левое бедро. Вы упали на землю и тут же выбросили вперёд руку с выхваченным из-за пояса ножом. Лезвие вошло <span class="yes">бритому</span> в область желудка, нож выпал из его руки.</p><p>Кровь хлестала из перебитой артерии. Вытащив из брюк поверженного врага ремень, Вы перетянули им ногу, остановив тем самым кровотечение. Бой был окончен.</p>'
    )
    change_buttons({ ЭПИЛОГ: epilogue })
  } else {
    death()
    change_image("img/revenge/pic_294a.jpg")
    change_text(
      '<p>Не испытывая и капли жалости к этим практических беспомощным налётчикам, Вы стали расстреливать их из своего <span class="yes">пистолета</span>. Патронов у Вас оставалось немного, но все они легли точно в цель.</p><p>В этот момент на Вас сверху обрушился проворный <span class="yes">рейдер с ножом</span>. Этим тесаком он нанёс Вам рваную рану в область желудка. Вы упали на спину. Из живота фонтаном хлынула кровь. Рана оказалась фатальной.</p><p><span class="yes">Вы погибли.</span></p>'
    )
    change_buttons({ "Игра окончена!": restart })
  }
  currentFunction = mainQuest_Good_FinalBattleAlone242
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone2141() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 2
  change_gun()
  change_image("img/revenge/pic_278.jpg")
  change_text(
    '<p>Оставлять такого грозного противника, как головорез с огромным тесаком за спиной было нелепо. <span class="yes">Рейдер</span> замахнулся, чтобы нанести Вам новую рану, но Вы не дали ему это сделать, пустив пулю в его упрямый широкий лоб. Враг упал замертво к Вашим ногам.</p><p>В этот момент возле Вашего левого уха просвистела пуля. Врезавшись в холм, пуля оставила за собой фонтанчик земли. Вы подняли глаза и увидели оглушённую взрывом <span class="yes">девушку</span> с пистолетом в руках. Контузия мешала ей прицелиться, хотя она прикладывала к этому все свои силы.</p><p>Резко выбросив руку с <span class="yes">пистолетом</span> вперёд, Вы всадили <span class="yes">рейдерше</span> пулю промеж пронзительно синих глаз. Вытащив из брюк поверженного врага ремень, Вы перетянули им ногу, остановив тем самым кровотечение. Бой был окончен.</p>'
  )
  change_buttons({ ЭПИЛОГ: epilogue })
  currentFunction = mainQuest_Good_FinalBattleAlone2141
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone2241() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 2
  change_gun()
  change_image("img/revenge/pic_285.jpg")
  change_text(
    '<p>Оставлять такого грозного противника, как головорез с огромным тесаком за спиной было нелепо. <span class="yes">Рейдер</span> замахнулся, чтобы нанести Вам новую рану, но Вы не дали ему это сделать, пустив пулю в его упрямый широкий лоб. Враг упал замертво к Вашим ногам.</p><p>В этот момент возле Вашего левого уха просвистела пуля. Врезавшись в холм, пуля оставила за собой фонтанчик земли. Вы подняли глаза и увидели оглушённую взрывом <span class="yes">девушку</span> с пистолетом в руках. Контузия мешала ей прицелиться, хотя она прикладывала к этому все свои силы.</p><p>Резко выбросив руку с <span class="yes">пистолетом</span> вперёд, Вы всадили <span class="yes">рейдерше</span> пулю промеж пронзительно синих глаз. Вытащив из брюк поверженного врага ремень, Вы перетянули им ногу, остановив тем самым кровотечение. Бой был окончен.</p>'
  )
  change_buttons({ ЭПИЛОГ: epilogue })
  currentFunction = mainQuest_Good_FinalBattleAlone2241
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone2411() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  getHostage = true
  setCookie("cgetHostage", getHostage)
  pistol_ammo -= 1
  change_gun()
  change_image("img/revenge/pic_292.jpg")
  change_text(
    '<p>Обливаясь ледяным потом, Вы направили <span class="yes">пистолет</span> на <span class="yes">бандита с ирокезом</span> и сделали выстрел. Пуля прошила ему горло и полетела куда-то вглубь <span class="yes">Пустоши</span>. <span class="yes">Рейдер</span> упал, заливая землю вокруг своей кровью. </p><p>Вы резко направили <span class="yes">пистолет</span> на <span class="yes">девушку</span>. Ваши действия были точными и выверенными. Палец коснулся спускового крючка. Внезапно <span class="yes">девка</span> бросила на землю копьё и истошно заверещала:</p><p>- Не убивай! Прошу тебя, не убивай!</p><p>Вы подскочили к ней и врезали по лицу. Молодая <span class="yes">преступница</span> упала на землю и зарыдала. Не теряя времени, Вы скрутили ей руки за спиной. <span class="yes">Девушка</span> продолжала причитать и просить оставить её в живых…</p><p>Закатное солнце последними лучами освещало дорогу, залитую кровью. В результате грандиозной бойни в живых остались только <span class="yes">двое</span>. <span class="yes">Парень</span> и <span class="yes">девушка</span>. <span class="yes">Девушка</span> лежала на земле, а парень в раздумчивости стоял над нею.</p>'
  )
  change_buttons({ ЭПИЛОГ: epilogue })
  currentFunction = mainQuest_Good_FinalBattleAlone2411
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone2412() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 2
  change_gun()
  lower_health(20)
  if (health > 0) {
    change_image("img/revenge/pic_293.jpg")
    change_text(
      '<p>Обливаясь ледяным потом, Вы направили пистолет на <span class="yes">девушку</span> с копьём и сделали выстрел. Пуля прошила ей череп и полетела куда-то вглубь <span class="yes">Пустоши</span>. <span class="yes">Разбойница</span> рухнула на землю, заливая всё вокруг своей кровью.</p><p>Вы резко направили пистолет на <span class="yes">последнего</span> врага. Однако прежде чем успели сделать выстрел, <span class="yes">рейдер</span> пальнул первым. Пуля угодила Вам в руку. Последовал Ваш выстрел, который поставил точку в этом бою.</p><p>Закатное солнце последними лучами освещало дорогу, залитую кровью. В результате грандиозной бойни в живых остались только <span class="yes">один</span>. Человек в задумчивости стоял над <span class="yes">шестью</span> трупами, прижимая к себе раненую руку.</p>'
    )
    change_buttons({ ЭПИЛОГ: epilogue })
  } else {
    death()
    change_image("img/revenge/pic_293a.jpg")
    change_text(
      '<p>Обливаясь ледяным потом, Вы направили пистолет на <span class="yes">девушку</span> с копьём и сделали выстрел. Пуля прошила ей череп и полетела куда-то вглубь <span class="yes">Пустоши</span>. <span class="yes">Разбойница</span> рухнула на землю, заливая всё вокруг своей кровью.</p><p>Вы резко направили пистолет на <span class="yes">последнего</span> врага. Однако прежде чем успели сделать выстрел, <span class="yes">рейдер</span> пальнул первым. Пуля угодила Вам в сердце.</p><p><span class="yes">Вы погибли</span>.</p>'
    )
    change_buttons({ "Игра окончена": restart })
  }
  currentFunction = mainQuest_Good_FinalBattleAlone2412
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone313() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  low_grenade(1)
  lower_health(20)
  if (health > 0) {
    change_image("img/revenge/pic_302.jpg")
    change_text(
      '<p>Добрым словом Вы помянули <span class="yes">шерифа Грина</span>, нащупав в кармане подаренную им <span class="yes">гранату</span>. Быстро выдернув чеку, Вы метнули увесистый боезапас в сторону бегущих на Вас <span class="yes">врагов</span>. Зажав уши, Вы широко открыли рот на всякий случай.</p><p>Взрыв оказался не таким громким, как Вы рассчитывали. Выглянув из-за укрытия, Вы увидели не соизмеримый с хлопком эффект. <span class="yes">Бандитов</span> на дороге разметало в разные стороны. С оторванными конечностями их обезображенные трупы упали на обочину, заливая землю вокруг алой кровью.</p><p>В этот момент на Вас сверху обрушился проворный <span class="yes">рейдер с ножом</span>. Этим тесаком он нанёс Вам рваную рану в левое бедро. Вы упали на землю и тут же выбросили вперёд руку с выхваченным из-за пояса <span class="yes">ножом</span>. Лезвие вошло <span class="yes">бритому</span> в область сердца, нож выпал из его руки.</p><p>Кровь хлестала из перебитой артерии на Вашей ноге. Вытащив из брюк поверженного врага ремень, Вы перетянули им бедро выше раны, остановив тем самым кровотечение. Бой был окончен.</p>'
    )
    change_buttons({ ЭПИЛОГ: epilogue })
  } else {
    death()
    change_image("img/revenge/pic_302a.jpg")
    change_text(
      '<p>Добрым словом Вы помянули <span class="yes">шерифа Грина</span>, нащупав в кармане подаренную им <span class="yes">гранату</span>. Быстро выдернув чеку, Вы метнули увесистый боезапас в сторону бегущих на Вас <span class="yes">врагов</span>. Зажав уши, Вы широко открыли рот на всякий случай.</p><p>Взрыв оказался не таким громким, как Вы рассчитывали. Выглянув из-за укрытия, Вы увидели не соизмеримый с хлопком эффект. <span class="yes">Бандитов</span> на дороге разметало в разные стороны. С оторванными конечностями их обезображенные трупы упали на обочину, заливая землю вокруг алой кровью.</p><p>В этот момент на Вас сверху обрушился проворный <span class="yes">рейдер с ножом</span>. Этим тесаком он нанёс Вам рваную рану в область желудка. Вы рухнули на землю больше не в сила подняться.</p><p><span class="yes">Вы погибли</span>.</p>'
    )
    change_buttons({ "Игра окончена": restart })
  }
  currentFunction = mainQuest_Good_FinalBattleAlone313
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone3111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_health(75)
  if (health > 0) {
    rifle_ammo -= 4
    change_shotgun()
    change_image("img/revenge/pic_299.jpg")
    change_text(
      '<p>Прежде чем Вы успели нажать на спусковой крючок, <span class="yes">налётчики</span> успели сделать залп в Вашу сторону. Несколько пуль прошили Вашу броню, и засели в теле. Вы выпустили рой тяжёлой картечи в сторону безжалостного врага. <span class="yes">Двое</span> упали замертво, а последний – <span class="yes">рейдер в</span> тяжёлой <span class="yes">металлической броне</span> упал на землю, выронив своё оружие.</p><p>Метнув в него разряженный <span class="yes">дробовик</span>, Вы выхватили  из-за пояса <span class="yes">нож</span> и сцепились с ним в смертельной схватке. Вы катались по пыльной дороге, каждый пытался убить другого.</p><p>В конце концов, Вы оказались наверху и нанесли <span class="yes">рейдеру</span> порез в область предплечья. Враг ослабил хватку. Воспользовавшись этим, Вы всадили <span class="yes">нож</span> в его горло. Кровь брызнула Вам в лицо. Бой был окончен.</p>'
    )
    change_buttons({ ЭПИЛОГ: epilogue })
  } else {
    death()
    change_image("img/revenge/pic_299a.jpg")
    change_text(
      '<p>Прежде чем Вы успели нажать на спусковой крючок, <span class="yes">налётчики</span> успели сделать залп в Вашу сторону. Несколько пуль прошили Вашу броню, и засели в теле. Вы выпустили рой тяжёлой картечи в сторону безжалостного врага. <span class="yes">Двое</span> упали замертво, а последний – <span class="yes">рейдер в</span> тяжёлой <span class="yes">металлической броне</span> упал на землю, выронив своё оружие.</p><p>Метнув в него разряженный <span class="yes">дробовик</span>, Вы выхватили  из-за пояса <span class="yes">нож</span> и сцепились с ним в смертельной схватке. Вы катались по пыльной дороге, каждый пытался убить другого.</p><p>В конце концов, наверху оказался <span class="yes">враг</span>. Ударив Вас в живот своим шипованным локтем, <span class="yes">рейдер</span> перебил Ваше дыхание. Ослабив хватку, Вы не удержали <span class="yes">нож</span> в руках. Воспользовавшись моментом, <span class="yes">бандит</span> завладел оружием и всадил его Вам в грудь по самую рукоятку.</p><p><span class="yes">Вы погибли</span>.</p>'
    )
    change_buttons({ "Игра окончена": restart })
  }
  currentFunction = mainQuest_Good_FinalBattleAlone3111
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone3112() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  low_grenade(1)
  lower_health(40)
  if (health > 0) {
    change_image("img/revenge/pic_300.jpg")
    change_text(
      '<p>Враг был близко. В отчаянии Вы выхватили из-за пазухи <span class="yes">гранату</span>. Выдернув чеку, Вы метнули её в <span class="yes">налётчиков</span>, бросившись за труп бритого бандита.</p><p>Мощная взрывная волна подхватила и отбросила Ваше тело на пару метров в сторону, посёкши его осколками.</p><p>Вы приподнялись на ладонях и посмотрели в сторону <span class="yes">рейдеров</span>. В живых не осталось никого, все они были мертвы. Закатное солнце последними лучами трогало землю, залитую алой кровью.</p>'
    )
    change_buttons({ ЭПИЛОГ: epilogue })
  } else {
    death()
    change_image("img/revenge/pic_300a.jpg")
    change_text(
      '<p>Враг был близко. В отчаянии Вы выхватили из-за пазухи <span class="yes">гранату</span>. Выдернув чеку, Вы метнули её в <span class="yes">налётчиков</span>, бросившись за труп бритого бандита.</p><p>Мощная взрывная волна подхватила и отбросила Ваше тело на пару метров в сторону, посёкши его осколками.</p><p>Вы лежали на земле и понимали, что подняться уже не сможете. Осколки пронзили Ваше тело, разорвав плоть и оставив тяжёлые раны. Никакими стимуляторами дело было не исправить. Через несколько минут <span class="yes">Вы погибли</span>.</p>'
    )
    change_buttons({ "Игра окончена": restart })
  }
  currentFunction = mainQuest_Good_FinalBattleAlone3112
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone3421() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_health(40)
  if (health > 0) {
    rifle_ammo -= 3
    change_shotgun()
    change_gun()
    change_image("img/revenge/pic_310.jpg")
    change_text(
      '<p>Оставлять такого грозного противника, как головорез с огромным тесаком за спиной было нелепо. <span class="yes">Рейдер</span> замахнулся, чтобы нанести Вам новую рану, но Вы не дали ему это сделать, пустив заряд картечи в его упрямый широкий лоб. <span class="yes">Бандит</span> упал замертво к Вашим ногам.</p><p>В этот момент в Вас попала очередная пуля, выпущенная <span class="yes">врагами</span>, оказавшимися <span class="yes">сзади</span>.</p><p>Резко направив <span class="yes">дробовик</span> в сторону <span class="yes">налётчиков</span>, Вы сделали выстрел. Затем, заменив стрелянные патроны, Вы выстрелили ещё. Когда Вы очнулись, кроме Вас в живых не осталось никого...</p>'
    )
    change_buttons({ ЭПИЛОГ: epilogue })
  } else {
    death()
    change_image("img/revenge/pic_310a.jpg")
    change_text(
      '<p>Оставлять такого грозного противника, как головорез с огромным тесаком за спиной было нелепо. <span class="yes">Рейдер</span> замахнулся, чтобы нанести Вам новую рану, но Вы не дали ему это сделать, пустив заряд картечи в его упрямый широкий лоб. <span class="yes">Бандит</span> упал замертво к Вашим ногам.</p><p>В этот момент в Вас попала очередная пуля, выпущенная <span class="yes">врагами</span>, оказавшимися <span class="yes">сзади</span>.</p><p>Ранение оказалась для Вас фатальным.</p><p><span class="yes">Вы погибли.</span></p>'
    )
    change_buttons({ "Игра окончена": restart })
  }
  currentFunction = mainQuest_Good_FinalBattleAlone3421
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone411() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  getHostage = true
  setCookie("cgetHostage", getHostage)
  rifle_ammo -= 1
  change_shotgun()
  change_image("img/revenge/pic_313.jpg")
  change_text(
    '<p>- Этот с ножом станет серьёзной проблемой, - решили Вы. – Лучше уложить его сейчас.</p><p>Хорошенько прицелившись, Вы выпустили заряд прямо в бритый череп <span class="yes">бандита на холме</span>. Труп рейдера упал к Вашим ногам. Вы оглянулись и увидели, как <span class="yes">последняя</span> оставшаяся в живых налётчица показалась из-за холма и взяла Вас на мушку.</p><p>Не успев предпринять каких-либо действий, Вы услышали выстрел, от которого закрыли на секунду глаза.</p><p><span class="yes">Рейдер</span> явно промахнулась, так как удара Вы не ощутили. Зато послышался истошный вой девки, пытавшейся Вас убить. Судя всему, после взрыва гранаты пистолет получил повреждения. Выпущенная в предыдущий раз последняя пуля застряла в стволе. Новый выстрел разорвал ствол пистолета, затвор слетел, в результате чего палец налётчицы был оторван, а сама она, зажав рану, принялась орать.</p><p>Вы подскочили к ней и врезали по лицу. Молодая <span class="yes">преступница</span> упала на землю и зарыдала. Не теряя времени, Вы скрутили ей руки за спиной. <span class="yes">Девушка</span> продолжала кричать…</p><p>Закатное солнце последними лучами освещало дорогу, залитую кровью. В результате грандиозной бойни в живых остались только <span class="yes">двое</span>. <span class="yes">Парень</span> и <span class="yes">девушка</span>. <span class="yes">Девушка</span> лежала на земле, а парень в раздумчивости стоял над нею.</p>'
  )
  change_buttons({ ЭПИЛОГ: epilogue })
  currentFunction = mainQuest_Good_FinalBattleAlone411
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_FinalBattleAlone421() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_health(30)
  if (health > 0) {
    rifle_ammo -= 2
    change_shotgun()
    change_image("img/revenge/pic_316.jpg")
    change_text(
      '<p>- Этот с ножом станет серьёзной проблемой, - решили Вы. – Лучше уложить его сейчас.</p><p>Хорошенько прицелившись, Вы выпустили заряд прямо в бритый череп <span class="yes">бандита на холме</span>. Труп рейдера упал к Вашим ногам. Вы оглянулись и увидели, что <span class="yes">последний</span> оставшихся в живых рейдер показался из-за холма и взял Вас на мушку.</p><p>Выстрелы прозвучали практически одновременно. Враг рухнул, как подкошенный на пыльную землю. Вы опустили глаза вниз и увидели, как на груди расплывается красное пятно.</p><p>Контузия <span class="yes">рейдера</span> от недавнего разрыва <span class="yes">гранаты</span> сыграла Вам на руку: пуля прошла по касательной, лишь задев мягкие ткани. Вы были живы. Перед Вами лежали шесть трупов, которых последними лучами касалось багровое, как кровь, закатное солнце…</p>'
    )
    change_buttons({ ЭПИЛОГ: epilogue })
  } else {
    death()
    change_image("img/revenge/pic_316a.jpg")
    change_text(
      '<p>- Этот с ножом станет серьёзной проблемой, - решили Вы. – Лучше уложить его сейчас.</p><p>Хорошенько прицелившись, Вы выпустили заряд прямо в бритый череп <span class="yes">бандита на холме</span>. Труп рейдера упал к Вашим ногам. Вы оглянулись и увидели, что <span class="yes">последний</span> оставшихся в живых рейдер показался из-за холма и взял Вас на мушку.</p><p>Выстрелы прозвучали практически одновременно. Враг рухнул, как подкошенный на пыльную землю. Вы опустили глаза вниз и увидели, как на груди расплывается красное пятно.</p><p>Это ранение оказалось для Вас фатальным. Пуля пробила навылет лёгкое, из которого теперь со свистом выходил воздух.</p><p><span class="yes">Вы погибли.</span></p>'
    )
    change_buttons({ "Игра окончена": restart })
  }
  currentFunction = mainQuest_Good_FinalBattleAlone421
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_FinalBattle311() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 2
  change_shotgun()
  lower_health(10)
  change_image("img/revenge/pic_236.jpg")
  change_text(
    '<p>Прикинув, что на близком расстоянии от автомата достанется сильнее, Вы благоразумно  выбрали первой мишенью патлатого <span class="yes">рейдера</span> с <span class="yes">автоматом</span> в руках. Враг был близко, поэтому Вы, без труда положили не успевшего среагировать на Ваше внезапное появление бандита.</p><p>Второй выстрел Вы сделали по его <span class="yes">соратнику</span>, однако на этот раз атака получилась менее эффективной – металлическая  броня защитила своего носителя от картечного заряда. Могучий <span class="yes">рейдер</span> получил лишь незначительные повреждения.</p><p>Произведя последний выстрел, Вы вновь спрятались за пригорком и  перезарядили ружьё. Не успели Вы занять оборонительную позицию, как из-за холма высунулся раненый <span class="yes">враг</span> и выстрелил в Вас почти в упор.</p><p>Если бы ранение в решающий момент не помешало ему прицелиться, то Вас бы уже не было на этом свете. Однако, в очередной раз, фортуна оказалась на Вашей стороне. Пуля лишь слегка оцарапала Ваше плечо. Не давая <span class="yes">рейдеру</span> возможности выстрелить ещё раз, Вы пальнули по противнику сразу из двух стволов.</p><p>Когда сизый дым от выстрелов рассеялся, перед Вами лежал лишь обезображенный труп свирепого <span class="yes">налётчика…</span></p>'
  )
  change_buttons({ ЭПИЛОГ: epilogue })
  currentFunction = mainQuest_Bad_FinalBattle311
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_FinalBattle312() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 2
  change_shotgun()
  lower_health(60)
  if (health > 0) {
    change_image("img/revenge/pic_337.jpg")
    change_text(
      '<p>Вы опрометчиво решили, что от <span class="yes">тяжелобронированного врага</span> угроза выше, и саданули по нему дуплетом из своего <span class="yes">дробовика</span>. Большая часть картечи попала <span class="yes">рейдеру</span> точно в голову, снеся врагу начисто череп.</p><p>Однако, его <span class="yes">напарник</span> открыл огонь из <span class="yes">автомата</span> и серьёзно ранил Вас. Вы кубарем скатились к подножью холма, чудом удержав ружьё в руках. Окровавленными пальцами, Вы вытащили стреляные гильзы из стволов и вложили на их место новые. В этот момент из-за холма показался последний <span class="yes">враг</span>. Вы встретили его смертоносным зарядом картечи практически в упор, не давая <span class="yes">бандиту</span> ни одного шанса.</p><p>Когда сизый дым от выстрелов рассеялся, перед Вами лежал лишь обезображенный труп свирепого <span class="yes">налётчика</span>…</p>'
    )
    change_buttons({ ЭПИЛОГ: epilogue })
  } else {
    death()
    change_image("img/revenge/pic_337a.jpg")
    change_text(
      '<p>Вы опрометчиво решили, что от <span class="yes">тяжелобронированного врага</span> угроза выше, и саданули по нему дуплетом из своего <span class="yes">дробовика</span>. Большая часть картечи попала <span class="yes">рейдеру</span> точно в голову, снеся врагу начисто череп.</p><p>Однако, его <span class="yes">напарник</span> открыл огонь из <span class="yes">автомата</span> и серьёзно ранил Вас. Несколько пуль пробили навылет грудь. С хрипом Вы рухнули навзничь на пыльную дорогу. Кровь пошла горлом. <span class="yes">Враг</span>, осторожно подходя к Вам, заметил, что Вы всё ещё живы. Несколькими выстрелами издалека он безжалостно Вас прикончил.</p><p><span class="yes">Вы погибли.</span></p>'
    )
    change_buttons({ "Игра окончена!": restart })
  }
  currentFunction = mainQuest_Bad_FinalBattle312
  setCookie("ccurrentFunction", currentFunction)
}
