/* 
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person (name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando"
    }
}

const matheus = new Person("Matheus")
const joao = new Person("Joao")
console.log(matheus)
console.log(joao.walk())