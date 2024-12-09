addEventListener("message", event => {
    conectaAPI();
    setInterval(() => conectaAPI(), 9000);
})

async function conectaAPI() {
    const conecta = await fetch("http://economia.awesomeapi.com.br/json/last/CNY-BRL");
    const conectaTraduzido = await conecta.json();
    
    postMessage(conectaTraduzido.CNYBRL);
}