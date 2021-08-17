let shopping_list_items = []

function addItem() {
    let new_item = document.getElementById('new-item-text').value;
    shopping_list_items.push(new_item);
    console.log(shopping_list_items);
    updateItems();

}

function clearList() {
    shopping_list_items = [];
    updateItems();
}

function updateItems() {
    let list_element = document.getElementById('shopping-list-items');
    list_element.innerHTML = '';
    shopping_list_items.forEach((item) => {
        console.log(item);
        let item_element = document.createElement('li');
        item_element.innerText = item;
        list_element.appendChild(item_element)
    });
}
