window.onload = function (){
  const quest = $('.wrapper').children('.question');
  const answer = $('.wrapper').children('.answer');
  
  quest.each(function(index){
          $(this).html(`Вопрос №${index + 1}`);
        })
        .on('click', function(){
          answer.slideUp(300);
            $(this).next().css('display') === 'block' ? 
            $(this).next().slideUp(300) : 
            $(this).next().slideDown(300)
        })

  answer.each(function(index){
          $(this).html(`Ответ на вопрос №${index + 1}`);
        });
}