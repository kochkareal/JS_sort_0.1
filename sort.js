const tovarContainer = document.getElementById('tovar');

document.getElementById('sort-minMax').addEventListener('click', () => sortElements('tovar-price', true));
document.getElementById('sort-maxMin').addEventListener('click', () => sortElements('tovar-price', false));
document.getElementById('sort-rait').addEventListener('click', () => sortElements('raiting', false));

/**
 * Сортирует элементы внутри контейнера по указанному атрибуту.
 * @param {string} attribute - Имя атрибута для сортировки.
 * @param {boolean} ascending - Направление сортировки: true для возрастания, false для убывания.
 */
function sortElements(attribute, ascending) {
    const items = Array.from(tovarContainer.children);
    items.sort((a, b) => {
        const aValue = parseInt(a.getAttribute(attribute));
        const bValue = parseInt(b.getAttribute(attribute));
        return ascending ? aValue - bValue : bValue - aValue;
    });
    const fragment = document.createDocumentFragment();
    items.forEach(item => fragment.appendChild(item));
    tovarContainer.appendChild(fragment);
}
