const boxes = document.querySelectorAll('.content');


window.addEventListener('scroll', () => {
  setTimeout(checkBoxes, 1000);
});

function checkBoxes() {
  // console.log(document.defaultView);
  // console.log(this.window);
  const triggerBottom = window.innerHeight;

  boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top

      if(boxTop < triggerBottom) {
          box.classList.add('show')
      } else {
          box.classList.remove('show')
      }
  });
}

