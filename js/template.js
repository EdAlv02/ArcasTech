// Insertar archivos html en otro archivo Html
window.onload = function () {
  ["script", "footer", "head"].forEach((id) => {
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


// Funcion del identificador de páginas y mandar a llamar el archivo header.html a otro html
// Función para cargar el archivo header.html
function includeHeader() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          document.getElementById("header").innerHTML = this.responseText;
          // Luego de cargar el header, ejecutar la función para resaltar el enlace activo
          setActiveNavLink();
      }
  };
  xhttp.open("GET", "templates/header.html", true); // Cambia la ruta al directorio templates
  xhttp.send();
}

// Función para establecer el enlace activo
function setActiveNavLink() {
  let url = window.location.href;
  const tabs = ["index", "nosotros", "servicios", "portafolio", "contacto"];
  let isHomePage = url.endsWith("/") || !url.includes(".html");

  tabs.forEach(e => {
      if ((isHomePage && e === "index") || url.includes(e + ".html")) {
          setActive("tab-" + e);
      }
  });

  function setActive(id) {
      const liElement = document.getElementById(id);
      if (liElement) {
          const anchorElement = liElement.querySelector('a');
          anchorElement.classList.add('active');
      }
  }
}

// Llamar a la función para cargar el header
includeHeader();

// Funcion botones Servicio
function addActiveOn(button) {
  if (!button.classList.contains('collapsible')) {
    return; 
  }

  button.addEventListener('click', () => {
    button.classList.toggle('activeOn');
  });
}

const buttons = document.querySelectorAll('.collapsible');
buttons.forEach(button => addActiveOn(button));


// Funcion para abrir el sobre
$(document).ready(function(){
	$('.frame').click(function(){
		$('.top').addClass('open');
		$('.message').addClass('pull');
	})
});



