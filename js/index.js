// Loader
let myVar;

function mySite() {
  myVar = setTimeout(showPage, 2500);
}
  
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myPortfolio").style.display = "block";
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
    oTop = $("#proj5").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      $('#proj5').addClass('animate__animated animate__fadeInUp');
    }
    oTop = $("#proj6").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
      $('#proj6').addClass('animate__animated animate__fadeInUp');
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

// GSAP ANIMATION
// Name
gsap.from(".word", { duration: 1.5, y: -30, opacity: 0, stagger: 0.1, delay: 2.5 });

// AboutImg Animation
function specialEffect(){
  animateCSS('#intro-img', 'bounceInRight');
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


// Fetch Dev.to API

function getData() {
fetch('https://dev.to/api/articles?username=tushar_kandpal')
.then((res) => res.json())
.then((data) => {
  let output = ``;
  // console.log(data);
  data.map(( item ) => {
    output += `
    <div class="post">
    <h5>${item.title}</h5>
    <p>${item.description}</p>
    <a class="secondary" href="${item.url}" target="_blank">Read More</a>
    </div>
  `;
  });
  document.getElementById('output').innerHTML = output;
})

}

// Call to fetch
getData();