const btnOpen = document.querySelector('.open');
const btnClose = document.querySelector('.close');
const nav = document.querySelector('nav');
const container = document.querySelector('.container');

btnOpen.addEventListener('click',function() {
  nav.classList.add('active');
  container.classList.add('active');
});

btnClose.addEventListener('click',function() {
  nav.classList.remove('active');
  container.classList.remove('active');
});