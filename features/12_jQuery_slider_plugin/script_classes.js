export default class Slider {
  constructor(obj){
    this.btnNext = $(obj.btnNext)
    this.btnPrev = $(obj.btnPrev)
    this.images = $(obj.images)
    this.index = 0
    this.isRun = false
    // Проверяемм наличие кнопок, если их нет, то принудительно запускаем карусель
    this.btnNext.length && this.btnPrev.length !== 0 ? this.autoCheck(obj.auto) : this.autoChange(obj.autoInterval)
    // Проверяем наличие параметра блокировки мыши
    obj.mouseBlock ? this.mouseBlock() : ''
  }
    
  changeClass(direction = true){
    // блокировка многократного вызова перемотки
    if (this.isRun) {
      return
    }
    this.isRun = true

    this.images.eq(this.index)
                        .css({
                          left: 0,
                          top: 0,
                          right: 'auto',
                          bottom: 'auto'
                        })
                        .animate({
                          width: 0,
                        }, 500);
    if (direction) {
      this.index++
      if (this.index > this.images.length - 1)  {
      this.index = 0 
      }
    }
    else {
      this.index--
      if (this.index < 0) {
        this.index = this.images.length - 1 
      }
    }
    this.images.eq(this.index)
                        .css({
                          left: 'auto',
                          top: 'auto',
                          right: 0,
                          bottom: '33px'
                        })
                        .animate({
                            width: '100%'
                            // функция обратного вызова ожидающая завершения выполнения анимации
                        }, 500, () => {
                            this.isRun = false;
                        });
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
