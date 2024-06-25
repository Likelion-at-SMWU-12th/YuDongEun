//querySelector를 이용해서 원하는 요소 데려오기!
const content = document.querySelector("div.content h1");

function handleContentClick(){
    content.style.color = "orange";
}

content.addEventListener("click", handleContentClick);