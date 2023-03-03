const empties = document.querySelectorAll(".empty");
const fill = document.querySelector(".fill");

fill.addEventListener("dragstart", function () {
  this.classList.add('hold');
});
fill.addEventListener("dragend", function() {
  this.classList.remove('hold');
});

empties.forEach((e) => {
  // e.addEventListener('drag', (e) => {
  //   console.log('drag', e);
  // });
  // e.addEventListener('dragend', function() {
  // });
  e.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  e.addEventListener("dragenter", function (e) {
    e.preventDefault();
    this.classList.add('hovered');
  });
  e.addEventListener("drop", function(e) {
    this.appendChild(fill);
    this.classList.remove('hovered');
  });
  e.addEventListener('dragleave', function(e) {
    this.classList.remove('hovered');
  });
  // e.addEventListener('dragstart', (e) => {
  //   console.log('dragstart', e);
  // });
});
