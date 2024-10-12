// Function to add product to cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
}

// Function to load cart items on cart.html
function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    cartContainer.innerHTML = '';

    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty!</p>';
        totalPriceContainer.innerHTML = '';
    } else {
        cart.forEach((item, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('cart-product');
            productDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            `;
            cartContainer.appendChild(productDiv);
            totalPrice += item.price;
        });

        // Display the total price
        totalPriceContainer.innerHTML = `<h3>Total Price: $${totalPrice.toFixed(2)}</h3>`;
    }
}

// Function to remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems(); // Refresh the cart display
}

document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Logged In Successfully');
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
