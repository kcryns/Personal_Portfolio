const toggleMenu2 = document.querySelector(".toggle__menu2");
const headerNav2 = document.querySelector(".navigation ul");
const xsearch = document.querySelector(".search__icon");
const hatdog = document.querySelector(".hatdog");
const ekis = document.querySelector(".ekis");
toggleMenu2.addEventListener("click", () => {
  toggleMenu2.classList.toggle("open");
  headerNav2.classList.toggle("open");
  headerNav2.style=("transition: 300ms");
});

xsearch.addEventListener("click", () => {
  hatdog.classList.toggle("open");

});

ekis.addEventListener("click", () => {
  hatdog.classList.toggle("open");

});

const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav ul");
const arjay = document.querySelector(".arjay");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  headerNav.style=("transition: 300ms");
  arjay.classList.toggle("open");
});



const kamote = document.querySelectorAll('.drop__item h4');
kamote.forEach((kamoteq) => {
    kamoteq.addEventListener('click', () => {
        kamoteq.nextElementSibling.classList.toggle('open');
        kamoteq.querySelector("i").classList.toggle("open");
       
    })
})