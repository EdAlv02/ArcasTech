window.onload = function () {
  ["script", "header", "footer", "head"].forEach((id) => {
    fetch(`templates/${id}.html`)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(id).innerHTML = data;
      });
  });
};

function pageName() {
  const url = window.location.pathname;
  const part = url.split("/");
  console.log(part);

}
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