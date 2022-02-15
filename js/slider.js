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

      $(".landing-slider").slick({
      slidesToShow:1,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
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
  });

  $(".slider-style").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          // arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 3
        }
      },
        {
          breakpoint: 650,
          settings: {
            arrows: false,
            // centerMode: true,
            // centerPadding: '40px',
            slidesToShow: 1
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
});
$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
  e.target
  e.relatedTarget
  $('.slider-style').slick('setPosition');
});
})