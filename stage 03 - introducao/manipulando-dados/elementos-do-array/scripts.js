// Manipulando Arrays

// Contar elementos de um array

console.log(["a","b","c"].length)


console.log(
        ['a','b','c',
        {type: "array"},
        function (){
        return "alo"
    }
].length)

console.log(
    [
    "a",
    {type: "array"},
    function (){
    return "alo"
}
][2]())

