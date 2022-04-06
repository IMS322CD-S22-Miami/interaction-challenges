let userList = document.getElementById("user-list");
let userInput = document.getElementById("user-input");

userInput.addEventListener("change", addListItem);

function addListItem() {
  let newItem = document.createElement("LI");
  newItem.innerText = this.value;
  userList.appendChild(newItem);
  this.value = "";
}