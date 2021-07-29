$(document).ready(function(){
    $('#sname,#sclass,#scountry').focus(function(){
        $(this).css('background-color','lime');
    });


    $('#sname,#sclass,#scountry').blur(function(){
        $(this).css('background-color','lime');
    });

    $('#scountry').change(function(){
        $(this).css('background-color','pink');//work with only optionlistbox

        var a=$(this).val();
        $('#test').html(a);
    });

    $('#sname,#sclass').select(function(){
        $(this).css('background-color','yellow'); //work with only textbox
    });


    $('#sform').submit(function(){
        alert("form submited");
    });

});