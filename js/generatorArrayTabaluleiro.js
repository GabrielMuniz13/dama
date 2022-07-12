function generateArrayTabuleiro(){
    const game = [];
    for(let i=0; i<8; i++){
        game[i] = [];
        for(let j=0; j<8; j++){
            if(i%2 == 0){
                if(j%2==0){
                    //inválido branco
                    game[i][j] = {
                        positionValid: false,
                        classStyle: 'branco' 
                    }
                }else{
                    game[i][j] = {
                        positionValid: true,
                        classStyle: 'preto',
                        data: jogador(i),
                    }
                }
            }else{
                if(j%2!=0){
                    //inavliado branco
                    game[i][j] = {
                        positionValid: false,
                        classStyle: 'branco' 
                    }
                }else{
                    game[i][j] = {
                        positionValid: true,
                        classStyle: 'preto',
                        data: jogador(i),
                    }
                }
            }
        }
    }

    return game;
}
function jogador(linha){
    if(linha<3){
        return {
            ocuped: true,
            playr: 1
        }
    }else if(linha<5){
        return {
            ocuped: false,
            playr: undefined
        }
    }else{
        return {
            ocuped: true,
            playr: 2
        }
    }
}