'use strict';

// Create a Constant Variables for the classes
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// Create a open modal function
const opanModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Create a close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Add event to show the modal
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', opanModal);
}

// Add event to close the modal
overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);

// add event for the esc button on keyboard to to close the modal
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
