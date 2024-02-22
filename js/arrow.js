window.addEventListener('scroll', function() {
    var backtop = document.getElementById('back-top');
    if (window.scrollY > 50) {
      backtop.classList.add('visible');
      backtop.classList.remove('invisible');
    } else {
      backtop.classList.remove('visible');
      backtop.classList.add('invisible');
    }
  }); 