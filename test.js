const loadAbout = () => {
    fetch("about.html")
      .then(response => response.text())
      .then(
        text => {
        document.querySelector("#about").innerHTML = text;
      })
      .catch(
        error => {
        document.querySelector("#about").innerHTML = "Coming soon!";
      });
  };
  