function getProductFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'), 10);
    return products.find(product => product.id === productId);
  }
  
  
  function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        document.getElementById('cart-count').textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
      }
  
      function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
      }
  
      
      window.addEventListener('load', () => {
        const product = getProductFromUrl();
        if (product) {
          document.getElementById('product-img').src = product.image;
          document.getElementById('product-name').textContent = product.name;
          document.getElementById('product-info').textContent = product.info;
          document.getElementById('del-product-price').textContent = `${product.delprice} rs`;
          document.getElementById('product-price').textContent = `${product.price.toFixed()} rs `;
          document.getElementById('add-to-cart').addEventListener('click', () => addToCart(product));
        }
        updateCartCount();
      });