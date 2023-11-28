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
