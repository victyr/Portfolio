const containMenu = document.getElementById('container_menu');
const hamburgerMenu = document.getElementById('hamburger_menu');
const closeButton = document.getElementById('close_button');
const navElement = document.querySelectorAll('.menu_mobile a');

hamburgerMenu.addEventListener('click', () => {
  containMenu.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  containMenu.style.display = 'none';
});

navElement.forEach((element) => {
  element.addEventListener('click', () => {
    containMenu.style.display = 'none';
  });
});