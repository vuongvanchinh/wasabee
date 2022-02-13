$(document).ready(() => { 

    $( ".product-color__inner" ).each(function(index) {
        $(this).on("click", function(){
            $(this).toggleClass('active');
        });
    });
    $( ".product-size__inner" ).each(function(index) {
        $(this).on("click", function(){
            $(this).toggleClass('active');
        });
    });
})