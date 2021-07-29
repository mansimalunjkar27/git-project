$(document).ready(function(){
    $(window).scroll(function(){
        alert("you are scrolling");
    });

    $('#box').scroll(function(){
        alert("you are scrolling");
    });


    $(window).resize(function(){
        alert("you are resizing window");
    });  
     
});