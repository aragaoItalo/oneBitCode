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