const medidaEmMetro = parseFloat(prompt("Insira a medida (em metros) que deverá ser convertida: "));

const unidade = prompt(
    "Para qual unidade de medida deseja converter?" +
    "\n1 - milímetros (mm)" +
    "\n2 - centímetros (cm)" +
    "\n3 - decímetros (dm)" +
    "\n4 - decâmetros (dam)" +
    "\n5 - hectômetro (hm)" +
    "\n6 - quilômetro (km)"
  )

  switch (unidade) {
    case "1":
      alert("Resultado: " + medidaEmMetro + "m = " + medidaEmMetro * 1000 + "mm")
      break
    case "2":
      alert("Resultado: " + medidaEmMetro + "m = " + medidaEmMetro * 100 + "cm")
      break
    case "3":
      alert("Resultado: " + medidaEmMetro + "m = " + medidaEmMetro * 10 + "dm")
      break
    case "4":
      alert("Resultado: " + medidaEmMetro + "m = " + medidaEmMetro / 10 + "dam")
      break
    case "5":
      alert("Resultado: " + medidaEmMetro + "m = " + medidaEmMetro / 100 + "hm")
      break
    case "6":
      alert("Resultado: " + medidaEmMetro + "m = " + medidaEmMetro / 1000 + "km")
      break
    default:
      alert("Opção inválida!")
      break
  }