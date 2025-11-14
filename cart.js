const cartItems = document.getElementById('cart-items');
const totalCost = document.getElementById('total-cost');
const clearCartButton = document.getElementById('clear-cart');

let cart = JSON.parse(localStorage.getItem('cart')) || [];
function renderCart() {
  cartItems.innerHTML = '';
  let totalCostValue = 0;
  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.name + " - " + item.price + " руб.";
    cartItems.appendChild(li);
    totalCostValue += item.price;
  });
  totalCost.textContent = totalCostValue;
}

function clearCart() {
  cart = [];
  renderCart();
  localStorage.removeItem('cart');
}

window.onload = function() {
  renderCart();
  clearCartButton.addEventListener('click', clearCart);
};
