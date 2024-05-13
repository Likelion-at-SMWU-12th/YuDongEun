const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const comment = document.querySelector("#comment");
const notice = document.querySelector("#notice");


function noticeClick(){
    notice.style.color = "orange";
}


function loginComment(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName = loginInput.value;
    comment.innerText = 'Hello ' + userName + '! Nice to meet you :)';
    comment.classList.remove("hidden");
}

loginForm.addEventListener("submit", loginComment);
notice.addEventListener("click", noticeClick);