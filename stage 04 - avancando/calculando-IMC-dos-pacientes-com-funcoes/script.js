/*
   Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

   "Paciente X possui o IMC de: Y"

   Onde X é o nome do paciente e Y é o IMC desse paciente

   Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura x altura) */


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

 function IMC (weight, height) {
   return (weight / ((height / 100) ** 2)).toFixed(2)
 }

const printPacientIMC = (patient) => {
   return`
   Paciente ${patient.name} possui o IMC de 
   ${IMC(patient.weight, patient.height)}
   `
}

for(let patient of patientes) {
   let IMCmessage = printPacientIMC(patient)
   alert(IMCmessage)
}



