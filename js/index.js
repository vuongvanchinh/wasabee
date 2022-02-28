// filter
const onCloseFilter = () => {
    let duration = 300;
    $("#filter-product > .accordion").css("animation-name", "scroll-out");
    $("#filter-product > .accordion").css("animation-duration", `${duration}ms`);
    setTimeout(() => {
        $(".filter-product").removeClass("open");
    }, duration);
};

const closeFilterProduct = (e) => {
    console.log(e.target);
    let filterInner = document.querySelector("#filter-product > .accordion");
    console.log(filterInner);
    if (!filterInner.contains(e.target)) {
        onCloseFilter();
        document.getElementById("filter-product").removeEventListener("mousedown", closeFilterProduct);
    }
};
// end filter
// sidebar
const onCloseSideBarHeader = () => {
    let duration = 300;
    $("#sidebar-header .sidebar-header__inner").css("animation-name", "sidebar-scroll-out");
    $("#sidebar-header .sidebar-header__inner").css("animation-duration", `${duration}ms`);
    setTimeout(() => {
        $("#sidebar-header").removeClass("open");
    }, duration);
};

const closeSidebarHeader = (e) => {
    let sidebarInner = document.querySelector("#sidebar-header .sidebar-header__inner");
    if (!sidebarInner.contains(e.target)) {
        onCloseSideBarHeader();
        document.getElementById("sidebar-header").removeEventListener("mousedown", closeSidebarHeader);
    }
};
// end sidebar

$(document).ready(() => {
    $(".product-color__inner").each(function (index) {
        $(this).on("click", function () {
            $(this).toggleClass("active");
        });
    });
    $(".product-size__inner").each(function (index) {
        $(this).on("click", function () {
            $(this).toggleClass("active");
        });
    });
    $(".cart-btns button").each(function (index) {
        $(this).on("click", function () {
            $(this).toggleClass("active");
        });
    });

    // Toggle filter in mobile page 2
    $("#mobile-filter-toggle").on("click", () => {
        $("#filter-product").addClass("open");
        $("#filter-product > .accordion").css("animation-name", "scroll-in");
        $("#filter-product > .accordion").css("animation-duration", "300ms");
        document.getElementById("filter-product").addEventListener("mousedown", closeFilterProduct);
    });

    $(".filter-product .accordion .close").on("click", () => {
        onCloseFilter();
        document.getElementById("filter-product").removeEventListener("mousedown", closeFilterProduct);
    });
    // end Toggle filter in mobile page 2

    // sidebar header
    $("#toggle-sidebar-header").on("click", () => {
        $("#sidebar-header").addClass("open");
        $("#sidebar-header .sidebar-header__inner").css("animation-name", "sidebar-scroll-in");
        $("#sidebar-header .sidebar-header__inner").css("animation-duration", "300ms");
        document.getElementById("sidebar-header").addEventListener("mousedown", closeSidebarHeader);
    });

    $("#sidebar-header .sidebar-header__inner .my-close").on("click", () => {
        onCloseSideBarHeader();
        document.getElementById("sidebar-header").removeEventListener("mousedown", closeFilterProduct);
    });

    // end sidebar header

    // mobile search icon
    $("#mobile-search-icon").on("click", () => {
        $("#mobile-search").toggleClass("open");
    });
    // end mobile search icon

    //click change color heart
    $(".product-card .product-love").click((e) => {
        $(e.target).toggleClass("active");
    });

    // header

    // Accordion
    $(".my-accordion .my-accordion__title").on("click", function (e) {
        $(this).toggleClass("open");
        const panel = $(this).next();
        console.log(panel.css("max-height"));

        if (panel.css("max-height") == "0px") {
            panel.css("max-height", panel.prop("scrollHeight") + "px");
        } else {
            panel.css("max-height", "0px");
        }
    });
    // end accordion
});

$(".bank-online-methods").each(function (index) {
    $(this).on("click", function () {
        for (let i = 0; i < $(".bank-online-methods").length; i++) {
            $(".bank-online-methods").eq(i).removeClass("active");
        }
        // $(".bank-online-methods").eq(index).css({ "background-color": "#343434" });
        $(".bank-online-methods").eq(index).addClass("active");
        // console.log($(".bank-online-methods").eq(index).children(`input`));
    });
});

// $('.order-option  input[type="checkbox"]').change(function () {
//     console.log("ok");
// });

$(".order-option").each(function (index) {
    let checkbox = $(".order-option").eq(index).find('.form-checkbox input[type="radio"]').eq(0);
    checkbox.change(function () {
        let popup = $(".order-option").eq(index).find("#NH").eq(0);

        $(".order-option").each(function (i) {
            $(".order-option").eq(i).find("#NH").removeClass("active");
        });

        if (checkbox.prop("checked")) {
            popup.addClass("active");
        }
    });
});

let bank = document.getElementsByClassName("bank-online-methods");

function increaseValue(that) {
    let val = parseInt(that.previousSibling.previousSibling.value);
    val = isNaN(val) ? 0 : val;
    val++;
    that.previousSibling.previousSibling.value = val;
}

function decreaseValue(that) {
    let val = parseInt(that.nextSibling.nextSibling.value);
    val = isNaN(val) ? 0 : val;
    val < 1 ? (val = 1) : "";
    val = val - 1;
    that.nextSibling.nextSibling.value = val;
}
