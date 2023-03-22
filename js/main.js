let addItem = document.getElementById("add-item");
let itemInput = document.getElementById("item-input");
let todoList = document.getElementById("todo-list");
let doneList = document.getElementById("done-list");

addItem.addEventListener("submit", (e) => {
  e.preventDefault();
  createItem(itemInput.value);
});

function createItem(x) {
  let htmlOutput = `<li>${x} <button onclick="deleteItem(this)">Delete item</button><button onclick="archiveItem(this)">Archive item</button></li>`;
  todoList.insertAdjacentHTML("beforeend", htmlOutput);
  itemInput.value = "";
  itemInput.focus();
  archiveItem(htmlOutput);
}

function archiveItem(z) {
  let archivedItem = `${z}`;
  doneList.innerHTML = archivedItem;
}

function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove();
}
