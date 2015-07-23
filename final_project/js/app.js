var services = document.getElementById('services');
var dropdownMenu = document.querySelector(".dropdown-menu");

services.addEventListener("mouseover", function(){
    dropdownMenu.style.display = "block";
});
services.addEventListener("mouseout", function(){
    dropdownMenu.style.display = "none";

});


console.log(services);
