/* ХАБ */
/* Прибытие */
function main_quest_Hub() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  HubLeftDays = 10 - day
  change_image("img/revenge/pic_77.jpg")
  change_text(
    '<p>Перед Вами самый большой город <span class="yes">Основного Региона</span> — <span class="yes">Хаб</span>. Вы в северной его части. Это <span class="yes">Пригород</span>. Вокруг деловито бегают разные люди: торговцы и их охранники, перекупщики, экспедиторы и прочие авантюристы всех мастей.</p><p>Надо обязательно <span class="yes">снять жильё</span> и <span class="yes">не выдавать</span> кому попало, что Вы из <span class="yes">Братства Стали</span>.  Осталось всего <span class="yes">' +
      HubLeftDays +
      ' дней</span> на выполнение задания.</p><p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше. Возле загона с браминами лежит жалкий <span class="yes">бродяга</span>.</p>'
  )
  change_buttons({
    "Подойти к бродяге": hub_bum,
    "Подойти к посту охраны": hub_downtownGuard,
    "Дойти до Центра города": hub_center,
  })
  currentFunction = main_quest_Hub
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cHubLeftDays", HubLeftDays)
}
/* Пригород */
function hub_downtown() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  /* Условие для встречи ночного патруля*/
  if ((time >= 2) & (time <= 6)) {
    if (killDon === true) {
      change_image("img/revenge/pic_169.jpg")
      change_text(
        '<p>Вы шли по улице, когда Вас остановил <span class="yes">отряд полиции</span>.</p><p>- Стой, путник, ты задержан, - рявкнул один из них.</p><p>В мгновение ока Вы оказались в наручниках. Вас привели в <span class="yes">отдел полиции</span>, где один из присутствующих <span class="yes">горожан</span> узнал Ваше лицо.</p><p>- Это он, - закричал он, указывая на Вас пальцем. - Он один из тех, кто заходил в здание <span class="yes">склада</span>!</p>'
      )
      change_buttons({ "Вы попались!": hub_mainQuestBad13 })
    } else {
      change_image("img/revenge/pic_169.jpg")
      change_text(
        '<p>Внезапно Вы почувствовали тяжёлую руку на своём плече. Оглянувшись, Вы увидели высокого <span class="yes">полицейского</span> в зелёной форме.</p><p>- Чего ты шляешься среди <span class="yes">ночи</span>, - довольно грубо спросил у Вас <span class="yes">патрульный</span>. – Ты разве не знаешь, что бродить по городу ночью <span class="yes">запрещено</span>. <span class="yes">Шериф</span> расценивает это как бродяжничество или злоумышление. У тебя, что, нет <span class="yes">денег</span> для того, чтобы переночевать в <span class="yes">отеле</span>?</p><p>Вид его был грозен.</p>'
      )
      if ((caps > 69) & (rentRoom === true)) {
        change_buttons({
          "Вот ключ от моего номера в отеле, офицер. Просто я задержался.":
            nightPatrol,
          "Что Вы, офицер! У меня достаточно денег. Я не бродяга!":
            nightPatrol1,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps > 69) & (rentRoom === false)) {
        change_buttons({
          "Что Вы, офицер! У меня достаточно денег. Я не бродяга!":
            nightPatrol1,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps < 70) & (rentRoom === true)) {
        change_buttons({
          "Вот ключ от моего номера в отеле, офицер. Просто я задержался.":
            nightPatrol,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps < 70) & (rentRoom === false)) {
        change_buttons({
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      }
    }
  } else {
    change_time(2)
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_76.jpg")
    } else {
      change_image("img/revenge/pic_76a.jpg")
    }
    if (mainGoodQuestBegin === true) {
      if (newLifeKreig === true) {
        if ((time >= 7) & (time < 13)) {
          change_text(
            '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше.</p><p>Ваш друг <span class="yes">Крейг</span> работает в загоне для браминов.</p><p>Также же Вы заметили бойкого <span class="yes">старичка</span> в <span class="yes">красных штанах</span>. Он юрко носился от одного каравана к другому, что-то неприрывно записывая. Вы сразу узнали в нём <span class="yes">Дона</span> - подозреваемого копа, о котором говорил Вам <span class="yes">шериф Грин</span>.</p>'
          )
          change_buttons({
            "Начать слежку за Доном": hub_mainQuestGood4,
            "Поздороваться с Крейгом": hub_Kreig,
            "Подойти к посту охраны": hub_downtownGuard,
            "Дойти до Центра города": hub_center,
          })
        } else if ((time >= 13) & (time < 19)) {
          change_text(
            '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше.</p><p>Ваш друг <span class="yes">Крейг</span> работает в загоне для браминов.</p>'
          )
          change_buttons({
            "Поздороваться с Крейгом": hub_Kreig,
            "Подойти к посту охраны": hub_downtownGuard,
            "Дойти до Центра города": hub_center,
          })
        } else {
          change_text(
            '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше.</p>'
          )
          change_buttons({
            "Подойти к посту охраны": hub_downtownGuard,
            "Дойти до Центра города": hub_center,
          })
        }
      } else {
        if ((time >= 7) & (time < 13)) {
          change_text(
            '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше. Возле загона с браминами лежит жалкий <span class="yes">бродяга</span>.</p><p>Также же Вы заметили бойкого <span class="yes">старичка</span> в <span class="yes">красных штанах</span>. Он юрко носился от одного каравана к другому, что-то неприрывно записывая. Вы сразу узнали в нём <span class="yes">Дона</span> - подозреваемого копа, о котором говорил Вам <span class="yes">шериф Грин</span>.</p>'
          )
          change_buttons({
            "Начать слежку за Доном": hub_mainQuestGood4,
            "Подойти к бродяге": hub_bum,
            "Подойти к посту охраны": hub_downtownGuard,
            "Дойти до Центра города": hub_center,
          })
        } else {
          change_text(
            '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше. Возле загона с браминами лежит жалкий <span class="yes">бродяга</span>.</p>'
          )
          change_buttons({
            "Подойти к бродяге": hub_bum,
            "Подойти к посту охраны": hub_downtownGuard,
            "Дойти до Центра города": hub_center,
          })
        }
      }
    } else {
      if (newLifeKreig === true) {
        if ((time >= 7) & (time < 19)) {
          change_text(
            '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше.</p><p>Ваш друг <span class="yes">Крейг</span> работает в загоне для браминов.</p>'
          )
          if (sheriffGreeneSecondTask === true || killDon === true) {
            change_buttons({
              "Покинуть город": mainQuest_Wasteland,
              "Поздороваться с Крейгом": hub_Kreig,
              "Подойти к посту охраны": hub_downtownGuard,
              "Дойти до Центра города": hub_center,
            })
          } else {
            change_buttons({
              "Поздороваться с Крейгом": hub_Kreig,
              "Подойти к посту охраны": hub_downtownGuard,
              "Дойти до Центра города": hub_center,
            })
          }
        } else {
          change_text(
            '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше.</p>'
          )
          if (sheriffGreeneSecondTask === true || killDon === true) {
            change_buttons({
              "Покинуть город": mainQuest_Wasteland,
              "Подойти к посту охраны": hub_downtownGuard,
              "Дойти до Центра города": hub_center,
            })
          } else {
            change_buttons({
              "Подойти к посту охраны": hub_downtownGuard,
              "Дойти до Центра города": hub_center,
            })
          }
        }
      } else {
        change_text(
          '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше. Возле загона с браминами лежит жалкий <span class="yes">бродяга</span>.</p>'
        )
        if (sheriffGreeneSecondTask === true || killDon === true) {
          change_buttons({
            "Покинуть город": mainQuest_Wasteland,
            "Подойти к бродяге": hub_bum,
            "Подойти к посту охраны": hub_downtownGuard,
            "Дойти до Центра города": hub_center,
          })
        } else {
          change_buttons({
            "Подойти к бродяге": hub_bum,
            "Подойти к посту охраны": hub_downtownGuard,
            "Дойти до Центра города": hub_center,
          })
        }
      }
    }
  }
  currentFunction = hub_downtown
  setCookie("ccurrentFunction", currentFunction)
}
function hub_downtown1() {
  /* Для перемещения внутри Пригорода - меньший расход времени */ /* Условие для встречи ночного патруля*/ $(
    "body,html"
  ).animate({ scrollTop: 0 }, 800)
  if ((time >= 2) & (time <= 6)) {
    if (killDon === true) {
      change_image("img/revenge/pic_169.jpg")
      change_text(
        '<p>Вы шли по улице, когда Вас остановил <span class="yes">отряд полиции</span>.</p><p>- Стой, путник, ты задержан, - рявкнул один из них.</p><p>В мгновение ока Вы оказались в наручниках. Вас привели в <span class="yes">отдел полиции</span>, где один из присутствующих <span class="yes">горожан</span> узнал Ваше лицо.</p><p>- Это он, - закричал он, указывая на Вас пальцем. - Он один из тех, кто заходил в здание <span class="yes">склада</span>!</p>'
      )
      change_buttons({ "Вы попались!": hub_mainQuestBad13 })
    } else {
      change_image("img/revenge/pic_169.jpg")
      change_text(
        '<p>Внезапно Вы почувствовали тяжёлую руку на своём плече. Оглянувшись, Вы увидели высокого <span class="yes">полицейского</span> в зелёной форме.</p><p>- Чего ты шляешься среди <span class="yes">ночи</span>, - довольно грубо спросил у Вас <span class="yes">патрульный</span>. – Ты разве не знаешь, что бродить по городу ночью <span class="yes">запрещено</span>. <span class="yes">Шериф</span> расценивает это как бродяжничество или злоумышление. У тебя, что, нет <span class="yes">денег</span> для того, чтобы переночевать в <span class="yes">отеле</span>?</p><p>Вид его был грозен.</p>'
      )
      if ((caps > 69) & (rentRoom === true)) {
        change_buttons({
          "Вот ключ от моего номера в отеле, офицер. Просто я задержался.":
            nightPatrol,
          "Что Вы, офицер! У меня достаточно денег. Я не бродяга!":
            nightPatrol1,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps > 69) & (rentRoom === false)) {
        change_buttons({
          "Что Вы, офицер! У меня достаточно денег. Я не бродяга!":
            nightPatrol1,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps < 70) & (rentRoom === true)) {
        change_buttons({
          "Вот ключ от моего номера в отеле, офицер. Просто я задержался.":
            nightPatrol,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps < 70) & (rentRoom === false)) {
        change_buttons({
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      }
    }
  } else {
    change_time(1)
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_76.jpg")
    } else {
      change_image("img/revenge/pic_76a.jpg")
    }
    if (mainGoodQuestBegin === true) {
      if (newLifeKreig === true) {
        if ((time >= 7) & (time < 13)) {
          change_text(
            '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше.</p><p>Ваш друг <span class="yes">Крейг</span> работает в загоне для браминов.</p><p>Также же Вы заметили бойкого <span class="yes">старичка</span> в <span class="yes">красных штанах</span>. Он юрко носился от одного каравана к другому, что-то неприрывно записывая. Вы сразу узнали в нём <span class="yes">Дона</span> - подозреваемого копа, о котором говорил Вам <span class="yes">шериф Грин</span>.</p>'
          )
          change_buttons({
            "Начать слежку за Доном": hub_mainQuestGood4,
            "Поздороваться с Крейгом": hub_Kreig,
            "Подойти к посту охраны": hub_downtownGuard,
            "Дойти до Центра города": hub_center,
          })
        } else if ((time >= 13) & (time < 19)) {
          change_text(
            '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше.</p><p>Ваш друг <span class="yes">Крейг</span> работает в загоне для браминов.</p>'
          )
          change_buttons({
            "Поздороваться с Крейгом": hub_Kreig,
            "Подойти к посту охраны": hub_downtownGuard,
            "Дойти до Центра города": hub_center,
          })
        } else {
          change_text(
            '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше.</p>'
          )
          change_buttons({
            "Подойти к посту охраны": hub_downtownGuard,
            "Дойти до Центра города": hub_center,
          })
        }
      } else {
        if ((time >= 7) & (time < 13)) {
          change_text(
            '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше. Возле загона с браминами лежит жалкий <span class="yes">бродяга</span>.</p><p>Также же Вы заметили бойкого <span class="yes">старичка</span> в <span class="yes">красных штанах</span>. Он юрко носился от одного каравана к другому, что-то неприрывно записывая. Вы сразу узнали в нём <span class="yes">Дона</span> - подозреваемого копа, о котором говорил Вам <span class="yes">шериф Грин</span>.</p>'
          )
          change_buttons({
            "Начать слежку за Доном": hub_mainQuestGood4,
            "Подойти к бродяге": hub_bum,
            "Подойти к посту охраны": hub_downtownGuard,
            "Дойти до Центра города": hub_center,
          })
        } else {
          change_text(
            '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше. Возле загона с браминами лежит жалкий <span class="yes">бродяга</span>.</p>'
          )
          change_buttons({
            "Подойти к бродяге": hub_bum,
            "Подойти к посту охраны": hub_downtownGuard,
            "Дойти до Центра города": hub_center,
          })
        }
      }
    } else {
      if (newLifeKreig === true) {
        if ((time >= 7) & (time < 19)) {
          change_text(
            '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше.</p><p>Ваш друг <span class="yes">Крейг</span> работает в загоне для браминов.</p>'
          )
          if (sheriffGreeneSecondTask === true || killDon === true) {
            change_buttons({
              "Покинуть город": mainQuest_Wasteland,
              "Поздороваться с Крейгом": hub_Kreig,
              "Подойти к посту охраны": hub_downtownGuard,
              "Дойти до Центра города": hub_center,
            })
          } else {
            change_buttons({
              "Поздороваться с Крейгом": hub_Kreig,
              "Подойти к посту охраны": hub_downtownGuard,
              "Дойти до Центра города": hub_center,
            })
          }
        } else {
          change_text(
            '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше.</p>'
          )
          if (sheriffGreeneSecondTask === true || killDon === true) {
            change_buttons({
              "Покинуть город": mainQuest_Wasteland,
              "Подойти к посту охраны": hub_downtownGuard,
              "Дойти до Центра города": hub_center,
            })
          } else {
            change_buttons({
              "Подойти к посту охраны": hub_downtownGuard,
              "Дойти до Центра города": hub_center,
            })
          }
        }
      } else {
        change_text(
          '<p>Вы в <span class="yes">Пригороде Хаба</span>. Тут расположен <span class="yes">пост охраны</span> и жилые дома, а <span class="yes">Центр города</span> дальше. Возле загона с браминами лежит жалкий <span class="yes">бродяга</span>.</p>'
        )
        if (sheriffGreeneSecondTask === true || killDon === true) {
          change_buttons({
            "Покинуть город": mainQuest_Wasteland,
            "Подойти к бродяге": hub_bum,
            "Подойти к посту охраны": hub_downtownGuard,
            "Дойти до Центра города": hub_center,
          })
        } else {
          change_buttons({
            "Подойти к бродяге": hub_bum,
            "Подойти к посту охраны": hub_downtownGuard,
            "Дойти до Центра города": hub_center,
          })
        }
      }
    }
  }
  currentFunction = hub_downtown1
  setCookie("ccurrentFunction", currentFunction)
}

/* Крейг */
function hub_bum() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (sheriffGreeneSecondTask === true || killDon === true) {
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_78.jpg")
    } else {
      change_image("img/revenge/pic_78a.jpg")
    }
    change_text(
      '<p>Перед Вами на куче грязной соломы лежал совершенно <span class="yes">опущенный человек</span>. Его одежда, вернее то, что от неё осталось, была мерзкого желто-коричневого цвета. А вонь была такой, что назвать её просто «вонью» - сделать комплимент её хозяину.</p><p>У Вас совершенно нет времени на бомжа с его проблемами.</p>'
    )
    change_buttons({ "Отойти от бездомного": hub_downtown1 })
  } else {
    if (creigFirstMeetBad === true) {
      if ((time < 19) & (time > 6.5)) {
        change_image("img/revenge/pic_79.jpg")
      } else {
        change_image("img/revenge/pic_79a.jpg")
      }
      change_text(
        '<p>Завидев Вас издалека, <span class="yes">бомж</span> принялся истошно орать: "Помогите! Помогите!"</p><p>Прохожие вокруг стали оборачиваться на эти вопли.</p>'
      )
      change_buttons({
        "Лучше убраться подобру-поздорову, пока снова не явилась полиция":
          hub_downtown1,
      })
    } else if ((creigFirstMeetGood === false) & (creigFirstMeetBad === false)) {
      if ((time < 19) & (time > 6.5)) {
        change_image("img/revenge/pic_78.jpg")
      } else {
        change_image("img/revenge/pic_78a.jpg")
      }
      change_text(
        '<p>Перед Вами на куче грязной соломы лежал совершенно <span class="yes">опущенный человек</span>. Его одежда, вернее то, что от неё осталось, была мерзкого желто-коричневого цвета. А вонь была такой, что назвать её просто «вонью» - сделать комплимент её хозяину.</p>'
      )
      if (caps > 1) {
        change_buttons({
          "Плюнуть в эту мразь и ударить ботинком": hub_bad_bum,
          "Бросить бедняге пару крышек": hub_good_bum,
          "Ну, его к чёрту! Ещё подцепите что-нибудь": hub_downtown1,
        })
      } else {
        change_buttons({
          "Плюнуть в эту мразь и ударить ботинком": hub_bad_bum,
          "Ну, его к чёрту! Ещё подцепите что-нибудь": hub_downtown1,
        })
      }
    } else if (
      (creigFirstMeetGood === true) &
      (creigFirstMeetBad === false) &
      (creigAskGood === false) &
      (creigDrunked === false) &
      (bethAgree === false) &
      (creigAskGood2 === false)
    ) {
      if ((time < 19) & (time > 6.5)) {
        change_image("img/revenge/pic_78.jpg")
      } else {
        change_image("img/revenge/pic_78a.jpg")
      }
      change_text(
        '<p>Перед Вами на куче грязной соломы продолжал лежать вонючий <span class="yes">бомж</span>. Вам показалось, что с прошлого раза его вонь только усилилась.</p>'
      )
      change_buttons({
        "Спросить о рейдерах": hub_good_bum1,
        "Уйти по своим делам": hub_downtown1,
      })
    } else if (
      (creigFirstMeetGood === true) &
      (creigAskGood === true) &
      (creigFirstMeetBad === false) &
      (creigDrunked === false) &
      (bethAgree === false) &
      (creigAskGood2 === false)
    ) {
      if ((time < 19) & (time > 6.5)) {
        change_image("img/revenge/pic_78.jpg")
      } else {
        change_image("img/revenge/pic_78a.jpg")
      }
      change_text(
        '<p>Перед Вами на куче грязной соломы продолжал лежать вонючий <span class="yes">бомж</span>. Вам показалось, что с прошлого раза его вонь только усилилась.</p><p>Он явно страдал от сильнейшего похмелья и был не в настроении болтать. Возможно бутылочка <span class="yes">пивка</span> поправила бы это состояние.</p>'
      )
      if ((beer === 0) & (booze === 0)) {
        change_buttons({
          "Плюнуть в эту мразь и ударить ботинком": hub_bad_bum1,
          "Отойти от бродяги": hub_downtown1,
        })
      } else if ((beer > 0) & (booze === 0)) {
        change_buttons({
          "Плюнуть в эту мразь и ударить ботинком": hub_bad_bum1,
          "Обрадовать нищего бутылочкой пивка": hub_good_bum4,
          "Отойти от бродяги": hub_downtown1,
        })
      } else if ((beer === 0) & (booze > 0)) {
        change_buttons({
          "Плюнуть в эту мразь и ударить ботинком": hub_bad_bum1,
          "Предложить ему бутылку самогона": hub_good_bum5,
          "Отойти от бродяги": hub_downtown1,
        })
      } else if ((beer > 0) & (booze > 0)) {
        change_buttons({
          "Плюнуть в эту мразь и ударить ботинком": hub_bad_bum1,
          "Обрадовать нищего бутылочкой пивка": hub_good_bum4,
          "Предложить ему бутылку самогона": hub_good_bum5,
          "Отойти от бродяги": hub_downtown1,
        })
      }
    } else if (creigDrunked === true) {
      if ((time < 19) & (time > 6.5)) {
        change_image("img/revenge/pic_78.jpg")
      } else {
        change_image("img/revenge/pic_78a.jpg")
      }
      change_text(
        '<p>Перед Вами на куче грязной соломы спал вонючий <span class="yes">бездомный</span>. Кажется, он ещё и обмочился после выпитой бутылки <span class="yes">самогона</span>. Зрелище отвратное.</p>'
      )
      change_buttons({ "Отойти от бродяги": hub_downtown1 })
    } else if (creigAskGood2 === true) {
      if ((time < 19) & (time > 6.5)) {
        change_image("img/revenge/pic_111.jpg")
      } else {
        change_image("img/revenge/pic_111a.jpg")
      }
      change_text(
        '<p>Перед Вами на куче грязной соломы сидел <span class="yes">Крейг</span>. После выпитого пива он выглядел посвежее, чем при первой встрече. В руках он вертел соломинку, которой периодически ковырял в зубах.</p><p>Ему бы <span class="yes">помыться</span>, так как смердило от него нещадно.</p>'
      )
      if (bethAgree === false) {
        change_buttons({ "Отойти от бродяги": hub_downtown1 })
      } else {
        change_buttons({
          "Обрадовать нищего новостями": hub_good_bum7,
          "Отойти от бродяги": hub_downtown1,
        })
      }
    }
  }
  currentFunction = hub_bum
  setCookie("ccurrentFunction", currentFunction)
}
function hub_good_bum() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_caps(2)
  creigFirstMeetGood = true
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_79.jpg")
  } else {
    change_image("img/revenge/pic_79a.jpg")
  }
  change_text(
    '<p>Вы сжалились над несчастным бездомным и бросили ему <span class="yes">две крышки</span>. Пусть хоть купит себе поесть.</p><p>- О, спасибо тебе щедрый странник! - <span class="yes">бродяга</span> попытался привести себя в человеческий вид, отряхивая солому и грязь со своей одежды. - Твоя щедрость не знает границ. Эти деньги будут пущены в доброе дело. Не сомневайся!</p>'
  )
  change_buttons({
    "Спросить о рейдерах": hub_good_bum1,
    "Уйти по своим делам": hub_downtown1,
  })
  currentFunction = hub_bum
  setCookie("ccurrentFunction", currentFunction)
  setCookie("ccreigFirstMeetGood", creigFirstMeetGood)
}
function hub_good_bum1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_79.jpg")
  } else {
    change_image("img/revenge/pic_79a.jpg")
  }
  change_text(
    '<p>Вы решили сохранять дружелюбное расположение к <span class="yes">нищему</span>, несмотря на то, что уже почти теряли сознания от смрада, пронизывающего Вас до косного мозга.</p><p>- Скажи, любезный — начали Вы — страдает ли город от атак рейдеров? Как жизнь в <span class="yes">Хабе</span> в целом?</p><p>- Сам город страдает не сильно — разбойникам просто не пройти через мощные кордоны полиции, - <span class="yes">нищий</span> исторг облако зловония в Вашу сторону, - но караваны постоянно недосчитываются людей после очередного похода. Торговля с городами на западе и к северу практически парализована. Местный <span class="yes">шериф</span> усилил охрану и борется с возможными шпионами и бандитами внутри города.</p>'
  )
  change_buttons({ "Зажать нос": hub_good_bum2 })
  currentFunction = hub_good_bum1
  setCookie("ccurrentFunction", currentFunction)
}
function hub_good_bum2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_79.jpg")
  } else {
    change_image("img/revenge/pic_79a.jpg")
  }
  change_text(
    '<p>- Друг, в горле пересохло! Ты не принесёшь мне <span class="yes">бутылочку</span> чего-нибудь <span class="yes">спиртосодержащего</span>. Моим связкам нужно размяться, иначе голос будет потерян совершенно. Только не крепкое, я хочу начать новую жизнь!</p><p><span class="yes">Нищий</span> явно решил поживиться за Ваш счёт. Но разговорить его, судя по всему, по другому не выйдет.</p>'
  )
  change_buttons({
    "Врезать ему по морде ногой": hub_bad_bum1,
    "Ладно, так и быть! Рассказывай где тут можно добыть алкоголя.":
      hub_good_bum3,
  })
  currentFunction = hub_good_bum2
  setCookie("ccurrentFunction", currentFunction)
}
function hub_good_bum3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  creigAskGood = true
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_79.jpg")
  } else {
    change_image("img/revenge/pic_79a.jpg")
  }
  change_text(
    '<p>- Хорошее пойло в <span class="yes">баре «Мальтийский сокол»</span>, - глаза <span class="yes">бездомного</span> мечтательно прикрылись,  - Там же ты можешь и <span class="yes">комнату снять</span>, коли крышки в наличии.</p>'
  )
  change_buttons({
    "Ладно, жди, я скоро вернусь.": hub_downtown1,
    "Передумать и врезать ему по морде ногой": hub_bad_bum1,
  })
  currentFunction = hub_good_bum3
  setCookie("ccurrentFunction", currentFunction)
  setCookie("ccreigAskGood", creigAskGood)
}
function hub_good_bum4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  creigAskGood2 = true
  lower_beer(1)
  if (beer === 0) {
    $("#beer span").remove()
  }
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_79.jpg")
  } else {
    change_image("img/revenge/pic_79a.jpg")
  }
  change_text(
    '<p><span class="yes">Нищий</span> с жадностью присосался к горлышку бутылки и опустошил её практически за пару секунд. Вы и глазом моргнуть не успели. Смачно отрыгнув, <span class="yes">бомж</span> аккуратно спрятал бутылку в карман.</p><p>- Пригодится! – заявил он. – Друг, ты меня вернул к жизни прямо. Меня зовут <span class="yes">Крейг</span>. Дай я тебе хоть руку пожму что ли…</p><p>Вы в ужасе шарахнулись в сторону, не ожидая подобного поворота событий.</p><p>- Вот-вот… - заключил <span class="yes">бомж</span>. – Все так. Слушай, меня достала такая жизнь. Мне бы <span class="yes">помыться</span>, да <span class="yes">комнату</span> снять и новая жизнь была бы у меня в кармане. Я ведь работящий, ты не подумай. Это просто так сложилось. Всё потерял. А ведь столько было. Помоги мне, друг!</p>'
  )
  change_buttons({
    "Что нужно сделать конкретно? Без лирических отступлений только.":
      hub_good_bum6,
    "Ладно, ладно. Подумаю чем тебе помочь. Ох! Ну, и вонь!": hub_downtown1,
  })
  currentFunction = hub_good_bum4
  setCookie("ccurrentFunction", currentFunction)
  setCookie("ccreigAskGood2", creigAskGood2)
}
function hub_good_bum5() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_booze(1)
  if (booze === 0) {
    $("#booze span").remove()
  }
  creigDrunked = true
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_78.jpg")
  } else {
    change_image("img/revenge/pic_78a.jpg")
  }
  change_text(
    '<p>В голове смердящего <span class="yes">бомжа</span> явно боролись между собой две мысли. Одна говорила: "Не пей - козлёночком станешь!" Что говорила вторая, было не важно, так как <span class="yes">бродяга</span> не оставил ей ни одного шанса, осушив бутыль огненной воды практически залпом.</p><p>Победно икнув, <span class="yes">нищий</span> упал без чувств обратно на ворох соломы. Теперь до <span class="yes">завтрашнего утра</span> Вы его точно не добудитесь.</p>'
  )
  change_buttons({ "Отойти от бездомного": hub_downtown1 })
  currentFunction = hub_good_bum5
  setCookie("ccurrentFunction", currentFunction)
  setCookie("ccreigDrunked", creigDrunked)
}
function hub_good_bum6() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_79.jpg")
  } else {
    change_image("img/revenge/pic_79a.jpg")
  }
  change_text(
    '<p>- Да что ж не понятного? - <span class="yes">Крейг</span> почесал подмышку. В этот момент у Вас потемнело в глазах. - Мне нужно поселиться где-нибудь. Но кто меня примет в таком состоянии? Нужно, чтобы кто-то предоставил возможность мне <span class="yes">сначала помыться</span>, а потом уже решать <span class="yes">вопрос с жильём</span>. Вот вроде бы и всё. Но я буду безмерно счастлив и благодарен тебе.</p>'
  )
  change_buttons({
    "Ладно, ладно. Подумаю чем тебе помочь. Ох! Ну, и вонь!": hub_downtown1,
  })
  currentFunction = hub_good_bum6
  setCookie("ccurrentFunction", currentFunction)
}
function hub_good_bum7() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_79.jpg")
  } else {
    change_image("img/revenge/pic_79a.jpg")
  }
  change_text(
    '<p>- Ну, <span class="yes">Крейг</span>, жизнь-то налаживается! – оптимистично заявили Вы. – <span class="yes">Бэт</span> – хозяйка <span class="yes">Оружейного Магазина</span> – любезно согласилась предоставить тебе свою ванную. Так что собирайся – пойдём исправлять твой запах.</p><p>- Это вос-хи-ти-те-ль-но, - протянул <span class="yes">бездомный</span>. Затем, помявшись, сказал. – Тут такое дело… Мы практически на пороге моей новой жизни. Спасибо тебе за то, что так стараешься. Но без подъёмных мне не протянуть. Всё окажется напрасным, если я снова окажусь на улице без денег. Я посчитал, <span class="yes">100 крышек</span> вполне могут покрыть мои расходы на ближайшее время, а там дальше я выкручусь. Это последняя просьба, честное слово! Поможешь?</p>'
  )
  if (caps > 99) {
    change_buttons({
      "Держи свои 100 крышек. Теперь пойдём к Бэт.": hub_mainQuestGood,
      "Избить Крейга": hub_bad_bum2,
      "100 крышек это слишком большая сумма. Я думаю тебе придётся пожить на улице ещё некоторое время.":
        hub_downtown1,
    })
  } else {
    change_buttons({
      "Избить Крейга": hub_bad_bum2,
      "100 крышек это слишком большая сумма. Я думаю тебе придётся пожить на улице ещё некоторое время.":
        hub_downtown1,
    })
  }
  currentFunction = hub_good_bum7
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_bum() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  creigFirstMeetBad = true
  lower_health(20)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_80.jpg")
  } else {
    change_image("img/revenge/pic_80a.jpg")
  }
  change_text(
    '<p>Такую смердячую тварь Вы встретили впервые. Не сдержав отвращения, Вы харкнули <span class="yes">бомжу</span> прямо в морду и  врезали ему от души ногой.</p><p><span class="yes">Нищий</span> не растерялся и плюнул в Вас. На секунду Вам показалось, что Вашу кожу проедает соляная кислота. Рассвирепев, Вы принялись избивать несчастного бездомного всем что подворачивалось под руку.</p><p>На его жалобные крики прибежали <span class="yes">постовые</span> и принялись Вас оттаскивать от него. В этой потасовке Вы случайно врезали по морде <span class="yes">одному</span> из <span class="yes">них</span>. Тут уж они церемониться с Вами не стали. Достав дубинки, <span class="yes">полицейские</span> отметелили Вас и потащили в местную <span class="yes">тюрьму</span>.</p>'
  )
  change_buttons({ "Потерять создание": hub_bad_jail })
  currentFunction = hub_bad_bum
  setCookie("ccurrentFunction", currentFunction)
  setCookie("ccreigFirstMeetBad", creigFirstMeetBad)
}
function hub_bad_bum1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  creigFirstMeetBad = true
  lower_health(20)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_80.jpg")
  } else {
    change_image("img/revenge/pic_80a.jpg")
  }
  change_text(
    '<p>Не сдержав отвращения, Вы харкнули <span class="yes">бомжу</span> прямо в морду и  врезали ему от души ногой.</p><p><span class="yes">Нищий</span> не растерялся и плюнул в Вас. На секунду Вам показалось, что Вашу кожу проедает соляная кислота. Рассвирепев, Вы принялись избивать несчастного бездомного всем что подворачивалось под руку.</p><p>На его жалобные крики прибежали <span class="yes">постовые</span> и принялись Вас оттаскивать от него. В этой потасовке Вы случайно врезали по морде <span class="yes">одному</span> из <span class="yes">них</span>. Тут уж они церемониться с Вами не стали. Достав дубинки, <span class="yes">полицейские</span> отметелили Вас и потащили в местную <span class="yes">тюрьму</span>.</p>'
  )
  change_buttons({ "Потерять создание": hub_bad_jail })
  currentFunction = hub_bad_bum1
  setCookie("ccurrentFunction", currentFunction)
  setCookie("ccreigFirstMeetBad", creigFirstMeetBad)
}
function hub_bad_bum2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  creigFirstMeetBad = true
  lower_health(20)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_80.jpg")
  } else {
    change_image("img/revenge/pic_80a.jpg")
  }
  change_text(
    '<p>Не сдержавшись, Вы принялись избивать несчастного <span class="yes">Крейга</span> всем что подворачивалось под руку.</p><p>На его жалобные крики прибежали <span class="yes">постовые</span> и принялись Вас оттаскивать от него. В этой потасовке Вы случайно врезали по морде <span class="yes">одному</span> из <span class="yes">них</span>. Тут уж они церемониться с Вами не стали. Достав дубинки, <span class="yes">полицейские</span> отметелили Вас и потащили в местную <span class="yes">тюрьму</span>.</p>'
  )
  change_buttons({ "Потерять создание": hub_bad_jail })
  currentFunction = hub_bad_bum2
  setCookie("ccurrentFunction", currentFunction)
  setCookie("ccreigFirstMeetBad", creigFirstMeetBad)
}
function hub_Kreig() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_116.jpg")
  change_text(
    '<p><span class="yes">Крейг</span> стоял посреди загона для браминов и черпал коровьи лепёшки лопатой.</p><p>- Привет, дружище, - обрадовался <span class="yes">Крейг</span>, увидев Вас. – Видишь, как и обещал, я устроился на работу в <span class="yes">«Красный Караван»</span>. Пока ухаживаю за браминами. Однако за эту работу <span class="yes">платят неплохо</span>, дают сменную одежду и душ есть. Я счастлив. Вот подкоплю деньжат, да куплю снаряжение – буду ходить с караванами. Спасибо тебе ещё раз!</p>'
  )
  change_buttons({
    "Рад, что у тебя всё в порядке. Береги себя, Крейг.": hub_downtown1,
  })
  currentFunction = hub_Kreig
  setCookie("ccurrentFunction", currentFunction)
}

/* Пост Охраны */
function hub_downtownGuard() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_81.jpg")
  } else {
    change_image("img/revenge/pic_81a.jpg")
  }
  if (goToJail === true) {
    change_text(
      '<p>Перед Вами стояли суровые <span class="yes">стражники</span>. Всем своим видом они показывали, что с ними шутки плохи. Они зорко следили за толпой и глазами искали нарушителей.</p><p>Прошлая встреча с полицией закончилась настолько плохо, что Вам и в старости будут напоминать о себе ушибленные почки.</p>'
    )
    change_buttons({ "Обойти полицейских десятой дорогой": hub_downtown1 })
  } else {
    if (sheriffGreeneSecondTask === true) {
      change_text(
        '<p>Перед Вами стояли суровые <span class="yes">стражники</span>. Всем своим видом они показывали, что с ними шутки плохи. Они зорко следили за толпой и глазами искали нарушителей.</p><p>Завидев Вас, <span class="yes">полицейские</span> приветливо улыбнулись и взяли под козырёк.</p>'
      )
      change_buttons({
        "Помахать служивым рукой и пойти дальше": hub_downtown1,
      })
    } else {
      change_text(
        '<p>Перед Вами стояли суровые <span class="yes">стражники</span>. Всем своим видом они показывали, что с ними шутки плохи. Они зорко следили за толпой и глазами искали нарушителей.</p>'
      )
      change_buttons({
        "Поздороваться и узнать о местных событиях": hub_downtownGuard1,
        "Доложить о преступлении": hub_downtownGuard2,
        "Уйти от греха подальше": hub_downtown1,
      })
    }
  }
  currentFunction = hub_downtownGuard
  setCookie("ccurrentFunction", currentFunction)
}
function hub_downtownGuard1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_81.jpg")
  } else {
    change_image("img/revenge/pic_81a.jpg")
  }
  change_text(
    '<p>Вы вежливо поздоровались с наименее, как Вам показалось, суровым <span class="yes">полицейским</span> и спросили его о том что происходит в городе.</p><p><span class="yes">Страж</span>, не обратил никакого внимания на Вашу вежливость и процедил:</p><p>- Мы на службе иди в <span class="yes">Центр</span> и там доставай людей.</p><p>После этого он посмотрел на Вас такими глазами, что Вы слегка попятились назад.</p>'
  )
  change_buttons({ "Уйти от греха подальше": hub_downtown1 })
  currentFunction = hub_downtownGuard1
  setCookie("ccurrentFunction", currentFunction)
}
function hub_downtownGuard2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_81.jpg")
  } else {
    change_image("img/revenge/pic_81a.jpg")
  }
  if (guardBasters === false) {
    change_text(
      '<p>Сделав круглые глаза, Вы подскочили к <span class="yes">полицейским</span> и начали шептать:</p><p>- Преступление! Я хочу сообщить о преступлении.</p><p><span class="yes">Стражи порядка</span> внимательно посмотрели на Вас. <span class="yes">Один</span> из них вкрадчиво поинтересовался:</p><p>- О чём ты нам хочешь сообщить путник?</p>'
    )
  } else {
    change_text(
      '<p>Сделав круглые глаза, Вы подскочили к <span class="yes">полицейским</span> и начали шептать:</p><p>- Преступление! Я хочу сообщить о преступлении.</p><p><span class="yes">Стражи порядка</span> внимательно посмотрели на Вас. <span class="yes">Один</span> из них прорычал:</p><p>- Если ещё раз «ни о каком», то учти что тебе это дорого обойдётся.</p>'
    )
  }
  if ((deckerQuest === false) & (guardBasters === false)) {
    change_buttons({ "Да собственно ни о каком...": hub_downtownGuard4 })
  } else if ((deckerQuest === false) & (guardBasters === true)) {
    change_buttons({ "Да собственно ни о каком...": hub_downtownGuard5 })
  } else if ((deckerQuest === true) & (guardBasters === false)) {
    change_buttons({
      "Декер нанял меня для убийства полицейского!": hub_downtownGuard3,
      "Да собственно ни о каком...": hub_downtownGuard4,
    })
  } else if ((deckerQuest === true) & (guardBasters === true)) {
    change_buttons({
      "Декер нанял меня для убийства полицейского!": hub_downtownGuard3,
      "Да собственно ни о каком...": hub_downtownGuard5,
    })
  }
  currentFunction = hub_downtownGuard2
  setCookie("ccurrentFunction", currentFunction)
}
function hub_downtownGuard3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_81.jpg")
  } else {
    change_image("img/revenge/pic_81a.jpg")
  }
  change_text(
    '<p>Тихо ты! – <span class="yes">постовые</span> обступили Вас со всех сторон. - Сейчас мы отправляемся к <span class="yes">шерифу Грину</span>. Это информация только для него. Идём, быстро!</p><p>Ничего не поделаешь – Вам придётся идти к <span class="yes">шерифу</span> города и выкладываться всё как есть.</p>'
  )
  change_buttons({
    "Идти за полицейскими": restart,
  }) /* Не стал прорабатывать эту ветку */
  currentFunction = hub_downtownGuard3
  setCookie("ccurrentFunction", currentFunction)
}
function hub_downtownGuard4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  guardBasters = true
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_81.jpg")
  } else {
    change_image("img/revenge/pic_81a.jpg")
  }
  change_text(
    '<p>Потупив глаза, Вы промямлили:</p><p>- Да собственно ни о каком…</p><p><span class="yes">Страж</span> нахмурился:</p><p>- Ну, тогда катись к дьяволу отсюда, пока мы тебе все рёбра не пересчитали! Попробуй ещё раз так пошутить.</p>'
  )
  change_buttons({ "Уйти от греха подальше": hub_downtown1 })
  currentFunction = hub_downtownGuard4
  setCookie("ccurrentFunction", currentFunction)
}
function hub_downtownGuard5() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_health(20)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_82.jpg")
  } else {
    change_image("img/revenge/pic_82a.jpg")
  }
  change_text(
    '<p>Вы сделали наивное лицо и ещё раз продекламировали:</p><p>- Да собственно ни о каком!</p><p>В следующую секунду Вам в челюсть прилетел мощный удар от того <span class="yes">стража</span>, который Вам с самого начала показался наименее агрессивным. Повалив Вас на землю, эти трое принялись молотить Вас дубинками, а после, скрутив Вам руки, потащили Вас в местное <span class="yes">отделение полиции</span>.</p>'
  )
  change_buttons({ "Потерять создание": hub_bad_jail })
  currentFunction = hub_downtownGuard5
  setCookie("ccurrentFunction", currentFunction)
}

/* Центр города */
function hub_center() {
  /* Дубликат для перемещения из Пригорода и обратно (больше времени на перемещение) */ $(
    "body,html"
  ).animate({ scrollTop: 0 }, 800)
  if ((time >= 2) & (time <= 6)) {
    if (killDon === true) {
      change_image("img/revenge/pic_169.jpg")
      change_text(
        '<p>Вы шли по улице, когда Вас остановил <span class="yes">отряд полиции</span>.</p><p>- Стой, путник, ты задержан, - рявкнул один из них.</p><p>В мгновение ока Вы оказались в наручниках. Вас привели в <span class="yes">отдел полиции</span>, где один из присутствующих <span class="yes">горожан</span> узнал Ваше лицо.</p><p>- Это он, - закричал он, указывая на Вас пальцем. - Он один из тех, кто заходил в здание <span class="yes">склада</span>!</p>'
      )
      change_buttons({ "Вы попались!": hub_mainQuestBad13 })
    } else {
      change_image("img/revenge/pic_169.jpg")
      change_text(
        '<p>Внезапно Вы почувствовали тяжёлую руку на своём плече. Оглянувшись, Вы увидели высокого <span class="yes">полицейского</span> в зелёной форме.</p><p>- Чего ты шляешься среди <span class="yes">ночи</span>, - довольно грубо спросил у Вас <span class="yes">патрульный</span>. – Ты разве не знаешь, что бродить по городу ночью <span class="yes">запрещено</span>. <span class="yes">Шериф</span> расценивает это как бродяжничество или злоумышление. У тебя, что, нет <span class="yes">денег</span> для того, чтобы переночевать в <span class="yes">отеле</span>?</p><p>Вид его был грозен.</p>'
      )
      if ((caps > 69) & (rentRoom === true)) {
        change_buttons({
          "Вот ключ от моего номера в отеле, офицер. Просто я задержался.":
            nightPatrol,
          "Что Вы, офицер! У меня достаточно денег. Я не бродяга!":
            nightPatrol1,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps > 69) & (rentRoom === false)) {
        change_buttons({
          "Что Вы, офицер! У меня достаточно денег. Я не бродяга!":
            nightPatrol1,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps < 70) & (rentRoom === true)) {
        change_buttons({
          "Вот ключ от моего номера в отеле, офицер. Просто я задержался.":
            nightPatrol,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps < 70) & (rentRoom === false)) {
        change_buttons({
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      }
    }
  } else {
    change_time(2)
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_83.jpg")
      change_text(
        '<p>Вы в <span class="yes">Центре города</span>. Люди снуют повсюду. Тут расположены такие важные места как <span class="yes">Оружейный Магазин</span>, <span class="yes">отель-бар «Мальтийский Сокол»</span>, <span class="yes">компания «Красный Караван»</span>, <span class="yes">компания «Дальнобойщики»</span> и множество прочих зданий. К востоку от Центра – <span class="yes">Старый Город</span>, по дороге к нему – <span class="yes">Офис Шерифа</span>, на юге расположен офис <span class="yes">Торговцев Водой</span>. На площади стоит палатка <span class="yes">«Шашлычная Боба»</span>. Мясом пахнет на всю округу!</p>'
      )
    } else {
      change_image("img/revenge/pic_83a.jpg")
      change_text(
        '<p>Вы в <span class="yes">Центре города</span>. Люди снуют повсюду. Тут расположены такие важные места как <span class="yes">Оружейный Магазин</span>, <span class="yes">отель-бар «Мальтийский Сокол»</span>, <span class="yes">компания «Красный Караван»</span>, <span class="yes">компания «Дальнобойщики»</span> и множество прочих зданий. К востоку от Центра – <span class="yes">Старый Город</span>, по дороге к нему – <span class="yes">Офис Шерифа</span>, на юге расположен офис <span class="yes">Торговцев Водой</span>. На площади стоит палатка <span class="yes">«Шашлычная Боба»</span>.</p>'
      )
    }
    change_buttons({
      "Зайти в Оружейный Магазин": hub_gunShop,
      "Зайти в бар «Мальтийский Сокол»": hub_MalteseFalcon,
      "Пройти в офис компании «Красный Караван»": crimsonCaravan,
      "Пройти в офис компании «Дальнобойщики»": farGo,
      "Перейти в район Старый Город": oldTown,
      "Пройти в Офис Шерифа": hub_sheriffGreene,
      "Подойти к палатке Боба": iguanaBob,
      "Пройти в офис Торговцев Водой": waterMerchants,
      "Перейти в район Пригород": hub_downtown,
    })
  }
  currentFunction = hub_center
  setCookie("ccurrentFunction", currentFunction)
}
function hub_center1() {
  /* Дубликат для перемещения по Центру Города*/ $("body,html").animate(
    { scrollTop: 0 },
    800
  )
  if ((time >= 2) & (time <= 6)) {
    if (killDon === true) {
      change_image("img/revenge/pic_169.jpg")
      change_text(
        '<p>Вы шли по улице, когда Вас остановил <span class="yes">отряд полиции</span>.</p><p>- Стой, путник, ты задержан, - рявкнул один из них.</p><p>В мгновение ока Вы оказались в наручниках. Вас привели в <span class="yes">отдел полиции</span>, где один из присутствующих <span class="yes">горожан</span> узнал Ваше лицо.</p><p>- Это он, - закричал он, указывая на Вас пальцем. - Он один из тех, кто заходил в здание <span class="yes">склада</span>!</p>'
      )
      change_buttons({ "Вы попались!": hub_mainQuestBad13 })
    } else {
      change_image("img/revenge/pic_169.jpg")
      change_text(
        '<p>Внезапно Вы почувствовали тяжёлую руку на своём плече. Оглянувшись, Вы увидели высокого <span class="yes">полицейского</span> в зелёной форме.</p><p>- Чего ты шляешься среди <span class="yes">ночи</span>, - довольно грубо спросил у Вас <span class="yes">патрульный</span>. – Ты разве не знаешь, что бродить по городу ночью <span class="yes">запрещено</span>. <span class="yes">Шериф</span> расценивает это как бродяжничество или злоумышление. У тебя, что, нет <span class="yes">денег</span> для того, чтобы переночевать в <span class="yes">отеле</span>?</p><p>Вид его был грозен.</p>'
      )
      if ((caps > 69) & (rentRoom === true)) {
        change_buttons({
          "Вот ключ от моего номера в отеле, офицер. Просто я задержался.":
            nightPatrol,
          "Что Вы, офицер! У меня достаточно денег. Я не бродяга!":
            nightPatrol1,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps > 69) & (rentRoom === false)) {
        change_buttons({
          "Что Вы, офицер! У меня достаточно денег. Я не бродяга!":
            nightPatrol1,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps < 70) & (rentRoom === true)) {
        change_buttons({
          "Вот ключ от моего номера в отеле, офицер. Просто я задержался.":
            nightPatrol,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps < 70) & (rentRoom === false)) {
        change_buttons({
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      }
    }
  } else {
    change_time(1)
    if (drunkardStatus === 3) {
      if ((time < 19) & (time > 6.5)) {
        change_image("img/revenge/pic_165.jpg")
      } else {
        change_image("img/revenge/pic_165a.jpg")
      }
      change_text(
        '<p>Вы вышли на свежий воздух и Вас совершенно разморило.</p><p>Вы присели на лавочку недалеко от <span class="yes">бара</span>. Через некоторое время Вас стало клонить в сон</p>'
      )
      change_buttons({ Уснуть: hub_MalteseFalcon_Drunkard3 })
    } else {
      if ((time < 19) & (time > 6.5)) {
        change_image("img/revenge/pic_83.jpg")
        change_text(
          '<p>Вы в <span class="yes">Центре города</span>. Люди снуют повсюду. Тут расположены такие важные места как <span class="yes">Оружейный Магазин</span>, <span class="yes">отель-бар «Мальтийский Сокол»</span>, <span class="yes">компания «Красный Караван»</span>, <span class="yes">компания «Дальнобойщики»</span> и множество прочих зданий. К востоку от Центра – <span class="yes">Старый Город</span>, по дороге к нему – <span class="yes">Офис Шерифа</span>, на юге расположен офис <span class="yes">Торговцев Водой</span>. На площади стоит палатка <span class="yes">«Шашлычная Боба»</span>. Мясом пахнет на всю округу!</p>'
        )
      } else {
        change_image("img/revenge/pic_83a.jpg")
        change_text(
          '<p>Вы в <span class="yes">Центре города</span>. Уже темно. На улицах людей уже не так много. Тут расположены такие важные места как <span class="yes">Оружейный Магазин</span>, <span class="yes">отель-бар «Мальтийский Сокол»</span>, <span class="yes">компания «Красный Караван»</span>, <span class="yes">компания «Дальнобойщики»</span> и множество прочих зданий. К востоку от Центра – <span class="yes">Старый Город</span>, по дороге к нему – <span class="yes">Офис Шерифа</span>, на юге расположен офис <span class="yes">Торговцев Водой</span>. На площади стоит палатка <span class="yes">«Шашлычная Боба»</span>.</p>'
        )
      }
      change_buttons({
        "Зайти в Оружейный Магазин": hub_gunShop,
        "Зайти в бар «Мальтийский Сокол»": hub_MalteseFalcon,
        "Пройти в офис компании «Красный Караван»": crimsonCaravan,
        "Пройти в офис компании «Дальнобойщики»": farGo,
        "Перейти в район Старый Город": oldTown,
        "Пройти в Офис Шерифа": hub_sheriffGreene,
        "Подойти к палатке Боба": iguanaBob,
        "Пройти в офис Торговцев Водой": waterMerchants,
        "Перейти в район Пригород": hub_downtown,
      })
    }
  }
  currentFunction = hub_center1
  setCookie("ccurrentFunction", currentFunction)
}

function hub_center2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (inBadOldTownSecond === false) {
    change_image("img/revenge/pic_83a.jpg")
    change_text(
      '<p>Вы в <span class="yes">Центре города</span>. Уже темно. На улицах людей уже не так много. Тут расположены такие важные места как <span class="yes">Оружейный Магазин</span>, <span class="yes">отель-бар «Мальтийский Сокол»</span>, <span class="yes">компания «Красный Караван»</span>, <span class="yes">компания «Дальнобойщики»</span> и множество прочих зданий. К востоку от Центра – <span class="yes">Старый Город</span>, по дороге к нему – <span class="yes">Офис Шерифа</span>, на юге расположен офис <span class="yes">Торговцев Водой</span>. На площади стоит палатка <span class="yes">«Шашлычная Боба»</span>.</p>'
    )
    change_buttons({
      "Зайти в Оружейный Магазин": hub_gunShop,
      "Зайти в бар «Мальтийский Сокол»": hub_MalteseFalconBad,
      "Пройти в офис компании «Красный Караван»": crimsonCaravanBad,
      "Пройти в офис компании «Дальнобойщики»": farGoBad,
      "Перейти в район Старый Город": oldTownBad,
      "Пройти в Офис Шерифа": hub_sheriffGreene,
      "Подойти к палатке Боба": iguanaBobBad,
      "Пройти в офис Торговцев Водой": waterMerchantsBad,
      "Перейти в район Пригород": hub_downtownBad,
    })
  } else {
    change_image("img/revenge/pic_135.jpg")
    change_text(
      '<p>У Вас не вся ночь впереди! Нет времени бесцельно носиться по <span class="yes">городу</span>. Если промедлить ещё, то <span class="yes">заговорщики</span> разойдутся и возможность выполнить <span class="yes">задачу</span>, возложенную на Вас <span class="yes">Братством</span>, будет потеряна.</p><p>Пора действовать.</p>'
    )
    change_buttons({ "Проникнуть  в здание склада": hub_mainQuestBad })
  }
  currentFunction = hub_center2
  setCookie("ccurrentFunction", currentFunction)
}

/* Центр города - Магазин Оружия */
function hub_gunShop() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (time >= 20 || time < 9) {
    if ((bethFallInLove === true) & (meetSeed === false)) {
      change_image("img/revenge/pic_85a.jpg")
      change_text(
        '<p>Вы дёрнули за ручку двери <span class="yes">Оружейного Магазина</span>, однако дверь оказалась заперта. Красноречивая табличка "ЗАКРЫТО" в окошке слева от двери подтверждала этот факт. Ниже был указан график работы: с <span class="yes">9:00</span> до <span class="yes">20:00</span>.</p><p>Вам вдруг до ужаса захотелось увидеть <span class="yes">Бэт</span>. Вы обошли здание и заглянули в окно её спальни. Свет Луны освещал её крохотную комнатку. Её красивые волосы рассыпались по подушке, а на губах застыла улыбка. Вы не стали нарушать сон этого милого создания.</p>'
      )
      change_buttons({ "Отойти от окна": hub_center1 })
    } else {
      change_image("img/revenge/pic_85.jpg")
      change_text(
        '<p>Вы дёрнули за ручку двери <span class="yes">Оружейного Магазина</span>, однако дверь оказалась заперта. Красноречивая табличка "ЗАКРЫТО" в окошке слева от двери подтверждала этот факт. Ниже был указан график работы: с <span class="yes">9:00</span> до <span class="yes">20:00</span>.</p><p>Ничего не попишешь, придётся ждать открытия до <span class="yes">завтра</span>.</p>'
      )
      change_buttons({ "Отойти от двери магазина": hub_center1 })
    }
  } else {
    if (bethFallInLove === true) {
      if (meetSeed === false) {
        meetSeed = true
        setCookie("cmeetSeed", meetSeed)
        change_image("img/revenge/pic_84a.jpg")
        change_text(
          '<p>Вы оказались внутри небольшого оружейного магазинчика. <span class="yes">Бэт</span> нигде не видно.</p><p>Вместо неё за прилавком стоял <span class="yes">приветливый парень</span>.</p><p>- Привет, - поздоровался паренёк с Вами. - Ты, наверное, <span class="yes">' +
            heroName +
            '?</span></p><p>Вы утвердительно кивнули и нахмурились.</p><p><span class="yes">Парень</span> заметил Вашу реакцию и засмеялся:</p><p>- Да не напрягайся ты так! Я - <span class="yes">Сид</span>. Охранник склада. <span class="yes">Бэтти</span> уехала сегодня рано утром в <span class="yes">Могильник</span>. Город такой на юге. Через две-три недели вернётся. Она просила тебе передать <span class="yes">записку</span>.</p><p><span class="yes">Сид</span> отдал Вам конверт.</p><p>- А, да... <span class="yes">Магазин</span>, пока <span class="yes">Бэт</span> не вернётся, работать не будет, - сказал Вам <span class="yes">охранник</span>. </p>'
        )
        change_buttons({ "Прочитать письмо": bethLetter })
      } else {
        change_image("img/revenge/pic_84b.jpg")
        change_text(
          '<p>Вы дёрнули за ручку двери <span class="yes">Оружейного Магазина</span>, однако дверь оказалась заперта. Красноречивая табличка "ЗАКРЫТО" в окошке слева от двери подтверждала этот факт. <span class="yes">Бэтти</span> уехала и вернётся не скоро.</p>'
        )
        change_buttons({ "Отойти от дверей магазина": hub_center1 })
      }
    } else {
      if (time < 19) {
        change_image("img/revenge/pic_84.jpg")
      } else {
        change_image("img/revenge/pic_84d.jpg")
      }
      if (bethFirstMeeting === false) {
        change_text(
          '<p>Вы оказались внутри небольшого оружейного магазинчика. Хозяйка <span class="yes">Бэт</span> - девушка, ослепляющая своей красотой - встретила Вас с добродушной улыбкой.</p><p>- Добрый день, пилигрим! К сожалению, с поставками товара последнее время не очень. Всё моё оружие уже предоплачено. Остался вот только <span class="yes">пистолет</span> за <span class="yes">400 крышек</span> и <span class="yes">глушитель</span> для него за <span class="yes">60</span>. Будешь брать? А то, давай поболтаем! </p>'
        )
      } else {
        change_text(
          '<p>Вы оказались внутри небольшого оружейного магазинчика. Хозяйка <span class="yes">Бэт</span> - девушка, ослепляющая своей красотой - встретила Вас с добродушной улыбкой.</p><p>- Привет! Рада снова видеть тебя. С товаром у меня по прежнему не густо, зато поболтать я всегда рада!</p>'
        )
      }
      bethFirstMeeting = true
      setCookie("cbethFirstMeeting", bethFirstMeeting)
      if ((caps > 399) & (getPistol === false) & (getHubSilencer === false)) {
        if (changeHubLocation === false) {
          change_buttons({
            "Я возьму пистолет за 400 крышек": hub_gunShop_Pistol,
            "Глушитель за 60? Беру!": hub_gunShop_Silencer,
            "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
            "Не в настроении я болтать… Зайду попозже.": hub_center1,
          })
        } else {
          change_buttons({
            "Я возьму пистолет за 400 крышек": hub_gunShop_Pistol,
            "Глушитель за 60? Беру!": hub_gunShop_Silencer,
            "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
            "Не в настроении я болтать… Зайду попозже.": hub_center2,
          })
        }
      } else if (
        (caps > 399) &
        (getPistol === false) &
        (getHubSilencer === true)
      ) {
        if (changeHubLocation === false) {
          change_buttons({
            "Я возьму пистолет за 400 крышек": hub_gunShop_Pistol,
            "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
            "Не в настроении я болтать… Зайду попозже.": hub_center1,
          })
        } else {
          change_buttons({
            "Я возьму пистолет за 400 крышек": hub_gunShop_Pistol,
            "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
            "Не в настроении я болтать… Зайду попозже.": hub_center2,
          })
        }
      } else if (
        (caps > 399) &
        (getPistol === true) &
        (getHubSilencer === false)
      ) {
        if (changeHubLocation === false) {
          change_buttons({
            "Глушитель за 60? Беру!": hub_gunShop_Silencer,
            "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
            "Не в настроении я болтать… Зайду попозже.": hub_center1,
          })
        } else {
          change_buttons({
            "Глушитель за 60? Беру!": hub_gunShop_Silencer,
            "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
            "Не в настроении я болтать… Зайду попозже.": hub_center2,
          })
        }
      } else if (
        (caps > 399) &
        (getPistol === true) &
        (getHubSilencer === true)
      ) {
        if (changeHubLocation === false) {
          change_buttons({
            "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
            "Не в настроении я болтать… Зайду попозже.": hub_center1,
          })
        } else {
          change_buttons({
            "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
            "Не в настроении я болтать… Зайду попозже.": hub_center2,
          })
        }
      } else if ((caps < 400) & (caps > 59) & (getHubSilencer === false)) {
        if (changeHubLocation === false) {
          change_buttons({
            "Глушитель за 60? Беру!": hub_gunShop_Silencer,
            "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
            "Не в настроении я болтать… Зайду попозже.": hub_center1,
          })
        } else {
          change_buttons({
            "Глушитель за 60? Беру!": hub_gunShop_Silencer,
            "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
            "Не в настроении я болтать… Зайду попозже.": hub_center2,
          })
        }
      } else if ((caps < 400) & (caps > 59) & (getHubSilencer === true)) {
        if (changeHubLocation === false) {
          change_buttons({
            "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
            "Не в настроении я болтать… Зайду попозже.": hub_center1,
          })
        } else {
          change_buttons({
            "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
            "Не в настроении я болтать… Зайду попозже.": hub_center2,
          })
        }
      } else if (caps < 60) {
        if (changeHubLocation === false) {
          change_buttons({
            "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
            "Не в настроении я болтать… Зайду попозже.": hub_center1,
          })
        } else {
          change_buttons({
            "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
            "Не в настроении я болтать… Зайду попозже.": hub_center2,
          })
        }
      }
    }
  }
  currentFunction = hub_gunShop
  setCookie("ccurrentFunction", currentFunction)
}
function hub_gunShop_Pistol() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  getPistol = true
  pistol_ammo += 24
  change_gun()
  lower_caps(400)
  change_image("img/revenge/pic_86.jpg")
  change_text(
    '<p>- <span class="yes">Пистолет</span> калибра 10мм. - <span class="yes">Бэт</span> нырнула под прилавок и мгновенно вылезла обратно, держа в руках ствол.</p><p>Я заверну ещё два магазина с <span class="yes">24 патронами</span> в подарок! Только не убивай никого, ладно? Будь лапочкой! Ещё что-то?</p>'
  )
  if ((caps > 59) & (getHubSilencer === false)) {
    if (changeHubLocation === false) {
      change_buttons({
        "Глушитель за 60? Беру!": hub_gunShop_Silencer,
        "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
        "Не в настроении я болтать… Зайду попозже.": hub_center1,
      })
    } else {
      change_buttons({
        "Глушитель за 60? Беру!": hub_gunShop_Silencer,
        "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
        "Не в настроении я болтать… Зайду попозже.": hub_center2,
      })
    }
  } else if ((caps > 59) & (getHubSilencer === true)) {
    if (changeHubLocation === false) {
      change_buttons({
        "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
        "Не в настроении я болтать… Зайду попозже.": hub_center1,
      })
    } else {
      change_buttons({
        "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
        "Не в настроении я болтать… Зайду попозже.": hub_center2,
      })
    }
  } else if (caps < 60) {
    if (changeHubLocation === false) {
      change_buttons({
        "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
        "Не в настроении я болтать… Зайду попозже.": hub_center1,
      })
    } else {
      change_buttons({
        "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
        "Не в настроении я болтать… Зайду попозже.": hub_center2,
      })
    }
  }
  currentFunction = hub_gunShop_Pistol
  setCookie("ccurrentFunction", currentFunction)
}
function hub_gunShop_Silencer() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  getHubSilencer = true
  change_gun()
  lower_caps(60)
  change_image("img/revenge/pic_86.jpg")
  change_text(
    '<p><span class="yes">Бэт</span> принялась перерывать полки с товаром позади себя. Быстро найти <span class="yes">глушитель</span> не удалось. Через какое-то время она стала насвистывать весёлый мотивчик.</p><p>- Раз пошли на дело, выпить захотелось… Ага, вот твой <span class="yes">глушитель</span>. Последний. Товар редкий, вряд ли скоро ещё будет. Поболтаем?</p>'
  )
  if ((caps > 399) & (getPistol === false)) {
    if (changeHubLocation === false) {
      change_buttons({
        "Подожди с болтовнёй, красавица! Я возьму ещё пистолет за 400 крышек":
          hub_gunShop_Pistol,
        "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
        "Не в настроении я болтать… Зайду попозже.": hub_center1,
      })
    } else {
      change_buttons({
        "Подожди с болтовнёй, красавица! Я возьму ещё пистолет за 400 крышек":
          hub_gunShop_Pistol,
        "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
        "Не в настроении я болтать… Зайду попозже.": hub_center2,
      })
    }
  } else if ((caps > 399) & (getPistol === true)) {
    if (changeHubLocation === false) {
      change_buttons({
        "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
        "Не в настроении я болтать… Зайду попозже.": hub_center1,
      })
    } else {
      change_buttons({
        "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
        "Не в настроении я болтать… Зайду попозже.": hub_center2,
      })
    }
  } else if (caps < 400) {
    if (changeHubLocation === false) {
      change_buttons({
        "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
        "Не в настроении я болтать… Зайду попозже.": hub_center1,
      })
    } else {
      change_buttons({
        "Давай поболтаем! Что расскажешь?": hub_gunShop_beth,
        "Не в настроении я болтать… Зайду попозже.": hub_center2,
      })
    }
  }
  currentFunction = hub_gunShop_Silencer
  setCookie("ccurrentFunction", currentFunction)
}
function hub_gunShop_beth() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_86.jpg")
  change_text(
    '<p>- О! - радостно воскликнула <span class="yes">Бэт</span>. - Ну, смотри, у нас тут много чего происходит: появился <span class="yes">бездомный</span>, <span class="yes">шериф</span> этому не обрадован. <span class="yes">Караванщики</span> перестали нанимать новых охранников. <span class="yes">Торговцы водой</span> ищут новые рынки для сбыта. <span class="yes">Декер</span> и его банда держат город в своих лапах.</p><p>В общем не город, а кипящий котёл!</p>'
  )
  if ((creigAskGood2 === true) & (bethAgree === false)) {
    if (changeHubLocation === false) {
      change_buttons({
        "Расскажи о проблеме с бездомным?": hub_gunShop_beth2,
        "А я как раз по поводу этого бездомного хотел у тебя спросить... Нужно его отмыть, а помыться негде. Сделай доброе дело - надо организовать ему баню.":
          hub_gunShop_beth3,
        "Почему караванщики больше не принимаю новых охранников?":
          hub_gunShop_beth6,
        "Что там с Торговцами Водой?": hub_gunShop_beth7,
        "Что ты можешь рассказать о Декере?": hub_gunShop_beth8,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center1,
      })
    } else {
      change_buttons({
        "Расскажи о проблеме с бездомным?": hub_gunShop_beth2,
        "А я как раз по поводу этого бездомного хотел у тебя спросить... Нужно его отмыть, а помыться негде. Сделай доброе дело - надо организовать ему баню.":
          hub_gunShop_beth3,
        "Почему караванщики больше не принимаю новых охранников?":
          hub_gunShop_beth6,
        "Что там с Торговцами Водой?": hub_gunShop_beth7,
        "Что ты можешь рассказать о Декере?": hub_gunShop_beth8,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center2,
      })
    }
  } else if ((creigAskGood2 === true) & (bethAgree === true)) {
    if (changeHubLocation === false) {
      change_buttons({
        "Почему караванщики больше не принимаю новых охранников?":
          hub_gunShop_beth6,
        "Что там с Торговцами Водой?": hub_gunShop_beth7,
        "Что ты можешь рассказать о Декере?": hub_gunShop_beth8,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center1,
      })
    } else {
      change_buttons({
        "Почему караванщики больше не принимаю новых охранников?":
          hub_gunShop_beth6,
        "Что там с Торговцами Водой?": hub_gunShop_beth7,
        "Что ты можешь рассказать о Декере?": hub_gunShop_beth8,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center2,
      })
    }
  } else {
    if (changeHubLocation === false) {
      change_buttons({
        "Расскажи о проблеме с бездомным?": hub_gunShop_beth2,
        "Почему караванщики больше не принимаю новых охранников?":
          hub_gunShop_beth6,
        "Что там с Торговцами Водой?": hub_gunShop_beth7,
        "Что ты можешь рассказать о Декере?": hub_gunShop_beth8,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center1,
      })
    } else {
      change_buttons({
        "Расскажи о проблеме с бездомным?": hub_gunShop_beth2,
        "Почему караванщики больше не принимаю новых охранников?":
          hub_gunShop_beth6,
        "Что там с Торговцами Водой?": hub_gunShop_beth7,
        "Что ты можешь рассказать о Декере?": hub_gunShop_beth8,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center2,
      })
    }
  }
  currentFunction = hub_gunShop_beth
  setCookie("ccurrentFunction", currentFunction)
}
function hub_gunShop_beth1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_86.jpg")
  change_text(
    '<p>- Я вся превратилась в слух! - <span class="yes">Бэт</span> озорно вздёрнула бровки.</p>'
  )
  if ((creigAskGood2 === true) & (bethAgree === false)) {
    if (changeHubLocation === false) {
      change_buttons({
        "Расскажи о проблеме с бездомным?": hub_gunShop_beth2,
        "А я как раз по поводу этого бездомного хотел у тебя спросить... Нужно его отмыть, а помыться негде. Сделай доброе дело - надо организовать ему баню.":
          hub_gunShop_beth3,
        "Почему караванщики больше не принимаю новых охранников?":
          hub_gunShop_beth6,
        "Что там с Торговцами Водой?": hub_gunShop_beth7,
        "Что ты можешь рассказать о Декере?": hub_gunShop_beth8,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center1,
      })
    } else {
      change_buttons({
        "Расскажи о проблеме с бездомным?": hub_gunShop_beth2,
        "А я как раз по поводу этого бездомного хотел у тебя спросить... Нужно его отмыть, а помыться негде. Сделай доброе дело - надо организовать ему баню.":
          hub_gunShop_beth3,
        "Почему караванщики больше не принимаю новых охранников?":
          hub_gunShop_beth6,
        "Что там с Торговцами Водой?": hub_gunShop_beth7,
        "Что ты можешь рассказать о Декере?": hub_gunShop_beth8,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center2,
      })
    }
  } else if ((creigAskGood2 === true) & (bethAgree === true)) {
    if (changeHubLocation === false) {
      change_buttons({
        "Почему караванщики больше не принимаю новых охранников?":
          hub_gunShop_beth6,
        "Что там с Торговцами Водой?": hub_gunShop_beth7,
        "Что ты можешь рассказать о Декере?": hub_gunShop_beth8,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center1,
      })
    } else {
      change_buttons({
        "Почему караванщики больше не принимаю новых охранников?":
          hub_gunShop_beth6,
        "Что там с Торговцами Водой?": hub_gunShop_beth7,
        "Что ты можешь рассказать о Декере?": hub_gunShop_beth8,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center2,
      })
    }
  } else {
    if (changeHubLocation === false) {
      change_buttons({
        "Расскажи о проблеме с бездомным?": hub_gunShop_beth2,
        "Почему караванщики больше не принимаю новых охранников?":
          hub_gunShop_beth6,
        "Что там с Торговцами Водой?": hub_gunShop_beth7,
        "Что ты можешь рассказать о Декере?": hub_gunShop_beth8,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center1,
      })
    } else {
      change_buttons({
        "Расскажи о проблеме с бездомным?": hub_gunShop_beth2,
        "Почему караванщики больше не принимаю новых охранников?":
          hub_gunShop_beth6,
        "Что там с Торговцами Водой?": hub_gunShop_beth7,
        "Что ты можешь рассказать о Декере?": hub_gunShop_beth8,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center2,
      })
    }
  }
  currentFunction = hub_gunShop_beth1
  setCookie("ccurrentFunction", currentFunction)
}
function hub_gunShop_beth2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_86.jpg")
  change_text(
    '<p>- Появившийся <span class="yes">бездомный</span> стал настоящей занозой в заднице у <span class="yes">шерифа Грина</span>, - затараторила <span class="yes">Бэт</span>. – Он настолько дурно пахнет, что никто близко к нему не подходит. Почти постоянно пьян. Постоянно находится тот, кто наливает бедняжке снова и снова. Боюсь терпение <span class="yes">Грина</span> лопнет и он вышвырнет <span class="yes">бродягу</span> из города.</p>'
  )
  if ((creigAskGood2 === true) & (bethAgree === false)) {
    if (changeHubLocation === false) {
      change_buttons({
        "А я как раз по поводу этого бездомного к тебе с просьбой... Нужно его отмыть, а помыться негде. Сделай доброе дело - надо организовать ему баню.":
          hub_gunShop_beth3,
        "Жаль парня. Но я хотел бы спросить ещё одно, Бэт...":
          hub_gunShop_beth1,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center1,
      })
    } else {
      change_buttons({
        "А я как раз по поводу этого бездомного к тебе с просьбой... Нужно его отмыть, а помыться негде. Сделай доброе дело - надо организовать ему баню.":
          hub_gunShop_beth3,
        "Жаль парня. Но я хотел бы спросить ещё одно, Бэт...":
          hub_gunShop_beth1,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center2,
      })
    }
  } else {
    if (changeHubLocation === false) {
      change_buttons({
        "Жаль парня. Но я хотел бы спросить ещё одно, Бэт...":
          hub_gunShop_beth1,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center1,
      })
    } else {
      change_buttons({
        "Жаль парня. Но я хотел бы спросить ещё одно, Бэт...":
          hub_gunShop_beth1,
        "Мне пора бежать. Я ещё загляну к тебе.": hub_center2,
      })
    }
  }
  currentFunction = hub_gunShop_beth2
  setCookie("ccurrentFunction", currentFunction)
}
function hub_gunShop_beth3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_86.jpg")
  change_text(
    '<p>– С одной стороны это доброе дело. – задумалась <span class="yes">Бэт</span>. – С другой стороны это с моего согласия будет осквернена моя ванная? Ну, не знаю… Это ж такая вонища! Как потом отмывать это всё?</p><p>Девушка театрально закатила глаза.</p>'
  )
  if (changeHubLocation === false) {
    change_buttons({
      "Ну, нет - так нет. Но я хотел бы спросить ещё одно, Бэт...":
        hub_gunShop_beth1,
      "Бэт, он погибнет так. Ему нужно просто немного помочь! А там гляди, поднимется на ноги, да отплатит тебе добром.":
        hub_gunShop_beth4,
      "Ну, что ты не знаешь, дура, человеку плохо!": hub_gunShop_beth5,
      "Мне пора бежать. Я ещё загляну к тебе.": hub_center1,
    })
  } else {
    change_buttons({
      "Ну, нет - так нет. Но я хотел бы спросить ещё одно, Бэт...":
        hub_gunShop_beth1,
      "Бэт, он погибнет так. Ему нужно просто немного помочь! А там гляди, поднимется на ноги, да отплатит тебе добром.":
        hub_gunShop_beth4,
      "Ну, что ты не знаешь, дура, человеку плохо!": hub_gunShop_beth5,
      "Мне пора бежать. Я ещё загляну к тебе.": hub_center2,
    })
  }
  currentFunction = hub_gunShop_beth3
  setCookie("ccurrentFunction", currentFunction)
}
function hub_gunShop_beth4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  bethAgree = true
  change_image("img/revenge/pic_86.jpg")
  change_text(
    '<p>- Ну, хорошо! Но ты будешь сопровождать его и следить, чтобы он ничего не украл и не испортил. – <span class="yes">Бэт</span> поджала алые губки. – И ещё ты отмоешь ванную после него. Это моё последнее условие!</p>'
  )
  if (changeHubLocation === false) {
    change_buttons({
      "Ты просто ангел! Спасибо, но я хотел бы спросить ещё одно, Бэт...":
        hub_gunShop_beth1,
      "Спасибо! Ты просто ангел! Тогда жди нас. Мы скоро будем.": hub_center1,
    })
  } else {
    change_buttons({
      "Ты просто ангел! Спасибо, но я хотел бы спросить ещё одно, Бэт...":
        hub_gunShop_beth1,
      "Спасибо! Ты просто ангел! Тогда жди нас. Мы скоро будем.": hub_center2,
    })
  }
  currentFunction = hub_gunShop_beth4
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cbethAgree", bethAgree)
}
function hub_gunShop_beth5() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  bethDontLoveYou = true
  change_image("img/revenge/pic_87.jpg")
  change_text(
    '<p>- Знаешь что, козлина! – <span class="yes">Бэт</span> пришла в ярость. – Пошёл отсюда! И подумай, как с девушкой разговаривать в следующий раз. </p><p><span class="yes">Бэт</span> влепила Вам пощёчину.</p>'
  )
  if (changeHubLocation === false) {
    change_buttons({ "Оказаться на улице": hub_center1 })
  } else {
    change_buttons({ "Оказаться на улице": hub_center2 })
  }
  currentFunction = hub_gunShop_beth5
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cbethDontLoveYou", bethDontLoveYou)
}
function hub_gunShop_beth6() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_86.jpg")
  change_text(
    '<p>- Караванщики деньги считают, - хмыкнула <span class="yes">Бэт</span>. – Впрочем, и я тоже. Постоянные атаки рейдеров из <span class="yes">банды Гадюк</span> практически уничтожили торговлю с севером. Многие охранники остались без работы, а торговцы без новых товаров. Мы в кризисе. Ходят слухи, что кто-то сливает маршруты бандитам.</p><p><span class="yes">Бэт</span> на секунду задумалась и снова продолжила.</p><p>- Есть, однако, возможность подзароботать в городе. Боюсь только тебе не понравиться. - <span class="yes">Бэт</span>, снова сделала паузу, глядя то на Вас, то куда-то себе под ноги. Затем робко продолжила. - В общем <span class="yes">"Красному Каравану"</span> требуются <span class="yes">уборщики за браминами</span>. Деньги небольшие, но уж если совсем прижало.</p>'
  )
  if (changeHubLocation === false) {
    change_buttons({
      "Тю! Это лепёшки за коровами собирать, чтоль? У меня ещё вопрос к тебе, Бэт...":
        hub_gunShop_beth1,
      "Мне пора бежать. Я ещё загляну к тебе.": hub_center1,
    })
  } else {
    change_buttons({
      "Тю! Это лепёшки за коровами собирать, чтоль? У меня ещё вопрос к тебе, Бэт...":
        hub_gunShop_beth1,
      "Мне пора бежать. Я ещё загляну к тебе.": hub_center2,
    })
  }
  currentFunction = hub_gunShop_beth6
  setCookie("ccurrentFunction", currentFunction)
}
function hub_gunShop_beth7() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_86.jpg")
  change_text(
    '<p>- <span class="yes">Торговцы водой</span> были бандой, которая четверть века назад захватила водонапорные башни на юге города. Поскольку они стали монополистами на рынке воды в регионе, то стали диктовать другим жителям <span class="yes">Хаба</span> свои условия. В результате это всё вылилось в ряд  кровопролитных боёв, после чего выжившие члены банды согласились на перемирие и сотрудничество с другими организациями. Теперь они в числе прочих влиятельных организаций города входят в Городской Совет.</p><p>Кризис с атаками на караваны затронул и их в том числе. Теперь им нужны новые поселения для сбыта воды и товаров. Поищи <span class="yes">Марту</span> – она там за старшую.</p>'
  )
  if (changeHubLocation === false) {
    change_buttons({
      "Интересно... Но у меня ещё вопрос к тебе, Бэт...": hub_gunShop_beth1,
      "Мне пора бежать. Я ещё загляну к тебе.": hub_center1,
    })
  } else {
    change_buttons({
      "Интересно... Но у меня ещё вопрос к тебе, Бэт...": hub_gunShop_beth1,
      "Мне пора бежать. Я ещё загляну к тебе.": hub_center2,
    })
  }
  currentFunction = hub_gunShop_beth7
  setCookie("ccurrentFunction", currentFunction)
}
function hub_gunShop_beth8() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_86.jpg")
  change_text(
    '<p>- Подонок! Настоящий подонок! - <span class="yes">Бэт</span> стала говорить с Вами шёпотом. - Убил моего близкого друга – бывшего владельца <span class="yes">«Мальтийского сокола»</span>. Доказать это так и не смогли, но все знают что это его рук дело. Он всегда делает свои дела через людей, не живущих в <span class="yes">Хабе</span> постоянно. Как правило, те суммы, которые он предлагает, заставляют людей молчать о преступлении, на которое их подбивают. Держись от него подальше - мой тебе совет. Кроме горя и неприятностей этот человек ничего не несёт.</p>'
  )
  if (changeHubLocation === false) {
    change_buttons({
      "Ничего себе! Ещё одно, Бэт...": hub_gunShop_beth1,
      "Мне пора бежать. Я ещё загляну к тебе.": hub_center1,
    })
  } else {
    change_buttons({
      "Ничего себе! Ещё одно, Бэт...": hub_gunShop_beth1,
      "Мне пора бежать. Я ещё загляну к тебе.": hub_center2,
    })
  }
  currentFunction = hub_gunShop_beth8
  setCookie("ccurrentFunction", currentFunction)
}
function bethLetter() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_84c.jpg")
  change_text(
    '<p>Вы открыли <span class="yes">конверт</span> и увидели небольшую <span class="yes">записку</span> внутри. Ровным подчерком <span class="yes">Бэтти</span> писала Вам:</p><p>«Привет, дорогой! Так и не дождалась новой встречи с тобой.  Уехала в <span class="yes">Могильник</span> на три недели – у нас общий слёт торговцев оружием. Не скучай без меня. Вернусь, привезу тебе что-нибудь в подарок!</p><p>Целую. <span class="yes">Бэт</span>.</p><p>P.S. Кажется я влюбилась! Пока не буду раскрывать тебе кто это…»</p><p>Вы улыбнулись и спрятали <span class="yes">записку</span> в карман.</p>'
  )
  if (changeHubLocation === false) {
    change_buttons({ "Выйти из магазина": hub_center1 })
  } else {
    change_buttons({ "Выйти из магазина": hub_center2 })
  }
  currentFunction = bethLetter
  setCookie("ccurrentFunction", currentFunction)
}

/* Центр города - Бар "Мальтийский Сокол" */
function hub_MalteseFalcon() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_88.jpg")
  } else {
    change_image("img/revenge/pic_88a.jpg")
  }
  change_text(
    '<p>Вы в баре <span class="yes">Мальтийский Сокол</span>. Тут было сильно накурено, люди играли в рулетку и игральные автоматы. Шум и гам. В углу возле двери в подсобку стоял <span class="yes">парень</span> со злобной рожей. Он играл с шипованным кастетом, перекидывая его из руки в руку. <span class="yes">Барменша</span> деловито протирала стаканы.</p>'
  )
  if (rentRoom === false) {
    if (beer > 0 || booze > 0) {
      change_buttons({
        "Присесть за свободный столик": hub_MalteseFalcon_Drunkard,
        "Подойти к парню с кастетом": hub_MalteseFalcon_Kane,
        "Обратиться к бармену": hub_MalteseFalcon_Barman,
        "Выйти из бара": hub_center1,
      })
    } else {
      change_buttons({
        "Подойти к парню с кастетом": hub_MalteseFalcon_Kane,
        "Обратиться к бармену": hub_MalteseFalcon_Barman,
        "Выйти из бара": hub_center1,
      })
    }
  } else {
    if (beer > 0 || booze > 0) {
      change_buttons({
        "Войти в свой номер": hub_MalteseFalcon_Room,
        "Присесть за свободный столик": hub_MalteseFalcon_Drunkard,
        "Подойти к парню с кастетом": hub_MalteseFalcon_Kane,
        "Обратиться к бармену": hub_MalteseFalcon_Barman,
        "Выйти из бара": hub_center1,
      })
    } else {
      change_buttons({
        "Войти в свой номер": hub_MalteseFalcon_Room,
        "Подойти к парню с кастетом": hub_MalteseFalcon_Kane,
        "Обратиться к бармену": hub_MalteseFalcon_Barman,
        "Выйти из бара": hub_center1,
      })
    }
  }
  currentFunction = hub_MalteseFalcon
  setCookie("ccurrentFunction", currentFunction)
}
/* Распитие алкоголя */
function hub_MalteseFalcon_Drunkard() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (drunkardStatus === 3) {
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_163.jpg")
    } else {
      change_image("img/revenge/pic_163a.jpg")
    }
    change_text(
      '<p>Ваши знакомые <span class="yes">колдыри</span> всё ещё сидели за столиком и что-то бурно обсуждали. Вы решили подсесть к ним обратно и присоединиться к беседе. Ваше появление было встречено бурными аплодисментами, плавно переходящими в овацию.</p><p>Теперь осталось понять, как этот вечер закончится.</p>'
    )
    if ((beer > 0) & (booze > 0)) {
      change_buttons({
        "Выпить бутылочку пива": hub_MalteseFalcon_Drunkard1,
        "Выпить бутылку самогона": hub_MalteseFalcon_Drunkard2,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer > 0) & (booze === 0)) {
      change_buttons({
        "Выпить бутылочку пива": hub_MalteseFalcon_Drunkard1,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer === 0) & (booze > 0)) {
      change_buttons({
        "Выпить бутылку самогона": hub_MalteseFalcon_Drunkard2,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer === 0) & (booze === 0)) {
      change_buttons({ "Встать из-за стола": hub_MalteseFalcon })
    } else {
      change_buttons({ "Ошибка в логике": restart })
    }
  } else {
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_160.jpg")
    } else {
      change_image("img/revenge/pic_160a.jpg")
    }
    change_text(
      '<p>Вы нашли свободный столик в <span class="yes">баре</span> и уселись в кресло</p><p>Осталось решить, что пить будем.</p>'
    )
    if ((beer > 0) & (booze > 0)) {
      change_buttons({
        "Выпить бутылочку пива": hub_MalteseFalcon_Drunkard1,
        "Выпить бутылку самогона": hub_MalteseFalcon_Drunkard2,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer > 0) & (booze === 0)) {
      change_buttons({
        "Выпить бутылочку пива": hub_MalteseFalcon_Drunkard1,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer === 0) & (booze > 0)) {
      change_buttons({
        "Выпить бутылку самогона": hub_MalteseFalcon_Drunkard2,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else {
      change_buttons({ "Ошибка в логике": restart })
    }
  }
  currentFunction = hub_MalteseFalcon_Drunkard
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Drunkard1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_161.jpg")
  } else {
    change_image("img/revenge/pic_161a.jpg")
  }
  raise_drunkardStatus(1)
  lower_beer(1)
  if (drunkardStatus === 1) {
    change_text(
      '<p>Вы открыли бутылку <span class="yes">пива</span> и налили себе в кружку.</p><p>Неспешно потягивая напиток, глоток за глотком Вы выпили всю бутылку. Ничего не осталось. Одна изжога.</p><p>Алкоголь <span class="yes">слегка</span> ударил в голову.</p>'
    )
    if ((beer > 0) & (booze > 0)) {
      change_buttons({
        "Выпить бутылочку пива": hub_MalteseFalcon_Drunkard1,
        "Выпить бутылку самогона": hub_MalteseFalcon_Drunkard2,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer > 0) & (booze === 0)) {
      change_buttons({
        "Выпить бутылочку пива": hub_MalteseFalcon_Drunkard1,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer === 0) & (booze > 0)) {
      change_buttons({
        "Выпить бутылку самогона": hub_MalteseFalcon_Drunkard2,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    }
  } else if (drunkardStatus === 2) {
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_162.jpg")
    } else {
      change_image("img/revenge/pic_162a.jpg")
    }
    change_text(
      '<p>Вы открыли бутылку <span class="yes">пивка</span>.</p><p>Вам пришла в голову интересная идея выпить <span class="yes">пиво</span> залпом из бутылки. Что в ней интересного Вы разбираться не стали. Осушив бутылку, Вы громко поставили пустую тару на стол и громогласно отрыгнули. Ваш внутренний мачо был Вами доволен! Однако, проходившая мимо <span class="yes">официантка</span> посмотрела на Вас с отвращением.</p><p>Вы довольно здорово <span class="yes">захмелели</span>.</p>'
    )
    if ((beer > 0) & (booze > 0)) {
      change_buttons({
        "Выпить бутылочку пива": hub_MalteseFalcon_Drunkard1,
        "Выпить бутылку самогона": hub_MalteseFalcon_Drunkard2,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer > 0) & (booze === 0)) {
      change_buttons({
        "Выпить бутылочку пива": hub_MalteseFalcon_Drunkard1,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer === 0) & (booze > 0)) {
      change_buttons({
        "Выпить бутылку самогона": hub_MalteseFalcon_Drunkard2,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer === 0) & (booze === 0)) {
      change_buttons({ "Встать из-за стола": hub_MalteseFalcon })
    }
  } else if (drunkardStatus === 3) {
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_163.jpg")
    } else {
      change_image("img/revenge/pic_163a.jpg")
    }
    raise_satiety(3)
    change_text(
      '<p>Словно по велению Вашей мысли на столе материализовалась новая <span class="yes">бутылка</span>. Вы налили пенный напиток в кружку и стали потягивать его глоток за глотком. К тому моменту, когда с этой <span class="yes">бутылкой</span> было покончено, Вы довольно <span class="yes">сильно опьянели</span>.</p><p>Вы стали громко петь песни и вообще вести себя вызывающе. <span class="yes">Охрана</span> бара смотрела на Вас с подозрением, однако, среди <span class="yes">местных забулдыг</span> Вы приобрели успех. К Вам за столик подсели ещё <span class="yes">двое</span> и накрыли поляну. Вы <span class="yes">хорошо поужинали</span>, однако, общее самочувствие было не очень. Вам стало дурно. Вряд ли стоило продолжать…</p>'
    )
    if ((beer > 0) & (booze > 0)) {
      change_buttons({
        "Выпить бутылочку пива": hub_MalteseFalcon_Drunkard1,
        "Выпить бутылку самогона": hub_MalteseFalcon_Drunkard2,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer > 0) & (booze === 0)) {
      change_buttons({
        "Выпить бутылочку пива": hub_MalteseFalcon_Drunkard1,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer === 0) & (booze > 0)) {
      change_buttons({
        "Выпить бутылку самогона": hub_MalteseFalcon_Drunkard2,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer === 0) & (booze === 0)) {
      change_buttons({ "Встать из-за стола": hub_MalteseFalcon })
    }
  } else if (drunkardStatus === 4) {
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_164.jpg")
    } else {
      change_image("img/revenge/pic_164a.jpg")
    }
    change_text(
      '<p>Недаром в одной <span class="yes">далёкой стране</span> существует поговорка: "Пьяному - море по колено". Вы, конечно же, её не слышали, однако, это Вас вряд ли оправдывает. Подбросив в топку <span class="yes">ещё алкоголя</span>, Вы перешли в свиноподобное состояние.</p><p>Потеряв всякое терпение, <span class="yes">охрана</span> бара вышвырнула Вас вон, параллельно здорово <span class="yes">отпинав</span> Вас по почкам.</p>'
    )
    change_buttons({ "Потерять сознание": hub_MalteseFalcon_Drunkard4 })
  }
  currentFunction = hub_MalteseFalcon_Drunkard1
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Drunkard2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_161.jpg")
  } else {
    change_image("img/revenge/pic_161a.jpg")
  }
  raise_drunkardStatus(2)
  lower_booze(1)
  if (drunkardStatus === 2) {
    change_text(
      '<p>Вы открыли бутылку <span class="yes">самогона</span> и налили себе в рюмку.</p><p>По началу шло очень плохо. Неприятный привкус пойла вызывал рвотный рефлекс. Постоянно морщась от отвращения, шот за шотом Вы выпили всю бутылку.</p><p>Вы довольно здорово <span class="yes">захмелели</span>.</p>'
    )
    if ((beer > 0) & (booze > 0)) {
      change_buttons({
        "Выпить бутылочку пива": hub_MalteseFalcon_Drunkard1,
        "Выпить бутылку самогона": hub_MalteseFalcon_Drunkard2,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer > 0) & (booze === 0)) {
      change_buttons({
        "Выпить бутылочку пива": hub_MalteseFalcon_Drunkard1,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer === 0) & (booze > 0)) {
      change_buttons({
        "Выпить бутылку самогона": hub_MalteseFalcon_Drunkard2,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer === 0) & (booze === 0)) {
      change_buttons({ "Встать из-за стола": hub_MalteseFalcon })
    }
  } else if (drunkardStatus === 3) {
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_163.jpg")
    } else {
      change_image("img/revenge/pic_163a.jpg")
    }
    raise_satiety(3)
    change_text(
      '<p>"Водка без пива - деньги на ветер", - почему-то решили Вы и, открыв бутылку <span class="yes">самогона</span>, налили себе рюмочку.</p><p>Напиток имел ярко выраженный неприятный вкус. И всё-таки Вы быстро осушили бутылку и <span class="yes">сильно опьянели</span>.</p><p>Вы стали громко петь песни и вообще вести себя вызывающе. <span class="yes">Охрана</span> бара смотрела на Вас с подозрением, однако, среди местных <span class="yes">забулдыг</span> Вы приобрели успех. К Вам за столик подсели ещё <span class="yes">двое</span> и накрыли поляну. Вы <span class="yes">хорошо поужинали</span>, однако, общее самочувствие было не очень. Вам стало дурно. Вряд ли стоило продолжать…</p>'
    )
    if ((beer > 0) & (booze > 0)) {
      change_buttons({
        "Выпить бутылочку пива": hub_MalteseFalcon_Drunkard1,
        "Выпить бутылку самогона": hub_MalteseFalcon_Drunkard2,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer > 0) & (booze === 0)) {
      change_buttons({
        "Выпить бутылочку пива": hub_MalteseFalcon_Drunkard1,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer === 0) & (booze > 0)) {
      change_buttons({
        "Выпить бутылку самогона": hub_MalteseFalcon_Drunkard2,
        "Встать из-за стола": hub_MalteseFalcon,
      })
    } else if ((beer === 0) & (booze === 0)) {
      change_buttons({ "Встать из-за стола": hub_MalteseFalcon })
    }
  } else if (drunkardStatus === 4) {
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_164.jpg")
    } else {
      change_image("img/revenge/pic_164a.jpg")
    }
    lower_health(20)
    change_text(
      '<p>Недаром в одной <span class="yes">далёкой стране</span> существует поговорка: "Пьяному - море по колено". Вы, конечно же, её не слышали, однако, это Вас вряд ли оправдывает. Подбросив в топку <span class="yes">ещё алкоголя</span>, Вы перешли в свиноподобное состояние.</p><p>Потеряв всякое терпение, <span class="yes">охрана</span> бара вышвырнула Вас вон, параллельно здорово <span class="yes">отпинав</span> Вас по почкам.</p>'
    )
    change_buttons({ "Потерять сознание": hub_MalteseFalcon_Drunkard4 })
  }
  currentFunction = hub_MalteseFalcon_Drunkard2
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Drunkard3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  creigDrunked = false
  change_time(24)
  change_time(9)
  lower_drunkardStatus(4)
  lower_satiety(1)
  if (day === 10 || day > 10) {
    change_image("img/revenge/pic_213.jpg")
    change_text(
      '<p>Вы пришли в себя утром <span class="yes">следующего</span> дня. В голове снова было ясно.</p><p>Приведя себя в порядок, Вам было невообразимо жаль потраченного времени и денег.</p><p>Быстро сосчитав дни, Вы пришли к выводу, что не успеете выполнить поставленную руководством <span class="yes">задачу</span>.</p><p>Время пролетело быстро и теперь Вам предстояло решить, что делать дальше: вернуться в <span class="yes">бункер</span> с позором или… Вы решили выбрать второй вариант.</p><p>Собрав все свои не хитрые пожитки, Вы покинули <span class="yes">город</span> и отправились <span class="yes">на север</span> через жёлтые пески.</p>'
    )
    change_buttons({ "Игра окончена!": restart })
  } else {
    change_image("img/revenge/pic_166.jpg")
    change_text(
      '<p>Вы пришли в себя утром <span class="yes">следующего</span> дня. В голове снова было ясно.</p><p>Приведя себя в порядок, Вам было невообразимо жаль потраченного времени и денег.</p>'
    )
    change_buttons({ "Направиться в Центру Города": hub_center1 })
  }
  currentFunction = hub_MalteseFalcon_Drunkard3
  setCookie("ccurrentFunction", currentFunction)
  setCookie("ccreigDrunked", creigDrunked)
}
function hub_MalteseFalcon_Drunkard4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (killDon === true) {
    change_time(24)
    change_time(3)
    lower_drunkardStatus(4)
    change_image("img/revenge/pic_210.jpg")
    change_text(
      '<p>Вы пришли в себя от того что Вас хлестали по щекам <span class="yes">двое</span> крепких полицейских. В голове всё ещё мутилось, хотя в целом Вы протрезвели.</p><p>Вы оглянулись вокруг. Кажется, Вас притащили в офис <span class="yes">шерифа Грина</span>. Вокруг было множество <span class="yes">полицейских</span> и <span class="yes">гражданских</span> лиц.</p><p>- Это он, это он! – Услышали Вы крик одного из присутствующих <span class="yes">горожан</span>, указывающего на Вас пальцем. - Он один из тех, кто заходил в здание <span class="yes">склада</span>.</p>'
    )
    change_buttons({ "Вы попались!": hub_mainQuestBad13 })
  } else {
    creigDrunked = false
    setCookie("ccreigDrunked", creigDrunked)
    change_time(24)
    change_time(9)
    lower_drunkardStatus(4)
    lower_satiety(1)
    if (day === 10 || day > 10) {
      change_image("img/revenge/pic_213.jpg")
      change_text(
        '<p>Вы пришли в себя утром <span class="yes">следующего</span> дня. В голове снова было ясно.</p><p>Приведя себя в порядок, Вам было невообразимо жаль потраченного времени и денег.</p><p>Быстро сосчитав дни, Вы пришли к выводу, что не успеете выполнить поставленную руководством <span class="yes">задачу</span>.</p><p>Время пролетело быстро и теперь Вам предстояло решить, что делать дальше: вернуться в <span class="yes">бункер</span> с позором или… Вы решили выбрать второй вариант.</p><p>Собрав все свои не хитрые пожитки, Вы покинули <span class="yes">город</span> и отправились <span class="yes">на север</span> через жёлтые пески.</p>'
      )
      change_buttons({ "Игра окончена!": restart })
    } else {
      change_image("img/revenge/pic_167.jpg")
      change_text(
        '<p>Вы пришли в себя утром <span class="yes">следующего</span> дня. В голове снова было ясно, хотя Вы ощущали себя не очень здорово. Охрана <span class="yes">бара</span> совершенно точно перестаралась, стараясь привести Вас в чувство.</p><p>Приведя себя в порядок, Вам было невообразимо жаль потраченного времени и денег.</p>'
      )
      change_buttons({ "Направиться в Центру Города": hub_center1 })
    }
  }
  currentFunction = hub_MalteseFalcon_Drunkard4
  setCookie("ccurrentFunction", currentFunction)
}
/* Кейн */
function hub_MalteseFalcon_Kane() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_91.jpg")
  if (deckerDone === true) {
    change_text(
      '<p>Вы подошли к <span class="yes">Кейну</span> и хотели обратиться к нему, но он не дал Вам это сделать, схватив Вас за грудки.</p><p>- Ах ты паршивый ублюдок! - Зашипел на Вас подручный <span class="yes">Декера</span>. - Тебя уже начали разыскивать. Убирайся отсюда, пока я тебя сам не сдал <span class="yes">копам</span>!</p><p>Его слова не сулили ничего хорошего. Лучше уходить из <span class="yes">города</span> подобру-поздорову.</p>'
    )
    change_buttons({ "Отойти от Кейна": hub_MalteseFalcon })
  } else {
    if (getDeckerQuest === true) {
      if (getSheriffGreeneSecondTask === true) {
        change_text(
          '<p>Вы подошли к <span class="yes">Кейну</span> и хотели обратиться к нему, но запнулись, увидев его горящие дьявольским огнём колючие глаза.</p><p>- Ах ты мелкий, паршивый ублюдок! - Зашипел на Вас подручный <span class="yes">Декера</span>. - Решил оклеветать честного бизнесмена? Из-за таких как ты порядочные люди с трудом могут вести бизнес в этом городе. Пошёл вон! Радуйся, что мистер <span class="yes">Декер</span> не мстительный человек.</p><p>Его слова не сулили ничего хорошего. Лучше уходить из города подобру-поздорову.</p>'
        )
        change_buttons({ "Отойти от Кейна": hub_MalteseFalcon })
      } else {
        if (time < 19) {
          change_text(
            '<p>Вы подошли к <span class="yes">Кейну</span>. Однако тот, не давая ничего Вам сказать, злобно зашипел:</p><p>- Ты слишком рано! Приходи ровно в <span class="yes">19:00</span>.</p>'
          )
          change_buttons({ "Отойти от Кейна": hub_MalteseFalcon })
        } else if (time > 20) {
          change_text(
            '<p>Вы подошли к <span class="yes">Кейну</span>. Однако тот, не давая ничего Вам сказать, накинулся на Вас:</p><p>- Ты идиот! Не явился вовремя. На твоё счастье <span class="yes">старик</span> после службы отправился домой. - <span class="yes">Кейн</span> стал приходить в себя от переполнявшего его гнева. - Жду тебя завтра ровно в <span class="yes">19:00</span>. Как спустятся <span class="yes">сумерки</span>.</p>'
          )
          change_buttons({ "Отойти от этого выродка": hub_MalteseFalcon })
        } else {
          getDeckerQuest = false
          deckerQuest = true
          changeHubLocation = true
          change_text(
            '<p>Вы подошли к <span class="yes">Кейну</span>, он пригласил Вас в подсобку:</p><p>- Значит так. Вот что тебе нужно знать. Сейчас <span class="yes">Дон</span> идёт на встречу с человеком из <span class="yes">Гадюк</span>. Она происходит на заброшенном складе в <span class="yes">Старом Городе</span>. Ты его сразу узнаешь: лысый высокий <span class="yes">старик</span> в <span class="yes">красных брюках</span>. Единственный в городе носит такие. Дверь на <span class="yes">склад</span> будет наверняка закрыта. Вот ключ. - <span class="yes">Кейн</span> вложил Вам в руку <span class="yes">маленький ключик</span>. - Желательно убить <span class="yes">Дона</span> быстро и тихо, чтобы не привлечь внимание копов. Если напортачишь, сюда соваться даже не думай. Всё ясно?</p><p>- Ясно, - ответили Вы.</p><p><span class="yes">Кейн</span> кивнул и указал Вам на выход.</p>'
          )
          change_buttons({
            "Приступить к выполнению задания": hub_MalteseFalconBad,
          })
          setCookie("cgetDeckerQuest", getDeckerQuest)
          setCookie("cdeckerQuest", deckerQuest)
          setCookie("cchangeHubLocation", changeHubLocation)
        }
      }
    } else {
      if ((goToJail === true) & (deckerQuest === true) & (killDon === true)) {
        change_image("img/revenge/pic_207.jpg")
        change_text(
          '<p>Вы подошли к <span class="yes">Кейну</span>. Тот приложил палец к губам и открыл дверь позади себя, пропуская Вас вперёд. Вновь Вы спустились по крутым ступенькам в мрачный офис <span class="yes">Декера</span>.</p>'
        )
        change_buttons({ "Подойти к Декеру": hub_mainQuestBad10 })
      } else if (
        (goToJail === true) &
        (deckerQuest === true) &
        (killDon === false)
      ) {
        change_text(
          '<p>Перед Вами стоял <span class="yes">Кейн</span>. Он по прежнему был одет в черную кожанаю куртку. В руках он держал здоровенный кастет с шипами. С ним не стоит шутить.</p><p>- Ты чего припёрся? – <span class="yes">Кейн</span> недовольно уставился на Вас, пронзая взглядом. - Пока дело не сделано, тебе тут делать нечего. Пошёл вон!</p>'
        )
        change_buttons({ "Отойти от этого выродка": hub_MalteseFalcon })
      } else if (
        (goToJail === true) &
        (deckerQuest === false) &
        (killDon === false)
      ) {
        change_text(
          '<p>Перед Вами стоял самодовольный <span class="yes">парень</span> в черной кожаной куртке. В руках он держал здоровенный кастет с шипами. Он явно охранял помещение, скрывающееся дверью за его спиной. С таким отморозком  навряд ли стоит шутить.</p><p>Это <span class="yes">Кейн</span>. К нему Вас направил <span class="yes">Чарли</span>.</p><p>- Чего надо? – глаза <span class="yes">Кейна</span> сузились.</p>'
        )
        change_buttons({
          "Ты Кейн? Я от Чарли.": hub_bad_Decker,
          "Ничего не надо, просто смотрю.": hub_MalteseFalcon_Kane2,
        })
      } else if (
        (goToJail === false) &
        (deckerQuest === false) &
        (killDon === false)
      ) {
        change_text(
          '<p>Перед Вами стоял самодовольный <span class="yes">парень</span> в черной кожаной куртке. В руках он держал здоровенный кастет с шипами. Он явно охранял помещение, скрывающееся дверью за его спиной. С таким отморозком  навряд ли стоит шутить.</p><p>- Чего надо? – глаза незнакомца сузились.</p>'
        )
        change_buttons({
          "А что там за дверью, друг?": hub_MalteseFalcon_Kane1,
          "Ничего не надо, просто смотрю.": hub_MalteseFalcon_Kane2,
        })
      } else {
        change_text(
          "<p>Выпал один из невозможных вариантов! Такая вот она... булева алгебра.</p><p>(goToJail === true & deckerQuest === false & killDon === true)</p><p>(goToJail === false & deckerQuest === true & killDon === true)</p><p>(goToJail === false & deckerQuest === true & killDon === false)</p><p>(goToJail === false & deckerQuest === false & killDon === true)</p>"
        )
        change_buttons({ "Ищи ошибку": restart })
      }
    }
  }
  currentFunction = hub_MalteseFalcon_Kane
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Kane1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_91.jpg")
  change_text(
    '<p>- Там <span class="yes">хозяин</span> заведения. - отрубил <span class="yes">бандит</span>. - И он тебя не ждёт. Так что, давай… Крути педали, пока не дали! Понятно?</p>'
  )
  change_buttons({
    "Понятно! Чего ж тут непонятного…": hub_MalteseFalcon,
    "Ну, мразь! Сейчас я тебя убивать буду!": hub_fail_1,
  })
  currentFunction = hub_MalteseFalcon_Kane1
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Kane2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_91.jpg")
  change_text(
    '<p><span class="yes">Отморозок</span> нервно стиснул зубы:</p><p>- Смотри где-нибудь в другом месте, пока проблемы не начались.</p>'
  )
  change_buttons({ "Отойти подальше": hub_MalteseFalcon })
  currentFunction = hub_MalteseFalcon_Kane2
  setCookie("ccurrentFunction", currentFunction)
}
/* Барменша */
function hub_MalteseFalcon_Barman() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_90.jpg")
  change_text(
    '<p>Женщина с усталым взглядом смотрела мимо Вас. Судя по внешнему виду работа её доконала.</p><p>- Чего угодно? – спросила <span class="yes">барменша</span>, продолжая смотреть мимо.</p>'
  )
  if (rentRoom === false) {
    change_buttons({
      "Комнаты сдаёте?": hub_MalteseFalcon_Barman1,
      "Что выпить есть?": hub_MalteseFalcon_Barman3,
      "Что есть из еды?": hub_MalteseFalcon_Barman2,
      "Ничего.": hub_MalteseFalcon_Barman34,
    })
  } else {
    change_buttons({
      "Что выпить есть?": hub_MalteseFalcon_Barman3,
      "Что есть из еды?": hub_MalteseFalcon_Barman2,
      "Ничего.": hub_MalteseFalcon_Barman34,
    })
  }
  currentFunction = hub_MalteseFalcon_Barman
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Barman1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_90.jpg")
  change_text(
    '<p>Да. Повезло Вам, - женщина лукаво подмигнула Вам, сфокусировав мутные зрачки на Вас. - Из-за спада торговли все эти горе-караванщики тут сидят. Сдаём только на <span class="yes">неделю</span> сразу. <span class="yes">70 крышек</span>. Без торга!</p>'
  )
  change_buttons({
    "А может поторгуемся?": hub_MalteseFalcon_Barman11,
    "Согласен. Вот деньги.": hub_MalteseFalcon_Barman12,
    "Мне надо подумать ещё над Вашим предложением.": hub_MalteseFalcon,
  })
  currentFunction = hub_MalteseFalcon_Barman1
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Barman11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_90.jpg")
  change_text(
    '<p>Достали вы меня… - <span class="yes">барменша</span> стукнула кулаком по стойке. - Пойди ещё подумай. Только не бузи, если в следующий раз свободной комнаты не будет!</p>'
  )
  change_buttons({
    "Ну, погодите! Я ж пошутил!  Вот деньги.": hub_MalteseFalcon_Barman12,
    "Пойду подумаю.": hub_MalteseFalcon,
  })
  currentFunction = hub_MalteseFalcon_Barman11
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Barman12() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (caps > 69) {
    rentRoom = true
    lower_caps(70)
    change_image("img/revenge/pic_90.jpg")
    change_text(
      '<p>Ваш <span class="yes">номер</span> в конце коридора справа. Приятного отдыха! Не забывайте – у нас отличный <span class="yes">алкоголь</span> в ассортименте. - <span class="yes">Бармен</span> продекламировала затёртую фразу и её взгляд вновь стал рассеяным.</p>'
    )
    change_buttons({
      "Спасибо. Загляну к вам попозже.": hub_MalteseFalcon,
      "Что есть из еды?": hub_MalteseFalcon_Barman2,
      "А что выпить есть?": hub_MalteseFalcon_Barman3,
    })
    setCookie("crentRoom", rentRoom)
  } else {
    change_text(
      '<p>- Похоже, у тебя нет денег чтобы расплатиться, – <span class="yes">барменша</span> презрительно прищурила глаза. - Шёл бы ты отсюда, пока неприятностей не огрёб.</p>'
    )
    change_buttons({ "Отойти от стойки.": hub_MalteseFalcon })
  }
  currentFunction = hub_MalteseFalcon_Barman12
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Barman2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_90.jpg")
  change_text(
    '<p>- У нас тут бар. Только закуски к <span class="yes">алкоголю</span>: сушённое  мясо - <span class="yes">10 крышек</span> или сэндвич за <span class="yes">5 крышек</span>. Желаете что-либо?</p>'
  )
  change_buttons({
    "Сушенное мясо за 10 крышек? Надеюсь там его много. Давайте его сюда!":
      hub_MalteseFalcon_Barman21,
    "Ну, и цены у вас. Давайте сэндвич что ли.": hub_MalteseFalcon_Barman22,
    "Да это ж просто грабёж! Ничего я не хочу по таким ценам.":
      hub_MalteseFalcon_Barman34,
  })
  currentFunction = hub_MalteseFalcon_Barman2
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Barman21() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_caps(10)
  raise_satiety(0.5)
  change_image("img/revenge/pic_90.jpg")
  change_text(
    '<p>- Я бы на Вашем месте не была такой оптимистичной, - заявила Вам <span class="yes">бармен</span>, сгребя Ваши <span class="yes">крышки</span> с прилавка.</p><p>Через несколько секунд перед Вами появилась крошечная мисочка с вяленым <span class="yes">браминьим мясом</span>.</p><p>- Это Вы так шутите? - ошалев от вопиющего грабежа, спросили Вы.</p><p><span class="yes">Барменша</span> пожала плечами и молча подала Вам меню, где чёрным по белому была указана крошечная порция мяса за баснословные <span class="yes">10 крышек</span>.</p><p>Вам ничего не оставалось, как проглотить кусочки <span class="yes">вяленого мяса</span>.</p><p>Сметя их в мгновение ока, Вы стали прислушиваться к ощущениям.</p><p>Вашу задумчивость прервала <span class="yes">барменша</span>:</p><p>- Ещё что-нибудь желаете?</p>'
  )
  change_buttons({
    "Напомните ещё раз, что там из еды было?": hub_MalteseFalcon_Barman2,
    "А что выпить есть?": hub_MalteseFalcon_Barman3,
    "Ничего не желаю. Загляну к вам попозже.": hub_MalteseFalcon,
  })
  currentFunction = hub_MalteseFalcon_Barman21
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Barman22() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_caps(10)
  raise_satiety(0.5)
  change_image("img/revenge/pic_90.jpg")
  change_text(
    '<p><span class="yes">Бармен</span> забрала Ваши <span class="yes">крышки</span> с прилавка.</p><p>Через несколько секунд перед Вами появилась тарелка с каким-то самопальным <span class="yes">бутербродом</span>. Внутри него было нечто напоминающее тонюсенький кусочек домашней колбасы и ложка острой горчицы. Всё это было запечатано двумя приличными кусками хлеба.</p><p>Вы бы не отдали за это и полушку, но тут уж, как говорится, куда деваться. Проглотив <span class="yes">сэндвич</span>, Вы задумались о странности жизни.</p><p><span class="yes">Бармен</span>, заметив Вашу задумчивость, напомнила о своём присутствии:</p><p>- Ещё что-то хотите? – спросила она с видом человека, желающего побыстрее вернуться к безделью.</p>'
  )
  change_buttons({
    "Напомните ещё раз, что там из еды было?": hub_MalteseFalcon_Barman2,
    "А что выпить есть?": hub_MalteseFalcon_Barman3,
    "Ничего не желаю. Загляну к вам попозже.": hub_MalteseFalcon,
  })
  currentFunction = hub_MalteseFalcon_Barman22
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Barman3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_90.jpg")
  change_text(
    '<p>- Вода – <span class="yes">2 крышки</span>. Пиво – <span class="yes">5 крышек</span>. Самогон – <span class="yes">10 крышек</span>, - быстро протараторила <span class="yes">барменша</span>. - Так что будете?</p>'
  )
  change_buttons({
    "Водички, пожалуйста.": hub_MalteseFalcon_Barman31,
    "Холодненького пивка будет прекрасно. Держите деньги.":
      hub_MalteseFalcon_Barman32,
    "Самогончик? Ухххх! Вот 10 крышек.": hub_MalteseFalcon_Barman33,
    "А ничего не нужно. Я передумал!": hub_MalteseFalcon_Barman34,
  })
  currentFunction = hub_MalteseFalcon_Barman3
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Barman34() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_90.jpg")
  change_text(
    '<p>- Тогда, всего доброго. Приходите ещё, - <span class="yes">барменша</span> вновь потеряла к Вам всякий интерес.</p>'
  )
  change_buttons({ "Отойти от стойки.": hub_MalteseFalcon })
  currentFunction = hub_MalteseFalcon_Barman34
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Barman31() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (caps > 1) {
    raise_satiety(0.5)
    raise_health(1)
    lower_caps(2)
    change_image("img/revenge/pic_90.jpg")
    change_text(
      '<p>- Пожалуйста, – <span class="yes">барменша</span> набрала из бака чистую <span class="yes">воду</span> в стакан и придвинула к Вам.</p><p>Вы осушили стакан и отодвинули его от себя.</p><p>- Может быть ещё что-то желаете? – спросила <span class="yes">бармен</span>, убирая стакан под стойку.</p>'
    )
    if (rentRoom === false) {
      change_buttons({
        "Комнаты сдаёте?": hub_MalteseFalcon_Barman1,
        "Напомните ещё раз, что есть из напитков.": hub_MalteseFalcon_Barman3,
        "Что есть из еды?": hub_MalteseFalcon_Barman2,
        "Ничего.": hub_MalteseFalcon_Barman34,
      })
    } else {
      change_buttons({
        "Напомните ещё раз, что есть из напитков.": hub_MalteseFalcon_Barman3,
        "Что есть из еды?": hub_MalteseFalcon_Barman2,
        "Ничего.": hub_MalteseFalcon_Barman34,
      })
    }
  } else {
    change_text(
      '<p>- Похоже, у тебя нет денег чтобы расплатиться, – <span class="yes">барменша</span> презрительно прищурила глаза. - Шёл бы ты отсюда, пока неприятностей не огрёб.</p>'
    )
    change_buttons({ "Отойти от стойки.": hub_MalteseFalcon })
  }
  currentFunction = hub_MalteseFalcon_Barman31
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Barman32() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (caps > 4) {
    raise_beer(1)
    lower_caps(5)
    change_image("img/revenge/pic_90.jpg")
    change_text(
      '<p>- Пожалуйста, – <span class="yes">бармен</span> достала из-под прилавка бутылку домашнего <span class="yes">пива</span> и придвинула её к Вам. Через некоторое время на стойке появился стакан.</p><p>Вы, молча, взяли бутылку и убрали её в рюкзак. <span class="yes">Барменша</span> хмыкнула и убрала стакан обратно.</p><p>- Может быть ещё что-то желаете? – женщина посмотрела на Вас отсутствующим взглядом.</p>'
    )
    if (rentRoom === false) {
      change_buttons({
        "Комнаты сдаёте?": hub_MalteseFalcon_Barman1,
        "Напомните ещё раз, что есть из напитков.": hub_MalteseFalcon_Barman3,
        "Что есть из еды?": hub_MalteseFalcon_Barman2,
        "Ничего.": hub_MalteseFalcon_Barman34,
      })
    } else {
      change_buttons({
        "Напомните ещё раз, что есть из напитков.": hub_MalteseFalcon_Barman3,
        "Что есть из еды?": hub_MalteseFalcon_Barman2,
        "Ничего.": hub_MalteseFalcon_Barman34,
      })
    }
  } else {
    change_text(
      '<p>- Похоже, у тебя нет денег чтобы расплатиться, – <span class="yes">барменша</span> презрительно прищурила глаза. - Шёл бы ты отсюда, пока неприятностей не огрёб.</p>'
    )
    change_buttons({ "Отойти от стойки.": hub_MalteseFalcon })
  }
  currentFunction = hub_MalteseFalcon_Barman32
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Barman33() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (caps > 9) {
    raise_booze(1)
    lower_caps(10)
    change_image("img/revenge/pic_90.jpg")
    change_text(
      '<p>- Пожалуйста, – <span class="yes">бармен</span> достала из-под прилавка бутылку крепкого <span class="yes">самогона</span> и придвинула её к Вам. Через некоторое время на стойке появилась рюмка.</p><p>Вы, молча, взяли бутылку и убрали её в рюкзак. <span class="yes">Барменша</span> хмыкнула и убрала рюмку обратно.</p><p>- Может быть ещё что-то желаете? – женщина посмотрела на Вас отсутствующим взглядом.</p>'
    )
    if (rentRoom === false) {
      change_buttons({
        "Комнаты сдаёте?": hub_MalteseFalcon_Barman1,
        "Напомните ещё раз, что есть из напитков.": hub_MalteseFalcon_Barman3,
        "Что есть из еды?": hub_MalteseFalcon_Barman2,
        "Ничего.": hub_MalteseFalcon_Barman34,
      })
    } else {
      change_buttons({
        "Напомните ещё раз, что есть из напитков.": hub_MalteseFalcon_Barman3,
        "Что есть из еды?": hub_MalteseFalcon_Barman2,
        "Ничего.": hub_MalteseFalcon_Barman34,
      })
    }
  } else {
    change_text(
      '<p>- Похоже, у тебя нет денег чтобы расплатиться, – <span class="yes">барменша</span> презрительно прищурила глаза. - Шёл бы ты отсюда, пока неприятностей не огрёб.</p>'
    )
    change_buttons({ "Отойти от стойки.": hub_MalteseFalcon })
  }
  currentFunction = hub_MalteseFalcon_Barman33
  setCookie("ccurrentFunction", currentFunction)
}

/* Комната */
function hub_MalteseFalcon_Room() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_89.jpg")
  } else {
    change_image("img/revenge/pic_89a.jpg")
  }
  change_text(
    '<p>Вы оказались в своём <span class="yes">номере</span>. Вашему взору предстала потрясающая нора с облезлыми стенами и грязным матрасом на полу. В углу комнаты стоял полуразваленный шкаф. Помещение больше напоминало чулан для хранения швабр, а не номер в отеле. В стену был вмонтирован механический будильник.</p><p>Вы с тоской вспомнили рыцарские кубрики в своём родном бункере.</p><p>Здесь Вы можете, наконец, привести своё <span class="yes">здоровье</span> в порядок, если <span class="yes">ранены</span> и у Вас остались <span class="yes">стимуляторы</span>.</p>'
  )
  if ((stimpacks > 0) & (health < 90)) {
    change_buttons({
      "Спать до утра": hub_MalteseFalcon_Room1,
      "Подождать до вечера": hub_MalteseFalcon_Room2,
      "Применить стимулятор": hub_MalteseFalcon_Room3,
      "Выйти из номера": hub_MalteseFalcon,
    })
  } else {
    change_buttons({
      "Спать до утра": hub_MalteseFalcon_Room1,
      "Подождать до вечера": hub_MalteseFalcon_Room2,
      "Выйти из номера": hub_MalteseFalcon,
    })
  }
  currentFunction = hub_MalteseFalcon_Room
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Room1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (killDon === true) {
    change_time(24)
    change_time(3)
    lower_drunkardStatus(4)
    change_image("img/revenge/pic_202.jpg")
    change_text(
      '<p>Не смотря ни на что, Вы решили поспать <span class="yes">до утра</span> и без сил упали на грязный матрац в углу комнаты. Среди ночи Вы были разбужены грохотом выломанной двери Вашего номера.</p><p>В мгновение ока Вы оказались в наручниках. Вас привели в <span class="yes">отдел полиции</span>, где один из <span class="yes">горожан</span> опознал Вас.</p><p>- Это он, - закричал <span class="yes">мужчина</span>, указывая на Вас пальцем. - Он один из тех, кто заходил в здание <span class="yes">склада</span>!</p>'
    )
    change_buttons({ "Вы попались!": hub_mainQuestBad13 })
  } else {
    change_time(24)
    change_time(8)
    lower_drunkardStatus(4)
    if (day === 10 || day > 10) {
      change_image("img/revenge/pic_213.jpg")
      change_text(
        '<p>Вы проснулись и бросили взгляд на механический <span class="yes">будильник с календарём</span> на стене Вашего <span class="yes">номера</span>. Быстро сосчитав дни, Вы пришли к выводу, что не успеете выполнить поставленную руководством <span class="yes">задачу</span>.</p><p>Время пролетело быстро и теперь Вам предстояло решить, что делать дальше: вернуться в <span class="yes">бункер</span> с позором или… Вы решили выбрать второй вариант.</p><p>Собрав все свои не хитрые пожитки, Вы покинули <span class="yes">город</span> и отправились <span class="yes">на север</span> через жёлтые пески.</p>'
      )
      change_buttons({ "Игра окончена!": restart })
    } else {
      creigDrunked = false
      setCookie("ccreigDrunked", creigDrunked)
      raise_health(5)
      lower_satiety(1)
      if (satiety === 0) {
        death()
        change_image("img/revenge/pic_214.jpg")
        change_text(
          '<p>Несколько суток <span class="yes">без еды</span> сделали своё дело: Вы настолько обессилили, что сегодня уже не могли подняться с матраса. От бессилия Вы то вновь впадали в сон, то просыпались.</p><p>Внезапно дверь Вашей <span class="yes">комнаты</span> растворилась и внутрь проникла какая-то хмурая <span class="yes">девка</span> с внешностью совершенно беспринципного человека. Увидев Ваше состояние, эта стерва принялась бесцеремонно рыться в Вашей <span class="yes">сумке</span>. Вы попытались ей помешать, но сил было мало для того чтобы защитить свое имущество. В отчаянии Вы принялись слабым голосом звать на помощь. Не дав Вам крикнуть, <span class="yes">девица</span> со всего размаха всадила заточку Вам в горло и выбежала прочь, прихватив с собой Вашу <span class="yes">сумку</span>.</p><p>Ваши приключения бесславно подошли к концу.</p>'
        )
        change_buttons({ "Игра окончена!": restart })
      } else {
        HubRoomLeftDays = 10 - day
        setCookie("ccreigDrunked", HubRoomLeftDays)
        if ((time < 19) & (time > 6.5)) {
          change_image("img/revenge/pic_89.jpg")
        } else {
          change_image("img/revenge/pic_89a.jpg")
        }
        change_text(
          '<p>С отвращением Вы ещё раз посмотрели на матрас. Никакого доверия он не вызывал. Остаётся только догадываться, что он на себе вынес за все годы эксплуатации.</p><p>Вы улеглись на вонючую поверхность, постелив предварительно своё одеяло. Однако, заснули Вы не сразу. Из-за стен постоянно доносились какие-то звуки: то бранная ругань, то трескотня будильника, то стоны какой-то продажной девки. В конце концов, Вам удалось уснуть…</p><p>…Вы очнулись под яростную трескотню настенного будильника. На циферблате – <span class="yes">8:00</span>. Значит, все <span class="yes">магазины</span> и <span class="yes">организации</span> уже открыты.</p><p>На выполнение задания <span class="yes">Братства Стали</span> Вам осталось <span class="yes">' +
            HubRoomLeftDays +
            " дней</span></p>"
        )
        change_buttons({
          "Подождать до вечера": hub_MalteseFalcon_Room2,
          "Выйти из номера": hub_MalteseFalcon,
        })
      }
    }
  }
  currentFunction = hub_MalteseFalcon_Room1
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Room2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (killDon === true) {
    lower_drunkardStatus(4)
    change_time(24)
    change_time(3)
    change_image("img/revenge/pic_202.jpg")
    change_text(
      '<p>Не смотря ни на что, Вы решили поспать и без сил упали на грязный матрац в углу комнаты. Среди ночи Вы были разбужены грохотом выломанной двери Вашего номера.</p><p>В мгновение ока Вы оказались в наручниках. Вас привели в <span class="yes">отдел полиции</span>, где один из <span class="yes">горожан</span> опознал Вас.</p><p>- Это он, - закричал <span class="yes">мужчина</span>, указывая на Вас пальцем. - Он один из тех, кто заходил в здание <span class="yes">склада</span>!</p>'
    )
    change_buttons({ "Вы попались!": hub_mainQuestBad13 })
  } else {
    if (time < 19) {
      lower_drunkardStatus(2)
      time = 19
      change_time(0)
      if ((time < 19) & (time > 6.5)) {
        change_image("img/revenge/pic_89.jpg")
      } else {
        change_image("img/revenge/pic_89a.jpg")
      }
      change_text(
        '<p>Остаток дня Вы провели в размышлениях о прошедших днях. Вы мечтали всего лишь о службе в патруле, охранять Братство, дышать свежим воздухом. И вот Вы стали настоящим разведчиком, одним из немногих, кто живёт в городах Пустоши и добывает ценные сведения. О таком повороте событий Вы и думать не могли. Это большая честь, доступная избранным. Под эти мысли Вы задремали…</p><p>…Вы очнулись под яростную трескотню настенного будильника. На циферблате – <span class="yes">19:00</span>. Многие <span class="yes">организации</span> уже закрыты.</p>'
      )
      change_buttons({
        "Подождать до утра": hub_MalteseFalcon_Room1,
        "Выйти из номера": hub_MalteseFalcon,
      })
    } else {
      change_time(5)
      change_time(19)
      lower_drunkardStatus(2)
      if (day === 10 || day > 10) {
        change_image("img/revenge/pic_213a.jpg")
        change_text(
          '<p>Вы проснулись и бросили взгляд на механический <span class="yes">будильник с календарём</span> на стене Вашего <span class="yes">номера</span>. Быстро сосчитав дни, Вы пришли к выводу, что не успеете выполнить поставленную руководством <span class="yes">задачу</span>.</p><p>Время пролетело быстро и теперь Вам предстояло решить, что делать дальше: вернуться в <span class="yes">бункер</span> с позором или… Вы решили выбрать второй вариант.</p><p>Собрав все свои не хитрые пожитки, Вы покинули <span class="yes">город</span> и отправились <span class="yes">на север</span> через жёлтые пески.</p>'
        )
        change_buttons({ "Игра окончена!": restart })
      } else {
        raise_health(5)
        lower_satiety(1)
        creigDrunked = false
        setCookie("ccreigDrunked", creigDrunked)
        if (satiety === 0) {
          death()
          change_image("img/revenge/pic_214a.jpg")
          change_text(
            '<p>Несколько суток <span class="yes">без еды</span> сделали своё дело: Вы настолько обессилили, что сегодня уже не могли подняться с матраса. От бессилия Вы то вновь впадали в сон, то просыпались.</p><p>Внезапно дверь Вашей <span class="yes">комнаты</span> растворилась и внутрь проникла какая-то хмурая <span class="yes">девка</span> с внешностью совершенно беспринципного человека. Увидев Ваше состояние, эта стерва принялась бесцеремонно рыться в Вашей <span class="yes">сумке</span>. Вы попытались ей помешать, но сил было мало для того чтобы защитить свое имущество. В отчаянии Вы принялись слабым голосом звать на помощь. Не дав Вам крикнуть, <span class="yes">девица</span> со всего размаха всадила заточку Вам в горло и выбежала прочь, прихватив с собой Вашу <span class="yes">сумку</span>.</p><p>Ваши приключения бесславно подошли к концу.</p>'
          )
          change_buttons({ "Игра окончена!": restart })
        } else {
          HubRoomLeftDays2 = 10 - day
          setCookie("cHubRoomLeftDays2", HubRoomLeftDays2)
          if ((time < 19) & (time > 6.5)) {
            change_image("img/revenge/pic_89.jpg")
          } else {
            change_image("img/revenge/pic_89a.jpg")
          }
          change_text(
            '<p>Остаток дня Вы провели в размышлениях о прошедших днях. Вы мечтали всего лишь о службе в патруле, охранять Братство, дышать свежим воздухом. И вот Вы стали настоящим разведчиком, одним из немногих, кто живёт в городах Пустоши и добывает ценные сведения. О таком повороте событий Вы и думать не могли. Это большая честь, доступная избранным. Под эти мысли Вы задремали…</p><p>…Вы очнулись под яростную трескотню настенного будильника. На циферблате – <span class="yes">19:00</span>. Все <span class="yes">магазины</span> и многие <span class="yes">организации</span> уже закрыты.</p><p>На выполнение задания <span class="yes">Братства Стали</span> Вам осталось <span class="yes">' +
              HubRoomLeftDays2 +
              " дней</span></p>"
          )
          change_buttons({
            "Подождать до утра": hub_MalteseFalcon_Room1,
            "Выйти из номера": hub_MalteseFalcon,
          })
        }
      }
    }
  }
  currentFunction = hub_MalteseFalcon_Room2
  setCookie("ccurrentFunction", currentFunction)
}
function hub_MalteseFalcon_Room3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_89.jpg")
  } else {
    change_image("img/revenge/pic_89a.jpg")
  }
  lower_stimpacks(1)
  if (stimpacks === 0) {
    $("#stimpack span").remove()
  }
  raise_health(40)
  change_text(
    '<p>Вы ощупали свою <span class="yes">рану</span> и сделали инъекцию <span class="yes">препарата</span> прямо в воспалённую область. Буквально на Ваших глазах края раны стали стягиваться, а воспаление ушло.</p><p>"Не перестаю удивляться чудесам науки", - подумали Вы, почувствовав <span class="yes">облегчение</span>.</p>'
  )
  if ((stimpacks > 0) & (health < 90)) {
    change_buttons({
      "Спать до утра": hub_MalteseFalcon_Room1,
      "Подождать до вечера": hub_MalteseFalcon_Room2,
      "Применить стимулятор": hub_MalteseFalcon_Room3,
      "Выйти из номера": hub_MalteseFalcon,
    })
  } else {
    change_buttons({
      "Спать до утра": hub_MalteseFalcon_Room1,
      "Подождать до вечера": hub_MalteseFalcon_Room2,
      "Выйти из номера": hub_MalteseFalcon,
    })
  }
  currentFunction = hub_MalteseFalcon_Room3
  setCookie("ccurrentFunction", currentFunction)
}

/* Центр Города - Красный Караван */
function crimsonCaravan() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (time >= 19 || time < 9) {
    change_image("img/revenge/pic_93a.jpg")
    change_text(
      '<p>Вы дёрнули за ручку двери офиса <span class="yes">"Красный Караван"</span>, однако дверь оказалась заперта. Красноречивая табличка "ЗАКРЫТО" в окошке слева от двери подтверждала этот факт. Ниже был указан график работы: с <span class="yes">9:00</span> до <span class="yes">19:00</span>.</p><p>Ничего не попишешь, придётся ждать открытия до <span class="yes">завтра</span>.</p>'
    )
    change_buttons({ "Отойти от двери офиса": hub_center1 })
  } else {
    if (crimsonCaravanFirstMeet === false) {
      crimsonCaravanFirstMeet = true
      setCookie("ccrimsonCaravanFirstMeet", crimsonCaravanFirstMeet)
      change_image("img/revenge/pic_93.jpg")
      change_text(
        '<p>Народу внутри офиса <span class="yes">«Красный Караван»</span> было не продохнуть. Все галдели, бегали от стола к столу. <span class="yes">Управляющей</span> явно не до Вас. Вы остановили одного из <span class="yes">менеджеров</span> компании и спросили:</p><p>- Друг, по поводу…</p><p>- По поводу работы, друг? - Нервно спросил караванщик. – Людей видишь сколько? Зайди через пару лет, посвободнее будет. Караваны стоят, брамины гадят. Всё тут загадили. Кстати...</p><p><span class="yes">Менеджер</span> смерил Вас взглядом.</p><p>- <span class="yes">Работа</span> всё же найдётся. Свободная вакансия, так сказать. Нужно убрать загоны для скота. Оплата <span class="yes">100 крышек</span> в день. Как думаешь, справишься? - На лице парня застыла усмешка.</p>'
      )
      change_buttons({
        "Нет такой работы с которой я не справлюсь! Веди.": crimsonCaravan2,
        "Убирать дерьмо за коровами? Гадость какая! Ни за что!":
          crimsonCaravan1,
      })
    } else {
      change_image("img/revenge/pic_93.jpg")
      change_text(
        '<p>Народу внутри офиса <span class="yes">«Красный Караван»</span> было не продохнуть. Все галдели, бегали от стола к столу. <span class="yes">Управляющей</span> явно не до Вас. <span class="yes">Менеджер</span> компании, с которым Вы говорили при первой встрече, увидев Вас, сам подошёл:</p><p>- Снова ты, друг? - ухмыльнулся он. – Караваны по-прежнему ходят редко. Вакансии караванщиков не появились. А вот брамины гадить не перестали. Будешь убирать? Плачу <span class="yes">100 крышек</span>.</p>'
      )
      change_buttons({
        "Конечно буду. Мне нужны деньги. Пошли.": crimsonCaravan2,
        "Нет. Я просто заглянул узнать не появились ли вакансии по охране караванов.":
          crimsonCaravan1,
      })
    }
  }
  currentFunction = crimsonCaravan
  setCookie("ccurrentFunction", currentFunction)
}
function crimsonCaravan1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_93.jpg")
  change_text(
    '<p>- Ну, нет - так нет, - разочарованно произнёс <span class="yes">менеджер</span>. - Пока рейдеры не перестанут громить почти каждый караван, выходящий из <span class="yes">Хаба</span>, новые вакансии не появятся.</p>'
  )
  change_buttons({ "Выйти на улицу": hub_center1 })
  currentFunction = crimsonCaravan1
  setCookie("ccurrentFunction", currentFunction)
}
function crimsonCaravan2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 22
  change_time(0)
  raise_caps(100)
  change_image("img/revenge/pic_92.jpg")
  change_text(
    '<p><span class="yes">Менеджер</span> привёл Вас к угаженному загону и вручил лопату со сменной одеждой.</p><p>- Занимайся. Вечером приходи за оплатой, - сказал он Вам и отправился обратно в офис.</p><p>Это был адский день. Вы черпали дерьмо лопатой и грузили на небольшую тележку. После десятого рейса Вы перестали считать сколько раз отвезли говно из загона в выгребную яму.</p><p>Под конец дня Вы чувствовали себя совершенно измотанным. Зато <span class="yes">100 крышек</span>, полученных за работу, приятно оттягивали Ваш карман. Да и возможность принять душ оказалась не лишней.</p>'
  )
  change_buttons({ "Переодеться и выйти на улицу": hub_center1 })
  currentFunction = crimsonCaravan2
  setCookie("ccurrentFunction", currentFunction)
}

/* Центр Города - Дальнобойщики */
function farGo() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_94.jpg")
  } else {
    change_image("img/revenge/pic_94a.jpg")
  }
  change_text(
    '<p>С офисом компании <span class="yes">«Дальнобойщики»</span> дело обстояло не просто, а очень просто: дверь была закрыта. На стене висел плакат: «Работы НЕТ!!!».</p><p>Емко и доступно.</p>'
  )
  change_buttons({ "Отправиться в другое место": hub_center1 })
  currentFunction = farGo
  setCookie("ccurrentFunction", currentFunction)
}

/* Центр Города - Игуана Боб */
function iguanaBob() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_95.jpg")
    if (angryBob === false) {
      change_text(
        '<p>Вы пошли на источник запаха и наткнулись на весёлого человека за прилавком.</p><p>- Привет, странник! Меня зовут <span class="yes">Боб</span>. Небось пришёл отведать знаменитую на весь мир <span class="yes">игуану Боба</span>? Хочешь вот такую здоровенную за <span class="yes">5 крышек</span>?</p>'
      )
      change_buttons({
        "Вкуснятинка! Держи 5 крышек!": iguanaBob1,
        "Я бы лучше свою руку съел, чем твою проклятую игуану!": iguanaBob2,
        "Не сейчас, Боб. Я загляну к тебе попозже.": hub_center1,
      })
    } else {
      change_text(
        '<p>Вы подошли к <span class="yes">Шашлычной Боба</span>. На этот раз продавец был уже на так весел, как при первой встрече.</p><p>- Опять  ты?! Ну, что, решил таки взять игуану за <span class="yes">10 крышек</span>? – Боб явно еле сдерживается.</p>'
      )
      change_buttons({
        "Ладно. Вот деньги. Давай свою игуану.": iguanaBob3,
        "Что-то сервис у тебя на нуле, Боб! Где расположение к клиенту?":
          iguanaBob4,
        "Не сейчас, Боб. Я загляну к тебе попозже.": hub_center1,
      })
    }
  } else {
    change_image("img/revenge/pic_95a.jpg")
    change_text(
      '<p>Вы подошли к <span class="yes">Шашлычной Боба</span>. Однако самого <span class="yes">Боба</span> нигде не видно. Прилавок закрыт на замок.</p><p>Приглядевшись, Вы увидели записку, приклеенную к прилавку: <span class="yes">"Закрыто до рассвета"</span>.</p>'
    )
    change_buttons({ "Отправиться в другое место": hub_center1 })
  }
  currentFunction = iguanaBob
  setCookie("ccurrentFunction", currentFunction)
}
function iguanaBob1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_caps(5)
  raise_satiety(1)
  change_image("img/revenge/pic_95.jpg")
  change_text(
    '<p>- На здоровье, друг! - <span class="yes">Боб</span> вручил Вам огромную <span class="yes">игуану на шпажке</span>. - У неё тонкий вкус. ОСОБЕННЫЙ! Возвращайся ещё.</p><p>Вы взяли шпажку в руки и принялись за еду. Сочное мясо так и таяло во рту.</p><p>Вы замечательно перекусили. Видя Ваше довольное лицо, <span class="yes">продавец</span> вкрадчиво поинтересовался:</p><p>- Вижу тебе понравилось?! Ну, что придёшь ещё раз?</p>'
  )
  change_buttons({
    "Это было настолько восхитительно, что я, пожалуй, возьму ещё одну игуану, Боб!":
      iguanaBob11,
    "Даже не сомневайся, Боб! До встречи.": hub_center1,
  })
  currentFunction = iguanaBob1
  setCookie("ccurrentFunction", currentFunction)
}
function iguanaBob11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_caps(5)
  raise_satiety(1)
  change_image("img/revenge/pic_95.jpg")
  change_text(
    '<p>- Ну, конечно! Держи ещё одну, дружище! - <span class="yes">Боб</span> вручил Вам огромную <span class="yes">игуану на шпажке</span>.</p><p>Вы взяли шпажку в руки и принялись за еду. Сочное мясо так и таяло во рту.</p><p>Вы замечательно перекусили. Видя Ваше довольное лицо, <span class="yes">продавец</span> ещё раз вкрадчиво поинтересовался:</p><p>- Вижу тебе понравилось?! Ну, что придёшь ещё раз?</p>'
  )
  change_buttons({
    "Это было настолько восхитительно, что я, пожалуй, возьму ещё одну игуану, Боб!":
      iguanaBob11,
    "Даже не сомневайся, Боб! До встречи.": hub_center1,
  })
  currentFunction = iguanaBob11
  setCookie("ccurrentFunction", currentFunction)
}
function iguanaBob2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  angryBob = true
  change_image("img/revenge/pic_95.jpg")
  change_text(
    '<p>- Так, пошёл к чёрту, мерзавец! - заорал <span class="yes">продавец</span>. - И чтобы больше я тебя не видел.</p>'
  )
  change_buttons({ "*скрутить  фигуру из трёх пальцев*": hub_center1 })
  currentFunction = iguanaBob2
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cangryBob", angryBob)
}
function iguanaBob3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_caps(10)
  raise_satiety(1)
  change_image("img/revenge/pic_95.jpg")
  change_text(
    '<p>- Вот тебе игуана - <span class="yes">Боб</span> вручил Вам огромную <span class="yes">игуану на шпажке</span>. - Теперь оставь меня в покое, пожалуйста.</p><p>Вы молча стали пережёвывать мясо, которое действительно оказалось невероятно вкусным. Оскорбленный ранее вами <span class="yes">продавец</span> старался не обращать на Вас ни малейшего внимания. Отбросив в сторону обглоданную шпажку, Вы почувствовали, некоторое насыщение.</p>'
  )
  change_buttons({ "Отойти от палатки": hub_center1 })
  currentFunction = iguanaBob3
  setCookie("ccurrentFunction", currentFunction)
}
function iguanaBob4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_95.jpg")
  change_text(
    '<p>- Мразь! Ты – мразь! Я бы пристрелил тебя, ублюдок! – нервы у <span class="yes">парня</span> явно сдали.</p><p>Ну, его к чёрту. Ещё нажалуется полиции.</p>'
  )
  change_buttons({ "Отойти от палатки": hub_center1 })
  currentFunction = iguanaBob4
  setCookie("ccurrentFunction", currentFunction)
}

/* Центр Города - Офис Торговцев Водой */
function waterMerchants() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    if (marthaMeetBad === false) {
      change_image("img/revenge/pic_96.jpg")
      if (wastelandRoad === true) {
        change_text(
          '<p>Вы в офисе <span class="yes">Торговцев Водой</span>. В приёмной сидели несколько человек. В основном это были караванщики компании. Каждый занимался своим делом.</p><p>Среди прочих Вы узнали своего знакомого болтуна – <span class="yes">начальника каравана</span>, которого встретили по дороге в город.</p><p>У входа в  офис <span class="yes">управляющей</span> стоял здоровенный <span class="yes">охранник</span>.</p>'
        )
        change_buttons({
          "Поприветствовать своего знакомого": waterMerchants1,
          "Обратиться к охраннику у двери": waterMerchants2,
          "Выйти из офиса": hub_center1,
        })
      } else {
        change_text(
          '<p>Вы в офисе <span class="yes">Торговцев Водой</span>. В приёмной сидели несколько человек. В основном это были караванщики компании. Каждый занимался своим делом.</p><p>У входа в  офис <span class="yes">управляющей</span> стоял здоровенный <span class="yes">охранник</span>.</p>'
        )
        change_buttons({
          "Обратиться к охраннику у двери": waterMerchants2,
          "Выйти из офиса": hub_center1,
        })
      }
    } else {
      change_image("img/revenge/pic_96b.jpg")
      change_text(
        '<p>Вы подошли к офису <span class="yes">Торговцев Водой</span>. Ваша прошлая встреча с управляющей <span class="yes">Мартой</span> окончилась грандиозным скандалом. Вам повезло, что злобная охрана не отбила Вам почки. Однако теперь к офису <span class="yes">управляющей</span> Вас не подпустят на пушечный выстрел.</p><p>Здоровый <span class="yes">охранник</span> выглянул из окна офиса и, завидев Вас, показал огромную кувалду и заорал, чтобы Вы убирались прочь. К сожалению, Вы только зря потратили время, заявившись сюда после содеянного.</p>'
      )
      change_buttons({ "Вернуться к Центру города": hub_center1 })
    }
  } else {
    change_image("img/revenge/pic_96a.jpg")
    change_text(
      '<p>Вы дёрнули за ручку двери офиса <span class="yes">Торговцев Водой</span>, однако дверь оказалась заперта. Красноречивая табличка "ЗАКРЫТО" в окошке справа от двери подтверждала этот факт. Ниже был указан график работы: с <span class="yes">9:00</span> до <span class="yes">19:00</span>.</p><p>Ничего не попишешь, придётся ждать открытия до <span class="yes">завтра</span>.</p>'
    )
    change_buttons({ "Отправиться в другое место": hub_center1 })
  }
  currentFunction = waterMerchants
  setCookie("ccurrentFunction", currentFunction)
}
function waterMerchants1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_97.jpg")
  if ((meetCaravanArmed === false) & (badWaterMerchant === false)) {
    if (marthaFirstMeet === false) {
      change_text(
        '<p>- Привет, помнишь меня? – спросили Вы у знакомого <span class="yes">караванщика в длинном плаще</span>.</p><p>- О! Ещё б не помнить, будто 100 лет прошло. - <span class="yes">Начальник каравана</span> заулыбался. - Привет! Рад встрече! Ещё историю?</p>'
      )
      change_buttons({
        "В другой раз! Я к главной Вашей. С деловым предложением. Замолвишь словечко?":
          waterMerchants3,
        "Не сейчас. Я к тебе ещё зайду.": waterMerchants,
      })
    } else {
      change_text(
        '<p>- Привет, как дела? – спросили Вы у знакомого <span class="yes">караванщика в длинном плаще</span>.</p><p>- О! Какие люди! - <span class="yes">Джо</span> заулыбался. - Привет! Рад встрече! Ещё историю?</p>'
      )
      change_buttons({
        "Не сейчас. Я к тебе ещё зайду попозже.": waterMerchants,
      })
    }
  } else if ((meetCaravanArmed === true) & (badWaterMerchant === false)) {
    if (marthaFirstMeet === false) {
      change_text(
        '<p>- Привет, помнишь меня? – спросили Вы у знакомого <span class="yes">караванщика в длинном плаще</span>.</p><p>- Здравствуй. Помню, - прищурив глаза, ответил Ваш знакомый <span class="yes">начальник каравана</span>. - Чуть было стрельбу не затеял. Чего пришёл?</p>'
      )
      change_buttons({
        "Я хочу сделать заманчивое предложение по сотрудничеству. Мне бы к главной.":
          waterMerchants4,
        "Да просто так. Привет сказать. Я к тебе ещё зайду.": waterMerchants,
      })
    } else {
      change_text(
        '<p>- Привет, как дела? – спросили Вы у знакомого <span class="yes">караванщика в длинном плаще</span>.</p><p>- Привет, пойдёт, - прищурив глаза, ответил Ваш знакомый <span class="yes">начальник каравана</span>. - Я занят сейчас. Давай потом поговорим.</p>'
      )
      change_buttons({ "Хм. Ну, как скажешь...": waterMerchants })
    }
  } else if (
    (meetCaravanArmed === true && badWaterMerchant === true) ||
    (meetCaravanArmed === false && badWaterMerchant === true)
  ) {
    change_text(
      '<p>- Привет, помнишь меня? – спросили Вы у знакомого <span class="yes">караванщика в длинном плаще</span>.</p><p>- Такое хамло трудно забыть, - резко ответил Ваш знакомый <span class="yes">начальник каравана</span>. - Я вообще удивлён, что ты ко мне обращаешься. Я с тобой никаких дел иметь не  хочу. Иди, давай. Тут тебе не рады. В офис ты не попадёшь.</p>'
    )
    change_buttons({ "Да я ж просто пошутил тогда...": waterMerchants })
  }
  currentFunction = waterMerchants1
  setCookie("ccurrentFunction", currentFunction)
}
function waterMerchants2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_98.jpg")
  if (badWaterMerchant === false) {
    if (marthaFirstMeet === false) {
      change_text(
        '<p>Вы осторожно поприветствовали здорового <span class="yes">охранника</span>, явно не обладающего магистерской степенью . В этот  раз внешность не оказалась обманчивой: <span class="yes">охранник</span> и в самом деле оказался злым и тупым грубияном.</p><p>- Чё тебя сюда приволокло? Нету работы, ясно?! – заорал он на Вас.</p>'
      )
      change_buttons({
        "Спокойно сказать, что Вы к управляющей с особым визитом":
          waterMerchants21,
        "Молча дать ему в рыло": hub_fail_2,
        "Отойти о ненормального. Мало ли, ещё покалечит": waterMerchants,
      })
    } else if ((marthaFirstMeet === true) & (additionalTask === false)) {
      if (sheriffGreeneSecondTask === true) {
        change_image("img/revenge/pic_98.jpg")
        change_text(
          '<p>Вы поприветствовали здорового <span class="yes">охранника</span>, вертящего в руках огромную кувалду.</p><p>- А, привет, – неожиданно для Вас <span class="yes">охранник</span> проявил дружелюбие. - <span class="yes">Марта</span>, сказала пропустить тебя. С утра уже приходил <span class="yes">шериф Грин</span>. Рассказывал о твоих подвигах.</p><p>Охранник отошёл от двери в кабинет <span class="yes">управляющей</span> и пригласил Вас внутрь:</p><p>- Входи! - словно подтверждая своё дружелюбие произнёс он.</p>'
        )
        change_buttons({
          "Пройти в кабинет управляющей": waterMerchantsMartha4,
        })
      } else {
        change_text(
          '<p>Вы осторожно поприветствовали здорового <span class="yes">охранника</span>, вертящего в руках огромную кувалду.</p><p>- Стой, – <span class="yes">охранник</span> остановил Вас жестом. - <span class="yes">Марта</span>, сказала пропустить тебя снова, если ты поможешь <span class="yes">шерифу</span> с его <span class="yes">проблемами</span>. Пока о твоих деяниях в городе ничего не слышно, так что извини. Пропустить не могу.</p>'
        )
        change_buttons({ "Отойти от охранника": waterMerchants })
      }
    } else if ((marthaFirstMeet === true) & (additionalTask === true)) {
      change_text(
        '<p>Вы осторожно поприветствовали здорового <span class="yes">охранника</span>, вертящего в руках огромную кувалду.</p><p>- Стой, – <span class="yes">охранник</span> остановил Вас жестом. - <span class="yes">Марта</span>, сказала, что вы с ней обо всём уже договорились. У неё сейчас много других дел. Так что больше тебя не задерживаю.</p><p><span class="yes">Охранник</span> указал Вам на выход.</p>'
      )
      change_buttons({ "Отойти от здоровяка": waterMerchants })
    }
  } else {
    change_text(
      '<p>Вы осторожно поприветствовали здорового <span class="yes">охранника</span>, явно не обладающего магистерской степенью . В этот  раз внешность не оказалась обманчивой: <span class="yes">охранник</span> и в самом деле оказался злым и тупым грубияном.</p><p>- Чё тебя сюда приволокло? Нету работы, ясно?! – заорал он на Вас. - Стоп! Да это ж о тебе рассказывали наши <span class="yes">караванщики</span>. Ты любишь посмеяться над незнакомыми людьми, да?! Мы здесь таких не любим. Так что катись туда откуда принесло. А со мной лучше не шути, я не понимаю шуток. Башку проломлю одним ударом.</p><p>Здоровяк ловко перебросил кувалду на плечо.</p>'
    )
    change_buttons({
      "Отойти от него, а то ведь и впрям зашибёт": waterMerchants,
    })
  }
  currentFunction = waterMerchants2
  setCookie("ccurrentFunction", currentFunction)
}
function waterMerchants3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_97.jpg")
  chooseEasyWay = true
  change_text(
    '<p>- Ты парень вроде ничего. Давай я пошепчу с ней минут 10. А ты посиди пока тут. – <span class="yes">караванщик</span> скрылся за дверью.</p><p>Вы ждали минут 40 в итоге. Видимо <span class="yes">караванщик</span> затянул одну из своих многочисленных историй. Когда Вы уже начали потихоньку клевать носом,  из-за двери показалось довольное лицо Вашего нового друга.</p><p>- Ну, заходи давай, чего ждёшь? – он замахал Вам рукой.</p>'
  )
  change_buttons({ "Войти в кабинет управляющей": waterMerchantsMartha })
  currentFunction = waterMerchants3
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cchooseEasyWay", chooseEasyWay)
}
function waterMerchants4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_97.jpg")
  change_text(
    '<p><span class="yes">Караванщик</span> поразмышлял немного, что-то прикидывая в уме, а затем произнёс:</p><p>- Я тебя не достаточно хорошо знаю, чтобы рекомендовать <span class="yes">Марте</span>, - затем он пальцем указал Вам на здорового <span class="yes">охранника</span>, возле входа в кабинет <span class="yes">управляющей</span>. - С ним договаривайся.</p>'
  )
  change_buttons({ "Хм. Ну, и ладно.": waterMerchants })
  currentFunction = waterMerchants4
  setCookie("ccurrentFunction", currentFunction)
}
function waterMerchants21() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_98.jpg")
  change_text(
    '<p>Ровным тоном Вы стали объяснять тупоголовому <span class="yes">охраннику</span>, что пришли не за работой, а с деловым предложением. Однако, Ваша спокойная речь ещё больше раззадорила задиру. Неизвестно чем бы закончилось дело, если бы на его вопли не прибежала управляющая <span class="yes">Марта</span>.</p><p>- Прекрати немедленно, - заорала <span class="yes">Марта</span> на своего <span class="yes">охранника</span>. Переведя свой взгляд на Вас, она спросила - Вы же не по поводу работы?</p><p>- Нет, у меня к Вам предложение от особых людей, – решительно ответили Вы.</p><p>- Ну, пройдёмте тогда в кабинет, - <span class="yes">Марта</span> пригласила Вас жестом и грозно посмотрела на тупого амбала.</p>'
  )
  change_buttons({ "Пройти в кабинет управляющей": waterMerchantsMartha })
  currentFunction = waterMerchants21
  setCookie("ccurrentFunction", currentFunction)
}
function waterMerchantsMartha() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_100.jpg")
  if (chooseEasyWay === true) {
    change_text(
      '<p>Вы оказались в просторном офисе с довоенной мебелью, чудом сохранившейся и продолжающей служить исправно. За столом сидела улыбающаяся управляющая <span class="yes">Марта</span>. А рядом с ней без конца тараторящий <span class="yes">караванщик</span>.</p><p>- Вот! Вот этот человек… о котором я тебе говорил, - голосил он.</p><p>- Остынь, <span class="yes">Джо</span>! Ты утомил меня, - <span class="yes">управляющая</span> перебила <span class="yes">караванщика</span>, и обратилась к Вам. – Привет! Я – <span class="yes">Марта</span>, главная здесь - в этом офисе. <span class="yes">Джо</span> говорит, что ты нормальный парень и у тебя есть какое-то дело к нам? Кто ты и чего хочешь?</p>'
    )
    change_buttons({
      "Рассказать о торговом предложении Братства Стали": waterMerchantsMartha1,
    })
  } else {
    change_text(
      '<p>Вы оказались в просторном офисе с довоенной мебелью, чудом сохранившейся и продолжающей служить исправно. <span class="yes">Управляющая</span> села в кресло и жестом предложила Вам сесть напротив неё.</p><p>- Итак, - начала она. – извините за сцену – охрана последнее время нервная, слишком много людей оказалось без работы. Штурмуют наш офис ежедневно. Я – <span class="yes">Марта</span>, управляющая здесь, в этом офисе. Перейдём на «ты». Кто ты и чего хочешь?</p>'
    )
    change_buttons({
      "Рассказать о торговом предложении Братства Стали": waterMerchantsMartha1,
    })
  }
  currentFunction = waterMerchantsMartha
  setCookie("ccurrentFunction", currentFunction)
}
function waterMerchantsMartha1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (chooseEasyWay === true) {
    change_image("img/revenge/pic_100.jpg")
    change_text(
      '<p>- Привет, Марта! Меня зовут <span class="yes">' +
        heroName +
        '</span>. Есть группа лиц заинтересованных в увеличении потока товарооборота между <span class="yes">Хабом</span> и <span class="yes">Лост-Хиллз</span>. – начали Вы из далека.</p><p>- Ты говоришь о <span class="yes">Братстве Стали</span>? – перебила <span class="yes">Марта</span>.</p><p>- Да, о <span class="yes">Братстве</span>. – ответили Вы.</p><p>- Тааак, <span class="yes">Джо</span>, обожди-ка нас в приёмной, – распорядилась <span class="yes">управляющая</span> и ваш благодетель покорно направился к выходу. Когда он проходил мимо Вас, то заговорщицки подмигнул Вам.</p><p>- А ты сам из Братства? – Спросила девушка и взгляд её стал более проницательным.</p>'
    )
  } else {
    change_image("img/revenge/pic_100.jpg")
    change_text(
      '<p>- Меня зовут <span class="yes">' +
        heroName +
        '</span>. Есть группа лиц заинтересованных в увеличении потока товарооборота между <span class="yes">Хабом</span> и <span class="yes">Лост-Хиллз</span>. – начали Вы из далека.</p><p>- Ты говоришь о <span class="yes">Братстве Стали</span>? – перебила <span class="yes">Марта</span>.</p><p>- Да, о <span class="yes">Братстве</span>, – ответили Вы.</p><p>- А ты сам из них? – взгляд <span class="yes">Марты</span> стал более проницательным.</p>'
    )
  }
  change_buttons({
    "Да, я – один из высокопоставленных членов Братства.":
      waterMerchantsMartha2,
    "Нет. Я из свободных курьеров. Но с официальным визитом.":
      waterMerchantsMartha3,
  })
  currentFunction = waterMerchantsMartha1
  setCookie("ccurrentFunction", currentFunction)
}
function waterMerchantsMartha2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  additionalTask = true
  BOSknown3 = true
  marthaFirstMeet = true
  change_image("img/revenge/pic_100.jpg")
  change_text(
    '<p>Свою высокопоставленность в <span class="yes">Братстве</span> Вы, конечно, преувеличили. Всё же Вы были простым рыцарем, хоть и с важным, ответственным заданием. Однако в данном случае для достижения поставленной руководством задачи можно было пойти на такую хитрость. Как бы там ни было, но Ваши слова произвели эффект разорвавшейся бомбы. Конечно! Ведь раньше <span class="yes">Братство</span> не действовало так открыто, предпочитая отправлять незаметные группы или отдельных разведчиков в города. <span class="yes">Марта</span> стояла, раскрыв рот.</p><p>Довольный произведённым эффектом, Вы деловито изложили план вашего командования об уничтожении угрозы <span class="yes">рейдеров</span> в регионе и восстановлении безопасных маршрутов для передвижения караванов. Вы не забыли упомянуть о том, что <span class="yes">Братство Стали</span> обладает уникальными технологиями, которые, несомненно, будут полезны в будущем мирном времени.</p><p>Ваше предложение было встречено одобрением со стороны <span class="yes">Марты</span>. Она моментально согласилась поднять вопрос об увеличении товарооборота с <span class="yes">Братством Стали</span> в <span class="yes">Лост-Хиллз</span> на внеочередном заседании <span class="yes">Городского Совета</span>.</p><p>- Передайте Вашему коммандованию, что после  того как <span class="yes">Братство</span> ликвидирует угрозу со стороны <span class="yes">рейдеров</span> и восстановит порядок в этом регионе, <span class="yes">Городской Совет Хаба</span>, я уверена, будет просто счастлив увеличить товарооборот в восточном направлении. – <span class="yes">Марта</span> подмигнула. – На самом деле все будут счастливы, поскольку кризис от сокращения объёмов торговли ударил по каждому. Я сделаю всё что смогу. Обещаю Вам, сэр!</p>'
  )
  change_buttons({ "Поблагодарить и выйти из кабинета": waterMerchants })
  currentFunction = waterMerchantsMartha2
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cadditionalTask", additionalTask)
  setCookie("cBOSknown3", BOSknown3)
  setCookie("cmarthaFirstMeet", marthaFirstMeet)
}
function waterMerchantsMartha3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_100.jpg")
  if (chooseEasyWay === true) {
    additionalTask = true
    marthaFirstMeet = true
    change_text(
      '<p>- Хм. Курьер? Ну, пусть будет так. Но торговля практически прекращена в восточном и северном направлениях из-за постоянных атак <span class="yes">Гадюк</span>. Чтобы не предложило <span class="yes">Братство Стали</span> нашему городу – это не станет ценой, которую <span class="yes">Хаб</span> будет готов заплатить за гарантированные потери груза и людей. – <span class="yes">Марта</span> скрестила руки на груди – Я не могу взять на себя ответственность перед городом и <span class="yes">Советом</span>, не получив гарантии. И всё-таки, что конкретно предложили твои работодатели <span class="yes">Хабу</span>?</p><p>Вы деловито изложили план ваших «работодателей» об уничтожении угрозы рейдеров в регионе и восстановлении безопасных маршрутов для передвижения. Также Вы не забыли упомянуть о том, что <span class="yes">Братство Стали</span> обладает уникальными технологиями, которые, несомненно, будут полезны в будущем мирном времени.</p><p>Ваше предложение было встречено одобрением со стороны <span class="yes">Марты</span>. Через некоторое время раздумий она согласилась поднять вопрос об увеличении товарооборота с <span class="yes">Братством Стали</span> в <span class="yes">Лост-Хиллз</span> на внеочередном заседании <span class="yes">Городского Совета</span>.</p><p>- Передай тому, кто тебя послал, что после того как <span class="yes">Братство</span> ликвидирует угрозу со стороны <span class="yes">рейдеров</span> и восстановит порядок в этом регионе <span class="yes">Городской Совет Хаба</span>, я уверена, будет просто счастлив увеличить товарооборот в восточном направлении. – <span class="yes">Марта</span> подмигнула. – На самом деле все будут счастливы, поскольку кризис от сокращения объёмов торговли ударил по каждому. Я сделаю всё что смогу.</p>'
    )
    change_buttons({ "Поблагодарить и выйти из кабинета": waterMerchants })
    setCookie("cadditionalTask", additionalTask)
    setCookie("cmarthaFirstMeet", marthaFirstMeet)
  } else {
    marthaFirstMeet = true
    change_text(
      '<p>- Хм. Курьер? Ну, пусть будет так. Но торговля практически прекращена в восточном и северном направлениях из-за постоянных атак <span class="yes">Гадюк</span>. Чтобы не предложило <span class="yes">Братство Стали</span> городу – это не станет ценой, которую <span class="yes">Хаб</span> будет готов заплатить за гарантированные потери груза и людей. – <span class="yes">Марта</span> скрестила руки на груди – Я не могу взять на себя ответственность перед городом и <span class="yes">Советом</span>, не получив гарантии. Особенно от незнакомого мне «курьера». Друг, не хочу тебя обижать, но в городе тебя никто не знает. Вдруг ты из бандитов, которые просто хотят втереться в доверие? Сначала прояви себя с положительной стороны, например, помоги <span class="yes">шерифу</span>, а потом и продолжим разговор, добро?</p>'
    )
    change_buttons({
      "Добро, Марта. Ещё увидимся.": waterMerchants,
      "Да, пошла ты, сучка! Ещё бы мне условия не ставили.":
        waterMerchantsMarthaBad,
    })
    setCookie("cmarthaFirstMeet", marthaFirstMeet)
  }
  currentFunction = waterMerchantsMartha3
  setCookie("ccurrentFunction", currentFunction)
}
function waterMerchantsMartha4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_100.jpg")
  change_text(
    '<p>Вы вновь в просторном офисе с роскошной довоенной мебелью. <span class="yes">Марта</span> сидела в кресле и, увидев Вас, приветливо замахала рукой.</p><p>- О, наш герой собственной персоной! Привет, <span class="yes">' +
      heroName +
      ',</span> - она предложила Вам присесть напротив неё. – А у меня только что был <span class="yes">Грин</span>. Кто бы мог подумать, что Дон окажется предателем?! Надеюсь теперь наши караваны не будут так часто страдать от рейдеров. Хотя их угрозу никто не отменял. Мы же как раз это и будем обсуждать сейчас, верно? Ты теперь местная знаменитость! В некотором роде. В общем, свой человек! Думаю, ты готов обсудить дела?</p>'
  )
  change_buttons({ "Да, а ты готова?": waterMerchantsMartha5 })
  currentFunction = waterMerchantsMartha4
  setCookie("ccurrentFunction", currentFunction)
}
function waterMerchantsMartha5() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  additionalTask = true
  change_image("img/revenge/pic_100.jpg")
  change_text(
    '<p>- Конечно. – <span class="yes">Марта</span> заговорщицки Вам подмигнула. – Более того, я уже успела поднять вопрос о расширении рынка торговли после окончания кризиса. Могу тебе сообщить, что <span class="yes">Городской Совет</span> с радостью увеличит товарообмен с <span class="yes">Братством Стали</span> в обмен на ликвидацию угрозы со стороны рейдеров. Так что можешь передать тем, кто тебя послал – следующий ход за ними.</p><p>Внутренне Вы ликовали. Вы выполнили <span class="yes">дополнительное задание</span> Совета Старейшин и не раскрыли свою принадлежность к <span class="yes">Братству</span>. Теперь можно со спокойной душой покинуть <span class="yes">город</span>.</p><p>Не подав виду, Вы буднично поблагодарили Марту за сотрудничество и направились к выходу.</p>'
  )
  change_buttons({ "Покинуть кабинет управляющей": waterMerchants })
  currentFunction = waterMerchantsMartha5
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cadditionalTask", additionalTask)
}
function waterMerchantsMarthaBad() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  marthaMeetBad = true
  change_image("img/revenge/pic_99.jpg")
  change_text(
    '<p><span class="yes">Марта</span> ошарашено уставилась на Вас, видимо к такому хамству девушка не привыкла. Придя в себя, она заорала:</p><p>- <span class="yes">Фидо</span>! <span class="yes">Мари</span>! – <span class="yes">Марта</span> позвала охрану. Носители имён мгновенно оказались за Вашей спиной.</p><p>Ничего хорошего их лица не выражали. <span class="yes">Охрана</span> с готовностью смотрела в рот своему боссу.</p><p>- Выбросите это отродье прочь и никогда не пускайте на порог, - гневно воскликнула <span class="yes">управляющая</span>, указывая на Вас пальцем.</p><p>Без лишних промедлений <span class="yes">охранники</span> схватили Вас под руки и выволокли на улицу, дав на прощание хорошего пинка. Незадача, однако… Теперь решить проблему продовольствия бункера никак не получится. Что ж, тут виновата лишь Ваша дикая грубость.</p>'
  )
  change_buttons({ "Поковылять к Центру Города": hub_center1 })
  currentFunction = waterMerchantsMartha5
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cmarthaMeetBad", marthaMeetBad)
}

/* Центр Города - Офис полиции */

function hub_sheriffGreene() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (killDon === true) {
    change_image("img/revenge/pic_211.jpg")
    change_text(
      '<p>Подходя к зданию <span class="yes">полиции</span>, Вы заметили сильное оживление возле офиса <span class="yes">шерифа</span>. <span class="yes">Полицейские</span> входили и выходили из здания, непрерывно что-то обсуждая и отчаяно жестикулируя.</p><p>К гадалке не ходи, всему виной пропажа <span class="yes">Дона</span>. Вам лучше не соваться сюда!</p>'
    )
    change_buttons({ "Вернуться к Центру Города": hub_center1 })
  } else {
    if ((goToJail === true) & (deckerQuest === true)) {
      if (donDeathKennyInj === false) {
        if ((time < 19) & (time > 6.5)) {
          change_image("img/revenge/pic_107.jpg")
        } else {
          change_image("img/revenge/pic_107a.jpg")
        }
        change_text(
          '<p>Вы в офисе <span class="yes">полиции</span> города <span class="yes">Хаба</span>. Здание хоть и старое, но выглядит ухоженным. В офисе было <span class="yes">три</span> человека: мужчина со значком <span class="yes">шерифа</span>, скучающий <span class="yes">страж</span> у решётчатой двери и моложаво выглядящий парень с вышитым именем <span class="yes">«Кенни»</span> на униформе.</p>'
        )
        if (changeHubLocation === false) {
          change_buttons({
            "Обратиться к шерифу": hub_sheriffGreeneJustin,
            "Обратиться к Кенни": hub_sheriffGreeneKenny,
            "Обратиться к стражнику": hub_sheriffGreeneGuard,
            "Выйти из офиса полиции": hub_center1,
          })
        } else {
          change_buttons({
            "Обратиться к шерифу": hub_sheriffGreeneJustin,
            "Обратиться к Кенни": hub_sheriffGreeneKenny,
            "Обратиться к стражнику": hub_sheriffGreeneGuard,
            "Выйти из офиса полиции": hub_center2,
          })
        }
      } else {
        if ((time < 19) & (time > 6.5)) {
          change_image("img/revenge/pic_107b.jpg")
        } else {
          change_image("img/revenge/pic_107c.jpg")
        }
        change_text(
          '<p>Вы в офисе <span class="yes">полиции</span> города <span class="yes">Хаба</span>. Здание хоть и старое, но выглядит ухоженным. В офисе было <span class="yes">двое</span>: мужчина со значком <span class="yes">шерифа</span> и скучающий <span class="yes">страж</span> у решётчатой двери. Помощник шерифа <span class="yes">Кенни</span> проходит лечение после ранения в городской больнице.</p>'
        )
        if (changeHubLocation === false) {
          change_buttons({
            "Обратиться к шерифу": hub_sheriffGreeneJustin,
            "Обратиться к стражнику": hub_sheriffGreeneGuard,
            "Выйти из офиса полиции": hub_center1,
          })
        } else {
          change_buttons({
            "Обратиться к шерифу": hub_sheriffGreeneJustin,
            "Обратиться к стражнику": hub_sheriffGreeneGuard,
            "Выйти из офиса полиции": hub_center2,
          })
        }
      }
    } else if ((goToJail === true) & (deckerQuest === false)) {
      if ((time < 19) & (time > 6.5)) {
        change_image("img/revenge/pic_171.jpg") /* нужна картинка */
      } else {
        change_image("img/revenge/pic_171a.jpg")
      }
      change_text(
        '<p>Вы перед офисом <span class="yes">полиции</span> города <span class="yes">Хаба</span>. Здание хоть и старое, но выглядит ухоженным.</p><p>В голове ещё свежи воспоминания от ночи, проведённой в каталажке, а тело помнит тумаки местных заправил. Без веской причины сюда пока лучше не соваться.</p>'
      )
      if (changeHubLocation === false) {
        change_buttons({ "Отойти от офиса полиции": hub_center1 })
      } else {
        change_buttons({ "Отойти от офиса полиции": hub_center2 })
      }
    } else if ((goToJail === false) & (deckerQuest === true)) {
      if (donDeathKennyInj === false) {
        if ((time < 19) & (time > 6.5)) {
          change_image("img/revenge/pic_107.jpg")
        } else {
          change_image("img/revenge/pic_107a.jpg")
        }
        change_text(
          "<p>Это невозможный вариант! Пересмотри логику. Это событие не может наступить без посадки в тюрьму.</p>"
        )
        change_buttons({ Перезагрузить: restart })
      } else {
        if ((time < 19) & (time > 6.5)) {
          change_image("img/revenge/pic_107b.jpg")
        } else {
          change_image("img/revenge/pic_107c.jpg")
        }
        change_text(
          '<p>Вы в офисе <span class="yes">полиции</span> города <span class="yes">Хаба</span>. Здание хоть и старое, но выглядит ухоженным. В офисе было <span class="yes">двое</span>: мужчина со значком <span class="yes">шерифа</span> и скучающий <span class="yes">страж</span> у решётчатой двери. Помощник шерифа Кенни проходит лечение после ранения в городской больнице.</p>'
        )
        if (changeHubLocation === false) {
          change_buttons({
            "Обратиться к шерифу": hub_sheriffGreeneJustin,
            "Обратиться к стражнику": hub_sheriffGreeneGuard,
            "Выйти из офиса полиции": hub_center1,
          })
        } else {
          change_buttons({
            "Обратиться к шерифу": hub_sheriffGreeneJustin,
            "Обратиться к стражнику": hub_sheriffGreeneGuard,
            "Выйти из офиса полиции": hub_center2,
          })
        }
      }
    } else if ((goToJail === false) & (deckerQuest === false)) {
      if (donDeathKennyInj === false) {
        if ((time < 19) & (time > 6.5)) {
          change_image("img/revenge/pic_107.jpg")
        } else {
          change_image("img/revenge/pic_107a.jpg")
        }
        change_text(
          '<p>Вы в офисе <span class="yes">полиции</span> города <span class="yes">Хаба</span>. Здание хоть и старое, но выглядит ухоженным. В офисе было <span class="yes">три</span> человека: мужчина со значком <span class="yes">шерифа</span>, скучающий <span class="yes">страж</span> у решётчатой двери и моложаво выглядящий парень с вышитым именем <span class="yes">«Кенни»</span> на униформе.</p>'
        )
        if (changeHubLocation === false) {
          change_buttons({
            "Обратиться к шерифу": hub_sheriffGreeneJustin,
            "Обратиться к Кенни": hub_sheriffGreeneKenny,
            "Обратиться к стражнику": hub_sheriffGreeneGuard,
            "Выйти из офиса полиции": hub_center1,
          })
        } else {
          change_buttons({
            "Обратиться к шерифу": hub_sheriffGreeneJustin,
            "Обратиться к Кенни": hub_sheriffGreeneKenny,
            "Обратиться к стражнику": hub_sheriffGreeneGuard,
            "Выйти из офиса полиции": hub_center2,
          })
        }
      } else {
        if ((time < 19) & (time > 6.5)) {
          change_image("img/revenge/pic_107b.jpg")
        } else {
          change_image("img/revenge/pic_107c.jpg")
        }
        change_text(
          '<p>Вы в офисе <span class="yes">полиции</span> города <span class="yes">Хаба</span>. Здание хоть и старое, но выглядит ухоженным. В офисе было <span class="yes">двое</span>: мужчина со значком <span class="yes">шерифа</span> и скучающий <span class="yes">страж</span> у решётчатой двери. Помощник шерифа Кенни проходит лечение после ранения в городской больнице.</p>'
        )
        if (changeHubLocation === false) {
          change_buttons({
            "Обратиться к шерифу": hub_sheriffGreeneJustin,
            "Обратиться к стражнику": hub_sheriffGreeneGuard,
            "Выйти из офиса полиции": hub_center1,
          })
        } else {
          change_buttons({
            "Обратиться к шерифу": hub_sheriffGreeneJustin,
            "Обратиться к стражнику": hub_sheriffGreeneGuard,
            "Выйти из офиса полиции": hub_center2,
          })
        }
      }
    }
  }
  currentFunction = hub_sheriffGreene
  setCookie("ccurrentFunction", currentFunction)
}

/* Центр Города - Офис полиции - страж тюрьмы */
function hub_sheriffGreeneGuard() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_108.jpg")
  } else {
    change_image("img/revenge/pic_108a.jpg")
  }
  change_text(
    '<p>Вы обратились к стоящему на посту <span class="yes">стражу</span>, однако он жестом показал Вам, что на службе ему говорить запрещено.</p>'
  )
  change_buttons({ "Оставить полицейского в покое": hub_sheriffGreene })
  currentFunction = hub_sheriffGreeneGuard
  setCookie("ccurrentFunction", currentFunction)
}
/* Центр Города - Офис полиции - Кенни */
function hub_sheriffGreeneKenny() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_109.jpg")
  if ((goToJail === true) & (sheriffGreeneSecondTask === false)) {
    change_text(
      '<p>Перед Вами стоял <span class="yes">молодой парень</span> в форме полицейского. Он выглядел занятым, непрерывно перекладывая бумаги с места на место. Доброе лицо выдавало в нём человека скорее покладистого, чем жёсткого.</p><p>Когда Вы подошли к нему, <span class="yes">детектив Кенни</span> поднял голову и усмехнувшись сказал:</p><p>- О... вот и "герой" нашего <span class="yes">города</span>. Иди-ка ты отсюда. Мы тут не любим любителей кулаки почесать.</p>'
    )
    change_buttons({ "Так вышло...": hub_sheriffGreene })
  } else {
    if (sheriffGreeneSecondTask === true) {
      change_text(
        '<p>Перед Вами стоял <span class="yes">молодой парень</span> в форме полицейского. Он выглядел занятым, непрерывно перекладывая бумаги с места на место. Доброе лицо выдавало в нём человека скорее покладистого, чем жёсткого.</p><p>Когда Вы подошли к нему, <span class="yes">детектив Кенни</span> поднял голову и поприветствовал:</p><p>- Доброго дня! Как дела, <span class="yes">' +
          heroName +
          "</span>?</p>"
      )
      change_buttons({
        "Хорошо, спасибо, Кенни. Забежал привет тебе сказать!":
          hub_sheriffGreene,
      })
    } else {
      if (
        (KennyFirstMeet === false) &
        (sheriffGreeneFirstTask === false) &
        (mainGoodQuestBegin === false)
      ) {
        change_text(
          '<p>Перед Вами стоял <span class="yes">молодой парень</span> в форме полицейского. Он выглядел занятым, непрерывно перекладывая бумаги с места на место. Доброе лицо выдавало в нём человека скорее покладистого, чем жёсткого.</p><p>Когда Вы подошли к нему, <span class="yes">полицейский</span> поднял голову и представился:</p><p>- Доброго дня! Меня зовут <span class="yes">детектив Кенни</span>, я – помощник <span class="yes">шерифа Грина</span>. <span class="yes">Шериф</span> сейчас очень занят. У тебя какое-то дело к <span class="yes">полиции Хаба</span>?</p>'
        )
        change_buttons({
          "Просить дать информацию о рейдерах из банды Гадюк":
            hub_sheriffGreeneKenny1,
          "Извините за беспокойство. Я зайду позже.": hub_sheriffGreene,
        })
      } else if (
        (KennyFirstMeet === true) &
        (getSheriffGreeneFirstTask === false) &
        (sheriffGreeneFirstTask === false) &
        (mainGoodQuestBegin === false)
      ) {
        change_text(
          '<p>Перед Вами стоял <span class="yes">молодой парень</span> в форме полицейского. Он выглядел занятым, непрерывно перекладывая бумаги с места на место. Доброе лицо выдавало в нём человека скорее покладистого, чем жёсткого.</p><p>Когда Вы подошли к нему, <span class="yes">детектив Кенни</span> поднял голову и поприветствовал:</p><p>- Доброго дня! Как всё-таки насчёт небольшой помощи <span class="yes">полиции Хаба?</span></p>'
        )
        change_buttons({
          "Конечно, что у вас за проблема?": hub_sheriffGreeneKenny112,
          "Извини за беспокойство. Я зайду позже.": hub_sheriffGreene,
        })
      } else if (
        (KennyFirstMeet === true) &
        (getSheriffGreeneFirstTask === true) &
        (sheriffGreeneFirstTask === false) &
        (mainGoodQuestBegin === false)
      ) {
        change_text(
          '<p>Перед Вами стоял <span class="yes">молодой парень</span> в форме полицейского. Он выглядел занятым, непрерывно перекладывая бумаги с места на место. Доброе лицо выдавало в нём человека скорее покладистого, чем жёсткого.</p><p>Когда Вы подошли к нему, <span class="yes">детектив Кенни</span> поднял голову и поприветствовал:</p><p>- Доброго дня! Я слышал, что этот <span class="yes">бездомный</span> всё ещё болтается в <span class="yes">Пригороде</span>. Пока ты не поможешь ему, я не смогу поручиться за тебя <span class="yes">шерифу</span>.</p>'
        )
        change_buttons({
          "Уже спешу ему на помощь, спасибо, Кенни.": hub_sheriffGreene,
        })
      } else if (
        (KennyFirstMeet === false) &
        (sheriffGreeneFirstTask === true) &
        (mainGoodQuestBegin === false)
      ) {
        change_text(
          '<p>Перед Вами стоял <span class="yes">молодой парень</span> в форме полицейского. Он выглядел занятым, непрерывно перекладывая бумаги с места на место. Доброе лицо выдавало в нём человека скорее покладистого, чем жёсткого.</p><p>Когда Вы подошли к нему, <span class="yes">детектив Кенни</span> поднял голову и поприветствовал:</p><p>- Доброго дня! Ты ещё не был у <span class="yes">шерифа Грина</span>?! Беги к нему, он ждёт тебя.</p>'
        )
        change_buttons({ "Уже бегу, спасибо, Кенни.": hub_sheriffGreene })
      } else if (
        (KennyFirstMeet === true) &
        (getSheriffGreeneFirstTask === true) &
        (sheriffGreeneFirstTask === true) &
        (mainGoodQuestBegin === false)
      ) {
        change_text(
          '<p>Перед Вами стоял <span class="yes">молодой парень</span> в форме полицейского. Он выглядел занятым, непрерывно перекладывая бумаги с места на место. Доброе лицо выдавало в нём человека скорее покладистого, чем жёсткого.</p><p>Когда Вы подошли к нему, <span class="yes">детектив Кенни</span> поднял голову и поприветствовал:</p><p>- Доброго дня! Я уже слышал о твоей помощи бездомному. <span class="yes">Крейгу</span>, верно? Надеюсь теперь он станет законопослушным гражданином. Теперь беги к <span class="yes">шерифу Грину</span>, он ждёт тебя.</p>'
        )
        change_buttons({ "Уже бегу, спасибо, Кенни.": hub_sheriffGreene })
      } else if (mainGoodQuestBegin === true) {
        change_text(
          '<p>Перед Вами стоял <span class="yes">молодой парень</span> в форме полицейского. Он выглядел занятым, непрерывно перекладывая бумаги с места на место. Доброе лицо выдавало в нём человека скорее покладистого, чем жёсткого.</p><p>Когда Вы подошли к нему, <span class="yes">детектив Кенни</span> поднял голову и поприветствовал:</p><p>- Доброго дня! Как дела, <span class="yes">' +
            heroName +
            "</span>?</p>"
        )
        change_buttons({
          "Хорошо, спасибо, Кенни. Забежал привет тебе сказать!":
            hub_sheriffGreene,
        })
      }
    }
  }
  currentFunction = hub_sheriffGreeneKenny
  setCookie("ccurrentFunction", currentFunction)
}
function hub_sheriffGreeneKenny1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_109.jpg")
  change_text(
    '<p>Зачем крутить и мудрить, зачем городить искусственные конструкции? Вы решили спросить помощника шерифа <span class="yes">Кенни</span> о налётчиках напрямую:</p><p>- Я хотел бы получить информацию об атаках на караваны, которые часто происходят последнее время. Я также хотел бы узнать где находится <span class="yes">база</span> этих людей, – вот так, просто и без зайтей, Вы сформулировали свою мысль.</p><p>- Да, эти <span class="yes">рейдеры</span> дают караванщикам последнее время жару, – начал <span class="yes">детектив Кенни</span>. – А, кстати… Почему ты о них спрашиваешь?</p>'
  )
  change_buttons({
    "Я хотел бы помочь вам прекратить эти набеги.": hub_sheriffGreeneKenny11,
    "Просто любопытно.": hub_sheriffGreeneKenny12,
    "Извините за беспокойство. Я зайду позже...": hub_sheriffGreeneKenny13,
  })
  currentFunction = hub_sheriffGreeneKenny1
  setCookie("ccurrentFunction", currentFunction)
}
function hub_sheriffGreeneKenny11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_109.jpg")
  change_text(
    '<p>Напрягшееся было лицо <span class="yes">детектива</span> вновь приобрело расслабленное выражение.</p><p>- Ууух! - <span class="yes">Кенни</span> облегчённо выдохнул. - Я уж решил было заподозрить тебя в связи с <span class="yes">Гадюками</span>. Ты не принимай близко к сердцу, время сейчас такое... Не лучшее для всех нас. Ну, у <span class="yes">шерифа</span> есть кое-какая информация по этому поводу. Но просто так он с неизвестным человеком делиться не станет. Ты бы помог нам с <span class="yes">некоторой проблемой</span>? </p>'
  )
  change_buttons({
    "Слушай, Кенни, я из Братства Стали. Мне ваши проблемы некогда решать.":
      hub_sheriffGreeneKenny111,
    "Конечно, что у вас за проблема?": hub_sheriffGreeneKenny112,
    "Извините, детектив, но у меня сейчас нет времени на решение ваших проблем.":
      hub_sheriffGreeneKenny113,
  })
  currentFunction = hub_sheriffGreeneKenny11
  setCookie("ccurrentFunction", currentFunction)
}
function hub_sheriffGreeneKenny12() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_109.jpg")
  change_text(
    '<p>Сказав это, Вы понадеялись на то, что вопрос исчерпан и можно было бы перейти к другой теме. Однако <span class="yes">помощник шерифа</span> оказался настроен более решительно, чем могло показаться.</p><p>- Не так быстро! Кто ты, чёрт тебя дери? И что тебе известно об этих атаках? - <span class="yes">Кенни</span> положил руку на рукоять своего пистолета.</p><p>Ситуация похоже начала преобретать нежелательный оборот.</p>'
  )
  change_buttons({
    "Я из Братства Стали. Мы заинтересованы в прекращении атак на караваны в этом регионе.":
      hub_sheriffGreeneKenny111,
    "Я простой путешественник и не хочу неприятностей.":
      hub_sheriffGreeneKenny121,
    "Представиться и предложить помощь в уничтожении рейдеров":
      hub_sheriffGreeneKenny122,
  })
  currentFunction = hub_sheriffGreeneKenny12
  setCookie("ccurrentFunction", currentFunction)
}
function hub_sheriffGreeneKenny13() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_109.jpg")
  change_text(
    '<p>Сказав это, Вы, было, засобирались на выход, но Кенни преградил Вам путь. <span class="yes">Помощник шерифа</span> оказался настроен более решительно, чем могло показаться.</p><p>- Не так быстро! Кто ты, чёрт тебя дери? И что тебе известно об этих атаках? - <span class="yes">Кенни</span> положил руку на рукоять своего пистолета.</p><p>Ситуация похоже начала преобретать нежелательный оборот.</p>'
  )
  change_buttons({
    "Я из Братства Стали. Мы заинтересованы в прекращении атак на караваны в этом регионе.":
      hub_sheriffGreeneKenny111,
    "Я простой путешественник и не хочу неприятностей.":
      hub_sheriffGreeneKenny121,
    "Представиться и предложить помощь в уничтожении рейдеров":
      hub_sheriffGreeneKenny122,
  })
  currentFunction = hub_sheriffGreeneKenny13
  setCookie("ccurrentFunction", currentFunction)
}
function hub_sheriffGreeneKenny111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_109.jpg")
  sheriffGreeneFirstTask = true
  BOSknown = true
  sheriffGreeneFirstTaskEasy = true
  change_text(
    '<p>Вы вытянулись по-военному и стали ждать эффекта от сказанных Вами слов. Эффект оказался ожидаем – у <span class="yes">Кенни</span> натурально отвалилась челюсть.</p><p>- Ччччто тты... Вввы сказали?!! – <span class="yes">Кенни</span>, заикаясь, пытался собрать свои мысли и эмоции в кучу. – Из <span class="yes">Братства</span>…</p><p>- …<span class="yes">Стали</span>. Так точно, <span class="yes">детектив</span>! – самодовольно продекламировали Вы. – И я уполномочен сделать <span class="yes">городу</span> уникальное предложение. Наша <span class="yes">организация</span> готова решить проблему с <span class="yes">рейдерами</span> в регионе для восстановления товаропотока. Мы тоже заинтересованы в том, чтобы грузы доходили до нашего <span class="yes">бункера</span>.</p><p>- Ну, это же совершенно меняет дело, сэр, - обрадовался <span class="yes">помощник шерифа</span>. – Я немедленно доложу <span class="yes">Джастину</span>… В смысле, <span class="yes">шерифу Грину</span> о Вас. Поговорите с ним, он будет ждать Вас.</p>'
  )
  change_buttons({ "Вольно, детектив. Ещё увидимся.": hub_sheriffGreene })
  currentFunction = hub_sheriffGreeneKenny111
  setCookie("ccurrentFunction", currentFunction)
  setCookie("csheriffGreeneFirstTask", sheriffGreeneFirstTask)
  setCookie("cBOSknown", BOSknown)
  setCookie("csheriffGreeneFirstTaskEasy", sheriffGreeneFirstTaskEasy)
}
function hub_sheriffGreeneKenny121() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_109.jpg")
  change_text(
    '<p>Когда <span class="yes">Кенни</span> услышал Ваше нелепое оправдание, то глаза его сузились.</p><p>- Ну, хочешь ты или нет, а неприятности тебе уже практически обеспечены! Последний раз спрашиваю. Кто ты и что знаешь об атаках? - ствол пистолета <span class="yes">детектива</span> медленно направлялся в Вашу сторону.</p><p>Сейчас или никогда! Другого шанса у Вас точно не будет.</p>'
  )
  change_buttons({
    "Я из Братства Стали. Мы заинтересованы в прекращении атак на караваны в этом регионе.":
      hub_sheriffGreeneKenny111,
    "Ладно. Ты меня поймал. Я с ними… Арестуй меня.": hub_fail_3,
    "Представиться и предложить помощь в уничтожении рейдеров":
      hub_sheriffGreeneKenny122,
  })
  currentFunction = hub_sheriffGreeneKenny121
  setCookie("ccurrentFunction", currentFunction)
}
function hub_sheriffGreeneKenny112() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  KennyFirstMeet = true
  getSheriffGreeneFirstTask = true
  change_image("img/revenge/pic_109.jpg")
  change_text(
    '<p>- Ничего такого особенного, но <span class="yes">шерифу</span> сильно досаждают многочисленные жалобы на <span class="yes">бездомного человека</span>, живущего в <span class="yes">Пригороде</span> и в буквальном смысле отравляющего кислород местным жителям и приезжим. Избавь нас от этого <span class="yes">вонючки</span>, только не делай ничего противоправного. - <span class="yes">Кенни</span> наклонился к Вам и прошептал. - <span class="yes">Грин</span> собирается его вышвырнуть из города. Неправильно это. Нужно помочь человеку. Как сделаешь, возвращайся ко мне. Я замолвлю за тебя словечко <span class="yes">шерифу</span>.</p>'
  )
  change_buttons({ "Добро, детектив. Ещё увидимся.": hub_sheriffGreene })
  currentFunction = hub_sheriffGreeneKenny112
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cKennyFirstMeet", KennyFirstMeet)
  setCookie("cgetSheriffGreeneFirstTask", getSheriffGreeneFirstTask)
}
function hub_sheriffGreeneKenny113() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_109.jpg")
  KennyFirstMeet = true
  change_text(
    '<p>- Как жаль, - расстроился <span class="yes">помощник шерифа</span> и перешёл на официальный тон. – А я уж и, правда, решил, что Вы готовы нам помочь. А Вы – просто болтун. Ступайте, гражданин, у нас нет времени на пустые разговоры.</p><p><span class="yes">Кенни</span> отвернулся, давая понять, что разговор окончен.</p>'
  )
  change_buttons({ "Отойти от помощника шерифа": hub_sheriffGreene })
  currentFunction = hub_sheriffGreeneKenny113
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cKennyFirstMeet", KennyFirstMeet)
}
function hub_sheriffGreeneKenny122() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_109.jpg")
  change_text(
    '<p>- Расслабся, <span class="yes">детектив</span>! - начали Вы. - Меня зовут <span class="yes">' +
      heroName +
      '</span>. Я всего лишь хочу помочь <span class="yes">караванщикам</span> решить проблему с постоянными <span class="yes">нападениями</span> на их повозки. От снижения объёмов торговли страдает весь регион, не только <span class="yes">Хаб</span>.</p><p>Напрягшееся было лицо <span class="yes">детектива</span> вновь приобрело расслабленное выражение.</p><p>- Ууух! - <span class="yes">Кенни</span> облегчённо выдохнул. - Я уж решил было заподозрить тебя в связи с <span class="yes">Гадюками</span>. Ты не принимай близко к сердцу, время сейчас такое... Не лучшее для всех нас. Ну, у <span class="yes">шерифа</span> есть кое-какая информация по этому поводу. Но просто так он с неизвестным человеком делиться не станет. Ты бы помог нам с <span class="yes">некоторой проблемой</span>?</p>'
  )
  change_buttons({
    "Слушай, Кенни, я из Братства Стали. Мне ваши проблемы некогда решать.":
      hub_sheriffGreeneKenny111,
    "Конечно, что у вас за проблема?": hub_sheriffGreeneKenny112,
    "Извините, детектив, но у меня сейчас нет времени на решение ваших проблем.":
      hub_sheriffGreeneKenny113,
  })
  currentFunction = hub_sheriffGreeneKenny122
  setCookie("ccurrentFunction", currentFunction)
}

/* Центр Города - Офис полиции - шериф Грин */
function hub_sheriffGreeneJustin() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_110.jpg")
  if (sheriffGreeneSecondTask === true) {
    change_text(
      '<p><span class="yes">Шериф</span> - рослый мужчина в возрасте – был явно занят, зарывшись в бумагах на его столе. На Ваше приветствие он приветливо кивнул Вам и произнёс:</p><p>- Привет, <span class="yes">' +
        heroName +
        "</span>! Как поживаешь?</p>"
    )
    change_buttons({
      "Здравствуйте, шериф Грин! Всё хорошо. Просто проходил мимо.":
        hub_sheriffGreene,
    })
  } else {
    if (
      (sheriffGreeneFirstTask === true) &
      (getSheriffGreeneSecondTask === false) &
      (sheriffGreeneFirstTaskEasy === false)
    ) {
      change_text(
        '<p><span class="yes">Шериф</span> - рослый мужчина в возрасте – был явно занят, зарывшись в бумагах на его столе. На Ваше приветствие он приветливо кивнул Вам и произнёс:</p><p>- Привет. Я – шериф <span class="yes">Джастин Грин</span>. Мне уже доложили о том, что ты помог тому <span class="yes">бездомному</span>. Ты совершил добрый поступок. Возможно, он всё-таки станет достойным гражданином нашего <span class="yes">города</span>. Я рад что ошибался на его счёт. Чем я могу тебе помочь?</p>'
      )
      change_buttons({
        "Шериф, есть люди, заинтересованные в том, чтобы помочь городу с проблемой атак рейдеров на караваны.":
          hub_sheriffGreeneJustin2,
        "Буду с Вами откровенен, шериф Грин. Я - рыцарь Братства Стали и мы хотим положить конец постоянным атакам на торговцев в регионе.":
          hub_sheriffGreeneJustin3,
        "Извините, не буду Вас отвлекать.": hub_sheriffGreene,
      })
    } else if (
      (sheriffGreeneFirstTask === true) &
      (getSheriffGreeneSecondTask === false) &
      (sheriffGreeneFirstTaskEasy === true)
    ) {
      change_text(
        '<p><span class="yes">Шериф</span> - рослый мужчина в возрасте – был явно занят, зарывшись в бумагах на его столе. На Ваше приветствие он приветливо кивнул Вам и произнёс:</p><p>- Доброго дня. Я – шериф <span class="yes">Джастин Грин</span>. Мне уже доложили о том, что в <span class="yes">Хаб</span> прибыл представитель <span class="yes">Братства Стали</span> собственной персоной. Какая честь!</p><p><span class="yes">Шериф</span> приложил ладонь к шляпе.</p><p>- Чем могу помочь Вам, сэр? - <span class="yes">Грин</span> с улыбкой посмотрел на Вас.</p>'
      )
      change_buttons({
        "Буду с Вами откровенен, шериф Грин. Я - рыцарь Братства Стали и мы хотим положить конец постоянным атакам на торговцев в регионе.":
          hub_sheriffGreeneJustin3,
        "Извините, не буду Вас отвлекать.": hub_sheriffGreene,
      })
    } else if (
      (sheriffGreeneFirstTask === true) &
      (getSheriffGreeneSecondTask === true) &
      (mainGoodQuestBegin === false)
    ) {
      change_text(
        '<p><span class="yes">Шериф</span> - рослый мужчина в возрасте – был явно занят, зарывшись в бумагах на его столе. На Ваше приветствие он приветливо кивнул Вам и произнёс:</p><p>- Привет. Ну, что, проследишь за <span class="yes">Доном</span>? Это крайне важно и для нас, и для тебя!</p>'
      )
      change_buttons({
        "Согласен.": hub_sheriffGreeneJustin211,
        "Мне нужно обдумать это шериф. Я к Вам ещё зайду.": hub_sheriffGreene,
      })
    } else if (sheriffGreeneFirstTask === false) {
      change_text(
        '<p><span class="yes">Шериф</span> - рослый мужчина в возрасте – был явно занят, зарывшись в бумагах на его столе. На Ваше приветствие он отреагировал с плохо скрываемым раздражением:</p><p>- Привет. Я – шериф <span class="yes">Джастин Грин</span>. Ты по делу? Что-то случилось? Я занят невероятно.</p>'
      )
      change_buttons({
        "Да, я хотел бы сообщить о преступлении.": hub_sheriffGreeneJustin1,
        "Извините, не буду Вас отвлекать.": hub_sheriffGreene,
      })
    } else if (mainGoodQuestBegin === true) {
      change_text(
        '<p><span class="yes">Шериф</span> - рослый мужчина в возрасте – был явно занят, зарывшись в бумагах на его столе. На Ваше приветствие он приветливо кивнул Вам и произнёс:</p><p>- Привет. Ну, что, уже проследил за <span class="yes">Доном</span>? Это крайне важно и для нас, и для тебя!</p>'
      )
      change_buttons({
        "Я ещё работаю над этим, шериф Грин. Скоро вернусь.": hub_sheriffGreene,
      })
    }
  }
  currentFunction = hub_sheriffGreeneJustin
  setCookie("ccurrentFunction", currentFunction)
}
function hub_sheriffGreeneJustin1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_110.jpg")
  change_text(
    '<p><span class="yes">Шериф</span> отложил бумаги в сторону. Его лицо помрачнело.</p><p>- Слушаю внимательно. Рассказывай всё как есть.</p>'
  )
  if (deckerQuest === false) {
    change_buttons({
      "Да, ладно шериф! Я просто пошутил!": hub_sheriffGreeneJustin11,
    })
  } else {
    change_buttons({
      "Простите, не могу Вам сказать. Иначе меня убъют.":
        hub_sheriffGreeneJustin12,
      "Декер готовит покушение на полицейского Дона.":
        hub_sheriffGreeneJustin13,
    })
  }
  currentFunction = hub_sheriffGreeneJustin1
  setCookie("ccurrentFunction", currentFunction)
}
function hub_sheriffGreeneJustin11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_110.jpg")
  if (angryGreene === false) {
    angryGreene = true
    setCookie("cangryGreene", angryGreene)
    change_text(
      '<p>Лицо <span class="yes">шерифа</span> исказила недобрая ухмылка. </p><p>- Шутить вздумал? У нас тут проблем куча: <span class="yes">преступники</span>, <span class="yes">бездомные</span>… Теперь ещё и юморист появился. Обещаю тебе, ещё раз так пошутишь, вон тот парень, - <span class="yes">шериф</span> указал на <span class="yes">стражника</span> возле решётчатой двери. - Он выбъет всю дурь из твоей глупой башки. А теперь… выход там. Со всем уважением… пошёл вон от сюда!</p>'
    )
    change_buttons({ "Отойти от шерифа Грина": hub_sheriffGreene })
  } else {
    lower_health(30)
    change_text(
      '<p>Глаза <span class="yes">шерифа</span> загорелись недобрым огоньком. Он обернулся к своим <span class="yes">подчинённым</span> и приказал:</p><p>- Этого клоуна, - <span class="yes">Грин</span> указал на Вас. – В клетку. Пусть посидит и подумает.</p><p>После этого <span class="yes">трое</span> полицейских здорово отметелили Вас, а затем потащили в тюремную камеру.</p>'
    )
    change_buttons({ "Оказаться в камере": hub_bad_jail })
  }
  currentFunction = hub_sheriffGreeneJustin11
  setCookie("ccurrentFunction", currentFunction)
}
function hub_sheriffGreeneJustin12() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_110.jpg")
  change_text(
    '<p><span class="yes">Шериф</span> огрчённо взглянул на Вас и произнёс:</p><p>- Если передумаешь, дай мне знать. Это опасное место и кто-то должен постоять за правое дело.</p><p>Не прощаясь, <span class="yes">Грин</span> снова склонился над своими бумагами.</p>'
  )
  change_buttons({ "Оставить шерифа в покое": hub_sheriffGreene })
  currentFunction = hub_sheriffGreeneJustin12
  setCookie("ccurrentFunction", currentFunction)
}
function hub_sheriffGreeneJustin13() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_110.jpg")
  change_text(
    '<p><span class="yes">Шериф Грин</span> аж подпрыгнул на месте, после Ваших слов.</p><p>- Что ты сказал, сынок, повтори-ка, - <span class="yes">шериф</span> встал из-за стола и вплотную подошёл к Вам.</p><p>- <span class="yes">Декер</span> нанял меня убить одного из Ваших людей, <span class="yes">шериф</span>. Вы не ослышались, - ещё раз повторили Вы. – Сейчас он на <span class="yes">складе</span> в <span class="yes">Старом Городе</span>, встречается со <span class="yes">связным рейдеров</span> из <span class="yes">банды Гадюк</span>. Дверь на <span class="yes">склад</span> будет заперта, но у меня есть <span class="yes">ключ</span>.</p><p><span class="yes">Шериф</span> ошарашено смотрел на Вас некоторое время, затем, наконец, произнёс:</p><p>- Одна новость интереснее другой. И обе – потрясающее совпадение. Я уже давно слежу за <span class="yes">Доном</span>. Я подозревал раньше, что именно он стоит за сливом информации о маршрутах караванов, так как проверяет каждый перед выходом из <span class="yes">города</span>, - <span class="yes">Грин</span> поскрёб гладко выбритый подбородок. – И <span class="yes">Декер</span> оказывается тоже замешан. Что ж ты не пришёл ко мне раньше? Я бы хоть жучок или магнитофон тебе дал. Как теперь доказать его причастность?</p>'
  )
  change_buttons({
    'Поймите меня правильно, шериф. Но Ваши архаровцы так здорово приласкали меня по почкам, что сотрудничать с вами не хотелось. От слова "совсем".':
      hub_sheriffGreeneJustin14,
  })
  currentFunction = hub_sheriffGreeneJustin13
  setCookie("ccurrentFunction", currentFunction)
}
function hub_sheriffGreeneJustin14() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_110.jpg")
  change_text(
    '<p>- Ну, ты на моих ребят-то всё не сваливай, - нахмурился <span class="yes">шериф Грин</span>. – Сам, небось, спровоцировал. Быстро поведай-ка мне что делаешь в моём <span class="yes">городе</span>?</p>'
  )
  change_buttons({
    "Есть люди, заинтересованные в том, чтобы помочь городу с проблемой атак рейдеров на караваны. Я представляю этих людей.":
      hub_sheriffGreeneJustin141,
    "Я - рыцарь Братства Стали и мы хотим положить конец постоянным атакам на торговцев в регионе.":
      hub_sheriffGreeneJustin142,
  })
  currentFunction = hub_sheriffGreeneJustin14
  setCookie("ccurrentFunction", currentFunction)
}
function hub_sheriffGreeneJustin141() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_110.jpg")
  change_text(
    '<p>- Что-то ты не с того начал помощь <span class="yes">городу</span>. Как бы там ни было, но у тебя появился прекрасный шанс исправить свою репутацию и помочь нам в захвате <span class="yes">преступников</span>.</p><p>Прежде чем Вы что-либо сказали, <span class="yes">шериф</span> хлопнул в ладоши и сказал одному из своих подчинённых:</p><p>- Эй, сержант, обрати внимание на этого человека, - <span class="yes">шериф</span> указал на Вас пальцем. – Это один из преступников банды <span class="yes">Декера</span>, у которого проснулась совесть. И пусть самого <span class="yes">Декера</span> мы на этот раз не возьмём, но у нас появился прекрасный шанс снизить численность набегов на наши караваны. Он пойдёт впереди твоей группы. А если будет совершать подозрительные действия, стреляйте. Ваша жизнь мне куда более дорога!</p><p>Постановка, однако! Похоже, шансов соскочить с этой опасной операции у Вас больше нет. Лучше приложить все усилия для её скорейшего и успешного завершения.</p><p>Тем временем, <span class="yes">шериф</span> собрал вокруг себя группу из <span class="yes">четырёх</span> тяжеловооружённых полицейских и своего <span class="yes">помощника Кенни</span>. Все вместе вы помчались к зданию склада в <span class="yes">Старом Городе</span>.</p>'
  )
  change_buttons({ Далее: hub_sheriffGreeneJustin15 })
  currentFunction = hub_sheriffGreeneJustin141
  setCookie("ccurrentFunction", currentFunction)
}
function hub_sheriffGreeneJustin142() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  BOSknown = true
  change_image("img/revenge/pic_110.jpg")
  change_text(
    '<p>- Ух-ты! – Предела удивлению <span class="yes">шерифа Грина</span> не было. – Что ж ты, рыцарь не с того начал. Устроил тут. Как бы там ни было, но у тебя появился прекрасный шанс исправить свою репутацию и помочь нам в захвате преступников.</p><p>Прежде чем Вы что-либо сказали, <span class="yes">шериф</span> хлопнул в ладоши и сказал одному из своих подчинённых:</p><p>- Эй, сержант, обрати внимание на этого человека, - <span class="yes">шериф</span> указал на Вас пальцем. – Это один из членов таинственного ордена <span class="yes">Братства Стали</span>.  Ему повезло спутаться не с теми людьми, но спишем это на его изоляцию от внешнего мира. И пусть самого <span class="yes">Декера</span> мы на этот раз не возьмём, но у нас появился прекрасный шанс снизить численность набегов на наши караваны. Он пойдёт впереди твоей группы, сержант.</p><p>Постановка, однако! Похоже, шансов соскочить с этой опасной операции у Вас больше нет. Лучше приложить все усилия для её скорейшего и успешного завершения.</p><p>Тем временем, <span class="yes">шериф</span> собрал вокруг себя группу из <span class="yes">четырёх</span> тяжеловооружённых полицейских и своего <span class="yes">помощника Кенни</span>. Все вместе вы помчались к зданию склада в <span class="yes">Старом Городе</span>.</p>'
  )
  change_buttons({ Далее: hub_sheriffGreeneJustin15 })
  currentFunction = hub_sheriffGreeneJustin142
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cBOSknown", BOSknown)
}

function hub_sheriffGreeneJustin15() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  storageFight = true
  change_image("img/revenge/pic_136.jpg")
  change_text(
    '<p>Прибыв на место, <span class="yes">шериф</span> первым делом осторожно подёргал дверь склада за ручку. Та вполне ожидаемо была заперта.</p><p>- Так, – <span class="yes">шериф</span> вновь обратился к Вам. - Ты с <span class="yes">основной группой</span> заходишь через дверь. Не шуми, нельзя вспугнуть мерзавцев раньше времени. Откроешь дверь тем ключом, который получил от Декера.</p><p>Грин передёрнул затвор своего пистолета-пулемёта.</p><p>- Все готовы? - спросил шериф, бросив взгляд на вашу команду.</p><p>Все шёпотом ответили, что готовы. Вы же просто кивнули.</p>'
  )
  change_buttons({
    "Присоединиться к штурмовой группе": hub_mainQuestGood7111,
  })
  currentFunction = hub_sheriffGreeneJustin15
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cstorageFight", storageFight)
}

function hub_sheriffGreeneJustin2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_110.jpg")
  change_text(
    '<p><span class="yes">Шериф</span> предложил Вам сесть в кресло напротив него.</p><p>- Ну, слушай, - начал <span class="yes">шериф Грин</span> после того как Вы уселись в кресло. - У меня есть предположение, что <span class="yes">кто-то</span> сливает <span class="yes">рейдерам</span> маршруты передвижения особо крупных караванов. Те заранее выбирают место для атаки и такие караваны уничтожаются полностью. Ещё никто не выжил. Более мелкие караваны имеют шанс проскочить. Видимо эти рейдеры по мелочам не размениваются. Мы знаем, что это рейдеры из банды <span class="yes">Гадюк</span>, и у них наверняка логово где-то поблизости. Караваны, как правило, не успевают уйти слишком далеко от <span class="yes">города</span>. Проблема в том, что на севере горы с очень разветвлённой сетью пещер. Там можно сгинуть, но так и не найти их <span class="yes">основного лагеря</span>. Ты понимаешь, к чему я клоню?</p>'
  )
  change_buttons({ "Нам нужен язык?": hub_sheriffGreeneJustin21 })
  currentFunction = hub_sheriffGreeneJustin2
  setCookie("ccurrentFunction", currentFunction)
}
function hub_sheriffGreeneJustin21() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  getSheriffGreeneSecondTask = true
  change_image("img/revenge/pic_110.jpg")
  change_text(
    '<p>- Именно! И тут вступаешь в дело именно ты. Ты – человек новый и не примелькавшийся в <span class="yes">городе</span>. И мне кажешься, что ты порядочный и правильный парень, поэтому я посвящу тебя ещё в одно дело. – <span class="yes">Шериф</span> замялся. – Видишь ли… я подозреваю одного парня из своих… Его имя <span class="yes">Дон</span>. Это человек из старой гвардии, работал ещё с моим дедом - <span class="yes">Роем Грином</span>. Работа <span class="yes">Дона</span> заключается в проверке документов у всех выходящих из <span class="yes">города караванов</span>. Всех полицейских он знает в лицо и сразу поймёт, что за ним следят. Не спрашивай почему, но у меня чутьё на него сработало. Я уверен, что <span class="yes">Дон</span> встречается с <span class="yes">кем-то из рейдеров</span> в городе. Мне нужно чтобы ты <span class="yes">проследил</span> за ним. Согласен?</p>'
  )
  change_buttons({
    "Согласен.": hub_sheriffGreeneJustin211,
    "Мне нужно обдумать это шериф. Я к Вам ещё зайду.": hub_sheriffGreene,
  })
  currentFunction = hub_sheriffGreeneJustin21
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cgetSheriffGreeneSecondTask", getSheriffGreeneSecondTask)
}
function hub_sheriffGreeneJustin3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  BOSknown = true
  change_image("img/revenge/pic_110.jpg")
  change_text(
    '<p><span class="yes">Шериф</span> присвиснул и предложил Вам сесть в кресло напротив него.</p><p>- Ну, слушай, - начал <span class="yes">шериф Грин</span> после того как Вы уселись в кресло. - Не каждый день к нам заходят рыцари <span class="yes">короля Артура</span>. Что ж... у меня есть предположение, что <span class="yes">кто-то</span> сливает <span class="yes">рейдерам</span> маршруты передвижения особо крупных караванов. Те заранее выбирают место для атаки и такие караваны уничтожаются полностью. Ещё никто не выжил. Более мелкие караваны имеют шанс проскочить. Видимо эти рейдеры по мелочам не размениваются. Мы знаем, что это рейдеры из банды <span class="yes">Гадюк</span>, и у них наверняка логово где-то поблизости. Караваны, как правило, не успевают уйти слишком далеко от <span class="yes">города</span>. Проблема в том, что на севере горы с очень разветвлённой сетью пещер. Там можно сгинуть, но так и не найти их <span class="yes">основного лагеря</span>. Ты понимаешь, к чему я клоню?</p>'
  )
  change_buttons({ "Нам нужен язык?": hub_sheriffGreeneJustin21 })
  currentFunction = hub_sheriffGreeneJustin3
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cBOSknown", BOSknown)
}
function hub_sheriffGreeneJustin211() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  mainGoodQuestBegin = true
  change_image("img/revenge/pic_110.jpg")
  change_text(
    '<p><span class="yes">Шериф Грин</span> заулыбался.</p><p>- Ну, слава Богу! - Воскликнул <span class="yes">шериф</span>. - <span class="yes">Дон</span> работает в <span class="yes">Пригороде</span>. Тебе нужно явиться туда в промежуток <span class="yes">с утра до полудня</span>. Ты его сразу узнаешь, он один в городе носит <span class="yes">красные штаны</span>. И ещё одно. От тебя требуется <span class="yes">только проследить</span>. Как только доведёшь его до места встречи, сразу беги ко мне. Мы с парнями будем наготове, чтобы их накрыть. Ну, вот и всё… Давай, друг, мы на тебя надеемся.</p>'
  )
  change_buttons({ "Покинуть офис полиции": hub_center1 })
  currentFunction = hub_sheriffGreeneJustin211
  setCookie("ccurrentFunction", currentFunction)
  setCookie("cmainGoodQuestBegin", mainGoodQuestBegin)
}

/* Район Старый Город */
function oldTown() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time >= 2) & (time <= 6)) {
    if (killDon === true) {
      change_image("img/revenge/pic_169.jpg")
      change_text(
        '<p>Вы шли по улице, когда Вас остановил <span class="yes">отряд полиции</span>.</p><p>- Стой, путник, ты задержан, - рявкнул один из них.</p><p>В мгновение ока Вы оказались в наручниках. Вас привели в <span class="yes">отдел полиции</span>, где один из присутствующих <span class="yes">горожан</span> узнал Ваше лицо.</p><p>- Это он, - закричал он, указывая на Вас пальцем. - Он один из тех, кто заходил в здание <span class="yes">склада</span>!</p>'
      )
      change_buttons({ "Вы попались!": hub_mainQuestBad13 })
    } else {
      change_image("img/revenge/pic_169.jpg")
      change_text(
        '<p>Внезапно Вы почувствовали тяжёлую руку на своём плече. Оглянувшись, Вы увидели высокого <span class="yes">полицейского</span> в зелёной форме.</p><p>- Чего ты шляешься среди <span class="yes">ночи</span>, - довольно грубо спросил у Вас <span class="yes">патрульный</span>. – Ты разве не знаешь, что бродить по городу ночью <span class="yes">запрещено</span>. <span class="yes">Шериф</span> расценивает это как бродяжничество или злоумышление. У тебя, что, нет <span class="yes">денег</span> для того, чтобы переночевать в <span class="yes">отеле</span>?</p><p>Вид его был грозен.</p>'
      )
      if ((caps > 69) & (rentRoom === true)) {
        change_buttons({
          "Вот ключ от моего номера в отеле, офицер. Просто я задержался.":
            nightPatrol,
          "Что Вы, офицер! У меня достаточно денег. Я не бродяга!":
            nightPatrol1,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps > 69) & (rentRoom === false)) {
        change_buttons({
          "Что Вы, офицер! У меня достаточно денег. Я не бродяга!":
            nightPatrol1,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps < 70) & (rentRoom === true)) {
        change_buttons({
          "Вот ключ от моего номера в отеле, офицер. Просто я задержался.":
            nightPatrol,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps < 70) & (rentRoom === false)) {
        change_buttons({
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      }
    }
  } else {
    change_time(2)
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_101.jpg")
    } else {
      change_image("img/revenge/pic_101a.jpg")
    }
    change_text(
      '<p>Вы в районе <span class="yes">Старый город</span>. По улицам ходят какие-то оборванцы. Здания закопченные, старые и ветхие. Соваться в этот район без дела не безопасно. Ваше внимание привлекли <span class="yes">два здания</span> с приоткрытыми дверями (почему бы не зайти в них). Одно из них – здание <span class="yes">старого склада</span>, другое – полуразрушенный <span class="yes">частный дом</span>.</p>'
    )
    change_buttons({
      "Войти в здание склада": oldTown_strore,
      "Войти в частный дом": oldTown_Harold,
      "Перейти в район Центр города": hub_center,
    })
  }
  currentFunction = oldTown
  setCookie("ccurrentFunction", currentFunction)
}
/* Район Старый Город - дубликат для перемещение внутри района */
function oldTown1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time >= 2) & (time <= 6)) {
    if (killDon === true) {
      change_image("img/revenge/pic_169.jpg")
      change_text(
        '<p>Вы шли по улице, когда Вас остановил <span class="yes">отряд полиции</span>.</p><p>- Стой, путник, ты задержан, - рявкнул один из них.</p><p>В мгновение ока Вы оказались в наручниках. Вас привели в <span class="yes">отдел полиции</span>, где один из присутствующих <span class="yes">горожан</span> узнал Ваше лицо.</p><p>- Это он, - закричал он, указывая на Вас пальцем. - Он один из тех, кто заходил в здание <span class="yes">склада</span>!</p>'
      )
      change_buttons({ "Вы попались!": hub_mainQuestBad13 })
    } else {
      change_image("img/revenge/pic_169.jpg")
      change_text(
        '<p>Внезапно Вы почувствовали тяжёлую руку на своём плече. Оглянувшись, Вы увидели высокого <span class="yes">полицейского</span> в зелёной форме.</p><p>- Чего ты шляешься среди <span class="yes">ночи</span>, - довольно грубо спросил у Вас <span class="yes">патрульный</span>. – Ты разве не знаешь, что бродить по городу ночью <span class="yes">запрещено</span>. <span class="yes">Шериф</span> расценивает это как бродяжничество или злоумышление. У тебя, что, нет <span class="yes">денег</span> для того, чтобы переночевать в <span class="yes">отеле</span>?</p><p>Вид его был грозен.</p>'
      )
      if ((caps > 69) & (rentRoom === true)) {
        change_buttons({
          "Вот ключ от моего номера в отеле, офицер. Просто я задержался.":
            nightPatrol,
          "Что Вы, офицер! У меня достаточно денег. Я не бродяга!":
            nightPatrol1,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps > 69) & (rentRoom === false)) {
        change_buttons({
          "Что Вы, офицер! У меня достаточно денег. Я не бродяга!":
            nightPatrol1,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps < 70) & (rentRoom === true)) {
        change_buttons({
          "Вот ключ от моего номера в отеле, офицер. Просто я задержался.":
            nightPatrol,
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      } else if ((caps < 70) & (rentRoom === false)) {
        change_buttons({
          "Я попал в сложную жизненную ситуацию…": nightPatrol2,
        })
      }
    }
  } else {
    change_time(1)
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_101.jpg")
    } else {
      change_image("img/revenge/pic_101a.jpg")
    }
    change_text(
      '<p>Вы в районе <span class="yes">Старый город</span>. По улицам ходят какие-то оборванцы. Здания закопченные, старые и ветхие. Соваться в этот район без дела не безопасно. Ваше внимание привлекли <span class="yes">два здания</span> с приоткрытыми дверями (почему бы не зайти в них). Одно из них – здание <span class="yes">старого склада</span>, другое – полуразрушенный <span class="yes">частный дом</span>.</p>'
    )
    change_buttons({
      "Войти в здание склада": oldTown_strore,
      "Войти в частный дом": oldTown_Harold,
      "Перейти в район Центр города": hub_center,
    })
  }
  currentFunction = oldTown1
  setCookie("ccurrentFunction", currentFunction)
}
/* Район Старый Город - Склад */
function oldTown_strore() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (killDon === true) {
    change_image("img/revenge/pic_105b.jpg")
    change_text(
      '<p>Вы в заброшенном здании <span class="yes">склада</span> где произошло убийство <span class="yes">Дона</span>. Из дальней комнаты доносились неразборчивые голоса.</p><p>У Вас очень скверные предчуствия относительно этор места...</p>'
    )
    change_buttons({
      "Проверить дальние комнаты": oldTown_strore1,
      "Выйти на улицу": oldTown1,
    })
  } else {
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_105.jpg")
    } else {
      change_image("img/revenge/pic_105a.jpg")
    }
    change_text(
      '<p>Вы в заброшенном здании <span class="yes">склада</span> какой-то довоенной компании. Склад, как склад. Десятки таких же заброшек есть на каждой улице этого <span class="yes">города</span>. Тут уже давным-давно всё разграбили и Вам ничего не оставили.</p>'
    )
    change_buttons({
      "Проверить дальние комнаты": oldTown_strore1,
      "Выйти на улицу": oldTown1,
    })
  }
  currentFunction = oldTown_strore
  setCookie("ccurrentFunction", currentFunction)
}
function oldTown_strore1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (killDon === true) {
    if (killDonWithKnife === true) {
      change_image("img/revenge/pic_212.jpg")
    } else {
      change_image("img/revenge/pic_212a.jpg")
    }
    change_text(
      '<p>Вы вошли в комнату, в которой был убит <span class="yes">Дон</span>. Тело всё ещё лежало на полу. А вокруг него стояли <span class="yes">полицейские</span> и пара <span class="yes">гражданских</span> лиц. Присутствующие обернулись на шорох и увидели Вас. Один из горожан, указывая на Вас пальцем, заорал:</p><p>- Это он! Он один из тех, кто заходил сюда!</p><p><span class="yes">Стражи</span> мгновенно  набросились на Вас и заковали в наручники.</p>'
    )
    change_buttons({ "Вы попались!": hub_mainQuestBad13 })
  } else {
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_106.jpg")
    } else {
      change_image("img/revenge/pic_106a.jpg")
    }
    change_text(
      "<p>Ничего! Ничего, кроме пыли. Набрав её приличное количество в ноздри, Вы чихнули что есть мочи! Надо убегать отсюда, пока у Вас не началась астма.</p>"
    )
    change_buttons({ "Выйти из комнаты": oldTown_strore })
  }
  currentFunction = oldTown_strore1
  setCookie("ccurrentFunction", currentFunction)
}

/* Район Старый Город - Частный дом */
function oldTown_Harold() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (meetHarold === false) {
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_102.jpg")
    } else {
      change_image("img/revenge/pic_102a.jpg")
    }
    meetHarold = true
    setCookie("cmeetHarold", meetHarold)
    change_text(
      '<p>Вы вошли в полуразрушенный частный <span class="yes">дом</span>. В такой норе могут жить только скваттеры разве что. В прихожей никого не было, поэтому Вы  беспрепятственно вошли в глубь здания. Посреди комнаты в задумчивости стоял <span class="yes">человек</span> с жуткой кожей, которая местами была похожа на панцирь. Внешность его напоминала облик зомби из довоенных фильмов. Видимо Вы застали это существо в неподходящий момент, так как оно заверещало не своим голосом, уставившись на Вас единственным глазом:</p><p>- Что <span class="yes">старику</span> нельзя уже уединиться? Иди вон!!!</p><p>Эти крики то и дело прерывал его удушливый кашель.</p>'
    )
    change_buttons({
      "Погоди! Только один вопрос...": oldTown_Harold1,
      "Покинуть дом": oldTown1,
    })
  } else {
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_104.jpg")
    } else {
      change_image("img/revenge/pic_104a.jpg")
    }
    change_text(
      '<p>Вы решили снова зайти к тому странному <span class="yes">человеку</span>, но на входе Вас встретил ещё более странный <span class="yes">тип</span>, который накинулся на Вас с вопросами:</p><p>- Вас тут ждали? Вас тут не ждали! Чего стоите? Развернитесь и уходите! Меня зовут <span class="yes">Слэппи</span>, а Вас как звать я не хочу знать! Уходите, уходите! Вход только детям разрешён. Пока охрану не вызвал! Охрана!</p><p>Нет, в этом доме скорби Вам определённо делать нечего.</p>'
    )
    change_buttons({ "Убраться отсюда подальше": oldTown1 })
  }
  currentFunction = oldTown_Harold
  setCookie("ccurrentFunction", currentFunction)
}
function oldTown_Harold1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_103.jpg")
  if (caps > 9) {
    change_text(
      '<p><span class="yes">Существо</span> с то ли обожженной, то ли содранной заживо кожей остановилось, посмотрело на Вас и недовольно проворчало:</p><p>- Одни вопросы… хоть бы кто помог несчастному <span class="yes">старику</span>… Задавай свой вопрос и оставь меня в покое.</p>'
    )
    change_buttons({
      "Дать 10 крышек": oldTown_Harold11,
      "Как тебя зовут?": oldTown_Harold12,
      "Как ты стал таким?": oldTown_Harold14,
      "Почему ты живёшь в этой норе?": oldTown_Harold15,
      "Не буду тебя больше беспокоить. Ухожу.": oldTown1,
    })
  } else {
    change_text(
      '<p><span class="yes">Существо</span> с то ли обожженной, то ли содранной заживо кожей остановилось, посмотрело на Вас и недовольно проворчало:</p><p>- Одни вопросы… хоть бы кто помог несчастному <span class="yes">старику</span>… Задавай свой вопрос и оставь меня в покое.</p>'
    )
    change_buttons({
      "Как тебя зовут?": oldTown_Harold12,
      "Как ты стал таким?": oldTown_Harold14,
      "Почему ты живёшь в этой норе?": oldTown_Harold15,
      "Не буду тебя больше беспокоить. Ухожу.": oldTown1,
    })
  }
  currentFunction = oldTown_Harold1
  setCookie("ccurrentFunction", currentFunction)
}
function oldTown_Harold11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  meetHaroldGood = true
  setCookie("cmeetHaroldGood", meetHaroldGood)
  lower_caps(10)
  change_image("img/revenge/pic_103.jpg")
  change_text(
    '<p>Вы достали из карамана немного <span class="yes">мелочи</span> и протянули их <span class="yes">старику</span>.</p><p>- Извини, я не понял сразу, что ты так сильно нуждаешься. Прими, пожалуйста, эту скромную сумму, - сказали Вы.</p><p><span class="yes">Старик</span> долго смотрел на Вас своим глазом, а затем, фыркнув, произнёс:</p><p>- Ладно, малявка. Спасибо за помощь. Заходи, садись. Чего уж. Только не надолго. Я сейчас очень устал.</p>'
  )
  change_buttons({
    "Как тебя зовут?": oldTown_Harold12,
    "Малявка? Сколько ж тебе лет?": oldTown_Harold13,
    "Как ты стал таким?": oldTown_Harold14,
    "Почему ты живёшь в этой норе?": oldTown_Harold15,
  })
  currentFunction = oldTown_Harold11
  setCookie("ccurrentFunction", currentFunction)
}
function oldTown_Harold12() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_103.jpg")
  if (meetHaroldGood === true) {
    if (haroldName === false) {
      haroldName = true
      setCookie("charoldName", haroldName)
      change_text(
        '<p>- Звать <span class="yes">Гарольд</span>, - <span class="yes">старик</span> закашлялся. – А зовут по-всякому. Например, зомби, гуль, вурдалак, мертвяк… Дальше продолжать?</p><p><span class="yes">Гарольд</span> скрестил на груди руки.</p>'
      )
    } else {
      change_text(
        '<p>- У тебя явно проблемы с памятью. А я думал, что я забывчивый. Молодёжь... Звать <span class="yes">Гарольд</span>, - <span class="yes">старик</span> снова закашлялся. – А зовут по-всякому. Например, зомби, гуль, вурдалак, мертвяк… Дальше продолжать?</p><p><span class="yes">Гарольд</span> скрестил на груди руки.</p>'
      )
    }
    change_buttons({
      "Малявка? Сколько ж тебе лет?": oldTown_Harold13,
      "Как ты стал таким?": oldTown_Harold14,
      "Почему ты живёшь в этой норе?": oldTown_Harold15,
      "Не буду тебя больше беспокоить. Ухожу.": oldTown1,
    })
  } else {
    change_text(
      '<p>- Звать <span class="yes">Гарольд</span>, - <span class="yes">старик</span> закашлялся. – А зовут по-всякому. Например, зомби, гуль, вурдалак, мертвяк… Могу и дальше продолжать, но тебе уже пора.</p><p><span class="yes">Гарольд</span> указал Вам на выход.</p>'
    )
    change_buttons({ "Не буду тебя больше беспокоить. Ухожу.": oldTown1 })
  }
  currentFunction = oldTown_Harold12
  setCookie("ccurrentFunction", currentFunction)
}
function oldTown_Harold13() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_103.jpg")
  if (meetHaroldGood === true) {
    if (haroldAge === false) {
      haroldAge = true
      setCookie("charoldAge", haroldAge)
      change_text(
        '<p>- Лет <span class="yes">100</span>. А может и все <span class="yes">200</span>. - <span class="yes">старик</span> снова зашёлся кашлем. - После мутации я стал жить заметно дольше. Обычные болезни не берут, хотя суставы ломит, да и поясница часто стреляет.</p>'
      )
    } else {
      change_text(
        '<p>- Память у тебя - моё почтение. Только что говорил же тебе! Лет <span class="yes">100</span>. А может и все <span class="yes">200</span>. - <span class="yes">старик</span> снова зашёлся кашлем. - После мутации я стал жить заметно дольше. Обычные болезни не берут, хотя суставы ломит, да и поясница часто стреляет.</p>'
      )
    }
    change_buttons({
      "Как тебя зовут?": oldTown_Harold12,
      "Как ты стал таким?": oldTown_Harold14,
      "Почему ты живёшь в этой норе?": oldTown_Harold15,
      "Не буду тебя больше беспокоить. Ухожу.": oldTown1,
    })
  } else {
    change_text(
      '<p>- Лет <span class="yes">100</span>. А может и все <span class="yes">200</span>. - <span class="yes">старик</span> снова зашёлся кашлем. - Ладно, тебе уже пора.</p><p><span class="yes">Гарольд</span> указал Вам на выход.</p>'
    )
    change_buttons({ "Не буду тебя больше беспокоить. Ухожу.": oldTown1 })
  }
  currentFunction = oldTown_Harold13
  setCookie("ccurrentFunction", currentFunction)
}
function oldTown_Harold14() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_103.jpg")
  if (meetHaroldGood === true) {
    if (haroldBase === false) {
      haroldBase = true
      setCookie("charoldBase", haroldBase)
      change_text(
        '<p>- Это длинная история. Давным-давно, - <span class="yes">старик</span> задумался. – Да <span class="yes">лет 50</span> назад уже будет! Надо бы отпраздновать юбилей… В общем, я был торговцем и водил караваны там и сям по <span class="yes">Пустоши</span>. Сначала всё было здорово, но потом на караваны стали нападать жуткие мутанты. Я со своим другом <span class="yes">Ричардом Грэем</span> снарядил экспедицию для поиска источника этих созданий. Мы шли на <span class="yes">север</span>, пока не нашли старую военную базу <span class="yes">«Марипоза»</span>.</p><p>- Да ладно! До <span class="yes">«Марипозы»</span> дошли??? – Вы осеклись. <span class="yes">«Марипоза»</span> - это военная база США из которой в <span class="yes">2077</span> году капитан <span class="yes">Роджер Мэксон</span> – отец погибшего <span class="yes">Старейшины</span> – вывел военный и гражданский персонал. Из персонала базы и возникла организация, которая сегодня называется <span class="yes">«Братство Стали»</span>. Однако, эту информацию знать этому <span class="yes">бедолаге</span> не стоило.</p><p>- Дошли. А ты откуда знаешь про название этой <span class="yes">базы</span>? – <span class="yes">Старик</span> уставился на Вас своим глазом.</p><p>- Среди караванщиков легенды ходят о вашем походе, - нашлись Вы. – Пожалуйста, продолжай.</p><p>- Хм, - <span class="yes">старик</span> задумался о чём-то, но продолжил. – В общем, мы смогли войти внутрь <span class="yes">базы</span>, но были атакованы охранными системами. Практически все погибли. Я помню, как <span class="yes">Ричард</span> упал в чан с какой-то зелёной жидкостью. Больше его я не видел. Я же потерял сознание от удара о стальную поверхность крана-манипулятора. Очнулся уже в <span class="yes">Пустоши</span> еле живой. Брёл по пескам в полубреду пока не наткнулся на караван. Это оказались мои знакомые, которые доставили меня в <span class="yes">Хаб</span>. С тех пор я тут.</p>'
      )
    } else {
      change_text(
        '<p>- Это длинная история. А у тебя память слишком короткая чтобы запомнить её целиком. Что? Опять рассказать что ли? Давным-давно, - <span class="yes">старик</span> задумался. – Да <span class="yes">лет 50</span> назад уже будет! Надо бы отпраздновать юбилей… В общем, я был торговцем и водил караваны там и сям по <span class="yes">Пустоши</span>. Сначала всё было здорово, но потом на караваны стали нападать жуткие мутанты. Я со своим другом <span class="yes">Ричардом Грэем</span> снарядил экспедицию для поиска источника этих созданий. Мы шли на <span class="yes">север</span>, пока не нашли старую военную базу <span class="yes">«Марипоза»</span>.</p><p>- Да ладно! До <span class="yes">«Марипозы»</span> дошли??? – Вы осеклись. <span class="yes">«Марипоза»</span> - это военная база США из которой в <span class="yes">2077</span> году капитан <span class="yes">Роджер Мэксон</span> – отец погибшего <span class="yes">Старейшины</span> – вывел военный и гражданский персонал. Из персонала базы и возникла организация, которая сегодня называется <span class="yes">«Братство Стали»</span>. Однако, эту информацию знать этому <span class="yes">бедолаге</span> не стоило.</p><p>- Дошли. А ты откуда знаешь про название этой <span class="yes">базы</span>? – <span class="yes">Старик</span> уставился на Вас своим глазом.</p><p>- Среди караванщиков легенды ходят о вашем походе, - нашлись Вы. – Пожалуйста, продолжай.</p><p>- Хм, - <span class="yes">старик</span> задумался о чём-то, но продолжил. – В общем, мы смогли войти внутрь <span class="yes">базы</span>, но были атакованы охранными системами. Практически все погибли. Я помню, как <span class="yes">Ричард</span> упал в чан с какой-то зелёной жидкостью. Больше его я не видел. Я же потерял сознание от удара о стальную поверхность крана-манипулятора. Очнулся уже в <span class="yes">Пустоши</span> еле живой. Брёл по пескам в полубреду пока не наткнулся на караван. Это оказались мои знакомые, которые доставили меня в <span class="yes">Хаб</span>. С тех пор я тут.</p>'
      )
    }
    change_buttons({
      "Как тебя зовут?": oldTown_Harold12,
      "Малявка? Сколько ж тебе лет?": oldTown_Harold13,
      "Почему ты живёшь в этой норе?": oldTown_Harold15,
      "Не буду тебя больше беспокоить. Ухожу.": oldTown1,
    })
  } else {
    change_text(
      '<p>- Это длинная история. Целиком её рассказывать нет никакого настроения и желания, - <span class="yes">старик</span> недовольно крякнул. - Это было на <span class="yes">севере</span>. На старой <span class="yes">военной базе</span> я подвергся то ли химическому, то ли радиационному заражению. С тех пор я такой. А тебе уже пора.</p><p><span class="yes">Мутант</span> указал Вам на выход.</p>'
    )
    change_buttons({ "Не буду тебя больше беспокоить. Ухожу.": oldTown1 })
  }
  currentFunction = oldTown_Harold14
  setCookie("ccurrentFunction", currentFunction)
}
function oldTown_Harold15() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_103.jpg")
  if (meetHaroldGood === true) {
    if (haroldHome === false) {
      haroldHome = true
      setCookie("charoldHome", haroldHome)
      change_text(
        '<p>- После событий на <span class="yes">военной базе</span> я стал мутировать, - старому <span class="yes">мутанту</span> явно было неприятно вспоминать о тех днях. - Это происходило уже тут – в <span class="yes">Хабе</span>. Сначала опали волосы, потом начала слезать кожа. Я потерял всех друзей и связи в торговых кругах. На работу никто не брал из-за внешнего вида. Теперь я вынужден торчать в этом <span class="yes">городе</span> и жить на подаяния. Хорошо, что некоторые горожане иногда мне помогают, иначе я бы совсем пропал.</p>'
      )
    } else {
      change_text(
        '<p>- Мало мне безумного <span class="yes">Слэппи</span>, так ещё теперь и беспамятный персонаж ко мне в гости ходит, - старому <span class="yes">мутанту</span> явно было неприятно вспоминать о тех днях. - После событий на <span class="yes">военной базе</span> я стал мутировать. Это происходило уже тут – в <span class="yes">Хабе</span>. Сначала опали волосы, потом начала слезать кожа. Я потерял всех друзей и связи в торговых кругах. На работу никто не брал из-за внешнего вида. Теперь я вынужден торчать в этом <span class="yes">городе</span> и жить на подаяния. Хорошо, что некоторые горожане иногда мне помогают, иначе я бы совсем пропал.</p>'
      )
    }
    change_buttons({
      "Как тебя зовут?": oldTown_Harold12,
      "Малявка? Сколько ж тебе лет?": oldTown_Harold13,
      "Как ты стал таким?": oldTown_Harold14,
      "Не буду тебя больше беспокоить. Ухожу.": oldTown1,
    })
  } else {
    change_text(
      '<p>- Рожей не вышел, - старому <span class="yes">мутанту</span> явно было неприятно продолжать этот разговор. - Кажется, тебе уже пора.</p><p><span class="yes">Старик</span> указал Вам на выход.</p>'
    )
    change_buttons({ "Не буду тебя больше беспокоить. Ухожу.": oldTown1 })
  }
  currentFunction = oldTown_Harold15
  setCookie("ccurrentFunction", currentFunction)
}

/* Ночной патруль */
function nightPatrol() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_169.jpg")
  change_text(
    '<p>Сказав это, Вы вытащили из кармана <span class="yes">ключ</span> и продемонстрировали его <span class="yes">полицейскому</span>. Нахмурившийся было, <span class="yes">офицер</span> расслабился и сказал Вам:</p><p>- Отлично. Отлично. Даже великолепно, - после этих ничего незначащих слов <span class="yes">полицейский</span> хлопнул в ладоши и продолжил. – Ну, пойдём, пойдём. Я провожу тебя до <span class="yes">отеля</span>, убедимся что по дороге ты не найдёшь себе приключений.</p><p>Видимо, придётся все дела отложить на <span class="yes">завтра</span>.</p>'
  )
  change_buttons({ "Войти в бар «Мальтийский Сокол»": hub_MalteseFalcon })
  currentFunction = nightPatrol
  setCookie("ccurrentFunction", currentFunction)
}
function nightPatrol1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_169.jpg")
  change_text(
    '<p>Сказав это, Вы похлопали по сумке с бутылочными <span class="yes">крышками</span>, продемонстрировав их наличие.</p><p>- Отлично. Отлично. Даже великолепно, - после этих ничего незначащих слов <span class="yes">полицейских</span> хлопнул в ладоши и продолжил. – Ну, пойдём, пойдём. Я провожу тебя до <span class="yes">отеля</span>, убедимся что по дороге ты не найдёшь себе приключений.</p><p>Видимо, придётся все дела отложить на <span class="yes">завтра</span>.</p>'
  )
  change_buttons({ "Войти в бар «Мальтийский Сокол»": hub_MalteseFalcon })
  currentFunction = nightPatrol1
  setCookie("ccurrentFunction", currentFunction)
}
function nightPatrol2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (nightPatrolKetch === false) {
    nightPatrolKetch = true
    setCookie("cnightPatrolKetch", nightPatrolKetch)
    change_image("img/revenge/pic_169.jpg")
    change_text(
      '<p>Вы принялись было лепетать о разных обстоятельствах, из-за которых лишились <span class="yes">денег</span>, но <span class="yes">полицейский</span> остановил Вас.</p><p>- Так! Всё ясно с тобой, - раздосадовано произнёс он, окинув Вас взглядом. – Ладно, я понимаю, что всякое бывает… Ладно! Сядь вон <span class="yes">за баром</span> на <span class="yes">лавочку</span>. Переночуй там, но смотри. Если днём не снимешь себе <span class="yes">жильё</span>, из <span class="yes">города</span> тебе придётся <span class="yes">уйти</span>. Вернёшься не скоро, имей ввиду.</p><p>Сказав это, <span class="yes">патрульный</span> исчез во мраке ночи. А Вы направились в сторону ближайших лавочек.</p>'
    )
    change_buttons({ "Спать на лавочке до утра": nightPatrol3 })
  } else {
    change_image("img/revenge/pic_205.jpg")
    change_text(
      '<p>В очередной раз Вы попытались рассказать <span class="yes">офицеру</span> о своих проблемах, но тот даже слушать Вас не стал. Вызвав по рации подкрепление, он скрутил Вам руки за спиной и стал дожидаться своих сослуживцев. Явившиеся полицейские бесцеремонно потащили Вас по улице, пока не достигли ворот <span class="yes">города</span>. Вышвырнув Вас вон, <span class="yes">полицейские</span> вручили Вам <span class="yes">постановление</span>, которое <span class="yes">запрещало</span> появляться Вам в <span class="yes">Хабе</span> в течение <span class="yes">3 месяцев</span>.</p><p>Ваша миссия провалена.</p>'
    )
    change_buttons({ "Игра окончена!": restart })
  }
  currentFunction = nightPatrol2
  setCookie("ccurrentFunction", currentFunction)
}
function nightPatrol3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 9
  change_time(0)
  creigDrunked = false
  setCookie("ccreigDrunked", creigDrunked)
  change_image("img/revenge/pic_166.jpg")
  change_text(
    '<p>Ночь прошла спокойно. Несмотря на прохладу, Вам удалось выспаться и набраться сил. Полицейские патрули больше не трогали Вас, однако <span class="yes">сегодня</span> Вам необходимо отложить все дела и найти возможность <span class="yes">снять комнату</span>.</p><p>Если <span class="yes">полиция</span> выполнит своё предостережение и выставит Вас из <span class="yes">города</span>, то задание <span class="yes">будет провалено</span>.</p>'
  )
  change_buttons({ "Направиться к Центру Города": hub_center1 })
  currentFunction = nightPatrol3
  setCookie("ccurrentFunction", currentFunction)
}

/* Добрая линия - квесты без свободы перемещения по городу */
/* Крейг моется */
function hub_mainQuestGood() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_112.jpg")
  } else {
    change_image("img/revenge/pic_112a.jpg")
  }
  lower_caps(100)
  change_text(
    '<p>- Благодарю тебя, мой благодетель! – <span class="yes">Крейг</span> чуть не прослезился. – Веди!</p><p>Он отряхнул с лохмотьев солому и встал рядом с Вами. Больше Ваш мир никогда не будет прежним. Нужно добраться до <span class="yes">Бэт</span> как можно скорее, пока не ровен час до Вас не докопались полицейские, которые и так смотрели на вашу компанию весьма настороженно.</p>'
  )
  change_buttons({ "Идти в Оружейный Магазин": hub_mainQuestGood1 })
  currentFunction = hub_mainQuestGood
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_113.jpg")
  } else {
    change_image("img/revenge/pic_113a.jpg")
  }
  change_text(
    '<p>Когда вы всей пахучей компанией вошли, <span class="yes">Бэт</span> рухнула на пол без чувств. Понадобилось время, чтобы она вновь обрела способность видеть и говорить.</p><p>- Господи, что за… - <span class="yes">Бэт</span> зажала руками нос. – Мне кажется, что я ртом чувствую этот запах! Бегом в душевую… это там!</p>'
  )
  change_buttons({ "Провести Крейга в душевую": hub_mainQuestGood2 })
  currentFunction = hub_mainQuestGood1
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 21
  change_time(0)
  change_image("img/revenge/pic_114.jpg")
  change_text(
    '<p>Следующие минуты стёрлись из Вашей памяти. По крайней мере всю оставшуюся жизнь Вы посвятили тому, чтобы забыть всё, связанное с мытьём <span class="yes">Крейга</span>, ведь Вам пришлось при этом присутствовать, а после мыть душевую.</p><p>У <span class="yes">Бэт</span> нашлись какие-то тряпки, которые она пожертвовала <span class="yes">бездомному</span>. До самой ночи Вы, <span class="yes">Крейг</span> и <span class="yes">Бэт</span> приводили себя в порядок. Когда всё было кончено, <span class="yes"Бэт</span> распрощалась с Вами и <span class="yes">Крейгом</span> и закрыла магазин.</p>'
  )
  change_buttons({
    "Отправиться в бар «Мальтийский Сокол»": hub_mainQuestGood3,
  })
  currentFunction = hub_mainQuestGood2
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  sheriffGreeneFirstTask = true
  newLifeKreig = true
  setCookie("csheriffGreeneFirstTask", sheriffGreeneFirstTask)
  setCookie("cnewLifeKreig", newLifeKreig)
  change_image("img/revenge/pic_115.jpg")
  change_text(
    '<p>Вы с <span class="yes">Крейгом</span> вошли в <span class="yes">бар «Мальтийский сокол»</span>. Первым делом <span class="yes">Крейг</span> побежал к <span class="yes">бармену</span> и снял номер на неделю.</p><p>- Ну, что, <span class="yes">Крейг</span> – обратились Вы к нему, когда тот, сияющий от счастья, подошёл к Вашему столику с ключом от номера в руке. – Похоже для тебя жизнь на помойке закончилась. По крайней мере на этой неделе.</p><p>- Дружище, - <span class="yes">Крейг</span> кинулся Вам на шею. – То, что ты сделал, я никогда не забуду. Теперь я устроюсь на работу и буду вести правильный образ жизни! Спасибо тебе огромное!</p><p>Больше не источая зловония, <span class="yes">Крейг</span> показался Вам одним из самых дружелюбных людей на свете. Вы спокойно приняли его объятия и пожали на прощание руку. Ваш новый друг скрылся за дверьми своего номера.</p>'
  )
  change_buttons({ "Встать из-за стола": hub_MalteseFalcon })
  currentFunction = hub_mainQuestGood3
  setCookie("ccurrentFunction", currentFunction)
}
/* Слежка за Доном */
function hub_mainQuestGood4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 19
  change_time(0)
  change_image("img/revenge/pic_117.jpg")
  change_text(
    '<p>Вы приметили небольшой <span class="yes">сарайчик</span>, из которого хорошо просматривалась зона досмотра караванов, на которой работал <span class="yes">Дон</span>. Это оказалось гораздо менее увлекательным мероприятием, чем Вам казалось. Практически весь день <span class="yes">Дон</span> носился от каравана к каравану, проверяя накладные и груз. Вы всё ждали, что к нему подойдёт подозрительный человек, но никто так и не шёл.</p><p>Солнце начало уходить за горизонт. Наконец, последний караван был проинспектирован <span class="yes">Доном</span>. Он твёрдой походкой направился в сторону Вашего <span class="yes">сарайчика</span>.</p>'
  )
  change_buttons({
    "Оставаться внутри": hub_mainQuestGood41,
    "Выйти и спрятаться с другой стороны сарая": hub_mainQuestGood42,
    "Выйти и войти в другое здание": hub_mainQuestGood43,
  })
  currentFunction = hub_mainQuestGood4
  setCookie("ccurrentFunction", currentFunction)
}
/* 1 Этап слежки */
function hub_mainQuestGood41() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0)
  change_image("img/revenge/pic_118.jpg")
  change_text(
    '<p>Вы благоразумно остались внутри, глупо было бы что-либо предпринимать прямо у него на глазах.</p><p><span class="yes">Дон</span> прошёл мимо и пропал из Вашего поля зрения. Вам нельзя его упускать!</p>'
  )
  change_buttons({
    "Выбежать из сарая за ним": hub_mainQuestGood412,
    "Выйти из сарая и аккуратно выглянуть из-за угла": hub_mainQuestGood413,
  })
  currentFunction = hub_mainQuestGood41
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood42() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  donAttention += 1
  setCookie("cdonAttention", donAttention)
  change_time(0)
  change_image("img/revenge/pic_119.jpg")
  change_text(
    '<p>Вы вышли из сарайчика и практически нос к носу столкнулись со своим объектом наблюдения. Не подав виду, Вы завернули за угол и притаились за стенкой сарайчика. <span class="yes">Дон</span> же, хмуро проводив Вас взглядом, направился дальше, скрывшись из Вашего поля зрения.</p>'
  )
  change_buttons({
    "Побежать вслед за ним": hub_mainQuestGood412,
    "Аккуратно выглянуть из-за угла": hub_mainQuestGood413,
  })
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood43() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  donAttention += 1
  setCookie("cdonAttention", donAttention)
  change_time(0)
  change_image("img/revenge/pic_134.jpg")
  change_text(
    '<p>Вы вышли из сарайчика и практически нос к носу столкнулись со своим объектом наблюдения. Не подав виду, Вы пересекли улицу и вошли в противоположное здание. <span class="yes">Дон</span> же, хмуро проводив Вас взглядом, направился дальше.</p><p>Закрыв за собой дверь, Вы развернулись и увидели перед собой лицо весёлого <span class="yes">менеджера</span>:</p><p>- Привет, я – <span class="yes">Дэн</span>. Тебе брамина? – спросил веселый мужчина.</p>'
  )
  change_buttons({
    "Чего? Брамина?": hub_mainQuestGood431,
    "Выглянуть в окно": hub_mainQuestGood432,
  })
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood431() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0)
  change_image("img/revenge/pic_121.jpg")
  change_text(
    '<p>- Чего? Брамина? – Вы растеряно посмотрели на <span class="yes">менеджера</span>. – Какого брамина?</p><p>- Я продаю тут коров и снаряжение для караванов. Ты точно дверью не ошибся, дружище? - улыбка <span class="yes">менеджера</span> стала сползать с его лица.</p><p>Вы оглянулись и посмотрели в окно. <span class="yes">Дона</span> не было нигде видно. Пора было заканчивать этот цирк.</p><p>- Ошибся, ошибся… - пробормотали Вы <span class="yes">Дэну</span> и направились к выходу.</p><p>- Расскажи обо мне друзьям, - бросил Вам вдогонку <span class="yes">хозяин заведения</span>.</p>'
  )
  change_buttons({ "Выйти на улицу": hub_mainQuestGood4311 })
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood432() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0)
  change_image("img/revenge/pic_122.jpg")
  change_text(
    '<p><span class="yes">Дон</span> стоял неподалёку от здания, в котором Вы прятались, и подкуривал сигарету у прохожего. Вас он не замечал. Перекинувшись парой слов со знакомым, он последовал дальше к <span class="yes">Центру города</span>.</p><p>Нужно было торопиться, пока <span class="yes">старик</span> не скрылся.</p>'
  )
  change_buttons({ "Выйти на улицу": hub_mainQuestGood4321 })
  $("#key_save").attr("id", "key_save_negative")
}
/* 2 Этап слежки */
function hub_mainQuestGood412() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  donAttention += 1
  setCookie("cdonAttention", donAttention)
  change_time(0)
  change_image("img/revenge/pic_124.jpg")
  change_text(
    '<p>Вы выскочили из своего убежища и побежали вперёд в поисках <span class="yes">Дона</span>. Долго искать не пришлось – <span class="yes">последний</span> стоял в 5 метрах от сарая, в котором Вы прятались, и подкуривал сигарету у прохожего. Завидев, как Вы несётесь по улице, оба уставились в Вашу сторону.</p><p>Вам ничего не оставалось, как сделать вид, что так и надо и скрыться за углом ближайшего здания. Перекинувшись парой слов со знакомым, <span class="yes">Дон</span> последовал дальше к <span class="yes">Центру города</span>.</p>'
  )
  change_buttons({
    "Следовать за Доном стараясь, не привлекать к себе внимание":
      hub_mainQuestGood5,
  })
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood413() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0)
  change_image("img/revenge/pic_122.jpg")
  change_text(
    '<p><span class="yes">Дон</span> стоял в 5 метрах от сарая, в котором Вы прятались, и подкуривал сигарету у прохожего. Вас он не замечал. Перекинувшись парой слов со знакомым, он последовал дальше к <span class="yes">Центру города</span>.</p><p>Вам ничего не оставалось, как следовать за ним.</p>'
  )
  change_buttons({
    "Следовать за Доном стараясь, не привлекать к себе внимание":
      hub_mainQuestGood5,
  })
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood4311() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0)
  change_image("img/revenge/pic_123.jpg")
  change_text(
    '<p>Когда Вы вышли на улицу, то увидели вдалеке красные штаны <span class="yes">Дона</span>, уходящие за горизонт. Вы прибавили шагу и, наконец, нагнали его. Было ясно, что <span class="yes">старик</span> направляется к <span class="yes">Центру города</span>.</p><p>Вам ничего не оставалось, как следовать за ним.</p>'
  )
  change_buttons({
    "Следовать за Доном стараясь, не привлекать к себе внимание":
      hub_mainQuestGood5,
  })
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood4321() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0)
  change_image("img/revenge/pic_123.jpg")
  change_text(
    "<p>Выйдя на улицу, Вы прибавили шаг и вскоре вышли на нужную дистанцию для комфортного наблюдения за стариком.</p><p>Теперь оставалось только не рассекретить себя.</p>"
  )
  change_buttons({
    "Следовать за Доном стараясь, не привлекать к себе внимание":
      hub_mainQuestGood5,
  })
  $("#key_save").attr("id", "key_save_negative")
}
/* 3 этап слежки */
function hub_mainQuestGood5() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0)
  change_image("img/revenge/pic_125.jpg")
  change_text(
    '<p><span class="yes">Дон</span> шёл, не оглядываясь, по главной улице <span class="yes">Хаба</span>. Периодически ему встречались знакомые люди. Каждому он дружелюбно жал руки и кивал головой. Ничего подозрительного в этих встречах Вы не замечали. Свернув с главной дороги, <span class="yes">старик</span> направился в <span class="yes">офис шерифа</span>. Вероятно, он собирался отчитаться о проделанной работе за день. Взойдя на крыльцо здания, <span class="yes">Дон</span> резко оглянулся и стал внимательно осматривать улицу.</p>'
  )
  change_buttons({
    "Остановиться и похлопать себя по карманам в поисках сигарет, которых у Вас нет":
      hub_mainQuestGood51,
    "Не сбавляя шаг, войти в Оружейный магазин напротив офиса полиции":
      hub_mainQuestGood52,
  })
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood51() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  donAttention += 2
  setCookie("cdonAttention", donAttention)
  change_time(0)
  change_image("img/revenge/pic_126.jpg")
  change_text(
    '<p>Да уж… Вы спалили своё место нахождения по полной! Принявшись изо всех сил лупить себя по карманам посреди улицы, Вы неминуемо привлекли к себе внимание старого <span class="yes">полицейского</span>.</p><p><span class="yes">Дон</span> уставился на Вас, с интересом ожидая, что Вы найдёте в своих карманах. Пришлось импровизировать налету – через мгновение в Ваших руках появилась фляжка с водой, к которой Вы присосались без явного желания. </p><p>Хмыкнув, <span class="yes">Дон</span> скрылся за дверьми полицейского управления. Облегчённо выдохнув, Вы зашли за угол здания и стали наблюдать за входом в <span class="yes">офис шерифа</span>.</p>'
  )
  change_buttons({ "Ждать когда Дон выйдет из офиса": hub_mainQuestGood511 })
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood52() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0)
  change_image("img/revenge/pic_127.jpg")
  if (newLifeKreig === true) {
    change_text(
      '<p>Не привлекая лишнего внимания, Вы вошли в <span class="yes">Магазин Оружия</span> вашей знакомой <span class="yes">Бэт</span> и продолжили следить за <span class="yes">Доном</span> из окна магазина.</p><p><span class="yes">Бэт</span> удивлённо посмотрела на Вас.</p><p>- Эээ, привет! Я тебе не мешаю? – девушка подошла к Вам вплотную.</p><p>Нужно было всеми правдами и неправдами оставаться в <span class="yes">магазине</span>, пока <span class="yes">Дон</span> не выйдет из <span class="yes">офиса шерифа</span>. Мало ли,  вдруг и он, в свою очередь, <span class="yes">следит</span> за улицей из окна.</p>'
    )
    change_buttons({
      "О, привет, Бэт! Ну, как дела?": hub_mainQuestGood521,
      "Нет, не помешаешь. Я тут просто постою недолго.": hub_mainQuestGood5211,
    })
  } else {
    change_text(
      '<p>Не привлекая лишнего внимания, Вы вошли в <span class="yes">Магазин Оружия</span> и продолжили следить за <span class="yes">Доном</span> из окна магазина.</p><p> Хозяйка магазина <span class="yes">Бэт</span> удивлённо посмотрела на Вас.</p><p>- Эй! Магазин закрывается. Я тебе не мешаю? – девушка подошла к Вам вплотную.</p><p>Нужно было всеми правдами и неправдами оставаться в <span class="yes">магазине</span>, пока <span class="yes">Дон</span> не выйдет из <span class="yes">офиса шерифа</span>. Мало ли,  вдруг и он, в свою очередь, <span class="yes">следит</span> за улицей из окна.</p>'
    )
    change_buttons({
      "Нет, не помешаешь. Я тут просто постою недолго.": hub_mainQuestGood5211,
    })
  }
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood511() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0)
  change_image("img/revenge/pic_128.jpg")
  change_text(
    '<p>На этот раз Вы довольно долго проторчали без дела. То ли с отчётом было что-то не так, то ли <span class="yes">Дон</span> всё же что-то почуял, но выходить он не торопился.</p><p>Вы уже было стали жалеть о том, что действительно не заимели вредную табачную привычку, чтобы хоть как-то развеять скуку, когда <span class="yes">старик</span>, наконец, соизволил выйти. Закрыв за собой дверь, <span class="yes">Дон</span> постоял некоторое время на крыльце, подымив сигаретой. Увидев, что он никуда не торопится, Вы, уставший и злой, мысленно послали в него тысячи проклятий, вспомнив все бранные слова, которые когда-либо слышали.</p><p>Наконец, выбросив окурок на землю, <span class="yes">полицейский</span> зашагал прочь от <span class="yes">офиса шерифа</span>.</p>'
  )
  change_buttons({ "Продолжить наблюдение за стариком": hub_mainQuestGood7 })
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood521() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0)
  change_image("img/revenge/pic_86.jpg")
  change_text(
    '<p><span class="yes">Бэт</span> обиженно поджала губки.</p><p>- Ты ещё спрашиваешь?! После того как <span class="yes">Крейг</span> уделал мне ванную? Да ванную ты помыл, но помещение насквозь провоняло! Я всю ночь проветривала комнаты и не спала – сторожила магазин. Спасибо, блин! А сегодня я безумно устала, хочу спать и собираюсь закрывать магазин. Так что давай, на выход!</p><p><span class="yes">Бэт</span> была настроена решительно. Чёрт возьми! <span class="yes">Дон</span> неизвестно сколько будет торчать в офисе. Нужно, как-то потянуть время.</p>'
  )
  change_buttons({
    "Погоди-погоди! Мне нужно тебе кое-что сказать…": hub_mainQuestGood6,
    "Бэт, мне нужно срочно побыть здесь некоторое время!":
      hub_mainQuestGood5211,
  })
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood5211() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  donAttention += 2
  setCookie("cdonAttention", donAttention)
  change_time(0)
  change_image("img/revenge/pic_130.jpg")
  change_text(
    '<p>Видимо <span class="yes">Бэт</span> совсем была не расположена к приёму гостей, поскольку с недовольного тона она перешла на крик:</p><p>- Так, выметайся отсюда немедленно, - <span class="yes">девушка</span> открыла дверь и ловко выпихнула Вас на улицу. – Магазин закрыт.</p><p><span class="yes">Хозяйка</span> хлопнула дверью перед вашим носом. Естественно в этот самый момент <span class="yes">Дон</span> вышел из <span class="yes">офиса шерифа</span>. Вся эта скандальная сцена привлекла его внимание и он, закурив сигарету, стал заинтересованно смотреть в Вашу сторону.</p><p>Раздосадованный, Вы завернули за угол <span class="yes">Магазина Оружия</span> и стали ждать, когда <span class="yes">Дон</span> докурит. Наконец, выбросив окурок на землю, <span class="yes">полицейский</span> зашагал прочь от здания полиции.</p>'
  )
  change_buttons({ "Продолжить наблюдение за стариком": hub_mainQuestGood7 })
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood5212() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0)
  change_image("img/revenge/pic_129.jpg")
  change_text(
    '<p>- Что? – <span class="yes">Бэт</span> не сразу поняла о чём Вы её спросили. В её глазах всё ещё махали крыльями бабочки.</p><p>- Оружие, говорю, - грубо обрубили Вы. – Есть у тебя что-то мощное для меня? Мне опасность угрожает.</p><p><span class="yes">Девушка</span> выдернула руку из Вашей ладони и гневно крикнула:</p><p>- Нет у меня никакого оружия для тебя, - <span class="yes">Бэт</span> открыла дверь и ловко вытолкала Вас за пределы магазина.</p><p>«Вот и вся любовь», - подумали Вы и посмотрели в сторону <span class="yes">полицейского участка</span>. И очень вовремя. Ваш взгляд еле успел зацепиться за <span class="yes">красные штаны</span>, которые сворачивали за угол <span class="yes">полицейского управления</span>.</p>'
  )
  change_buttons({ "Продолжить наблюдение за стариком": hub_mainQuestGood7 })
  $("#key_save").attr("id", "key_save_negative")
}
/* Любовная линия */
function hub_mainQuestGood6() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0)
  if (bethDontLoveYou === false) {
    change_image("img/revenge/pic_86.jpg")
    change_text(
      '<p>Вы взяли <span class="yes">Бэт</span> за руку и внезапно почувствовали лёгкую дрожь в её кисти. О, да она влюблена в  Вас! Вот это поворот… <span class="yes">Дон</span> всё ещё не выходил из офиса полиции.</p>'
    )
    change_buttons({
      "Поцеловать Бэт": hub_mainQuestGood61,
      "Попросить оружие помощнее": hub_mainQuestGood5212,
    })
  } else {
    change_image("img/revenge/pic_129.jpg")
    change_text(
      '<p>Вы попытались взять <span class="yes">Бэт</span> за руку, однако, девушка выдернула руку из Вашей ладони и гневно крикнула:</p><p>- Не смей ко мне прикасаться даже, - она открыла дверь и ловко вытолкала Вас за пределы магазина.</p><p>«Очень надо было, коза», - подумали Вы и посмотрели в сторону <span class="yes">полицейского участка</span>. И очень вовремя. Ваш взгляд еле успел зацепиться за <span class="yes">красные штаны</span>, которые сворачивали за угол <span class="yes">полицейского управления</span>.</p>'
    )
    change_buttons({
      "Продолжить наблюдение за стариком": hub_mainQuestGood7,
    })
  }
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood61() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0)
  change_image("img/revenge/pic_131.jpg")
  change_text(
    '<p>Пусть будет что будет! Вы поцеловали <span class="yes">Бэт</span>. Она обмякла и обняла Вас за шею. Вы стояли несколько минут молча.  Внезапно Вы увидели, что <span class="yes">Дон</span>, наконец, вывалился из здания полиции, быстро оглянулся по сторонам и направился в сторону <span class="yes">Старого Города</span>.</p>'
  )
  change_buttons({
    "Ладно, милочка, у меня дела. Загляну к тебе ещё как-нибудь. Давай, пока.":
      hub_mainQuestGood612,
    "Дорогая, прости, сейчас мне нужно уйти, но мы скоро увидимся.":
      hub_mainQuestGood611,
  })
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood612() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(0)
  change_image("img/revenge/pic_129.jpg")
  change_text(
    '<p>- Милочка? – <span class="yes">Бэт</span> вспыхнула, и её лицо залилось пунцовой краской. – Да как ты можешь?!</p><p><span class="yes">Девушка</span> чуть не плакала. Похоже, Вы серьёзно оскорбили её чувства. Она открыла дверь и толкнула Вас в плечо.</p><p>- Иди, давай, - слёзы брызнули из её глаз. – Чтоб я тебя больше не видела.</p><p>«Подумаешь», - воскликнули Вы, оказавшись на улице, и посмотрели в сторону <span class="yes">полицейского участка</span>. И очень вовремя. Ваш взгляд еле успел зацепиться за красные штаны, которые сворачивали за угол <span class="yes">полицейского управления</span>.</p>'
  )
  change_buttons({ "Продолжить наблюдение за стариком": hub_mainQuestGood7 })
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood611() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  bethFallInLove = true
  setCookie("cbethFallInLove", bethFallInLove)
  change_time(0)
  change_image("img/revenge/pic_86.jpg")
  change_text(
    '<p><span class="yes">Бэт</span> посмотрела на Вас влажными глазами и сказала:</p><p>- Ладно, <span class="yes">' +
      heroName +
      '</span>, до вечера… я надеюсь!</p><p><span class="yes">Девушка</span> всхлипнула, казалось она сейчас заплачет.</p>'
  )
  change_buttons({
    "Послать ей воздушный поцелуй и выйти на улицу": hub_mainQuestGood7,
  })
  $("#key_save").attr("id", "key_save_negative")
}
/* Операция по захвату рейдера */
function hub_mainQuestGood7() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(1)
  if (donAttention < 3) {
    change_image("img/revenge/pic_132.jpg")
    change_text(
      '<p><span class="yes">Дон</span>, не сбавляя шаг, удалялся в сторону <span class="yes">Старого Города</span>. Вы аккуратно следовали за ним. Оставшийся путь оказался лёгкой прогулкой по сравнению с тем, что было до этого. Вы держали приличное расстояние, <span class="yes">старик</span> никак не мог Вас заподозрить в слежке. Зато Вы прекрасно видели его издалека благодаря его модным красным штанам.</p><p>«Это ж надо быть таким идиотом», - подумали Вы. – «Бояться слежки и при этом светиться за милю!»</p><p>В конце концов, <span class="yes">Дон</span> привёл Вас к старому зданию <span class="yes">заброшенного склада</span> в <span class="yes">Старом Городе</span>. Оглянувшись ещё разок по сторонам, он скрылся за дверью. Какое-то внутреннее чутьё заставило Вас остановиться на значительном расстоянии от склада и понаблюдать ещё некоторое время за зданием.</p><p>Буквально через две минуты с противоположной стороны улицы показалась высокая фигура в синих джинсах и черной кожаной куртке. <span class="yes">Парень с длинными волосами</span>, лет  20, шёл быстрым шагом к входу старого склада. Не оглядываясь, он вошёл в здание склада и хлопнул дверью. «Ну, понеслась…» - подумали Вы.</p>'
    )
    change_buttons({
      "Вернуться к шерифу Грину": hub_mainQuestGood71,
      "Проникнуть  в здание склада": hub_mainQuestGood72,
    })
  } else {
    death()
    change_image("img/revenge/pic_133.jpg")
    change_text(
      '<p><span class="yes">Дон</span>, не сбавляя шаг, удалялся в сторону <span class="yes">Старого Города</span>. Вы аккуратно следовали за ним. <span class="yes">Старик</span> всё время нырял в какие-то подворотни, будто пытаясь сбросить хвост. Вы не отставали. Вы чувствовали, что развязка уже впереди. И вдруг… войдя в один из, похожих друг на друга лабиринтов, Вы не увидели <span class="yes">копа</span>.</p><p>«Твою мать! Упустил!» - решили Вы и припустили по переулку со всех ног. Внезапно, как из-под земли, перед Вами выросла фигура рослого <span class="yes">старика</span>. Он схватил Вас за горло и припёр к стенке.</p><p> - Так я и думал, - заявил <span class="yes">Дон</span>. – Хреновый из тебя сыщик, но бегун оказался неплохой. Ты совсем меня уморил. Я уж и так и сяк пытался оторваться от тебя, но ты не унимался. Что ж… тем хуже для тебя, дружок.</p><p>В его руке появился нож.</p><p>- Жаль тебя, не пожил на свете, - с этими словами <span class="yes">старик</span> вонзил нож прямо в Ваше сердце.</p><p>Не почувствовав боли, Вы погибли мгновенно.</p>'
    )
    change_buttons({ "Игра окончена!": restart })
  }
  $("#key_save").attr("id", "key_save_negative")
}
function hub_mainQuestGood72() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  $("#key_save_negative").attr("id", "key_save")
  change_image("img/revenge/pic_135.jpg")
  change_text(
    '<p>Вы приблизились к <span class="yes">зданию склада</span>, стараясь не привлекать к себе лишнего внимания, и аккуратно дёрнули за ручку двери.</p><p>Ага… Дверь оказалась запертой изнутри. Ожидаемо. Не стоит пытаться выломать её сейчас, так можно и всё дело завалить.</p>'
  )
  change_buttons({ "Вернуться к шерифу Грину": hub_mainQuestGood71 })
  currentFunction = hub_mainQuestGood72
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood71() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  $("#key_save_negative").attr("id", "key_save")
  change_image("img/revenge/pic_136.jpg")
  change_text(
    '<p>Вы мчались по улицам так, будто за Вами гнались призраки. Когда Вы влетели в офис <span class="yes">шерифа Грина</span>, то увидели <span class="yes">четырёх</span> тяжеловооружённых <span class="yes">полицейских</span> под предводительством <span class="yes">Грина</span> и его помощника <span class="yes">Кенни</span>. Все они ждали только Вашего сигнала.</p><p>Долго объяснять ничего не пришлось. Уже через несколько минут  Вы с <span class="yes">полицейскими</span> были возле дверей <span class="yes">склада</span>. <span class="yes">Шериф</span> бесшумно подёргал дверь и убедился, что она заперта. <span class="yes">Заговорщики</span> всё ещё были внутри.</p><p>- Странник, - обратился к Вам <span class="yes">шериф Грин</span>. – ты здорово послужил <span class="yes">городу</span>. Я не вправе просить тебя, но буду рад, если ты присоединишься к нам в этой операции. Лишний ствол не помешает. Но мы должны взять этих сволочей живыми. Как ты?</p>'
  )
  change_buttons({
    "Нормально. Я готов, шериф.": hub_mainQuestGood711,
    "Извините, но я пас. Я не готов умереть молодым.": hub_mainQuestGood712,
  })
  currentFunction = hub_mainQuestGood71
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood711() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  storageFight = true
  setCookie("cstorageFight", storageFight)
  change_image("img/revenge/pic_136.jpg")
  change_text(
    '<p>- Спасибо, дружище! – <span class="yes">шериф</span> просиял от Вашего решения. - Нужно будет пробраться в здание либо через крышу – тут ты будешь действовать вместе с моим помощником <span class="yes">Кенни</span>, вы войдёте в здание одновременно с началом штурма. На вас будет сёръёзная задача - вы должны будете спрыгнуть на мерзавцев с <span class="yes">крыши</span> через окно и постараться их обездвижить, пока <span class="yes">основная группа</span> отвлечёт на себя внимание. Либо ты с <span class="yes">основной группой</span> заходишь через дверь, но там придётся поковырять замок, чтобы не вспугнуть мерзавцев раньше времени. В этом случае я с <span class="yes">Кенни</span> пойду через крышу. Как поступишь?</p>'
  )
  change_buttons({
    "Пойти через дверь с основным ударным отрядом": hub_mainQuestGood7111,
    "Пойти с Кенни через крышу": hub_mainQuestGood7112,
  })
  currentFunction = hub_mainQuestGood711
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood712() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_137.jpg")
  change_text(
    '<p><span class="yes">Шериф</span> смотрел на Вас некоторое время. Затем быстро произнёс:</p><p>- Что ж. Я понимаю твоё решение, гражданский. Возвращайся обратно в <span class="yes">участок</span> и жди нас там, тут болтаться тебе нечего – скоро станет жарко, - затем <span class="yes">шериф</span> посмотрел на своих людей и приказал. – Вперёд, парни!</p><p>Вы были уже в паре кварталов, когда услышали глухие выстрелы со стороны <span class="yes">склада</span> и сдавленные мужские крики. Стараясь не вслушиваться в отдаляющиеся звуки перестрелки, Вы быстро шагали прочь из <span class="yes">Старого Города</span>.</p><p>Вернувшись в пустой <span class="yes">офис шерифа</span>, Вы  сели в кресло помощника шерифа <span class="yes">Кенни</span> и стали ждать.</p>'
  )
  change_buttons({
    "Ждать возвращения шерифа и его людей": hub_mainQuestGood9,
  })
  currentFunction = hub_mainQuestGood712
  setCookie("ccurrentFunction", currentFunction)
}
/* Захват с основной группой */
function hub_mainQuestGood7111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_138.jpg")
  if (deckerQuest === false) {
    change_text(
      '<p>- Я пойду с основным отрядом через дверь, <span class="yes">шериф</span>. Мы постараемся отвлечь на себя основное внимание, – решили Вы.</p><p>- Хорошо, - ответил Вам <span class="yes">Грин</span> и обратился к остальным. – Нормально, парни. Мы с <span class="yes">Кенни</span> хорошо сработаем.</p><p>Затем <span class="yes">Грин</span> и <span class="yes">Кенни</span> полезли на крышу. А Вы остались один на один с <span class="yes">замком</span> двери <span class="yes">склада</span>. Выломать дверь нельзя – преступники могут занять глухую оборону или попытаться покончить жизнь самоубийством. Тут надо действовать тихо, но быстро.</p>'
    )
    change_buttons({ "Воспользоваться отмычками": hub_mainQuestGood73 })
  } else {
    change_text(
      '<p>- Хорошо, - заключил <span class="yes">Грин</span>. – Нормально, парни. Мы с <span class="yes">Кенни</span> хорошо сработаем.</p><p>Затем <span class="yes">Грин</span> и <span class="yes">Кенни</span> полезли на крышу. А Вы остались один на один с <span class="yes">замком</span> двери <span class="yes">склада</span>. Выломать дверь нельзя – преступники могут занять глухую оборону или попытаться покончить жизнь самоубийством. Тут надо действовать тихо, но быстро.</p>'
    )
    change_buttons({
      "Воспользоваться отмычками": hub_mainQuestGood73,
      "Открыть склад ключом, который дал Вам Кейн": hub_mainQuestGood13,
    })
  }
  currentFunction = hub_mainQuestGood7111
  setCookie("ccurrentFunction", currentFunction)
}
/* Открыть ключом Декера */
function hub_mainQuestGood13() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_138.jpg")
  change_text(
    '<p>Вы аккуратно просунули в <span class="yes">замок</span> ключ и провернули <span class="yes">сердцевину</span> несколько раз. <span class="yes">Замок</span> мягко щёлкнул и дверь растворилась. Вы вместе с <span class="yes">группой</span> бесшумно вошли в помещение <span class="yes">склада</span>.</p>'
  )
  change_buttons({ Осмотреться: hub_mainQuestGood74 })
  currentFunction = hub_mainQuestGood13
  setCookie("ccurrentFunction", currentFunction)
}
/* Взлом замка */
function hub_mainQuestGood73() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_139.jpg")
  change_text(
    '<p>Быстро изучив конструкцию <span class="yes">замка</span>, Вы поняли, что перед Вами самый простецкий из всех возможных вариантов <span class="yes">замок</span>, коих Вы раскурочили десятки на практических занятиях. В ключевом канале всего <span class="yes">четыре штифта</span>. Нужно <span class="yes">последовательно</span> опускать <span class="yes">штифты</span>, пока они не зафиксируются в <span class="yes">нужном положении</span>, а потом <span class="yes">провернуть сердечник</span> замка. Осталось только проверить – помнят ли руки…</p>'
  )
  change_buttons({
    "Опустить первый штифт": hub_mainQuestGood731,
    "Опустить второй штифт": hub_mainQuestGood732,
    "Опустить третий штифт": hub_mainQuestGood733,
    "Опустить четвёртый штифт": hub_mainQuestGood734,
    "Провернуть сердцевину": hub_mainQuestGood735,
  })
  currentFunction = hub_mainQuestGood73
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood73a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_139.jpg")
  change_text(
    '<p>Перед Вами простой цилиндрический <span class="yes">замок</span>. В ключевом канале всего <span class="yes">четыре штифта</span>. Нужно <span class="yes">последовательно</span> опускать <span class="yes">штифты</span>, пока они не зафиксируются в <span class="yes">нужном положении</span>, а потом <span class="yes">провернуть сердечник</span> замка. Осталось только проверить – помнят ли руки…</p>'
  )
  change_buttons({
    "Опустить первый штифт": hub_mainQuestGood731,
    "Опустить второй штифт": hub_mainQuestGood732,
    "Опустить третий штифт": hub_mainQuestGood733,
    "Опустить четвёртый штифт": hub_mainQuestGood734,
    "Провернуть сердцевину": hub_mainQuestGood735,
  })
  currentFunction = hub_mainQuestGood73a
  setCookie("ccurrentFunction", currentFunction)
}
/* Первый штифт */
function hub_mainQuestGood731() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (shtift1 === false) {
    if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_141.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_141ffft.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_141fftf.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_141fftt.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_141ftff.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_141ftft.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_141fttf.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_141fttt.jpg")
    }
    change_text(
      '<p>Вы аккуратно просунули тоненький крючок в <span class="yes">замок</span> и нащупали <span class="yes">первый штифт</span>. Нужно вдавить его до <span class="yes">определённого положения</span>, если не довести штифт до нужного положения или наоборот сильно вдавить штифт, то комбинация собьется и придётся начинать взлом замка заново.</p>'
    )
    change_buttons({
      "Опустить штифт на 25%": hub_mainQuestGood7311,
      "Опустить штифт на 50%": hub_mainQuestGood7312,
      "Опустить штифт на 75%": hub_mainQuestGood7313,
      "Опустить штифт до упора": hub_mainQuestGood7314,
    })
  } else {
    if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_141tfff.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_141tfft.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_141tftf.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_141tftt.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_141ttff.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_141ttft.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_141tttf.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_141tttt.jpg")
    }
    change_text(
      '<p>Положение <span class="yes">первого штифта</span> уже подобрано, он <span class="yes">зафиксирован</span>. Можно переходить к подбору положения для <span class="yes">другого штифта</span>.</p>'
    )
    change_buttons({
      "Опустить первый штифт": hub_mainQuestGood731,
      "Опустить второй штифт": hub_mainQuestGood732,
      "Опустить третий штифт": hub_mainQuestGood733,
      "Опустить четвёртый штифт": hub_mainQuestGood734,
      "Провернуть сердцевину": hub_mainQuestGood735,
    })
  }
  currentFunction = hub_mainQuestGood731
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7311() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift1 = false
  shtift2 = false
  shtift3 = false
  shtift4 = false
  setCookie("cshtift1", shtift1)
  setCookie("cshtift2", shtift2)
  setCookie("cshtift3", shtift3)
  setCookie("cshtift4", shtift4)
  change_image("img/revenge/pic_140.jpg")
  change_text(
    '<p>Плавным движением Вы вдавили <span class="yes">штифт</span> на <span class="yes">25%</span> и остановились. Вы по-прежнему чувствовали сопротивление штифта. Судя по всему, <span class="yes">Вы ошиблись</span> в выборе положения. Вся комбинация <span class="yes">сбросилась</span>. Придётся извлекать отмычку и начинать взлом <span class="yes">заново</span>.</p>'
  )
  change_buttons({
    "Проклятье! Придётся начинать взлом заново…": hub_mainQuestGood73a,
  })
  currentFunction = hub_mainQuestGood7311
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7312() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift1 = false
  shtift2 = false
  shtift3 = false
  shtift4 = false
  setCookie("cshtift1", shtift1)
  setCookie("cshtift2", shtift2)
  setCookie("cshtift3", shtift3)
  setCookie("cshtift4", shtift4)
  change_image("img/revenge/pic_140.jpg")
  change_text(
    '<p>Плавным движением Вы вдавили <span class="yes">штифт</span> на <span class="yes">50%</span> и остановились. Вы по-прежнему чувствовали сопротивление штифта. Судя по всему, <span class="yes">Вы ошиблись</span> в выборе положения. Вся комбинация <span class="yes">сбросилась</span>. Придётся извлекать отмычку и начинать взлом <span class="yes">заново</span>.</p>'
  )
  change_buttons({
    "Проклятье! Придётся начинать взлом заново…": hub_mainQuestGood73a,
  })
  currentFunction = hub_mainQuestGood7312
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7313() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift1 = true
  setCookie("cshtift1", shtift1)
  if (
    (shtift1 === true) &
    (shtift2 === false) &
    (shtift3 === false) &
    (shtift4 === false)
  ) {
    change_image("img/revenge/pic_141tfff.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === false) &
    (shtift3 === false) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_141tfft.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === false) &
    (shtift3 === true) &
    (shtift4 === false)
  ) {
    change_image("img/revenge/pic_141tftf.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === false) &
    (shtift3 === true) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_141tftt.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === true) &
    (shtift3 === false) &
    (shtift4 === false)
  ) {
    change_image("img/revenge/pic_141ttff.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === true) &
    (shtift3 === false) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_141ttft.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === true) &
    (shtift3 === true) &
    (shtift4 === false)
  ) {
    change_image("img/revenge/pic_141tttf.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === true) &
    (shtift3 === true) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_141tttt.jpg")
  }
  change_text(
    '<p>Плавным движением Вы вдавили <span class="yes">штифт</span> на <span class="yes">75%</span> и остановились. Вы почувствовали, что штифт зафиксировался. Можно приступать к <span class="yes">следующему шагу</span> взлома.</p>'
  )
  change_buttons({
    "Опустить первый штифт": hub_mainQuestGood731,
    "Опустить второй штифт": hub_mainQuestGood732,
    "Опустить третий штифт": hub_mainQuestGood733,
    "Опустить четвёртый штифт": hub_mainQuestGood734,
    "Провернуть сердцевину": hub_mainQuestGood735,
  })
  currentFunction = hub_mainQuestGood7313
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7314() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift1 = false
  shtift2 = false
  shtift3 = false
  shtift4 = false
  setCookie("cshtift1", shtift1)
  setCookie("cshtift2", shtift2)
  setCookie("cshtift3", shtift3)
  setCookie("cshtift4", shtift4)
  change_image("img/revenge/pic_140.jpg")
  change_text(
    '<p>Плавным движением Вы утопили <span class="yes">штифт</span> до <span class="yes">упора</span> и остановились. Вы по-прежнему чувствовали сопротивление штифта. Судя по всему, <span class="yes">Вы ошиблись</span> в выборе положения. Вся комбинация <span class="yes">сбросилась</span>. Придётся извлекать отмычку и начинать взлом <span class="yes">заново</span>.</p>'
  )
  change_buttons({
    "Проклятье! Придётся начинать взлом заново…": hub_mainQuestGood73a,
  })
  currentFunction = hub_mainQuestGood7314
  setCookie("ccurrentFunction", currentFunction)
}
/* Второй штифт */
function hub_mainQuestGood732() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (shtift2 === false) {
    if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_142.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_142ffft.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_142fftf.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_142fftt.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_142tfff.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_142tfft.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_142tftf.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_142tftt.jpg")
    }
    change_text(
      '<p>Вы аккуратно просунули тоненький крючок в <span class="yes">замок</span> и нащупали <span class="yes">второй штифт</span>. Нужно вдавить его до <span class="yes">определённого положения</span>, если не довести штифт до нужного положения или наоборот сильно вдавить штифт, то комбинация собьется и придётся начинать взлом замка заново.</p>'
    )
    change_buttons({
      "Опустить штифт на 25%": hub_mainQuestGood7321,
      "Опустить штифт на 50%": hub_mainQuestGood7322,
      "Опустить штифт на 75%": hub_mainQuestGood7323,
      "Опустить штифт до упора": hub_mainQuestGood7324,
    })
  } else {
    if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_142ftff.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_142ftft.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_142fttf.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_142fttt.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_142ttff.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_142ttft.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_142tttf.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_142tttt.jpg")
    }
    change_text(
      '<p>Положение <span class="yes">второго штифта</span> уже подобрано, он <span class="yes">зафиксирован</span>. Можно переходить к подбору положения для <span class="yes">другого штифта</span>.</p>'
    )
    change_buttons({
      "Опустить первый штифт": hub_mainQuestGood731,
      "Опустить второй штифт": hub_mainQuestGood732,
      "Опустить третий штифт": hub_mainQuestGood733,
      "Опустить четвёртый штифт": hub_mainQuestGood734,
      "Провернуть сердцевину": hub_mainQuestGood735,
    })
  }
  currentFunction = hub_mainQuestGood732
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7321() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift1 = false
  shtift2 = false
  shtift3 = false
  shtift4 = false
  setCookie("cshtift1", shtift1)
  setCookie("cshtift2", shtift2)
  setCookie("cshtift3", shtift3)
  setCookie("cshtift4", shtift4)
  change_image("img/revenge/pic_140.jpg")
  change_text(
    '<p>Плавным движением Вы вдавили <span class="yes">штифт</span> на <span class="yes">25%</span> и остановились. Вы по-прежнему чувствовали сопротивление штифта. Судя по всему, <span class="yes">Вы ошиблись</span> в выборе положения. Вся комбинация <span class="yes">сбросилась</span>. Придётся извлекать отмычку и начинать взлом <span class="yes">заново</span>.</p>'
  )
  change_buttons({
    "Проклятье! Придётся начинать взлом заново…": hub_mainQuestGood73a,
  })
  currentFunction = hub_mainQuestGood7321
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7322() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift2 = true
  setCookie("cshtift2", shtift2)
  if (
    (shtift1 === false) &
    (shtift2 === true) &
    (shtift3 === false) &
    (shtift4 === false)
  ) {
    change_image("img/revenge/pic_142ftff.jpg")
  } else if (
    (shtift1 === false) &
    (shtift2 === true) &
    (shtift3 === false) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_142ftft.jpg")
  } else if (
    (shtift1 === false) &
    (shtift2 === true) &
    (shtift3 === true) &
    (shtift4 === false)
  ) {
    change_image("img/revenge/pic_142fttf.jpg")
  } else if (
    (shtift1 === false) &
    (shtift2 === true) &
    (shtift3 === true) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_142fttt.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === true) &
    (shtift3 === false) &
    (shtift4 === false)
  ) {
    change_image("img/revenge/pic_142ttff.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === true) &
    (shtift3 === false) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_142ttft.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === true) &
    (shtift3 === true) &
    (shtift4 === false)
  ) {
    change_image("img/revenge/pic_142tttf.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === true) &
    (shtift3 === true) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_142tttt.jpg")
  }
  change_text(
    '<p>Плавным движением Вы вдавили <span class="yes">штифт</span> на <span class="yes">50%</span> и остановились. Вы почувствовали, что штифт зафиксировался. Можно приступать к <span class="yes">следующему шагу</span> взлома.</p>'
  )
  change_buttons({
    "Опустить первый штифт": hub_mainQuestGood731,
    "Опустить второй штифт": hub_mainQuestGood732,
    "Опустить третий штифт": hub_mainQuestGood733,
    "Опустить четвёртый штифт": hub_mainQuestGood734,
    "Провернуть сердцевину": hub_mainQuestGood735,
  })
  currentFunction = hub_mainQuestGood7322
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7323() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift1 = false
  shtift2 = false
  shtift3 = false
  shtift4 = false
  setCookie("cshtift1", shtift1)
  setCookie("cshtift2", shtift2)
  setCookie("cshtift3", shtift3)
  setCookie("cshtift4", shtift4)
  change_image("img/revenge/pic_140.jpg")
  change_text(
    '<p>Плавным движением Вы вдавили <span class="yes">штифт</span> на <span class="yes">75%</span> и остановились. Вы по-прежнему чувствовали сопротивление штифта. Судя по всему, <span class="yes">Вы ошиблись</span> в выборе положения. Вся комбинация <span class="yes">сбросилась</span>. Придётся извлекать отмычку и начинать взлом <span class="yes">заново</span>.</p>'
  )
  change_buttons({
    "Проклятье! Придётся начинать взлом заново…": hub_mainQuestGood73a,
  })
  currentFunction = hub_mainQuestGood7323
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7324() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift1 = false
  shtift2 = false
  shtift3 = false
  shtift4 = false
  setCookie("cshtift1", shtift1)
  setCookie("cshtift2", shtift2)
  setCookie("cshtift3", shtift3)
  setCookie("cshtift4", shtift4)
  change_image("img/revenge/pic_140.jpg")
  change_text(
    '<p>Плавным движением Вы утопили <span class="yes">штифт</span> до <span class="yes">упора</span> и остановились. Вы по-прежнему чувствовали сопротивление штифта. Судя по всему, <span class="yes">Вы ошиблись</span> в выборе положения. Вся комбинация <span class="yes">сбросилась</span>. Придётся извлекать отмычку и начинать взлом <span class="yes">заново</span>.</p>'
  )
  change_buttons({
    "Проклятье! Придётся начинать взлом заново…": hub_mainQuestGood73a,
  })
  currentFunction = hub_mainQuestGood7324
  setCookie("ccurrentFunction", currentFunction)
}
/* Третий штифт */
function hub_mainQuestGood733() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (shtift3 === false) {
    if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_143.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_143ffft.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_143ftff.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_143ftft.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_143tfff.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_143tfft.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_143ttff.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_143ttft.jpg")
    }
    change_text(
      '<p>Вы аккуратно просунули тоненький крючок в <span class="yes">замок</span> и нащупали <span class="yes">третий штифт</span>. Нужно вдавить его до <span class="yes">определённого положения</span>, если не довести штифт до нужного положения или наоборот сильно вдавить штифт, то комбинация собьется и придётся начинать взлом замка заново.</p>'
    )
    change_buttons({
      "Опустить штифт на 25%": hub_mainQuestGood7331,
      "Опустить штифт на 50%": hub_mainQuestGood7332,
      "Опустить штифт на 75%": hub_mainQuestGood7333,
      "Опустить штифт до упора": hub_mainQuestGood7334,
    })
  } else {
    if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_143fftf.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_143fftt.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_143fttf.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_143fttt.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_143tftf.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_143tftt.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_143tttf.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_143tttt.jpg")
    }
    change_text(
      '<p>Положение <span class="yes">третьего штифта</span> уже подобрано, он <span class="yes">зафиксирован</span>. Можно переходить к подбору положения для <span class="yes">другого штифта</span>.</p>'
    )
    change_buttons({
      "Опустить первый штифт": hub_mainQuestGood731,
      "Опустить второй штифт": hub_mainQuestGood732,
      "Опустить третий штифт": hub_mainQuestGood733,
      "Опустить четвёртый штифт": hub_mainQuestGood734,
      "Провернуть сердцевину": hub_mainQuestGood735,
    })
  }
  currentFunction = hub_mainQuestGood733
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7331() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift1 = false
  shtift2 = false
  shtift3 = false
  shtift4 = false
  setCookie("cshtift1", shtift1)
  setCookie("cshtift2", shtift2)
  setCookie("cshtift3", shtift3)
  setCookie("cshtift4", shtift4)
  change_image("img/revenge/pic_140.jpg")
  change_text(
    '<p>Плавным движением Вы вдавили <span class="yes">штифт</span> на <span class="yes">25%</span> и остановились. Вы по-прежнему чувствовали сопротивление штифта. Судя по всему, <span class="yes">Вы ошиблись</span> в выборе положения. Вся комбинация <span class="yes">сбросилась</span>. Придётся извлекать отмычку и начинать взлом <span class="yes">заново</span>.</p>'
  )
  change_buttons({
    "Проклятье! Придётся начинать взлом заново…": hub_mainQuestGood73a,
  })
  currentFunction = hub_mainQuestGood7331
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7332() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift1 = false
  shtift2 = false
  shtift3 = false
  shtift4 = false
  setCookie("cshtift1", shtift1)
  setCookie("cshtift2", shtift2)
  setCookie("cshtift3", shtift3)
  setCookie("cshtift4", shtift4)
  change_image("img/revenge/pic_140.jpg")
  change_text(
    '<p>Плавным движением Вы вдавили <span class="yes">штифт</span> на <span class="yes">50%</span> и остановились. Вы по-прежнему чувствовали сопротивление штифта. Судя по всему, <span class="yes">Вы ошиблись</span> в выборе положения. Вся комбинация <span class="yes">сбросилась</span>. Придётся извлекать отмычку и начинать взлом <span class="yes">заново</span>.</p>'
  )
  change_buttons({
    "Проклятье! Придётся начинать взлом заново…": hub_mainQuestGood73a,
  })
  currentFunction = hub_mainQuestGood7332
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7333() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift1 = false
  shtift2 = false
  shtift3 = false
  shtift4 = false
  setCookie("cshtift1", shtift1)
  setCookie("cshtift2", shtift2)
  setCookie("cshtift3", shtift3)
  setCookie("cshtift4", shtift4)
  change_image("img/revenge/pic_140.jpg")
  change_text(
    '<p>Плавным движением Вы вдавили <span class="yes">штифт</span> на <span class="yes">75%</span> и остановились. Вы по-прежнему чувствовали сопротивление штифта. Судя по всему, <span class="yes">Вы ошиблись</span> в выборе положения. Вся комбинация <span class="yes">сбросилась</span>. Придётся извлекать отмычку и начинать взлом <span class="yes">заново</span>.</p>'
  )
  change_buttons({
    "Проклятье! Придётся начинать взлом заново…": hub_mainQuestGood73a,
  })
  currentFunction = hub_mainQuestGood7333
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7334() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift3 = true
  setCookie("cshtift3", shtift3)
  if (
    (shtift1 === false) &
    (shtift2 === false) &
    (shtift3 === true) &
    (shtift4 === false)
  ) {
    change_image("img/revenge/pic_143fftf.jpg")
  } else if (
    (shtift1 === false) &
    (shtift2 === false) &
    (shtift3 === true) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_143fftt.jpg")
  } else if (
    (shtift1 === false) &
    (shtift2 === true) &
    (shtift3 === true) &
    (shtift4 === false)
  ) {
    change_image("img/revenge/pic_143fttf.jpg")
  } else if (
    (shtift1 === false) &
    (shtift2 === true) &
    (shtift3 === true) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_143fttt.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === false) &
    (shtift3 === true) &
    (shtift4 === false)
  ) {
    change_image("img/revenge/pic_143tftf.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === false) &
    (shtift3 === true) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_143tftt.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === true) &
    (shtift3 === true) &
    (shtift4 === false)
  ) {
    change_image("img/revenge/pic_143tttf.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === true) &
    (shtift3 === true) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_143tttt.jpg")
  }
  change_text(
    '<p>Плавным движением Вы вдавили <span class="yes">штифт</span> до <span class="yes">упора</span> и остановились. Вы почувствовали, что штифт зафиксировался. Можно приступать к <span class="yes">следующему шагу</span> взлома.</p>'
  )
  change_buttons({
    "Опустить первый штифт": hub_mainQuestGood731,
    "Опустить второй штифт": hub_mainQuestGood732,
    "Опустить третий штифт": hub_mainQuestGood733,
    "Опустить четвёртый штифт": hub_mainQuestGood734,
    "Провернуть сердцевину": hub_mainQuestGood735,
  })
  currentFunction = hub_mainQuestGood7334
  setCookie("ccurrentFunction", currentFunction)
}
/* Четвёртый штифт */
function hub_mainQuestGood734() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (shtift4 === false) {
    if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_144.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_144fftf.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_144ftff.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_144fttf.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_144tfff.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_144tftf.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_144ttff.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === false)
    ) {
      change_image("img/revenge/pic_144tttf.jpg")
    }
    change_text(
      '<p>Вы аккуратно просунули тоненький крючок в <span class="yes">замок</span> и нащупали <span class="yes">четвёртый штифт</span>. Нужно вдавить его до <span class="yes">определённого положения</span>, если не довести штифт до нужного положения или наоборот сильно вдавить штифт, то комбинация собьется и придётся начинать взлом замка заново.</p>'
    )
    change_buttons({
      "Опустить штифт на 25%": hub_mainQuestGood7341,
      "Опустить штифт на 50%": hub_mainQuestGood7342,
      "Опустить штифт на 75%": hub_mainQuestGood7343,
      "Опустить штифт до упора": hub_mainQuestGood7344,
    })
  } else {
    if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_144ffft.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_144fftt.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_144ftft.jpg")
    } else if (
      (shtift1 === false) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_144fttt.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_144tfft.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === false) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_144tftt.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === false) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_144ttft.jpg")
    } else if (
      (shtift1 === true) &
      (shtift2 === true) &
      (shtift3 === true) &
      (shtift4 === true)
    ) {
      change_image("img/revenge/pic_144tttt.jpg")
    }
    change_text(
      '<p>Положение <span class="yes">четвёртого штифта</span> уже подобрано, он <span class="yes">зафиксирован</span>. Можно переходить к подбору положения для <span class="yes">другого штифта</span>.</p>'
    )
    change_buttons({
      "Опустить первый штифт": hub_mainQuestGood731,
      "Опустить второй штифт": hub_mainQuestGood732,
      "Опустить третий штифт": hub_mainQuestGood733,
      "Опустить четвёртый штифт": hub_mainQuestGood734,
      "Провернуть сердцевину": hub_mainQuestGood735,
    })
  }
  currentFunction = hub_mainQuestGood734
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7341() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift4 = true
  setCookie("cshtift4", shtift4)
  if (
    (shtift1 === false) &
    (shtift2 === false) &
    (shtift3 === false) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_144ffft.jpg")
  } else if (
    (shtift1 === false) &
    (shtift2 === false) &
    (shtift3 === true) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_144fftt.jpg")
  } else if (
    (shtift1 === false) &
    (shtift2 === true) &
    (shtift3 === false) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_144ftft.jpg")
  } else if (
    (shtift1 === false) &
    (shtift2 === true) &
    (shtift3 === true) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_144fttt.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === false) &
    (shtift3 === false) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_144tfft.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === false) &
    (shtift3 === true) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_144tftt.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === true) &
    (shtift3 === false) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_144ttft.jpg")
  } else if (
    (shtift1 === true) &
    (shtift2 === true) &
    (shtift3 === true) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_144tttt.jpg")
  }
  change_text(
    '<p>Плавным движением Вы вдавили <span class="yes">штифт</span> на <span class="yes">25%</span> и остановились. Вы почувствовали, что штифт зафиксировался. Можно приступать к <span class="yes">следующему шагу</span> взлома.</p>'
  )
  change_buttons({
    "Опустить первый штифт": hub_mainQuestGood731,
    "Опустить второй штифт": hub_mainQuestGood732,
    "Опустить третий штифт": hub_mainQuestGood733,
    "Опустить четвёртый штифт": hub_mainQuestGood734,
    "Провернуть сердцевину": hub_mainQuestGood735,
  })
  currentFunction = hub_mainQuestGood7341
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7342() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift1 = false
  shtift2 = false
  shtift3 = false
  shtift4 = false
  setCookie("cshtift1", shtift1)
  setCookie("cshtift2", shtift2)
  setCookie("cshtift3", shtift3)
  setCookie("cshtift4", shtift4)
  change_image("img/revenge/pic_140.jpg")
  change_text(
    '<p>Плавным движением Вы вдавили <span class="yes">штифт</span> на <span class="yes">50%</span> и остановились. Вы по-прежнему чувствовали сопротивление штифта. Судя по всему, <span class="yes">Вы ошиблись</span> в выборе положения. Вся комбинация <span class="yes">сбросилась</span>. Придётся извлекать отмычку и начинать взлом <span class="yes">заново</span>.</p>'
  )
  change_buttons({
    "Проклятье! Придётся начинать взлом заново…": hub_mainQuestGood73a,
  })
  currentFunction = hub_mainQuestGood7342
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7343() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift1 = false
  shtift2 = false
  shtift3 = false
  shtift4 = false
  setCookie("cshtift1", shtift1)
  setCookie("cshtift2", shtift2)
  setCookie("cshtift3", shtift3)
  setCookie("cshtift4", shtift4)
  change_image("img/revenge/pic_140.jpg")
  change_text(
    '<p>Плавным движением Вы вдавили <span class="yes">штифт</span> на <span class="yes">75%</span> и остановились. Вы по-прежнему чувствовали сопротивление штифта. Судя по всему, <span class="yes">Вы ошиблись</span> в выборе положения. Вся комбинация <span class="yes">сбросилась</span>. Придётся извлекать отмычку и начинать взлом <span class="yes">заново</span>.</p>'
  )
  change_buttons({
    "Проклятье! Придётся начинать взлом заново…": hub_mainQuestGood73a,
  })
  currentFunction = hub_mainQuestGood7343
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7344() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  shtift1 = false
  shtift2 = false
  shtift3 = false
  shtift4 = false
  setCookie("cshtift1", shtift1)
  setCookie("cshtift2", shtift2)
  setCookie("cshtift3", shtift3)
  setCookie("cshtift4", shtift4)
  change_image("img/revenge/pic_140.jpg")
  change_text(
    '<p>Плавным движением Вы утопили <span class="yes">штифт</span> до <span class="yes">упора</span> и остановились. Вы по-прежнему чувствовали сопротивление штифта. Судя по всему, <span class="yes">Вы ошиблись</span> в выборе положения. Вся комбинация <span class="yes">сбросилась</span>. Придётся извлекать отмычку и начинать взлом <span class="yes">заново</span>.</p>'
  )
  change_buttons({
    "Проклятье! Придётся начинать взлом заново…": hub_mainQuestGood73a,
  })
  currentFunction = hub_mainQuestGood7344
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood735() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (
    (shtift1 === true) &
    (shtift2 === true) &
    (shtift3 === true) &
    (shtift4 === true)
  ) {
    change_image("img/revenge/pic_139b.jpg")
    change_text(
      '<p>Вы аккуратно просунули в <span class="yes">замок</span> отвёртку и попробовали провернуть <span class="yes">сердцевину</span>. <span class="yes">Замок</span> мягко щёлкнул и дверь растворилась. Вы вместе с <span class="yes">группой</span> бесшумно вошли в помещение <span class="yes">склада</span>.</p>'
    )
    change_buttons({ Осмотреться: hub_mainQuestGood74 })
  } else {
    change_image("img/revenge/pic_139a.jpg")
    change_text(
      '<p>Вы аккуратно просунули в <span class="yes">замок</span> отвёртку и попробовали провернуть <span class="yes">сердцевину</span>. <span class="yes">Замок</span> никак не хотел поддаваться. Сначала нужно все <span class="yes">штифты замка</span> привести в <span class="yes">правильное положение</span>, а только потом приступать к повороту <span class="yes">сердцевины</span> цилиндра.</p>'
    )
    change_buttons({ "Продолжить взлом замка": hub_mainQuestGood73a })
  }
  currentFunction = hub_mainQuestGood735
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood74() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_145.jpg")
  change_text(
    '<p>Вы в заброшенном здании <span class="yes">склада</span> какой-то довоенной компании. Склад, как склад. Десятки таких же заброшек есть на каждой улице этого <span class="yes">города</span>.</p><p>Из дальней комнаты доносятся <span class="yes">голоса</span>. Время действовать.</p>'
  )
  change_buttons({
    "Вбежать в комнату и броситься на врага врукопашную": hub_mainQuestGood741,
    "Сделать предупредительный выстрел и предложить врагу сдаться":
      hub_mainQuestGood742,
  })
  currentFunction = hub_mainQuestGood74
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood741() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_health(30)
  change_image("img/revenge/pic_146.jpg")
  change_text(
    '<p>- Приготовились, - сделали Вы знак Вашей <span class="yes">команде</span>. – Пошли!</p><p>- Подожди, - попытался остановить Вас <span class="yes">один</span> из <span class="yes">полицейских</span>. - Шериф говорил сначала привлечь их внимание.</p><p>Но куда там! Горячая кровь внутри Вас кипела! Вы, выбив дверь, бросились на заговорщиков. Однако, пока вы бежали, волосатый <span class="yes">бандит</span> успел выхватить пистолет и сделать выстрел. Пуля <span class="yes">прошила</span> Ваше <span class="yes">плечо</span> насквозь, чудом не зацепив бегущих сзади <span class="yes">полицейских</span>. От неожиданности Вы упали, не добежав метра до врага.</p>'
  )
  change_buttons({ Далее: hub_mainQuestGood7411 })
  currentFunction = hub_mainQuestGood741
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7411() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_147.jpg")
  if (deckerQuest === true) {
    change_text(
      '<p>В этот момент с грохотом выбитых потолочных окон в помещение влетели <span class="yes">шериф Грин</span> со своим <span class="yes">помощником</span> и сбили <span class="yes">преступников</span> с ног.</p><p>Подонки были вмиг обезоружены и крепко связаны действовавшими молниеносно сотрудниками <span class="yes">полиции Хаба</span>. Они были настолько ошеломлены произошедшим, что поначалу не могли вымолвить и слова.</p><p>Один из них был <span class="yes">человек</span> в <span class="yes">ярко-красных</span> штанах. Его морщинистое лицо было красным то ли от гнева, то ли от стыда. Это и был <span class="yes">Дон</span> – продажный коп, убить которого приказал Вам <span class="yes">Декер</span>.</p><p>Второй был высокий <span class="yes">парень с длинными волосами</span>, лет двадцати. Он был одет в синие джинсы и чёрную кожаную куртку. На его шее Вы заметили татуировку в виде <span class="yes">змеи</span>.</p><p>- Сдал, падла! – прейдя в себя, зашипел <span class="yes">волосатый преступник</span> на <span class="yes">Дона</span>. – Конец, тебе мразота!</p><p>Старый <span class="yes">Дон</span> обреченно молчал, усиленно раздувая ноздри.</p>'
    )
  } else {
    change_text(
      '<p>В этот момент с грохотом выбитых потолочных окон в помещение влетели <span class="yes">шериф Грин</span> со своим <span class="yes">помощником</span> и сбили <span class="yes">преступников</span> с ног.</p><p>Подонки были вмиг обезоружены и крепко связаны действовавшими молниеносно сотрудниками <span class="yes">полиции Хаба</span>. Они были настолько ошеломлены произошедшим, что поначалу не могли вымолвить и слова.</p><p>Морщинистое лицо <span class="yes">Дона</span> было красным то ли от гнева, то ли от стыда.</p><p>Второй преступник был высоким <span class="yes">паренем с длинными волосами</span>, лет двадцати. Он был одет в синие джинсы и чёрную кожаную куртку. На его шее Вы заметили татуировку в виде <span class="yes">змеи</span>.</p><p>- Сдал, падла! – прейдя в себя, зашипел <span class="yes">волосатый преступник</span> на <span class="yes">Дона</span>. – Конец, тебе мразота!</p><p>Старый <span class="yes">Дон</span> обреченно молчал, усиленно раздувая ноздри.</p><p>- Поймали гадов! – воскликнул <span class="yes">шериф</span>. – Ведём их в <span class="yes">участок</span>, ребята.</p>'
    )
  }
  change_buttons({ "Идти за шерифом": hub_mainQuestGood9 })
  currentFunction = hub_mainQuestGood7411
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood742() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 1
  change_shotgun()
  change_image("img/revenge/pic_148.jpg")
  change_text(
    '<p>Решив дать <span class="yes">преступникам</span> шанс, Вы выстрелили из <span class="yes">дробовика</span> в стену над их головами и заорали из-за двери:</p><p>- Сдавайтесь, сволочи! Вы окружены.</p><p>Ну, что ж Ваши слова произвели эффект – <span class="yes">преступники</span> выхватили своё оружие и открыли ураганный огонь в Вашу сторону. Вбежать в этот момент в комнату было бы чистой воды самоубийством. Однако, доброе дело Вы всё-таки сделали – внимание <span class="yes">врагов</span> было полностью сосредоточено на Вас и Вашей <span class="yes">команде</span>. Они никак не ожидали, что нападение стоит ждать ещё и сверху.</p>'
  )
  change_buttons({ Далее: hub_mainQuestGood7421 })
  currentFunction = hub_mainQuestGood742
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood7421() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 1
  change_shotgun()
  change_image("img/revenge/pic_149.jpg")
  if (deckerQuest === true) {
    change_text(
      '<p><span class="yes">Шериф Грин</span> вместе с <span class="yes">помощником Кенни</span> рухнули на головы противников, как молния с небес. В этот момент в комнату ворвались Вы с <span class="yes">полицейскими</span> и скрутили поверженных врагов, не дав им возможности подняться на ноги.</p><p>Один из них был <span class="yes">человек</span> в <span class="yes">ярко-красных</span> штанах. Его морщинистое лицо было красным то ли от гнева, то ли от стыда. Это и был <span class="yes">Дон</span> – продажный коп, убить которого приказал Вам <span class="yes">Декер</span>.</p><p>Второй был высокий <span class="yes">парень с длинными волосами</span>, лет двадцати. Он был одет в синие джинсы и чёрную кожаную куртку. На его шее Вы заметили татуировку в виде <span class="yes">змеи</span>.</p><p>- Сдал, падла! – прейдя в себя, зашипел <span class="yes">волосатый преступник</span> на <span class="yes">Дона</span>. – Конец, тебе мразота!</p><p>Старый <span class="yes">Дон</span> обреченно молчал, усиленно раздувая ноздри.</p>'
    )
  } else {
    change_text(
      '<p><span class="yes">Шериф Грин</span> вместе с <span class="yes">помощником Кенни</span> рухнули на головы противников, как молния с небес. В этот момент в комнату ворвались Вы с <span class="yes">полицейскими</span> и скрутили поверженных врагов, не дав им возможности подняться на ноги.</p><p>Морщинистое лицо <span class="yes">Дона</span> было красным то ли от гнева, то ли от стыда.</p><p>Второй преступник был высоким <span class="yes">паренем с длинными волосами</span>, лет двадцати. Он был одет в синие джинсы и чёрную кожаную куртку. На его шее Вы заметили татуировку в виде <span class="yes">змеи</span>.</p><p>- Сдал, падла! – прейдя в себя, зашипел <span class="yes">волосатый преступник</span> на <span class="yes">Дона</span>. – Конец, тебе мразота!</p><p>Старый <span class="yes">Дон</span> обреченно молчал, усиленно раздувая ноздри.</p><p>- Поймали гадов! – воскликнул <span class="yes">шериф</span>. – Ведём их в <span class="yes">участок</span>, ребята.</p>'
    )
  }
  change_buttons({ "Идти за шерифом": hub_mainQuestGood9 })
  currentFunction = hub_mainQuestGood7421
  setCookie("ccurrentFunction", currentFunction)
}
/* Захват через крышу с Кенни */
function hub_mainQuestGood7112() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_150.jpg")
  if (deckerQuest === true) {
    change_text(
      '<p>Ну, с Богом, пацаны! – шепнул <span class="yes">Грин</span> своим сподручным и стал осторожно подбирать отмычку для крепкого <span class="yes">замка</span> входной двери. Вы же с <span class="yes">Кенни</span> осторожно полезли на <span class="yes">крышу</span>.</p><p>Складская крыша оказалась насквозь ржавой и трухлявой, того и гляди проломится под Вашим весом.</p><p>Осторожно, чтобы не провалиться, Вы стали медленно ползти к стеклянному треугольнику <span class="yes">окошка</span> на противоположном конце <span class="yes">крыши</span>. <span class="yes">Кенни</span>, также как и Вы, полз на животе след в след за Вами. Обливаясь потом, Вы преодолели расстояние от края крыши до <span class="yes">окна</span> и заглянули внутрь.</p><p>Через мутное стекло Вы разглядели заговорщиков: <span class="yes">старого</span>, но жилистого мужика в ярко-красных штанах и патлатого <span class="yes">парня</span> в синих джинсах.</p><p>Свесившись с края крыши, Вы знаками указали месторасположение противников <span class="yes">шерифу</span> и приготовились к атаке.</p>'
    )
  } else {
    change_text(
      '<p>Ну, с Богом, пацаны! – шепнул <span class="yes">Грин</span> своим сподручным и стал осторожно подбирать отмычку для крепкого <span class="yes">замка</span> входной двери. Вы же с <span class="yes">Кенни</span> осторожно полезли на <span class="yes">крышу</span>.</p><p>Складская крыша оказалась насквозь ржавой и трухлявой, того и гляди проломится под Вашим весом.</p><p>Осторожно, чтобы не провалиться, Вы стали медленно ползти к стеклянному треугольнику <span class="yes">окошка</span> на противоположном конце <span class="yes">крыши</span>. <span class="yes">Кенни</span>, также как и Вы, полз на животе след в след за Вами. Обливаясь потом, Вы преодолели расстояние от края крыши до <span class="yes">окна</span> и заглянули внутрь.</p><p>Через мутное стекло Вы разглядели заговорщиков: <span class="yes">Дона</span> и патлатого <span class="yes">парня</span> в синих джинсах.</p><p>Свесившись с края крыши, Вы знаками указали месторасположение противников <span class="yes">шерифу</span> и приготовились к атаке.</p>'
    )
  }
  change_buttons({ "Ждать пока шериф выломает дверь": hub_mainQuestGood8 })
  currentFunction = hub_mainQuestGood7112
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood8() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_health(20)
  change_image("img/revenge/pic_151.jpg")
  change_text(
    '<p>Долго ждать не пришлось. <span class="yes">Шериф</span> со своими <span class="yes">людьми</span> проник в главное помещение <span class="yes">склада</span> и без лишней возни со старой довоенной дверью внутреннего помещения, мощным ударом ноги разнёс её в щепки. <span class="yes">Подельники</span> мгновенно расчехлили оружие и развернулись в сторону входа.</p><p>Далее события стали развиваться стремительно. Вместе с <span class="yes">Кенни</span> Вы рухнули на головы врагов, как молния с небес.</p><p>К сожалению, Вы преземлились крайне неудачно, <span class="yes">повредив руку</span>. Изо всех сил Вы старались удержать волосатого <span class="yes">рейдера</span>, навалившись на него всем телом. Однако, крепкий паренёк и не думал сдаваться, принявшись колотить Вас свободной рукой. Получив удар по и так уже повреждённой руке, Вы вскрикнули и на мгновение ослабили хватку. Этого оказалось достаточно для того, чтобы ловкий <span class="yes">бандит</span> успел вытащить <span class="yes">пистолет</span> из кабуры на поясе. Неизвесто чем бы всё это закончилось, если бы в этот момент в комнату не ворвались <span class="yes">полицейские</span> и не скрутили <span class="yes">Дона</span> и <span class="yes">патлатого</span>.</p><p>- Сдал, падла! – зашипел <span class="yes">волосатый преступник</span> на <span class="yes">Дона</span>. – Конец, тебе мразота!</p><p>Старый <span class="yes">Дон</span> обреченно молчал, усиленно раздувая ноздри. Его лицо стало малиновым, таким же, как его штаны.</p><p>- Поймали гадов! – воскликнул <span class="yes">шериф</span>. – Ведём их в участок, ребята.</p>'
  )
  change_buttons({ "Идти за шерифом": hub_mainQuestGood9 })
  currentFunction = hub_mainQuestGood8
  setCookie("ccurrentFunction", currentFunction)
}

/* Допрос рейдера и Дона в участке */
function hub_mainQuestGood9() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (storageFight === false) {
    donDeathKennyInj = true
    setCookie("cdonDeathKennyInj", donDeathKennyInj)
    change_time(1)
    change_image("img/revenge/pic_152.jpg")
    change_text(
      '<p>Через полчаса в участок ввалились возбуждённые и мрачные <span class="yes">полицейские</span>. Однако среди них Вы не заметили <span class="yes">помощника шерифа</span>, в кресле которого сидели.</p><p>Один из копов злобно посмотрел на Вас и сказал:</p><p>- Эти ублюдки подстрелили <span class="yes">Кенни</span>. Сволочи! – он грязно выругался и продолжил. – Если бы ты помог нам, то…</p><p>- Прекрати, - оборвал его <span class="yes">шериф</span>. – <span class="yes">Кенни</span> выкарабкается, а разбираться с преступниками, это наша задача, а не гражданских лиц. В камеру этого супчика.</p><p>И только в этот момент Вы увидели того длинноволосого молодого <span class="yes">парня</span>. Его окровавленное лицо было искривлено в злобной усмешке. Когда его увели в камеру, Вы спросили у <span class="yes">шерифа Грина</span>:</p><p>- <span class="yes">Шериф</span>, а где <span class="yes">Дон</span>?</p><p>- <span class="yes">Дон</span> убит, - отрезал <span class="yes">шериф</span> и больше не проронил ни слова, не желая открывать Вам подробности перестрелки на <span class="yes">складе</span>.</p><p><span class="yes">Грин</span> вышел из помещения. Его не было около <span class="yes">10 минут</span>, затем он вернулся, держа в руках огромные клещи.</p><p>- Ну, что, готов допросить этого <span class="yes">подонка</span>? – спросил он у Вас.</p>'
    )
    change_buttons({ "Допросить рейдера": hub_mainQuestGood91 })
  } else {
    change_image("img/revenge/pic_153.jpg")
    change_time(1)
    if (health < 91) {
      change_text(
        '<p>Всю дорогу до участка <span class="yes">шериф</span> рассыпался в любезностях и благодарил Вас за оказанную помощь. Никто не пострадал, кроме Вас. Обоих преступников взяли живьём. Осталось только добыть сведения о месте расположения <span class="yes">главной базы Гадюк</span> и можно отправляться в путь.</p><p>В участке <span class="yes">преступников</span> рассадили по разным камерам. <span class="yes">Шериф</span> предложил Вам поучаствовать в допросе <span class="yes">обоих</span>. Само собой, это было в Ваших интересах.</p>'
      )
      change_buttons({
        "Допросить Дона": hub_mainQuestGood92,
        "Допросить рейдера": hub_mainQuestGood91,
      })
    } else {
      change_text(
        '<p>Всю дорогу до участка <span class="yes">шериф</span> рассыпался в любезностях и благодарил Вас за оказанную помощь. Никто не пострадал, обоих преступников взяли живьём. Осталось только добыть сведения о месте расположения <span class="yes">главной базы Гадюк</span> и можно отправляться в путь.</p><p>В участке <span class="yes">преступников</span> рассадили по разным камерам. <span class="yes">Шериф</span> предложил Вам поучаствовать в допросе <span class="yes">обоих</span>. Само собой, это было в Ваших интересах.</p>'
      )
      change_buttons({
        "Допросить Дона": hub_mainQuestGood92,
        "Допросить рейдера": hub_mainQuestGood91,
      })
    }
  }
  currentFunction = hub_mainQuestGood9
  setCookie("ccurrentFunction", currentFunction)
}
/* Допрос Дона */
function hub_mainQuestGood92() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_154.jpg")
  change_text(
    '<p>Вы предложили войти к <span class="yes">Дону</span>. Когда Вы с <span class="yes">шерифом</span> и детективом <span class="yes">Кенни</span> зашли в камеру, старый <span class="yes">полицейский</span> сидел в углу и плакал.</p><p>Судя по всему, он страдал от невыносимого жгучего стыда и позора. Его руки лихорадочно дрожали, а сам он долго не мог вымолвить и слова.</p><p>Никаких пыток применять к <span class="yes">старику</span> не пришлось – он и сам всё был рад рассказать. Слова лились потоком, словно освобождая душу от потока многолетней лжи.</p>'
  )
  change_buttons({
    "Спросить о рейдере, с которым он имел дело": hub_mainQuestGood921,
    "Спросить о местонахождении главной базы Гадюк": hub_mainQuestGood922,
  })
  currentFunction = hub_mainQuestGood92
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood921() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  donAboutRaider = true
  setCookie("cdonAboutRaider", donAboutRaider)
  change_image("img/revenge/pic_155.jpg")
  change_text(
    '<p><span class="yes">Дон</span> рассказал Вам, что не знает как точно зовут <span class="yes">рейдера</span> в соседней камере. Ему он представлялся <span class="yes">Хэнком</span>. <span class="yes">Рейдер</span> вышел на него около года назад и предложил взаимовыгодное сотрудничество. Некогда честный и знаменитый полицейский стал жертвой банальной жажды наживы. В первую же встречу ему предложили сумму, превышающую его годичный оклад в два раза. Почувствовав в руках крышки, <span class="yes">Дон</span> не смог сдержаться и раскрыл служебную информацию злодею. На следующий день он узнал, что караван, который следовал маршрутом, который <span class="yes">Дон</span> выдал <span class="yes">Гадюкам</span>, был разграблен, а его охрана была полностью уничтожена.</p><p>- Мной овладел ужас… - всхлипывая тихо сказал <span class="yes">Дон</span>. – Я понял, что совершил нечто непоправимое, но что я мог сделать? Прийти и рассказать? Меня бы вздёрнули на первом же столбе горожане. Я сам влез в это болото, и прощения мне нет.</p>'
  )
  if (donAboutBase === true) {
    change_buttons({
      "Оставить его наедине с сослуживцами": hub_mainQuestGood923,
    })
  } else {
    change_buttons({
      "Спросить о местонахождении главной базы Гадюк": hub_mainQuestGood922,
    })
  }
  currentFunction = hub_mainQuestGood921
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood922() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  donAboutBase = true
  setCookie("cdonAboutBase", donAboutBase)
  change_image("img/revenge/pic_155.jpg")
  change_text(
    '<p><span class="yes">Дон</span> вытер глаза.</p><p>- Я бы с радостью рассказал местоположение этих выродков, но мы никогда не встречались с <span class="yes">Хэнком</span> за пределами <span class="yes">города</span>. Я не знаю… Простите меня!</p>'
  )
  if (donAboutRaider === true) {
    change_buttons({
      "Оставить его наедине с сослуживцами": hub_mainQuestGood923,
    })
  } else {
    change_buttons({
      "Спросить о рейдере, с которым он имел дело": hub_mainQuestGood921,
    })
  }
  currentFunction = hub_mainQuestGood922
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood923() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_156.jpg")
  change_text(
    '<p>Вы оставили <span class="yes">шерифа</span> и его <span class="yes">помощника</span> наедине с бывшим <span class="yes">коллегой</span>.</p><p>Пока у Вас выдалась свободная минутка, Вы решили разобраться, в чём смысл <span class="yes">курения</span> и почему оно так всем нравится. Стрельнув у одного из полицейских <span class="yes">сигаретку</span>, Вы вышли на улицу и принялись изучать её. Естественно Вы знали, что это такое – об этой <span class="yes">вредной привычке</span> Вы узнали из библиотечных архивов <span class="yes">Братства Стали</span> – но держали <span class="yes">сигарету</span> в руках Вы впервые. Понюхав наполнение <span class="yes">самокрутки</span>, Вы пришли к выводу, что <span class="yes">сушеный табак</span> имеет приятный аромат. Слегка волнуясь, Вы подожгли кончик <span class="yes">сигареты</span> и стали аккуратно затягивать <span class="yes">едкий дым</span> в лёгкие. Внезапно Вы зашлись удушливым кашлем. Судя по всему, Ваши чистые лёгкие не были готовы к такому испытанию без противогаза. С отвращением Вы отшвырнули эту <span class="yes">пакость</span> в сторону и дали себе обещание больше не совать, что попало в рот.</p><p>Когда Вы вернулись с улицы <span class="yes">шериф</span> сидел в коридоре на кушетке и напряжённо размышлял.</p><p>- Да, – произнёс <span class="yes">шериф Грин</span>, увидев Вас. – Это видимо, одно из самых тяжких решений, которое мне придётся принять. Мы предадим <span class="yes">Дона</span> городскому  суду. По законам <span class="yes">Хаба</span> он будет <span class="yes">казнён</span>. Слишком много жизней загублено по его вине. Ничего не поделаешь.</p>'
  )
  if ((raiderMainBaseKnown === true) & (mainRaiderNameKnown === true)) {
    change_buttons({ Далее: hub_mainQuestGood913 })
  } else {
    change_buttons({ "Допросить рейдера": hub_mainQuestGood91 })
  }
  currentFunction = hub_mainQuestGood923
  setCookie("ccurrentFunction", currentFunction)
}
/* Допрос рейдера */
function hub_mainQuestGood91() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (donDeathKennyInj === true) {
    change_image("img/revenge/pic_157.jpg")
    change_text(
      '<p>- Пойдём, – кивнули Вы и направились к камере <span class="yes">рейдера</span>. Бандит метался по камере словно дикий зверь. Вам стало страшновато, такую бешеную сволочь Вы видели первый раз в своей жизни.</p><p>Вы с <span class="yes">шерифом</span> и ещё одним <span class="yes">полицейским</span> навалились на <span class="yes">рейдера</span> и обездвижили его. Это будет тяжёлая ночка.</p><p>Целый <span class="yes">час</span> ушёл на вежливое общение с <span class="yes">рейдером</span>. Единственное, что Вы смогли выяснить это его настоящее имя – <span class="yes">Хэндо</span>. При этом <span class="yes">бандит</span> всячески издевался над Вами и <span class="yes">шерифом</span>, шипел, как змея и безумно вращал красными от гнева глазами.</p><p>В конце концов, у вас дружно сдали нервы, и вы избили подонка до полусмерти. </p><p>Потом <span class="yes">шериф</span> применил свои «особые» доводы и наконец, язык у <span class="yes">рейдера</span> развязался.</p>'
    )
  } else {
    change_image("img/revenge/pic_157a.jpg")
    change_text(
      '<p>Вы указали на камеру <span class="yes">рейдера</span> и шериф согласно кивнул. Вместе вы отправились допрашивать молодого <span class="yes">разбойника</span>. Бандит метался по крохотному помещению словно дикий зверь. Вам стало страшновато, такую бешеную сволочь Вы видели первый раз в своей жизни.</p><p>Вы с <span class="yes">шерифом</span> и его <span class="yes">помощником</span> навалились на <span class="yes">рейдера</span> и обездвижили его. Это будет тяжёлая ночка.</p><p>Целый <span class="yes">час</span> ушёл на вежливое общение с <span class="yes">рейдером</span>. Единственное, что Вы смогли выяснить это его настоящее имя – <span class="yes">Хэндо</span>. При этом <span class="yes">бандит</span> всячески издевался над Вами и <span class="yes">шерифом</span>, шипел, как змея и безумно вращал красными от гнева глазами.</p><p>В конце концов, у вас дружно сдали нервы, и вы избили подонка до полусмерти. </p><p>Потом <span class="yes">шериф</span> с <span class="yes">Кенни</span> применил свои «особые» доводы и наконец, язык у <span class="yes">рейдера</span> развязался.</p>'
    )
  }
  change_buttons({
    "Выведать месторасположение главной базы": hub_mainQuestGood911,
    "Узнать имя главаря": hub_mainQuestGood912,
  })
  currentFunction = hub_mainQuestGood91
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood911() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  raiderMainBaseKnown = true
  setCookie("craiderMainBaseKnown", raiderMainBaseKnown)
  change_image("img/revenge/pic_158.jpg")
  change_text(
    '<p>Вы сунули <span class="yes">рейдеру</span> старую карту и прорычали:</p><p>- Быстро показывай, где ваша <span class="yes">главная база</span>!</p><p><span class="yes">Хэндо</span> дрожащим, испачканным кровью пальцем ткнул в карту, оставив на ней красный след: </p><p>- Тут. – выдохнул он. – Вход в <span class="yes">пещеру</span>, в <span class="yes">туннелях</span> держитесь <span class="yes">левой</span> стороны.</p><p>Кажется, Ваша миссия близка к завершению.</p>'
  )
  if (mainRaiderNameKnown === true) {
    if (
      (donAboutBase === true) & (donAboutRaider === true) ||
      donDeathKennyInj === true
    ) {
      change_buttons({ "Выйти из камеры": hub_mainQuestGood913 })
    } else {
      change_buttons({ "Допросить Дона": hub_mainQuestGood92 })
    }
  } else {
    change_buttons({ "Узнать имя главаря": hub_mainQuestGood912 })
  }
  currentFunction = hub_mainQuestGood911
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood912() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  mainRaiderNameKnown = true
  setCookie("cmainRaiderNameKnown", mainRaiderNameKnown)
  add_antidote()
  change_image("img/revenge/pic_158.jpg")
  change_text(
    '<p>Молодой <span class="yes">рейдер</span> был сломлен. Он рассказал, что <span class="yes">главным</span> в племени является человек по имени <span class="yes">Аспид</span> сын <span class="yes">Фауста</span>. Племя обладает знаниями по добыче особого <span class="yes">яда</span>, который вызывает паралич и смерть. Этим ядом <span class="yes">рейдеры</span> смазывают свои ножи, копья и стрелы.</p><p>- У меня есть <span class="yes">противоядие</span>, но лишь <span class="yes">одна</span> доза. – <span class="yes">Хэндо</span> кивнул куда-то в сторону своей груди.</p><p>Вы пошарили по его куртке, и нашли во внутреннем кармане заветный <span class="yes">пузырёк</span>.</p>'
  )
  if (raiderMainBaseKnown === true) {
    if (
      (donAboutBase === true) & (donAboutRaider === true) ||
      donDeathKennyInj === true
    ) {
      change_buttons({ "Выйти из камеры": hub_mainQuestGood913 })
    } else {
      change_buttons({ "Допросить Дона": hub_mainQuestGood92 })
    }
  } else {
    change_buttons({
      "Выведать месторасположение главной базы": hub_mainQuestGood911,
    })
  }
  currentFunction = hub_mainQuestGood912
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood913() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  sheriffGreeneSecondTask = true
  mainGoodQuestBegin = false
  changeHubLocation = false
  setCookie("csheriffGreeneSecondTask", sheriffGreeneSecondTask)
  setCookie("cmainGoodQuestBegin", mainGoodQuestBegin)
  setCookie("cchangeHubLocation", changeHubLocation)
  change_image("img/revenge/pic_110.jpg")
  if (
    (sheriffGreeneFirstTaskEasy === false) &
    (donDeathKennyInj === false) &
    (goToJail === false)
  ) {
    change_text(
      '<p>Вы вернулись в кабинет <span class="yes">шерифа</span> и его <span class="yes">помощника</span>.</p><p>- Парень, - обнял Вас <span class="yes">шериф Грин</span>. – Мы всё-таки сделали это - <span class="yes">рейдеры</span> больше не смогут получать информацию о наших <span class="yes">караванах</span>. Я помню, ты говорил, что знаешь людей, способных ликвидировать угрозу со стороны <span class="yes">Гадюк</span>. Ты не называл их и, наверное, у тебя есть на  это свои личные причины. Я счастлив, что судьба свела наш <span class="yes">город</span> с таким хорошим человеком! Биться с <span class="yes">рейдерами</span> не в наших силах, но я могу тебе предложить <span class="yes">помощь</span> надёжного <span class="yes">человека</span>. Он дойдёт с тобой до базы рейдеров и прикроет тебя в случае чего.</p>'
    )
    change_buttons({
      "Согласиться на помощь": hub_mainQuestGood10,
      "Отказаться от спутника": hub_mainQuestGood11,
    })
  } else if (
    (sheriffGreeneFirstTaskEasy === true) &
    (donDeathKennyInj === false) &
    (goToJail === false)
  ) {
    change_text(
      '<p>Вы вернулись в кабинет <span class="yes">шерифа</span> и его <span class="yes">помощника</span>.</p><p>- Парень, - обнял Вас <span class="yes">шериф Грин</span>. – Мы всё-таки сделали это - <span class="yes">рейдеры</span> больше не смогут получать информацию о наших <span class="yes">караванах</span>. Я помню, ты говорил, что ты из <span class="yes">Братства</span> и вы способны ликвидировать угрозу со стороны <span class="yes">Гадюк</span>. Ты доказал, что Братство отвечает за свои слова. Я счастлив, что судьба свела наш <span class="yes">город</span> с таким хорошим человеком! Биться с <span class="yes">рейдерами</span> не в наших силах, но я могу тебе предложить <span class="yes">помощь</span> надёжного <span class="yes">человека</span>. Он дойдёт с тобой до базы рейдеров и прикроет тебя в случае чего.</p>'
    )
    change_buttons({
      "Согласиться на помощь": hub_mainQuestGood10,
      "Отказаться от спутника": hub_mainQuestGood11,
    })
  } else if (
    (sheriffGreeneFirstTaskEasy === true) &
    (donDeathKennyInj === true) &
    (goToJail === false)
  ) {
    change_text(
      '<p>Вы вернулись в кабинет <span class="yes">шерифа</span> и его <span class="yes">помощника</span>.</p><p>- Парень, - <span class="yes">шериф Грин</span> протянул Вам руку. – Мы всё-таки сделали это - <span class="yes">рейдеры</span> больше не смогут получать информацию о наших <span class="yes">караванах</span>. Я помню, ты говорил, что ты из <span class="yes">Братства</span> и вы способны ликвидировать угрозу со стороны <span class="yes">Гадюк</span>. Я надеюсь, что вы справитесь. Биться с <span class="yes">рейдерами</span> не в наших силах, к сожалению я не могу тебе предложить в помощь своих людей. Мой <span class="yes">помощник Кенни</span> ранен и не скоро вернётся в строй. Рисковать ещё одним человеком я не могу. Пойми меня правильно.</p>'
    )
    change_buttons({ "Я понимаю, шериф Грин.": hub_mainQuestGood12 })
  } else if (
    (sheriffGreeneFirstTaskEasy === true) &
    (donDeathKennyInj === true) &
    (goToJail === true)
  ) {
    change_text(
      '<p>Вы вернулись в кабинет <span class="yes">шерифа</span> и его <span class="yes">помощника</span>.</p><p>- Парень, - <span class="yes">шериф Грин</span> заложил руки за спину. – Мы всё-таки сделали это - <span class="yes">рейдеры</span> больше не смогут получать информацию о наших <span class="yes">караванах</span>. По крайней мере пока. Я помню, ты говорил, что ты из <span class="yes">Братства</span> и вы способны ликвидировать угрозу со стороны <span class="yes">Гадюк</span>. Я надеюсь, что вы справитесь. Биться с <span class="yes">рейдерами</span> не в наших силах. Несмотря на то, что наше знакомство началось не слишком удачно, ты доказал, что хороший поступок может перекрыть злые дела.</p><p>Немного подумав, <span class="yes">Грин</span> прибавил:</p><p>- Некоторые дела! - наконец, улыбнувшись, <span class="yes">шериф</span> протянул Вам руку.</p>'
    )
    change_buttons({ "Спасибо, шериф Грин.": hub_mainQuestGood12 })
  } else if (
    (sheriffGreeneFirstTaskEasy === true) &
    (donDeathKennyInj === false) &
    (goToJail === true)
  ) {
    change_text(
      '<p>Вы вернулись в кабинет <span class="yes">шерифа</span> и его <span class="yes">помощника</span>.</p><p>- Парень, - <span class="yes">шериф Грин</span> заложил руки за спину. – Мы всё-таки сделали это - <span class="yes">рейдеры</span> больше не смогут получать информацию о наших <span class="yes">караванах</span>. По крайней мере пока. Я помню, ты говорил, что ты из <span class="yes">Братства</span> и вы способны ликвидировать угрозу со стороны <span class="yes">Гадюк</span>. Я надеюсь, что вы справитесь. Биться с <span class="yes">рейдерами</span> не в наших силах. Несмотря на то, что наше знакомство началось не слишком удачно, ты доказал, что хороший поступок может перекрыть злые дела.</p><p>Немного подумав, <span class="yes">Грин</span> прибавил:</p><p>- Некоторые дела! - наконец, улыбнувшись, <span class="yes">шериф</span> протянул Вам руку.</p>'
    )
    change_buttons({ "Спасибо, шериф Грин.": hub_mainQuestGood12 })
  } else if (
    (sheriffGreeneFirstTaskEasy === false) &
    (donDeathKennyInj === true) &
    (goToJail === true)
  ) {
    change_text(
      '<p>Вы вернулись в кабинет <span class="yes">шерифа</span> и его <span class="yes">помощника</span>.</p><p>- Парень, - <span class="yes">шериф Грин</span> заложил руки за спину. – Мы всё-таки сделали это - <span class="yes">рейдеры</span> больше не смогут получать информацию о наших <span class="yes">караванах</span>. По крайней мере пока. Биться с <span class="yes">рейдерами</span> не в наших силах. Несмотря на то, что наше знакомство началось не слишком удачно, ты доказал, что хороший поступок может перекрыть злые дела.</p><p>Немного подумав, <span class="yes">Грин</span> прибавил:</p><p>- Некоторые дела! - наконец, улыбнувшись, <span class="yes">шериф</span> протянул Вам руку.</p>'
    )
    change_buttons({ "Спасибо, шериф Грин.": hub_mainQuestGood12 })
  } else if (
    (sheriffGreeneFirstTaskEasy === false) &
    (donDeathKennyInj === false) &
    (goToJail === true)
  ) {
    change_text(
      '<p>Вы вернулись в кабинет <span class="yes">шерифа</span> и его <span class="yes">помощника</span>.</p><p>- Парень, - <span class="yes">шериф Грин</span> заложил руки за спину. – Мы всё-таки сделали это - <span class="yes">рейдеры</span> больше не смогут получать информацию о наших <span class="yes">караванах</span>. По крайней мере пока. Биться с <span class="yes">рейдерами</span> не в наших силах. Несмотря на то, что наше знакомство началось не слишком удачно, ты доказал, что хороший поступок может перекрыть злые дела.</p><p>Немного подумав, <span class="yes">Грин</span> прибавил:</p><p>- Некоторые дела! - наконец, улыбнувшись, <span class="yes">шериф</span> протянул Вам руку.</p>'
    )
    change_buttons({ "Спасибо, шериф Грин.": hub_mainQuestGood12 })
  } else if (
    (sheriffGreeneFirstTaskEasy === false) &
    (donDeathKennyInj === true) &
    (goToJail === false)
  ) {
    change_text(
      '<p>Вы вернулись в кабинет <span class="yes">шерифа</span> и его <span class="yes">помощника</span>.</p><p>- Парень, - <span class="yes">шериф Грин</span> протянул Вам руку. – Мы всё-таки сделали это - <span class="yes">рейдеры</span> больше не смогут получать информацию о наших <span class="yes">караванах</span>. Я помню, ты говорил, что знаешь людей, способных ликвидировать угрозу со стороны <span class="yes">Гадюк</span>. Ты не называл их и, наверное, у тебя есть на  это свои личные причины. Биться с <span class="yes">рейдерами</span> не в наших силах, к сожалению я не могу тебе предложить в помощь своих людей. Мой <span class="yes">помощник Кенни</span> ранен и не скоро вернётся в строй. Рисковать ещё одним человеком я не могу. Пойми меня правильно.</p>'
    )
    change_buttons({ "Я понимаю, шериф Грин.": hub_mainQuestGood12 })
  }
  currentFunction = hub_mainQuestGood913
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood10() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  Lip = true
  setCookie("cLip", Lip)
  change_image("img/revenge/pic_159.jpg")
  change_text(
    '<p>- Я ценю это, <span class="yes">шериф Грин</span>! Спасибо. – поблагодарили Вы <span class="yes">шерифа</span>.</p><p>Через <span class="yes">10 минут</span> в офис зашёл средних лет полицейский. Подтянутый <span class="yes">мужик в зелёной боевой броне</span> протянул Вам руку:</p><p>- <span class="yes">Лип</span>, - назвался он.</p><p>- Очень приятно. <span class="yes">' +
      heroName +
      '</span>, - представились Вы.</p><p>- Взаимно, - ответил Вам <span class="yes">Лип</span> и крепко пожал руку. - Я буду тебя ждать <span class="yes">на старой ферме</span> за городом. Когда-то она принадлежала моим родителям, теперь пустует уже много лет.</p><p>Затем он быстро объяснил Вам как добраться до загородного ранчо и, откланявшись, вышел из офиса <span class="yes">шерифа Грина</span>.</p><p>Вы тоже не стали затягивать, благо время было уже позднее.</p>'
  )
  change_buttons({ "Выйти из здания полиции": hub_center1 })
  currentFunction = hub_mainQuestGood10
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  raise_stimpacks(1)
  raise_grenade(1)
  change_image("img/revenge/pic_110.jpg")
  change_text(
    '<p>- Спасибо, <span class="yes">шериф Грин</span>, но не стоит рисковать людьми понапрасну, - решительно отказались Вы. – Да и один я быстрее и незаметнее. Ведь я не собираюсь воевать с ними, я лишь хочу убедиться, что эта змея в клетке не соврала нам.</p><p>- Ну, будь по-твоему, - кивнул <span class="yes">шериф</span>. – Но с пустыми руками ты всё равно не уйдёшь. Вот, держи. Это редкие штуки, постарайся сохранить, вдруг выручат.</p><p>С этими словами <span class="yes">Грин</span> протянул Вам <span class="yes">гранату</span> и <span class="yes">стимулятор</span>.</p><p>- Спасибо, ещё раз, <span class="yes">шериф</span>, - поблагодарили Вы и сделали под козырёк.</p>'
  )
  change_buttons({ "Покинуть офис шерифа": hub_center1 })
  currentFunction = hub_mainQuestGood11
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestGood12() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  raise_grenade(1)
  change_image("img/revenge/pic_110.jpg")
  change_text(
    '<p>– Но с пустыми руками ты всё равно не уйдёшь, - продолжил <span class="yes">шериф</span>. - Вот, держи. Это редкая штука, постарайся сохранить, вдруг выручит.</p><p>С этими словами <span class="yes">Грин</span> протянул Вам <span class="yes">гранату</span>.</p><p>- Спасибо большое, <span class="yes">шериф</span>, - поблагодарили Вы и сделали под козырёк.</p>'
  )
  change_buttons({ "Покинуть офис шерифа": hub_center1 })
  currentFunction = hub_mainQuestGood12
  setCookie("ccurrentFunction", currentFunction)
}

/* Злая линия */
function hub_bad_jail() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  removeItems()
  change_time(2)
  if (goToJail === true) {
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_173b.jpg")
    } else {
      change_image("img/revenge/pic_173c.jpg")
    }
    change_text(
      "<p>Вы пришли в сознание в холодной камере, лёжа на грязном матрасе. Вы снова в тюрьме, тратите время даром.</p>"
    )
    change_buttons({ "Отбыть свой срок в камере": hub_bad_jail6 })
  } else {
    goToJail = true
    setCookie("cgoToJail", goToJail)
    if ((time < 19) & (time > 6.5)) {
      change_image("img/revenge/pic_173.jpg")
    } else {
      change_image("img/revenge/pic_173a.jpg")
    }
    change_text(
      '<p>Вы пришли в сознание в холодной камере. Вы лежали на матраце, а слева от Вас стоял ещё какой-то <span class="yes">мужик</span> и орал нечто совсем уж непечатное уходящей <span class="yes">охране</span>.</p>'
    )
    change_buttons({
      "Полежать ещё некоторое время": hub_bad_jail1,
      "Подняться на ноги": hub_bad_jail2,
    })
  }
  currentFunction = hub_bad_jail
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_jail1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if ((time < 19) & (time > 6.5)) {
    change_image("img/revenge/pic_173.jpg")
  } else {
    change_image("img/revenge/pic_173a.jpg")
  }
  change_text(
    '<p>Вы полежали  некоторое время на грязном матраце, приводя мысли в ряд. Кажется не с того Вы начали знакомство с местным населением. Вероятно, местная <span class="yes">полиция</span> будет теперь к Вам не равнодушна.</p>'
  )
  change_buttons({ "Подняться на ноги": hub_bad_jail2 })
  currentFunction = hub_bad_jail1
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_jail2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_174.jpg")
  change_text(
    '<p>Пошатываясь и потирая ушибленные места, Вы поднялись на ноги. Ваш <span class="yes">сокамерник</span> обратил на Вас внимание:</p><p>- О, очнулся. Ну, ты накуралесил! Не часто у нас тут  такие драки с охраной затевают. Будем знакомы? – спросил он, протягивая Вам руку. – Я - <span class="yes">Чарли</span>. </p><p>Вы пожали протянутую руку и назвали своё имя.</p><p>- Ну, что, приятель, - деловито обрался к Вам <span class="yes">сокамерник</span>. – Теперь, когда мы знакомы, то можно и перейти к делу. Так? Я вижу ты не прочь пойти против системы. Я-то сам за кражу сел, но <span class="yes">сегодня</span> выхожу. А тебя, по всей вероятности, выпустят <span class="yes">завтра</span>. Так вот, приятель, ты как выйдешь, бери ноги в руки и дуй в <span class="yes">«Мальтийский Сокол»</span>. Там найдёшь парнишку  в чёрной коже и здоровым шипастым кастетом. Его зовут <span class="yes">Кейн</span>. Скажи что ты от <span class="yes">Чарли</span>. Думаю, мистер <span class="yes">Декер</span> найдёт место для такого крепкого парня, как ты. Не благодари!</p>'
  )
  change_buttons({
    "Спросить о том что происходит в городе": hub_bad_jail3,
    "Расспросить о мистере Декере": hub_bad_jail4,
    "Отбыть свой срок в камере": hub_bad_jail5,
  })
  currentFunction = hub_bad_jail2
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_jail3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_174.jpg")
  change_text(
    '<p>Вы решили поинтересоваться у <span class="yes">Чарли</span> о том, что происходит в <span class="yes">городе</span>. Услышав Ваш вопрос, <span class="yes">Чарли</span> хмыкнул:</p><p>- Ну, часть того, что происходит в <span class="yes">городе</span>, тебе уже известна. Копы борзеют, не дают честным людям вести бизнес. Мистер <span class="yes">Декер</span>, знаешь ли, это будущее для <span class="yes">Хаба</span>. Но <span class="yes">шериф Грин</span> со своими псами и <span class="yes">Городской Совет</span> всячески вставляют ему палки в колёса. Если ты пришёл в <span class="yes">город</span> для работы на караванщиков, то можешь сразу отправляться туда откуда явился – работы сейчас они тебе не предложат. Из-за усилившихся <span class="yes">атак рейдеров</span> на караваны торговля по многим направлениям практически остановлена. Такие дела.</p>'
  )
  change_buttons({
    "Расспросить о мистере Декере": hub_bad_jail4,
    "Отбыть свой срок в камере": hub_bad_jail5,
  })
  currentFunction = hub_bad_jail3
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_jail4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_174.jpg")
  change_text(
    '<p>- А кто такой мистер <span class="yes">Декер</span>? – спросили Вы у <span class="yes">Чарли</span>.</p><p><span class="yes">Чарли</span> приподнял брови:</p><p>- Ты наверное шутишь, приятель? Не знаешь кто такой мистер <span class="yes">Декер</span>. Ты видно издалека идёшь. Мистер <span class="yes">Декер</span> – честный бизнесмен, которому принадлежит бар-мотель <span class="yes">«Мальтийский Сокол»</span>. Он собирал свой бизнес по крупицам. Многие слюнями истекают и мечтают, чтобы мистер <span class="yes">Декер</span> всё потерял. Завидуют! Про него сочиняют небылицы, но ты не верь им друг.</p><p><span class="yes">Сокамерник</span> покачался из стороны в сторону, приподнимаясь на носках и заложив руки за спину, а затем пафосно продекламировал:</p><p>- Мистер <span class="yes">Декер</span> - это твой билет в жизнь, парень!</p>'
  )
  change_buttons({
    "Спросить о том что происходит в городе": hub_bad_jail3,
    "Отбыть свой срок в камере": hub_bad_jail5,
  })
  currentFunction = hub_bad_jail4
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_jail5() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  addItems()
  change_time(24)
  change_time(8)
  if (satiety > 1) {
    lower_satiety(1)
  }
  change_image("img/revenge/pic_175.jpg")
  change_text(
    '<p>Не смотря на то, что <span class="yes">Чарли</span> просил Вас не благодарить, Вы рассыпались в благодарностях своему новому знакомцу. Остаток дня Вы провели в дружеской беседе с <span class="yes">Чарли</span>.</p><p>Ближе к ночи <span class="yes">охранник</span> открыл дверь камеры и выволок из неё Вашего собрата по несчастью. Вы остались в одиночестве и в темноте. Вам ничего не оставалось делать, как лечь спать.</p><p>Наутро пинком ноги Вас разбудил <span class="yes">тюремщик</span>. Вы сразу узнали эту скотину. Это был один из тех, кто Вас вчера задерживал. Вы проследовали в кабинет <span class="yes">шерифа Грина</span>, где его <span class="yes">помощник Кенни</span> отдал Ваши вещи. Затем Вас немедленно выставили на улицу.</p>'
  )
  change_buttons({ "Оказаться на улице": hub_center1 })
  currentFunction = hub_bad_jail5
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_jail6() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(24)
  change_time(8)
  change_image("img/revenge/pic_175.jpg")
  change_text(
    '<p>Остаток дня Вы провели в мыслях тлене.</p><p>Ближе к ночи <span class="yes">охранник</span> погасил свет. Вам ничего не оставалось делать, как лечь спать.</p><p>Наутро пинком ноги Вас разбудил <span class="yes">тюремщик</span>. Вы сразу узнали эту скотину. Это был один из тех, кто Вас вчера задерживал. Вы проследовали в кабинет <span class="yes">шерифа Грина</span>, где его <span class="yes">помощник Кенни</span> отдал Ваши вещи. Затем Вас немедленно выставили на улицу.</p>'
  )
  change_buttons({ "Оказаться на улице": hub_center1 })
  currentFunction = hub_bad_jail6
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_Decker() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_91.jpg")
  change_text(
    '<p><span class="yes">Кейн</span> прищурил один глаз:</p><p>- А… да-да. Слышал уже о тебе. Ты двинул по рогам одному из <span class="yes">полицейских</span>. Ну, нервы у тебя либо железные, либо никчёмные раз ты затеял такую игру. Ну, что ж, давай спустимся вниз. Поговорим.</p><p><span class="yes">Кейн</span> открыл дверь и указал на  крутую лестницу, ведущую в подвальное помещение.</p><p>- Давай, двигай. – бросил Вам он.</p>'
  )
  change_buttons({ "Спуститься в подвал": hub_bad_Decker1 })
  currentFunction = hub_bad_Decker
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_Decker1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_172.jpg")
  change_text(
    '<p>Вы зашли в тёмное подвальное помещение, которое оказалось кабинетом хозяина заведения. Суровая охрана <span class="yes">Декера</span> следила за каждым Вашим движением.</p><p>Сам <span class="yes">Декер</span> внимательно изучал Вас и Вашу экипировку. Это был человек с довольно грубыми чертами лица и холодными колючими глазами.</p><p>- Заходи, заходи, – произнёс он, когда увидел Вас. – Наслышан о тебе. Наслышан. Вчера заходил ко мне <span class="yes">Чарли</span>, говорил о тебе. Но мне интересно всё же от тебя услышать. Кто ты такой и откуда ты?</p>'
  )
  change_buttons({
    "Сказать что Вы из Братства": hub_bad_Decker11,
    "Назвать выдуманное место проживания": hub_bad_Decker12,
  })
  currentFunction = hub_bad_Decker1
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_Decker11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  BOSknown2 = true
  setCookie("cBOSknown2", BOSknown2)
  change_image("img/revenge/pic_172.jpg")
  change_text(
    '<p>- Меня зовут <span class="yes">' +
      heroName +
      '</span> и я из  <span class="yes">Братства Стали</span>, - заявили Вы надменно выдержав паузу.</p><p><span class="yes">Декер</span> несколько удивлённо  присвистнул, но продолжил разговор спокойным безразличным тоном:</p><p>- <span class="yes">Братство Стали</span> говоришь? Ну, что ж, мы как порядочные джентльмены верим друг другу на слово. Слушай, на самом деле мне абсолютно наплевать кто ты и откуда. Можешь быть хоть президентом США. – <span class="yes">Декер</span> внезапно стал раздражительным. – Ты в город-то зачем прибыл? </p>'
  )
  change_buttons({
    "Я ищу информацию о Гадюках": hub_bad_Decker111,
    "Ищу работу": hub_bad_Decker112,
  })
  currentFunction = hub_bad_Decker11
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_Decker12() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_172.jpg")
  change_text(
    '<p>- Меня зовут <span class="yes">' +
      heroName +
      '</span> и я пришёл с <span class="yes">запада</span>, - уверенно заявили Вы</p><p>- <span class="yes">' +
      heroName +
      '</span>. Ну, конечно! Кто бы мог подумать, - неожиданно хохотнул <span class="yes">Декер</span>. - Не очень то много там жилых поселений. Твой дом возле <span class="yes">океана</span>?</p><p>Чёрт его знает чего вдруг он так решил всё детально выяснить о Вас, но видно какую-то цель главарь местных бандитов преследовал. Неизвестно сколько там вообще этих поселений на западе, поэтому Вы решили сказать что Вы не живёте возле воды.</p><p>- Нет, - протянули Вы. - Наше ранчо находится далеко от <span class="yes">океана</span>.</p><p>- Да, да, - к Вашему облегчению безразлично продолжил <span class="yes">Декер</span>. – На самом деле мне плевать кто ты и откуда. Просто соблюдаем этикет. Верно? Ну, а в <span class="yes">город</span> зачем явился?</p>'
  )
  change_buttons({
    "Я ищу информацию о Гадюках": hub_bad_Decker111,
    "Ищу работу": hub_bad_Decker112,
  })
  currentFunction = hub_bad_Decker12
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_Decker111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_172.jpg")
  change_text(
    '<p>Вы увидели удивление на лице <span class="yes">Декера</span>. Некоторое время он помолчал, но потом спросил у Вас:</p><p>- А зачем тебе <span class="yes">Гадюки</span>?</p><p>Вы решили не посвящать <span class="yes">Декера</span> в планы <span class="yes">Братства</span> относительно <span class="yes">Гадюк</span> и лишь ограничились несколькими банальными фразами.</p><p><span class="yes">Декер</span> ухмыльнулся:</p><p>- Юлишь, да? Ну, чёрт с тобой, романтик с большой дороги. Не хочешь говорить – не говори. Но у меня как раз работа есть для тебя. Связанная с… убийством. Выполнишь её и, скорее всего, твой интерес касательно <span class="yes">Гадюк</span> будет удовлетворён. Помимо всего прочего ты станешь <span class="yes">немного богаче</span>. Интересует?</p>'
  )
  change_buttons({
    "Молча кивнуть головой": hub_bad_Decker2,
    "Да, мистер Декер": hub_bad_Decker3,
    "С убийством? Так не пойдёт. Я на это не подпишусь. Счастливо!":
      hub_bad_Decker1111,
  })
  currentFunction = hub_bad_Decker111
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_Decker112() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_172.jpg")
  change_text(
    '<p><span class="yes">Декер</span> слегка улыбнулся:</p><p>- Прекрасно, прекрасно… Ты ведь за этим и пришел, не так ли? У меня есть работа для тебя. Она связана с… убийством. Деликатное дело, видишь ли. Интересует?</p>'
  )
  change_buttons({
    "Молча кивнуть головой": hub_bad_Decker2,
    "Да, мистер Декер": hub_bad_Decker3,
    "С убийством? Так не пойдёт. Я на это не подпишусь. Счастливо!":
      hub_bad_Decker1111,
  })
  currentFunction = hub_bad_Decker112
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_Decker1111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_172a.jpg")
  change_text(
    '<p>Легкая улыбка ушла с лица <span class="yes">Декера</span>. Его <span class="yes">охранники</span> заметно напряглись.</p><p>- Не может быть, чтобы <span class="yes">Чарли</span> подослал нам какого-то кретина безмозглого, - сказал <span class="yes">Декер</span> обращаясь к своей <span class="yes">охране</span>, а затем снова перевёл свой взгляд на Вас. – Это был риторический вопрос, дубина. Отказаться ты уже не можешь после того как побывал здесь. Точнее можешь, но тогда тебя вынесут вперёд ногами. Так что… ещё раз. Постараемся быть джентльменами. Есть <span class="yes">работа</span>. Интересует?</p>'
  )
  change_buttons({
    'Мистер Декер, Вы не расслышали. Я сказал "конечно, интересует"!':
      hub_bad_Decker1113,
    "Похоже выбора у меня нет. Я согласен.": hub_bad_Decker1112,
    "И всё же, я вынужден отказаться от Вашего предложения, мистер Декер.":
      hub_bad_Decker1114,
  })
  currentFunction = hub_bad_Decker1111
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_Decker1112() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_172.jpg")
  change_text(
    '<p>Лицо <span class="yes">Декера</span> снова приняло расслабленное выражение.</p><p>- Сразу бы так, - он сложил пальцы домиком. – Спишем неловкость ситуации, на волнение. Думам, мы  можем вернуться к <span class="yes">делу</span>.</p><p>Вы согласно закивали. Убедившись в Вашем согласии <span class="yes">Декер</span> продолжил:</p><p>- В <span class="yes">Хабе</span> есть один продажный коп. <span class="yes">Донни</span>. Старая гвардия. Он стучит <span class="yes">Гадюкам</span>. Сливаем им маршруты передвижения караванщиков, содержимое и количество груза и т.д. Этот <span class="yes">коп</span> владеет кое-какой информацией, касающейся моих теневых сделок. Мне нужно, чтобы он замолчал. Навсегда. Плачу <span class="yes">1000 крышек</span>. <span class="yes">350</span> аванс сейчас. Запомни сделать это нужно тихо. Если нашумишь, даже не думай возвращаться сюда.</p>'
  )
  change_buttons({
    "Где мне найти этого копа?": hub_bad_Decker4,
    "1000 крышек – мало за выполнение тихой работы": hub_bad_Decker5,
  })
  currentFunction = hub_bad_Decker1112
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_Decker1113() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_172a.jpg")
  change_text(
    '<p><span class="yes">Декер</span> уже не был настроен благодушно, поэтому резко отрезал:</p><p>- Я всё ещё хорошо слышу. А ты, кажется, ещё не понял, с кем разговариваешь. Ты либо совсем не знал куда шёл, либо совсем идиот. Будем считать, что не знал. Поэтому забудем об этом небольшом инциденте и вернёмся к <span class="yes">делу</span>, раз уж ты согласен.</p><p>Вы согласно закивали. Убедившись в Вашем согласии <span class="yes">Декер</span> продолжил:</p><p>- В <span class="yes">Хабе</span> есть один продажный коп. <span class="yes">Донни</span>. Старая гвардия. Он стучит <span class="yes">Гадюкам</span>. Сливаем им маршруты передвижения караванщиков, содержимое и количество груза и т.д. Этот <span class="yes">коп</span> владеет кое-какой информацией, касающейся моих теневых сделок. Мне нужно, чтобы он замолчал. Навсегда. Плачу <span class="yes">1000 крышек</span>. <span class="yes">350</span> аванс сейчас. Запомни сделать это нужно тихо. Если нашумишь, даже не думай возвращаться сюда.</p>'
  )
  change_buttons({
    "Где мне найти этого копа?": hub_bad_Decker4,
    "1000 крышек – мало за выполнение тихой работы": hub_bad_Decker5,
  })
  currentFunction = hub_bad_Decker1113
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_Decker2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_172a.jpg")
  change_text(
    '<p><span class="yes">Декер</span> недовольно нахмурился. Он некоторое время смотрел на Вас, а затем продолжил:</p><p>- В <span class="yes">Хабе</span> есть один продажный коп. <span class="yes">Донни</span>. Старая гвардия. Он стучит <span class="yes">Гадюкам</span>. Сливаем им маршруты передвижения караванщиков, содержимое и количество груза и т.д. Этот <span class="yes">коп</span> владеет кое-какой информацией, касающейся моих теневых сделок. Мне нужно, чтобы он замолчал. Навсегда. Плачу <span class="yes">1000 крышек</span>. <span class="yes">350</span> аванс сейчас. Запомни сделать это нужно тихо. Если нашумишь, даже не думай возвращаться сюда.</p>'
  )
  change_buttons({
    "Где мне найти этого копа?": hub_bad_Decker4,
    "1000 крышек – мало за выполнение тихой работы": hub_bad_Decker5,
  })
  currentFunction = hub_bad_Decker2
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_Decker3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  deckerGlad = true
  setCookie("cdeckerGlad", deckerGlad)
  change_image("img/revenge/pic_172.jpg")
  change_text(
    '<p><span class="yes">Декер</span> кивнул. На его лице появилась довольная улыбка</p><p>- В <span class="yes">Хабе</span> есть один продажный коп. <span class="yes">Донни</span>. Старая гвардия. Он стучит <span class="yes">Гадюкам</span>. Сливаем им маршруты передвижения караванщиков, содержимое и количество груза и т.д. Этот <span class="yes">коп</span> владеет кое-какой информацией, касающейся моих теневых сделок. Мне нужно, чтобы он замолчал. Навсегда. Плачу <span class="yes">1000 крышек</span>. <span class="yes">350</span> аванс сейчас. Запомни сделать это нужно тихо. Если нашумишь, даже не думай возвращаться сюда.</p>'
  )
  change_buttons({
    "Где мне найти этого копа?": hub_bad_Decker4,
    "1000 крышек – мало за выполнение тихой работы": hub_bad_Decker5,
  })
  currentFunction = hub_bad_Decker3
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_Decker4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  getDeckerQuest = true
  setCookie("cgetDeckerQuest", getDeckerQuest)
  change_image("img/revenge/pic_172.jpg")
  change_text(
    '<p><span class="yes">Декер</span> указал Вам на <span class="yes">парня с кастетом</span> за Вашей спиной:</p><p>- Это мой помощник – <span class="yes">Кейн</span>. Вечером с <span class="yes">19:00</span> до <span class="yes">20:00</span> подойди к нему и он тебе скажет место и время, куда тебе нужно будет явиться. <span class="yes">Сними номер</span> в мотеле и подожди в нём, либо пошляйся по городу. Но больше не привлекай к себе внимание.</p>'
  )
  if (deckerBonus === false) {
    change_buttons({
      "Всё понял. Я встречусь с Кейном вечером.": hub_bad_Decker6,
      "1000 крышек – мало за выполнение тихой работы.": hub_bad_Decker5,
    })
  } else {
    change_buttons({
      "Всё понял. Я встречусь с Кейном вечером.": hub_bad_Decker6,
    })
  }
  currentFunction = hub_bad_Decker4
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_Decker5() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  deckerBonus = true
  setCookie("cdeckerBonus", deckerBonus)
  if (deckerGlad === true) {
    change_image("img/revenge/pic_172.jpg")
    change_text(
      '<p><span class="yes">Декер</span> подмигнул Вам:</p><p>- Ну, что же. Ты был учтив, я думаю поощрить это можно. К авансу ты получишь ещё <span class="yes">250 крышек</span>. Но больше, ни крышки сверху. Эта слишком простая работа для такой серьёзной суммы.</p>'
    )
  } else {
    change_image("img/revenge/pic_172a.jpg")
    change_text(
      '<p>- Вполне достаточно, - отрезал <span class="yes">Декер</span>. – Особенно для  человека твоих манер. Больше не возвращайся к этой теме. </p>'
    )
  }
  if (getDeckerQuest === true) {
    change_buttons({
      "Всё понял. Я встречусь с Кейном вечером.": hub_bad_Decker6,
    })
  } else {
    change_buttons({ "Где мне найти этого копа?": hub_bad_Decker4 })
  }
  currentFunction = hub_bad_Decker5
  setCookie("ccurrentFunction", currentFunction)
}
function hub_bad_Decker6() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_172.jpg")
  if ((deckerGlad === true) & (deckerBonus === true)) {
    raise_caps(600)
  } else {
    raise_caps(350)
  }
  change_text(
    '<p>- И запомни, если моё имя всплывёт, - грозно предупредил Вас <span class="yes">Декер</span>, – ты труп, дружок!</p><p>Вы молча кивнули. <span class="yes">Декер</span> усмехнулся и бросил Вам мешок с <span class="yes">крышками</span>. Вы демонстративно не стали их считать и гордо направились к выходу. <span class="yes">Кейн</span> следовал за Вами по пятам.</p><p>Выбравшись из подвала, он бросил Вам лишь одну фразу:</p><p>- Я жду тебя ровно в <span class="yes">19:00</span>. Как спустятся <span class="yes">сумерки</span>.</p>'
  )
  change_buttons({ "Отойти от Кейна": hub_MalteseFalcon })
  currentFunction = hub_bad_Decker6
  setCookie("ccurrentFunction", currentFunction)
}

/* После выполнения заказного убийства */
function hub_mainQuestBad10() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  deckerDone = true
  setCookie("cdeckerDone", deckerDone)
  change_image("img/revenge/pic_172.jpg")
  raise_caps(650)
  change_text(
    '<p><span class="yes">Хозяин</span> заведения сидел за своим столом в хорошем настроении и предложил Вам сесть напротив него.</p><p>- Ну, что ж, странник! Ты сделал дело чисто, как мы и договаривались, - сказал <span class="yes">Декер</span>, бросая на стол перед Вами мешок с <span class="yes">крышками</span>. - Вот твои деньги. Теперь уходи.</p>'
  )
  change_buttons({
    "Только один вопрос, мистер Декер!": hub_mainQuestBad11,
    "Поблагодарить и уйти": hub_MalteseFalcon,
  })
  currentFunction = hub_mainQuestBad10
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_172a.jpg")
  change_text(
    '<p>Улыбка <span class="yes">Декера</span> сползла вниз и его лицо стало мрачным.</p><p>- Ты омрачаешь мне праздник, - процедил сквозь зубы он. - Задавай свой вопрос и проваливай, пока я не вышел из себя. А то, знаешь ли… деньги покойникам не нужны.</p><p><span class="yes">Охрана</span> заметно напряглась. Тут шутить стоило навряд ли.</p>'
  )
  change_buttons({
    "Как Вы узнали, что задание выполнено?": hub_mainQuestBad111,
    "Я бы хотел больше денег за молчание.": hub_mainQuestBad112,
    "Что Вас связывает с Гадюками?": hub_mainQuestBad113,
  })
  currentFunction = hub_mainQuestBad11
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_172a.jpg")
  change_text(
    '<p>- Неужели ты думаешь, осёл, - <span class="yes">Декер</span> скрестил на груди руки. - Что я не отправил никого следить за тобой? Твой знакомый сокамерник <span class="yes">Чарли</span> шёл за тобой по пятам всю дорогу, а ты и не заметил. Хоть и работа сделана, но наследи ты порядочно. Тебя видели десятки людей. Скоро труп будет найден и все ниточки приведут к тебе. Я бы на твоём месте уходил из <span class="yes">города</span>, пока есть возможность.</p>'
  )
  change_buttons({ "Поблагодарить и уйти": hub_MalteseFalcon })
  currentFunction = hub_mainQuestBad111
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad112() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_172a.jpg")
  change_text(
    '<p>Лицо <span class="yes">Декера</span> приняло насмешливое и вместе с тем злобное выражение, глаза прищурились.</p><p>- Ты ещё более туп, чем я думал, - произнёс он. - После того, как я заплатил тебе за плёвое дело солидную сумму, ты имеешь наглость меня шантажировать. Жизнь тебя ничему не учит.</p><p><span class="yes">Декера</span> сделал знак своим охранникам и Вы услышали треск электрической дубинки. Резкий удар в затылок и земля ушла из под Ваших ног.</p>'
  )
  change_buttons({ "Потерять сознание": hub_mainQuestBad12 })
  currentFunction = hub_mainQuestBad112
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad12() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (killDonWithKnife === true) {
    change_image("img/revenge/pic_209.jpg")
  } else {
    change_image("img/revenge/pic_209a.jpg")
  }
  change_text(
    '<p>Вы очнулись в луже крови в уже знакомом Вам помещении старого <span class="yes">склада</span>. Рядом с Вами лежал труп полицейского <span class="yes">Дона</span>. Его кровь пропитала Вашу одежду насквозь.</p><p>Пинок поддых отозвался резкой болью по всему телу.</p><p>- Что, очнулся, подонок, - Вы услышали голос <span class="yes">шерифа Грина</span>. - С самого начала, как я увидел твою рожу, понял, что от тебя будут сплошные неприятности. Лишь только честь офицера <span class="yes">полиции</span> не даёт мне раздавить тебя как поганого таракана прямо здесь и сейчас. Но не волнуйся, твоя песенка уже спета.</p><p>С этими словами <span class="yes">Грин</span> с остальными <span class="yes">полицейскими</span> схватили Вас и потащили в <span class="yes">отдел</span>.</p>'
  )
  change_buttons({ "Вы попались!": hub_mainQuestBad13 })
  currentFunction = hub_mainQuestBad12
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad113() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_172a.jpg")
  change_text(
    '<p>- Ничего, - отрезал <span class="yes">Декер</span>. - Я просто в курсе всего, что происходит в моём <span class="yes">городе</span>! Если болтливый и продажный <span class="yes">коп</span> сливает <span class="yes">связному рейдеров</span>, который часто приходит в <span class="yes">Хаб</span>, все маршруты торговых караванов, то это уже проблема самих караванов и этого болвана — <span class="yes">Грина</span>. Теперь проваливай, больше тебе тут нечего делать.</p>'
  )
  change_buttons({ "Поблагодарить и уйти": hub_MalteseFalcon })
  currentFunction = hub_mainQuestBad113
  setCookie("ccurrentFunction", currentFunction)
}

/* Изменённые локаций при прохождении злой ветки */
function hub_MalteseFalconBad() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_88a.jpg")
  change_text(
    '<p>Вы в баре <span class="yes">Мальтийский Сокол</span>. Тут было сильно накурено, люди играли в рулетку и игральные автоматы. Шум и гам. В углу возле двери в подсобку стоял <span class="yes">Кейн</span>. Он играл с шипованным кастетом, перекидывая его из руки в руку. <span class="yes">Барменша</span> деловито протирала стаканы.</p><p><span class="yes">Дон</span> - коп, которого "заказал" <span class="yes">Декер</span>, отправился на тайную встречу со <span class="yes">связным рейдеров</span>. Вам нужно срочно бежать к <span class="yes">складу</span> в <span class="yes">Старом Городе</span>.</p>'
  )
  change_buttons({ "Выйти из бара": hub_center2 })
  currentFunction = hub_MalteseFalconBad
  setCookie("ccurrentFunction", currentFunction)
}
function hub_downtownBad() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_170.jpg")
  change_text(
    '<p>У Вас сейчас нет времени для праздного шатания по городу!</p><p>Если Вы упустите <span class="yes">связного рейдеров</span>, который встречается с продажным полицейским <span class="yes">Доном</span> на <span class="yes">складе</span> в <span class="yes">Старом Городе</span>, то Ваша <span class="yes">миссия</span> по поиску главной <span class="yes">базы Гадюк</span> будет провалена.</p>'
  )
  change_buttons({ "Пойти в другое место": hub_center2 })
  currentFunction = hub_downtownBad
  setCookie("ccurrentFunction", currentFunction)
}
function oldTownBad() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (inBadOldTown === false) {
    inBadOldTown = true
    setCookie("cinBadOldTown", inBadOldTown)
    change_image("img/revenge/pic_132.jpg")
    change_text(
      '<p>Когда Вы вошли в район Старого Города, то увидели <span class="yes">Дона</span>. Не сбавляя шаг, он удалялся в глубь района. Вы аккуратно следовали за ним, стараясь держать приличное расстояние. Так что <span class="yes">старик</span> никак не мог Вас заподозрить в слежке. Зато Вы прекрасно видели его издалека благодаря его модным красным штанам.</p><p>«Это ж надо быть таким идиотом», - подумали Вы. – «Бояться слежки и при этом светиться за милю!»</p><p>В конце концов, <span class="yes">Дон</span> привёл Вас к старому зданию <span class="yes">заброшенного склада</span> в <span class="yes">Старом Городе</span>. Оглянувшись ещё разок по сторонам, он скрылся за дверью. Какое-то внутреннее чутьё заставило Вас остановиться на значительном расстоянии от склада и понаблюдать ещё некоторое время за зданием.</p><p>Буквально через две минуты с противоположной стороны улицы показалась высокая фигура в синих джинсах и черной кожаной куртке. <span class="yes">Парень с длинными волосами</span>, лет двадцати, шёл быстрым шагом к входу <span class="yes">старого склада</span>. Не оглядываясь, он вошёл в здание склада и хлопнул дверью. «Ну, понеслась…» - подумали Вы.</p>'
    )
  } else {
    inBadOldTownSecond = true
    setCookie("cinBadOldTownSecond", inBadOldTownSecond)
    change_image("img/revenge/pic_135.jpg")
    change_text(
      '<p>Вы покинули <span class="yes">Центр</span> и, стараясь не привлекать к себе лишнего внимания, добрались до склада в <span class="yes">Старом Городе</span>.</p><p>Остановившись метрах в тридцати от входа Вы внимательно стали наблюдать за улицей. Но кроме редких оборванцев, шатающихся без дела, Вы никого не увидели.</p><p>Приблизившись к зданию <span class="yes">склада</span>, Вы аккуратно дёрнули за ручку двери.</p><p>Ага… Дверь оказалась запертой изнутри. Ожидаемо. </p>'
    )
  }
  change_buttons({
    "Вернуться в Центр Города": hub_center2,
    "Проникнуть  в здание склада": hub_mainQuestBad,
  })
  currentFunction = oldTownBad
  setCookie("ccurrentFunction", currentFunction)
}
function crimsonCaravanBad() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_93a.jpg")
  change_text(
    '<p>Вы дёрнули за ручку двери офиса <span class="yes">"Красный Караван"</span>, однако дверь оказалась заперта. Красноречивая табличка "ЗАКРЫТО" в окошке слева от двери подтверждала этот факт. Ниже был указан график работы: с <span class="yes">9:00</span> до <span class="yes">19:00</span>.</p><p>Ничего не попишешь, придётся ждать открытия до <span class="yes">завтра</span>.</p>'
  )
  change_buttons({ "Отойти от двери офиса": hub_center2 })
  currentFunction = crimsonCaravanBad
  setCookie("ccurrentFunction", currentFunction)
}
function farGoBad() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_94a.jpg")
  change_text(
    '<p>С офисом компании <span class="yes">«Дальнобойщики»</span> дело обстояло не просто, а очень просто: дверь была закрыта. На стене висел плакат: «Работы НЕТ!!!».</p><p>Емко и доступно.</p>'
  )
  change_buttons({ "Отправиться в другое место": hub_center2 })
  currentFunction = farGoBad
  setCookie("ccurrentFunction", currentFunction)
}
function waterMerchantsBad() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_96a.jpg")
  change_text(
    '<p>Вы дёрнули за ручку двери офиса <span class="yes">Торговцев Водой</span>, однако дверь оказалась заперта. Красноречивая табличка "ЗАКРЫТО" в окошке справа от двери подтверждала этот факт. Ниже был указан график работы: с <span class="yes">9:00</span> до <span class="yes">19:00</span>.</p><p>Ничего не попишешь, придётся ждать открытия до <span class="yes">завтра</span>.</p>'
  )
  change_buttons({ "Отправиться в другое место": hub_center2 })
  currentFunction = waterMerchantsBad
  setCookie("ccurrentFunction", currentFunction)
}
function iguanaBobBad() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_95a.jpg")
  change_text(
    '<p>Вы подошли к <span class="yes">Шашлычной Боба</span>. Однако самого <span class="yes">Боба</span> нигде не видно. Прилавок закрыт на замок.</p><p>Приглядевшись, Вы увидели записку, приклеенную к прилавку: <span class="yes">"Закрыто до рассвета"</span>.</p>'
  )
  change_buttons({ "Отправиться в другое место": hub_center2 })
  currentFunction = iguanaBobBad
  setCookie("ccurrentFunction", currentFunction)
}

/* Разборка на складе */
function hub_mainQuestBad() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_176.jpg")
  change_text(
    '<p>Достав из кармана ключ, который дал Вам <span class="yes">Кейн</span>, Вы бесшумно открыли дверь и проскользнули внутрь помещения.</p><p>Вы оказались в заброшенном здании <span class="yes">склада</span> какой-то довоенной компании. Склад, как склад. Десятки таких же заброшек есть на каждой улице этого <span class="yes">города</span>.</p><p>Из дальней комнаты доносятся <span class="yes">голоса</span>. Время действовать.</p>'
  )
  if ((getPistol === false) & (getHubSilencer === false)) {
    change_buttons({
      "Подкрасться к двери и послушать о чём говорят": hub_mainQuestBad1,
      "Войти и застрелить Дона из дробовика": hub_mainQuestBad2,
      "Броситься на Дона с ножом": hub_mainQuestBad3,
    })
  } else if ((getPistol === false) & (getHubSilencer === true)) {
    change_buttons({
      "Подкрасться к двери и послушать о чём говорят": hub_mainQuestBad1,
      "Войти и застрелить Дона из дробовика": hub_mainQuestBad2,
      "Броситься на Дона с ножом": hub_mainQuestBad3,
    })
  } else if ((getPistol === true) & (getHubSilencer === false)) {
    change_buttons({
      "Подкрасться к двери и послушать о чём говорят": hub_mainQuestBad1,
      "Войти и застрелить Дона из дробовика": hub_mainQuestBad2,
      "Войти и застрелить Дона из пистолета": hub_mainQuestBad4,
      "Броситься на Дона с ножом": hub_mainQuestBad3,
    })
  } else if ((getPistol === true) & (getHubSilencer === true)) {
    change_buttons({
      "Подкрасться к двери и послушать о чём говорят": hub_mainQuestBad1,
      "Войти и застрелить Дона из дробовика": hub_mainQuestBad2,
      "Войти и застрелить Дона из пистолета с глушителем": hub_mainQuestBad5,
      "Броситься на Дона с ножом": hub_mainQuestBad3,
    })
  }
  currentFunction = hub_mainQuestBad
  setCookie("ccurrentFunction", currentFunction)
}

/* Убийство Дона */
function hub_mainQuestBad1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_177.jpg")
  change_text(
    '<p>Вы тихо подошли к приоткрытой двери и прислушались…</p><p>Сначала было ничего не понятно, однако потом стало ясно, что находящиеся внутри, выясняют отношения.</p><p>- …я больше не намерен сливать вам своих, - сказал <span class="yes">один</span> из них. – С меня хватит! Не нужно мне никаких денег. Я не могу нормально спать.</p><p>- Если ты не продолжишь предоставлять нам информацию о караванах и дальше, - ответил злобно <span class="yes">другой</span>. – То заснёшь навсегда. Ты помнишь, что у меня есть ма-а-а-аленькое доказательство твоих больши-и-и-их делишек? Не выпендривайся. Тебя так и так ждёт виселица.</p><p>Постепенно <span class="yes">первый</span> начал переходить на крик. Того и гляди между ними завяжется перестрелка, а это в Ваши планы не входило.</p>'
  )
  if ((getPistol === false) & (getHubSilencer === false)) {
    change_buttons({
      "Войти и застрелить Дона из дробовика": hub_mainQuestBad2,
      "Броситься на Дона с ножом": hub_mainQuestBad3,
    })
  } else if ((getPistol === false) & (getHubSilencer === true)) {
    change_buttons({
      "Войти и застрелить Дона из дробовика": hub_mainQuestBad2,
      "Броситься на Дона с ножом": hub_mainQuestBad3,
    })
  } else if ((getPistol === true) & (getHubSilencer === false)) {
    change_buttons({
      "Войти и застрелить Дона из дробовика": hub_mainQuestBad2,
      "Войти и застрелить Дона из пистолета": hub_mainQuestBad4,
      "Броситься на Дона с ножом": hub_mainQuestBad3,
    })
  } else if ((getPistol === true) & (getHubSilencer === true)) {
    change_buttons({
      "Войти и застрелить Дона из дробовика": hub_mainQuestBad2,
      "Войти и застрелить Дона из пистолета с глушителем": hub_mainQuestBad5,
      "Броситься на Дона с ножом": hub_mainQuestBad3,
    })
  }
  currentFunction = hub_mainQuestBad1
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 1
  loudMurder = true
  setCookie("cloudMurder", loudMurder)
  change_shotgun()
  change_image("img/revenge/pic_178.jpg")
  change_text(
    '<p>Вы вошли в комнату и <span class="yes">спорящие</span> резко обернулись на шорох. Слева от Вас стоял молодой <span class="yes">парень лет двадцати</span>, одетый в синие джинсы и чёрную кожаную куртку. Его длинные волосы были распущены и пряди рассыпались по плечам.</p><p>Справа стоял <span class="yes">пожилой мужчина</span> в ярких <span class="yes">красных штанах</span>. Морщинистое лицо <span class="yes">старика</span> было багровым, в тон его стильным штанам. Видимо, разговор с волосатиком давался старику не просто. Вы сразу поняли, что это и была Ваша <span class="yes">цель</span>.</p><p>Вы выстрелили в него из своего <span class="yes">дробовика</span>. <span class="yes">Старик</span> упал спиной на стену склада и медленно стал сползать по ней вниз. Выстрел из и без того не тихого ружья, был усилен железным коробом склада, плюс старый полицейский, отлетевший в одну из стен – всё вместе это произвело дьявольский грохот, который, несомненно, был слышен на всю округу.</p><p>Весь ужас этой ситуации дополнялся тем, что <span class="yes">Дон</span> был всё ещё жив и смотрел на Вас широко раскрытыми глазами.</p><p><span class="yes">Волосатый парень</span> тоже смотрел на Вас с интересом, ожидая, что будет дальше, хотя и явно раздражённый грохотом, который Вы устроили.</p>'
  )
  if ((getPistol === false) & (getHubSilencer === false)) {
    change_buttons({
      "Добить Дона из дробовика": hub_mainQuestBad21,
      "Прикончить Дона ножом": hub_mainQuestBad22,
      "Молча смотреть на раненого старика": hub_mainQuestBad23,
    })
  } else if ((getPistol === false) & (getHubSilencer === true)) {
    change_buttons({
      "Добить Дона из дробовика": hub_mainQuestBad21,
      "Прикончить Дона ножом": hub_mainQuestBad22,
      "Молча смотреть на раненого старика": hub_mainQuestBad23,
    })
  } else if ((getPistol === true) & (getHubSilencer === false)) {
    change_buttons({
      "Добить Дона из дробовика": hub_mainQuestBad21,
      "Добить Дона из пистолета": hub_mainQuestBad24,
      "Прикончить Дона ножом": hub_mainQuestBad22,
      "Молча смотреть на раненого старика": hub_mainQuestBad23,
    })
  } else if ((getPistol === true) & (getHubSilencer === true)) {
    change_buttons({
      "Добить Дона из дробовика": hub_mainQuestBad21,
      "Добить Дона из пистолета с глушителем": hub_mainQuestBad25,
      "Прикончить Дона ножом": hub_mainQuestBad22,
      "Молча смотреть на раненого старика": hub_mainQuestBad23,
    })
  }
  currentFunction = hub_mainQuestBad2
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_179.jpg")
  change_text(
    '<p>Вы вытащили из чехла <span class="yes">нож</span> и вошли в комнату. Слева от Вас стоял молодой <span class="yes">парень лет двадцати</span>, одетый в синие джинсы и чёрную кожаную куртку. Его длинные волосы были распущены и пряди рассыпались по плечам.</p><p>Справа стоял <span class="yes">пожилой мужчина</span> в ярких <span class="yes">красных штанах</span>. Морщинистое лицо <span class="yes">старика</span>  было багровым, в тон его стильным штанам. Видимо, разговор с волосатиком давался старику не просто. Вы сразу поняли, что это и была Ваша <span class="yes">цель</span>.</p><p>Вы бросились на <span class="yes">Дона</span> с <span class="yes">ножом</span>, целясь в шею, однако тот в последний момент услышал шорох и увернулся от удара. Перехватив Вашу руку, опытный <span class="yes">полицейский</span> подсёк Вашу ногу и вместе вы упали на пол. <span class="yes">Дон</span> пытался вытащить <span class="yes">нож</span> из Вашей руки, Вы же в свою очередь пытались уколоть им <span class="yes">старика</span>. Тот оказался сильным и проворным, не смотря на возраст, и никак не желал сдаваться. <span class="yes">Волосатый парень</span> с интересом наблюдал за исходом схватки.</p>'
  )
  change_buttons({
    "Ударить Дона кулаком в ухо": hub_mainQuestBad31,
    "Ударить Дона коленом в пах": hub_mainQuestBad32,
    "Попытаться оторвать его руку от своей, в которой нож": hub_mainQuestBad33,
    "Воткнуть пальцы в глаза Дону": hub_mainQuestBad34,
  })
  currentFunction = hub_mainQuestBad3
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  loudMurder = true
  setCookie("cloudMurder", loudMurder)
  pistol_ammo -= 2
  change_gun()
  change_image("img/revenge/pic_180.jpg")
  change_text(
    '<p>Вы вошли в комнату и <span class="yes">спорящие</span> резко обернулись на шорох. Слева от Вас стоял молодой <span class="yes">парень лет двадцати</span>, одетый в синие джинсы и чёрную кожаную куртку. Его длинные волосы были распущены и пряди рассыпались по плечам.</p><p>Справа стоял <span class="yes">пожилой мужчина</span> в ярких <span class="yes">красных штанах</span>. Морщинистое лицо <span class="yes">старика</span>  было багровым, в тон его стильным штанам. Видимо, разговор с волосатиком давался старику не просто. Вы сразу поняли, что это и была Ваша <span class="yes">цель</span>.</p><p>Вы дважды выстрелили в него из своего пистолета. <span class="yes">Старик</span> упал спиной на стену склада и медленно стал сползать по ней вниз. Хлопки выстрелов из пистолета без глушителя были усилены железным коробом склада, к тому же старик, отлетевший в одну из стен – всё вместе это произвело дьявольский грохот, который, несомненно, был слышен на всю округу.</p><p>Весь ужас этой ситуации дополнялся тем, что <span class="yes">Дон</span> был всё ещё жив и смотрел на Вас широко раскрытыми глазами.</p><p><span class="yes">Волосатый парень</span> тоже смотрел на Вас с интересом, ожидая, что будет дальше, хотя и явно раздражённый грохотом, который Вы устроили.</p>'
  )
  if ((getPistol === false) & (getHubSilencer === false)) {
    change_buttons({
      "Добить Дона из дробовика": hub_mainQuestBad21,
      "Прикончить Дона ножом": hub_mainQuestBad22,
      "Молча смотреть на раненого старика": hub_mainQuestBad23,
    })
  } else if ((getPistol === false) & (getHubSilencer === true)) {
    change_buttons({
      "Добить Дона из дробовика": hub_mainQuestBad21,
      "Прикончить Дона ножом": hub_mainQuestBad22,
      "Молча смотреть на раненого старика": hub_mainQuestBad23,
    })
  } else if ((getPistol === true) & (getHubSilencer === false)) {
    change_buttons({
      "Добить Дона из дробовика": hub_mainQuestBad21,
      "Добить Дона из пистолета": hub_mainQuestBad24,
      "Прикончить Дона ножом": hub_mainQuestBad22,
      "Молча смотреть на раненого старика": hub_mainQuestBad23,
    })
  } else if ((getPistol === true) & (getHubSilencer === true)) {
    change_buttons({
      "Добить Дона из дробовика": hub_mainQuestBad21,
      "Добить Дона из пистолета с глушителем": hub_mainQuestBad25,
      "Прикончить Дона ножом": hub_mainQuestBad22,
      "Молча смотреть на раненого старика": hub_mainQuestBad23,
    })
  }
  currentFunction = hub_mainQuestBad4
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad5() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 3
  change_gun()
  change_image("img/revenge/pic_181.jpg")
  change_text(
    '<p>Вы тихо вошли в комнату, <span class="yes">спорящие</span> Вас не заметили. Слева от Вас стоял молодой <span class="yes">парень лет двадцати</span>, одетый в синие джинсы и чёрную кожаную куртку. Его длинные волосы были распущены и пряди рассыпались по плечам.</p><p>Справа стоял <span class="yes">пожилой мужчина</span> в ярких <span class="yes">красных штанах</span>. Морщинистое лицо <span class="yes">старика</span> было багровым, в тон его стильным штанам. Видимо, разговор с волосатиком давался ему не просто. Вы сразу поняли, что это и была Ваша <span class="yes">цель</span>.</p><p>Вы несколько раз выстрелили в него из своего пистолета с глушителем. <span class="yes">Дон</span> упал на пол лицом вниз.</p><p><span class="yes">Волосатый парень</span> оторопел от неожиданности, однако, быстро прейдя в себя, стал смотреть на Вас с интересом, ожидая, что же будет дальше.</p>'
  )
  change_buttons({
    "Сделать контрольный выстрел в голову": hub_mainQuestBad51,
    "Проверить, жив ли Дон": hub_mainQuestBad52,
    "Молча смотреть на парня": hub_mainQuestBad53,
  })
  currentFunction = hub_mainQuestBad5
  setCookie("ccurrentFunction", currentFunction)
}

/* Бесшумный вариант */
function hub_mainQuestBad31() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  knifeFight = true
  setCookie("cknifeFight", knifeFight)
  change_image("img/revenge/pic_183.jpg")
  change_text(
    '<p>Свободной рукой изо всех сил Вы двинули ему в ухо. Однако, <span class="yes">здоровяк</span> почти не обратил на это внимание. Зато он, воспользовавшись моментом, развернул острие <span class="yes">ножа</span> в Ваше направление. Теперь только от Ваших действий зависит Ваша <span class="yes">жизнь…</span> </p>'
  )
  change_buttons({
    "Ударить Дона коленом в пах": hub_mainQuestBad32,
    "Попытаться оторвать его руку от своей, в которой нож": hub_mainQuestBad33,
    "Воткнуть пальцы в глаза Дону": hub_mainQuestBad34,
  })
  currentFunction = hub_mainQuestBad31
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad32() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (knifeFight === false) {
    change_image("img/revenge/pic_182.jpg")
    change_text(
      '<p>Со всей силы Вы ударили <span class="yes">старика</span> в пах. Тот взвыл от боли и ослабил хватку, но, превозмогая себя, продолжал борьбу.</p>'
    )
    change_buttons({
      "Ударить Дона кулаком в ухо": hub_mainQuestBad31,
      "Попытаться оторвать его руку от своей, в которой нож":
        hub_mainQuestBad33,
      "Воткнуть пальцы в глаза Дону": hub_mainQuestBad34,
    })
  } else {
    death()
    change_image("img/revenge/pic_184.jpg")
    change_text(
      '<p><span class="yes">Дон</span> лежал на Вас сверху, придавив Ваше тело своим корпусом. Однако, Ваши ноги были свободными. Вы попытались ударить его что есть мочи в пах, но совершили фатальную ошибку: уже перехвативший инициативу <span class="yes">Дон</span>, перехватил <span class="yes">нож</span> и всадил его по самую рукоять Вам в грудь.</p><p>Последнее, что Вы видели это то, как <span class="yes">патлатый рейдер</span> подошел к <span class="yes">Дону</span> сзади и перерезал ему горло. <span class="yes">Старик</span> упал на Вас, заливая Ваше тело своей кровью.</p>'
    )
    change_buttons({ "Игра окончена!": restart })
  }
  currentFunction = hub_mainQuestBad32
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad34() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  killDonWithKnife = true
  killDon = true
  setCookie("ckillDonWithKnife", killDonWithKnife)
  setCookie("ckillDon", killDon)
  change_image("img/revenge/pic_185.jpg")
  change_text(
    '<p>Со всей мочи Вы воткнули растопыренные пальцы прямо в глаза <span class="yes">Дону</span>. Два из них погрузились в глазницы по фаланги. Ослепший <span class="yes">старик</span>, прикрывая раненые глаза рукой, упал на бок.</p><p>Почти ничего не соображая от зашкаливающего адреналина в крови, Вы стали кромсать несчастного <span class="yes">ножом</span>. Пришли Вы в себя только в тот момент, когда <span class="yes">патлатый рейдер</span> оттаскивал Вас от бездыханного тела.</p><p>- Эй, эй! – смеясь, кричал <span class="yes">волосатик</span> прямо Вам в ухо. – Он мёртв уже! Мёртв! Да прейди ты в себя, Джек Потрошитель.</p><p>И Вы как ото сна очнулись. Перед Вами лежал истерзанный <span class="yes">Дон</span>. Мертвее мёртвого. Кажется, дело было сделано, однако ужас от содеянного Вас не покидал.</p><p><span class="yes">Волосатый</span> представился Вам:</p><p>- Я – <span class="yes">Хэндо</span>. На твоём месте я б не стал задерживался в <span class="yes">городе</span>. После <span class="yes">полуночи</span> вся <span class="yes">полиция</span> будет на ушах. Эта сволочь, - <span class="yes">Хэндо</span> пнул мёртвое тело. – Должна была появиться в <span class="yes">офисе шерифа</span> после службы. Его быстро хватятся, так как он уже давно под подозрением ходит.</p><p>Вы поежились. Действительно, теперь на Вас кровь этого <span class="yes">полицейского</span>. Ничего хорошего Вас в этом <span class="yes">городе</span> явно не ждёт. Нужно убираться от сюда.</p><p><span class="yes">Хэндо</span> уже стоял в дверях. Развернувшись, он бросил Вам:</p><p>- К тебе есть дело. Встретимся <span class="yes">на старой ферме</span> за городом. Она строго на север от городских ворот. Уйти лучше порознь.</p><p>С этими словами он скрылся за дверью.</p>'
  )
  change_buttons({
    "Осмотреть Дона": hub_mainQuestBad341,
    "Выйти из склада": hub_mainQuestBad9,
  })
  currentFunction = hub_mainQuestBad34
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad341() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (killDonWithKnife === true) {
    change_image("img/revenge/pic_186.jpg")
  } else {
    change_image("img/revenge/pic_188.jpg")
  }
  if (getPistol === true) {
    raise_caps(20)
    change_text(
      '<p>Вы перевернули мёртвое тело и пошарили по карманам. Там обнаружилась мелочь – <span class="yes">20 крышек</span>, <span class="yes">пистолет</span>, такой же, как у Вас и <span class="yes">рапорт</span> для <span class="yes">шерифа Грина</span>.</p><p>Вы не стали брать ещё один <span class="yes">пистолет</span>, но забрали <span class="yes">деньги</span>. Пробежавшись глазами по бумагам, Вы узнали, что <span class="yes">Дон</span> занимался проверкой документов у всех выходящих из города <span class="yes">караванов</span>. Его взаимодействие с <span class="yes">рейдером</span> из <span class="yes">банды Гадюк</span> объясняло то, почему практически каждый караван с большим грузом был уничтожен и разграблен. К рапорту было приложено <span class="yes">письмо</span>, написанное <span class="yes">Доном</span>. Судя по всему он собирался раскаяться в содеянном и надеялся самостоятельно арестовать <span class="yes">связного</span> рейдеров. Вряд ли это помогло бы ему избавиться от виселицы, но сильно бы облегчило душу <span class="yes">старика</span>.</p><p>Больше тут делать нечего. Нужно было убираться, пока действительно, чего доброго, не пожаловали бы незваные гости.</p>'
    )
  } else {
    raise_caps(20)
    getPistol = true
    pistol_ammo = 12
    change_gun()
    change_text(
      '<p>Вы перевернули мёртвое тело и пошарили по карманам. Там обнаружилась мелочь – <span class="yes">20 крышек</span>, <span class="yes">пистолет</span> и <span class="yes">рапорт</span> для <span class="yes">шерифа Грина</span>.</p><p>Вы забрали <span class="yes">пистолет</span> и <span class="yes">деньги</span>, а затем принялись изучать <span class="yes">рапорт</span>. Пробежавшись глазами по бумагам, Вы узнали, что <span class="yes">Дон</span> занимался проверкой документов у всех выходящих из города <span class="yes">караванов</span>. Его взаимодействие с <span class="yes">рейдером</span> из <span class="yes">банды Гадюк</span> объясняло то, почему практически каждый караван с большим грузом был уничтожен и разграблен. К рапорту было приложено <span class="yes">письмо</span>, написанное <span class="yes">Доном</span>. Судя по всему он собирался раскаяться в содеянном и надеялся самостоятельно арестовать <span class="yes">связного</span> рейдеров. Вряд ли это помогло бы ему избавиться от виселицы, но сильно бы облегчило душу <span class="yes">старика</span>.</p><p>Больше тут делать нечего. Нужно было убираться, пока действительно, чего доброго, не пожаловали бы незваные гости.</p>'
    )
  }
  change_buttons({ "Выйти из склада": hub_mainQuestBad9 })
  currentFunction = hub_mainQuestBad341
  setCookie("ccurrentFunction", currentFunction)
}

function hub_mainQuestBad51() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  killDon = true
  setCookie("ckillDon", killDon)
  pistol_ammo -= 1
  change_gun()
  change_image("img/revenge/pic_187.jpg")
  change_text(
    '<p>Вы подошли к лежащему на полу телу <span class="yes">полицейского</span> и выстрелили ему в затылок из <span class="yes">пистолета</span>. Сомнений не было – <span class="yes">Дон</span> был мёртв.</p><p><span class="yes">Парень в синих джинсах</span> удовлетворённо кивнул:</p><p>- Я – <span class="yes">Хэндо</span>. На твоём месте я б не стал задерживался в <span class="yes">городе</span>. После <span class="yes">полуночи</span> вся <span class="yes">полиция</span> будет на ушах. Эта сволочь, - <span class="yes">Хэндо</span> пнул мёртвое тело. – Должна была появиться в <span class="yes">офисе шерифа</span> после службы. Его быстро хватятся, так как он уже давно под подозрением ходит.</p><p>Вы поежились. Действительно, теперь на Вас кровь этого <span class="yes">полицейского</span>. Ничего хорошего Вас в этом <span class="yes">городе</span> явно не ждёт. Нужно убираться от сюда.</p><p><span class="yes">Хэндо</span> уже стоял в дверях. Развернувшись, он бросил Вам:</p><p>- К тебе есть дело. Встретимся <span class="yes">на старой ферме</span> за городом. Она строго на север от городских ворот. Уйти лучше порознь.</p><p>С этими словами он скрылся за дверью.</p>'
  )
  change_buttons({
    "Осмотреть Дона": hub_mainQuestBad341,
    "Выйти из склада": hub_mainQuestBad9,
  })
  currentFunction = hub_mainQuestBad51
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad52() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  killDon = true
  setCookie("ckillDon", killDon)
  change_image("img/revenge/pic_187.jpg")
  change_text(
    '<p>Вы склонились на телом мёртвого <span class="yes">полицейского</span> и нажали пальцами на артерию. Сомнений не осталось  – <span class="yes">Дон</span> был мёртв.</p><p><span class="yes">Парень в синих джинсах</span> фыркнул и произнёс:</p><p>- Я – <span class="yes">Хэндо</span>. На твоём месте я б не стал задерживался в <span class="yes">городе</span>. После <span class="yes">полуночи</span> вся <span class="yes">полиция</span> будет на ушах. Эта сволочь, - <span class="yes">Хэндо</span> пнул мёртвое тело. – Должна была появиться в <span class="yes">офисе шерифа</span> после службы. Его быстро хватятся, так как он уже давно под подозрением ходит.</p><p>Вы поежились. Действительно, теперь на Вас кровь этого <span class="yes">полицейского</span>. Ничего хорошего Вас в этом <span class="yes">городе</span> явно не ждёт. Нужно убираться от сюда.</p><p><span class="yes">Хэндо</span> уже стоял в дверях. Развернувшись, он бросил Вам:</p><p>- К тебе есть дело. Встретимся <span class="yes">за городом</span>. Уйти лучше порознь.</p><p>С этими словами он скрылся за дверью.</p>'
  )
  change_buttons({
    "Осмотреть Дона": hub_mainQuestBad341,
    "Выйти из склада": hub_mainQuestBad9,
  })
  currentFunction = hub_mainQuestBad52
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad53() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  killDon = true
  setCookie("ckillDon", killDon)
  change_image("img/revenge/pic_187.jpg")
  change_text(
    '<p>Вы выжидающе смотрели на <span class="yes">парня</span> с длинными волосами. Тот злобно усмехнулся, вытащил <span class="yes">нож</span> и ударил тело <span class="yes">полицейского</span> в район печени.</p><p>- Проверять всегда надо, - пояснил <span class="yes">волосатик</span>. Затем он убрал <span class="yes">нож</span> и представился:</p><p>- Я – <span class="yes">Хэндо</span>. На твоём месте я б не стал задерживался в <span class="yes">городе</span>. После <span class="yes">полуночи</span> вся <span class="yes">полиция</span> будет на ушах. Эта сволочь, - <span class="yes">Хэндо</span> пнул мёртвое тело. – Должна была появиться в <span class="yes">офисе шерифа</span> после службы. Его быстро хватятся, так как он уже давно под подозрением ходит.</p><p>Вы поежились. Действительно, теперь на Вас кровь этого <span class="yes">полицейского</span>. Ничего хорошего Вас в этом <span class="yes">городе</span> явно не ждёт. Нужно убираться от сюда.</p><p><span class="yes">Хэндо</span> уже стоял в дверях. Развернувшись, он бросил Вам:</p><p>- К тебе есть дело. Встретимся <span class="yes">на старой ферме</span> за городом. Она строго на север от городских ворот. Уйти лучше порознь.</p><p>С этими словами он скрылся за дверью.</p>'
  )
  change_buttons({
    "Осмотреть Дона": hub_mainQuestBad341,
    "Выйти из склада": hub_mainQuestBad9,
  })
  currentFunction = hub_mainQuestBad53
  setCookie("ccurrentFunction", currentFunction)
}

/* Перестрелка в городе */
function hub_mainQuestBad21() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  loudMurder = true
  setCookie("cloudMurder", loudMurder)
  rifle_ammo -= 1
  change_shotgun()
  change_image("img/revenge/pic_189.jpg")
  change_text(
    '<p>Вы прицелились и выстрелили из <span class="yes">дробовика</span> прямо в голову <span class="yes">Дону</span>. В том, что он умер, не было сомнения, как и в том, что <span class="yes">полицейские</span> уже бегут сюда со всего района.</p><p>- Дьявол! – заорал <span class="yes">патлатый парень</span>, схватив Вас за шиворот. – Умеешь же ты веселиться. Бежим отсюда, пока из нас не сделали решето.</p><p>Вместе вы выбежали на улицу и увидели, что из-за поворота бегут <span class="yes">полицейские</span>. <span class="yes">Волосатый</span> выпустил в них несколько пуль и, кажется, задел одного из них. Те же в свою очередь открыли плотный огонь по вам.</p><p>- Стреляй из своего <span class="yes">дробовика</span>! – заорал <span class="yes">рейдер</span>.</p>'
  )
  change_buttons({
    "Выстрелить по полицейским из дробовика": hub_mainQuestBad6,
    "Наплевать на то, что он Вам сказал и бежать в переулок": hub_mainQuestBad7,
    "Найти себе укрытие": hub_mainQuestBad8,
  })
  currentFunction = hub_mainQuestBad21
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad22() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_189.jpg")
  change_text(
    '<p>Вы убрали своё оружие и вытащили <span class="yes">нож</span>. <span class="yes">Дон</span> в ужасе продолжал смотреть на Вас. Такой смерти он явно не хотел. Безжалостно Вы доделали дело, однако, сомнений в том, что <span class="yes">полицейские</span> уже бегут сюда со всего района, не было.</p><p>- Вот это стиль! Надо было с <span class="yes">ножа</span> и начинать, – злобно усмехнулся <span class="yes">патлатый парень</span>. – Умеешь же ты веселиться. Бежим отсюда, пока из нас не сделали решето.</p><p>Вместе вы выбежали на улицу и увидели, что из-за поворота бегут <span class="yes">полицейские</span>. <span class="yes">Волосатый</span> выпустил в них несколько пуль и, кажется, задел одного из них. Те же в свою очередь открыли плотный огонь по вам.</p><p>- Стреляй из своего <span class="yes">дробовика</span>! – заорал <span class="yes">рейдер</span>.</p>'
  )
  change_buttons({
    "Выстрелить по полицейским из дробовика": hub_mainQuestBad6,
    "Наплевать на то, что он Вам сказал и бежать в переулок": hub_mainQuestBad7,
    "Найти себе укрытие": hub_mainQuestBad8,
  })
  currentFunction = hub_mainQuestBad22
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad23() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_189.jpg")
  change_text(
    '<p>Внезапно Вам стало жаль <span class="yes">Дона</span>. Не найдя в себе сил добить его, Вы просто молча смотрели в его глаза. Однако, <span class="yes">патлатый</span> вытащил нож и перерезал <span class="yes">старику</span> горло. Обернувшись к Вам, он злобно прорычал:</p><p>- Ты, что? Совсем идиот? Мало того, что наделал столько шума, так теперь стоишь как столб и ждёшь, когда нас тут завалят, - он изо всех сил дал Вам пинка. – Ну-ка быстро наружу!</p><p>Вместе вы выбежали на улицу и увидели, что из-за поворота бегут <span class="yes">полицейские</span>. <span class="yes">Волосатый</span> выпустил в них несколько пуль и, кажется, задел одного из них. Те же в свою очередь открыли плотный огонь по вам.</p><p>- Стреляй из своего <span class="yes">дробовика</span>! – заорал <span class="yes">рейдер</span>.</p>'
  )
  change_buttons({
    "Выстрелить по полицейским из дробовика": hub_mainQuestBad6,
    "Наплевать на то, что он Вам сказал и бежать в переулок": hub_mainQuestBad7,
    "Найти себе укрытие": hub_mainQuestBad8,
  })
  currentFunction = hub_mainQuestBad23
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad24() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  loudMurder = true
  setCookie("cloudMurder", loudMurder)
  pistol_ammo -= 1
  change_gun()
  change_image("img/revenge/pic_189.jpg")
  change_text(
    '<p>Подошли к <span class="yes">Дону</span> и приставили <span class="yes">пистолет</span> к его голове. Он обречённо продолжал смотреть на Вас. Вы хладнокровно нажали на спусковой крючок. Грохоту Вы наделали порядочно. Сомнений в том, что <span class="yes">полицейские</span> уже бегут сюда со всего района, не было.</p><p>- Дьявол! – заорал <span class="yes">патлатый парень</span>, схватив Вас за шиворот. – Умеешь же ты веселиться. Бежим отсюда, пока из нас не сделали решето.</p><p>Вместе вы выбежали на улицу и увидели, что из-за поворота бегут <span class="yes">полицейские</span>. <span class="yes">Волосатый</span> выпустил в них несколько пуль и, кажется, задел одного из них. Те же в свою очередь открыли плотный огонь по вам.</p><p>- Стреляй из своего <span class="yes">дробовика</span>! – заорал <span class="yes">рейдер</span>.</p>'
  )
  change_buttons({
    "Выстрелить по полицейским из дробовика": hub_mainQuestBad6,
    "Наплевать на то, что он Вам сказал и бежать в переулок": hub_mainQuestBad7,
    "Найти себе укрытие": hub_mainQuestBad8,
  })
  currentFunction = hub_mainQuestBad24
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad25() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  pistol_ammo -= 1
  change_gun()
  change_image("img/revenge/pic_189.jpg")
  change_text(
    '<p>Подошли к <span class="yes">Дону</span> и приставили <span class="yes">пистолет с глушителем</span> к его голове. Он обречённо продолжал смотреть на Вас. Вы хладнокровно нажали на спусковой крючок. Сомнений в том, что <span class="yes">полицейские</span> уже бегут сюда со всего района, не было.</p><p>- Дьявол! – заорал <span class="yes">патлатый парень</span>, схватив Вас за шиворот. – Ты не мог сделать всё сразу бесшумно? Бежим отсюда, пока из нас не сделали решето.</p><p>Вместе вы выбежали на улицу и увидели, что из-за поворота бегут <span class="yes">полицейские</span>. <span class="yes">Волосатый</span> выпустил в них несколько пуль и, кажется, задел одного из них. Те же в свою очередь открыли плотный огонь по вам.</p><p>- Стреляй из своего <span class="yes">дробовика</span>! – Крикнул <span class="yes">рейдер</span> и приготовился бежать через улицу.</p>'
  )
  change_buttons({
    "Выстрелить по полицейским из дробовика": hub_mainQuestBad6,
    "Наплевать на то, что он Вам сказал и бежать в переулок": hub_mainQuestBad7,
    "Найти себе укрытие": hub_mainQuestBad8,
  })
  currentFunction = hub_mainQuestBad25
  setCookie("ccurrentFunction", currentFunction)
}

function hub_mainQuestBad6() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 2
  change_shotgun()
  change_image("img/revenge/pic_190.jpg")
  change_text(
    '<p>Вы последовали совету <span class="yes"></span>Хэндо и сделали дуплет в сторону <span class="yes">стражей порядка</span>. Один из <span class="yes">полицейских</span> упал, остальные бросились в укрытие. Небольшая заминка позволила <span class="yes">рейдеру</span> пересечь улицу и занять выгодную позицию. Открыв беглый огонь по <span class="yes">полицейским</span>, он обеспечил Вам прикрытие и возможность также пересечь улицу.</p><p>Как только вы с <span class="yes">Хэндо</span> спрятались за стеной дома, <span class="yes">полицейские</span> вновь стали по вам стрелять.</p><p>- Не высовывайся! – Заорал Вам прямо в ухо <span class="yes">бандит</span> и стал рыться у себя в кармане.</p>'
  )
  change_buttons({
    "Открыть огонь по полицейским": hub_mainQuestBad61,
    "Бросить Хэндо и бежать в переулок": hub_mainQuestBad62,
    "Остаться в укрытии": hub_mainQuestBad63,
  })
  currentFunction = hub_mainQuestBad6
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad61() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  rifle_ammo -= 4
  change_shotgun()
  change_image("img/revenge/pic_191.jpg")
  change_text(
    '<p>Вы решили, что исполнять указы какого-то невнятного пустынного разбойника – ниже Вашего достоинства. Вы высунулись из-за угла здания и открыли огонь из <span class="yes">дробовика</span> по <span class="yes">стражам</span>, которые перешли в атаку и подходили всё ближе и ближе.</p><p>Из-за Вашей головы вылетела <span class="yes">граната</span>, которая приземлилась аккурат между нестройными рядами <span class="yes">полицейских</span>. Взрыв оказался настолько сильным, что Вас отбросило в сторону и посекло осколками.</p>'
  )
  change_buttons({ Далее: hub_mainQuestBad611 })
  currentFunction = hub_mainQuestBad61
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad611() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_health(40)
  if (health > 0) {
    change_image("img/revenge/pic_192.jpg")
    change_text(
      '<p>Вы оказались <span class="yes">серьёзно ранены</span>, но всё ещё живы. <span class="yes">Рейдер</span> бегло осмотрел Ваши раны и злобно зашипел:</p><p>- Какой же ты всё-таки идиот! Бежим. Если станешь отставать, то я не буду с тобой возиться, – сказав это, <span class="yes">Хэндо</span> схватил Вас под плечо и побежал, увлекая за сбой вглубь запутанных лабиринтов улиц.</p><p>В результате суматохи, под покровом темноты Вы с <span class="yes">Хэндо</span> вышли из <span class="yes">города</span> незамеченными.</p>'
    )
    change_buttons({ "Следовать за рейдером": mainQuest_Bad_Hendo })
  } else {
    death()
    change_image("img/revenge/pic_193.jpg")
    change_text(
      '<p>Один из осколков попал Вам прямо в артерию. И без того ослабленный ранее полученными <span class="yes">ранениями</span>, Вы упали на землю и кровь фонтаном полилась из рваной раны. <span class="yes">Рейдер</span> бегло осмотрел Вас и лишь злобно зашипел:</p><p>- Какой же ты всё-таки идиот! – Сказав это, <span class="yes">Хэндо</span> сплюнул и скрылся в одной из подворотен.</p><p>Перед смертью у Вас мелькнула мысль о том, что Вы погибли позорно, как разбойник.</p>'
    )
    change_buttons({ "Игра окончена!": restart })
  }
  currentFunction = hub_mainQuestBad611
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad62() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_195.jpg")
  change_text(
    '<p>Вы не стали больше слушать советы этого идиота. Вы крупно облажались. Однако в глубине души у Вас была надежда свалить всё на <span class="yes">рейдера</span> и остаться хотя бы живым в этой ситуации.</p><p>Вы помчались по тёмным переулкам прочь от догонявших Вас <span class="yes">стражей</span>. Те что-то кричали Вам, однако Вы и не думали останавливаться. Когда Вы оказались в <span class="yes">Центре Города</span>, то поняли что попали в засаду: все выходы из района были перекрыты и единственное место в котором Вы могли бы укрыться – это бар "<span class="yes">Мальтийский Сокол</span>".</p>'
  )
  change_buttons({ "Вбежать в помещение бара": hub_mainQuestBad621 })
  currentFunction = hub_mainQuestBad62
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad621() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_197.jpg")
  change_text(
    '<p>Оказавшись в <span class="yes">баре</span>, Вы поймали на себе испуганные взгляды <span class="yes">посетителей</span>. <span class="yes">Кейн</span> по-прежнему стоял возле двери, охраняя кабинет <span class="yes">босса</span> от незваных гостей.</p><p><span class="yes">Полицейские</span> во главе с <span class="yes">шерифом Грином</span> следовали за Вами по пятам.</p>'
  )
  if (rentRoom === false) {
    change_buttons({ "Бежать к Кейну": hub_mainQuestBad6211 })
  } else {
    change_buttons({
      "Бежать к Кейну": hub_mainQuestBad6211,
      "Бежать в свой номер": hub_mainQuestBad6212,
    })
  }
  currentFunction = hub_mainQuestBad621
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad6211() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_198.jpg")
  change_text(
    '<p>Вы подбежали к <span class="yes">Кейну</span>, но сказать ему ничего не успели – следом за Вами в помещение заведения вломился <span class="yes">шериф Грин</span> со своими <span class="yes">подчинёнными</span>.</p><p>Мгновенно всё прикинув, <span class="yes">Кейн</span> ударил Вас в лицо и повалил на пол.</p><p>- Готово, <span class="yes">шериф</span>, - крикнул <span class="yes">Кейн</span>. – Я взял его. Забирайте красавца.</p><p><span class="yes">Полицейские</span> скрутили Вам руки и потащили в <span class="yes">тюрьму</span>. Сопротивление оказалось бесполезным.</p>'
  )
  change_buttons({ "Подчиниться полиции": hub_mainQuestBad62111 })
  currentFunction = hub_mainQuestBad6211
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad62111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 23
  change_time(0)
  removeItems()
  change_image("img/revenge/pic_199.jpg")
  change_text(
    '<p>Забрав все Ваши вещи, Вас отвели в <span class="yes">камеру</span>, где после короткого допроса, Вы провели остаток дня. Поздно ночью дверь <span class="yes">камеры</span> открылась, внутрь прошёл уже знакомый Вам <span class="yes">Чарли</span>. Видимо опять попался на каком-то мелком воровстве.</p><p>- Привет, <span class="yes">Чарли</span>! – обрадовавшись своему сокамернику, Вы весело поприветствовали его. – Ты какими судьбами снова тут?</p><p>На лице <span class="yes">Чарли</span> не было и тени улыбки. Он молча смотрел на Вас прищуренными глазами. Почувствовав недоброе, Вы отошли к углу помещения. <span class="yes">Чарли</span> подождал, когда  в коридоре стихнут шаги <span class="yes">охраны</span> и что-то процедил сквозь зубы.</p>'
  )
  change_buttons({ "Переспросить Чарли": hub_mainQuestBad62112 })
  currentFunction = hub_mainQuestBad62111
  setCookie("ccurrentFunction", currentFunction)
}
/* Бой в номере */
function hub_mainQuestBad6212() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_201.jpg")
  change_text(
    '<p>В отчаянии Вы побежали в свой <span class="yes">номер</span> и заперли за собой дверь. Через минуту Вы услышали крик <span class="yes">шерифа</span>:</p><p>- Выходи, ублюдок! Бежать больше некуда. Шансов у тебя нет.</p><p>Шансов у Вас действительно не было. На окнах Вашего <span class="yes">номера</span> были решётки, покинуть его можно было только одним путём. Кажется, Ваши приключения подошли к концу. Может быть, стоит сдаться <span class="yes">полиции</span>? Когда-нибудь Вас наверняка выпустят из тюрьмы.</p>'
  )
  change_buttons({
    "Сдаться полиции": hub_mainQuestBad62121,
    "Приготовиться к бою": hub_mainQuestBad62122,
    Застрелиться: hub_mainQuestBad62123,
  })
  currentFunction = hub_mainQuestBad6212
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad62121() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_202.jpg")
  change_text(
    '<p>В надежде на то, что Вам сохранят жизнь, Вы решили сдаться <span class="yes">полиции</span>. Может быть, рано или поздно, но Вы доберётесь до родного бункера. Все эти приключения на поверхности явно не для Вас.</p><p>Я сдаюсь, я сдаюсь, - крикнули Вы, бросив оружие на пол.</p><p><span class="yes">Полицейские</span> выбили дверь и разом навалились на Вас, скрутив руки за спиной.</p><p>- Ты у меня сгниёшь в тюрьме, мразь, - заявил Вам <span class="yes">шериф Грин</span>. Не смотря на грозность этих слов, в душе у Вас загорелся огонёк надежды. Надежды на то, что Вам сохранят жизнь.</p>'
  )
  change_buttons({ "Подчиниться полиции": hub_mainQuestBad62111 })
  currentFunction = hub_mainQuestBad62121
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad63() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_194.jpg")
  change_text(
    '<p>Вы вновь последовали совету <span class="yes">рейдера</span> и встали за его спиной. Через мгновение в руке <span class="yes">бандита</span> появилась большая <span class="yes">граната</span>, которую тот метнул в сторону стражей правопорядка. Зажав ужи, <span class="yes">Хэндо</span> прижался к стене дома, за которой вы укрывались от пуль полиции.</p><p>Мощный взрыв сотряс землю и Вы увидели, как улица залилась кровью. Послышались крики раненых.</p><p>- Быстрей, быстрей, быстрей! – <span class="yes">Хэндо</span> кричал Вам, увлекая за сбой вглубь запутанных лабиринтов улиц.</p><p>В результате суматохи, под покровом темноты Вы с <span class="yes">Хэндо</span> вышли из <span class="yes">города</span> незамеченными.</p>'
  )
  change_buttons({ "Следовать за рейдером": mainQuest_Bad_Hendo })
  currentFunction = hub_mainQuestBad63
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad7() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_195.jpg")
  change_text(
    '<p>Вы не стали слушать советы этого идиота. В открытую стрелять по <span class="yes">полицейским</span> означало подписать себе смертный приговор. Да, Вы налажали. Но в глубине души у Вас была надежда свалить всё на <span class="yes">рейдера</span> и остаться хотя бы живым в этой ситуации.</p><p>Вы помчались по тёмным переулкам прочь от догонявших Вас <span class="yes">стражей</span>. Те что-то кричали Вам, однако Вы и не думали останавливаться. Когда Вы оказались в <span class="yes">Центре Города</span>, то поняли что попали в засаду: все выходы из района были перекрыты и единственное место в котором Вы могли бы укрыться – это бар "<span class="yes">Мальтийский Сокол</span>".</p>'
  )
  change_buttons({ "Вбежать в помещение бара": hub_mainQuestBad621 })
  currentFunction = hub_mainQuestBad7
  setCookie("ccurrentFunction", currentFunction)
}
function hub_mainQuestBad8() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_196.jpg")
  change_text(
    '<p>Вы не стали стрелять в <span class="yes">полицейских</span> и спрятались за кучей какого-то хлама рядом с входом в <span class="yes">склад</span>.</p><p><span class="yes">Хэндо</span>, не получивший Вашей поддержки отчаянно метнулся в сторону ближайшего переулка, но был безжалостно расстрелян <span class="yes">полицией</span>, оказавшись на открытой местности.</p><p>Вы поняли, что сопротивление не имеет никакого смысла. Отбросив своё оружие в сторону, Вы подняли руки и сдались властям. <span class="yes">Полицейские</span> скрутили Вас и потащили в <span class="yes">тюрьму</span>.</p>'
  )
  change_buttons({ "Подчиниться полиции": hub_mainQuestBad62111 })
  currentFunction = hub_mainQuestBad8
  setCookie("ccurrentFunction", currentFunction)
}

/* После убийства */
function hub_mainQuestBad9() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 21
  change_time(0)
  change_image("img/revenge/pic_206.jpg")
  change_text(
    '<p>Вы вышли на улицу и оглянулись по сторонам. Ничего не вызывало у Вас подозрений. Вам необходимо покинуть <span class="yes">город</span> до наступления <span class="yes">глубокой ночи</span>, пока <span class="yes">полиция</span> не стала разыскивать <span class="yes">Дона</span>. Как только они станут разматывать этот клубок, ниточки неизбежно приведут к Вам. Нужно торопиться.</p><p>Петляя по тёмным переулкам Вы, наконец, добрались до <span class="yes">Центра Города</span>. <span class="yes">Полицейские</span> стояли на своих постах и не обращали на Вас особого внимания. Что ж, возможно пора получить свои <span class="yes">деньги</span> у <span class="yes">Декера</span>?</p>'
  )
  change_buttons({ "Зайти в бар «Мальтийский Сокол»": hub_MalteseFalcon })
  currentFunction = hub_mainQuestBad9
  setCookie("ccurrentFunction", currentFunction)
}
