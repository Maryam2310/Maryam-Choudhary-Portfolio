


const menuIcon = document.querySelector(".icon");
const toggleBtn = document.getElementById("toggle-btn");
const navigationMenu = document.querySelector(".navigation-menu");
const ul = document.querySelector("ul");



menuIcon.addEventListener("click", () => {

  MenuIconAnimation();

});


toggleBtn.addEventListener("click", () => {

  navigationMenu.classList.toggle("active");
  ul.classList.toggle("active");

});






/* Menu icon animation */
function MenuIconAnimation() {

  document.querySelector(".line-1").classList.remove("no-animation");
  document.querySelector(".line-2").classList.remove("no-animation");
  document.querySelector(".line-3").classList.remove("no-animation");
  document.querySelector(".line-1").classList.toggle("rotate");
  document.querySelector(".line-2").classList.toggle("rotate");
  document.querySelector(".line-3").classList.toggle("rotate");

}



