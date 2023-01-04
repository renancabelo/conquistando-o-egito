var rodada1 = true;
var casaDaVidaDisponivel = false;
var acoesDoAdversario = false;
var rodadasPreDinastica = 1;
var rodadasImperioAntigo = 0;
var rodadasImpedioMedio = 0;
var rodadasImperioNovo = 0;
var acoesPropriasRodada = 0;
var idadeAtual = "Era Pré-Dinástica";

function doisJogadores(){
    alert("O jogo vai começar com 2 jogadores")
    document.getElementById('game_dois_jogadores').style.display = "block"
    document.getElementById('h2_jogador_1').innerHTML = 'Jogador 1: ' + nomeJogador1;
    document.getElementById('h2_jogador_2').innerHTML = 'Jogador 2: ' + nomeJogador2;
    document.getElementById('rodada_j1').innerHTML = idadeAtual + ': Rodada ' + rodadasPreDinastica;
    document.getElementById('rodada_j2').innerHTML = idadeAtual + ': Rodada ' + rodadasPreDinastica;
    vezJogador1();
}

function atualizaRodada() {
    if (rodadasPreDinastica < 6) {
        rodadasPreDinastica++;
        document.getElementById('rodada_j1').innerHTML = idadeAtual + ': Rodada ' + rodadasPreDinastica;
        document.getElementById('rodada_j2').innerHTML = idadeAtual + ': Rodada ' + rodadasPreDinastica;
    }
    else if (rodadasPreDinastica > 5 &&
             rodadasImperioAntigo < 6) {
        rodadasImperioAntigo++;
        idadeAtual = "Imperio Antigo";
        casaDeCuraDisponivel = true;
        document.getElementById('rodada_j1').innerHTML = idadeAtual + ': Rodada ' + rodadasImperioAntigo;
        document.getElementById('rodada_j2').innerHTML = idadeAtual + ': Rodada ' + rodadasImperioAntigo;
    }
    else if (rodadasPreDinastica > 5 &&
             rodadasImperioAntigo > 5 &&
             rodadasImpedioMedio < 8) {
        rodadasImpedioMedio++;
        idadeAtual = "Imperio Médio";
        document.getElementById('rodada_j1').innerHTML = idadeAtual + ': Rodada ' + rodadasImpedioMedio;
        document.getElementById('rodada_j2').innerHTML = idadeAtual + ': Rodada ' + rodadasImpedioMedio;
    }
    else if (rodadasPreDinastica > 5 &&
             rodadasImperioAntigo > 5 &&
             rodadasImpedioMedio > 7 &&
             rodadasImperioNovo < 5) {
        rodadasImperioNovo++;
        idadeAtual = "Império Novo";
        document.getElementById('rodada_j1').innerHTML = idadeAtual + ': Rodada ' + rodadasImperioNovo;
        document.getElementById('rodada_j2').innerHTML = idadeAtual + ': Rodada ' + rodadasImperioNovo;
    }else {
        alert("Jogo acabou");
        document.getElementById('game_dois_jogadores').style.display = "none";
        document.getElementById('agradecimento').style.display = "block";
    }
    }


function vezJogador2() {
    document.getElementById('fundo_jogador_2').style.opacity = 1;
    document.getElementById('fundo_jogador_1').style.opacity = 0.5;
    document.getElementById('botao_coletar_jogador_2').style.display = "block";
}

function vezJogador1() {
    document.getElementById('fundo_jogador_2').style.opacity = 0.5;
    document.getElementById('fundo_jogador_1').style.opacity = 1;
    document.getElementById('botao_coletar_jogador_1').style.display = "block";
}


