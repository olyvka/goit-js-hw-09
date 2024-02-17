'use strict';
const feedbackForm = document.querySelector('.feedback-form');
const messageInput = feedbackForm.elements.message;
const emailInput = feedbackForm.elements.email;
const localStorageKey = 'feedback-form-state';
const savedForm = {
  email: emailInput.value,
  message: messageInput.value,
};
const savedFormData = JSON.parse(localStorage.getItem(localStorageKey)) || {};

emailInput.value = savedFormData.email ?? '';
messageInput.value = savedFormData.message ?? '';

function localStorageForm(event) {
  if (event.target == emailInput) {
    savedForm.email = event.target.value.trim();
    savedForm.message = messageInput.value;
  }
  if (event.target == messageInput) {
    savedForm.message = event.target.value.trim();
    savedForm.email = emailInput.value;
  }

  localStorage.setItem(localStorageKey, JSON.stringify(savedForm));
}

function formHandler(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const user = {};

  if (email === '' || message === '') {
    return alert('Всі поля мають бути заповнені!');
  } else {
    user.email = email;
    user.message = message;
  }
  console.log(user);
  localStorage.removeItem(localStorageKey);
  form.reset();
}

feedbackForm.addEventListener('input', localStorageForm);
feedbackForm.addEventListener('submit', formHandler);