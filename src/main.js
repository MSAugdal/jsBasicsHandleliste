const list = document.querySelector("#list");
const submit = document.querySelector("#submit");
const input = document.querySelector("#input");

let listArray = [];
let id = 0;

function appendItem(name) {
  const listItem = document.createElement("div");
  listItem.id = id;
  listItem.classList += "hoverItem flex flex-row gap-[1rem] bg-white p-4 w-64 rounded";
  listItem.innerHTML = `
  <p id="${listItem.id}">🫣</p>
  <p id="${listItem.id}">${name}</p>
    `;

  listItem.addEventListener("click", (e) => {
    removeItem(e.target.id);
  });

  listArray.push(listItem);
  list.appendChild(listItem);
  id += 1;
}

function removeItem(id) {
  list.removeChild(listArray[id]);
  console.log(`removed: ${id}`);
  listArray.filter((item) => item.id == id ? true : false);
}


input.addEventListener("keyup", (e) => {
  if (e.key == 'Enter' || e.keycode == 13) {
    appendItem(input.value);
  }
});

submit.addEventListener("click", () => {
  appendItem(input.value);
});
