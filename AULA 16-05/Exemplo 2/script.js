const elemento = document.querySelectorAll("p");

elemento.firstEach(function(teste){
    console.log(teste);
});

const alerta = document.querySelector(". btn-primary");

alerta.addEventListener("click", function(){
    alerta("Funcionou???");
});

const escuro = document.querySelector(".btn-btn-dark");

escuro.addEventListener("click", function(){
    const pagina_escuro = document.querySelector("body");
    pagina_escuro.style.background("black");
});