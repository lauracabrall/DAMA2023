/*Foram coletados os dados de idade, sexo (0 para masculino e 1
para feminino) e salário. Faça um algoritmo que informe:
a) a média de salário do grupo;
b) a maior e a menor idade do grupo;
c) a quantidade de mulheres com salário até R$100,00.
Encerre a entrada de dados quando for digitada uma idade negativa.*/

const prompt = require(`prompt-sync`)()

let qtsHabitantes = 0
let maiorIdade = Number(-9999)
let menorIdade = Number(9999)
let qtdMlhr100 = 0
let incrementoSalario = 0

while (true) {
    const idade = parseInt(prompt(`Digite uma idade: `))

    if (idade < 0) {
        break
    }

    const sexo = parseInt(prompt(`Digite um sexo: `))
    const salario = parseInt(prompt(`Digite um salário: `))

    incrementoSalario += salario
    qtsHabitantes++

    if (idade > maiorIdade) {
        maiorIdade = idade
    }

    if (idade < menorIdade) {
        menorIdade = idade
    }

    if (sexo === 1 && salario <= 100) {
        qtdMlhr100++
    }
}

const mediaSalario = incrementoSalario / qtsHabitantes

console.log(`Média de salário do grupo: RS${mediaSalario.toFixed(2)}`)
console.log(`Maior idade do grupo: ${maiorIdade}`)
console.log(`Menor idade do grupo: ${menorIdade}`)
console.log(`Quantidade de mulheres com salário até R$ 100.00: ${qtdMlhr100}`)

