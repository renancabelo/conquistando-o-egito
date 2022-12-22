var rodada1 = true;
var casaDeCuraDisponivel = false;
var acoesDoAdversario = false;
var rodadasPreDinastica = 1;
var rodadasImperioAntigo = 0;
var rodadasImpedioMedio = 0;
var rodadasImperioNovo = 0;
var acoesPropriasRodada = 0;

function doisJogadores(){
    alert("O jogo vai começar com 2 jogadores")
    document.getElementById('game_dois_jogadores').style.display = "block"
    document.getElementById('h2_jogador_1').innerHTML = 'Jogador 1: ' + nomeJogador1;
    document.getElementById('h2_jogador_2').innerHTML = 'Jogador 2: ' + nomeJogador2;
    vezJogador1();
    // document.getElementById('fundo_jogador_2').style.opacity = 0.5;
    // iniciaJogo();
}

// function iniciaJogo() {
//     if (rodada1 == true) {  
//         primeiraRodada();
//     }
//     else if(rodada1 == false){
//         console.log("rodada2 em andamento...")
//         eraPreDinastica();
//     }
// }

// function primeiraRodada(){
//     console.log("rodada 1 em andamento...");
//     rodada1 = false;
//     iniciaJogo();
// }

// function eraPreDinastica() {
//     if (rodadasPreDinastica < 6) {
//         document.getElementById('rodada_j1').innerHTML = 'Era Pré-Dinástica: Rodada ' + rodadasPreDinastica;
//         console.log("rodada feita");
//         rodadasPreDinastica++;
//         console.log(rodadasPreDinastica);
//         }
//     else{
//         console.log("acabou"); //depois substituir pela função de rodar o imperio antigo
//         }   
//     }

function mostrarBotoesMenuPrincipalJ1() {
    document.getElementById('botao_construir_monumento_jogador_1').style.display = "block";
    document.getElementById('botao_construir_cidade_jogador_1').style.display = "block";
    document.getElementById('botao_treinar_soldado_jogador_1').style.display = "block";
    document.getElementById('botao_ordenar_sacerdote_jogador_1').style.display = "block";
    document.getElementById('botao_gerar_trabalhador_jogador_1').style.display = "block";
    document.getElementById('botao_mover_exercito_jogador_1').style.display = "block";
    if (casaDeCuraDisponivel == true) {
        document.getElementById('botao_formar_medico_jogador_1').style.display = "block";
    }
    document.getElementById('botao_encerrar_acoes_proprias_jogador_1').style.display = "block";
}

function mostrarBotoesMenuPrincipalJ2() {
    document.getElementById('botao_construir_monumento_jogador_2').style.display = "block";
    document.getElementById('botao_construir_cidade_jogador_2').style.display = "block";
    document.getElementById('botao_treinar_soldado_jogador_2').style.display = "block";
    document.getElementById('botao_ordenar_sacerdote_jogador_2').style.display = "block";
    document.getElementById('botao_gerar_trabalhador_jogador_2').style.display = "block";
    document.getElementById('botao_mover_exercito_jogador_2').style.display = "block";
    if (casaDeCuraDisponivel == true) {
        document.getElementById('botao_formar_medico_jogador_2').style.display = "block";
    }
    document.getElementById('botao_encerrar_acoes_proprias_jogador_2').style.display = "block";
}

function esconderBotoesMenuPrincipalJ1() {
    document.getElementById('botao_construir_monumento_jogador_1').style.display = "none";
    document.getElementById('botao_construir_cidade_jogador_1').style.display = "none";
    document.getElementById('botao_treinar_soldado_jogador_1').style.display = "none";
    document.getElementById('botao_ordenar_sacerdote_jogador_1').style.display = "none";
    document.getElementById('botao_formar_medico_jogador_1').style.display = "none";
    document.getElementById('botao_gerar_trabalhador_jogador_1').style.display = "none";
    document.getElementById('botao_mover_exercito_jogador_1').style.display = "none";
    document.getElementById('botao_encerrar_acoes_proprias_jogador_1').style.display = "none";
}

function esconderBotoesMenuPrincipalJ2() {
    document.getElementById('botao_construir_monumento_jogador_2').style.display = "none";
    document.getElementById('botao_construir_cidade_jogador_2').style.display = "none";
    document.getElementById('botao_treinar_soldado_jogador_2').style.display = "none";
    document.getElementById('botao_ordenar_sacerdote_jogador_2').style.display = "none";
    document.getElementById('botao_formar_medico_jogador_2').style.display = "none";
    document.getElementById('botao_gerar_trabalhador_jogador_2').style.display = "none";
    document.getElementById('botao_mover_exercito_jogador_2').style.display = "none";
    document.getElementById('botao_encerrar_acoes_proprias_jogador_2').style.display = "none";
}

function ocultarBotoesConstruirMonumentoJ1() {
    document.getElementById('botao_piramide_grande_jogador_1').style.display = "none";
    document.getElementById('botao_piramide_media_jogador_1').style.display = "none";
    document.getElementById('botao_piramide_pequena_jogador_1').style.display = "none";
    document.getElementById('botao_obelisco_jogador_1').style.display = "none";
    document.getElementById('botao_esfinge_jogador_1').style.display = "none";
    document.getElementById('botao_estatua_jogador_1').style.display = "none"; 
}

function mostrarBotoesConstruirMonumentoJ1() {
    document.getElementById('botao_piramide_grande_jogador_1').style.display = "block";
    document.getElementById('botao_piramide_media_jogador_1').style.display = "block";
    document.getElementById('botao_piramide_pequena_jogador_1').style.display = "block";
    document.getElementById('botao_obelisco_jogador_1').style.display = "block";
    document.getElementById('botao_esfinge_jogador_1').style.display = "block";
    document.getElementById('botao_estatua_jogador_1').style.display = "block";
}

function ocultarBotoesConstruirMonumentoJ2() {
    document.getElementById('botao_piramide_grande_jogador_2').style.display = "none";
    document.getElementById('botao_piramide_media_jogador_2').style.display = "none";
    document.getElementById('botao_piramide_pequena_jogador_2').style.display = "none";
    document.getElementById('botao_obelisco_jogador_2').style.display = "none";
    document.getElementById('botao_esfinge_jogador_2').style.display = "none";
    document.getElementById('botao_estatua_jogador_2').style.display = "none"; 
}

function mostrarBotoesConstruirMonumentoJ2() {
    document.getElementById('botao_piramide_grande_jogador_2').style.display = "block";
    document.getElementById('botao_piramide_media_jogador_2').style.display = "block";
    document.getElementById('botao_piramide_pequena_jogador_2').style.display = "block";
    document.getElementById('botao_obelisco_jogador_2').style.display = "block";
    document.getElementById('botao_esfinge_jogador_2').style.display = "block";
    document.getElementById('botao_estatua_jogador_2').style.display = "block";
}

function mostrarBotoesConstruirCidadeJ1() {
    document.getElementById('botao_poco_grande_jogador_1').style.display = "block";
    document.getElementById('botao_poco_pequeno_jogador_1').style.display = "block";
    document.getElementById('botao_extratora_grande_jogador_1').style.display = "block";
    document.getElementById('botao_extratora_pequena_jogador_1').style.display = "block";
    document.getElementById('botao_fazenda_grande_jogador_1').style.display = "block";
    document.getElementById('botao_fazenda_pequena_jogador_1').style.display = "block";
    document.getElementById('botao_pedreira_grande_jogador_1').style.display = "block";
    document.getElementById('botao_pedreira_pequena_jogador_1').style.display = "block";
}

function mostrarBotoesConstruirCidadeJ2() {
    document.getElementById('botao_poco_grande_jogador_2').style.display = "block";
    document.getElementById('botao_poco_pequeno_jogador_2').style.display = "block";
    document.getElementById('botao_extratora_grande_jogador_2').style.display = "block";
    document.getElementById('botao_extratora_pequena_jogador_2').style.display = "block";
    document.getElementById('botao_fazenda_grande_jogador_2').style.display = "block";
    document.getElementById('botao_fazenda_pequena_jogador_2').style.display = "block";
    document.getElementById('botao_pedreira_grande_jogador_2').style.display = "block";
    document.getElementById('botao_pedreira_pequena_jogador_2').style.display = "block";
}

function esconderBotoesConstruirCidadeJ1() {
    document.getElementById('botao_poco_grande_jogador_1').style.display = "none";
    document.getElementById('botao_poco_pequeno_jogador_1').style.display = "none";
    document.getElementById('botao_extratora_grande_jogador_1').style.display = "none";
    document.getElementById('botao_extratora_pequena_jogador_1').style.display = "none";
    document.getElementById('botao_fazenda_grande_jogador_1').style.display = "none";
    document.getElementById('botao_fazenda_pequena_jogador_1').style.display = "none";
    document.getElementById('botao_pedreira_grande_jogador_1').style.display = "none";
    document.getElementById('botao_pedreira_pequena_jogador_1').style.display = "none";
}

function esconderBotoesConstruirCidadeJ2() {
    document.getElementById('botao_poco_grande_jogador_2').style.display = "none";
    document.getElementById('botao_poco_pequeno_jogador_2').style.display = "none";
    document.getElementById('botao_extratora_grande_jogador_2').style.display = "none";
    document.getElementById('botao_extratora_pequena_jogador_2').style.display = "none";
    document.getElementById('botao_fazenda_grande_jogador_2').style.display = "none";
    document.getElementById('botao_fazenda_pequena_jogador_2').style.display = "none";
    document.getElementById('botao_pedreira_grande_jogador_2').style.display = "none";
    document.getElementById('botao_pedreira_pequena_jogador_2').style.display = "none";
}

function mostrarBotoesAcaoAdversarioJ1() {
    document.getElementById('botao_construir_monumento_jogador_2').style.display = "block";
    document.getElementById('botao_construir_cidade_jogador_2').style.display = "block";
    document.getElementById('botao_treinar_soldado_jogador_2').style.display = "block";
    document.getElementById('botao_ordenar_sacerdote_jogador_2').style.display = "block";
    document.getElementById('botao_gerar_trabalhador_jogador_2').style.display = "block";
    if (casaDeCuraDisponivel == true) {
        document.getElementById('botao_formar_medico_jogador_2').style.display = "block";
    }
}

function mostrarBotoesAcaoAdversarioJ2() {
    document.getElementById('botao_construir_monumento_jogador_1').style.display = "block";
    document.getElementById('botao_construir_cidade_jogador_1').style.display = "block";
    document.getElementById('botao_treinar_soldado_jogador_1').style.display = "block";
    document.getElementById('botao_ordenar_sacerdote_jogador_1').style.display = "block";
    document.getElementById('botao_gerar_trabalhador_jogador_1').style.display = "block";
    if (casaDeCuraDisponivel == true) {
        document.getElementById('botao_formar_medico_jogador_1').style.display = "block";
    }
}

function esconderBotoesAcaoAdversarioJ1() {
    document.getElementById('botao_construir_monumento_jogador_2').style.display = "none";
    document.getElementById('botao_construir_cidade_jogador_2').style.display = "none";
    document.getElementById('botao_treinar_soldado_jogador_2').style.display = "none";
    document.getElementById('botao_ordenar_sacerdote_jogador_2').style.display = "none";
    document.getElementById('botao_gerar_trabalhador_jogador_2').style.display = "none";
    if (casaDeCuraDisponivel == true) {
        document.getElementById('botao_formar_medico_jogador_2').style.display = "none";
    }
    document.getElementById('botao_poco_grande_jogador_2').style.display = "none";
    document.getElementById('botao_poco_pequeno_jogador_2').style.display = "none";
    document.getElementById('botao_extratora_grande_jogador_2').style.display = "none";
    document.getElementById('botao_extratora_pequena_jogador_2').style.display = "none";
    document.getElementById('botao_fazenda_grande_jogador_2').style.display = "none";
    document.getElementById('botao_fazenda_pequena_jogador_2').style.display = "none";
    document.getElementById('botao_pedreira_grande_jogador_2').style.display = "none";
    document.getElementById('botao_pedreira_pequena_jogador_2').style.display = "none";
    document.getElementById('botao_piramide_grande_jogador_2').style.display = "none";
    document.getElementById('botao_piramide_media_jogador_2').style.display = "none";
    document.getElementById('botao_piramide_pequena_jogador_2').style.display = "none";
    document.getElementById('botao_obelisco_jogador_2').style.display = "none";
    document.getElementById('botao_esfinge_jogador_2').style.display = "none";
    document.getElementById('botao_estatua_jogador_2').style.display = "none"; 
}

function esconderBotoesAcaoAdversarioJ2() {
    document.getElementById('botao_construir_monumento_jogador_1').style.display = "none";
    document.getElementById('botao_construir_cidade_jogador_1').style.display = "none";
    document.getElementById('botao_treinar_soldado_jogador_1').style.display = "none";
    document.getElementById('botao_ordenar_sacerdote_jogador_1').style.display = "none";
    document.getElementById('botao_gerar_trabalhador_jogador_1').style.display = "none";
    if (casaDeCuraDisponivel == true) {
        document.getElementById('botao_formar_medico_jogador_1').style.display = "none";
    }
    document.getElementById('botao_poco_grande_jogador_1').style.display = "none";
    document.getElementById('botao_poco_pequeno_jogador_1').style.display = "none";
    document.getElementById('botao_extratora_grande_jogador_1').style.display = "none";
    document.getElementById('botao_extratora_pequena_jogador_1').style.display = "none";
    document.getElementById('botao_fazenda_grande_jogador_1').style.display = "none";
    document.getElementById('botao_fazenda_pequena_jogador_1').style.display = "none";
    document.getElementById('botao_pedreira_grande_jogador_1').style.display = "none";
    document.getElementById('botao_pedreira_pequena_jogador_1').style.display = "none";
    document.getElementById('botao_piramide_grande_jogador_1').style.display = "none";
    document.getElementById('botao_piramide_media_jogador_1').style.display = "none";
    document.getElementById('botao_piramide_pequena_jogador_1').style.display = "none";
    document.getElementById('botao_obelisco_jogador_1').style.display = "none";
    document.getElementById('botao_esfinge_jogador_1').style.display = "none";
    document.getElementById('botao_estatua_jogador_1').style.display = "none"; 
}

function coletarJ1() {
    alert("coletas feitas");
    document.getElementById('botao_coletar_jogador_1').style.display = "none";
    mostrarBotoesMenuPrincipalJ1();
}

function coletarJ2() {
    alert("coletas feitas");
    document.getElementById('botao_coletar_jogador_2').style.display = "none";
    mostrarBotoesMenuPrincipalJ2();
}

function construirMonumentoJ1() {
    esconderBotoesMenuPrincipalJ1();
    mostrarBotoesConstruirMonumentoJ1();
}

function construirMonumentoJ2() {
    esconderBotoesMenuPrincipalJ2();
    mostrarBotoesConstruirMonumentoJ2();
}

function construirCidadeJ1() {
    esconderBotoesMenuPrincipalJ1();
    mostrarBotoesConstruirCidadeJ1();
}

function construirCidadeJ2() {
    esconderBotoesMenuPrincipalJ2();
    mostrarBotoesConstruirCidadeJ2();
}

function construirPiramideGrandeJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("piramide construída");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("piramide construída");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            ocultarBotoesConstruirMonumentoJ1();
            mostrarBotoesMenuPrincipalJ1();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                ocultarBotoesConstruirMonumentoJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                ocultarBotoesConstruirMonumentoJ1();
                mostrarBotoesAcaoAdversarioJ1();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirPiramideMediaJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("piramide construída");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("piramide construída");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            ocultarBotoesConstruirMonumentoJ1();
            mostrarBotoesMenuPrincipalJ1();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                ocultarBotoesConstruirMonumentoJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                ocultarBotoesConstruirMonumentoJ1();
                mostrarBotoesAcaoAdversarioJ1();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirPiramidePequenaJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("piramide construída");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("piramide construída");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            ocultarBotoesConstruirMonumentoJ1();
            mostrarBotoesMenuPrincipalJ1();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                ocultarBotoesConstruirMonumentoJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                ocultarBotoesConstruirMonumentoJ1();
                mostrarBotoesAcaoAdversarioJ1();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirPiramideGrandeJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("piramide construída - acao propia");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ1();
        vezJogador2();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("piramide construída");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            ocultarBotoesConstruirMonumentoJ2();
            mostrarBotoesMenuPrincipalJ2();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                ocultarBotoesConstruirMonumentoJ2();
                vezJogador1();
                rodada1 = false;
            }
            else{
                acoesPropriasRodada = 0;
                ocultarBotoesConstruirMonumentoJ2();
                mostrarBotoesAcaoAdversarioJ2();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }

}
}

function construirPiramideMediaJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("piramide construída - acao propia");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ1();
        vezJogador2();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("piramide construída");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            ocultarBotoesConstruirMonumentoJ2();
            mostrarBotoesMenuPrincipalJ2();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                ocultarBotoesConstruirMonumentoJ2();
                vezJogador1();
                rodada1 = false;
            }
            else{
                acoesPropriasRodada = 0;
                ocultarBotoesConstruirMonumentoJ2();
                mostrarBotoesAcaoAdversarioJ2();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }

}
}

function construirPiramidePequenaJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("piramide construída - acao propia");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ1();
        vezJogador2();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("piramide construída");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            ocultarBotoesConstruirMonumentoJ2();
            mostrarBotoesMenuPrincipalJ2();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                ocultarBotoesConstruirMonumentoJ2();
                vezJogador1();
                rodada1 = false;
            }
            else{
                acoesPropriasRodada = 0;
                ocultarBotoesConstruirMonumentoJ2();
                mostrarBotoesAcaoAdversarioJ2();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }

}
}

function construirObeliscoJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("obelisco construída");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("obelisco construída");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            ocultarBotoesConstruirMonumentoJ1();
            mostrarBotoesMenuPrincipalJ1();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                ocultarBotoesConstruirMonumentoJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                ocultarBotoesConstruirMonumentoJ1();
                mostrarBotoesAcaoAdversarioJ1();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirEstatuaJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("estatua construída");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("estatua construída");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            ocultarBotoesConstruirMonumentoJ1();
            mostrarBotoesMenuPrincipalJ1();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                ocultarBotoesConstruirMonumentoJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                ocultarBotoesConstruirMonumentoJ1();
                mostrarBotoesAcaoAdversarioJ1();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirEsfingeJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("esfinge construída");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("esfinge construída");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            ocultarBotoesConstruirMonumentoJ1();
            mostrarBotoesMenuPrincipalJ1();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                ocultarBotoesConstruirMonumentoJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                ocultarBotoesConstruirMonumentoJ1();
                mostrarBotoesAcaoAdversarioJ1();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirObeliscoJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("obelisco construída - acao propia");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ1();
        vezJogador2();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("obelisco construída");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            ocultarBotoesConstruirMonumentoJ2();
            mostrarBotoesMenuPrincipalJ2();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                ocultarBotoesConstruirMonumentoJ2();
                vezJogador1();
                rodada1 = false;
            }
            else{
                acoesPropriasRodada = 0;
                ocultarBotoesConstruirMonumentoJ2();
                mostrarBotoesAcaoAdversarioJ2();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }

}
}

function construirEstatuaJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("estatua construída - acao propia");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ1();
        vezJogador2();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("estatua construída");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            ocultarBotoesConstruirMonumentoJ2();
            mostrarBotoesMenuPrincipalJ2();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                ocultarBotoesConstruirMonumentoJ2();
                vezJogador1();
                rodada1 = false;
            }
            else{
                acoesPropriasRodada = 0;
                ocultarBotoesConstruirMonumentoJ2();
                mostrarBotoesAcaoAdversarioJ2();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }

}
}

function construirEsfingeJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("esfinge construída - acao propia");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ1();
        vezJogador2();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("esfinge construída");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            ocultarBotoesConstruirMonumentoJ2();
            mostrarBotoesMenuPrincipalJ2();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                ocultarBotoesConstruirMonumentoJ2();
                vezJogador1();
                rodada1 = false;
            }
            else{
                acoesPropriasRodada = 0;
                ocultarBotoesConstruirMonumentoJ2();
                mostrarBotoesAcaoAdversarioJ2();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }

}
}

function construirPocoGrandeJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("poco construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("poco construído");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ1();
            mostrarBotoesMenuPrincipalJ1();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                esconderBotoesConstruirCidadeJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ1();
                mostrarBotoesAcaoAdversarioJ1();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirPocoPequenoJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("poco construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("poco construído");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ1();
            mostrarBotoesMenuPrincipalJ1();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                esconderrBotoesConstruirCidadeJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ1();
                mostrarBotoesAcaoAdversarioJ1();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirExtratoraGrandeJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("extratora construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("extratora construído");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ1();
            mostrarBotoesMenuPrincipalJ1();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                esconderBotoesConstruirCidadeJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ1();
                mostrarBotoesAcaoAdversarioJ1();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirExtratoraPequenaJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("extratora construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("extratora construído");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ1();
            mostrarBotoesMenuPrincipalJ1();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                esconderBotoesConstruirCidadeJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ1();
                mostrarBotoesAcaoAdversarioJ1();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirFazendaGrandeJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("fazenda construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("fazenda construído");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ1();
            mostrarBotoesMenuPrincipalJ1();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                esconderBotoesConstruirCidadeJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ1();
                mostrarBotoesAcaoAdversarioJ1();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirFazendaPequenaJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("fazenda construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("fazenda construído");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ1();
            mostrarBotoesMenuPrincipalJ1();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                esconderBotoesConstruirCidadeJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ1();
                mostrarBotoesAcaoAdversarioJ1();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirPedreiraGrandeJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("pedreira construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("pedreira construído");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ1();
            mostrarBotoesMenuPrincipalJ1();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                esconderBotoesConstruirCidadeJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ1();
                mostrarBotoesAcaoAdversarioJ1();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirPedreiraPequenaJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("pedreira construída");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("pedreira construída");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ1();
            mostrarBotoesMenuPrincipalJ1();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                esconderBotoesConstruirCidadeJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ1();
                mostrarBotoesAcaoAdversarioJ1();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirPocoGrandeJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("poco construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ1();
        vezJogador2();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("poco construído");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ2();
            mostrarBotoesMenuPrincipalJ2();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                esconderBotoesConstruirCidadeJ2();
                vezJogador1();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ2();
                mostrarBotoesAcaoAdversarioJ2();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirPocoPequenoJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("poco construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ1();
        vezJogador2();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("poco construído");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ2();
            mostrarBotoesMenuPrincipalJ2();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                esconderBotoesConstruirCidadeJ2();
                vezJogador1();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ2();
                mostrarBotoesAcaoAdversarioJ2();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirExtratoraGrandeJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("extratora construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ1();
        vezJogador2();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("extratora construído");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ2();
            mostrarBotoesMenuPrincipalJ2();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                esconderBotoesConstruirCidadeJ2();
                vezJogador1();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ2();
                mostrarBotoesAcaoAdversarioJ2();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirExtratoraPequenaJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("extratora construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ1();
        vezJogador2();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("extratora construído");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ2();
            mostrarBotoesMenuPrincipalJ2();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                esconderBotoesConstruirCidadeJ2();
                vezJogador1();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ2();
                mostrarBotoesAcaoAdversarioJ2();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirFazendaGrandeJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("fazenda construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ1();
        vezJogador2();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("fazenda construído");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ2();
            mostrarBotoesMenuPrincipalJ2();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                esconderBotoesConstruirCidadeJ2();
                vezJogador1();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ2();
                mostrarBotoesAcaoAdversarioJ2();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirFazendaPequenaJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("fazenda construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ1();
        vezJogador2();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("fazenda construído");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ2();
            mostrarBotoesMenuPrincipalJ2();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                esconderBotoesConstruirCidadeJ21();
                vezJogador1();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ2();
                mostrarBotoesAcaoAdversarioJ2();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirPedreiraGrandeJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("pedreira construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ1();
        vezJogador2();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("pedreira construído");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ2();
            mostrarBotoesMenuPrincipalJ2();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                esconderBotoesConstruirCidadeJ2();
                vezJogador1();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ2();
                mostrarBotoesAcaoAdversarioJ2();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
}
}

function construirPedreiraPequenaJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("pedreira construída");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ1();
        vezJogador2();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("pedreira construída");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ2();
            mostrarBotoesMenuPrincipalJ2();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                esconderBotoesConstruirCidadeJ2();
                vezJogador1();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesConstruirCidadeJ2();
                mostrarBotoesAcaoAdversarioJ2();
                acoesDoAdversario = true;
            }

        }
    }
    else{
        alert("sem resursos para isso");
    }
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


