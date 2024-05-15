/*
   Capturar 2 números
   e fazer as operações matemáticas
   de soma, subtração, multiplicação,
   divisão e resto da divisão.

   E para cada operação, mostrar um alerta
   com o resultado.
*/

let numberOne = prompt("Digite o primeiro número")
let numberTwo = prompt("Digite o segundo número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const subtraction = numberOne - numberTwo
const multiplication = numberOne * numberTwo
const division = numberOne / numberTwo
const restOfDivision = numberOne % numberTwo

alert("Soma: " + sum)
alert("Subtração: " + subtraction)
alert("Multiplicação: " + multiplication)
alert("Divisão: " + division)
alert("Resto da divisão: " + restOfDivision)