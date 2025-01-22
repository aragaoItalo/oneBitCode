//Atividade Robo da Tabuada: devemos informar um número e iremos calcular a tabuada dele, para isso armazenamos o nmr que o user informou e com o laço FOR conseguimos montar a tabuada.

const numero = parseFloat(prompt("De qual número você deseja calcular a tabuada?"))
let resultado = ""

for (let fator = 1; fator <= 10; fator++) {
    resultado += " -> " + numero + " x " + fator + " = " + (numero * fator) + "\n"
}
  
alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado)