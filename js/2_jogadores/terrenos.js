var jogador1 = new jogador(15, 15, 15, 15, 15, 15, 0)
var terreno1J1 = new terreno(true, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 2)

var cliqueTerrenoJ1Ativo = false;
var qtdConstTerreno1J1 = 0;

var custoPiramideGrande = new construao(3, 5, 1)

var andamentoPiramideGrandeJ1 = false;
var andamentoPiramideMediaJ1 = false;
var andamentoPiramidePequenaJ1 = false;

function construao(moedas, pedras, madeiras){
    this.moedas = moedas;
    this.pedras = pedras;
    this.madeiras = madeiras;
}

function terreno(ativo, piramideGrande, piramideMedia, piramidePequena, obelisco, esfinge, estatua, pocoGrande, pocoPequeno, extratoraGrande, extratoraPequena, fazendaGrande, fazendaPequena, pedreiraGrande, pedreiraPequena, temploGrande, temploPequeno, quartelGrande, quartelPequeno, casaDaVida, trabalhador, medico, sacerdote, soldado, habitantes, construcoes) {
    this.ativo = ativo;
    this.piramideGrande = piramideGrande;
    this.piramideMedia = piramideMedia;
    this.piramidePequena = piramidePequena;
    this.obelisco = obelisco;
    this.esfinge = esfinge;
    this.estatua = estatua;
    this.pocoGrande = pocoGrande;
    this.pocoPequeno = pocoPequeno;
    this.extratoraGrande = extratoraGrande;
    this.extratoraPequena = extratoraPequena;
    this.pedreiraGrande = pedreiraGrande;
    this.pedreiraPequena = pedreiraPequena;
    this.fazendaGrande = fazendaGrande;
    this.fazendaPequena = fazendaPequena;
    this.temploGrande = temploGrande;
    this.temploPequeno = temploPequeno;
    this.quartelGrande = quartelGrande;
    this.quartelPequeno = quartelPequeno;
    this.casaDaVida = casaDaVida;
    this.trabalhador = trabalhador;
    this.soldado = soldado;
    this.medico = medico;
    this.sacerdote = sacerdote;
    this.habitantes = trabalhador + soldado + medico + sacerdote;
    this.construcoes = piramideGrande + piramideMedia + piramidePequena + obelisco + esfinge + estatua + pocoGrande + pocoPequeno + extratoraGrande + extratoraPequena + fazendaGrande + fazendaPequena + pedreiraGrande + pedreiraPequena + temploGrande + temploPequeno + casaDaVida;
}

function jogador(moedas, pedras, madeiras, aguas, comidas, pontosFelicidade, pontosVitoria){
    this.moedas = moedas;
    this.pedras = pedras;
    this.madeiras = madeiras;
    this.aguas = aguas;
    this.comidas = comidas;
    this.pontosFelicidade = pontosFelicidade;
    this.pontosVitoria = pontosVitoria;
}

function podeConstruirPiramideGrandeJ1 (){
    return  jogador1.moedas >= custoPiramideGrande.moedas &&
            jogador1.pedras >= custoPiramideGrande.pedras &&
            jogador1.madeiras >= custoPiramideGrande.madeiras
}

function cliqueTerreno1J1(){
    if (cliqueTerrenoJ1Ativo == true) {
        if (terreno1J1.ativo == true) {
            if (andamentoPiramideGrandeJ1 == true) {
                if (terreno1J1.construcoes < 10) {
                    if (podeConstruirPiramideGrandeJ1) {
                        if (acoesDoAdversario == false){
                            document.getElementById('jog1_terreno_1').innerHTML = "fdf";
                            andamentoPiramideGrandeJ1 = false;
                            alert("piramide grande construída!")
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
                        }else {
                            document.getElementById('jog1_terreno_1').innerHTML = "fdf";
                            andamentoPiramideGrandeJ1 = false;
                            alert("piramide grande construída!")
                            esconderBotoesAcaoAdversarioJ2();
                            vezJogador1();
                            atualizaRodada();
                            acoesDoAdversario = false;
                        }

                    }else{
                        alert("Não tem recursos para construir.")
                    }
                }else{
                    alert("não pode mais construir nesse terreno, limite de contruções atingido.")
                }
            }else if(andamentoPiramideMediaJ1 == true){
                alert("construindo piramide media!")
            }else if(andamentoPiramidePequenaJ1 == true){
                alert("construindo piramide pequena!")
            }
        }else{
            alert("Este terrenos não lhe pertence ainda, escolha um terreno que é seu!")
        }
    }
}