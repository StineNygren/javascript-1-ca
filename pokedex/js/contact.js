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
    displayError();
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

function displayError() {
  if (!nameValidation()) {
    display.innerHTML += `
    <h3>Name is required</h3>`;
  }
  if (!subjectValidation()) {
    display.innerHTML += `
    <h3>Subject must have 10 letters</h3>`;
  }
  if (!emailValidation()) {
    display.innerHTML += `
    <h3>Email must have emali address</h3>`;
  }
  if (!addressValidation()) {
    display.innerHTML += `
    <h3>Address must have 25 letters</h3>`;
  }
}

function nameValidation() {
  if (!nameInput.value) {
    nameError.style.display = "block";
    return false;
  }
  return true;
}

function subjectValidation() {
  if (subject.value.length >= 10) {
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
  const regEx = /@gmail.com|@hotmail.com/;
  return regEx.test(email.value);
}

function addressValidation() {
  if (address.value.length >= 25) {
    return true;
  }
  addressError.style.display = "block";
  return false;
}
