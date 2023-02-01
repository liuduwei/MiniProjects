const containerSearch = document.querySelector('.container--search');
const btnSearch = document.querySelector('.btn--search');
const input = document.querySelector('.input--search');

btnSearch.addEventListener('click', function() {
  containerSearch.classList.toggle('active');
  input.focus()
});