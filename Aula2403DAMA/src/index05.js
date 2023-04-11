const prompt = require(`prompt-sync`)()

const vetor = [321, 534, 123]

vetor.sort((a, b) => {
    return a - b
})

console.log(vetor)
