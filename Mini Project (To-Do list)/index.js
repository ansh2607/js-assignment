const clear = document.querySelector('.clear');
const date = document.getElementById('date');
const lists = document.querySelector('.lists');
const list = document.getElementById('list');
const input = document.getElementById('input');
const button = document.querySelector('.add__btn');
const container = document.querySelector('.content');

const options = {weekday: 'long', month: 'short', day: 'numeric'};
const today = new Date();
date.innerHTML = today.toLocaleDateString('en-US', options);

let items, id;

//Getting items from local storage
let data = localStorage.getItem('TODO');

//Checking if data is not empty
if(data) {
    items = JSON.parse(data);
    id = items.length;
    loadItems(items);
} else {
    items = [];
    id = 0;
}

function loadItems(arr) {
    arr.forEach(function(item) {
        add(item.name, item.id, item.del);
    });
}

clear.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});

function add(item, id, del) {

    if(del) { return; }

    const text = `<li class='item'> <p class='item__description'> ${item} </p><i class='ion-ios-close-outline item__delete--btn' job='delete' id='${id}'></i></li>`;
    const position = 'beforeend';
    list.insertAdjacentHTML(position, text);
}

function addItem() {
    const item = input.value;
    if(item) {
        add(item, id, false);

        items.push({
            name: item,
            id: id,
            del: false
        });

        localStorage.setItem('TODO', JSON.stringify(items));

        //id++;
        if (items.length > 0) {
            id = items[items.length - 1].id + 1;
        } else {
            id = 0;
        }
    }
    input.value = '';
}

function removeItem(el) {
    el.parentNode.parentNode.removeChild(el.parentNode);
    items[el.id].del = true;
}

document.addEventListener('keyup', function(event) {
    if(event.keyCode == 13) {
        addItem();
    }
})

button.addEventListener('click', addItem);

list.addEventListener('click', function(event) {
    const el = event.target;
    const job = event.target.attributes.job.value;
    if(job === 'delete') {
        removeItem(el);
    }

    localStorage.setItem('TODO', JSON.stringify(items));

});