const carroUm = prompt("Informe o nome do primeiro corredor: ");
const carroDois = prompt("Informe o nome do segundo corredor: ");

const velocidadeUm = parseFloat(prompt("Qual a velocidade do primeiro corredor?"));
const velocidadeDois = parseFloat(prompt("Qual a velocidade do segundo corredor?"));

if ( velocidadeUm > velocidadeDois ) {
    alert(carroUm + " " + " é mais rápido do que o " + " " + carroDois);
} else if ( velocidadeDois > velocidadeUm ) {
    alert(carroDois + " " + " é mais rápido do que o " + " " + carroUm);
} else {
    alert("Os dois corredores possuem a mesma velocidade!")
};