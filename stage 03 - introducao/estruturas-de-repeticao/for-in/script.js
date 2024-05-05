// for...in

let person = {
    name: 'Matheus',
    age: 23,
    weight: 72.2
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}