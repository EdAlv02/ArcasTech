window.onload = function () {
  ["script", "header", "footer", "head"].forEach((id) => {
    fetch(`templates/${id}.html`)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(id).innerHTML = data;
      });
  });
};

const pageLoc = window.location.href;

function getPageName() {
  const url = window.location.href;
  const parts = url.split("/");
  return parts[parts.length - 1];
}
const pageName = getPageName();
console.log(pageName);

var inicio = document.getElementById('inicioNavLink');

switch (pageName) {
  case "index.html":
    inicio.style.borderBottom = "1px solid #EDDC5A";
    inicio.style.borderRadius = "3px";
    console.log("Si sirve");
    break;
  case "nosotros.html":
    console.log("Si sirve");
    inicio.style.borderBottom = "1px solid #EDDC5A";
    inicio.style.borderRadius = "3px";
    break;
  case "servicios.html":
    console.log("Si sirve");
    link.classList.add("inicio-style");
    for (const link of inicio) {
    }
    break;
  case "portafolio.html":
    console.log("Si sirve");
    for (const link of inicio) {
      link.classList.add("inicio-style");
    }
    break;
  case "contacto.html":
    console.log("Si sirve");
    for (const link of inicio) {
      link.classList.add("inicio-style");
    }
    break;
  default:
    console.log("No sirve");
}

// const pageName = window.location.pathname;

// const navBarLinks = document.querySelectorAll(".navbar-nav a");
// var inicio = document.getElementById('inicioNavLink');

// for (const link of navBarLinks) {
//   link.style.borderBottom = "none";
//   link.style.borderRadius = "0px";
// }

// switch (pageName) {
//   case "/index.html":
//     inicio.style.borderBottom = "1px solid #EDDC5A";
//     inicio.style.borderRadius = "3px";
//     inicio.style.color = "black";
//     break;
//   case "/nosotros.html":
//     document.querySelector(".nosotros").style.borderBottom = "1px solid #EDDC5A";
//     document.querySelector(".nosotros").style.borderRadius = "3px";
//     break;
//   case "/servicios.html":
//     document.querySelector(".servicios").style.borderBottom = "1px solid #EDDC5A";
//     document.querySelector(".servicios").style.borderRadius = "3px";
//     break;
//   case "/portafolio.html":
//     document.querySelector(".portafolio").style.borderBottom = "1px solid #EDDC5A";
//     document.querySelector(".portafolio").style.borderRadius = "3px";
//     break;
//   case "/contacto.html":
//     document.querySelector(".contacto").style.borderBottom = "1px solid #EDDC5A";
//     document.querySelector(".contacto").style.borderRadius = "3px";
//     break;
// }