let menu;
let navbar;

document.getElementById('menu-icon').addEventListener('click', function() {
    toggleNavbar();
  });

  function toggleNavbar() {
    menu = document.querySelector("#menu-icon");
    navbar = document.querySelector('.navbar');
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    console.log("HI ")
  }