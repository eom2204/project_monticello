/* Burger-menu */

function menuDropDown() {
    const menu = document.querySelector(".nav__list");
    const menuItems = document.querySelectorAll(".nav__list-item");
    const hamburger = document.querySelector(".nav__burger");

    function toggleMenu() {
        if (menu.classList.contains("nav__list--show")) {
            menu.classList.remove("nav__list--show");
            console.log("menu remove");

        } else {
            menu.classList.add("nav__list--show");
            console.log("menu")
        }
    }

    hamburger.addEventListener("click", toggleMenu);

    menuItems.forEach(
        function (menuItem) {
            menuItem.addEventListener("click", toggleMenu);
        }
    )
}


/*Menu */
function menuHighlight() {
    // Cache selectors
    let lastId;
    const topMenu = $(".nav__list"),
        topMenuHeight = topMenu.outerHeight() + 1,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            const item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    $(window).scroll(function () {
        // Get container scroll position
        const fromTop = $(this).scrollTop() + topMenuHeight;
        let cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        const id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("nav__list-ellipse--active")
                .end().filter("[href=#" + id + "]").parent().addClass("nav__list-ellipse--active");
        }
    });
}


/* Slick-sliders */

function slickSlider() {
    $('.header__banner').slick({
        dots: true,
        infinite: true,
        arrows: false,
    });

    $('.news__sliders').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<img src="./images/scroller_left.png" alt="" class="news__scroller news__scroller--left">',
        nextArrow: '<img src="./images/scroller_right.png" alt="" class="news__scroller news__scroller--right">',
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    });
}

$(document).ready(function () {

    menuHighlight();
    menuDropDown();
    slickSlider()
});
