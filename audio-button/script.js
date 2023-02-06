const btns = document.querySelectorAll('.btn');
const btnContainer = document.querySelector('.buttons');
const audios = document.querySelectorAll('audio');
const playSelectAudio = (el) => {
  const selectAudioEl = document.querySelector(`.${el.innerText}`);
  audios.forEach(audio => {
    audio.pause();
  });
  selectAudioEl.play();
};

btnContainer.addEventListener('click', (e) => {
  if (e.target == e.currentTarget) return;
  playSelectAudio(e.target);
});