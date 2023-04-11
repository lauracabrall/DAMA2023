const prompt = require(`prompt-sync`)()

let conta = String(prompt(`Digite o número da conta: `))
let incremento = 0

for (let i = 0; i < conta.toString().length; i++) {
    incremento += parseInt(conta.toString()[i])
}

let d = incremento % 10
let contaTotal = (`00` + conta.toString() + `-` + d.toString())
console.log(contaTotal)