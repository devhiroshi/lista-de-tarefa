$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();

        const inputIn = $('#input-in').val();
        const inputList = $('<li></li>');
        $(`<a>${inputIn}</a>`).appendTo(inputList);
        $(inputList).appendTo('ul');
        $('#input-in').val('');

        $(inputList).click(function(){ 
            $(inputList).addClass('active')
        }) 
    })
})