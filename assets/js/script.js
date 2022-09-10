"use strict";
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((l) => {
  l.addEventListener("click", function (e) {
    e.preventDefault();
    const id = l.getAttribute("href");

    if (id === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (id !== "#" && id.startsWith("#")) {
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
    if (l.classList.contains("main-nav-link")) {
      headerEL.classList.toggle("nav-open");
    }
  });
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  (entry) => {
    const ent = entry[0];
    console.log(ent.target);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
