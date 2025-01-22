//Atividade Palíndromos: Recebemos uma palavra e devemos identificar se ela é um palíndromo, ou seja, se ela pode ser lida tanto da direita pra esquerda e vice versa. Para isso usamos o FOR para percorrer toda a extensão da palavra e então compara-la, para evitar erros usamos .toLowerCase para transformar a palavra em minusculas.

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