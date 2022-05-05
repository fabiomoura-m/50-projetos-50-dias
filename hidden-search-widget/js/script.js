const search = document.querySelector('.search');
const button = document.querySelector('.button');
const input = document.querySelector('.input');

button.addEventListener('click', toggleSearch);

function toggleSearch() {
  search.classList.toggle('active');
  input.focus();
}
