const counters = document.querySelectorAll(".counter");

// document.addEventListener("DOMContentLoaded", () => {
//   counters.forEach((counter) => {
//     counter.innerText = "0";
//     let target = +counter.dataset.target;
//     let current = +counter.innerText;
//     const increament = target / 200;
//     const updateCounter = () => {
//       if (current > target) {
//         counter.innerText = `${target}`;
//       } else {
//         current += Math.ceil(increament);
//         counter.innerText = current;
//         setTimeout(updateCounter, 1);
//       }
//     };
//     updateCounter();
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  counters.forEach((counter) => {
    counter.innerText = 0;
    const target = +counter.dataset.target;
    const increament = Math.ceil(target / 200);
    let current = +counter.innerText;
    const increamentNumber = new Promise((resolve, reject) => {
      let interval = setInterval(() => {
        if (current >= target) {
          counter.innerText = target;
          clearInterval(interval);
          resolve(counter);
        } else {
          current += increament;
          counter.innerText = current;
        }
      }, 1);
    }).then(counter => counter.style.color = 'red').catch(reson => console.error(reson));
  });
});

// const count = function(Counter, timer = 0) {
//   const intval = setInterval(() => {
//     timer++;
//   })
// }

// const interval1 = setInterval(() => {
//   console.log(1);
//   count(5000, timer1, interval1);
// }, 0.1);
// const interval2 = setInterval(() => {
//   console.log(2);
//   count(7000, timer1, interval2);
// }, 50);
// const interval3 = setInterval(() => {
//   console.log(3);
//   count(9000, timer1, interval3);
// }, 50);

// const count = function(counter, timer, interval) {
//   timer++;
//   if (timer >= counter) clearInterval(interval);
// }
