# Перенос слайдера на jQuery

исходный материал [05_simpleSliders_v0.4](https://github.com/SetMiller/programming-practice/tree/master/Modules/05_simpleSliders_v0.4)

Цели и задачи:
-
* перевод конструктора на `jQuery`;

Интересные моменты:
-
- если для перебора `NodeList` елементов мы использовали форму записи `this.images[this.counter]`, то в `jQuery` мы получаем объект `jQuery.fn.init`, для получения доступа к элементам которого нужно использовать метод `:eq()`. При этом форма доступа к элементу выглядит следующим образом: `this.images.eq(this.counter)`
