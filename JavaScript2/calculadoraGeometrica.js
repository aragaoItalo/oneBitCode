function areaTriangulo()  {
    const base = parseFloat(prompt("Informe a base do triângulo:"));
    const altura = parseFloat(prompt("Informe a altura do triângulo:"));
    return (base*altura)/2 
}

function areaRetangulo() {
    const base = parseFloat(prompt("Informe a base do retângulo:"));
    const altura = parseFloat(prompt("Informe a altura do retaângulo:"));
    return (base*altura)
}

function areaQuadrado() {
    const lado = parseFloat(prompt("Informe um lado do quadrado:"));
    return (lado*lado)
}

function areaTrapezio() {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
    const altura = parseFloat(prompt("Informe a altura do trapézio:"));
    return (baseMaior+baseMenor)*altura/2
}

function areaCirculo() {
    const raio = parseFloat(prompt("Informe o raio do círculo:"))
    return (3.14*raio*raio)
  }  

function exibirMenu() {
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área do círculo\n" +
        "2. Calcular área do quadrado\n" +
        "3. Calcular área do retângulo\n" +
        "4. Calcular área do triângulo\n" +
        "5. Calcular área do trapézio\n" +
        "6. Sair\n"
    )
}

function calculadoraGeometrica() {
    let option = "";
    do {
        option = exibirMenu()
        let result

        switch (option) {
            case "1":
                result = areaCirculo()
                break;
            case "2":
                result = areaQuadrado()
                break;
            case "3":
                result = areaRetangulo()
                break;
            case "4":
                result = areaTriangulo()
                break;
            case "5":
                result = areaTrapezio()
                break;
            case "6":
                alert("Saindo...")
                break;
            default:
                alert("Opção inválida!")
                break;
        }

        if (result) {
            alert("Resultado: " + result)
        }

    } while (option !== "6");
}

calculadoraGeometrica();