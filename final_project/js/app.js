var services = document.getElementById('services');
var dropdownMenu = document.querySelector(".dropdown-menu");
var slides = document.getElementById('slides').children;

services.addEventListener("mouseover", function(){
    dropdownMenu.style.display = "block";

});
services.addEventListener("mouseout", function(){
    dropdownMenu.style.display = "none";

});


var prev = document.getElementById('previous');
var nex = document.getElementById('next');

var i = 0;
var p = slides.length-1;
//var n = slides.length-1;

prev.addEventListener("mousedown", function(){
  if (i>0) {
    console.log(i)
  slides[i].classList.remove("active");
  i = i-1;
  slides[i].classList.add("active");
  console.log(slides[i], i);
  }
  else {
    slides[i].classList.remove("active");
    i = p;
    console.log(i);
    slides[i].classList.add("active");

  }
});

nex.addEventListener("mousedown", function(){
  if (i<p) {
    console.log(i);
    slides[i].classList.remove("active");
    i = i+1;
    slides[i].classList.add("active");
    slides.style.transition = "all 2s"
  }

  else {
    console.log(i);
    slides[i].classList.remove("active");
    i = 0;
    slides[i].classList.add("active");
    slides.style.transition = "all 2s"
  }
});
