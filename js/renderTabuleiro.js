const tabuleiro = document.getElementById('tabuleiro');
function renderTabuleiro(game){
    tabuleiro.innerHTML ="";
    for(let i=0; i<8; i++){
        const a = document.createElement("div");
        a.setAttribute('id', ('coluna'+i));
        tabuleiro.append(a);
        for(let j=0; j<8; j++){
            const coluna = document.getElementById('coluna'+i);
            const b = document.createElement("div");
            b.setAttribute('id', 'square_'+i+j);
            b.setAttribute('class', game[i][j].classStyle+' squareConteiner');
            coluna.append(b);
            if(game[i][j].positionValid && game[i][j].data.ocuped){
                const style = 'jogador'+game[i][j].data.playr+' tampa';
                const square = document.getElementById('square_'+i+j);
                square.innerHTML = "<div class='"+style+"' onclick='focusTampa("+i+','+j+")'></div>"
            }
        }
    }
}