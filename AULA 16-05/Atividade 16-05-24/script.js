const imagens = document.querySelectorAll("img");
 imagens.forEach(function(img){
     console.log(img);
 });

 const paragrafoPorsche = document.querySelector("#porsche-paragraph");
 paragrafoPorsche.textContent += " O Museu da Porsche oferece uma coleção impressionante de veículos históricos e conceitos inovadores.";

 const paragrafoNurburgring = document.querySelector("#nurburgring-paragraph");
 paragrafoNurburgring.textContent += " Visitar o Nürburgring é uma experiência inesquecível para qualquer entusiasta de automobilismo.";

 const paragrafoBMW = document.querySelector("#bmw-paragraph");
 paragrafoBMW.textContent += " Este museu oferece uma visão aprofundada da evolução dos carros BMW e é um ponto turístico imperdível para os fãs da marca.";

 const paragrafoAudi = document.querySelector("#audi-paragraph");
 paragrafoAudi.textContent += " A visita ao Audi museum mobile proporciona uma viagem fascinante através da história e evolução da marca Audi.";




 const paragrafoAutobahn = document.querySelector("#autobahn-paragraph");
 paragrafoAutobahn.textContent += " A Autobahn é conhecida mundialmente por suas seções sem limite de velocidade, proporcionando uma experiência única de direção.";




 const alerta = document.querySelector(".btn-primary");
 alerta.addEventListener("click", function(){
     alert("Funcionou???");
 });



 const escuro = document.querySelector(".btn-dark");
 escuro.addEventListener("click", function(){
     const pagina_escuro = document.querySelector("body");
     pagina_escuro.style.backgroundColor = "black";
     pagina_escuro.style.color = "white";
 });


 const branco = document.querySelector(".btn-light");
 branco.addEventListener("click", function(){
     const pagina_claro = document.querySelector("body");
     pagina_claro.style.backgroundColor = "white";
     pagina_claro.style.color = "black";
 });