const nameInput = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const btn = document.querySelector("button");
const form = document.querySelector("form");
const display = document.querySelector(".display");
const nameError = document.querySelector("#name-error");
const subjectError = document.querySelector("#subject-error");
const emailError = document.querySelector("#email-error");
const addressError = document.querySelector("#address-error");

document.title = "Contact";

form.addEventListener("submit", (event) => {
  if (
    nameValidation() &&
    subjectValidation() &&
    emailValidation() &&
    addressValidation()
  ) {
    const inputs = {
      name: nameInput.value,
      subject: subject.value,
      email: email.value,
      address: address.value,
    };
    displayInput(inputs);
  } else {
    event.preventDefault();
  }
  event.preventDefault();
});

function displayInput(inputs) {
  display.innerHTML = `
    <h3>${inputs.name}</h3>
    <h3>${inputs.subject}</h3>
    <h3>${inputs.email}</h3>
    <h3>${inputs.address}</h3>
    `;
}

function nameValidation() {
  if (!nameInput.value) {
    nameError.style.display = "block";
    return false;
  }
  nameError.style.display = "none";
  return true;
}

function subjectValidation() {
  if (subject.value.length >= 10) {
    subjectError.style.display = "none";
    return true;
  }
  subjectError.style.display = "block";
  return false;
}

function emailValidation() {
  if (!email.value) {
    emailError.style.display = "block";
    return false;
  }
  emailError.style.display = "none";
  const regEx = /@gmail.com|@hotmail.com/;
  return regEx.test(email.value);
}

function addressValidation() {
  if (address.value.length >= 25) {
    addressError.style.display = "none";
    return true;
  }
  addressError.style.display = "block";
  return false;
}
