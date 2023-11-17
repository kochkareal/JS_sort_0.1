
//replacedNode = parentNode.replaceChild(newChild, oldChild);

//replacedNode = tovar.replaceChild(tovar.children[1], tovar.children[0]);
//console.log(replacedNode);
//tovar.appendChild (replacedNode)

document.querySelector('#sort-minMax').onclick = SortMinMax; //привязываем кнопки
document.querySelector('#sort-maxMin').onclick = SortMaxMin;
document.querySelector('#sort-rait').onclick = SortMaxMinRait; 
document.querySelector('#add-item').onclick = AddItem; 

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

function AddItem(){
    var text1 = document.getElementById("title").value;
    var text2 = document.getElementById("raiting").value;
    var text3 = document.getElementById("price").value;    
    var newElement = document.createElement("div");
    newElement.innerHTML = text1 + " " + text2 + " " + text3 ;
    document.getElementById("tovar").appendChild(newElement);

}
