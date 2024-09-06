
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  function renderProducts() {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
        <img src="${product.image}" alt="">
        <h4>${product.name}</h4>
        <p>Price: ${product.price.toFixed()}rs</p>
<button onclick="location.href='product-detail.html?id=${product.id}'" class="btn-details">View Details</button>
      `;
      productsContainer.appendChild(productDiv);
    });
  }

  window.addEventListener('load', () => {
    renderProducts();
    updateCartCount();
  });

  function checkout()
  {
    alert("Your Order Is Confirmed")
  }
  function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    const cartCount = document.getElementById('cart-count');
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let itemCount = 0;

    cart.forEach(item => {
      total += item.price * item.quantity;
      itemCount += item.quantity;
      const cartItem = document.createElement('div');
      cartItem.className = 'product';
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h5>${item.name}</h5>
          <p>Price: <span class="product-total">${(item.price * item.quantity).toFixed()}rs</span></p>
          <div class="counter d-flex gap-3">
            <button id="decrement" id="decrement-${item.id}" onclick="decreaseQuantity(${item.id})">-</button>
            <div id="counter-value" id="counter-value-${item.id}" type="number" readonly>${item.quantity}</div>
            <button id="increment" id="increment-${item.id}" onclick="increaseQuantity(${item.id})">+</button>
          </div>
          <br>
          </div>
          <button onclick="removeFromCart(${item.id})" class="btn " >Remove</button>
          
        `
      ;
      cartItemsContainer.appendChild(cartItem);
    });

    totalAmount.textContent = `Total: ${total.toFixed()}rs `;
    cartCount.textContent = itemCount;
  }

  
  function clearCart() {
    localStorage.removeItem('cart');
    updateCart();
  }

  function decreaseQuantity(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = cart.find(item => item.id === id);
    if (product.quantity > 1) {
      product.quantity -= 1;
    } else {
      cart = cart.filter(item => item.id !== id);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
  }

  function increaseQuantity(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = cart.find(item => item.id === id);
    product.quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
  }

  function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
  }

  window.addEventListener('load', () => {
    updateCart();
    document.getElementById('clear-cart').addEventListener('click', clearCart);
    document.getElementById('clear-cart2').addEventListener('click', clearCart);

    document.getElementById('continue-shopping').addEventListener('click', () => {
      location.href = 'beds.html'; // Adjust to your actual product page URL
    });
    updateCartIcon();
  });

  function updateCartIcon() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
  }

  
//related


 