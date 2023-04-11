const prompt = require(`prompt-sync`)()

let velocidadeMedia = parseFloat(prompt(`Digite a velocidade média do veículo (Km/h): `))
let tempoGasto = parseFloat(prompt(`Digite o tempo gasto na viagem (horas): `))
let distancia = velocidadeMedia * tempoGasto
let litro = distancia/12

console.log(`A velocidade média é: ${velocidadeMedia} Km/h`)
console.log(`O tempo gasto na viagem foi de: ${tempoGasto} horas`)
console.log(`A distância percorrida na viagem foi de: ${distancia} Km`)
console.log(`A quantidade de litros usada na viagem foi de: ${litro} litros`)