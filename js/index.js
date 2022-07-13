const game = generateArrayTabuleiro();
console.log(game)
var focusAtual = [false, false];
var isPlay = [true, true]

function focusTampa(i, j){
    
    const jogador = game[i][j].data.playr;
    if(jogador===1 && isPlay[0]){
        if(focusAtual[0]){
            focusAtual[0].classList.remove("jogador1_focus");
        }
        const id = 'square_'+(i+''+j);
        const conteiner = document.getElementById(id);
        const playrsFocus = conteiner.children[0];
        playrsFocus.classList.add("jogador1_focus");
        focusAtual[0] = playrsFocus;
        renderPositionsValid(generatePositionsNext1(i, j), [i, j]);

    }else if(jogador===2 && isPlay[1]){
        if(focusAtual[0]){
            focusAtual[0].classList.remove("jogador2_focus");
        }
        const id = 'square_'+(i+''+j);
        const conteiner = document.getElementById(id);
        const playrsFocus = conteiner.children[0];
        playrsFocus.classList.add("jogador2_focus");
        focusAtual[0] = playrsFocus;
        renderPositionsValid(generatePositionsNext2(i, j), [i, j]);
    }
    
}
//verificar se pode comer a peca adversaria
function generatePositionsNext1(i, j){
    const positions=[]
    if(i+1 <=7 && j+1 <= 7){
        const x=i+1, y=j+1;
        if(!game[x][y].data.ocuped){
            positions.push([x, y])
        }
    }
    if(i+1 <=7 && j-1 >= 0){
        const x=i+1, y=j-1;
        if(!game[x][y].data.ocuped){
            positions.push([x, y])
        }
    }
    return positions;
}
function generatePositionsNext2(i, j){
    const positions=[]
    if(i-1 >=0 && j+1 <= 7){
        const x=i-1, y=j+1;
        if(!game[x][y].data.ocuped){
            positions.push([x, y])
        }
    }
    if(i-1 >=0 && j-1 >= 0){
        const x=i-1, y=j-1;
        if(!game[x][y].data.ocuped){
            positions.push([x, y])
        }
    }
    return positions;
}
function renderPositionsValid(positions, atual){
    if(focusAtual[1]){
        focusAtual[1].map( p => {
            const square = document.getElementById('square_'+p[0]+p[1]);
            // square.innerHTML = "<div class='"+style+"' onclick='focusTampa("+i+','+j+")'></div>"
            square.innerHTML = "";
        });
    }
    if(positions){
        positions.map( p => {
            const square = document.getElementById('square_'+p[0]+p[1]);
            // square.innerHTML = "<div class='"+style+"' onclick='updatePosition("+i+','+j+")'></div>"
            square.innerHTML = "<div class='positionNext' onclick='updatePosition("+atual[0] +','+ atual[1] +','+ p[0] +','+ p[1]+")'></div>";
        });
    }
    focusAtual[1] = positions;
}
function updatePosition(xx, xy, yx, yy){
    const atual = game[xx][xy]; 
    const futuro = game[yx][yy]
    game[yx][yy] = atual;
    game[xx][xy] = futuro;
    focusAtual[1] = false;
    renderTabuleiro(game);
}
renderTabuleiro(game);