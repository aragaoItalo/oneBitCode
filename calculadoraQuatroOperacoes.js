const x = parseFloat(prompt("Insira o primeiro número: "));
const y = parseFloat(prompt("Insira o outro número: "));

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert (
    "Resultados: \n" + 
    "\nSoma: " + soma + 
    "\nSubtração: " + subtracao + 
    "\nMultiplicação: " + multiplicacao + 
    "\nDivisão: " + divisao
);