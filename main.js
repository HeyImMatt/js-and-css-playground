const hamburgerMenuBtn = document.getElementById('hamburger-menu');
const hamburgerMenuList = document.getElementById('hamburger-menu-list');
const mainContent = document.getElementById('main-content');
const playerLi = document.getElementById('main-content').querySelectorAll('li');
const playerLists = document.querySelectorAll('.player-lists');
let draggedPlayer;

hamburgerMenuBtn.addEventListener('click', () => {
  if (hamburgerMenuList.style.display === 'flex') {
    hamburgerMenuList.style.animationName = 'hideMenu';
    setTimeout(() => {
      hamburgerMenuList.style.display = 'none';
    }, 400);
  } else {
    hamburgerMenuList.style.display = 'flex';
    hamburgerMenuList.style.animationName = 'showMenu';
  }
});

playerLi.forEach((player) => {
  player.addEventListener('dragstart', function(event) {
    draggedPlayer = event.target;
    player.className = 'drag-start';
    console.dir(draggedPlayer);
  });
});

playerLi.forEach((player) => {
  player.addEventListener('dragend', function(event) {
    player.className = '';
  });
});

playerLists.forEach((list) => {
  list.addEventListener('dragover', function(event) {
    event.preventDefault();
    list.classList = 'player-lists drag-over';
  });
});

playerLists.forEach((list) => {
  list.addEventListener('dragleave', function(event) {
    event.preventDefault();
    list.classList = 'player-lists';
  });
});

playerLists.forEach((list) => {
  list.addEventListener('dragend', function(event) {
    event.preventDefault();
    list.classList = 'player-lists';
  });
});


playerLists.forEach((list) => {
  list.addEventListener('drop', function(event) {
    event.preventDefault();
    list.classList = 'player-lists';
    onDrop(event.target.closest('div'));
  });
});

function onDrop(target) {
  if (target.classList.contains('player-lists') && target.id !== draggedPlayer.closest('div').id) {
    //draggedPlayer.closest('div').lastElementChild.removeChild(draggedPlayer);
    target.lastElementChild.append(draggedPlayer);
  }
}