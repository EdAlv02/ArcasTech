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
const nav = document.getElementById('navbar');

const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });