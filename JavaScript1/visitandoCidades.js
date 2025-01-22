//Atividade Visitando Cidades: nessa atv solicitamos o nome do turista e deixamos 2 variaveis em branco. No While, solicitamos ao turista o nome da cidade que foi visitada, enquanto ele visitar novas cidades o While continua a salvar o nome das cidades e quantas cidades foram visitadas. No final exibimos esses dados ao user com o alert.

const turista = prompt("Olá, turista! Qual é o seu nome?");

let cidades = "";
let contagem = 0;

let continuar = prompt("Visitou alguma cidade? (Sim/Não)");

while (continuar === "Sim") {
    let cidade = prompt("Qual cidade você visitou?");
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)