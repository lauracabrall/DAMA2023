const prompt = require(`prompt-sync`)()

let frase = String(prompt(`Digite uma frase: `)) 
let posicao = frase.indexOf("j") //pega o index (posicao) do j na frase

if(frase.includes(`j`)){
    console.log(`A primeira ocorrência da letra "j" é na posição ${posicao}`)
}else{
    console.log(`A letra "j" não apareceu nessa sentença.`)
}
