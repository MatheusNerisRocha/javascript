// if...else

let temparature = 37.4
let highTemperature = temparature >= 37.5
let midiumTemperature = temparature < 37.5 && temparature >=37



// if (temparature >= 37) {
//     console.log('Febre')
// } else {
//     console.log('Saudável')
// }

if (highTemperature) {
    console.log('Febre alta')
} else if (midiumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}
