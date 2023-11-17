document.querySelector('#sort-minMax').onclick = () => sortItems('tovar-price', 'asc'); 
document.querySelector('#sort-maxMin').onclick = () => sortItems('tovar-price', 'desc');
document.querySelector('#sort-rait').onclick = () => sortItems('raiting', 'desc'); 
document.querySelector('#add-item').onclick = () => 
    AddItem(document.getElementById("title").value, 
            document.getElementById("price").value, 
            document.getElementById("raiting").value); 
document.querySelector('#add-random').onclick = AddRandom; 

function sortItems(sortBy, order){
    let tovar = document.querySelector('#tovar');

    Array.from(tovar.children)
      .sort((a, b) => {
        let aVal = +a.getAttribute(sortBy);
        let bVal = +b.getAttribute(sortBy);
        if(order == 'asc') {
          return aVal - bVal;
        }
        else {
          return bVal - aVal;
        }
      })
      .forEach((child) => {
         tovar.appendChild(child);
      });
}

function AddItem(title, price, raiting){
    var newDiv = document.createElement("div");
    newDiv.classList.add("tovar-item");
    newDiv.setAttribute("raiting", raiting);
    newDiv.setAttribute("tovar-price", price);
    newDiv.textContent = `${title} ${price}$ (${raiting})`;
    document.getElementById("tovar").appendChild(newDiv);
}

function getRandomNumber(min, max) {
    return (Math.random() * (max - min + 1)) + min;
}

function AddRandom(){
   AddItem("Случайный товар", getRandomNumber(1, 9999), getRandomNumber(1, 10));
}
