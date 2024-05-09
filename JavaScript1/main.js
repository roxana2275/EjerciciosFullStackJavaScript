function funcionEjercicio1() {
  window.alert("Hello World");
}

function funcionEjercicio2() {
  document.write("Hello World");
  location.reload();
}

function funcionEjercicio3() {
  let resultado = 3 + 5;
  document.getElementById("resultadoEjercicio3").innerHTML = resultado;
}

function funcionEjercicio4() {
  let nombre = window.prompt("Ingrese se nombre");

  document.getElementById("resultadoEjercicio4").innerHTML = "Hola " + nombre;
}

function funcionEjercicio5() {
  let numero1 = parseInt(document.getElementById("variableUnoEjercicioCinco").value);
  let numero2 = parseInt(document.getElementById("variableDosEjercicioCinco").value);
  resultadoEjercicio5.textContent = "Resultado: " + (numero1 + numero2);
}

function funcionEjercicio6() {
  let numeroUno = parseInt(document.getElementById("variableUnoEjercicioSeis").value);
  let numeroDos = parseInt(document.getElementById("variableDosEjercicioSeis").value);

  if (numeroUno > numeroDos) {
    resultadoEjercicio6.textContent = "Numero Uno es Mayor";
  } else if (numeroUno < numeroDos) {
    resultadoEjercicio6.textContent = "Numero Dos es Mayor";
  } else if (numeroUno == numeroDos) {
    resultadoEjercicio6.textContent = "Los numeros son iguales";
  } else {
    resultadoEjercicio6.textContent = "Valores ingresados incorrectos";
  }
}
function funcionEjercicio7() {
  let numeroUno = parseInt(document.getElementById("variableUnoEjercicioSiete").value);
  let numeroDos = parseInt(document.getElementById("variableDosEjercicioSiete").value);
  let numeroTres = parseInt(document.getElementById("variableTresEjercicioSiete").value);

  let auxiliar;

  do {
    //console.log("numeroUno: "+ numeroUno+" numeroDos: "+numeroDos+"numeroTres: "+numeroTres)
    if (numeroUno > numeroDos) {
      auxiliar = numeroUno;
      numeroUno = numeroDos;
      numeroDos = auxiliar;
    }
    //console.log("numeroUno: "+ numeroUno+" numeroDos: "+numeroDos+"numeroTres: "+numeroTres)

    if (numeroDos > numeroTres) {
      auxiliar = numeroDos;
      numeroDos = numeroTres;
      numeroTres = auxiliar;
    }
    //console.log("numeroUno: "+ numeroUno+" numeroDos: "+numeroDos+"numeroTres: "+numeroTres)
  } while (numeroUno > numeroDos || numeroDos > numeroTres);
  resultadoEjercicio7.textContent = numeroUno + " es menor que " + numeroDos + " es menor que " + numeroTres;
}

function funcionEjercicio8() {
  let numeroEj8 = parseInt(document.getElementById("variableUnoEjercicioOcho").value);

  if (numeroEj8 % 2 === 0) {
    resultadoEjercicio8.textContent = "El nuemero es divisible por dos";
  } else {
    resultadoEjercicio8.textContent = "El numero no es divisible por dos";
  }
}

function funcionEjercicio9() {
  let fraseLetraA = document.getElementById("variableUnoEjercicioNueve").value.toLowerCase();
  let contador = 0;
  for (let i = 0; i < fraseLetraA.length; i++) {
    //console.log(fraseLetraA.substring(index,index+1));

    if (fraseLetraA.substring(i, i + 1) === "a") {
      contador++;
    }
  }
  //console.log(contador)
  resultadoEjercicio9.textContent = "Cantidad: " + contador;
}

function funcionEjercicio10() {
  let fraseVocales = document.getElementById("variableUnoEjercicioDiez").value.toLowerCase();
  let vocalesEncontradas=[];
  for (let i = 0; i < fraseVocales.length; i++) {
    let letra = fraseVocales.substring(i, i + 1)
    switch (letra) {
      case "a":
        vocalesEncontradas.push("a");
        break;
      case "e":
        vocalesEncontradas.push("e");
        break;
      case "i":
        vocalesEncontradas.push("i");
        break;
      case "o":
        vocalesEncontradas.push("o");
        break;
      case "u":
        vocalesEncontradas.push("u");
        break;
    }
  }
  //console.log(vocalesEncontradas)
  resultadoEjercicio10.textContent = vocalesEncontradas ;
}

function funcionEjercicio11(){
  let fraseVocales = document.getElementById("variableUnoEjercicioOnce").value.toLowerCase();
  let contador=0;
  for (let i = 0; i < fraseVocales.length; i++) {
    let letra = fraseVocales.substring(i, i + 1)
    if(letra==="a"||letra==="e"||letra==="i"||letra==="o"||letra==="u"){
      contador++;
    }
  }
  //console.log(vocalesEncontradas)
  resultadoEjercicio11.textContent = contador ;
}

function funcionEjercicio12(){
  let fraseVocales = document.getElementById("variableUnoEjercicioDoce").value.toLowerCase();
  //console.log(fraseVocales)
  let cantidadVocalesEncontradas=[{letra:'a',cantidad:0},{letra:'e',cantidad:0},{letra:'i',cantidad:0},{letra:'o',cantidad:0},{letra:'u',cantidad:0}];
  for (let i = 0; i < fraseVocales.length; i++) {
    let letra = fraseVocales.substring(i, i + 1)
    switch (letra) {
      case "a":
        cantidadVocalesEncontradas[0].cantidad++;
        break;
      case "e":
        cantidadVocalesEncontradas[1].cantidad++;
        break;
      case "i":
        cantidadVocalesEncontradas[2].cantidad++;
        break;
      case "o":
        cantidadVocalesEncontradas[3].cantidad++;
        break;
      case "u":
        cantidadVocalesEncontradas[4].cantidad++;
        break;
    }
  }
  //console.log(cantidadVocalesEncontradas)
  const strings = cantidadVocalesEncontradas.map(item => `${item.letra}: ${item.cantidad}`);
  const resultado = strings.join(', ');

  resultadoEjercicio12.textContent = resultado;

}

function funcionEjercicio13(){
  let numeroEj13 = parseInt(document.getElementById("variableUnoEjercicioTrece").value);
   if (numeroEj13 % 2 === 0) {
    resultadoEjercicio13.textContent = "El nuemero es divisible por 2";
  } else if(numeroEj13 % 3 === 0){
    resultadoEjercicio13.textContent = "El nuemero es divisible por 3";
  }else if(numeroEj13 % 5 === 0){
    resultadoEjercicio13.textContent = "El nuemero es divisible por 5";
  }else if(numeroEj13 % 7 === 0){
    resultadoEjercicio13.textContent = "El nuemero es divisible por 7";
  }else{
    resultadoEjercicio13.textContent = "El nuemero no es divisible por 2,3,5 o 7";
  }
}

  function funcionEjercicio14(){
    let numeroEj14 = parseInt(document.getElementById("variableUnoEjercicioCatorce").value);
    let divisible=[];
    //console.log(numeroEj13);

    if (numeroEj14 % 2 === 0) {
      divisible.push("2")
    }
    if(numeroEj14 % 3 === 0){
      divisible.push("3")
    }
    if(numeroEj14 % 5 === 0){
      divisible.push("5")
    }
    if(numeroEj14 % 7 === 0){
      divisible.push("7")
    }
    if(divisible.length==0){
      resultadoEjercicio14.textContent = "El numero no es divisible";

    }else{
      resultadoEjercicio14.textContent = "El numero es divisible por "+divisible;

    }

  }

function funcionEjercicio15(){
  let numeroEj15 = parseInt(document.getElementById("variableUnoEjercicioQuince").value);
  let divisible=[];
  for(let i=1;i<=numeroEj15;i++){
    if(numeroEj15 % i ===0){
      divisible.push(i);
    }
  }
  if(divisible.length==0){
    resultadoEjercicio15.textContent = "El numero no es divisible";

  }else{
    resultadoEjercicio15.textContent = "El numero es divisible por "+divisible;

  }

}

function funcionEjercicio16() {
  let numero1=parseInt(document.getElementById("variableUnoEjercicioDieciseis").value);
  let numero2=parseInt(document.getElementById("variableDosEjercicioDieciseis").value);
  const divisoresComunes = [];
  const menorNumero = Math.min(numero1, numero2);

  for (let i = 1; i <= menorNumero; i++) {
      if (numero1 % i === 0 && numero2 % i === 0) {
          divisoresComunes.push(i);
      }
  }

  resultadoEjercicio16.textContent = "Los divisores comunes son: "+divisoresComunes;
}

function funcionEjercicio17(){
  let numero1 = parseInt(document.getElementById("variableUnoEjercicioDiecisite").value);
  console.log(numero1)
  let divisible=[];
  for(let i=2;i<numero1;i++){
    if(numero1 % i ===0){
      divisible.push(i);
    }
  }
  if(divisible.length == 0){
    resultadoEjercicio17.textContent = "El numero es primo";

  }else{
    resultadoEjercicio17.textContent = "El numero no es primo ";

  }
}

function funcionEjercicio18(){
  let numero1 = parseInt(document.getElementById("variableUnoEjercicioDieciocho").value);
  if(numero1>=18){
    resultadoEjercicio18.textContent = "Ya puede conducir";
  }else{
    resultadoEjercicio18.textContent = "No puede conducir"
  }
}

function funcionEjercicio19(){
  let numero1 = parseInt(document.getElementById("variableUnoEjercicioDiecinueve").value);
  switch(numero1){
    case 0:
      resultadoEjercicio19.textContent = "Muy deficiente";
      break;
    case 1:
      resultadoEjercicio19.textContent = "Muy deficiente";
      break;
    case 2:
      resultadoEjercicio19.textContent = "Muy deficiente";
      break;
    case 3:
      resultadoEjercicio19.textContent = "Insuficiente";
      break;
    case 4:
      resultadoEjercicio19.textContent = "Insuficiente";
      break;
    case 5:
      resultadoEjercicio19.textContent = "Suficiente";
      break;
    case 6:
      resultadoEjercicio19.textContent = "Bien";
      break;
    case 7:
      resultadoEjercicio19.textContent = "Notable";
      break;
    case 8:
      resultadoEjercicio19.textContent = "Notable";
      break;
    case 9:
      resultadoEjercicio19.textContent = "Sobresaliente";
      break;
    case 10:
      resultadoEjercicio19.textContent = "Sobresaliente";
      break;
    default:
      resultadoEjercicio19.textContent = "Valor incorrecto";
      break;

  }

}

function funcionEjercicio20(){
  let cadenas = [];
  let cadena;
  do {
    cadena = prompt("Por favor ingresa una cadena de texto (o haz clic en 'Cancelar' para salir):");
    if (cadena !== null) {
      cadenas.push(cadena);
    }
  } while (cadena !== null);

  if (cadenas.length > 0) {
    let resultado = cadenas.join(" - ");
    resultadoEjercicio20.textContent = resultado;
  } else {
    resultadoEjercicio20.textContent = "No se ingresaron cadenas.";
  }

}

function funcionEjercicio21(){
  let cadena;
  let sumador=0;
  do {
    cadena = prompt("Por favor ingresa un número:");
    
    if (!isNaN(parseInt(cadena))) {
      sumador += parseInt(cadena);
    } else {
      alert("Debe ingresar un número válido.");
    }
  } while (cadena !== null);

    resultadoEjercicio21.textContent = sumador;
}

function funcionEjercicio22(){

  let dni;
     
  do{
    let aux;
    aux=prompt("Por favor ingresa tu número de DNI (o haz clic en 'Cancelar' para salir):");
    if(aux === null){
      alert("Ingrese un valor");
    }else if (aux < 0 || aux > 99999999) {
      alert("Ingrese valores entre 0 y 99999999");
    } else if (isNaN(parseInt(aux))){
      alert("El valor ingresado debe ser un número")
    }else{
      dni = aux;
    }
  }while(dni === null || dni === undefined || dni === '');
  const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
  const resto = dni % 23;
  resultadoEjercicio22.textContent = letras.charAt(resto);
}


function funcionEjercicio23(){
  let contador =1;
  for (let i =1; i<=30;i++){
    let linea = "";
    for (let j =1; j<=i;j++){
      linea += contador;
    }
    console.log(linea);
    contador++;
  }
}

function funcionEjercicio24(){
  let contador =numeroUno;
  for (let i =numeroUno; i>=0;i--){
    let linea = "";
    for (let j =1; j<=i;j++){
      linea += contador;
    }
    console.log(linea);
    contador --;
  }
}

function funcionEjercicio25(){
  for (let index = 1; index <=500; index++) {
    if(index % 4 ===0 ){
      console.log(index+" (Múltiplo de 4)");
    }else if(index % 9 ===0 ){
      console.log(index+" (Múltiplo de 9)");
    }else{
        console.log(index);
    }
    if(index % 5 ===0 ){
      console.log("----------------")
    }
  }
}