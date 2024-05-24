let target = document.querySelector("#dynamic");

function randomString() {
    let stringArr = ["안녕 ! ", "나는 dong-eun you 야", "행복한 하루 보내 ☘️", "I'm happy to see you 💓"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

//타이핑 리셋 함수
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 100);
    }else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

console.log(selectString);
console.log(selectStringArr);

function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);

dynamic(selectStringArr);
