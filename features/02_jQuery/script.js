$(function (){
  const allQuest = $('.wrapper').children('.question');
  const allAnswers = $('.wrapper').children('.answer');
  
  allQuest.each(function(index){
          $(this).html(`Вопрос №${index + 1}`);
        })
  allAnswers.each(function(index){
          $(this).html(`Ответ на вопрос №${index + 1}`);
        });

  // Вариант № 3 вне задания (аккордеон)
  // Фильтром выбираем первый элемент и устанавливаем ему параметр отображения
  $('.wrapper .answer:first').show();

  allQuest.on('click', function(){
          const thisAnswer = $(this).next()
        // Вариант решения № 1
          // allAnswers.slideUp(300);
          //   // Если между лежит несколько промежуточных блоков или элементов
          //   // то можно сделать $(this).parent('class').find('class') (запись примерная)
          //   thisAnswer.css('display') === 'block' ? 
          //   thisAnswer.slideUp(300) : 
          //   thisAnswer.slideDown(300)

      //  Вариант решения № 2
            // фильтр visible помогает отфильтровать только видимые в настоящее время элементы
            // $('.wrapper .answer:visible').not(thisAnswer).slideUp(300)
            // thisAnswer.slideToggle(300)

      // Вариант № 3 вне задания (аккордеон)
            // выбираем все видимые элементы, за исключением текущего и вызываем для них метод slideUp(300)
            $('.wrapper .answer:visible').not(thisAnswer).slideUp(300);
            $(this).next().slideDown(300);
        })

})