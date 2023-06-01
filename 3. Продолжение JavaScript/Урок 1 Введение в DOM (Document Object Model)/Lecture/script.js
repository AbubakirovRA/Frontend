const buttonEl = document.querySelector('.btn');
const contentEl = document.querySelector('.content');
const imgEl = document.querySelector('.img');
console.log(buttonEl);

const textEl = document.createElement('p');
textEl.textContent = 'Много-много текста';

buttonEl.onclick = () => {
    console.log('клик js');
    buttonEl.textContent = 'товар в корзине';
    contentEl.appendChild(textEl);
}

imgEl.onclick = () => {
    imgEl.src = "newPhoto.jpg"
}


