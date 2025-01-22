//Atividade Cadastro de Usuario: Pegando dados de um user e exibindo esses dados na tela com prompt + alert.

const primeiroNome = prompt("Insira seu primeiro nome: ");
const segundoNome = prompt("Insira seu sobrenome: ");
const campoDeEstudo = prompt("Qual o seu campo de estudos?");
const anoDeNascimento = parseFloat(prompt("Em que ano você nasceu?"));

alert(
    "Recruta cadastrado com sucesso!\n" + 
    "\nNome completo: " + primeiroNome + " " + segundoNome + 
    "\nCampo de estudo: " + campoDeEstudo + 
    "\nIdade: " + (2024 - anoDeNascimento) + " " + "anos"
);