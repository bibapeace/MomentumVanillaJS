const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".js-greetings");
const USER_LS = "currentUsername",
  SHOWING_CN = "showing";

function saveUsername(text) {
  localStorage.setItem(USER_LS, text);
}

function submitHandler(event) {
  event.preventDefault();
  const inputValue = input.value;
  showGreeting(inputValue);
  saveUsername(inputValue);
}

function showGreeting(text) {
  greetings.innerText = `Salam, ${text}`;
  greetings.classList.add(SHOWING_CN);
  form.classList.remove(SHOWING_CN);
}

function askForUsername() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", submitHandler);
}

function loadUsername() {
  const currentUsername = localStorage.getItem(USER_LS);
  if (currentUsername === null) {
    askForUsername();
  } else {
    showGreeting(currentUsername);
  }
}

function init() {
  loadUsername();
}

init();
