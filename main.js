const hamburgerMenuBtn = document.getElementById('hamburger-menu');
const hamburgerMenuList = document.getElementById('hamburger-menu-list');

hamburgerMenuBtn.addEventListener('click', () => {
  if (hamburgerMenuList.style.display === 'flex') {
    hamburgerMenuList.style.animationName = 'hideMenu';
    setTimeout(() => {
      hamburgerMenuList.style.display = 'none'
    }, 400);
  }
  else {
    hamburgerMenuList.style.display = 'flex';
    hamburgerMenuList.style.animationName = 'showMenu';
  }
})