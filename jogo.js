var nomeJogador1 = "";
var nomeJogador2 = "";
var nomeJogador3 = "";
var nomeJogador4 = "";

window.onload = function (){document.getElementById('game_dois_jogadores').style.display = "none"};

function comecarJogo() {
    nomeJogador1 = document.getElementById('Jogador1').value;
    nomeJogador2 = document.getElementById('Jogador2').value;
    nomeJogador3 = document.getElementById('Jogador3').value;
    nomeJogador4 = document.getElementById('Jogador4').value;
    document.getElementById('cabecalho').style.display = "none";


    if (nomeJogador1 != "" &&
        nomeJogador2 == "" &&
        nomeJogador3 == "" &&
        nomeJogador4 == "") {
        umJogador();
    }
    else if(nomeJogador1 == "" &&
            nomeJogador2 == "" &&
            nomeJogador3 == "" &&
            nomeJogador4 == ""){
        alert("Não digitou nada. Recarregue a página");
}
    else if(nomeJogador1 != "" &&
            nomeJogador2 != "" &&
            nomeJogador3 == "" &&
            nomeJogador4 == ""){
                doisJogadores();
    }
    else if(nomeJogador1 != "" &&
            nomeJogador2 != "" &&
            nomeJogador3 != "" &&
            nomeJogador4 == ""){
                tresJogadores();
    }
    else if(nomeJogador1 != "" &&
            nomeJogador2 != "" &&
            nomeJogador3 != "" &&
            nomeJogador4 != ""){
                quatroJogadores();
    }

     else {
        alert("Não colocou os nomes em ordem. Tente novamente");
    }

}

