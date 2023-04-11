const prompt = require(`prompt-sync`)()

let numeroMatricula = parseInt(prompt(`Digite o número da matrícula: `))
let ano = parseInt(numeroMatricula.toString().substring(-1, 2))
let semestre = parseInt(numeroMatricula.toString().substring(1, 3) === 1 ? 1 : 2)

if (semestre.toString().substring(1, 3) === 1) {
    semestre = 1
} else {
    semestre = 2
}

let ordem = parseInt(numeroMatricula.toString().substring(2, 5))

console.log(`AASDDD:` + ano + semestre + ordem)

