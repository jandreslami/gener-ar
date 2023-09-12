function generarCUITAleatorio (conGuiones = false) {
  const cuitProvisorio = [20, 24, 27, 30, 34][Math.random() * 4.9 | 0] + '' + (Math.random() * 40000000 + 10000000 | 0)
  let suma = 0
  for (let i = 0; i < cuitProvisorio.length; i++) {
    suma += parseInt(cuitProvisorio[cuitProvisorio.length - i - 1]) * (2 + (i % 6))
  }
  const verificador = (x => x === 11 ? 0 : x)(11 - (suma % 11))

  if (verificador === 10) {
    generarCUITAleatorio()
  } else if (conGuiones) {
    const primerosDosDigitos = cuitProvisorio.toString().substring(0, 2)
    const restoDelCuit = cuitProvisorio.toString().substring(2)
    return `${primerosDosDigitos}-${restoDelCuit}-${verificador}`
    // return cuitProvisorio + verificador;
  } else {
    return cuitProvisorio + verificador
  }
}

console.log(generarCUITAleatorio())
