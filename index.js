const a = "minúsculas";
console.log(a)

function primeraLetraMayus (palabra){
  let primeraLetra = palabra[0];
  primeraLetra = primeraLetra.toUpperCase()
  console.log(palabra.replace(palabra[0],primeraLetra));
}

primeraLetraMayus(a)
