const prompt = require(`prompt-sync`)()

let valor1 = 5
let valor2 = 18
let valor3 = 10

if(valor1 < valor2 && valor2 < valor1 && valor3 < valor2){
    console.log (valor1, valor2, valor3)
} else {
    console.log (valor1, valor2, valor3)
}
