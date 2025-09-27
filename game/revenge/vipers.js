/* ПЕЩЕРЫ ГАДЮК */
function mainQuest_Good_Vipers() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 12
  change_time(0)
  change_text(
    '<p>Примерно к <span class="yes">полудню</span> вы достигли точки назначения. Вы подошли к подножью горной стены, растянувшейся на запад и восток. Внутренне Вы порадовались тому, что сломленный стараниями <span class="yes">шерифа Грина</span> рейдер, указал Вам точное местоположения входа в их логово. Искать его в этих диких горах без наводки можно было бы вечно.</p><p>Возле входа в <span class="yes">пещеру</span> охраны не наблюдалось. И это показалось Вам очень странным. Стоит проявить осторожность. Где-то там - в конце лабиринта – база <span class="yes">рейдеров</span> из клана <span class="yes">Гадюк</span>.</p>'
  )
  if (Lip === true) {
    change_image("img/revenge/pic_220a.jpg")
    change_buttons({
      "Войти в сеть пещер самому": mainQuest_Good_Vipers1,
      "Предложить покараулить вход, пока Лип разведает пещеру":
        mainQuest_Good_Vipers0,
    })
  } else {
    change_image("img/revenge/pic_220.jpg")
    change_buttons({ "Войти в сеть пещер": mainQuest_Good_Vipers1 })
  }
  currentFunction = mainQuest_Good_Vipers
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers_a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  if (Lip === true) {
    change_image("img/revenge/pic_222a.jpg")
    change_text(
      '<p>Вы стоите перед входом в пещеру. Лип стоит на страже, однако, стоит всё же проявить осторожность. Где-то там - в конце лабиринта – база <span class="yes">рейдеров</span> из клана <span class="yes">Гадюк</span>.</p>'
    )
    change_buttons({
      "Войти в сеть пещер самому": mainQuest_Good_Vipers1,
      "Предложить покараулить вход, пока Лип разведает пещеру":
        mainQuest_Good_Vipers0,
    })
  } else {
    change_image("img/revenge/pic_222.jpg")
    change_text(
      '<p>Вы стоите перед входом в пещеру. Стоит проявить осторожность. Где-то там - в конце лабиринта – база <span class="yes">рейдеров</span> из клана <span class="yes">Гадюк</span>.</p>'
    )
    change_buttons({ "Войти в сеть пещер": mainQuest_Good_Vipers1 })
  }
  currentFunction = mainQuest_Good_Vipers_a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers0() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  Lip = false
  lightBattle = true
  setCookie("cLip", Lip)
  setCookie("clightBattle", lightBattle)
  change_image("img/revenge/pic_223.jpg")
  change_text(
    '<p>Вы решили не геройствовать и передать эту честь своему <span class="yes">спутнику</span>. Однако, <span class="yes">Лип</span> только фыркнул:</p><p>- Чего придумал! Я не думал, что ты такой трус. Сам же вызвался найти <span class="yes">логово Гадюк</span>, а теперь, когда мы на месте, предлагаешь мне туда идти. Уговор был в том, что я помогаю тебе дойти ДО пещеры. Учитывая обстоятельства, дальше ты сам по себе.</p><p>С этими словами Ваш бывший напарник развернулся и отправился обратно в <span class="yes">Хаб</span>.</p><p>Ничего не поделаешь. Придётся Вам идти самому в эти жуткие пещеры. Да ещё и компаньона Вы лишились.</p>'
  )
  change_buttons({ "Войти в сеть пещер": mainQuest_Good_Vipers1 })
  currentFunction = mainQuest_Good_Vipers0
  setCookie("ccurrentFunction", currentFunction)
}

/* Галерея 1 */
function mainQuest_Good_Vipers1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы вошли в мрачное подземелье. Освещать путь зажигалкой Вы решили только в самом крайнем случае, чтобы не выдать себя заранее. Ход то сужался, то расширялся. Вы не слышали ни звука и спокойно шли в темноту, ощупывая вокруг себя пространство.</p><p>В конце концов, Вы подошли к <span class="yes">развилке</span> и, остановившись, прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers11,
    "Выбрать направление движения": mainQuest_Good_Vipers12,
  })
  currentFunction = mainQuest_Good_Vipers1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers01() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы развернулись <span class="yes">назад</span> и вернулись уже знакомым маршрутом обратно. Яркий свет резанул глаза. Вы на мгновение зажмурились.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers_a })
  currentFunction = mainQuest_Good_Vipers01
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers01a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">налево</span> и пошли уже знакомым маршрутом. Внезапно яркий свет резанул глаза. Вы на мгновение зажмурились.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers_a })
  currentFunction = mainQuest_Good_Vipers01a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers01aa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы пошли <span class="yes">прямо</span> вернулись уже знакомым маршрутом в выходу из <span class="yes">пещеры</span>. Внезапно яркий свет резанул глаза. Вы на мгновение зажмурились.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers_a })
  currentFunction = mainQuest_Good_Vipers01aa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers01aaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">направо</span> и вернулись уже знакомым маршрутом в выходу из <span class="yes">пещеры</span>. Внезапно яркий свет резанул глаза. Вы на мгновение зажмурились.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers_a })
  currentFunction = mainQuest_Good_Vipers01aaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись <span class="yes">назад</span> и вернулись уже знакомым маршрутом обратно. Наконец Ваши руки нащупали <span class="yes">предыдущую</span> развилку.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers1a1,
    "Выбрать направление движения": mainQuest_Good_Vipers1a2,
  })
  currentFunction = mainQuest_Good_Vipers1a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1aa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">направо</span> и вернулись уже знакомым маршрутом обратно к <span class="yes">первому</span> перекрёстку. Ваши руки нащупали развилку.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers1a1,
    "Выбрать направление движения": mainQuest_Good_Vipers1a2,
  })
  currentFunction = mainQuest_Good_Vipers1aa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1aaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись <span class="yes">назад</span> и вернулись уже знакомым маршрутом обратно к <span class="yes">первому</span> перекрёстку. Ваши руки нащупали развилку.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers1aaa1,
    "Выбрать направление движения": mainQuest_Good_Vipers1aaa2,
  })
  currentFunction = mainQuest_Good_Vipers1aaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1aaaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">направо</span> и через некоторое время вернулись обратно к <span class="yes">первому</span> перекрёстку. Ваши руки нащупали <span class="yes">знакомую</span> развилку.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers1aaa1,
    "Выбрать направление движения": mainQuest_Good_Vipers1aaa2,
  })
  currentFunction = mainQuest_Good_Vipers1aaaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1aaaaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы решили идти <span class="yes">прямо</span>, не сворачивая, и через некоторое время вернулись обратно к <span class="yes">первому</span> перекрёстку. Ваши руки нащупали <span class="yes">знакомую</span> развилку.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers1aaa1,
    "Выбрать направление движения": mainQuest_Good_Vipers1aaa2,
  })
  currentFunction = mainQuest_Good_Vipers1aaaaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1aaaaaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись и быстро пошли в <span class="yes">обратном</span> направлении уже знакомым путём. Через некоторое время Вы вернулись обратно к <span class="yes">первому</span> перекрёстку. Ваши руки нащупали <span class="yes">знакомую</span> развилку.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers1aaaa1,
    "Выбрать направление движения": mainQuest_Good_Vipers1aaaa2,
  })
  currentFunction = mainQuest_Good_Vipers1aaaaaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1aaaaaaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">налево</span> и пошли по прямому коридору. Затем проход ушёл резко влево. И вот Вы вновь на знакомой развилке <span class="yes">первого</span> перекрёстка.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers1aaaa1,
    "Выбрать направление движения": mainQuest_Good_Vipers1aaaa2,
  })
  currentFunction = mainQuest_Good_Vipers1aaaaaaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1ab() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы пошли <span class="yes">прямо</span> по прямому коридору. Затем проход ушёл резко влево. И вот Вы вновь на знакомой развилке <span class="yes">первого</span> перекрёстка.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers1aaaa1,
    "Выбрать направление движения": mainQuest_Good_Vipers1aaaa2,
  })
  currentFunction = mainQuest_Good_Vipers1ab
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1aa1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы пошли <span class="yes">вперёд</span> и вернулись уже знакомым маршрутом обратно к <span class="yes">первому</span> перекрёстку. Ваши руки нащупали развилку.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers1a1,
    "Выбрать направление движения": mainQuest_Good_Vipers1a2,
  })
  currentFunction = mainQuest_Good_Vipers1aa1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers111 })
  currentFunction = mainQuest_Good_Vipers11
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1a1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers1a11 })
  currentFunction = mainQuest_Good_Vipers1a1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1aaa1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers1aaa11 })
  currentFunction = mainQuest_Good_Vipers1aaa1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1aaaa1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers1aaaa11 })
  currentFunction = mainQuest_Good_Vipers1aaaa1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_226.jpg")
  change_text(
    '<p>Вы увидели перед собой развилку <span class="yes">трёх</span> коридоров пещеры. Как Вы не старались, но разглядеть что бы то ни было впереди не удавалось. Нужно выбрать куда идти.</p>'
  )
  change_buttons({ "Выбрать направление движения": mainQuest_Good_Vipers12 })
  currentFunction = mainQuest_Good_Vipers111
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1a11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_226.jpg")
  change_text(
    '<p>Вы увидели перед собой развилку <span class="yes">трёх</span> коридоров пещеры. Как Вы не старались, но разглядеть что бы то ни было впереди не удавалось. Нужно выбрать куда идти. </p>'
  )
  change_buttons({ "Выбрать направление движения": mainQuest_Good_Vipers1a2 })
  currentFunction = mainQuest_Good_Vipers1a11
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1aaa11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_226.jpg")
  change_text(
    '<p>Вы увидели перед собой развилку <span class="yes">трёх</span> коридоров пещеры. Как Вы не старались, но разглядеть что бы то ни было впереди не удавалось. Нужно выбрать куда идти. </p>'
  )
  change_buttons({
    "Выбрать направление движения": mainQuest_Good_Vipers1aaa2,
  })
  currentFunction = mainQuest_Good_Vipers1aaa11
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1aaaa11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_226.jpg")
  change_text(
    '<p>Вы увидели перед собой развилку <span class="yes">трёх</span> коридоров пещеры. Как Вы не старались, но разглядеть что бы то ни было впереди не удавалось. Нужно выбрать куда идти. </p>'
  )
  change_buttons({
    "Выбрать направление движения": mainQuest_Good_Vipers1aaaa2,
  })
  currentFunction = mainQuest_Good_Vipers1aaaa11
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers12() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке. Можно пройти <span class="yes">налево</span>, <span class="yes">прямо</span> и <span class="yes">направо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти налево": mainQuest_Good_Vipers2,
    "Пойти прямо": mainQuest_Good_Vipers4,
    "Пойти направо": mainQuest_Good_Vipers6,
    "Вернуться назад": mainQuest_Good_Vipers01,
  })
  currentFunction = mainQuest_Good_Vipers12
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1a2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке. Можно пройти <span class="yes">налево</span>, <span class="yes">прямо</span> и <span class="yes">направо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти налево": mainQuest_Good_Vipers01a,
    "Пойти прямо": mainQuest_Good_Vipers2ab,
    "Пойти направо": mainQuest_Good_Vipers4ab,
    "Вернуться назад": mainQuest_Good_Vipers6a,
  })
  currentFunction = mainQuest_Good_Vipers1a2
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1aaa2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке. Можно пройти <span class="yes">налево</span>, <span class="yes">прямо</span> и <span class="yes">направо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти налево": mainQuest_Good_Vipers6aa,
    "Пойти прямо": mainQuest_Good_Vipers01aa,
    "Пойти направо": mainQuest_Good_Vipers2aaaaa,
    "Вернуться назад": mainQuest_Good_Vipers4aaa,
  })
  currentFunction = mainQuest_Good_Vipers1aaa2
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers1aaaa2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке. Можно пройти <span class="yes">налево</span>, <span class="yes">прямо</span> и <span class="yes">направо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти налево": mainQuest_Good_Vipers4aaaaaa,
    "Пойти прямо": mainQuest_Good_Vipers6aaa,
    "Пойти направо": mainQuest_Good_Vipers01aaa,
    "Вернуться назад": mainQuest_Good_Vipers2aaaa,
  })
  currentFunction = mainQuest_Good_Vipers1aaaa2
  setCookie("ccurrentFunction", currentFunction)
} /* К гелерее 4              К галерее 6                 Ко входу в пещеру         Назад в галерею 2 */

/* Галерея 2 */
function mainQuest_Good_Vipers2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">налево</span> и пошли по прямому коридору. Затем проход стал уже и резко ушёл вправо. Пол пещеры был настолько ровен, что Вы ускорили шаг и по стеночке быстро добрались до очередной развилки.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers21,
    "Выбрать направление движения": mainQuest_Good_Vipers22,
  })
  currentFunction = mainQuest_Good_Vipers2
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers2a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">налево</span> и прошли около <span class="yes">5 метров</span> на ощупь. Ваши руки нащупали очередную развилку.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers2a1,
    "Выбрать направление движения": mainQuest_Good_Vipers2a2,
  })
  currentFunction = mainQuest_Good_Vipers2a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers2aa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись и прошли несколько метров на ощупь в <span class="yes">обратном</span> направлении. Ваши руки нащупали очередную развилку.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers2a1,
    "Выбрать направление движения": mainQuest_Good_Vipers2a2,
  })
  currentFunction = mainQuest_Good_Vipers2aa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers2aaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">направо</span> и прошли несколько метров на ощупь, пока Ваши руки не нащупали очередную развилку.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers2a1,
    "Выбрать направление движения": mainQuest_Good_Vipers2a2,
  })
  currentFunction = mainQuest_Good_Vipers2aaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers2aaaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись и пошли по прямому коридору в <span class="yes">обратном</span> направлении. Затем проход ушёл резко вправо. И вот Вы вновь на знакомой развилке.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers21,
    "Выбрать направление движения": mainQuest_Good_Vipers22,
  })
  currentFunction = mainQuest_Good_Vipers2aaaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers2aaaaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">направо</span> и пошли по прямому коридору. Затем проход стал уже и резко ушёл вправо. Пол пещеры был настолько ровен, что Вы ускорили шаг и по стеночке быстро добрались до очередной развилки.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers21,
    "Выбрать направление движения": mainQuest_Good_Vipers22,
  })
  currentFunction = mainQuest_Good_Vipers2aaaaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers2ab() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы пошли <span class="yes">прямо</span> никуда не сворачивая по коридору. Затем проход стал уже и резко ушёл вправо. Пол пещеры был настолько ровен, что Вы ускорили шаг и по стеночке быстро добрались до очередной развилки.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers21,
    "Выбрать направление движения": mainQuest_Good_Vipers22,
  })
  currentFunction = mainQuest_Good_Vipers2ab
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers2ac() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись и пошли по прямому коридору в <span class="yes">обратном</span> направлении. Через некоторое время Вы возвратились к знакомой развилке.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers2ac1,
    "Выбрать направление движения": mainQuest_Good_Vipers2ac2,
  })
  currentFunction = mainQuest_Good_Vipers2ac
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers2ad() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">налево</span> и вошли в прямой коридор. Пол был ровным и Вы, мягко ступая, уверенно шли вперёд, ощупывая впереди себя руками стены пещеры. Наконец, очередная развилка.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers2ac1,
    "Выбрать направление движения": mainQuest_Good_Vipers2ac2,
  })
  currentFunction = mainQuest_Good_Vipers2ad
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers2ae() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы решили идти <span class="yes">прямо</span> и вошли в прямой коридор. Пол был ровным и Вы, мягко ступая, уверенно шли вперёд, ощупывая впереди себя руками стены пещеры. Наконец, очередная развилка.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers2ac1,
    "Выбрать направление движения": mainQuest_Good_Vipers2ac2,
  })
  currentFunction = mainQuest_Good_Vipers2ae
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers21() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers211 })
  currentFunction = mainQuest_Good_Vipers21
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers2a1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers2a11 })
  currentFunction = mainQuest_Good_Vipers2a1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers2ac1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers2ac11 })
  currentFunction = mainQuest_Good_Vipers2ac1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers211() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_229.jpg")
  change_text(
    '<p>Вы увидели перед собой развилку <span class="yes">двух</span> коридоров пещеры. Как Вы не старались, но разглядеть что бы то ни было впереди не удавалось. Нужно выбрать куда идти. </p>'
  )
  change_buttons({ "Выбрать направление движения": mainQuest_Good_Vipers22 })
  currentFunction = mainQuest_Good_Vipers211
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers2a11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_228.jpg")
  change_text(
    '<p>Вы увидели перед собой развилку <span class="yes">двух</span> коридоров пещеры. Как Вы не старались, но разглядеть что бы то ни было впереди не удавалось. Нужно выбрать куда идти. </p>'
  )
  change_buttons({ "Выбрать направление движения": mainQuest_Good_Vipers2a2 })
  currentFunction = mainQuest_Good_Vipers2a11
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers2ac11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_227.jpg")
  change_text(
    '<p>Вы увидели перед собой развилку <span class="yes">двух</span> коридоров пещеры. Как Вы не старались, но разглядеть что бы то ни было впереди не удавалось. Нужно выбрать куда идти. </p>'
  )
  change_buttons({
    "Выбрать направление движения": mainQuest_Good_Vipers2ac2,
  })
  currentFunction = mainQuest_Good_Vipers2ac11
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers22() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке. Можно пройти <span class="yes">прямо</span> или <span class="yes">направо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти прямо": mainQuest_Good_Vipers3,
    "Пойти направо": mainQuest_Good_Vipers4aaaaaaa,
    "Вернуться назад": mainQuest_Good_Vipers1aaaaaa,
  })
  currentFunction = mainQuest_Good_Vipers22
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers2a2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке. Можно пройти <span class="yes">налево</span> или <span class="yes">направо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти налево": mainQuest_Good_Vipers1aaaaaaa,
    "Пойти направо": mainQuest_Good_Vipers3aaaa,
    "Вернуться назад": mainQuest_Good_Vipers4a,
  })
  currentFunction = mainQuest_Good_Vipers2a2
  setCookie("ccurrentFunction", currentFunction)
} /*                К галерее 1             К галерее 3               К галерее 4    */
function mainQuest_Good_Vipers2ac2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке. Можно пройти <span class="yes">налево</span> или <span class="yes">прямо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти налево": mainQuest_Good_Vipers4ac,
    "Пойти прямо": mainQuest_Good_Vipers1ab,
    "Вернуться назад": mainQuest_Good_Vipers3ab,
  })
  currentFunction = mainQuest_Good_Vipers2ac2
  setCookie("ccurrentFunction", currentFunction)
} /*                К галерее 4             К галерее 1               К галерее 3    */

/* Галерея 3 */
function mainQuest_Good_Vipers3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы пошли прямо по прямой галерее пещеры. Пол был ровным и Вы, мягко ступая, уверенно шли вперёд, ощупывая впереди себя руками стены пещеры. Наконец, очередная развилка.</p><p>Вы прислушались: где-то вдалеке <span class="yes">слева</span> послышались <span class="yes">человеческие голоса</span>. Сердце стало стучать так, что, казалось, его грохот способен выдать Вас в любую минуту.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers31,
    "Выбрать направление движения": mainQuest_Good_Vipers32,
  })
  currentFunction = mainQuest_Good_Vipers3
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers3a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">направо</span> и шли некоторое время, мягко ступая и не издавая лишних звуков. Наконец, очередная развилка.</p><p>Вы прислушались: где-то далеко <span class="yes">впереди</span> послышались <span class="yes">человеческие голоса</span>. Сердце стало стучать так, что, казалось, его грохот способен выдать Вас в любую минуту.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers3a1,
    "Выбрать направление движения": mainQuest_Good_Vipers3a2,
  })
  currentFunction = mainQuest_Good_Vipers3a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers3aa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">налево</span> и шли некоторое время, мягко ступая и не издавая лишних звуков. Наконец, очередная развилка.</p><p>Вы прислушались: где-то далеко <span class="yes">впереди</span> послышались <span class="yes">человеческие голоса</span>. Сердце стало стучать так, что, казалось, его грохот способен выдать Вас в любую минуту.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers3a1,
    "Выбрать направление движения": mainQuest_Good_Vipers3a2,
  })
  currentFunction = mainQuest_Good_Vipers3aa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers3aaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись и пошли некоторое время в <span class="yes">обратном</span> направлении. Вы шли мягко ступая и не издавая лишних звуков. Наконец, очередная развилка.</p><p>Вы прислушались: где-то далеко <span class="yes">впереди</span> послышались <span class="yes">человеческие голоса</span>. Сердце стало стучать так, что, казалось, его грохот способен выдать Вас в любую минуту.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers3a1,
    "Выбрать направление движения": mainQuest_Good_Vipers3a2,
  })
  currentFunction = mainQuest_Good_Vipers3aaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers3aaaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">направо</span> и пошли по прямой галерее пещеры. Пол был ровным и Вы, мягко ступая, уверенно шли вперёд, ощупывая впереди себя руками стены пещеры. Наконец, очередная развилка.</p><p>Вы прислушались: где-то вдалеке <span class="yes">слева</span> послышались <span class="yes">человеческие голоса</span>. Сердце стало стучать так, что, казалось, его грохот способен выдать Вас в любую минуту.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers31,
    "Выбрать направление движения": mainQuest_Good_Vipers32,
  })
  currentFunction = mainQuest_Good_Vipers3aaaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers3ab() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись и пошли в <span class="yes">обратном</span> направлении по прямой галерее пещеры. Пол был ровным и Вы, мягко ступая, уверенно шли вперёд, ощупывая впереди себя руками стены пещеры. Скоро Вы вернулись к знакомой развилке.</p><p>Вы прислушались: где-то вдалеке <span class="yes">слева</span> послышались <span class="yes">человеческие голоса</span>. Сердце стало стучать так, что, казалось, его грохот способен выдать Вас в любую минуту.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers31,
    "Выбрать направление движения": mainQuest_Good_Vipers32,
  })
  currentFunction = mainQuest_Good_Vipers3ab
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers31() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers311 })
  currentFunction = mainQuest_Good_Vipers31
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers3a1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers3a11 })
  currentFunction = mainQuest_Good_Vipers3a1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers311() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_226.jpg")
  change_text(
    '<p>Вы увидели перед собой развилку <span class="yes">трёх</span> коридоров пещеры. Как Вы не старались, но разглядеть что бы то ни было впереди не удавалось. Нужно выбрать куда идти.</p>'
  )
  change_buttons({ "Выбрать направление движения": mainQuest_Good_Vipers32 })
  currentFunction = mainQuest_Good_Vipers311
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers3a11() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_226.jpg")
  change_text(
    '<p>Вы увидели перед собой развилку <span class="yes">трёх</span> коридоров пещеры. Как Вы не старались, но разглядеть что бы то ни было впереди не удавалось. Нужно выбрать куда идти.</p>'
  )
  change_buttons({ "Выбрать направление движения": mainQuest_Good_Vipers3a2 })
  currentFunction = mainQuest_Good_Vipers3a11
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers32() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке. Можно пройти <span class="yes">налево</span>, <span class="yes">прямо</span> и <span class="yes">направо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти налево": mainQuest_Good_VipersSettlement,
    "Пойти прямо": mainQuest_Good_Vipers33,
    "Пойти направо": mainQuest_Good_Vipers5ab,
    "Вернуться назад": mainQuest_Good_Vipers2ac,
  })
  currentFunction = mainQuest_Good_Vipers32
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers3a2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке. Можно пройти <span class="yes">налево</span>, <span class="yes">прямо</span> и <span class="yes">направо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти налево": mainQuest_Good_Vipers2ad,
    "Пойти прямо": mainQuest_Good_VipersSettlement1,
    "Пойти направо": mainQuest_Good_Vipers33b,
    "Вернуться назад": mainQuest_Good_Vipers5aaaa,
  })
  currentFunction = mainQuest_Good_Vipers3a2
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers33() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы решили идти <span class="yes">прямо</span>. Однако чем дальше Вы заходили вглубь пещеры, тем больше сомневались в правильности выбранного маршрута. Мысленно вы пели про себя детскую песенку. Упорства на выбранном Вами пути Вам было не занимать. Однако, на этот раз вы ошиблись – в конце концов Вы упёрлись в стенку.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers331,
    "Вернуться обратно к перекрёстку": mainQuest_Good_Vipers332,
  })
  currentFunction = mainQuest_Good_Vipers33
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers33a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 14
  change_time(0)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы окончательно запутались в этих лабиринтах, поскольку развернулись пошли в <span class="yes">обратном</span> направлении. Вы шли невероятно долго и, в конце концов, упёрлись в стенку.</p><p>Усталось взяла верх и Вы упали на пол. Вы пролежали так несколько минут, пока не пришли в себя. Нужно сосредоточиться и выбрать верную дорогу.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers331,
    "Вернуться обратно к перекрёстку": mainQuest_Good_Vipers332,
  })
  currentFunction = mainQuest_Good_Vipers33a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers33b() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">направо</span>. Однако чем дальше Вы заходили вглубь пещеры, тем больше сомневались в правильности выбранного маршрута. Мысленно вы пели про себя детскую песенку. Упорства на выбранном Вами пути Вам было не занимать. Однако, на этот раз вы ошиблись – в конце концов Вы упёрлись в стенку.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers331,
    "Вернуться обратно к перекрёстку": mainQuest_Good_Vipers332,
  })
  currentFunction = mainQuest_Good_Vipers33b
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers331() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers3311 })
  currentFunction = mainQuest_Good_Vipers331
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers3311() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_236.jpg")
  change_text("<p>Тупик как тупик. Глухая стена. Чего Вас сюда понесло?</p>")
  change_buttons({
    "Вернуться обратно к перекрёстку": mainQuest_Good_Vipers332,
  })
  currentFunction = mainQuest_Good_Vipers3311
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers332() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Выругавшись, Вы поплелись <span class="yes">обратно</span> к перекрёстку. Вы дико устали и проклинали всё на свете. Осознавать, что Вы проделали такой путь напрасно, было просто невыносимо. Спустя продолжительное время Вы оказались на знакомой развилке.</p><p>Вы прислушались: где-то далеко <span class="yes">справа</span> послышались <span class="yes">человеческие голоса</span>. Сердце стало стучать так, что, казалось, его грохот способен выдать Вас в любую минуту.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers3321,
    "Выбрать направление движения": mainQuest_Good_Vipers3322,
  })
  currentFunction = mainQuest_Good_Vipers332
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers3321() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers33311 })
  currentFunction = mainQuest_Good_Vipers3321
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers33311() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_226.jpg")
  change_text(
    '<p>Вы увидели перед собой развилку <span class="yes">трёх</span> коридоров пещеры. Как Вы не старались, но разглядеть что бы то ни было впереди не удавалось. Нужно выбрать куда идти.</p>'
  )
  change_buttons({
    "Выбрать направление движения": mainQuest_Good_Vipers3322,
  })
  currentFunction = mainQuest_Good_Vipers33311
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers3322() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке. Можно пройти <span class="yes">налево</span>, <span class="yes">прямо</span> и <span class="yes">направо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти налево": mainQuest_Good_Vipers5ac,
    "Пойти прямо": mainQuest_Good_Vipers2ae,
    "Пойти направо": mainQuest_Good_VipersSettlement2,
    "Вернуться назад": mainQuest_Good_Vipers33a,
  })
  currentFunction = mainQuest_Good_Vipers3322
  setCookie("ccurrentFunction", currentFunction)
}

/* Галерея 4 */
function mainQuest_Good_Vipers4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы решили идти <span class="yes">прямой</span> дорогой, ощупывая руками впереди себя путь. Вскоре стены галереи пещеры разошлись в стороны. По издаваемым Вами звукам Вы поняли, что оказались в зале с высокими потолками.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers41,
    "Выбрать направление движения": mainQuest_Good_Vipers42,
  })
  currentFunction = mainQuest_Good_Vipers4
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers4a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Назад так назад. Вы развернулись и прошли несколько метров в <span class="yes">обратном</span> направлении. Вскоре стены галереи пещеры разошлись в стороны. Вы оказались в уже знакомой зале с высокими потолками.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers41a,
    "Выбрать направление движения": mainQuest_Good_Vipers42a,
  })
  currentFunction = mainQuest_Good_Vipers4a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers4aa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись и вошли в длинный извилистый проход. Попетляв некоторое время, вы вернулись <span class="yes">обратно</span> в уже знакомую <span class="yes">небольшую</span> залу с высокими потолками.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers41aa,
    "Выбрать направление движения": mainQuest_Good_Vipers42aa,
  })
  currentFunction = mainQuest_Good_Vipers4aa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers4aaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись и вошли в <span class="yes">обратном</span> направлении. Вскоре стены галереи пещеры разошлись в стороны. По издаваемым Вами звукам Вы поняли, что оказались в зале с высокими потолками.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers41,
    "Выбрать направление движения": mainQuest_Good_Vipers42,
  })
  currentFunction = mainQuest_Good_Vipers4aaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers4aaaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы пошли <span class="yes">прямо</span> и оказались в довольно длинном извилистом проходе. Преодолев его, Вы почувствовали, что стены галереи пещеры разошлись в стороны. По издаваемым Вами звукам Вы поняли, что оказались в зале с высокими потолками.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers41aa,
    "Выбрать направление движения": mainQuest_Good_Vipers42aa,
  })
  currentFunction = mainQuest_Good_Vipers4aaaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers4aaaaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы пошли <span class="yes">направо</span> и оказались в довольно длинном извилистом проходе. Преодолев его, Вы почувствовали, что стены галереи пещеры разошлись в стороны. По издаваемым Вами звукам Вы поняли, что оказались в зале с высокими потолками.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers41aa,
    "Выбрать направление движения": mainQuest_Good_Vipers42aa,
  })
  currentFunction = mainQuest_Good_Vipers4aaaaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers4aaaaaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы свернули <span class="yes">налево</span> пошли, ощупывая руками впереди себя путь. Вскоре стены галереи пещеры разошлись в стороны. По издаваемым Вами звукам Вы поняли, что оказались в зале с высокими потолками.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers41,
    "Выбрать направление движения": mainQuest_Good_Vipers42,
  })
  currentFunction = mainQuest_Good_Vipers4aaaaaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers4aaaaaaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">направо</span> и прошли около <span class="yes">5 метров</span> на ощупь. Вскоре стены галереи пещеры разошлись в стороны. По издаваемым Вами звукам Вы поняли, что оказались в зале с высокими потолками.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers41a,
    "Выбрать направление движения": mainQuest_Good_Vipers42a,
  })
  currentFunction = mainQuest_Good_Vipers4aaaaaaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers4ab() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">направо</span> и пошли, ощупывая руками впереди себя путь. Вскоре стены галереи пещеры разошлись в стороны. По издаваемым Вами звукам Вы поняли, что оказались в зале с высокими потолками.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers41,
    "Выбрать направление движения": mainQuest_Good_Vipers42,
  })
  currentFunction = mainQuest_Good_Vipers4ab
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers4ac() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">налево</span> и прошли около <span class="yes">5 метров</span> на ощупь. Вскоре стены галереи пещеры разошлись в стороны. По издаваемым Вами звукам Вы поняли, что оказались в зале с высокими потолками.</p><p>Вы прислушались: <span class="yes">ни звука</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers41a,
    "Выбрать направление движения": mainQuest_Good_Vipers42a,
  })
  currentFunction = mainQuest_Good_Vipers4ac
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers41() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers411 })
  currentFunction = mainQuest_Good_Vipers41
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers41a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers411a })
  currentFunction = mainQuest_Good_Vipers41a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers41aa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers411aa })
  currentFunction = mainQuest_Good_Vipers41aa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers411() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_233.jpg")
  change_text(
    '<p>Вы оказались в <span class="yes">небольшой</span> зале с высоченными потолками, с которых спускались сталактиты. Некоторое время Вы заворожено наблюдали за нерукотворной красотой природы.</p><p>Вы видите два пути из этой части пещеры: <span class="yes">прямо</span> и <span class="yes">налево</span>. </p>'
  )
  change_buttons({ "Выбрать направление движения": mainQuest_Good_Vipers42 })
  currentFunction = mainQuest_Good_Vipers411
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers411a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_233.jpg")
  change_text(
    '<p>Вы оказались в <span class="yes">небольшой</span> зале с высоченными потолками, с которых спускались сталактиты. Некоторое время Вы заворожено наблюдали за нерукотворной красотой природы.</p><p>Вы видите два пути из этой части пещеры: <span class="yes">направо</span> или <span class="yes">налево</span>.</p>'
  )
  change_buttons({ "Выбрать направление движения": mainQuest_Good_Vipers42a })
  currentFunction = mainQuest_Good_Vipers411a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers411aa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_233.jpg")
  change_text(
    '<p>Вы оказались в <span class="yes">небольшой</span> зале с высоченными потолками, с которых спускались сталактиты. Некоторое время Вы заворожено наблюдали за нерукотворной красотой природы.</p><p>Вы видите два пути из этой части пещеры: <span class="yes">направо</span> или <span class="yes">прямо</span>.</p>'
  )
  change_buttons({
    "Выбрать направление движения": mainQuest_Good_Vipers42aa,
  })
  currentFunction = mainQuest_Good_Vipers411aa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers42() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы стоите на развилке в <span class="yes">небольшой</span> зале. Можно пройти <span class="yes">прямо</span> или <span class="yes">налево</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти налево": mainQuest_Good_Vipers2a,
    "Пойти прямо": mainQuest_Good_Vipers5,
    "Вернуться назад": mainQuest_Good_Vipers1aaa,
  })
  currentFunction = mainQuest_Good_Vipers42
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers42a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы стоите на развилке в <span class="yes">небольшой</span> зале. Можно пройти <span class="yes">направо</span> или <span class="yes">налево</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти направо": mainQuest_Good_Vipers1aaaa,
    "Пойти налево": mainQuest_Good_Vipers5a,
    "Вернуться назад": mainQuest_Good_Vipers2aa,
  })
  currentFunction = mainQuest_Good_Vipers42a
  setCookie("ccurrentFunction", currentFunction)
} /* К галерее 1           К галерее 5                  К галерее 2      */
function mainQuest_Good_Vipers42aa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы стоите на развилке в <span class="yes">небольшой</span> зале. Можно пройти <span class="yes">прямо</span> или <span class="yes">направо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти направо": mainQuest_Good_Vipers2aaa,
    "Пойти прямо": mainQuest_Good_Vipers1aaaaa,
    "Вернуться назад": mainQuest_Good_Vipers5aa,
  })
  currentFunction = mainQuest_Good_Vipers42aa
  setCookie("ccurrentFunction", currentFunction)
} /* К галерее 2           К галерее 1                  К галерее 5       */

/* Галерея 5 */
function mainQuest_Good_Vipers5() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы пошли <span class="yes">прямо</span> и вошли в длинный извилистый проход. Через несколько минут Ваши руки нащупали выход из галереи. Вы явно оказались в огромной зале – каждый звук, изданный Вами, эхом раскатывался на десятки метров вокруг. Лучше бы Вам вести себя как можно тише.</p><p>Вы прислушались: посторонних звуков вроде <span class="yes">не слышно</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers51,
    "Выбрать направление движения": mainQuest_Good_Vipers52,
  })
  currentFunction = mainQuest_Good_Vipers5
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers5a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">налево</span> и вошли в длинный извилистый проход. Через несколько минут Ваши руки нащупали выход из галереи. Вы явно оказались в огромной зале – каждый звук, изданный Вами, эхом раскатывался на десятки метров вокруг. Лучше бы Вам вести себя как можно тише.</p><p>Вы прислушались: посторонних звуков вроде <span class="yes">не слышно</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers51,
    "Выбрать направление движения": mainQuest_Good_Vipers52,
  })
  currentFunction = mainQuest_Good_Vipers5a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers5aa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись и двинулись в <span class="yes">обратном</span> направлении, войдя в длинный извилистый проход. Через несколько минут Ваши руки нащупали выход из галереи. Вы явно оказались в огромной зале – каждый звук, изданный Вами, эхом раскатывался на десятки метров вокруг. Лучше бы Вам вести себя как можно тише.</p><p>Вы прислушались: посторонних звуков вроде <span class="yes">не слышно</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers51,
    "Выбрать направление движения": mainQuest_Good_Vipers52,
  })
  currentFunction = mainQuest_Good_Vipers5aa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers5aaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись и двинулись в <span class="yes">обратном</span> направлении. Довольно скоро Вы вновь оказались в огромной зале – каждый звук, изданный Вами, эхом раскатывался на десятки метров вокруг.</p><p>Вы прислушались: посторонних звуков вроде <span class="yes">не слышно</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers51a,
    "Выбрать направление движения": mainQuest_Good_Vipers52a,
  })
  currentFunction = mainQuest_Good_Vipers5aaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers5aaaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись и двинулись в <span class="yes">обратном</span> направлении. И вот Вы вновь оказались в огромной зале – каждый звук, изданный Вами, эхом раскатывался на десятки метров вокруг.</p><p>Вы прислушались: посторонних звуков вроде <span class="yes">не слышно</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers51aa,
    "Выбрать направление движения": mainQuest_Good_Vipers52aa,
  })
  currentFunction = mainQuest_Good_Vipers5aaaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers5ab() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">направо</span> и шли некоторое время, мягко ступая и не издавая лишних звуков. Через несколько минут Ваши руки нащупали выход из галереи. Вы явно оказались в <span class="yes">огромной</span> зале – каждый звук, изданный Вами, эхом раскатывался на десятки метров вокруг. Лучше бы Вам вести себя как можно тише.</p><p>Вы прислушались: посторонних звуков вроде <span class="yes">не слышно</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers51aa,
    "Выбрать направление движения": mainQuest_Good_Vipers52aa,
  })
  currentFunction = mainQuest_Good_Vipers5ab
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers5ac() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">налево</span> и шли некоторое время, мягко ступая и не издавая лишних звуков. Через несколько минут Ваши руки нащупали выход из галереи. Вы явно оказались в <span class="yes">огромной</span> зале – каждый звук, изданный Вами, эхом раскатывался на десятки метров вокруг. Лучше бы Вам вести себя как можно тише.</p><p>Вы прислушались: посторонних звуков вроде <span class="yes">не слышно</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers51aa,
    "Выбрать направление движения": mainQuest_Good_Vipers52aa,
  })
  currentFunction = mainQuest_Good_Vipers5ac
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers51() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers511 })
  currentFunction = mainQuest_Good_Vipers51
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers51a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers511a })
  currentFunction = mainQuest_Good_Vipers51a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers51aa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers511aa })
  currentFunction = mainQuest_Good_Vipers51aa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers511() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_234.jpg")
  change_text(
    '<p>Вы оказались в <span class="yes">громаднейшем</span> зале явно нерукотворной природы происхождения. С потолка тянулись к полу многочисленные сталактиты, а навстречу им вырастали из пола пещеры сталагмиты. Иногда эти дивные природные породы сращивались, образовывая колонны невиданной Вами ранее красоты. Можно было бы вечно любоваться этим зрелищем, но Вам необходимо скорее выбраться из этих лабиринтов.</p>'
  )
  change_buttons({ "Выбрать направление движения": mainQuest_Good_Vipers52 })
  currentFunction = mainQuest_Good_Vipers511
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers511a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_234.jpg")
  change_text(
    '<p>Вы оказались в <span class="yes">громаднейшем</span> зале явно нерукотворной природы происхождения. С потолка тянулись к полу многочисленные сталактиты, а навстречу им вырастали из пола пещеры сталагмиты. Иногда эти дивные природные породы сращивались, образовывая колонны невиданной Вами ранее красоты. Можно было бы вечно любоваться этим зрелищем, но Вам необходимо скорее выбраться из этих лабиринтов.</p>'
  )
  change_buttons({ "Выбрать направление движения": mainQuest_Good_Vipers52a })
  currentFunction = mainQuest_Good_Vipers511a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers511aa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_234.jpg")
  change_text(
    '<p>Вы оказались в <span class="yes">громаднейшем</span> зале явно нерукотворной природы происхождения. С потолка тянулись к полу многочисленные сталактиты, а навстречу им вырастали из пола пещеры сталагмиты. Иногда эти дивные природные породы сращивались, образовывая колонны невиданной Вами ранее красоты. Можно было бы вечно любоваться этим зрелищем, но Вам необходимо скорее выбраться из этих лабиринтов.</p>'
  )
  change_buttons({
    "Выбрать направление движения": mainQuest_Good_Vipers52aa,
  })
  currentFunction = mainQuest_Good_Vipers511aa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers52() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке посреди огромного зала пещеры. Можно пройти <span class="yes">налево</span> или <span class="yes">направо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти прямо": mainQuest_Good_Vipers53,
    "Пойти налево": mainQuest_Good_Vipers3aa,
    "Вернуться назад": mainQuest_Good_Vipers4aa,
  })
  currentFunction = mainQuest_Good_Vipers52
  setCookie("ccurrentFunction", currentFunction)
} /*                              К гроту с водой               К галерее 3            К    галерее 4*/
function mainQuest_Good_Vipers52a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке посреди огромного зала пещеры. Можно пройти <span class="yes">прямо</span> или <span class="yes">направо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти прямо": mainQuest_Good_Vipers4aaaa,
    "Пойти направо": mainQuest_Good_Vipers3a,
    "Вернуться назад": mainQuest_Good_Vipers53a,
  })
  currentFunction = mainQuest_Good_Vipers52a
  setCookie("ccurrentFunction", currentFunction)
} /*                              К галерее 4               К галерее 3            К гроту с водой */
function mainQuest_Good_Vipers52aa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке посреди огромного зала пещеры. Можно пройти <span class="yes">налево</span> или <span class="yes">направо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти налево": mainQuest_Good_Vipers53aa,
    "Пойти направо": mainQuest_Good_Vipers4aaaaa,
    "Вернуться назад": mainQuest_Good_Vipers3aaa,
  })
  currentFunction = mainQuest_Good_Vipers52aa
  setCookie("ccurrentFunction", currentFunction)
} /*                              К гроту с водой              К галерее 4          К галерее 3             */
/* Грот с водой */
function mainQuest_Good_Vipers53() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы покинули <span class="yes">большую</span> залу пещеры и пошли прямо. Вы шли, как и раньше, на ощупь, шаря руками впереди себя. Внезапно Ваши руки оказались в <span class="yes">воде</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers531,
    "Выбрать направление движения": mainQuest_Good_Vipers532,
  })
  currentFunction = mainQuest_Good_Vipers53
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers53a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы покинули <span class="yes">большую</span> залу пещеры и пошли в <span class="yes">обратном</span> направлении. Вы шли, как и раньше, на ощупь, шаря руками впереди себя. Внезапно Ваши руки вновь оказались в <span class="yes">воде</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers531,
    "Выбрать направление движения": mainQuest_Good_Vipers532,
  })
  currentFunction = mainQuest_Good_Vipers53a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers53aa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы покинули <span class="yes">большую</span> залу пещеры и пошли <span class="yes">налево</span>. Вы шли на ощупь, шаря руками впереди себя. Внезапно Ваши руки оказались в <span class="yes">воде</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers531,
    "Выбрать направление движения": mainQuest_Good_Vipers532,
  })
  currentFunction = mainQuest_Good_Vipers53aa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers531() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers5311 })
  currentFunction = mainQuest_Good_Vipers531
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers5311() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_235.jpg")
  change_text(
    '<p>Проход, по которому Вы шли, вывел Вас к небольшому <span class="yes">гроту</span> с водой. Свет отражался от переливающейся глади поземных вод и зайчиками разбегался по стенам пещеры.</p>'
  )
  change_buttons({ "Выбрать направление движения": mainQuest_Good_Vipers532 })
  currentFunction = mainQuest_Good_Vipers5311
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers532() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы стоите возле подземного озера. Дальше пути нет. Нырять Вы не решились, поскольку не умели  плавать. Придётся возвращаться <span class="yes">обратно</span>.</p>'
  )
  change_buttons({ "Вернуться назад": mainQuest_Good_Vipers5aaa })
  currentFunction = mainQuest_Good_Vipers532
  setCookie("ccurrentFunction", currentFunction)
}

/* Галерея 6 */
function mainQuest_Good_Vipers6() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">направо</span>. Ход был извилистый, но с ровной и прямой дорогой. В Вашем сердце поселилась надежда на скорое окончание, когда внезапно Вы нащупали перед собой развилку.</p><p>Вы прислушались: <span class="yes">слева</span> от Вас, из глубины пещеры доносились <span class="yes">негромкие звуки</span>. Похоже на пощёлкивание.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers61,
    "Выбрать направление движения": mainQuest_Good_Vipers62,
  })
  currentFunction = mainQuest_Good_Vipers6
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers6a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись и пошли <span class="yes">в обратном</span> направлении. Ход был извилистый, но с ровной и прямой дорогой. Внезапно Вы нащупали перед собой  развилку.</p><p>Вы прислушались: <span class="yes">слева</span> от Вас, из глубины пещеры доносились <span class="yes">негромкие звуки</span>. Похоже на пощёлкивание.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers61,
    "Выбрать направление движения": mainQuest_Good_Vipers62,
  })
  currentFunction = mainQuest_Good_Vipers6a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers6aa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">налево</span>. Ход был извилистый, но с ровной и прямой дорогой. В Вашем сердце поселилась надежда на скорое окончание, когда внезапно Вы нащупали перед собой развилку.</p><p>Вы прислушались: <span class="yes">слева</span> от Вас, из глубины пещеры доносились <span class="yes">негромкие звуки</span>. Похоже на пощёлкивание.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers61,
    "Выбрать направление движения": mainQuest_Good_Vipers62,
  })
  currentFunction = mainQuest_Good_Vipers6aa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers6aaa() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы пошли <span class="yes">вперёд</span>. Ход был извилистый, но с ровной и прямой дорогой. В Вашем сердце поселилась надежда на скорое окончание, когда внезапно Вы нащупали перед собой развилку.</p><p>Вы прислушались: <span class="yes">слева</span> от Вас, из глубины пещеры доносились <span class="yes">негромкие звуки</span>. Похоже на пощёлкивание.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers61,
    "Выбрать направление движения": mainQuest_Good_Vipers62,
  })
  currentFunction = mainQuest_Good_Vipers6aaa
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers6a1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Развернувшись назад, Вы вернулись уже знакомым маршрутом <span class="yes">обратно</span>. Наконец Ваши руки нащупали предыдущую развилку.</p><p>Вы прислушались: <span class="yes">позади</span> Вас, из глубины пещеры доносились <span class="yes">негромкие звуки</span>. Похоже на пощёлкивание.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers61a,
    "Выбрать направление движения": mainQuest_Good_Vipers62a,
  })
  currentFunction = mainQuest_Good_Vipers6a1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers6a2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Развернувшись назад, Вы вернулись уже знакомым маршрутом <span class="yes">обратно</span>. Наконец Ваши руки нащупали предыдущую развилку.</p><p>Вы прислушались: <span class="yes">справа</span> от Вас, из глубины пещеры доносились <span class="yes">негромкие звуки</span>. Похоже на пощёлкивание.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers61a1,
    "Выбрать направление движения": mainQuest_Good_Vipers62a1,
  })
  currentFunction = mainQuest_Good_Vipers6a2
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers6a3() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">налево</span> и вернулись уже знакомым маршрутом к <span class="yes">предыдущему</span> перекрёстку. Наконец Ваши руки нащупали развилку.</p><p>Вы прислушались: <span class="yes">справа</span> от Вас, из глубины пещеры доносились <span class="yes">негромкие звуки</span>. Похоже на пощёлкивание.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers61a1,
    "Выбрать направление движения": mainQuest_Good_Vipers62a1,
  })
  currentFunction = mainQuest_Good_Vipers6a3
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers61() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers611 })
  currentFunction = mainQuest_Good_Vipers61
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers61a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers611a })
  currentFunction = mainQuest_Good_Vipers61a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers61a1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers611a1 })
  currentFunction = mainQuest_Good_Vipers61a1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers611() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_227.jpg")
  change_text(
    '<p>Вы увидели перед собой развилку <span class="yes">двух</span> коридоров пещеры. Как Вы не старались, но разглядеть что бы то ни было впереди не удавалось. Нужно выбрать куда идти. </p>'
  )
  change_buttons({ "Выбрать направление движения": mainQuest_Good_Vipers62 })
  currentFunction = mainQuest_Good_Vipers611
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers611a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_228.jpg")
  change_text(
    '<p>Вы увидели перед собой развилку <span class="yes">двух</span> коридоров пещеры. Как Вы не старались, но разглядеть что бы то ни было впереди не удавалось. Нужно выбрать куда идти. </p>'
  )
  change_buttons({ "Выбрать направление движения": mainQuest_Good_Vipers62a })
  currentFunction = mainQuest_Good_Vipers611a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers611a1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_229.jpg")
  change_text(
    '<p>Вы увидели перед собой развилку <span class="yes">двух</span> коридоров пещеры. Как Вы не старались, но разглядеть что бы то ни было впереди не удавалось. Нужно выбрать куда идти. </p>'
  )
  change_buttons({
    "Выбрать направление движения": mainQuest_Good_Vipers62a1,
  })
  currentFunction = mainQuest_Good_Vipers611a1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers62() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке. Можно пройти <span class="yes">налево</span> или <span class="yes">прямо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти налево": mainQuest_Good_Vipers621,
    "Пойти прямо": mainQuest_Good_Vipers7,
    "Вернуться назад": mainQuest_Good_Vipers1a,
  })
  currentFunction = mainQuest_Good_Vipers62
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers62a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке. Можно пройти <span class="yes">налево</span> или <span class="yes">направо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти налево": mainQuest_Good_Vipers7c,
    "Пойти направо": mainQuest_Good_Vipers1aa,
    "Вернуться назад": mainQuest_Good_Vipers621a,
  })
  currentFunction = mainQuest_Good_Vipers62a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers62a1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке. Можно пройти <span class="yes">вперёд</span> или <span class="yes">направо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти вперёд": mainQuest_Good_Vipers1aa1,
    "Пойти направо": mainQuest_Good_Vipers621b,
    "Вернуться назад": mainQuest_Good_Vipers7b,
  })
  currentFunction = mainQuest_Good_Vipers62a1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers621() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">налево</span>. По мере продвижения вперёд <span class="yes">щелканье</span> усиливалось. В конце концов, вы поняли, что стенки коридора расходятся в разные стороны. Наверняка это <span class="yes">большой зал</span> пещеры.</p><p>Щелчки слышатся прямо <span class="yes">перед Вами</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers6211,
    "Аккуратно пройти вперёд": mainQuest_Good_Vipers6212,
    "Вернуться назад": mainQuest_Good_Vipers6a1,
  })
  currentFunction = mainQuest_Good_Vipers621
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers621a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись и стали шагать в <span class="yes">обратном</span> направлении. По мере продвижения вперёд <span class="yes">щелканье</span> усиливалось. В конце концов, вы поняли, что стенки коридора расходятся в разные стороны. Наверняка это <span class="yes">большой зал</span> пещеры.</p><p>Щелчки слышатся прямо <span class="yes">перед Вами</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers6211,
    "Аккуратно пройти вперёд": mainQuest_Good_Vipers6212,
    "Вернуться назад": mainQuest_Good_Vipers6a1,
  })
  currentFunction = mainQuest_Good_Vipers621a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers621b() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">направо</span> и стали шагать вглубь пещеры. По мере продвижения вперёд <span class="yes">щелканье</span> усиливалось. В конце концов, вы поняли, что стенки коридора расходятся в разные стороны. Наверняка это <span class="yes">большой зал</span> пещеры.</p><p>Щелчки слышатся прямо <span class="yes">перед Вами</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers6211,
    "Аккуратно пройти вперёд": mainQuest_Good_Vipers6212,
    "Вернуться назад": mainQuest_Good_Vipers6a1,
  })
  currentFunction = mainQuest_Good_Vipers621b
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers6211() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers62111 })
  currentFunction = mainQuest_Good_Vipers6211
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers62111() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_230.jpg")
  change_text(
    '<p>То, что Вы увидели, повергло Вас в ужас. Вы оказались в <span class="yes">большой зале</span> перед обрывом, ведущим в логово огромных <span class="yes">скорпионов</span>. Увидев свет, они оглушительно заскрежетали своими чудовищными клешнями.</p><p>Вы сразу себе представили мучительную смерть, которая Вас ждала бы, не рискни Вы осветить эту часть пещеры.</p>'
  )
  change_buttons({ "Вернуться назад": mainQuest_Good_Vipers6a1 })
  currentFunction = mainQuest_Good_Vipers62111
  setCookie("ccurrentFunction", currentFunction)
}

/* Галерея 7 */
function mainQuest_Good_Vipers7() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы пошли <span class="yes">прямо</span>. На этот раз Вы шли настолько долго, что потеряли всякую надежду на окончание этой галереи пещеры. Когда Вы уже решили поворачивать обратно, Ваши руки нащупали очередную развилку. Вы прислушались: <span class="yes">справа</span> от Вас из глубины пещеры доносились какие-то <span class="yes">свистящие звуки</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers71,
    "Выбрать направление движения": mainQuest_Good_Vipers72,
  })
  currentFunction = mainQuest_Good_Vipers7
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers7a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>В конце концов, либо страх, либо благоразумие взяли верх. Вы, отталкиваясь руками от выступов, стали ползти <span class="yes">обратно</span>. Сначала было невероятно трудно, но Вы справились. Лаз расширился и вы смогли развернуться и продолжили движение обратно к перекрёстку.</p><p>Некоторое время спустя Вы вернулись к развилке.</p><p>Вы прислушались: <span class="yes">позади</span> Вас из глубины пещеры доносились какие-то <span class="yes">свистящие звуки</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers71a,
    "Выбрать направление движения": mainQuest_Good_Vipers72a,
  })
  currentFunction = mainQuest_Good_Vipers7a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers7b() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись и стали шагать в <span class="yes">обратном</span> направлении. Вы шли довольно долго, но маршрут был Вам знаком, поэтому волнения не было. В конце концов, Ваши руки нащупали очередную развилку. Вы прислушались: <span class="yes">справа</span> от Вас из глубины пещеры доносились какие-то <span class="yes">свистящие звуки</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers71,
    "Выбрать направление движения": mainQuest_Good_Vipers72,
  })
  currentFunction = mainQuest_Good_Vipers7b
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers7c() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">налево</span> и продолжили путь. На этот раз Вы шли настолько долго, что потеряли всякую надежду на окончание этой галереи пещеры. Когда Вы уже решили поворачивать обратно, Ваши руки нащупали очередную развилку. Вы прислушались: <span class="yes">справа</span> от Вас из глубины пещеры доносились какие-то <span class="yes">свистящие звуки</span>.</p>'
  )
  change_buttons({
    "Извлечь огонь из зажигалки": mainQuest_Good_Vipers71,
    "Выбрать направление движения": mainQuest_Good_Vipers72,
  })
  currentFunction = mainQuest_Good_Vipers7c
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers71() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers711 })
  currentFunction = mainQuest_Good_Vipers71
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers71a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_Vipers711a })
  currentFunction = mainQuest_Good_Vipers71a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers711() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_229.jpg")
  change_text(
    '<p>Вы увидели перед собой развилку <span class="yes">двух</span> коридоров пещеры. Как Вы не старались, но разглядеть что бы то ни было впереди не удавалось. Нужно выбрать куда идти. </p>'
  )
  change_buttons({ "Выбрать направление движения": mainQuest_Good_Vipers72 })
  currentFunction = mainQuest_Good_Vipers711
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers711a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_228.jpg")
  change_text(
    '<p>Вы увидели перед собой развилку <span class="yes">двух</span> коридоров пещеры. Как Вы не старались, но разглядеть что бы то ни было впереди не удавалось. Нужно выбрать куда идти. </p>'
  )
  change_buttons({ "Выбрать направление движения": mainQuest_Good_Vipers72a })
  currentFunction = mainQuest_Good_Vipers711a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers72() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке. Можно пройти <span class="yes">направо</span> или <span class="yes">прямо</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти направо": mainQuest_Good_Vipers721,
    "Пойти прямо": mainQuest_Good_VipersTrapDeath,
    "Вернуться назад": mainQuest_Good_Vipers6a2,
  })
  currentFunction = mainQuest_Good_Vipers72
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers72a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы на развилке. Можно пройти <span class="yes">направо</span> или <span class="yes">налево</span>. Конечно, всегда можно вернуться <span class="yes">назад</span>. Выбор за Вами.</p>'
  )
  change_buttons({
    "Пойти направо": mainQuest_Good_VipersTrapDeath1,
    "Пойти налево": mainQuest_Good_Vipers6a3,
    "Вернуться назад": mainQuest_Good_Vipers721a,
  })
  currentFunction = mainQuest_Good_Vipers72a
  setCookie("ccurrentFunction", currentFunction)
}
/* В ловушку к Когтю Смерти */
function mainQuest_Good_Vipers721() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">направо</span>. Через несколько метров туннель начал превращаться в лаз. Наконец проход стал настолько узким, что лезть по нему можно было  только протянув руки вперёд. <span class="yes">Сопение</span> впереди усиливалось, <span class="yes">зажигалка</span> была у Вас в кармане брюк, достать её в таком узком пространстве было невозможно. Вам стало страшно. Может повернуть <span class="yes">назад</span>? Мало ли что ожидает Вас в конце лаза? А вдруг Вы застрянете? Тогда Вам уже никто не поможет. Хотя по лёгкому сквозняку Вы чувствуете, что ход вот-вот закончится.</p>'
  )
  change_buttons({
    "Лезть дальше": mainQuest_Good_Vipers7211,
    "Вернуться назад": mainQuest_Good_Vipers7a,
  })
  currentFunction = mainQuest_Good_Vipers721
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers721a() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы развернулись и вновь пошли в <span class="yes">обратном</span> направлении. Через несколько метров туннель начал превращаться в лаз. Наконец проход стал настолько узким, что лезть по нему можно было  только протянув руки вперёд. <span class="yes">Сопение</span> впереди усиливалось, <span class="yes">зажигалка</span> была у Вас в кармане брюк, достать её в таком узком пространстве было невозможно. Вам снова стало страшно. Вы опять задумались над тем, а не повернуть ли <span class="yes">обратно</span> к перекрёстку? По лёгкому сквозняку Вы понимали, что ход вот-вот закончится.</p>'
  )
  change_buttons({
    "Лезть дальше": mainQuest_Good_Vipers7211,
    "Вернуться назад": mainQuest_Good_Vipers7a,
  })
  currentFunction = mainQuest_Good_Vipers721a
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_Vipers7211() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  lower_health(5)
  change_image("img/revenge/pic_224.jpg")
  change_text(
    '<p>Вы упорно ползли <span class="yes">вперёд</span>. Вашему стремлению можно было только позавидовать. Очень скоро Вы действительно нащупали окончание лаза и смогли выбраться из узкого туннеля. Вы были просто счастливы, что не застряли, хотя <span class="yes">сильно ободрали кожу</span> на локтях и коленях, разорвав при этом одежду. <span class="yes">Сопение</span> было совсем близко.</p>'
  )
  change_buttons({
    "На ощупь пробираться дальше": mainQuest_Good_VipersDeathClaw,
    "Извлечь огонь из зажигалки": mainQuest_Good_VipersDeathClaw1,
  })
  currentFunction = mainQuest_Good_Vipers7211
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_VipersDeathClaw1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_225.jpg")
  change_text(
    '<p>Вы нащупали в кармане <span class="yes">зажигалку</span>, достали её и чиркнули колёсиком по кремнию. Огонь озарил пространство перед Вами, заставить на мгновение закрыть глаза от яркого света.</p>'
  )
  change_buttons({ "Открыть глаза": mainQuest_Good_VipersDeathClaw11 })
  currentFunction = mainQuest_Good_VipersDeathClaw1
  setCookie("ccurrentFunction", currentFunction)
}

/*  Поселение Гадюк */
function mainQuest_Good_VipersSettlement() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 15
  change_time(0)
  change_image("img/revenge/pic_238.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">налево</span> и медленно пошли на звук далёких голосов. Постепенно в вашу пещеру начал проникать дневной свет. Голоса становились всё ближе. И вот Вы оказались довольно близко к <span class="yes">выходу</span> из пещеры. Вы увидели напротив выхода группу злобных <span class="yes">отморозков</span>, которые стерегли вход в лагерь.</p><p>Они Вас не видели, так как тьма пещеры Вас надёжно укрывала, однако лагерь перед Вами был как на ладони. Он был укрыт от внешнего мира непроходимыми горами, и лишь пещера, которой Вы прошли, была единственным проходом к этому надёжному укрытию. Это <span class="yes">поселение</span> напоминало большую общину дикарей. Мужчины носили странную броню из костей животных и людей. Каждый рейдер был покрыт причудливыми узорами татуировок. Они были вооружены преимущественно копьями, ножами и луками, однако, некоторые носили и огнестрельное вооружение.</p><p>Также Вы увидели в лагере женщин и детей. Последние резвились на поляне слева от входа в Вашу пещеру и всё время норовили юркнуть в проход, но охрана их постоянно отгоняла.</p><p><span class="yes">Вы обнаружили главный лагерь Гадюк</span>. Агент рейдеров в <span class="yes">Хабе</span> не соврал. Теперь нужно было доставить эту ценную информацию в <span class="yes">Лост-Хиллз</span>.</p>'
  )
  change_buttons({
    "Вернуться назад к входу в пещеру": mainQuest_Good_VipersComeback,
  })
  currentFunction = mainQuest_Good_VipersSettlement
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_VipersSettlement1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 15
  change_time(0)
  change_image("img/revenge/pic_238.jpg")
  change_text(
    '<p>Вы медленно пошли <span class="yes">прямо</span> на звук далёких голосов. Постепенно в вашу пещеру начал проникать дневной свет. Голоса становились всё ближе. И вот Вы оказались довольно близко к <span class="yes">выходу</span> из пещеры. Вы увидели напротив выхода группу злобных <span class="yes">отморозков</span>, которые стерегли вход в лагерь.</p><p>Они Вас не видели, так как тьма пещеры Вас надёжно укрывала, однако лагерь перед Вами был как на ладони. Он был укрыт от внешнего мира непроходимыми горами, и лишь пещера, которой Вы прошли, была единственным проходом к этому надёжному укрытию. Это <span class="yes">поселение</span> напоминало большую общину дикарей. Мужчины носили странную броню из костей животных и людей. Каждый рейдер был покрыт причудливыми узорами татуировок. Они были вооружены преимущественно копьями, ножами и луками, однако, некоторые носили и огнестрельное вооружение.</p><p>Также Вы увидели в лагере женщин и детей. Последние резвились на поляне слева от входа в Вашу пещеру и всё время норовили юркнуть в проход, но охрана их постоянно отгоняла.</p><p><span class="yes">Вы обнаружили главный лагерь Гадюк</span>. Агент рейдеров в <span class="yes">Хабе</span> не соврал. Теперь нужно было доставить эту ценную информацию в <span class="yes">Лост-Хиллз</span>.</p>'
  )
  change_buttons({
    "Вернуться назад к входу в пещеру": mainQuest_Good_VipersComeback,
  })
  currentFunction = mainQuest_Good_VipersSettlement1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_VipersSettlement2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 15
  change_time(0)
  change_image("img/revenge/pic_238.jpg")
  change_text(
    '<p>Вы повернули <span class="yes">направо</span> и медленно пошли на звук далёких голосов. Постепенно в вашу пещеру начал проникать дневной свет. Голоса становились всё ближе. И вот Вы оказались довольно близко к <span class="yes">выходу</span> из пещеры. Вы увидели напротив выхода группу злобных <span class="yes">отморозков</span>, которые стерегли вход в лагерь.</p><p>Они Вас не видели, так как тьма пещеры Вас надёжно укрывала, однако лагерь перед Вами был как на ладони. Он был укрыт от внешнего мира непроходимыми горами, и лишь пещера, которой Вы прошли, была единственным проходом к этому надёжному укрытию. Это <span class="yes">поселение</span> напоминало большую общину дикарей. Мужчины носили странную броню из костей животных и людей. Каждый рейдер был покрыт причудливыми узорами татуировок. Они были вооружены преимущественно копьями, ножами и луками, однако, некоторые носили и огнестрельное вооружение.</p><p>Также Вы увидели в лагере женщин и детей. Последние резвились на поляне слева от входа в Вашу пещеру и всё время норовили юркнуть в проход, но охрана их постоянно отгоняла.</p><p><span class="yes">Вы обнаружили главный лагерь Гадюк</span>. Агент рейдеров в <span class="yes">Хабе</span> не соврал. Теперь нужно было доставить эту ценную информацию в <span class="yes">Лост-Хиллз</span>.</p>'
  )
  change_buttons({
    "Вернуться назад к входу в пещеру": mainQuest_Good_VipersComeback,
  })
  currentFunction = mainQuest_Good_VipersSettlement2
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Good_VipersComeback() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 16
  change_time(0)
  if (Lip === true) {
    change_image("img/revenge/pic_237.jpg")
    change_text(
      '<p>Стараясь не дышать, Вы аккуратно пятились в обратном направлении. Когда голоса <span class="yes">рейдеров</span> начали слабеть, Вы развернулись и побежали ко входу, освещая себе дорогу зажигалкой.</p><p>Теперь Вы безошибочно определяли дорогу и быстро добрались до начальной точки входа.</p><p>Ваш спутник – <span class="yes">Лип</span> – ждал Вас у выхода, зорко охраняя  его от врагов. Он бросил Вам лишь одну фразу:</p><p>- Готово?</p><p>- Готово, - ответили Вы. – Бежим!</p><p>Вместе вы побежали по тропинке со всех ног, стремясь покинуть это проклятое место как можно скорее, ведь <span class="yes">задание</span> было <span class="yes">выполнено</span>.</p>'
    )
  } else {
    change_image("img/revenge/pic_237a.jpg")
    change_text(
      '<p>Стараясь не дышать, Вы аккуратно пятились в обратном направлении. Когда голоса <span class="yes">рейдеров</span> начали слабеть, Вы развернулись и побежали ко входу, освещая себе дорогу зажигалкой.</p><p>Теперь Вы безошибочно определяли дорогу и быстро добрались до начальной точки входа.</p><p>Выбравшись из пещеры, Вы осмотрелись по сторонам, но никого не увидели. Вы побежали по тропинке со всех ног, стремясь покинуть это проклятое место как можно скорее, ведь <span class="yes">задание</span> было <span class="yes">выполнено</span>.</p>'
    )
  }
  change_buttons({ "Ускорить ход": mainQuest_Good_FinalBattle })
  currentFunction = mainQuest_Good_VipersComeback
  setCookie("ccurrentFunction", currentFunction)
}

function mainQuest_Bad_Hendo4() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  time = 12
  change_time(0)
  change_image("img/revenge/pic_220b.jpg")
  change_text(
    '<p>Ночь прошла спокойно. Наспех позавтракав, Вы вместе со своим <span class="yes">спутником</span> отправились дальше, на север. Примерно к <span class="yes">полудню</span> Вы достигли точки назначения. Вы подошли к подножью горной стены, растянувшейся на запад и восток. Без знания, где вход в пещеру, ведущую к <span class="yes">поселению</span> рейдеров, можно было бы месяцами ходить по <span class="yes">Пустоши</span>, ища <span class="yes">убежище Гадюк</span>.</p><p>Недалеко от входа в пещеру стояло <span class="yes">трое</span> хорошо вооружённых <span class="yes">рейдеров</span>. Где-то там - в конце лабиринта главная цель Вашего долгого приключения. <span class="yes">Охрана</span> у пещеры поприветствовала <span class="yes">Хэндо</span> и молча, уставилась на Вас.</p><p>Ваш <span class="yes">спутник</span> сказал, что Вы направляетесь на <span class="yes">Великое испытание</span> к жрецу <span class="yes">Аспиду</span>. Лица <span class="yes">рейдеров</span> приняли суеверное выражение и они расступились.</p>'
  )
  change_buttons({
    "Войти в сеть пещер вместе с Хэндо": mainQuest_Bad_Vipers,
  })
  currentFunction = mainQuest_Bad_Hendo4
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Vipers() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_time(1)
  change_image("img/revenge/pic_322.jpg")
  change_text(
    '<p>Вместе с <span class="yes">Хэндо</span> Вы вошли в мрачное подземелье. Ваш <span class="yes">спутник</span> зажёг факел и пошёл впереди, бесконечно рассказывая Вам о величии вождя <span class="yes">Аспида</span>. Ход то сужался, то расширялся. Вы не слышали ни звука и спокойно шли во мрак, не отрывая взгляда от рейдера.</p><p>По пути Вам встретилось несколько развилок. Ваш спутник неизменно держался <span class="yes">левой</span> стороны при выборе направления движения. Вы шли довольно долго, при этом <span class="yes">Хэндо</span> бесконечно болтал, когда, наконец, Вы услышали ключевую фразу:</p><p>- Там, - не сбавляя шаг, <span class="yes">Хэндо</span> указал на длинный туннель пещеры. – Через несколько метров будет <span class="yes">выход</span> из пещеры. Там дом…</p><p><span class="yes">Рейдер</span> ускорил шаг. Видимо его неудержимо тянуло желание поскорее вернуться в поселение.</p><p>Ваше сердце стало лихорадочно биться. Вот он – момент истины! Или Вы <span class="yes">прикончите Хэндо</span> прямо сейчас или выйдете с ним в <span class="yes">поселение</span>, и там придётся импровизировать. Второй вариант был явно авантюрным и смертельно опасным. При этом времени на раздумье не было… от слова «совсем».</p>'
  )
  change_buttons({
    "Убить Хэндо": mainQuest_Bad_Vipers1,
    "Выйти из пещер вместе с рейдером": mainQuest_Bad_Vipers2,
  })
  currentFunction = mainQuest_Bad_Vipers
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Vipers1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_238.jpg")
  change_text(
    '<p>Рисковать было совсем ни к чему. Вы были уже у цели. Оставалось сделать несколько шагов к ней. На пути стоял только <span class="yes">Хэндо</span>.</p><p>Бесшумно вытащив свой нож, Вы ударили им <span class="yes">рейдера</span> в район печени, зажав другой рукой ему рот. Второй удар Вы нанесли в сердце. Враг был мёртв. В этой нечестной схватке Вы победили. Вы успокаивали свой разум тем, что это был враг, а Вы – разведчик. Только от Ваших действий зависел успех всей операции. Но это чувство… чувство стыда от удара исподтишка не покидало.</p><p>Но не время было рассыпаться. Затушив факел, Вы медленно шли на звук далёких голосов. Постепенно в вашу пещеру начал проникать дневной свет. Голоса становились всё ближе. И вот Вы оказались довольно близко к <span class="yes">выходу</span> из пещеры. Вы увидели напротив выхода группу злобных <span class="yes">отморозков</span>, которые стерегли вход в лагерь.</p><p>Они Вас не видели, так как тьма пещеры Вас надёжно укрывала, однако лагерь перед Вами был как на ладони. Он был укрыт от внешнего мира непроходимыми горами, и лишь пещера, которой Вы прошли, была единственным проходом к этому надёжному укрытию. Это <span class="yes">поселение</span> напоминало большую общину дикарей. Мужчины носили странную броню из костей животных и людей. Каждый рейдер был покрыт причудливыми узорами татуировок. Они были вооружены преимущественно копьями, ножами и луками, однако, некоторые носили и огнестрельное вооружение.</p><p>Также Вы увидели в лагере женщин и детей. Последние резвились на поляне слева от входа в Вашу пещеру и всё время норовили юркнуть в проход, но охрана их постоянно отгоняла.</p><p><span class="yes">Вы обнаружили главный лагерь Гадюк</span>. Ваша миссия выполнена. Теперь нужно было доставить эту ценную информацию в <span class="yes">Лост-Хиллз</span>.</p>'
  )
  change_buttons({
    "Вернуться назад к входу в пещеру": mainQuest_Good_VipersComeback,
  })
  currentFunction = mainQuest_Bad_Vipers1
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Vipers2() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_238.jpg")
  change_text(
    '<p>Вы так и не смогли заставить себя ударить Вашего <span class="yes">спутника</span> сзади, хотя и понимали, что, скорее всего, ставите крест на успехе всей операции.</p><p><span class="yes">Хэндо</span> шёл уверенной походкой, освещая себе и Вам путь. И вот солнечный свет разрезал мрак. Вы увидели напротив выхода <span class="yes">четверых</span> злобных <span class="yes">отморозков</span>, которые стерегли вход в <span class="yes">лагерь</span>.</p><p>Они пропустили Вас и Вашего спутника и вы вошли в поселение. <span class="yes">Лагерь</span> был укрыт от внешнего мира непроходимыми горами, и лишь пещера, которой вы прошли, была единственным проходом к этому надёжному укрытию. Он напоминал большое поселение дикарей. Мужчины носили странную броню из костей животных и людей. Каждый рейдер был покрыт причудливыми узорами татуировок. Они были вооружены преимущественно копьями, ножами и луками, однако, некоторые носили и огнестрельное вооружение.</p><p>Также Вы увидели в лагере женщин и детей. Последние резвились на поляне слева от входа в пещеру и всё время норовили юркнуть в проход, но <span class="yes">охрана</span> их постоянно отгоняла.</p>'
  )
  change_buttons({
    "Идти за Хэндо к центру поселения": mainQuest_Bad_Vipers21,
  })
  currentFunction = mainQuest_Bad_Vipers2
  setCookie("ccurrentFunction", currentFunction)
}
function mainQuest_Bad_Vipers21() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  change_image("img/revenge/pic_323.jpg")
  change_text(
    '<p>Увидев чужака в <span class="yes">лагере</span>, его жители бросали свои дела и молча, шли за Вами. Постепенно вокруг Вас и <span class="yes">Хэндо</span> образовался круг. Вы остановились. Постепенно толпа стала расступаться и Вы увидели перед собой их <span class="yes">вождя</span>.</p><p>Это был величественный воин в необычных костяных доспехах, голова его была увенчана змеиным черепом с перьями, а с плеч спадала накидка из змеиной кожи. <span class="yes">Хэндо</span> припал на колено. Вы решили последовать его примеру.</p><p>- Кого ты привёл, <span class="yes">Хэндо</span>? – спросил <span class="yes">вождь</span> у Вашего спутника.</p><p>- Я хочу представить, тебе великий <span class="yes">Аспид</span>, - произнёс <span class="yes">Хэндо</span>, указывая на Вас. – Человека, который может послужить нашему народу. Его способности незаурядны.</p><p><span class="yes">Аспид</span> смотрел на Вас, словно пронзая взглядом. Вам стало не по себе…</p><p>Наконец он молвил:</p><p>- Я вижу насквозь его чёрную душонку! Есть только один способ выяснить истинную суть этого человека. – <span class="yes">Жрец</span> вытащил из поясной сумки <span class="yes">флакон</span> и бросил его Вам. – Пей!</p>'
  )
  change_buttons({
    Выпить: mainQuest_Good_FinalBattleAloneDeath,
    Отказаться: mainQuest_Good_FinalBattleAloneDeath1,
  })
  currentFunction = mainQuest_Bad_Vipers21
  setCookie("ccurrentFunction", currentFunction)
}

function mainQuest_Good_FinalBattleAloneDeath() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  day += 5
  change_time(0)
  death()
  change_image("img/revenge/pic_death.jpg")
  change_text(
    '<p>Делать нечего. Вам только и оставалось, что принять <span class="yes">снадобье</span> и довериться судьбе. Вы, поморщившись, залпом опорожнили флакон.</p><p>Через минуту Вы погрузились в странный транс. Отовсюду стали выползать <span class="yes">змеи</span>. Они овивали Ваше тело, сжимали Ваши руки и ноги. Вам было трудно дышать. Череда галлюцинаций сводила с ума. Весь мир крутился вокруг Вас. Вы были как белка в колесе.</p><p>Вы старались удержаться руками за землю. Но не могли. Вас тащило со страшной центробежной силой. Вас начало тошнить. Цвета постоянно менялись… Вы видели лица друзей. Они сменялись злобными рожами врагов. Слух резала безумная какофония из криков, лязга и белого шума.</p><p>На <span class="yes">пятый</span> день Ваш обессиленный от яда организм отказал и Вы погибли.</p>'
  )
  change_buttons({ "Игра окончена": restart })
  $("#key_save").attr("id", "key_save_negative")
}
function mainQuest_Good_FinalBattleAloneDeath1() {
  $("body,html").animate({ scrollTop: 0 }, 800)
  death()
  change_image("img/revenge/pic_261.jpg")
  change_text(
    '<p>Вы швырнули <span class="yes">флакон</span> о землю. Лёгкий пузырёк разлетелся на тысячу осколков, а содержимое быстро впиталось в землю. Со всех сторон послышался угрожающий вой. <span class="yes">Аспид</span> нахмурился и громогласно крикнул:</p><p>- Враг! Враг пробрался в самое сердце, в наше  святое поселение!</p><p>Толпа загудела и потянула к Вам свои руки.</p><p>В <span class="yes">Яму</span>, выродка, - кричал <span class="yes">Аспид</span>. – В <span class="yes">Яму</span> его! В <span class="yes">Яму</span>! Очистить общину от скверны.</p><p>Вы не могли ничего сделать. Два десятка рук схватили Вас и потащили к <span class="yes">Яме</span>. Вы пытались вывернуться, но тщетно было противостоять многочисленной толпе. Они сбросили Вас с края в <span class="yes">Яму</span>.</p><p>Пролетев несколько метров, Вы упали на спину. Что-то противно хрустнуло и Вы больше не чувствовали рук и ног. Но настоящий ужас пришёл к Вам в виде десятков <span class="yes">змей</span>, которые ползли со всех сторон. Вы закричали.</p>'
  )
  change_buttons({ "Игра окончена": restart })
  $("#key_save").attr("id", "key_save_negative")
}
