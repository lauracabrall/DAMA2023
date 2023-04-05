/*Foram coletados os dados de idade, sexo (0 para masculino e 1
para feminino) e salário. Faça um algoritmo que informe:
a) a média de salário do grupo;
b) a maior e a menor idade do grupo;
c) a quantidade de mulheres com salário até R$100,00.
Encerre a entrada de dados quando for digitada uma idade negativa.*/

const prompt = require(`prompt-sync`)()

let idade 
let sexo
let salario 
let maiorIdade = Number(-Infinity)
let menorIdade = Number(+Infinity)
let qtdMulheres = 0
let grupo = parseInt(prompt(`Digite a quantidade de pessoas no grupo: `))

for(let i = 0; i < grupo; i++){
    idade = parseInt(prompt(`Digite a idade do indivíduo(${i}): `))
    sexo = String(prompt(`Digite o sexo do indivíduo (${i}):  `))
    salario = parseFloat(prompt(`Digite o salário do indivíduo (${i}): `))

    if(menorIdade > idade){
        menorIdade = idade
    }

    if(maiorIdade < idade){
        maiorIdade = idade
    }

    if(sexo === '1' && salario < 100.00){
        qtdMulheres++
    }
}

let media = salario/grupo
console.log(`A média de salário do grupo é ${media}`)
console.log(`A maior idade do grupo é ${maiorIdade} e a menor idade do grupo é ${menorIdade}`)
console.log(`A quantidade de mulheres com salário até R$100 é ${qtdMulheres}`)