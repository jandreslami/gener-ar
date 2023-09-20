function generarCUITAleatorio (conGuiones = false) {
  const cuitProvisorio = [20, 24, 27, 30, 34][Math.random() * 4.9 | 0] + '' + (Math.random() * 40000000 + 10000000 | 0);

  let suma = 0;
  for (let i = 0; i < cuitProvisorio.length; i++) {
    suma += parseInt(cuitProvisorio[cuitProvisorio.length - i - 1]) * (2 + (i % 6));
  }
  const verificador = (x => x === 11 ? 0 : x)(11 - (suma % 11));

  if (verificador === 10) {
    return generarCUITAleatorio();
  } else if (conGuiones) {
    const primerosDosDigitos = cuitProvisorio.toString().substring(0, 2);
    const restoDelCuit = cuitProvisorio.toString().substring(2);
    return `${primerosDosDigitos}-${restoDelCuit}-${verificador}`;
  } else {
    return cuitProvisorio + verificador;
  }
}

function randomElement (array) {
  return array[Math.floor(Math.random() * array.length)];
}

function formatDate (date) {
  // Format the date as 'DD/MM/YYYY'
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1
  const year = date.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

export { generarCUITAleatorio, randomElement, formatDate };
