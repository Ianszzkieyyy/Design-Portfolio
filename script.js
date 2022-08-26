"use strict";

const aboutBtn = document.querySelector(".hero-nav :nth-child(1)");
const aboutSection = document.querySelector(".about-section");

aboutBtn.addEventListener("click", function () {
  aboutSection.scrollIntoView();
});

const portBtn = document.querySelector(".hero-nav :nth-child(2)");
const portSection = document.querySelector(".portfolio-header");

portBtn.addEventListener("click", function () {
  portSection.scrollIntoView();
});

const contactBtn = document.querySelector(".hero-nav :nth-child(5)");
const contactSection = document.querySelector(".contact-section");

contactBtn.addEventListener("click", function () {
  contactSection.scrollIntoView();
});
