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

    $("#sidebar-header .sidebar-header__inner").on("click", () => {
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
