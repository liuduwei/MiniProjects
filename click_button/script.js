const btn = document.querySelector(".button--click");

btn.addEventListener("click", (e) => {
  const clickEl = document.createElement("div");
  const xAxis = e.offsetX;
  const yAxis = e.offsetY;
  console.log(xAxis);
  console.log(yAxis);
  clickEl.style.cssText = `
    
    left: ${xAxis}px;
    top: ${yAxis}px;
    `;
  clickEl.classList.add('cirlce');
  e.target.appendChild(clickEl);

  setTimeout(()=> {
    clickEl.remove();
  }, 500);
});
