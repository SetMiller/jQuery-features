import Slider from './script_classes.js'

window.onload = function(){
  ! function (...args) {
      for (let arg of args) {
        arg()
    }
  } 
  (
    function slider1(){
      new Slider({
        btnNext: '.gallery-1 .buttons .next',
        btnPrev: '.gallery-1 .buttons .prev',
        images: '.gallery-1 .slider img',
        auto: false,
        mouseBlock: true,
      })
    },
    function slider2() {
      new Slider({
        btnNext: '.gallery-2 .buttons .next',
        btnPrev: '.gallery-2 .buttons .prev',
        images: '.gallery-2 .slider img',
        auto: true,
        mouseBlock: false,
      })
    },
    function slider3() {
      new Slider({
        btnNext: '.gallery-3 .buttons .next',
        btnPrev: '.gallery-3 .buttons .prev',
        images: '.gallery-3 .slider img',
        auto: false,
        autoInterval: 2000,
        mouseBlock: true,
      })
    },
    // function test(){
    //   let arr = [1,2,3,4,5,6,7,8,9]
    //   setInterval(()=> {
    //     // arr.push(arr.shift())
    //     arr.unshift(arr.pop())
    //     console.log(arr)
    //   }, 1000)
    // }
  )
}

