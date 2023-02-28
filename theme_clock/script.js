const secondEl = document.querySelector(".s");
const minuteEl = document.querySelector(".m");
const hourEl = document.querySelector(".h");
const btn = document.querySelector(".theme");
const dateEl = document.querySelector(".date");
const timeEl = document.querySelector(".time");

// 60 - 360
const timeToDeg = function (x) {
  return (x / 60) * 360;
};

const monthEn = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const weekEn = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let now = new Date();
let month = +now.getMonth(); //0 - 11
let date = +now.getDate(); //1-30,31
let day = +now.getDay(); //0 - 6
let hour = +now.getHours();
let minute = +now.getMinutes();
let second = +now.getSeconds();


const getTime = function () {
  now = new Date();
  month = +now.getMonth(); //0 - 11
  date = +now.getDate(); //1-30,31
  day = +now.getDay(); //0 - 6
  hour = +now.getHours();
  minute = +now.getMinutes();
  second = +now.getSeconds();
};

const updateClock = function () {
  //⏰
  secondEl.style.transform = `translate(-50%, -100%) rotate(${timeToDeg(
    second
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${timeToDeg(
    minute
  )}deg)`;
  hourEl.style.transform = `translate(-50%, -100%) rotate(${timeToDeg(
    hour
  )}deg)`;
  // 21:21
  timeEl.innerText =
    hour > 12 ? `${hour - 12}:${minute} PM` : `${hour}:${minute} AM`;
  // date
  dateEl.querySelector(
    ".text"
  ).innerHTML = `${weekEn[day]},&nbsp; ${monthEn[month]}`;
  // cirlr
  dateEl.querySelector(".circle").innerText = `${date}`;
};
updateClock();

const secTimmer = setInterval(() => {
  if (second >= 60) {
    getTime();
    updateClock();
  } else {
    second++;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${timeToDeg(
      second
    )}deg)`;
  }
}, 1000);

// const minuteTimmer = setInterval(() => {
//   if (minute >= 60) {
//     minute = 0;
//   } else {
//     minute++;
//   }
//   minuteEl.style.transform = `translate(-50%, -100%) rotate(${timeToDeg(
//     minute
//   )}deg)`;
// }, 1000 * 60);

// const hourTimmer = setInterval((hour) => {
//   if (hour >= 24) {
//     hour = 0;
//   } else {
//     hour++;
//   }
//   hourEl.style.transform = `translate(-50%, -100%) rotate(${timeToDeg(
//     hour
//   )}deg)`;
// }, 1000 * 60 * 60);
