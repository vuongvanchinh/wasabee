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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          // centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
    ],
    // prevArrow: '<button class="slider-arrow prev-arrow">Pre</button>',
    // nextArrow: '<button class="slider-arrow next-arrow">Next</button>'
  });
  //   $(".product1-page5-slider").slick({
  //     slidesToShow: 5,
  //     slidesToScroll: 1,
  //     // prevArrow: '<button class="slider-arrow prev-arrow">Pre</button>',
  //     // nextArrow: '<button class="slider-arrow next-arrow">Next</button>'
  //   });

  $(".your-class").slick({
    rtl: true,
  });

  $(".landing-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          // centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  // slider style
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          // centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    e.target;
    e.relatedTarget;
    $(".slider-style").slick("setPosition");
  });
  // End slider style
  // monopoly-slider
  $(".monopoly-slider").slick({
    slidesToShow: 1,
    centerPadding: "20%",
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "22%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20%",
          slidesToShow: 1,
        },
      },
    ],
  });

  // end monopoly
  //top-right-navigator-slider
  $(".top-right-navigator-slider-01").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
    // prevArrow: '<button class="slider-arrow prev-arrow">Pre</button>',
    // nextArrow: '<button class="slider-arrow next-arrow">Next</button>'
  });
  $(".top-right-navigator-slider-001").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
    // prevArrow: '<button class="slider-arrow prev-arrow">Pre</button>',
    // nextArrow: '<button class="slider-arrow next-arrow">Next</button>'
  });

  $(".top-right-navigator-slider-02").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          // centerMode: true,
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
    // prevArrow: '<button class="slider-arrow prev-arrow">Pre</button>',
    // nextArrow: '<button class="slider-arrow next-arrow">Next</button>'
  });

  // top-right-navigator-slider
});
