const heading = document.querySelector('.heading--loading');
const bg = document.querySelector('.bg');

let loading = 0;

let intval = setInterval(increaseLoading, 30);

// const increaseLoading = function() {
  // loading++;

  // if (loading > 99) {
  //   clearInterval(intval);
  // };

  // renderBlur();
// }

function increaseLoading() {
  loading++;

  if (loading > 99) {
    clearInterval(intval);
  };

  renderBlur(loading);
}
const renderBlur = function(loading) {
  bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;
  heading.style.opacity = scale(loading, 0, 100, 1, 0);
  heading.innerText = `${loading}%`
}

const scale = function(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}