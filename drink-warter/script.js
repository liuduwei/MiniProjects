const domRemain = document.querySelector(".remain");
const domCompelet = document.querySelector(".compelete");
const domSmallCups = document.querySelectorAll(".small");
const containerSmallCups = document.querySelector(".container-cup");

const condition = {
  left: 8,
  drinked: 0,
  write(num) {
    this.left = 8 - num;
    this.drinked = num;
  },
};

containerSmallCups.addEventListener("click", (e) => {
  drink(e);
  full(condition);
});

const full = function (condition) {
  if (condition.left === 0) {
    domRemain.style.cssText += `flex:${condition.left}; line-height:0;`;
    domCompelet.style.cssText += `flex:${condition.drinked}; line-height:0; color:#333`;
    domCompelet.innerText = `${(condition.drinked / 8) * 100}%`;
    return;
  }
  if (condition.drinked === 0) {
    domCompelet.style.cssText += `flex:${condition.drinked}; line-height:0; color:#fff;`;
    domRemain.innerText = `${(condition.left / 8) * 2}L Remained`;
    return;
  }
  domRemain.innerText = `${(condition.left / 8) * 2}L Remained`;
  domRemain.style.flex = condition.left;
  domRemain.style.color = 'var(--border-color)';
  domCompelet.style.color = '#333';
  domCompelet.innerText = `${(condition.drinked / 8) * 100}%`;
  domCompelet.style.flex = condition.drinked;
};

const drink = function (e) {
  if (!e.target.classList.contains("small")) return;
  if (
    !e.target.classList.contains("drinked") ||
    +e.target.dataset.nth < condition.drinked
  ) {
    const num = +e.target.dataset.nth;
    condition.write(num);
    domSmallCups.forEach((el, idx) => {
      if (idx < condition.drinked) {
        el.classList.add("drinked");
      } else {
        el.classList.remove("drinked");
      }
    });
  } else {
    const num = +e.target.dataset.nth - 1;
    condition.write(num);
    e.target.classList.remove("drinked");
  }
};
