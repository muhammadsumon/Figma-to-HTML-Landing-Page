/*
----------------------
T A B L E   O F   J S
----------------------

01 . For Humberger Menu
02 . Scroll To Top
03 . Page Animation

*/
window.onload = () => {


    // 02 . For Humberger Menu
    var forEach = function (t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t))
            for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
        else
            for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
    };
    var hamburger = document.querySelector(".hamburger");
    hamburger.onclick = () => {

        menuContainer = document.querySelector(".ms-mobile-menu");
        menuContainer.classList.toggle("show");
        menuContainer.classList.contains("show") ? hamburger.classList.add("is-active") : hamburger.classList.remove("is-active");

    }

    // 03 . Scroll To Top
    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;

    // 04 . Page Animation
    AOS.init();
    anime({
        targets: '.ms-main .ms-main-section-1--left img:nth-child(1)',
        keyframes: [{
            translateY: 50,
        }, {
            translateY: 0,
        }, {
            translateX: 30,
        }, {
            translateX: 20,
        }, {
            translateY: 0,
            translateX: 0,
        }, ],
        duration: 3000,
        loop: true,
        easing: 'cubicBezier(.5, .05, .1, .3)'
    });

    anime({
        targets: '.ms-main .ms-main-section-1--left img:nth-child(2)',
        keyframes: [{
            translateY: 50,
        }, {
            translateY: 0,
        }, ],
        duration: 2500,
        loop: true,
        easing: 'cubicBezier(.5, .05, .1, .3)'
    });

    anime({
        targets: '.ms-main .ms-main-section-1--left img:nth-child(3)',
        keyframes: [{
            translateY: -50,
        }, {
            translateY: 0,
        }, ],
        easing: 'cubicBezier(.5, .05, .1, .3)',
        duration: 3000,
        loop: true,
        easing: 'cubicBezier(.5, .05, .1, .3)'
    });


}