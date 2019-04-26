# Перенос слайдера на jQuery

исходный материал [05_simpleSliders_v0.4](https://github.com/SetMiller/programming-practice/tree/master/Modules/05_simpleSliders_v0.4)

Цели и задачи:
-
* перевод конструктора на `jQuery`;

Интересные моменты:
-
- если для перебора `NodeList` елементов мы использовали форму записи `this.images[this.counter]`, то в `jQuery` мы получаем объект `jQuery.fn.init`, для получения доступа к элементам которого нужно использовать метод `:eq()`. При этом форма доступа к элементу выглядит следующим образом: `this.images.eq(this.counter)`;
- Объекдинил функции `upChangeClass` и `downChangeClass` на одну `changeClass`, которая для перемотки в сторону увеличения номера позиции используем параметр по умолчанию `changeClass(direction = true)`, соответственно `false` перебирает элементы в обратном порядке;
