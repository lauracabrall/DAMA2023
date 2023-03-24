const prompt = require(`prompt-sync`)()

let lado1 = parseFloat(prompt(`Informe o lado 1: `))
let lado2 = parseFloat(prompt(`Informe o lado 2: `))
let lado3 = parseFloat(prompt(`Informe o lado 3: `))

if(lado1 === lado2 && lado2 === lado3 ){
    console.log(`Esse é um triângulo equilátero!`)
}else if(lado1 === lado2 || lado1===lado3 || lado2===lado3){
    console.log(`Esse é um triângulo isósceles! `)

}else{
    console.log(`Esse é um triângulo escaleno`)
}

