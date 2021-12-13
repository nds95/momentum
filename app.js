const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");
const ATag = document.querySelector('body > a');

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    alert('Hello');
}

ATag.addEventListener("click", handleLinkClick);