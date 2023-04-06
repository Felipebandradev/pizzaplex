const botao = document.querySelector("nav h2");
const linksMenu = document.querySelector(".menu");

botao.addEventListener("click", function(event){
    event.preventDefault();
    linksMenu.classList.toggle("aberto");
});
