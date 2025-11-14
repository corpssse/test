const products = [
    { id: 1, name: 'Яблоки', price: 50, image: 'https://img.razrisyika.ru/kart/46/1200/181853-yabloko-kartinka-3.jpg' },
    { id: 2, name: 'Пекинская капуста', price: 80, image: 'https://www.ug72.ru/up/goodimages/image/Kapusta%20Pekinskaya.jpg' },
    { id: 3, name: 'Помидоры', price: 60, image: 'https://funforkids.ru/pictures/tomatophoto/tomato014.png' },
    { id: 4, name: 'Огурцы', price: 40, image: 'https://s2.best-wallpaper.net/wallpaper/2560x1920/2106/Green-cucumber-leaves-romantic-white-background_2560x1920.jpg' },
    { id: 5, name: 'Брокколи', price: 55, image: 'https://azbuka-produktov.ru/assets/images/catalog/ovoshi-frukti-yagodi/brokkoli.png' },
    { id: 6, name: 'Болгарский перец', price: 90, image: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614583417_74-p-perets-na-belom-fone-82.jpg' },
];

const productList = document.getElementById('product-list');

let cart = [];

function renderProducts() {
  productList.innerHTML = '';
  products.forEach((product) => {
    const li = document.createElement('li');
    li.classList.add('product-card');
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    const name = document.createElement('h3');
    name.textContent = product.name;
    const price = document.createElement('p');
    price.textContent = product.price + " руб.";
    li.append(img, name, price);
    li.addEventListener('click', () => addToCart(product)); 
    productList.appendChild(li);
  });
}

function addToCart(product) {
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart)); 
}

window.onload = function() {
  renderProducts();
};