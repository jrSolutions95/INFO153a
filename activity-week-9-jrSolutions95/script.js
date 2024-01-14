//add item to cart
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const fromBtn = itemForm.querySelector('button');
let isEditMode = false;

function displayItems(){
    const itemsFromStorage = getItemFromStorage();
    itemsFromStorage.forEach(item => {
        addItemToDom(item);
    });
    checkUi();
}

function addToCart(e) {
    e.preventDefault();

    const newItem = itemInput.value;
    if(newItem === "") {
        alert("Please enter an item");
        return;
    }

    //check for editmode
    if(isEditMode){
        const itemToEdit = itemList.querySelector(".edit-mode");

        removeItemFromStorage(itemToEdit.textContent);
        itemToEdit.classList.remove("edit-mode");
        itemToEdit.remove();
        isEditMode = false;
    } else{
        if(checkIfItemExists(newItem)){
            alert("Item already exists");
            return;
        }
    }

    addItemToDom(newItem);
    addItemToStorage(newItem);
    checkUi();
    itemInput.value = "";
}

function addItemToDom(item){
    //create a list item and add them to the list
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    const button = createButton("remove-item btn-link text-red");
    li.appendChild(button);
    //add to list
    itemList.appendChild(li);
}
//add item to local storage
function addItemToStorage(item){
    const itemsFromStorage = getItemFromStorage();
    //Add new item to array
    itemsFromStorage.push(item);

    //convert to json sting and set to local storage
    localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function getItemFromStorage(){
    let itemsFromStorage;

    if(localStorage.getItem("items") === null){//no items in local storage
        itemsFromStorage = [];
    }
    else{//there are items in local storage
        itemsFromStorage = JSON.parse(localStorage.getItem("items"));
        
    }
    return itemsFromStorage;
}

//create a button
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon("fa-solid fa-xmark")
    button.appendChild(icon);
    return button;
}
//create an icon
function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function onClickItem(e){
    if (e.target.parentElement.classList.contains("remove-item")){
        removeItem(e.target.parentElement.parentElement);
    } else{
        setItemToEdit(e.target);
    }

}

function checkIfItemExists(item){
    const itemsFromStorage = getItemFromStorage();
    return itemsFromStorage.includes(item);
}

function setItemToEdit(item){
    isEditMode = true;
    itemList.querySelectorAll('li').forEach(i => i.classList.remove("edit-mode"));
    item.classList.add("edit-mode");
    fromBtn.innerHTML= '<i class="fa-solid fa-check"></i> Update Item';
    fromBtn.style.backgroundColor = "#228B22";
    itemInput.value = item.textContent;
}
//remove item from cart
function removeItem(item){
    if(confirm("Are you sure?")){
        item.remove();

        //remove item from storage
        removeItemFromStorage(item.textContent);
        checkUi();
    }
    
    
    
    
    
    //Old version good to see e.target.parentElement
    //e.taret gives icon
    //e.taret.parentElement gives button
    //e.target.remove();//will just remove the icon
    //if (e.target.parentElement.classList.contains("remove-item")){
      //  if(confirm("Are you sure?")){
      //  e.target.parentElement.parentElement.remove();//will remove the whole list item
      //  checkUi();
    //}
//}
}

function removeItemFromStorage(item){
    let itemsFromStorage = getItemFromStorage();
    //filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter(i => i !== item);
    localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}
//clear all items from cart
function clearItems(e){

    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
    //clear from localStorage
    localStorage.removeItem("items");//we use items because it is the only key we have, we could also use clear
    //could also use localStorage.clear();//clears everything
    checkUi();
}

function filterItems(e){
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();//this is the text node
        if(itemName.indexOf(text) !=-1){
            item.style.display = "flex"
        } else{
            item.style.display = "none";
        }
    });
}

function checkUi(){
    itemInput.value = "";
    const items = itemList.querySelectorAll('li');
    if(items.length === 0){
        clearButton.style.display = 'none';
        itemFilter.style.display ='none';
    } else {
        clearButton.style.display= "block";
        itemFilter.style.display= "block";
    }

    fromBtn.innerHTML= '<i class="fa-solid fa-plus"></i> Add Item';
    fromBtn.style.backgroundColor = "#333";
}

//initialization app
function init(){
    //event listeners
    itemForm.addEventListener('submit', addToCart);
    itemList.addEventListener('click', onClickItem);
    clearButton.addEventListener('click', clearItems);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems);
    checkUi();
}
init();




/* localStorage.setItem('name', 'John');
console.log(localStorage.getItem('name'));
localStorage.clear(); */

    