// blurry loading
(function () {
  const heading = document.querySelector(".heading--loading");
  const bg = document.querySelector(".bg");

  let loading = 0;

  let intval = setInterval(increaseLoading, 30);

  function increaseLoading() {
    loading++;

    if (loading > 99) {
      clearInterval(intval);
    }

    renderBlur(loading);
  }
  const renderBlur = function (loading) {
    bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;
    heading.style.opacity = scale(loading, 0, 100, 1, 0);
    heading.innerText = `${loading}%`;
  };

  const scale = function (num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
})();

// animation-nav
const animation_nav_btnEl = document.querySelector(".animation-nav .btn");
const animation_nav_navEl = document.querySelector(".animation-nav .nav");
animation_nav_btnEl.addEventListener("click", () => {
  animation_nav_navEl.classList.toggle("active");
});

// audio-button
const audio_button_btnContainer = document.querySelector(".buttons");
const audio_button_audios = document.querySelectorAll("audio");
const playSelectAudio = (el) => {
  const selectAudioEl = document.querySelector(`.${el.innerText}`);
  audio_button_audios.forEach((audio) => {
    audio.pause();
  });
  selectAudioEl.play();
};

audio_button_btnContainer.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) return;
  playSelectAudio(e.target);
});
