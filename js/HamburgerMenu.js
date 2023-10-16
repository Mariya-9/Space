// Dropdown Menu Declaration
const mainD = document.querySelector("#dropdown-list");
const toggleBtn = document.querySelector(".btn-toggle");
const toggleBtnIcon = document.querySelector(".btn-toggle i");
const dropDownMenu = document.querySelector(".dropdown-menu");

//dropdownlist code

for (let i = 1; i <= 4; i++) {
  const newD = document.createElement("li");

  newD.setAttribute("class", "dropdown-nav-list");
  for (let j = 1; j <= 1; j++) {
    const newA = document.createElement("a");
    newA.textContent = "Space" + i;
    newA.href = "#Space" + i;

    function respondToTheClick() {}

    newA.addEventListener("click", respondToTheClick);
    newA.removeEventListener("click", respondToTheClick);
    newD.appendChild(newA);
  }

  mainD.appendChild(newD);
}

// toggleBtn.addEventListener("click", function (e) {
//   dropDownMenu.classList.toggle("open");
// });
const toggleB = document.querySelector("#dropDown-btn");
const containerL = document.querySelector(".landing-sections ");
document.onclick = function (e) {
  if (
    e.target.id !== "dropDown-btn" &&
    e.target.className !== "header-ul" &&
    e.target.className !== "btn-toggle"
  ) {
    toggleB.classList.remove("open");
    dropDownMenu.classList.remove("open");
  }
};

toggleB.onclick = function () {
  toggleB.classList.toggle("open");
  dropDownMenu.classList.toggle("open");
};
