const tombol = document.querySelector('.toggle');
const nav = document.querySelector('nav ul');

tombol.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
