const menuToggler = document.querySelector('.menu-toggler'),
  topNav = document.querySelector('#top-nav');

menuToggler.onclick = () => {
  menuToggler.classList.toggle('active');
  topNav.classList.toggle('active');
  document.body.classList.toggle('active');
  document.documentElement.classList.toggle('active');

}