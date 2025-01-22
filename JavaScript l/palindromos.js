const palavra = prompt("Informe uma palavra: ").toLowerCase();
//Convertemos a palavra informada para letras mínusculas, assim evitamos erros "Ovo !== ovO"
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
    alert (palavra + " é um palíndromo!")
} else {
    alert (palavra + " não é um palíndromo!\n\n" + palavra + " é diferente de " + palavraInvertida)
}