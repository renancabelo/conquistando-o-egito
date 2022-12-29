var jogador1 = new jogador(15, 15, 15, 15, 15, 15, 0)

var cliqueTerrenoJ1Ativo = true;
var terreno1J1 = true;
var qtdConstTerreno1J1 = 0;

var custoPiramideGrande = new construao(3, 5, 1)

var andamentoPiramideGrandeJ1 = true;
var andamentoPiramideMediaJ1 = false;
var andamentoPiramidePequenaJ1 = false;

function construao(moedas, pedras, madeiras){
    this.moedas = moedas;
    this.pedras = pedras;
    this.madeiras = madeiras;
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

function cliqueTerreno1J1(){
    if (cliqueTerrenoJ1Ativo == true) {
        if (terreno1J1 == true) {
            if (andamentoPiramideGrandeJ1 == true) {
                if (qtdConstTerreno1J1 < 10) {
                    if (jogador1.moedas >= custoPiramideGrande.moedas &&
                        jogador1.pedras >= custoPiramideGrande.pedras &&
                        jogador1.madeiras >= custoPiramideGrande.madeiras) {
                        alert("construindo piramide grande!")
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