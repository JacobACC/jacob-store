let cart = [];
let products = [
    { id: 1, name: 'Konto Fortnite', price: 100 },
    { id: 2, name: 'Konto CS:GO', price: 200 },
    { id: 3, name: 'Konto League of Legends', price: 150 },
];

function selectProduct(id) {
    document.getElementById("products").scrollIntoView();
    highlightProduct(id);
}

function highlightProduct(id) {
    const productDivs = document.querySelectorAll(".product");
    productDivs.forEach(div => div.classList.remove("highlight"));
    document.getElementById(`product-${id}`).classList.add("highlight");
}

function loadProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        productList.innerHTML += `
            <div class="product" id="product-${product.id}">
                <h3>${product.name}</h3>
                <p>${product.price} PLN</p>
                <button onclick="addToCart(${product.id})">Dodaj do koszyka</button>
            </div>
        `;
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (cart.find(p => p.id === productId)) {
        alert("Produkt już dodany!");
    } else {
        cart.push(product);
        updateCart();
        alert(`${product.name} dodano do koszyka.`);
    }
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = '';
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - ${item.price} PLN</p>`;
    });

    document.getElementById("empty-cart").style.display = cart.length ? 'none' : 'block';
}

function openCart() {
    document.getElementById("cart-sidebar").classList.add("active");
}

function closeCart() {
    document.getElementById("cart-sidebar").classList.remove("active");
}

function proceedToCheckout() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Dziękujemy za zakup w kwocie ${total} PLN`);
    cart = [];
    updateCart();
}

document.getElementById("cartBtn").onclick = openCart;

loadProducts();