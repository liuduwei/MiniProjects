//helper
const getRandomInt = (max) => Math.floor(Math.random() * max);
// producer
const myPromise = new Promise(function (reslove, reject) {
  setTimeout(() => {
    reslove("done");
  }, 1000);
});

// const myRejectPromise = new Promise(function(reslove, reject){
//   setTimeout(() => {
//     reject(new Error('Woops!'));
//   }, 1000);
// });

// const myInstantPromise = new Promise(function(reslove, reject){
//   reject(new Error('Wodfe!'));
// });

// const myRandomPromise = new Promise((reslove, reject) => {
//   const determineNum = getRandomInt(10);
//   if (determineNum < 5) reslove("done");
//   reject(new Error("not done"));
// });

//cusumer

// myRandomPromise.finally(() => console.log('the promise is ready')).then(
//   (res) => console.log(res),
//   (err) => console.error(err)
// ).catch(err => console.error(`catch ${err}`))

const btn = document.querySelector(".btn");
const animationCircle = function (top, left, radius) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.width = 0;
  circle.style.height = 0;
  circle.style.top = `${top}px`;
  circle.style.left = `${left}px`;
  document.body.appendChild(circle);
  return new Promise(resolve => {
    btn.clientLeft;
    circle.style.width = `${radius * 2}px`;
    circle.style.height = `${radius * 2}px`;
    circle.addEventListener("transitionend", function handle() {
      circle.removeEventListener("transitionend", handle);
      resolve(circle);
    });
  });
};

btn.addEventListener("click", () => {
  animationCircle(100, 100, 100).then((circle) => circle.append("Hello World"));
});
