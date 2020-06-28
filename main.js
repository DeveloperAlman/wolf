window.onload = function () {
    document.body.classList.add('preloader');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('preloader');
    }, 2800);
}

let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

document.querySelectorAll("a[href^=\"#\"]").forEach((anchor) => {
    anchor.addEventListener("click", function (ev) {
        ev.preventDefault();

        const targetElement = document.querySelector(this.getAttribute("href"));
        targetElement.scrollIntoView({
            block: "start",
            alignToTop: true,
            behavior: "smooth"
        });
    });
});

AOS.init();
particlesJS.load("particles-js", "js/particles.json");

var button = document.querySelector('#stop');
var shouldKeepAnimating = true;
var addClassTimeouts = [];
var containers = document.querySelectorAll('.container-social');
containers = Array.prototype.slice.call(containers, 0);

setTimeout(setActiveClasses, 500)

function setActiveClasses() {
    var time = 0;

    if (!shouldKeepAnimating) {
        return;
    }

    addClassTimeouts = [];

    containers
        .forEach(function (container) {

            time += 500;
            var timeoutId = setTimeout(function () {

                container.classList.add('active')
            }, time);
            addClassTimeouts.push(timeoutId)
        });

    setTimeout(function () {
        clearActiveClasses();
        setTimeout(setActiveClasses, 1000);
    }, time + 1500)
}

function clearActiveClasses() {
    containers.forEach(function (container) {
        container.classList.remove('active');
    });
}