const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector("#list");

function onSubmitButtonClick() {
  const newItem = input.value.trim();
  const items = getListItemsFromStorage();

  if (newItem == '') {
    alert("write something!");
    return;
  }
  if (items.includes(newItem)) {
    alert("Item already exists!");
    return;
  }

  addListItemToStorage(newItem);
  addListItemToDOM(newItem);
}

function onRemoveButtonClick(e) {
  const targetItem = e.target.parentElement;
  list.removeChild(targetItem);
  removeItemFromStorage(targetItem.id);
}

function getListItemsFromStorage() {
  let items;
  if (localStorage.getItem("items") === null) items = [];
  else items = JSON.parse(localStorage.getItem("items"));
  return items;
}

function addListItemToStorage(item) {
  const items = getListItemsFromStorage();
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
}

function removeItemFromStorage(item) {
  let items = getListItemsFromStorage();
  const index = items.indexOf(item);
  items.splice(index, 1);

  localStorage.setItem("items", JSON.stringify(items));
}

function addListItemToDOM(item) {
  const newItem = createListItem(item);
  list.appendChild(newItem);
}

function createButton() {
  const _button = document.createElement("button");
  _button.addEventListener("click", onRemoveButtonClick);
  _button.classList += "bg-black text-white text-sm ml-1 px-4 py-2 rounded transition hover:transition hover:bg-pink-400";
  _button.innerText = "Remove";
  return _button;
}

function createListItem(itemName) {
  const item = document.createElement("li");
  item.classList += "bg-white flex gap-4 text-black justify-center items-center text-lg px-8 py-3 rounded";
  item.id = itemName;
  item.innerHTML = `<p class="text-xl text-left">${itemName}</p>`;
  item.append(createButton());

  return item;
}

function initialize() {
  button.addEventListener("click", onSubmitButtonClick);

  const items = getListItemsFromStorage();
  items.forEach((item) => {
    addListItemToDOM(item);
  });
}

initialize();
