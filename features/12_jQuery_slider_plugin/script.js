$(function(){

  const images1 = $('.gallery-1')
  const images2 = $('.gallery-2')
  
  images1.slider({
    auto: true,
    mouseBlock: true,
  })

  images2.slider({
    auto: false,
    mouseBlock: true,
    autoInterval: 2000,
  })

})

