$(document).ready(() => {
    $(".new-products-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                // centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        // prevArrow: '<button class="slider-arrow prev-arrow">Pre</button>',
        // nextArrow: '<button class="slider-arrow next-arrow">Next</button>'
    });
})