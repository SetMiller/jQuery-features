  // import $ from './lib/jQClone.js'

! function (...args) {
  for (let arg of args){
    arg()
  }
}(
  function jQClone(){ 
    $('.check')
                .on('focus', function(){
                  $(this).addClass('focus')
                })
                .on('blur', function(){
                  $(this).removeClass('focus')
                })

    $('.items .item')
                .html('some text')
                .on('click', function(){
                  this.style.color = 'red'
                  $(this)
                          .html('new text')
                })
                  
  }
)