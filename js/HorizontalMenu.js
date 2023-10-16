// Define Global Variables

const mainUl = document.querySelector("#navbar__list");
let landingSection = document.querySelectorAll("section");
let hideNavbar = document.querySelector(".header-ul");
let hide = document.querySelectorAll("nav");
let topButton = document.querySelector(".scrollTop");
const windowsInnerHeight = window.innerHeight;
const selfInnerHight = self.innerHeight;
const windowsInnerWidth = window.innerWidth;
let documentEl = document.documentElement;

// build the nav

for (let i = 1; i <= 4; i++) {
  const newLi = document.createElement("li");

  //   newLi.setAttribute("class", " section" + i + " box");
  newLi.setAttribute("class", ` nav-item box`);
  for (let j = 1; j <= 1; j++) {
    const newAnchor = document.createElement("a");
    newAnchor.textContent = "Space" + i;
    newAnchor.href = "#Space" + i;
    newAnchor.setAttribute("class", "nav-list box");

    function respondToTheClick() {}

    newAnchor.addEventListener("click", respondToTheClick);
    newAnchor.removeEventListener("click", respondToTheClick);
    newLi.appendChild(newAnchor);
  }

  mainUl.appendChild(newLi);
}

// Add class 'active' to section when near top of viewport

function boundingActivate() {
  landingSection.forEach((sec) => {
    const boundHeight = sec.getBoundingClientRect().height;
    if (boundHeight < windowsInnerHeight) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", boundingActivate);
boundingActivate();

// Scroll to anchor ID using scrollTO event
// Set sections as active
// Build menu
// Scroll to section on link click

window.addEventListener("scroll", () => {
  landingSection.forEach((section) => {
    const sectionId = section.getAttribute("id");
    if (
      window.scrollY > section.offsetTop - 20 &&
      window.scrollY < section.offsetTop + section.offsetHeight - 30
    ) {
      document
        .querySelector(`a[href^="#${section.id}"]`)
        .classList.add("active");
    } else {
      document
        .querySelector(`a[href^="#${section.id}"]`)
        .classList.remove("active");
    }
  });
});

//

// Top Button
function buttonScrolledTop() {
  documentEl.scrollIntoView({
    top: 0,
    behavior: "smooth",
  });
}
topButton.addEventListener("click", buttonScrolledTop);

// smooth Scroll
function smoothScroll() {
  mainUl.querySelectorAll(`a[href^="#"]`).forEach((smooth) => {
    smooth.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
smoothScroll();
