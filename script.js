'use strict';

const title = document.querySelector('.title');
const buttonGrid = document.querySelector('.button-grid');
const subtitle = document.querySelector('.subtitle');
const customRow = document.querySelector('.custom-row');

const hideAll = function () {
  title.style.display = 'none';
  buttonGrid.style.display = 'none';
  subtitle.style.display = 'none';
  customRow.style.display = 'none';
};
document.querySelectorAll('.button-grid button').forEach(function(button) {
  button.addEventListener('click', function () {
    hideAll();
  });
});
