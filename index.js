const palabraMinus = "minúsculas";
console.log(palabraMinus)
console.log("converted into...")

function primeraLetraMayus (palabra){
  console.log(palabra.replace(palabra[0],palabra[0].toUpperCase()));
}

primeraLetraMayus(palabraMinus)
