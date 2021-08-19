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

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const myWork = document.querySelector("#work");
const testimonials = document.querySelector("#testimonials");

const homeContact = document.querySelector(".home__contact");
const contact = document.querySelector("#contact");

homeContact.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
});
