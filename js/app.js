const item = ["Javascript", "Html, Css", "PHP"];

const handleItem = item.slice(-2, -1);
console.log(handleItem); // Html, Css

// go top

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

// Header

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10
    ? header.classList.add("active")
    : header.classList.remove("active");
});

// search

const searchBtn = document.querySelector("[data-search-btn]");
const searchWrapper = document.querySelector("[data-search-wrapper]");

searchBtn.addEventListener("click", function () {
  searchWrapper.classList.toggle("active");
});
