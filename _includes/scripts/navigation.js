function classToggle() {
  const navs = document.querySelectorAll('.nav-items')

  navs.forEach(nav => nav.classList.toggle('nav-toggle-show'));
  var header = document.querySelector('.header');
  header.classList.toggle('header-toggle');
}

var navToggle = document.querySelector('.header').children.item(0).querySelector('.nav-link-toggle');

navToggle.addEventListener('click', classToggle);
