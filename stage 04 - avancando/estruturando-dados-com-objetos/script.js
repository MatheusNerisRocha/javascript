/*

  Crie uma lista de pacientes

  Cada paciente dentro da lista deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes suas idades, alturas e pesos
*/

const patientes = [
  {
    name: "Matheus",
    age: 23,
    weight: 72,
    height: 170
  }, 
  {
    name: "Lucas",
    age: 20,
    weight: 80,
    height: 190
  },
  {
    name: "Pedro",
    age: 18,
    weight: 67,
    height: 160
  },
  {
    name: "João",
    age: 19,
    weight: 76,
    height: 180
  }
]

let patientesName = []
let message = ""

for(patient of patientes) {
  message += `${patient.name} tem ${patient.age} anos ${patient.height} de altura e seu peso
  é de ${patient.weight}.\n`
}

alert(message)

