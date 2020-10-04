// Sticky Navbar

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Animate.css
$(document).ready(function () {
  $(window).scroll(function () {
    oTop = $("#work").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      $('#work').addClass('animate__animated animate__fadeInRight');
    }
    oTop = $("#about").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      $('#about').addClass('animate__animated animate__fadeInLeft');
    }
  });
});

// GSAP Animations
gsap.from(".word", { duration: 0.5, y: -300, opacity: 0, stagger: 0.1 });

TweenLite.set("#logo", { x:-400, y:-200});
var tl = new TimelineLite();
  tl.to("#logo", 0.5, { y:-250})
    .to("#logo", 1.25, { y:0, ease:Bounce.easeOut})
    .to("#logo", 2.5, {x:"+=400"}, "-=1.75")

// Message
tl.to("#hi", {duration: 1.5, opacity: 1, ease: "bounce"});


// About Img Animation
function specialEffect(){
  animateCSS('#aboutimg', 'heartBeat');
}

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });