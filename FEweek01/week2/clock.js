const clock = document.querySelector("h2#clock");

function dayFunc() {
    const dateF = new Date();
    const dayF = dateF.getDay();
    if (dayF=="0")
        return "일";
    else if (dayF=="1")
        return "월";
    else if (dayF=="2")
        return "화";
    else if (dayF=="3")
        return "수";
    else if (dayF=="4")
        return "목";
    else if (dayF=="5")
        return "금";
    else 
        return "일";
}


function getClock() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const datee = String(date.getDate()).padStart(2, "0");
    const day = dayFunc();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `지금은 ${year}년 ${month}월 ${datee}일 ${day}요일   ${hours}:${minutes}:${seconds} 입니다 ☘️`;
}


function clockClick(){
    clock.style.color = "orange";
}

getClock();
setInterval(getClock, 1000);
clock.addEventListener("click", clockClick);