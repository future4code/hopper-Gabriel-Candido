```js

//Exercícios de Fixação de Javascript
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let somaTotal = ex + (p1*2) + (p2*3)
  let resultado = somaTotal / 6
  if(resultado >= 9.0){
    return "A"
  } else if (resultado >= 7.5){
    return "B"
  } else if (resultado >= 6.0){
    return "C"
  } else {
    return "D"
  }
}

```