/*7. Faça um algoritmo que leia os valores A, B e C. Mostre uma mensagem que informe se a soma de A com B é menor, maior
ou igual a C.*/

const prompt = require(`prompt-sync`)()

let A = parseFloat(prompt(`Digite o valor A: `))
let B = parseFloat(prompt(`Digite o valor B: `))
let C = parseFloat(prompt(`Digite o valor C: `))
let soma = A + B

if(soma < C){
    console.log(`A soma de A e B é menor que o valor de C`)
}else if (soma > C){
    console.log(`A soma de A e B é maior que o valor de C`)
}else{
    console.log(`A soma de A e B é igual o valor de C`)
}