document.querySelector('#sort-minMax').onclick = SortMinMax; //привязываем кнопки
document.querySelector('#sort-maxMin').onclick = SortMaxMin;
document.querySelector('#sort-rait').onclick = SortMaxMinRait; 
document.querySelector('#add-item').onclick = AddItem(document.getElementById("title").value, document.getElementById("price").value, document.getElementById("raiting").value); 
document.querySelector('#add-random').onclick = AddRandom; 

function SortMinMax(){                                       //от меньшего к большему
    let tovar = document.querySelector('#tovar');
    for (let i = 0; i < tovar.children.length; i++){
        for (let j = i; j < tovar.children.length; j++) {
            if(+tovar.children[i].getAttribute('tovar-price')> +tovar.children[j].getAttribute('tovar-price')){
                replacedNode = tovar.replaceChild(tovar.children[j], tovar.children[i]);
                insertAfter(replacedNode, tovar.children[i]);
            }
        }
    }
}

function SortMaxMin(){                                          //от большего к меньшему
    let tovar = document.querySelector('#tovar');
    for (let i = 0; i < tovar.children.length; i++){
        for (let j = i; j < tovar.children.length; j++) {
            if(+tovar.children[i].getAttribute('tovar-price')< +tovar.children[j].getAttribute('tovar-price')){
                replacedNode = tovar.replaceChild(tovar.children[j], tovar.children[i]);
                insertAfter(replacedNode, tovar.children[i]);
            }
        }
    }
}

function SortMaxMinRait(){                                          //от большего к меньшему
    let tovar = document.querySelector('#tovar');
    for (let i = 0; i < tovar.children.length; i++){
        for (let j = i; j < tovar.children.length; j++) {
            if(+tovar.children[i].getAttribute('raiting')< +tovar.children[j].getAttribute('raiting')){
                replacedNode = tovar.replaceChild(tovar.children[j], tovar.children[i]);
                insertAfter(replacedNode, tovar.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

function AddItem(title, price, raiting){
    var newDiv = document.createElement("div");

    // Задаем класс элемента
    newDiv.classList.add("tovar-item");

    // Устанавливаем атрибуты элемента
    newDiv.setAttribute("raiting", raiting);
    newDiv.setAttribute("tovar-price", price);
    
    newDiv.textContent = title + " " + price + "$ (" + raiting + ")";
    document.getElementById("tovar").appendChild(newDiv);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function AddRandom(){
   AddItem("Случайный товар", getRandomNumber(1, 9999), getRandomNumber(1, 10)) ;
}
