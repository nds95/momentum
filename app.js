const loginInput = document.querySelector("#login-form input");
const loginButton= document.querySelector("#login-form Button");

function handleLoginBtnClick() {
    let inputValue = loginInput.value;

    if(inputValue === "" || inputValue === " ") {
        alert("input your name!");
    } else {
        console.log(`Hello, ${inputValue}`);
    }
}

loginButton.addEventListener("click", handleLoginBtnClick);