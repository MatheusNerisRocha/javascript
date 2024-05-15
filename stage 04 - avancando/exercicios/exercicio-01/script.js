/*
 Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, 
 calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/

const numberOne = Number(prompt("Digite o primeiro número"))
const numberTwo = Number(prompt("Digite o segundo número"))

const sum = numberOne + numberTwo
const subtraction = numberOne - numberTwo
const multiplication = numberOne * numberTwo
const division = numberOne / numberTwo
const restOfDivision = numberOne % numberTwo
const evenOrOdd = (sum / 2) % 2  === 0 


alert(`A soma dos 2 números é: ${sum}`)
alert(`A subtração dos 2 números é: ${subtraction}`)
alert(`A multiplicação dos 2 números é: ${multiplication.toFixed(2)}`)
alert(`A divisão dos 2 números é: ${division.toFixed(2)}`)
alert(`O resto da divisão dos 2 números é: ${restOfDivision}`)

if(evenOrOdd  ) {
    alert(`A soma dos 2 números é par: ${sum}`)
} else {
    alert(`A soma dos 2 números é ímpar ${sum}`)
}

if(numberOne === numberTwo){
    alert(`Os 2 números inseridos são iguais`)
} else {
    alert(`Os 2 números inseridos são diferentes`)
}