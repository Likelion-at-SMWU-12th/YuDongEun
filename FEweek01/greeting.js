const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function loginSubmit(event){
    event.preventDefault();
    loginForm.slassList.add("hidden");
    const userName = loginInput.Value;
    greeting.innerText = 'Hello' + userName + '!';
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", loginSubmit);