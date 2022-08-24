const startBtn = document.querySelector('#start');
const timeList = document.querySelector('#time-list');
const screens = document.querySelectorAll('.screen');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

let time = 0;
let score = 0;

startBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    screens[0].classList.add('up');
})

timeList.addEventListener('click', evt => {
    if (evt.target.classList.contains('time-btn')) {
        time = parseInt(evt.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
})

board.addEventListener('click', evt => {
    if (evt.target.classList.contains('circle')) {
        score++;
        evt.target.remove();
        createRandomCircle();
    }
})

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        setTime(time);
        time -= 1;
    }
}

function setTime(value) {
    if (value < 10) {
    timeEl.innerHTML = `00:0${value}`;
    } else {
    timeEl.innerHTML = `00:${value}`;
    }
}

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Cчёт: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    circle.style.backgroundColor = `${getRandomColor()}`;


    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    const color = ['#396B24', '#532673', '#CF6F6E', '#B95EC9', '#2D3A86', '#A48437']
    const index = Math.floor(Math.random() * color.length);
    return color[index]
}