
const game = [];
for(let i=0; i<8; i++){
    game[i] = [];
    for(let j=0; j<8; j++){
        if(i%2 == 0){
            if(j%2==0){
                //inavliado branco
                game[i][j] = {
                    positionValid: false,
                    colorBackGround: 'branco' 
                }
            }else{
                game[i][j] = {
                    positionValid: true,
                    colorBackGround: 'preto',
                    ocuped: l(i, j),
                }
            }
        }else{
            if(j%2!=0){
                //inavliado branco
                game[i][j] = {
                    positionValid: false,
                    colorBackGround: 'branco' 
                }
            }else{
                game[i][j] = {
                    positionValid: true,
                    colorBackGround: 'preto',
                    ocuped: l(i, j),
                }
            }
        }
    }
}
function l(l, c){
    if(l<3){
        return {
            b: true,
            c: 'jogador1'
        }
    }else if(l<5){
        return {
            b: false,
            c: undefined
        }
    }else{
        return {
            b: true,
            c: 'player2'
        }
    }
    
}
console.log(game)
const tabuleiro = document.getElementById('tabuleiro');

function testeAlert(i, j){
    console.log(i, j)
    console.log(game[i][j])
    console.log('casa a frente esta vazia ?')
    console.log(game[i+1][j+1])
    console.log(game[i+1][j-1])
}
function renderTabuleiro(){
    tabuleiro.innerHTML ="";
    for(let i=0; i<8; i++){
        const a = document.createElement("div");
        a.setAttribute('id', ('coluna'+i));
        tabuleiro.append(a);
        for(let j=0; j<8; j++){
            const coluna = document.getElementById('coluna'+i);
            const b = document.createElement("div");
            b.setAttribute('id', 'square_'+i+j);
            b.setAttribute('class', game[i][j].colorBackGround+' squareConteiner');
            coluna.append(b);
            if(game[i][j].positionValid && game[i][j].ocuped.b){
                const style = game[i][j].ocuped.c+' tampa';
                const square = document.getElementById('square_'+i+j);
                square.innerHTML = "<div class='"+style+"' onclick='testeAlert("+i+','+j+")'></div>"
            }
        }
    }
}
renderTabuleiro();