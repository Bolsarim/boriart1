let cartItems = [];

function addToCart(productName, price) {
  const newItem = { productName, price };
  cartItems.push(newItem);

  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  let total = 0;

  // Limpar a lista de carrinho antes de atualizar
  cartList.innerHTML = '';

  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('cart-item');
    listItem.innerHTML = `
      <span>${item.productName}</span>
      <span>R$ ${item.price.toFixed(2)}</span>
      <button onclick="removeFromCart('${item.productName}', ${item.price})">Remover</button>
    `;
    cartList.appendChild(listItem);

    total += item.price;
  });

  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function removeFromCart(productName, price) {
  const index = cartItems.findIndex(item => item.productName === productName && item.price === price);

  if (index !== -1) {
    cartItems.splice(index, 1);
    updateCart();
  }
}



document.addEventListener('DOMContentLoaded', function () {
  const bannerList = document.querySelector('.banner-list');
  const images = document.querySelectorAll('.banner-list img');
  let index = 0;
  const imageWidth = images[0].clientWidth;

  setInterval(() => {
      index = (index + 1) % images.length;
      updateBanner();
  }, 5000); // Altere o valor 3000 para ajustar o intervalo de transição em milissegundos

  function updateBanner() {
      const translateValue = -index * imageWidth + 'px';
      bannerList.style.transform = 'translateX(' + translateValue + ')';
  }
});