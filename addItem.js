const addItemButton = document.getElementById('add-item');

addItemButton.addEventListener('click', addItem);

/**
 * Проверяет, является ли значение валидным числом.
 * @param {string} value - Значение для проверки.
 * @returns {boolean} - true, если значение валидное число больше нуля.
 */
function isValidNumber(value) {
    return !isNaN(value) && Number(value) > 0;
}

/**
 * Добавляет новый элемент в список товаров.
 * Проверяет, что все поля заполнены и содержат корректные значения.
 */
function addItem() {
    const title = document.getElementById('title').value.trim();
    const rating = document.getElementById('raiting').value.trim();
    const price = document.getElementById('price').value.trim();

    if (!title || !isValidNumber(rating) || !isValidNumber(price)) {
        alert('Please fill all fields with valid data');
        return;
    }

    const newItem = document.createElement('div');
    newItem.className = 'tovar-item';
    newItem.setAttribute('raiting', rating);
    newItem.setAttribute('tovar-price', price);
    newItem.textContent = `${title} - Рейтинг: ${rating}, Цена: ${price}`;

    const fragment = document.createDocumentFragment();
    fragment.appendChild(newItem);

    tovarContainer.appendChild(fragment);

    document.getElementById('title').value = '';
    document.getElementById('raiting').value = '';
    document.getElementById('price').value = '';
}

document.getElementById('add-item').addEventListener('click', addItem);
