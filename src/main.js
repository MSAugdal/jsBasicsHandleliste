const list = document.querySelector("#list");
const submit = document.querySelector("#submit");
const input = document.querySelector("#input");

let listArray = [];
let id = 0;

function appendItem(name) {
  if (name.length < 1) return;
  const listItem = document.createElement("div");
  listItem.id = id;
  listItem.classList += "listitem hoverItem flex flex-row gap-[1rem] bg-white p-4 w-64 rounded";
  listItem.innerHTML = `
<p id="${id}" class="${id} show pointer-events-none">🫣</p>
    <p id="${id}" class=" pointer-events-none">${name}</p>
    `;

  listItem.addEventListener("click", (e) => {
    removeItem(e.target.id);
  });
  listItem.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("listitem")) {
      e.target.firstChild.innerHTML = "❌";
    }
  });
  listItem.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("listitem")) {
      e.target.firstChild;
      console.log(e.target.firstChild);
    }
  });

  listArray.push(listItem);
  list.appendChild(listItem);
  id += 1;
}

function removeItem(id) {
  list.removeChild(listArray[id]);
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
