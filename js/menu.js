const menuMobile = document.getElementById("menu-mobile");
const ul = document.getElementById("menu-nav-lista");

// Abre/fecha o menu ao clicar no botão
menuMobile.addEventListener("click", function() {
  this.classList.toggle("active");
  ul.classList.toggle("active");
});

// Fecha o menu ao clicar em um link dentro dele
const links = document.querySelectorAll("#menu-nav-lista a#link");

links.forEach(link => {
  link.addEventListener("click", () => {
    // Remove classes "active" do botão e do menu
    menuMobile.classList.remove("active");
    ul.classList.remove("active");
  });
});
