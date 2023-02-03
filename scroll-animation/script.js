const boxes = document.querySelectorAll(".content");
const container = document.querySelector(".container");
/**
 * old way
 */
// window.addEventListener('scroll', checkBoxes);

// function checkBoxes() {
//   const triggerBottom = window.innerHeight * 6 / 7 + 50;

//   boxes.forEach(box => {
//       const boxTop = box.getBoundingClientRect().top

//       if(boxTop < triggerBottom) {
//           box.classList.add('show')
//       } else {
//           box.classList.remove('show')
//       }
//   });
// }

/*
IntersectionObserver API
 */
const obs = new IntersectionObserver(
  (entries) => {
    if (entries.length >= 1) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
        else entry.target.classList.remove("show");
      });
    }
    if (entries[0].isIntersecting) entries[0].target.classList.add("show");
    else entries[0].target.classList.remove("show");
  },
  {
    root: null,
    threshold: 1,
    rootMargin: "0px 400% 5px 400% ",
    // rootMargin: "0px 0px 5px 0px ",
  }
);

boxes.forEach((box) => {
  obs.observe(box);
});
