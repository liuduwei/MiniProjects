const btnNext = document.querySelector('.btn--next');
const btnPrev = document.querySelector('.btn--prev');
const circle = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress--line');

let currentCircle = 1;
console.log(circle);

btnNext.addEventListener('click', function() {
  if (currentCircle >= circle.length) return;

  currentCircle++;
  console.log(currentCircle);

  updateBtn();
  updateCircle();
  updateProgress();
})

btnPrev.addEventListener('click', function() {
  if (currentCircle <= 1) return;

  currentCircle--;
  console.log(currentCircle);

  updateBtn();
  updateCircle();
  updateProgress();
})

const updateCircle = function() {
  circle.forEach(function(circle, idx) {
    if (idx < currentCircle) circle.classList.add('active');
    else circle.classList.remove('active');
  })
}

const updateBtn = function() {
  switch(currentCircle) {
    case 1:
      btnPrev.classList.remove('active');
      btnPrev.setAttribute('disabled', '');
      break
    case 4:
      btnNext.classList.remove('active');
      btnNext.setAttribute('disabled', '');
      break
    default:
      btnNext.classList.add('active');
      btnNext.removeAttribute('disabled');
      btnPrev.classList.add('active');
      btnPrev.removeAttribute('disabled');
  }
}

const updateProgress = function() {
  const widthPercent = `${((currentCircle-1) / (circle.length-1)) * 100}%`;
  progress.style.width = widthPercent;
}



