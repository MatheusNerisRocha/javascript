/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os
  parabéns.

  Se o aluno não passou no bimestre,
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt("Qual o nome do(a) aluno(a)")
let note1 = prompt("Qual a nota da primeira prova?")
let note2 = prompt("Qual a nota da segunda prova?")
let note3 = prompt("Qual a nota da terceira prova?")

note1 = Number(note1)
note2 = Number(note2)
note3 = Number(note3)

/* 
   Fazer a média
   (note1 + note2 + note3) / 3 
*/

const average = ((note1 + note2 + note3) / 3).toFixed(2)
let result = average > 6

if(result){
   alert(`Parabéns ${student} sua média foi de: ${average}!`)
} else {
   alert(`${student} se esforce na prova de recuperação para atingir a média, pois a sua média foi: ${average}, você consegue!!`)
}