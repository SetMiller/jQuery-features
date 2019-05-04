(function($){
  $.fn.dubble = function(settings){

    const userOptions = settings                            // параметры пользователя
    const defaultOptions = {delim: ' ', cnt: 2}             // параметры по-умолчанию
    const options = $.extend(defaultOptions, userOptions)   // для получания итоговых параметров есть метод $.extend()
    console.log(options)
    
    // вариант №1 - упрощенный
      // this.each(function(){
        // console.log($(this))
        // let element = $(this)
        // let text = element.html()
        // console.log(text)
        // element.html(text + text)
      // })

    // вариант №2 (ES6)
      this.each((i, value)=>{
        console.log($(value))
        let elem = $(value)                                   // получаем один элемент в обертке jQuery
        let text = elem.html()                                // получаем содержимое элемента
        let result = ''                                       // итоговый результат   
        for (let i = 0; i < options.cnt; i++){                // собираем из такста и разделителей
          result += text
          if (i < options.cnt - 1) {                          // проверяем чтобы разделитель не был последним элементом
            result += options.delim
          }
        }
        elem.html(result)                                     // выводим результат
      })

    // возвращаем набор элементов для дальнейшей с ними работы
    return this
  }
})(jQuery)