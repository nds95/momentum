const loginInput = document.querySelector("#login-form input");
const loginButton= document.querySelector("#login-form Button");

function handleLoginBtnClick() {
    console.log(`Hello, ${loginInput.value}`);
}

loginButton.addEventListener("click", handleLoginBtnClick);