const panelContainer = document.querySelector('.panel-container');
const panels = document.querySelectorAll('.panel');

panelContainer.addEventListener('click', function(e) {
  if (!e.target.classList.contains('panel')) return;
  removeAllActice(); 
  e.target.classList.toggle('active');
})

const removeAllActice = function() {
  panels.forEach((panel) => panel.classList.remove('active'));
}

