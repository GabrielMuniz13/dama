const game = generateArrayTabuleiro();
console.log(game)

function testeAlert(i, j){
    console.log(i, j)
    console.log(game[i][j])
    console.log('casa a frente esta vazia ?')
    console.log(game[i+1][j+1])
    console.log(game[i+1][j-1])
}

renderTabuleiro(game);