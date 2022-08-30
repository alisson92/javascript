let num = [3, 2, 4, 1, 8]
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 2 está na posição, ${pos}`)
}
