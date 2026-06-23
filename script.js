// VARIÁVEIS DO CARRINHO
let cart = [];
let total = 0;

// SIMULAÇÃO DE RESGATE DE CUPÃO
function claimCoupon(value) {
    alert(`Cupão de ${value} guardado! Será descontado automaticamente no encerramento.`);
}

// ABRIR OU FECHAR JANELA DO CARRINHO
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

// ADICIONAR ITEM AO CARRINHO
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartDOM();
}

// ATUALIZAR INTERFACE DO CARRINHO
function updateCartDOM() {
    // Atualizar contador no ícone do topo
    document.getElementById('cart-counter').innerText = cart.length;
    
    // Atualizar valor total acumulado
    document.getElementById('cart-total-value').innerText = total.toFixed(2) + '€';
    
    // Atualizar lista visual de produtos no painel lateral
    const list = document.getElementById('cart-items-list');
    list.innerHTML = '';
    
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `<span>${item.name}</span> <strong>${item.price}€</strong>`;
        list.appendChild(li);
    });
}

// BARRA DE PESQUISA EM TEMPO REAL
function filterProducts() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const cards = document.getElementsByClassName('product-card');
    
    for (let i = 0; i < cards.length; i++) {
        const name = cards[i].getAttribute('data-name');
        if (name.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// SIMULAÇÃO DO CHECKOUT FINAL
function checkout() {
    if (cart.length === 0) {
        alert("O seu carrinho está vazio! Adicione algum artigo.");
    } else {
        alert(`Demonstração Finalizada!\n\nValor total simulado: ${total.toFixed(2)}€\n\nA sua estrutura de código está pronta a ser conectada a um sistema de vendas real.`);
        // Limpa o estado da demo
        cart = [];
        total = 0;
        updateCartDOM();
        toggleCart();
    }
}
