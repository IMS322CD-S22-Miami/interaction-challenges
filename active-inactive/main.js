let buttons = document.querySelectorAll(".button");

for (let b of buttons) {
  b.addEventListener("click", toggleActive);
}

function toggleActive() {
  let activeButton = document.querySelector(".active");
  activeButton.classList.toggle("active");
  activeButton.classList.toggle("inactive");
  this.classList.toggle("active");
  this.classList.toggle("inactive");
}