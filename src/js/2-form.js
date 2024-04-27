const addFont = document.head.insertAdjacentHTML(
  'beforeend',
  '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>'
);

const formEl = document.querySelector('.feedback-form');

const inputEvent = formEl.addEventListener('input', event => {
  const formData = {
    email: formEl.elements.email.value.trim(),
    message: formEl.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const checkStorage = window.addEventListener('load', () => {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const { email, message } = JSON.parse(storedData);
    formEl.elements.email.value = email;
    formEl.elements.message.value = message;
  }
});

const submitForm = formEl.addEventListener('submit', event => {
  const emailValue = formEl.elements.email.value.trim();
  const messageValue = formEl.elements.message.value.trim();
  if (
    emailValue.includes('@') &&
    emailValue.includes('.') &&
    emailValue &&
    messageValue
  ) {
    event.preventDefault();
    const formData = {
      email: formEl.elements.email.value.trim(),
      message: formEl.elements.message.value.trim(),
    };
    localStorage.removeItem('feedback-form-state');
    formEl.reset();
    console.log(formData);
  } else {
    event.preventDefault();
    alert('Type valid email and message');
  }
});
