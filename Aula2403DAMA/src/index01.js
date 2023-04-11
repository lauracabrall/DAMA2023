const prompt = require(`prompt-sync`)()

let salarioBruto = parseFloat(prompt(`Digite o salário bruto do contribuinte: `))
let previdencia = salarioBruto * 0.1
let salarioApos = salarioBruto - previdencia
let imposto = salarioApos * 0.05
let salarioLiquido = salarioApos - imposto

console.log(`O salário líquido do contribuinte é: ${salarioLiquido.toFixed(2)}`)