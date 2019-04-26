$(function (){
  // Получаем доступ к группам элементов
  // .children() использую практики ради
  const allQuest = $('.some-block').children('.question');
  const allAnswers = $('.another-block').children('.answer');

  // Вариант 1️⃣ с 2-мя массивами
    // // Массив для помещения в него наименования кнопок
    // const arrQuestions = []
    // // Вызов функции конструктора массива
    // addQuestions(arrQuestions,4)
    // // Функция конструктор массива
    // function addQuestions(arr, numb) {
    //   for (let i = 0; i < numb; i++){
    //     arr.push(`Вопрос №${i + 1}`)
    //   }
    // }

    // // Массив с ответами на вопросы в соответствии с порядком вопросов
    // const arrAnswers = [
    //   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia iste sapiente quas voluptas fugiat totam provident ipsam vel esse incidunt? Cumque explicabo, a iusto ipsum natus nam odit culpa. Natus?Soluta dicta repudiandae obcaecati voluptates. Exercitationem id ipsa delectus harum, repudiandae quos veritatis dolor nostrum, dolorum impedit beatae quibusdam quam incidunt necessitatibus nesciunt reiciendis ratione tempora magnam ipsam omnis! Quae.',
    //   'Officia iste sapiente quas voluptas fugiat totam provident ipsam vel esse incidunt?',
    //   'Cumque explicabo, a iusto ipsum natus nam odit culpa. Natus?Soluta dicta repudiandae obcaecati voluptates.',
    //   'Natus?Soluta dicta repudiandae obcaecati voluptates. ',
    // ]
    // ************************************************************

  // Вариант 2️⃣ с объектом
    const interview = {
      'Вопрос №1': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia iste sapiente quas voluptas fugiat totam provident ipsam vel esse incidunt? Cumque explicabo, a iusto ipsum natus nam odit culpa. Natus?Soluta dicta repudiandae obcaecati voluptates. Exercitationem id ipsa delectus harum, repudiandae quos veritatis dolor nostrum, dolorum impedit beatae quibusdam quam incidunt necessitatibus nesciunt reiciendis ratione tempora magnam ipsam omnis! Quae.',
      'Вопрос №2': 'Officia iste sapiente quas voluptas fugiat totam provident ipsam vel esse incidunt?',
      'Вопрос №3': 'Cumque explicabo, a iusto ipsum natus nam odit culpa. Natus?Soluta dicta repudiandae obcaecati voluptates.',
      'Вопрос №4': 'Natus?Soluta dicta repudiandae obcaecati voluptates. ',
    }

    const arrQuestions = Object.keys(interview)
    const arrAnswers = Object.values(interview)

  // Заполняем пустые блоки с вопросами, добавляем атрибуты для перебора
  allQuest
        .each(function(index){
          $(this)
              .html(arrQuestions[index])
              .attr('data-numb', `${index + 1}`)
        })
  
  // Заполняем пустые блоки с ответами, добавляем атрибуты для поиска и перебора
  allAnswers
        .each(function(index){
          $(this)
              .html(arrAnswers[index])
              .addClass('sleep')
              .attr('data-numb', `${index + 1}`)
        })
        
  // Получаем первый элемент и делаем его видимым
  const firstOne = $('.another-block .answer:first')
  firstOne.show()

  // Вешаем эвент на вопросы
  allQuest.on('click', function(){
    // Получаем порядковый номер вопроса
    const numb = $(this).attr('data-numb')
    allAnswers
        // скрываем все ответы, кроме выбранного
        .not(allAnswers.eq(numb - 1))
        .fadeOut(300)
    allAnswers
        // По порядковому номеру получаем доступ к ответу и отображаем его
        .eq(numb - 1)
        .fadeIn(300)
  })
})