// STICKY NAVBAR

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

// ANIMATE.CSS

$(document).ready(function () {
  $(window).scroll(function () {
    oTop = $("#proj1").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      $('#proj1').addClass('animate__animated animate__fadeInUp');
    }
    oTop = $("#proj2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      $('#proj2').addClass('animate__animated animate__fadeInUp');
    }
    oTop = $("#proj3").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      $('#proj3').addClass('animate__animated animate__fadeInUp');
    }
    oTop = $("#proj4").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      $('#proj4').addClass('animate__animated animate__fadeInUp');
    }
    oTop = $("#tools").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      $('.img-thumbnail').addClass('animate__animated animate__fadeInUp');
    }
    oTop = $("#about").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      $('#about').addClass('animate__animated animate__zoomIn');
    }
  });
});

// GSAP ANIMATIONS

// Name
gsap.from(".word", { duration: 0.5, y: -300, opacity: 0, stagger: 0.1 });

// Logo
TweenLite.set("#logo", { x:-400, y:-200});
var tl = new TimelineLite();
  tl.to("#logo", 0.5, { y:-250})
    .to("#logo", 1.25, { y:0, ease:Bounce.easeOut})
    .to("#logo", 2.5, {x:"+=400"}, "-=1.75")

// Hi Message
document.getElementById('logo').addEventListener('click',function() {
  TweenMax.fromTo('#hi', 1, {opacity: 0}, {opacity: 1, repeatDelay: 0.5, repeat: 1, yoyo: true});
})

// AboutImg Animation
function specialEffect(){
  animateCSS('#about-img', 'bounceInRight');
}

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve) => {
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

