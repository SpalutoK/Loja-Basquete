// Mapeamento de tênis para URLs de compra
const urlsDeCompra = {
    'Book 1 \'Ashen Slate\'': 'https://dunk.com.br/produtos/book-1-ashen-slate/',
    'Nike LeBron 20': 'https://sneakerpointzn.com/products/nike-lebron-20-time-machine',
    'Adidas Harden Vol. 10': 'https://www.adidas.com.br/tenis-harden-volume-10/JQ9453.html',
    'Puma RS-X Basketball': 'https://www.mercadolivre.com.br/search?q=Puma+RS-X+Basketball+basquete',
    'Regata de Compressão Nike Elite Pro Nba Dri-Fit': 'https://sportness.com.br/products/regata-de-compressao-nike-nba-dri-fit-2?variant=44760087036036',
    'Regata GoldenState Curry': 'https://www.lojanba.com/p/regata-jersey-nba-nike-golden-state-warriors-stephen-curry-n-30-masculina-azul+amarelo-2IC-8863-392',
    'Faixa de cabeça Nike Elite NBA preta Dri-fit tamanho único': 'https://www.ebay.com/itm/127797012056?_skw=basketball+headband&itmmeta=01KPY6YJA1C8Q991Z3Q2FA1VVZ&hash=item1dc14ba658:g:FmMAAeSwgrhp1P~i&itmprp=enc%3AAQALAAAA0DKQclQvzFwZQpmMrsO4LurNf%2FniOf7eSVIGycHQKQtdDAl81SuaPgBUGZ4S5VKGzEsNoIqkUXBwb%2FdWO3rFK3GzhWifJe7HF43L5EmEiA4F7Tw%2FzxDmnM%2Fk9mAge4Rv8ESCa%2FxoTUPcNQJZXBampG%2Burk64eKeTvOWRVNgEVoZiZW0VWdqcT%2FP35AZcLqrT8WBtivkYCU75Tn8s5ivNNYoqi9J1yo2wzy1aBXg8Q2VncDExtQDqnXBXaayBolQ4%2Bj5B%2FdpPeyRGs%2Fw7QIBeT6c%3D%7Ctkp%3ABk9SR5Kl-sa3Zw',
    'Mochila Nike Hoops Elite Pro': 'https://www.amazon.com.br/Nike-mochila-basquete-hoops-elite/dp/B0DC5PTP5C'
};

// Seleciona todos os botões de "Adicionar ao Carrinho"
const botoes = document.querySelectorAll('button');

// Adiciona evento de clique para cada botão
botoes.forEach(botao => {
    botao.addEventListener('click', function() {
        // Encontra o article que contém o botão
        const article = this.closest('article');
        
        // Encontra o título do produto (h3) dentro do article
        const titulo = article.querySelector('h3').textContent;
        
        // Obtém a URL de compra correspondente
        const urlCompra = urlsDeCompra[titulo];
        
        if (urlCompra) {
            // Redireciona para o site de compra
            window.open(urlCompra, '_blank');
        } else {
            alert('Desculpe, não conseguimos encontrar a página de compra para este produto.');
        }
    });
});
