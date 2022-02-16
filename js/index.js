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

function increaseValue(that) {
    let val = parseInt(that.previousSibling.previousSibling.value);
    val = isNaN(val) ? 0 : val;
    val++;
    that.previousSibling.previousSibling.value = val;
  }
  
  function decreaseValue(that) {
    let val = parseInt(that.nextSibling.nextSibling.value);
    val = isNaN(val) ? 0 : val;
    val < 1 ? val = 1 : '';
    val = val - 1;
    that.nextSibling.nextSibling.value = val;
    
  }