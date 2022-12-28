// FUNÇÕES DE MOSTRAR OS BOTÕES

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
    document.getElementById('botao_templo_pequeno_jogador_1').style.display = "block";
    document.getElementById('botao_templo_grande_jogador_1').style.display = "block";
    if (casaDeCuraDisponivel == true) {
        document.getElementById('botao_casa_vida_jogador_1').style.display = "block";
    }

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
    document.getElementById('botao_templo_pequeno_jogador_2').style.display = "block";
    document.getElementById('botao_templo_grande_jogador_2').style.display = "block";
    if (casaDeCuraDisponivel == true) {
        document.getElementById('botao_casa_vida_jogador_2').style.display = "block";
    }

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
    document.getElementById('botao_templo_pequeno_jogador_1').style.display = "none";
    document.getElementById('botao_templo_grande_jogador_1').style.display = "none";
    document.getElementById('botao_casa_vida_jogador_1').style.display = "none";

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
    document.getElementById('botao_templo_pequeno_jogador_2').style.display = "none";
    document.getElementById('botao_templo_grande_jogador_2').style.display = "none";
    document.getElementById('botao_casa_vida_jogador_2').style.display = "none";
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



// FUNÇÕES DE CLIQUES NOS BOTÕES


function cliqueColetarJ1() {
    alert("coletas feitas");
    document.getElementById('botao_coletar_jogador_1').style.display = "none";
    mostrarBotoesMenuPrincipalJ1();
}

function cliqueColetarJ2() {
    alert("coletas feitas");
    document.getElementById('botao_coletar_jogador_2').style.display = "none";
    mostrarBotoesMenuPrincipalJ2();
}

function cliqueConstruirMonumentoJ1() {
    esconderBotoesMenuPrincipalJ1();
    mostrarBotoesConstruirMonumentoJ1();
}

function cliqueConstruirMonumentoJ2() {
    esconderBotoesMenuPrincipalJ2();
    mostrarBotoesConstruirMonumentoJ2();
}

function cliqueConstruirCidadeJ1() {
    esconderBotoesMenuPrincipalJ1();
    mostrarBotoesConstruirCidadeJ1();
}

function cliqueConstruirCidadeJ2() {
    esconderBotoesMenuPrincipalJ2();
    mostrarBotoesConstruirCidadeJ2();
}

function cliqueConstruirPiramideGrandeJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("piramide construída");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
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

function cliqueConstruirPiramideMediaJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("piramide construída");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
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

function cliqueConstruirPiramidePequenaJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("piramide construída");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
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

function cliqueConstruirPiramideGrandeJ2() {
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
                atualizaRodada();
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

function cliqueConstruirPiramideMediaJ2() {
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
                atualizaRodada();
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

function cliqueConstruirPiramidePequenaJ2() {
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
                atualizaRodada();
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

function cliqueConstruirObeliscoJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("obelisco construída");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
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

function cliqueConstruirEstatuaJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("estatua construída");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
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

function cliqueConstruirEsfingeJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("esfinge construída");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
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

function cliqueConstruirObeliscoJ2() {
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
                atualizaRodada();
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

function cliqueConstruirEstatuaJ2() {
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
                atualizaRodada();
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

function cliqueConstruirEsfingeJ2() {
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
                atualizaRodada();
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

function cliqueConstruirPocoGrandeJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("poco construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();;
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

function cliqueConstruirPocoPequenoJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("poco construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
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

function cliqueConstruirExtratoraGrandeJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("extratora construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
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

function cliqueConstruirExtratoraPequenaJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("extratora construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
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

function cliqueConstruirFazendaGrandeJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("fazenda construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
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

function cliqueConstruirFazendaPequenaJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("fazenda construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
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

function cliqueConstruirPedreiraGrandeJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("pedreira construído");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
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

function cliqueConstruirPedreiraPequenaJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("pedreira construída");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
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

function cliqueTreinarSoldadoJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("soldado treinado");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("soldado treinado");
        acoesPropriasRodada++;
        if (acoesPropriasRodada > 2) {
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                esconderBotoesMenuPrincipalJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesMenuPrincipalJ1();
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

function cliqueOrdenarSacerdoteJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("sacerdote ordenado");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("ordenar sacerdote");
        acoesPropriasRodada++;
        if (acoesPropriasRodada > 2) {
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                esconderBotoesMenuPrincipalJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesMenuPrincipalJ1();
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

function cliqueFormarMedicoJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("medico formado");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("medico formado");
        acoesPropriasRodada++;
        if (acoesPropriasRodada > 2) {
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                esconderBotoesMenuPrincipalJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesMenuPrincipalJ1();
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

function cliqueGerarTrabalhadorJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("trabalhador gerado");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("trabalhador gerado");
        acoesPropriasRodada++;
        if (acoesPropriasRodada > 2) {
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                esconderBotoesMenuPrincipalJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesMenuPrincipalJ1();
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

function cliqueMoverExercitoJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("exercito movido");
        acoesDoAdversario = false;
        esconderBotoesAcaoAdversarioJ2();
        vezJogador1();
        atualizaRodada();
    }
    else{
        alert("sem resursos para isso");
    }
}
else{
        if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("exercito movido");
        acoesPropriasRodada++;
        if (acoesPropriasRodada > 2) {
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 2")
                esconderBotoesMenuPrincipalJ1();
                vezJogador2();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesMenuPrincipalJ1();
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




function cliqueConstruirPocoGrandeJ2() {
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
                rodada1 = false;
                atualizaRodada();
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

function cliqueConstruirPocoPequenoJ2() {
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
                rodada1 = false;
                atualizaRodada();
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

function cliqueConstruirExtratoraGrandeJ2() {
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
                rodada1 = false;
                atualizaRodada();
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

function cliqueConstruirExtratoraPequenaJ2() {
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
                rodada1 = false;
                atualizaRodada();
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

function cliqueConstruirFazendaGrandeJ2() {
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
                rodada1 = false;
                atualizaRodada();
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

function cliqueConstruirFazendaPequenaJ2() {
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
                rodada1 = false;
                atualizaRodada();
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

function cliqueConstruirPedreiraGrandeJ2() {
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
                rodada1 = false;
                atualizaRodada();
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

function cliqueConstruirPedreiraPequenaJ2() {
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
                rodada1 = false;
                atualizaRodada();
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

function cliqueTreinarSoldadoJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("soldado treinado");
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
        alert("soldado treinado");
        acoesPropriasRodada++;
        if (acoesPropriasRodada > 2) {
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                esconderBotoesMenuPrincipalJ2();
                vezJogador1();
                rodada1 = false;
                atualizaRodada();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesMenuPrincipalJ2();
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

function cliqueOrdenarSacerdoteJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("sacerdote ordenado");
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
        alert("sacerdote ordenado");
        acoesPropriasRodada++;
        if (acoesPropriasRodada > 2) {
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                esconderBotoesMenuPrincipalJ2();
                vezJogador1();
                rodada1 = false;
                atualizaRodada();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesMenuPrincipalJ2();
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

function cliqueFormarMedicoJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("medico formado");
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
        alert("medico formado");
        acoesPropriasRodada++;
        if (acoesPropriasRodada > 2) {
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                esconderBotoesMenuPrincipalJ2();
                vezJogador1();
                rodada1 = false;
                atualizaRodada();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesMenuPrincipalJ2();
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

function cliqueGerarTrabalhadorJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("trabalhador gerado");
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
        alert("trabalhador gerado");
        acoesPropriasRodada++;
        if (acoesPropriasRodada > 2) {
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                esconderBotoesMenuPrincipalJ2();
                vezJogador1();
                rodada1 = false;
                atualizaRodada();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesMenuPrincipalJ2();
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

function cliqueMoverExercitoJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("exercito movido");
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
        alert("exercito movido");
        acoesPropriasRodada++;
        if (acoesPropriasRodada > 2) {
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                esconderBotoesMenuPrincipalJ2();
                vezJogador1();
                rodada1 = false;
                atualizaRodada();
            }
            else{
                acoesPropriasRodada = 0;
                esconderBotoesMenuPrincipalJ2();
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

function cliqueConstruirTemploGrandeJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("templo construido");
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
        alert("templo construido");
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
                rodada1 = false;
                atualizaRodada();
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

function cliqueConstruirTemploPequenoJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("templo construido");
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
        alert("templo construido");
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
                rodada1 = false;
                atualizaRodada();
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

function cliqueConstruirCasaVidaJ2() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("casa construida");
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
        alert("casa construida");
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
                rodada1 = false;
                atualizaRodada();
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

function cliqueConstruirTemploGrandeJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("templo construido");
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
        alert("templo construido");
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
                rodada1 = false;
                atualizaRodada();
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

function cliqueConstruirTemploPequenoJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("templo construido");
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
        alert("templo construido");
        acoesPropriasRodada++;
        if (acoesPropriasRodada < 3) {
            esconderBotoesConstruirCidadeJ1();
            mostrarBotoesMenuPrincipalJ1();
        }
        else{
            if (rodada1 == true) {
                acoesPropriasRodada = 0;
                alert("agora é a vez do jogador 1")
                esconderBotoesConstruirCidadeJ1();
                vezJogador2();
                rodada1 = false;
                atualizaRodada();
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

function cliqueConstruirCasaVidaJ1() {
if (acoesDoAdversario == true) {
    if (acoesPropriasRodada < 40) { //substituir esse if por "se tem recursos para construir, construa"
        alert("casa construida");
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
        alert("casa construida");
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
                rodada1 = false;
                atualizaRodada();
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

function cliqueEncerrarAcoesJ1() {
    if (acoesPropriasRodada > 0) {
        if (rodada1 == true) {
            acoesPropriasRodada = 0;
            esconderBotoesMenuPrincipalJ1();
            vezJogador2();
        }
        else{
            acoesPropriasRodada = 0;
            esconderBotoesMenuPrincipalJ1();
            mostrarBotoesAcaoAdversarioJ1();
            acoesDoAdversario = true;
        }
    }
    else{
        alert("Não pode encerrar a jogada agora. Faça pelo menos uma ação própria.");
    }
}

function cliqueEncerrarAcoesJ2() {
    if (acoesPropriasRodada > 0) {
        if (rodada1 == true) {
            acoesPropriasRodada = 0;
            esconderBotoesMenuPrincipalJ2();
            vezJogador1();
            rodada1 = false;
            atualizaRodada();
        }
        else{
            acoesPropriasRodada = 0;
            esconderBotoesMenuPrincipalJ2();
            mostrarBotoesAcaoAdversarioJ2();
            acoesDoAdversario = true;
        }
    }
    else{
        alert("Não pode encerrar a jogada agora. Faça pelo menos uma ação própria.");
    }
}