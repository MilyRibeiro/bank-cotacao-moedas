addEventListener("message", event => {
    // extract person passed from main thread from event object
    let moeda = event.data;
    conectaAPI(moeda);
    setInterval(() => conectaAPI(moeda), 9000);
})


async function conectaAPI(moeda) {
    const conecta = await fetch("https://economia.awesomeapi.com.br/last/EUR-BRL");
    const conectaTraduzido = await conecta.json();

    postMessage(conectaTraduzido.EURBRL);
}