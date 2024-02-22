window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var navbarContainer = document.querySelector('.navbar');

    if (window.scrollY > header.clientHeight) {
      navbarContainer.classList.add('scrolled');
    } else {
      navbarContainer.classList.remove('scrolled');
    }
  });