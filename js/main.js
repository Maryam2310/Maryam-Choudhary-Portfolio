

import data from "./modules/projectsData.js";




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




/*Projects loading function */

window.onload = function () {

  const projectDiv = document.querySelector(".projects");
  let projects = "";

  for (let i = 0; i < data.length; i++) {

    projects += `<div class="project">
     <div class="project-image-div">
      <img class="project-image" src=${data[i].imageSrc} alt="project-image"/>   
      </div>
      
      <div class="project-details">
      <h3 class="project-name">${data[i].name}</h3>
      <div class="project-technology" aria-hidden="true"> 
   ${data[i].technology.map(i => {
      return `<span class="icons"><i class="${i}"></i></span>`
    }).join("")}
   ${data[i].jqueryIcon ? `<img src=${data[i].jqueryIcon} class="jquery-icon"/>` : ""}
     </div>
 <div class="project-links">
     <div class="project-demo"><a href=${data[i].demo} target="_blank"><i class="fa-solid fa-link"></i>demo</a></div>
     <div class="project-code"><a href=${data[i].code} target="_blank"> <i class="fa-solid fa-code"></i>code </a></div>
     </div>
     </div> 
     </div>`;
  }
  projectDiv.innerHTML = projects;

}









