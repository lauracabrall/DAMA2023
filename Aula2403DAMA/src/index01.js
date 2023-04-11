/* Considere a seguinte situação: descontam-se inicialmente 10% do salário bruto do trabalhador como contribuição à
previdência social. Após esse desconto, há um outro desconto de 5% sobre o valor restante do salário bruto, a título de um
determinado imposto. Faça um algoritmo que leia o salário bruto de um cidadão e imprima o seu salário líquido.
*/

const prompt = require(`prompt-sync`)()

let salarioBruto = parseFloat(prompt(`Digite o salário bruto do contribuinte: `))
let previdencia = salarioBruto * 0.1
let salarioApos = salarioBruto - previdencia
let imposto = salarioApos * 0.05
let salarioLiquido = salarioApos - imposto 

console.log(`O salário líquido do contribuinte é: ${salarioLiquido.toFixed(2)}`)