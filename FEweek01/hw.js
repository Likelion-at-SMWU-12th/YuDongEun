const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const notice = document.querySelector("#notice");


function noticeClick(){
    notice.style.color = "orange";
}


function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName = loginInput.value;
    greeting.innerText = 'Hello ' + userName + '! Nice to meet you :)';
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", loginSubmit);
notice.addEventListener("click", noticeClick);