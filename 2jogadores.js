function doisJogadores(){
    alert("O jogo vai começar com 2 jogadores")
    document.getElementById('game_dois_jogadores').style.display = "block"
    document.getElementById('h2_jogador_1').innerHTML = 'Jogador 1: ' + nomeJogador1;
    document.getElementById('h2_jogador_2').innerHTML = 'Jogador 2: ' + nomeJogador2;
    document.getElementById('fundo_jogador_2').style.opacity = 0.5;

}