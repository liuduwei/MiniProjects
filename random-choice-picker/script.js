// const textarea = document.querySelector(".textarea");
// const tags = document.querySelector(".tags");

// textarea.focus();

// textarea.addEventListener("keyup", (e) => {
//   if (e.code === "Enter") {
//     randomTags();
//   } else {
//     setTimeout(createTags, 50);
//   }
// });

// const randomTags = () => {
//   textarea.value = '';
//   let times = 0;
//   const getRandomInt = (max) => Math.floor(Math.random() * max);
//   const tagNum = tags.querySelectorAll(".tag");
//   const hightLightTag = () => {
//     times++;
//     if (times > 99) clearInterval(interval);
//     tagNum.forEach((tag) => {
//       tag.classList.remove("highlight");
//     });
//     tagNum[getRandomInt(tagNum.length)].classList.add("highlight");
//   };

//   let interval = setInterval(hightLightTag, 50);
// };

// const createTags = () => {
//   const tagHtml = textarea.value
//     .split(",")
//     .filter((tag) => tag.trim() !== "")
//     .map(
//       (tag) => `
//     <div class="tag" >${tag.trim()}</div>
//   `
//     )
//     .join("");
//   tags.innerHTML = "";
//   tags.insertAdjacentHTML("afterbegin", tagHtml);
// };

const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    if (randomTag !== undefined) {
      highlightTag(randomTag);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}

