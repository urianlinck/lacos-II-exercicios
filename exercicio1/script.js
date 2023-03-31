const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
] 

for(let i = 0; i < array.length; i++){
    let soma = 0
    for(let j = 0; j < array[i].length; j++){
    soma += array[i][j]

    }
    console.log(`Jogador ${i+1}: ${array[i]}, média ${soma/array[i].length}`)
}