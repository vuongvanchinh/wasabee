const closeFilterProduct = (e) => {
    console.log(e.target);
    let filterInner = document.querySelector("#filter-product > .accordion");
    console.log(filterInner);
    if (!filterInner.contains(e.target)) {
        $(".filter-product").removeClass("open");
        document.getElementById("filter-product").removeEventListener("mousedown", closeFilterProduct);
    }
};

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
        document.getElementById("filter-product").addEventListener("mousedown", closeFilterProduct);
    });

    $(".filter-product .accordion .close").on("click", () => {
        $("#filter-product").removeClass("open");
        document.getElementById("filter-product").removeEventListener("mousedown", closeFilterProduct);
    });
    // end Toggle filter in mobile page 2
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
