$(function(){

  $('.faq .item')
    .on('click', function(){
      $(this)
        // Приостанавливаем выполнение анимации и сбрасываем очередь, если были совершены многократные клики
        .stop(true, true)
        // Помигать элементом
        .fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300)
        // так же можно останавливать анимацию при переходе на другую вкладку
    })

  $('.faq .item')
    // метод .one() отрабатывает только один раз 🦆🦆🦆
    .one('contextmenu', function(e){
      // Блокируем нажатие правой кнопки мыши 
      e.preventDefault();
      // console.log([e])
      // console.log([e.clientX])
      // console.log([e.offsetX])
      // console.log([e.pageX])
      // console.log([e.screenX])

      $(this).animate({
        // отнимаем 100px от текущей высоты
        height: '-=100px',
        opacity: 0.5,
      }, 500, $.bez([0,.4,.5,.67]))
        
    })

})