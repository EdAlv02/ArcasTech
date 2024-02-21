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


// const pageLoc = window.location.href;

// function getPageName() {
//   const url = window.location.href;
//   const parts = url.split("/");
//   return parts[parts.length - 1];
// }
// const pageName = getPageName();
// console.log(pageName);

// var inicio = document.getElementById('inicioNavLink');

// switch (pageName) {
//   case "index.html":
//     inicio.style.borderBottom = "1px solid #EDDC5A";
//     inicio.style.borderRadius = "3px";
//     console.log("Si sirve");
//     break;
//   case "nosotros.html":
//     console.log("Si sirve");
//     inicio.style.borderBottom = "1px solid #EDDC5A";
//     inicio.style.borderRadius = "3px";
//     break;
//   case "servicios.html":
//     console.log("Si sirve");
//     link.classList.add("inicio-style");
//     for (const link of inicio) {
//     }
//     break;
//   case "portafolio.html":
//     console.log("Si sirve");
//     for (const link of inicio) {
//       link.classList.add("inicio-style");
//     }
//     break;
//   case "contacto.html":
//     console.log("Si sirve");
//     for (const link of inicio) {
//       link.classList.add("inicio-style");
//     }
//     break;
//   default:
//     console.log("No sirve");
// }

