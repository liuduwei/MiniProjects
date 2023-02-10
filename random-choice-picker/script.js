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
  }), 1000).catch(reson => console.error(reson))};

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
