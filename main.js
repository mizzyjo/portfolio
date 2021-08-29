"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  // console.log(navbarHeight);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link);
  scrollIntoView(link);
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");

homeContactBtn.addEventListener("click", (event) => {
  scrollIntoView("#contact");
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  console.log(filter);
  if (filter == null) {
    return;
  }

  projectContainer.classList.add("anim-out");
  // Put in setTimeout this code-block
  // projects.forEach((project) => {
  //   if (filter === "*" || filter === project.dataset.type) {
  //     project.classList.remove("invisible");
  //   } else {
  //     project.classList.add("invisible");
  //   }
  // });

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);

  // Same as forEach
  // for(let project of projects){

  // }

  // let project;
  // for(let i = 0; i < projects.length; i++){
  //   project = projects[i];
  // }
});

// const workBtns = document.querySelector(".work__categories");
// const workProject = document.querySelector(".work__projects");
// const projectDescription = document.querySelectorAll(
//   ".project__description[data-work]"
// );
// const unoProject = document.querySelectorAll(".project");

// workBtns.addEventListener("click", (event) => {
//   const workBtnCategory = event.target.dataset.category;
//   console.log(`unoprojectlength ${unoProject.length}`);

//   if (workBtnCategory == null) {
//     return;
//   } else if (workBtnCategory === "js") {
//     for (let i = 0; i < unoProject.length; i++) {
//       if (projectDescription[i].dataset.work != "js") {
//         unoProject[i].classList.add("unvisible");
//       } else {
//         unoProject[i].classList.remove("unvisible");
//       }
//     }
//   } else if (workBtnCategory === "tp") {
//     for (let i = 0; i < unoProject.length; i++) {
//       if (projectDescription[i].dataset.work != "tp") {
//         unoProject[i].classList.add("unvisible");
//       } else {
//         unoProject[i].classList.remove("unvisible");
//       }
//     }
//   } else if (workBtnCategory === "react") {
//     for (let i = 0; i < unoProject.length; i++) {
//       if (projectDescription[i].dataset.work != "react") {
//         unoProject[i].classList.add("unvisible");
//       } else {
//         unoProject[i].classList.remove("unvisible");
//       }
//     }
//   } else {
//     for (let i = 0; i < unoProject.length; i++) {
//       unoProject[i].classList.remove("unvisible");
//     }
//   }
// });

// function scrollIntoView
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
}
