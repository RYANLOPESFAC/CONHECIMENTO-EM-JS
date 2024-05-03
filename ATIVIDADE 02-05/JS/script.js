//1. If, else if, e else: Vai ver se você é adulto.

let idade = 20;

if (idade < 18) {
    console.log("Você é menor de idade.");
} else if (idade >= 18 && idade < 65) {
    console.log("Você é um adulto.");
} else {
    console.log("Você é um idoso.");
}

//2. Switch case: Vai informar uma opção.

let opcao = 2;
switch (opcao) {
    case 1:
        console.log("Primeira opção");
        break;
    case 2:
        console.log("Segunda opção");
        break;
    case 3:
        console.log("Terceira opção");
        break;
    default:
        console.log("Opção inválida");
}

//3. For loop: Ela realiza um Loop ciclo de rologio -> 

let frutas = ["maçã", "banana", "laranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


// 4. While loop: Ela começa a contar do 0 ao 4 assim dando 5 e encerrando o processo 

let contador = 0;
while (contador < 5) {
    console.log("Contador:", contador);
    contador++;
}

// -------------------------------------------------------------------------------------------------

// Para cada um dos temas listados acima, traga dois exemplos práticos de uso em JavaScript.


// Exemplo determine par. : parte 2. If, else if, e else:

let numero = 7;

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}


// 2. Switch case: Exemplo 2: Verificar o tipo de uma figura geométrica.

let figura = "triângulo";
let tipo;

switch (figura) {
    case "quadrado":
    case "retângulo":
        tipo = "quadrilátero";
        break;
    case "triângulo":
        tipo = "triângulo";
        break;
    case "círculo":
        tipo = "círculo";
        break;
    default:
        tipo = "Figura desconhecida";
}
console.log("A figura " + figura + " é um " + tipo + ".");


//3. For loop: Exemplo 2: Calcular a soma dos primeiros 10 números naturais.

let soma = 0;
for (let i = 1; i <= 10; i++) {
    soma += i;
}
console.log("A soma dos primeiros 10 números naturais é: " + soma);


//4. While loop: Exemplo 2: Simular o crescimento de uma população de bactérias até atingir um limite.

let populacao = 10;
let limite = 1000;
let anos = 0;

while (populacao < limite) {
    populacao *= 2;
    anos++;
}
console.log("A população atingiu " + populacao + " em " + anos + " anos.");
