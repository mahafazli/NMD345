/* function addListeners() {
  document.querySelectorAll("nav li").forEach((menuItem) => {
    menuItem.onclick = () => {
      showOnly(sectionId);
    };
  });
}

function showOnly(sectionId) {
  document.querySelectorAll("section").forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "block";
} */

const loadAbout = () => {
  fetch("about.html")
    .then(response => response.text())
    .then(html => {
      document.querySelector("#about").innerHTML = html;
    })
    .catch(error => {
      console.error("Fetch error:", error);
      document.querySelector("#about").innerHTML = "coming soon!";
    });
};



