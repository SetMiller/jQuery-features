$(function (){
  const allQuest = $('.wrapper .question');
  const allAnswers = $('.wrapper .answer');
  
  allQuest.each(function(index){
          $(this).html(`Вопрос №${index + 1}`);
        })
  allAnswers.each(function(index){
          $(this).html(`Ответ на вопрос №${index + 1}: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Alias numquam dignissimos hic architecto, reiciendis beatae corrupti debitis consequatur praesentium 
          dolore fuga a corporis ex illo repellendus non quis sint vitae.Deleniti cumque ducimus illum adipisci 
          quam rem suscipit magni consectetur reiciendis sequi assumenda doloremque eum dolor, ea corporis ab 
          earum corrupti modi accusamus inventore architecto repudiandae, qui velit labore. Earum?
          Alias numquam dignissimos hic architecto, reiciendis beatae corrupti debitis consequatur praesentium 
          dolore fuga a corporis ex illo repellendus non quis sint vitae.Deleniti cumque ducimus illum adipisci 
          quam rem suscipit magni consectetur reiciendis sequi assumenda doloremque eum dolor, ea corporis ab 
          earum corrupti modi accusamus inventore architecto repudiandae, qui velit labore. Earum?`);
        });


  $('.wrapper .answer:first').show();

  allQuest.on('click', function(){
          const thisAnswer = $(this).next()
            $('.wrapper .answer:visible').not(thisAnswer).slideUp({
              duration: 1000,
              easing: $.bez([.08,1.02,.41,.96]),
            });
            $(this).next().slideDown({
              duration: 1000,
              easing: $.bez([.08,1.02,.41,.96]),
            });
        })

})
