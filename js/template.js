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
   