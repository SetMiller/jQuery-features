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

  changeClass(direction = true){
    this.images.eq(this.counter).removeClass('show')
    if (direction) {
      this.counter == this.images.length - 1 ? this.counter = 0 : this.counter++
    }
    else {
      this.counter == 0 ? this.counter = this.images.length - 1 : this.counter--
    }
    this.images.eq(this.counter).addClass('show')
  }

  mouseBlock(){
    this.images.mousedown(() => {return false}).on('contextmenu', function(){return false})
  }
  autoChange(sliderInterval = 1000){
    setInterval(() => this.changeClass(false), sliderInterval)
  }
  autoCheck(autoParam = true){
    this.btnNext.click(() => this.changeClass())
    this.btnPrev.click(() => this.changeClass(false))
    autoParam ? this.autoChange() : ''
  }
}