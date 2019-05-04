(function($){

  // @method slider
  // @param  {auto} автоматическая прокрутка
  // @param  {mouseBlock} блокировка mouseDown и contextmenu
  // @param  {autoInterval} интервал смены слайдера
  // @return {Number}  возвращаем объект jQuery

  $.fn.slider = function(userSettings){
      
      const defaultSettings = {
        auto: true,
        mouseBlock: true,
        autoInterval: 1000,
      }
    
      const options = $.extend(defaultSettings, userSettings)
      const btnNext = $(this).find('.next')
      const btnPrev = $(this).find('.prev')
      const images = $(this).find('img')
      let index = 0
      // isRun = false
      
      // Проверяемм наличие кнопок, если их нет, то принудительно запускаем карусель
      btnNext.length !== 0 ? autoCheck(options.auto) : autoChange(options.autoInterval)
      // Проверяем наличие параметра блокировки мыши
      options.mouseBlock ? mouseBlock() : ''
        
      function changeClass(direction = true){
        // if (isRun) {
        //   return
        // }
        // isRun = true
        images.eq(index)
                        .css({
                          left: 0,
                          top: 0,
                          right: 'auto',
                          bottom: 'auto'
                        })
                        .stop(true, false)
                        .animate({
                          width: 0,
                        }, 500);
        if (direction) {
          index++
          if (index > images.length - 1)  {
          index = 0 
          }
        }
        else {
          index--
          if (index < 0) {
            index = images.length - 1 
          }
        }
        images.eq(index)
                        .css({
                          left: 'auto',
                          top: 'auto',
                          right: 0,
                          bottom: '33px'
                        })
                        .stop(true, false)
                        .animate({
                            width: '100%'
                        }, 500);
      }
    
      function mouseBlock(){
        images.mousedown(() => {return false}).on('contextmenu', function(){return false})
      }
      function autoChange(sliderInterval){
        setInterval(() => changeClass(false), sliderInterval)
      }
      function autoCheck(autoParam){
        btnNext.click(() => changeClass())
        btnPrev.click(() => changeClass(false))
        autoParam ? autoChange(options.autoInterval) : ''
      }
    return this
  }
})(jQuery)