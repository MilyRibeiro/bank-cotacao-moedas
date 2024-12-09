import imprimeCotacao from "./imprimeCotacao.js";
import selecionaCotacao from "./imprimeCotacao.js";

// DÓLAR: 
const graficoDolar = document.getElementById('graficoDolar');
const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: [],
        datasets: [{
            //label: '# of Votes',
            label: 'Dólar',
            // data: [12, 19, 3, 5, 2, 3],
            data: [],
            borderWidth: 1
        }]
    },
});

// setInterval(() => conectaAPI(), 5000);
// async function conectaAPI() {
//     const conecta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
//     const conectaTraduzido = await conecta.json();
//     console.log(conectaTraduzido);
//     let tempo = geraHorario();
//     let valor = conectaTraduzido.USDBRL.ask;
//     adicionarDados(graficoParaDolar, tempo, valor);
//     imprimeCotacao('Dólar', valor);
//}

//conectaAPI();

function geraHorario() {
    let data = new Date();
   // console.log(data);
   let horario = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
   console.log(horario);
   return horario;
}

//geraHorario();

function adicionarDados(grafico, legenda, dados) {
    grafico.data.labels.push(legenda);
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.push(dados);
    })

    grafico.update();
}

let workerDolar = new Worker('./script/workers/workerDolar.js');
workerDolar.postMessage('usd');

workerDolar.addEventListener('message', event => {
    let tempo = geraHorario();
    let valor = event.data.ask;
    selecionaCotacao('dolar', valor);
    adicionarDados(graficoParaDolar, tempo, valor);
})

// IENE: 

const graficoIene = document.getElementById('graficoIene');
const graficoParaIene = new Chart(graficoIene, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{label: 'Iene',
            data: [],
            borderWidth: 1
        }]
    }
})

let workerIene = new Worker('./script/workers/workerIene.js');
workerIene.postMessage('iene');

workerIene.addEventListener('message', event => {
    let tempo = geraHorario();
    let valor = event.data.ask;
    adicionarDados(graficoParaIene, tempo, valor);
    selecionaCotacao('iene', valor);
})

// EURO
const graficoEuro = document.getElementById('graficoEuro');
const graficoParaEuro = new Chart(graficoEuro, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{label: 'Euro',
            data: [],
            borderWidth: 1
        }]
    }
})

let workerEuro = new Worker('./script/workers/workerEuro.js');
workerEuro.postMessage('euro');

workerEuro.addEventListener('message', event => {
    let tempo = geraHorario();
    let valor = event.data.ask;
    adicionarDados(graficoParaEuro, tempo, valor);
    selecionaCotacao('euro', valor);
})

// PESO CHILENO:
const graficoPeso = document.getElementById('graficoPesoChileno');
const graficoParaPeso = new Chart(graficoPeso, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{label: 'Peso Chileno',
            data: [],
            borderWidth: 1
        }]
    }
})

let workerPeso = new Worker('./script/workers/workerPesoChileno.js');
workerPeso.postMessage('peso');

workerPeso.addEventListener('message', event => {
    let tempo = geraHorario();
    let valor = event.data.ask;
    adicionarDados(graficoParaPeso, tempo, valor);
    selecionaCotacao('peso', valor);
})

// LIBRA:
const graficoLibra = document.getElementById('graficoLibra');
const graficoParaLibra = new Chart(graficoLibra, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{label: 'Libra',
            data: [],
            borderWidth: 1
        }]
    }
})

let workerLibra = new Worker('./script/workers/workerLibra.js');
workerLibra.postMessage('libra');

workerLibra.addEventListener('message', event => {
    let tempo = geraHorario();
    let valor = event.data.ask;
    adicionarDados(graficoParaLibra, tempo, valor);
    selecionaCotacao('libra', valor);
})

// LIBRA:
const graficoYuan = document.getElementById('graficoYuan');
const graficoParaYuan = new Chart(graficoYuan, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{label: 'Yuan',
            data: [],
            borderWidth: 1
        }]
    }
})

let workerYuan = new Worker('./script/workers/workerYuan.js');
workerYuan.postMessage('libra');

workerYuan.addEventListener('message', event => {
    let tempo = geraHorario();
    let valor = event.data.ask;
    adicionarDados(graficoParaYuan, tempo, valor);
    selecionaCotacao('yuan', valor);
})

