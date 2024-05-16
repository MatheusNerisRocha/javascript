/*
 Nesse desafio você irá criar uma lista de **estudantes** e, 
 cada estudante dentro dessa lista, deverá conter os seguintes dados:

 - nome;
 - nota da primeira prova;
 - nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada 
aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/


const students = [
    {
        name: "Matheus",
        noteOne: 5,
        noteTwo: 10
    },
    {
        name: "Pedro",
        noteOne: 4,
        noteTwo: 2
    },
    {
        name: "João",
        noteOne: 2,
        noteTwo: 10
    },
]

function average(noteOne,noteTwo){
    return ((parseInt(noteOne) + parseInt(noteTwo)) / 2)
    
}

const getMessage = (student) => {
    let resultAverage = average(student.noteOne, student.noteTwo)
    return `A média do(a) aluno(a) ${student.name} é: ${resultAverage}
    ${resultAverage >= 7 ? `Parabéns ${student.name}! Você foi aprovado(a) no concurso!` : `
    Não foi dessa vez, ${student.name}! Tente Novamente`}`
}

for(student of students){
    let message = getMessage(student)
    alert(message)
}