const prompt = require(`prompt-sync`)()

let portugues = parseFloat(prompt (`Informe a nota de Português: `)) 
let matematica = parseFloat(prompt(`Informe a nota de Matemática: `))
let conhecimentosGerais = parseFloat(prompt(`Informe a nota de Conhecimentos Gerais: `))

let media = 0

media = (portugues + matematica + conhecimentosGerais)/3
console.log(`A média do estudante é: ${media.toFixed(2)}`)

if(media>7 && portugues>5 && matematica>5 && conhecimentosGerais>5){
    console.log(`O candidato foi aprovado!`)
}else{
    console.log(`O candidato foi reprovado!`)
}