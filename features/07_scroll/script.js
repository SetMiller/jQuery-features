$(function(){

  $('.menu a').on('click', function(e){
    // отключаем переход по якорю 🦆
    e.preventDefault()

    // Получаем параметр href элемента 
    const selector = $(this).attr('href')
    
    // По параметру href получаем интересующий нас заголовок Н2
    const h = ($(selector))

    // console.log(selector)
    // console.log(h)
    // console.log(h.offset().top)
    // console.log(h[0].offsetTop+h[0].offsetLeft)

    // Анимация перемещения
    $('html, body').animate({
      // Устанавливаем отступ от верхнего края равный положению h2 элемента минус отступ
      scrollTop: h.offset().top - 40
    }, 400)

    // Подсвечивание выбранного мункта меню
    $('.menu a')
            .removeClass('active')
            .filter(this)
            .addClass('active')
  })
    
  
})