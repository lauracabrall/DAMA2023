const prompt = require(`prompt-sync`)()

let frase = String(prompt('Escreva uma frase: ')) 
let contador = 0
let acumulador = 0
for(let i = 0; i < frase.length; i++) {
    if(frase[i] === 'a' || frase[i] ==='A'){
        contador++
        console.log(`Foram encontradas ${contador} letras "A" e "a"! `) 
    }
}