const profileWrapper = document.querySelector(".profile-wrapper")
let scrollValue = 0;
const rightbutton = document.querySelector(".right")
const leftbutton = document.querySelector(".left")

const resize = () => {
    const documentHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
       }
    window.addEventListener("resize", documentHeight)
    documentHeight()
}

const heartInteraction = (e) => {
    if(e.target.classList.contains("btn")){
        return;
    }
    

    const heartWrapper = document.querySelector('.heart-wrapper')
    const heart = document.createElement('span')

    const x = e.offsetX
    const y = e.offsetY
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random() * 100

    heart.style.width = 75 + size + 'px'
    heart.style.height = 75 + size + 'px'
    
    heartWrapper.appendChild(heart)

    setTimeout(function(){
        heart.remove();
    }, 5000);
}

const rightInteraction = (direction) => {
    console.log("direction : ", direction);

    // right
    // scrollValue = (scrollValue + 1) % 6;
    // left
    // scrollValue = (scrollValue - 1) % 6;

 

    if (direction=="right") {
        scrollValue = (scrollValue + 1) % 6;
    } else {
        scrollValue = (scrollValue - 1) % 6;
    }

    if(scrollValue ===-1){
        scrollValue=5
    }

    console.log(scrollValue);
    //-3 + 6 -> 3
    //-2 + 6 -> 4
    //-1 + 6 -> 5

    // 0
    // 1
    // 2
    // 3
    // 4
    // 5

    // 6 > 0
    // 7 > 1
    // ...

    // 12 > 0
    // 13 > 1
    // 14 > 2

    const moveValue = `-${100 * scrollValue }%`;
    profileWrapper.style.transform = `translateX(${moveValue})`

    // debug 
    // 01. 여백이 생긴다.
    // 01-1. 모바일 변경시 문제
    // 02. 좌우 버튼 필요
    // 03. 한계값 만들어주기
}

const eventInit = () => {
    document.addEventListener('click', heartInteraction)
    rightbutton.addEventListener('click', () => {
        rightInteraction("right")
    })
    leftbutton.addEventListener('click', () => {
        rightInteraction("left")
    })
}

const init = () => {
    resize();
    eventInit();
}

init();