const lista = document.querySelectorAll('[data-lista]');

function selecionaCotacao(nome, valor) {
    lista.forEach((listaEscolhida) => {
        if(listaEscolhida.id == nome) {
            imprimeCotacao(listaEscolhida, nome, valor);
        }
    })
}

function imprimeCotacao(lista, nome, valor) {
    lista.innerHTML = '';
    const plurais = {
        'dolar': 'dólares',
        'iene': 'ienes',
        'euro': 'euros',
        'peso chileno': 'pesos chilenos',
        'libra': 'libras',
        'yuan': 'yuans'
    }
    for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
        const listaItem = document.createElement('li');
        listaItem.innerHTML = `${multiplicador} ${multiplicador == 1? nome : plurais[nome]}: R$${(valor * multiplicador).toFixed(2)}`;
        lista.appendChild(listaItem);
    }
}

// export default imprimeCotacao;
export default selecionaCotacao;