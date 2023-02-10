const textarea = document.querySelector(".textarea");
const tags = document.querySelector(".tags");
let tagNum = null;

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    setTimeout(() => {
      textarea.value = "";
    }, 100);
    tagNum = document.querySelectorAll(".tag");
    randomTags();
  } else {
    setTimeout(createTags, 50);
  }
});

const getRandomTag = (tagLength) => {
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  return tagNum[getRandomInt(tagLength)];
};

const unHighLightTags = () => {
  tagNum.forEach((tag) => {
    tag.classList.remove("highlight");
  });
};

const highLightTag = (tag) => {
  tag.classList.add("highlight");
};

const randomTags = () => {
  const myPromise = new Promise((reslove, reject) => {
    let times = 30;
    let interval = setInterval(() => {
      times--;
      if (times < 0) {
        reslove(interval);
      }
      const tag = getRandomTag(tagNum.length);
      unHighLightTags();
      highLightTag(tag);
    }, 100);
  }).then(res => clearInterval(res)).then(() => setTimeout(() => {
      const tag = getRandomTag(tagNum.length);
      unHighLightTags();
      highLightTag(tag);
  }), 1000).catch(reson => console.error(reson));

//   setTimeout(() => {
//     clearInterval(interval);

//     setTimeout(() => {
//       const tag = getRandomTag(tagNum.length);
//       unHighLightTags();
//       highLightTag(tag);
//     }, 1000);
//   }, times * 100);
// };

const createTags = () => {
  const tagHtml = textarea.value
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map(
      (tag) => `
    <div class="tag" >${tag.trim()}</div>
  `
    )
    .join("");
  tags.innerHTML = "";
  tags.insertAdjacentHTML("afterbegin", tagHtml);
};

// const tagsEl = document.querySelector(".tags");
// const textarea = document.querySelector(".textarea");

// textarea.focus();

// textarea.addEventListener("keyup", (e) => {
//   createTags(e.target.value);

//   if (e.key === "Enter") {
//     setTimeout(() => {
//       e.target.value = "";
//     }, 10);

//     randomSelect();
//   }
// });

// function createTags(input) {
//   const tags = input
//     .split(",")
//     .filter((tag) => tag.trim() !== "")
//     .map((tag) => tag.trim());

//   tagsEl.innerHTML = "";

//   tags.forEach((tag) => {
//     const tagEl = document.createElement("span");
//     tagEl.classList.add("tag");
//     tagEl.innerText = tag;
//     tagsEl.appendChild(tagEl);
//   });
// }

// function randomSelect() {
//   const times = 30;

//   const interval = setInterval(() => {
//     const randomTag = pickRandomTag();
//     if (randomTag !== undefined) {
//       highlightTag(randomTag);
//     }
//   }, 100);

//   setTimeout(() => {
//     clearInterval(interval);

//     setTimeout(() => {
//       const randomTag = pickRandomTag();

//       highlightTag(randomTag);
//     }, 100);
//   }, times * 100);
// }

// function pickRandomTag() {
//   const tags = document.querySelectorAll(".tag");
//   return tags[Math.floor(Math.random() * tags.length)];
// }

// function highlightTag(tag) {
//   tag.classList.add("highlight");
// }

// function unHighlightTag(tag) {
//   tag.classList.remove("highlight");
// }

// const myPromise = new Promise((reslove, reject) => {
//   console.log('promise start');
//   reslove('dfe');
//   setTimeout(reslove('df'),10);
// });
// console.log(myPromise);

// console.log(myPromise.then(res => console.log(typeof res)));

// console.log('sdfe');
// Set up a route for the login page
