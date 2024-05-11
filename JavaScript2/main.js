function siguiente(num) {
  return num + 1;
}

function mayor(num1, num2) {
  let texto;
  if (num1 > num2) {
    texto = num1 + " es mayor que " + num2;
  } else if (num1 < num2) {
    texto = num2 + " es mayor que " + num1;
  } else if (num1 === num2) {
    texto = "los numeros son iguales";
  } else {
    texto = "hay un error con los valores cargados";
  }
  return texto;
}

function promedio(num1, num2, num3) {
  let texto;
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    texto = "debe ingresar tres números";
  } else {
    texto = (num1 + num2 + num3) / 3;
  }
  return texto;
}

function doble(num) {
  let texto;
  if (isNaN(num)) {
    texto = "debe ingresar números";
  } else {
    texto = num * 2;
  }
  return texto;
}

function cuadrado(num) {
  let texto;
  if (isNaN(num)) {
    texto = "debe ingresar números";
  } else {
    texto = Math.pow(num, 2);
  }
  return texto;
}

function ElDobleDelSiguiente(num) {
  return siguiente(doble(num));
}

function ElDobleDelSiguienteAlCuadrado(num) {
  return cuadrado(ElDobleDelSiguiente(num));
}

function perimetro(num) {
  let texto;
  if (isNaN(num)) {
    texto = "debe ingresar números";
  } else {
    texto = doble(doble(num));
  }
  return texto;
}

function superficie(num) {
  let texto;
  if (isNaN(num)) {
    texto = "debe ingresar números";
  } else {
    texto = cuadrado(num);
  }
  return texto;
}

function diasPorMes(mes) {
  let texto;
  switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      texto = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      texto = 30;
      break;

    case 2:
      texto = 28;
      break;
    default:
      texto = "Numereo invalido";
      break;
  }
  return texto;
}

function funcionEjercicio1() {
  let cantidad = document.getElementById("variableUnoEjercicio1").value;
  let contador = 0;
  while (contador < cantidad) {
    console.log(
      "Bienvenidos al curso Full Stack-vuelta numero " + (contador + 1)
    );
    contador++;
  }
}

function funcionEjercicio2() {
  let num1 = parseInt(document.getElementById("variableUnoEjercicio2").value);
  let num2 = parseInt(document.getElementById("variableDosEjercicio2").value);

  resultadoEjercicio2.textContent = mayor(num1, num2);
}

function funcionEjercicio3() {
  let num1 = parseInt(document.getElementById("variableUnoEjercicio3").value);
  let num2 = parseInt(document.getElementById("variableDosEjercicio3").value);
  let num3 = parseInt(document.getElementById("variableTresEjercicio3").value);

  resultadoEjercicio3.textContent = promedio(num1, num2, num3);
}

function funcionEjercicio4() {
  let suma = 0,
    contador = 0;
  while (true) {
    let nota = parseFloat(prompt("Ingrese una nota (-1 para salir): "));
    if (nota === -1) {
      break;
    }
    suma += nota;
    contador++;
  }
  if (contador === 0) {
    console.log(contador);
    resultadoEjercicio4.textContent = "No se ingresaron notas.";
  } else {
    resultadoEjercicio4.textContent =
      "Promedio: " +
      suma / contador +
      "  Siguiente a promedio: " +
      siguiente(suma / contador);
  }
}

function funcionEjercicio5() {
  let numero1 = parseInt(
    document.getElementById("variableUnoEjercicio5").value
  );
  resultadoEjercicio5.textContent = doble(numero1);
}

function funcionEjercicio6() {
  let numeroUno = parseInt(
    document.getElementById("variableUnoEjercicio6").value
  );
  resultadoEjercicio6.textContent = cuadrado(numeroUno);
}
function funcionEjercicio7() {
  let numeroUno = parseInt(
    document.getElementById("variableUnoEjercicioSiete").value
  );

  resultadoEjercicio7.textContent =
    "Doble: " +
    doble(numeroUno) +
    " Siguiente: " +
    siguiente(numeroUno) +
    " Cuadrado: " +
    cuadrado(numeroUno);
}

function funcionEjercicio8() {
  let numeroEj8 = parseInt(
    document.getElementById("variableUnoEjercicioOcho").value
  );
  resultadoEjercicio8.textContent = ElDobleDelSiguiente(numeroEj8);
}

function funcionEjercicio9() {
  let num = parseInt(
    document.getElementById("variableUnoEjercicioNueve").value
  );
  console.log(num);
  resultadoEjercicio9.textContent = ElDobleDelSiguienteAlCuadrado(num);
}

function funcionEjercicio10() {
  let num = parseInt(document.getElementById("variableUnoEjercicioDiez").value);
  resultadoEjercicio10.textContent = perimetro(num);
}

function funcionEjercicio11() {
  let num = parseInt(document.getElementById("variableUnoEjercicioOnce").value);
  resultadoEjercicio11.textContent = superficie(num);
}

function funcionEjercicio12() {
  let num = parseInt(document.getElementById("variableUnoEjercicioDoce").value);
  resultadoEjercicio12.textContent = doble(Math.PI * num);
}

function funcionEjercicio13() {
  let numeroEj13 = parseInt(
    document.getElementById("variableUnoEjercicioTrece").value
  );
  resultadoEjercicio13.textContent = Math.PI * cuadrado(numeroEj13);
}

function funcionEjercicio14() {
  let numeroEj14 = parseInt(
    document.getElementById("variableUnoEjercicioCatorce").value
  );
  resultadoEjercicio14.textContent = diasPorMes(numeroEj14);
}

function funcionEjercicio15() {
  let numeroEj15 = parseInt(
    document.getElementById("variableUnoEjercicioQuince").value
  );
  if (
    (numeroEj15 % 4 === 0 && numeroEj15 % 100 !== 0) ||
    numeroEj15 % 400 === 0
  ) {
    resultadoEjercicio15.textContent = "El año es bisiesto";
  } else {
    resultadoEjercicio15.textContent = "El año no es bisiesto";
  }
}

function funcionEjercicio16() {
  let d = document.getElementById("variableUnoEjercicioDieciseis").value;
  const dia = new Date(d);
  let mes = dia.getMonth() + 1;
  resultadoEjercicio16.textContent = diasPorMes(mes);
}

function funcionEjercicio17() {
  let dia = document.getElementById("variableUnoEjercicioDiecisite").value;
  let fecha = new Date(dia);
  let fecha2 = fecha.setDate(fecha.getDate() - 1);
  let fecha3 = new Date(fecha2);
  resultadoEjercicio17.textContent =
    fecha3.getDate() + "/" + fecha3.getMonth() + "/" + fecha3.getFullYear();
}

function funcionEjercicio18() {
  let dia = document.getElementById("variableUnoEjercicioDieciocho").value;
  let fecha = new Date(dia);
  mes = fecha.getMonth() + 1;
  resultadoEjercicio18.textContent = diasPorMes(parseInt(mes));
}

function funcionEjercicio19() {
  let edades = [];
  for (let i = 0; i <= 60; i++) {
    edades.push(i);
  }
  for (let i = 0; i <= edades.length; i++) {
    console.log(edades[i]);
  }
}

function funcionEjercicio20() {
  let cantidad = parseInt(
    document.getElementById("variableUnoEjercicioVeinte").value
  );

  for (let i = 1; i <= cantidad; i++) {
    if (i % 2 === 0) {
      console.log(
        "Bienvenidos al curso Full Stack. Esta es la vuelta numero " + i
      );
    }
  }
}

function funcionEjercicio21() {
  let cantidad = parseInt(
    document.getElementById("variableUnoEjercicioVeintiuno").value
  );
  let valores = [];
  for (let i = 0; i < cantidad; i++) {
    let aux = Math.floor(Math.random() * 101);
    valores.push(aux);
  }
  let mayor = 100;
  for (let i = 0; i < cantidad; i++) {
    if (valores[i] < mayor) {
      mayor = valores[i];
    }
  }

  for (let i = 0; i < cantidad; i++) {
    console.log(valores[i]);
  }
  console.log("El numero menor es " + mayor);
}

function funcionEjercicio22() {
  let cantidad = parseInt(
    document.getElementById("variableUnoEjercicioVeintidos").value
  );
  let valores = [];
  for (let i = 0; i < cantidad; i++) {
    let aux = Math.floor(Math.random() * 101);
    valores.push(aux);
  }
  let mayor = 1;
  for (let i = 0; i < cantidad; i++) {
    if (valores[i] > mayor) {
      mayor = valores[i];
    }
  }

  for (let i = 0; i < cantidad; i++) {
    console.log(valores[i]);
  }
  console.log("El numero mayor es " + mayor);
}

function funcionEjercicio23() {
  let tamanio = parseInt(
    document.getElementById("variableUnoEjercicioVeintitres").value
  );
  let posicion = parseInt(
    document.getElementById("variableDosEjercicioVeintitres").value
  );
  let valores = [];
  if (posicion > tamanio) {
    console.log("La posicion es mayor al array");
  } else {
    for (let i = 0; i < tamanio; i++) {
      let aux = Math.floor(Math.random() * 101);
      valores.push(aux);
    }
    console.log("Array");
    for (let i = 0; i < tamanio; i++) {
      console.log(valores[i]);
    }
    console.log("Resultado en posicion: ");
    console.log(valores[posicion - 1]);
  }
}

function funcionEjercicio24() {
  let tamanio = parseInt(
    document.getElementById("variableUnoEjercicioVeinticuatro").value
  );

  let valores = [];
  let repetidos = [];
  for (let i = 0; i < tamanio; i++) {
    let aux = Math.floor(Math.random() * 101);
    valores.push(aux);
  }
  console.log(valores.join(","));
  if (valores.length === 0) {
    console.log("El array está vacío.");
  }

  let frecuencia = {};

  for (let i = 0; i < valores.length; i++) {
    let valor = valores[i];
    if (frecuencia[valor]) {
      frecuencia[valor]++;
    } else {
      frecuencia[valor] = 1;
    }
  }

  let valoresRepetidos = [];
  for (let valor in frecuencia) {
    if (frecuencia[valor] > 1) {
      valoresRepetidos.push(valor);
    }
  }

  console.log("Los valores repetidos son:", valoresRepetidos.join(","));
}

function funcionEjercicio25() {
  let myColor = ["Rojo", "Verde", "Blanco", "Negro"];

  console.log(myColor.join(","));
}

function funcionEjercicio26() {
  let numero = parseInt(
    document.getElementById("variableUnoEjercicioVeintiseis").value
  );
  let cadena = numero.toString();
  let array = cadena.split("");
  let invertidoArray = array.reverse();
  let invertidoCadena = invertidoArray.join("");
  let numeroInvertido = parseInt(invertidoCadena);

  console.log(numeroInvertido);
}

function funcionEjercicio27() {
  let texto = document.getElementById("variableUnoEjercicioVeintisiete").value;
  let soloLetras = texto.toLowerCase().replace(/[^a-z]/g, "");
  let cadenaOrdenadaArray = soloLetras.split("").sort();
  console.log(cadenaOrdenadaArray.join(""));
}

function funcionEjercicio28() {
  let texto = document.getElementById("variableUnoEjercicioVeintiocho").value;
  let array=texto.split("")
  array[0]=array[0].toUpperCase();
  for(let i=0;i<array.length;i++) {
    if(array[i] === " "){
      array[i+1]=array[i+1].toUpperCase();
    }
  }
  console.log(array.join(""));
}

function funcionEjercicio29() {
  let texto = document.getElementById("variableUnoEjercicioVeintinueve").value;
  let palabras =texto.split(" ");
  let palabraLarga="";
  palabras.forEach(function(palabra){
    if(palabra.length>palabraLarga.length){
      palabraLarga=palabra;
    }
  });
  console.log(palabraLarga);
}
