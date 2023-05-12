fetch('./json/featured_items.json')
  .then(response => response.json())
  .then(data => {
    const featuredItems = data.featuredItems;
    // Получение ссылки на блок товаров
    const productBoxContent = document.querySelector('.product-box__content');

    // Создание карточек товаров на основе данных из JSON
    featuredItems.forEach(item => {
      const productCard = document.createElement('div');
      productCard.classList.add('product');

      const productImg = document.createElement('div');
      productImg.classList.add('product__img', 'add_cart');

      const imgLink = document.createElement('a');
      imgLink.href = '#';
      imgLink.classList.add('img__link');

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;

      imgLink.appendChild(img);
      productImg.appendChild(imgLink);

      const productContent = document.createElement('div');
      productContent.classList.add('product__content');

      const heading = document.createElement('p');
      heading.classList.add('product__heading');
      heading.textContent = item.name;

      const text = document.createElement('p');
      text.classList.add('product__text');
      text.textContent = item.description;

      const price = document.createElement('p');
      price.classList.add('product__price');
      price.textContent = '$' + item.price.toFixed(2);

      productContent.appendChild(heading);
      productContent.appendChild(text);
      productContent.appendChild(price);

      productCard.appendChild(productImg);
      productCard.appendChild(productContent);

      productBoxContent.appendChild(productCard);
    });
  });

// Обработка данных после загрузки JSON-файла
function handleJSONLoad() {
  const featuredItems = data.featuredItems;
  if (typeof featuredItems !== 'undefined') {
    handleData(featuredItems);
  }
}

// Событие загрузки JSON-файла
window.addEventListener('DOMContentLoaded', handleJSONLoad);
