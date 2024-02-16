window.onload = function() {
    ["navbar", "header", "footer"].forEach(id => {
      fetch(`templates/${id}.html`)
        .then(response => response.text())
        .then(data => {
          document.getElementById(id).innerHTML = data;
        });
    });
  };
  