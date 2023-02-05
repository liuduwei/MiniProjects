const labelEmail = document.querySelector('.email');
const labelPassword = document.querySelector('.password');
const spansEmail = labelEmail.querySelectorAll('span');
const spansPassword = labelPassword.querySelectorAll('span');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');

const addDelayStyle = (els) => {
  els.forEach((el, idx) => {
    el.style.transitionDelay = `${idx * 50}ms`;
  })
}
addDelayStyle(spansEmail);
addDelayStyle(spansPassword);

inputEmail.addEventListener('focus', () => {
  labelEmail.classList.add('focus-animation');
});

inputEmail.addEventListener('blur', (e) => {
  if (!e.target.value) labelEmail.classList.remove('focus-animation');
});

inputPassword.addEventListener('focus', () => {
  labelPassword.classList.add('focus-animation');
});

inputPassword.addEventListener('blur', (e) => {
  if (!e.target.value) labelPassword.classList.remove('focus-animation');
});
