const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".navigation");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
});
