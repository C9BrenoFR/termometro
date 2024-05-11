
let tentativa = 0;

function getValor(id){
    const valor = document.getElementById(id).textContent;
    return parseInt(valor);
}

function cor(porcento){
    if (porcento < 25) return document.getElementById('progress').style.background = "#FF0000";
    if (porcento < 50) return document.getElementById('progress').style.background = "#FF4500";
    if (porcento < 75) return document.getElementById('progress').style.background = "#FFFF00";
    if (porcento < 100) return document.getElementById('progress').style.background = "#9ACD32";
    document.getElementById('progress').style.background = "#008000";
}

function mudar(mudanca){
    let porcento = getValor('porcento');
    let pontos = getValor('pontos');

    porcento += mudanca;

    if (porcento < 0) porcento = 0;
    if (porcento > 100) porcento = 100;

    if (porcento == 100) vitoria();
    if (porcento == 0) derrota();
    
    pontos = 10000 * (porcento / 100);
    
    document.getElementById('porcento').textContent = porcento;
    document.getElementById('pontos').textContent = pontos + " Pontos";
    document.getElementById('progress').style.width = `${porcento}%`;
    cor(porcento);
}

function negociar(valor){
    tentativa++;
    if (tentativa > 3) return alert(`O cliente desistiu de negociar com você!`);
    let porcento = getValor('porcento');
    let bonus = getBonus(porcento);

    let dificuldade = getDificuldade(valor);

    let sorte = (getRandomInt(30)) + bonus;

    if (sorte >= dificuldade){
        alert(`Você conseguiu, o cliente aceitou sua proposta!`);
    }else{
        alert(`Você não conseguiu, o cliente recusou sua proposta!`);
    }

}

function vitoria(){
    document.getElementById('vitoria').play();
}

function derrota(){
    document.getElementById('derrota').play();
}

function final(){
    document.getElementById('todosBotoes').style.display = "none";
    document.getElementById('input').style.display = "block";
}

function getRandomInt(max) {
    return Math.floor((Math.random() * max) + 1);
}

function getBonus(porcento){
    switch (true) {
        case (porcento >= 10 && porcento < 20):
          return 2;
        case (porcento >= 20 && porcento < 30):
          return 3;
        case (porcento >= 30 && porcento < 40):
          return 4;
        case (porcento >= 40 && porcento < 50):
          return 5;
        case (porcento >= 50 && porcento < 60):
          return 6;
        case (porcento >= 60 && porcento < 70):
          return 7;
        case (porcento >= 70 && porcento < 80):
          return 14;
        case (porcento >= 80 && porcento < 90):
          return 15;
        case (porcento >= 90 && porcento <= 100):
          return 20;
        default:
          return -100;
      }
}

function getDificuldade(valor){
    switch (true) {
        case (valor >= 20000 && valor < 26000):
          return 9;
        case (valor >= 26000 && valor < 32000):
          return 10;
        case (valor >= 32000 && valor < 38000):
          return 11;
        case (valor >= 38000 && valor < 44000):
          return 12;
        case (valor >= 44000 && valor < 50000):
          return 13;
        case (valor >= 50000 && valor < 56000):
          return 14;
        case (valor >= 56000 && valor < 62000):
          return 15;
        case (valor >= 62000 && valor < 68000):
          return 16;
        case (valor >= 68000 && valor < 74000):
          return 17;
        case (valor >= 74000 && valor < 80000):
          return 18;
        case (valor >= 80000 && valor < 86000):
          return 19;
        case (valor >= 86000 && valor <= 120000):
          return 20;
      }

}