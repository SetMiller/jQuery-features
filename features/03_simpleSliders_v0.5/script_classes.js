export default class Slider {
  constructor(obj){
    this.btnNext = $(obj.btnNext)
    this.btnPrev = $(obj.btnPrev)
    this.images = $(obj.images)
    console.log(this.images)
    this.counter = 0

    // Проверяемм наличие кнопок, если их нет, то принудительно запускаем карусель
    this.btnNext.length && this.btnPrev.length !== 0 ? this.autoCheck(obj.auto) : this.autoChange(obj.autoInterval)
    // Проверяем наличие параметра блокировки мыши
    obj.mouseBlock ? this.mouseBlock() : ''
  }

  upChangeClass(){
    // elem.eq(numb) выбираем элемент по номеру массива, аналогично elem[numb]
    this.images.eq(this.counter).removeClass('show')
    this.counter == this.images.length - 1 ? this.counter = 0 : this.counter++
    this.images.eq(this.counter).addClass('show')
  }

  downChangeClass(){
    this.images.eq(this.counter).removeClass('show')
    this.counter == 0 ? this.counter = this.images.length - 1 : this.counter--
    this.images.eq(this.counter).addClass('show')
  }

  mouseBlock(){
    this.images.mousedown(() => {return false}).on('contextmenu', function(){return false})
  }
  autoChange(sliderInterval = 1000){
    setInterval(() => this.upChangeClass(), sliderInterval)
  }
  autoCheck(autoParam = true){
    this.btnNext.click(() => this.upChangeClass())
    this.btnPrev.click(() => this.downChangeClass())
    autoParam ? this.autoChange() : ''
  }
}