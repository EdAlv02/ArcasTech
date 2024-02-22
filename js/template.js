window.onload = function () {
  ["script", "header", "footer", "head"].forEach((id) => {
    fetch(`templates/${id}.html`)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(id).innerHTML = data;
      });
  });
};

//Funcion navbar cambio de color
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var navbarContainer = document.querySelector('.navbar');

  if (window.scrollY > header.clientHeight) {
    navbarContainer.classList.add('scrolled');
  } else {
    navbarContainer.classList.remove('scrolled');
  }
});

//Funcion de back-top para hacerlo visible
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

const pathname = window.location.pathname;

switch (pathname) {
  case "/index.html":
    document.getElementById("inicio").classList.add("active");
    break;
  case "/nosotros.html":
    document.getElementById("nosotros").classList.add("active");
    break;
  case "/servicios.html":
    document.getElementById("servicios").classList.add("active");
    break;
  case "/portafolio.html":
    document.getElementById("portafolio").classList.add("active");
    break;
  case "/contacto.html":
    document.getElementById("contacto").classList.add("active");
    break;
}
