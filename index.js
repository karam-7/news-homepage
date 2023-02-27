const menuOpen = document.querySelector('.open');
const menuClose = document.querySelector('.close');
const navUl = document.querySelector('.nav-ul');

menuOpen.addEventListener('click', () => {
  menuOpen.style.display = 'none';
  menuClose.style.display = 'block';
  navUl.style.display = 'block';
  navUl.style.right = '0';
});

menuClose.addEventListener('click', () => {
  menuClose.style.display = 'none';
  navUl.style.display = 'none';
  menuOpen.style.display = 'block';
});
