$(document).ready(function () {
  /* Экран приветствия */
  change_greet_text(
    '<p>Fallout: Operation Revenge</p><p>Рад представить Вам текстовый квест «<span class="yes">Операция Возмездие</span>». Данная игра является, по сути, фанфиком по мотивам популярной игры <span class="yes">Fallout</span>. Соответственно, она совершенно бесплатна и доступна каждому. Это моя дань уважения любимой игре!</p><p>В игре описываются события нескольких дней <span class="yes">2155 года</span> вселенной <span class="yes">Fallout</span>. В центре сюжета война <span class="yes">Братства Стали</span> и <span class="yes">рейдеров</span> из клана <span class="yes">Гадюк</span>. Если Вы здесь случайный гость и не знаете, что такое <a href="https://fallout.fandom.com/ru/wiki/Братство_Стали/" target="_blank">Братство Стали</a>, <a href="https://fallout.fandom.com/ru/wiki/Рейдеры/" target="_blank">рейдеры</a>, <a href="https://fallout.fandom.com/ru/wiki/Гадюки/" target="_blank">Гадюки</a>, то… я Вас поздравляю! Вам только предстоит открыть для себя прекрасный мир <span class="yes">Fallout</span>. Профильные статьи доступны по ссылкам.</p><p>Если Вы уже бывалый странник, то <span class="yes">вводите имя</span> своего героя, нажимайте кнопку «<span class="yes">Новая игра</span>» и добро пожаловать в <span class="yes">Пустошь Основного Региона</span>.</p><p>В игре доступны более <span class="yes">40</span> вариантов концовок, некоторые финалы отличаются друг от друга незначительно, некоторые приводят к диаметрально противоположным исходам.</p><p>В общем… пора в путь!</p>'
  )
  function start() {
    var btnNew = document.querySelectorAll("#key_new")
    var inputName = document.querySelector("#hName")
    for (var i = 0; i < btnNew.length; i++) {
      btnNew[i].addEventListener("click", function () {
        if (inputName.value !== "") {
          /* Звук нажатия */
          btn_sound()
          the_beginning()
        } else {
          /* Звук нажатия */
          btn_sound()
          $("body,html").animate({ scrollTop: 0 }, 800)
          change_greet_text("<p>Вы не ввели имя главного героя!</p>")
        }
      })
    }
  }

  /* СТАРТ */
  start()
  // the_beginning();
})
