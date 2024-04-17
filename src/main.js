// selectors for list div, submit button and input field.
const list = document.querySelector("#list");
const submit = document.querySelector("#submit");
const input = document.querySelector("#input");

// initializes array to hold all handleliste items,
// and id which increments for every new handleliste item, and
// gets assigned to the handeliste item as it´s id.
let listArray = [];
let id = 0;

// function to generate handleliste items, add eventlisteners, and append it to listArray
function appendItem(name) {
  if (name.length < 1) return;
  const listItem = document.createElement("div");
  listItem.id = id;
  listItem.classList += "listitem hoverItem flex flex-row gap-[1rem] bg-white p-4 w-64 rounded";
  listItem.innerHTML = `
<p id="${id}" class="${id} show pointer-events-none">🎁</p>
    <p id="${id}" class=" pointer-events-none">${name}</p>
    `;

  listItem.addEventListener("click", (e) => {
    removeItem(e.target.id);
  });
  listItem.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("listitem")) {
      e.target.children[0].innerHTML = `❌`;
    }
  });
  listItem.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("listitem")) {
      e.target.children[0].innerHTML = `🎁`;
    }
  });

  listArray.push(listItem);
  list.appendChild(listItem);
  id += 1;
}

// removes the handleliste item with specified id
function removeItem(id) {
  list.removeChild(listArray[id]);
  listArray.filter((item) => item.id == id ? true : false);
}

// eventlistener for input field and submit button.
// creates handleliste item on Enter for input field,
// and on click for submit button
input.addEventListener("keyup", (e) => {
  if (e.key == 'Enter' || e.keycode == 13) {
    appendItem(input.value);
  }
});
submit.addEventListener("click", () => {
  appendItem(input.value);
});
