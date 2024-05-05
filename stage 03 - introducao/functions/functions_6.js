// callback function

function sayMyName3(name){
    console.log('antes de executar a função callback')
    name()
    console.log('depois de executar a callback')
}   

sayMyName3(
    () => {
        console.log('estou em uma callback')
    }
)