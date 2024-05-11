
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
    
    pontos = 10000 * (porcento / 100);
    
    document.getElementById('porcento').textContent = porcento;
    document.getElementById('pontos').textContent = pontos;
    document.getElementById('progress').style.width = `${porcento}%`;
    cor(porcento);
}