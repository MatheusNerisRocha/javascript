// Object

const person = {
    name: 'Matheus',
    age: 23,
    weight: 72.5,
    isAdmin: true
}

console.log(person.name);

console.log(`${person.name} tem ${person.age} anos`);

// Array
const animails = [
    'Lion',
    'Monkey',
    'Cat',
    {
        name: 'Dog',
        age: 3
    }
]

// acessar valores
console.log(animails[3].name);
console.log(animails.length);