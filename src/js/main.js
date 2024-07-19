let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let email = document.querySelector('#email');
let inputQuery = mainForm.elements['query'];
let message = document.querySelector('#message');
let consent = document.querySelector('#consent');
let successMessage = document.querySelector('#successMessage');
let counterSpan = document.querySelector('#counter');

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Handle messages function
function requiredInputMsj(name) {
  name.className = 'block';
  name.classList.add('mt-1');
  name.classList.add('text-redPrimary');
  name.classList.add('text[0rem]');
  name.classList.add('sm:text[0rem]');
  name.classList.add('max-[639px]:text-xs');
}

// Firstname input listener
firstName.addEventListener('input', () => {
  if (firstName.value === '' || firstName.value.length < 3) {
    requiredInputMsj(msj);
    firstName.classList.add('empty:border-redPrimary');
  } else {
    msj.className = 'hidden';
    firstName.classList.remove('empty:border-redPrimary');
  }
});

// Lastname input listener
lastName.addEventListener('input', () => {
  if (lastName.value === '' || lastName.value.length < 2) {
    requiredInputMsj(msj2);
    lastName.classList.add('empty:border-redPrimary');
  } else {
    msj2.className = 'hidden';
    lastName.classList.remove('empty:border-redPrimary');
  }
});

// Email input listener
email.addEventListener('input', () => {
  if (!validateEmail(email.value)) {
    requiredInputMsj(emailMessage);
    email.classList.add('empty:border-redPrimary');
  } else {
    emailMessage.className = 'hidden';
    email.classList.remove('empty:border-redPrimary');
  }
});

// InputQuery listener
querySelected = null;
inputQuery.forEach(input => {
  input.addEventListener('click', () => {
    if (input.checked.value != '') {
      queryMessage.classList = 'hidden';
      querySelected = true;
    } else {
      requiredInputMsj(queryMessage);
      querySelected = false;
    }
  });
});

// Message input listener
message.addEventListener('input', () => {
  if (message.value === '' || message.value.length < 6) {
    requiredInputMsj(msj3);
    message.classList.add('empty:border-redPrimary');
  } else {
    msj3.className = 'hidden';
    message.classList.remove('empty:border-redPrimary');
  }
});

// Consent input listener
consent.addEventListener('input', () => {
  if (!consent.checked) {
    requiredInputMsj(consentMessage);
  } else {
    consentMessage.className = 'hidden';
  }
});

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (firstName.value === '' || lastName.value === '' || email.value === '') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else if (querySelected === false || message.value === '' || !consent.checked) {
    window.scrollTo({
      top: 350,
      behavior: 'smooth'
    });
  } else {
    successMessage.classList.remove('hidden');
    successMessage.classList.add('block');
    counter = 5;
    setInterval(() => {
      counterSpan.innerHTML = `
        ${counter--} seconds
      `;
    }, 1000);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    inputQuery.forEach(input => {
      input.checked = false;
      input.parentNode.classList.remove('bg-greenLighter');
    });
    message.value = '';
    consent.checked = false;
    setTimeout(() => {
      window.location.reload();
    }, 6000);
  }
});