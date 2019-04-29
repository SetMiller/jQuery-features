$(function () {
    // Непосредственная обработка событий
        // $('form input[type="text"]').on('focus', function(){
        //     $(this)
        //         .addClass('active')
        // })

        // $('form input[type="text"]').on('blur', function(){
        //     $(this)
        //         .removeClass('active')
        // })

    // Делегированная обработка событий
    $('.items').on('focus', '.item input[type="text"]', function(){
        $(this)
            .addClass('active')
    })

    $('.items').on('blur', '.item input[type="text"]', function(){
        $(this)
            .removeClass('active')
    })
   

    $('.addField').on('click', function(){
        // запись $('<div/>') создает парный тэг "div"
        const $div = $('<div/>')
                        .addClass('item')
        // Запись $('<input>') создает инпут, ставим аттрибут -> text  
        // Помещаем его в ранее созданный блок "div"
        $('<input>')
            .attr('type', 'text')
            .addClass('check')
            .appendTo($div)
        // Далее в блок '.items' помещаем блок "div"
        $('.items')
            .append($div)
    })
    
    // Пример работы всплытия и принципа взаимодействия с ним
        $('*').on('click', function(e){
            // Прерываем всплытие событий, иначе будут выделены все родительские элементы
            e.stopPropagation()
           
            // Элемент, на котором произошло событие 
            console.log(e.target)
            // console.log(this)
            // console.log(1)
        })
});
