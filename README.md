# [sortJS.github.io](https://kochkareal.github.io/sortJS.github.io/)

Представлен простой пример сортировки HTML элементов при помощи JS

## Описание Ивентов 

- `SortMinMax` выполняется, когда нажали на элемент с ID `sort-minMax`.
- `SortMaxMin` выполняется, когда нажали на элемент с ID `sort-maxMin`.
- `SortMaxMinRait` выполняется, когда нажали на элемент с ID `sort-rait`.
- `AddItem` выполняется, когда нажали на элемент с ID `add-item`.

## Описание функций

`SortMinMax`, `SortMaxMin`, `SortMaxMinRait` - это методы сортировки элементов.

Они реализованы как функции сортировки пузырьком〽️, в которых каждый элемент сравнивается с каждым для определения порядка сортировки.
- `SortMinMax` сортирует элементы по атрибуту `tovar-price` от меньшего к большему.
- `SortMaxMin` сортирует элементы по атрибуту `tovar-price` от большего к меньшему.
- `SortMaxMinRait` сортирует элементы по атрибуту `raiting` от большего к меньшему.

`AddItem` - это функция, которая добавляет новый элемент с данными из полей ввода в список товаров.
- Сначала значения полей ввода `title`, `raiting` и `price` читаются и сохраняются в переменные `text1, text2, text3`.
- Создаётся новый div элемент и ему назначаются класс tovar-item и атрибуты `raiting` и `tovar-price`, равные `raiting` и `price` соответственно.
- Текстовое содержание элемента устанавливается в виде комбинации значения рейтинга и цены.
- Далее новый элемент добавляется в элемент с ID `tovar`.

## Чек-лист
- [ ] Реализовать сортировку элементов с помощью JS
- [ ] Написать стиль к документу
- [ ] Создать раздел добавления элементов
- [ ] Реализовать валидацию поля ввода
- [ ] Добавить счетчик количества товаров
- [ ] Реализовать функцию удаления товара


