$(function(){

  $('.menu a').on('click', function(e){
    e.preventDefault()
    const selector = $(this).attr('href')
    const h = ($(selector))
    $('html, body').animate({
      scrollTop: h.offset().top - 40
    }, 400)
    $('.menu a')
            .removeClass('active')
            .filter(this)
            .addClass('active')
  })

  const button = $('.button')

  function btnOn(){
    let offset = $(this).scrollTop()
    offset > 300
    ? button
          .stop(true, false)
          .animate({
            opacity: 1
          }, 300)
    : button
          .stop(true, false)
          .animate({
            opacity: 0
          }, 300)
  }

  $(window).on('scroll', btnOn)

  button.on('click', function(){
    $('html, body').animate({
      scrollTop: 0
    }, 400)
  })

})