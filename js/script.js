'use strict';

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Open the Modal
function newopenModal() {
  document.getElementById("newMyModal").style.display = "block";
}

// Close the Modal
function newcloseModal() {
  document.getElementById("newMyModal").style.display = "none";
}

var slideIndex = 1;
showSlided(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlided((slideIndex += n));
}

// Thumbnail image controls
function currentSlides(n) {
  showSlided((slideIndex = n));
}

function showSlided(n) {
  var i;
  var slides = document.getElementsByClassName("myNewSlide");
  var dots = document.getElementsByClassName("myNewDemo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Open the Modal
function semiopenModal() {
  document.getElementById("semiMyModal").style.display = "block";
}

// Close the Modal
function semicloseModal() {
  document.getElementById("semiMyModal").style.display = "none";
}

var slideIndex = 1;
showSlider(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlider((slideIndex += n));
}

// Thumbnail image controls
function currentSlider(n) {
  showSlider((slideIndex = n));
}

function showSlider(n) {
  var i;
  var slides = document.getElementsByClassName("semiMySlide");
  var dots = document.getElementsByClassName("semiMyDemo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}



/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function hideNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// const headerBg = () => {
//   const header = document.querySelector(".js-header");

//   window.addEventListener("scroll", function () {
//     if (this.scrollY > 0) {
//       header.classList.add("bg-reveal");
//     } else {
//       header.classList.remove("bg-reveal");
//     }
//   })
// }
// headerBg();

// const reveal = () => {
//   const button = document.querySelector("#movetop");

//   window.addEventListener("scroll", function () {
//     if (this.scrollY > 200) {
//       document.querySelector("#movetop").style.display = "block"
//     } else {
//       document.querySelector("#movetop").style.display = "none"
//     }
//   })
// }
// reveal();


// function openNav() {
//   document.getElementById("myNav").style.height = "100%";
// }


// function closeNav() {
//   document.getElementById("myNav").style.height = "0%";
// }