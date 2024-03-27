let miliseg = 0;
let seg = 0;
let minute = 0;

let result = document.querySelector('.result');
let enters = document.querySelector('.enters');
const buttonElement = document.getElementById('main-button');

let isPlay = false;
let interval;

buttonElement.addEventListener('click', () => {
    startStop();
})

document.getElementById('clear-button').addEventListener('click', () => {
    clear();
})

document.getElementById('split-button').addEventListener('click', () => {
    split();
})

function startStop() {

    if (isPlay) {
        clearInterval(interval);
        buttonElement.innerHTML = 'Start';
        isPlay = false;
    } else {
        interval = setInterval(() => logic(), 10)
        buttonElement.innerHTML = 'Stop';
        isPlay = true;
    }
}

function logic() {
    result.innerHTML = `${minute < 10 ? '0' : ''}${minute} : ${seg < 10 ? '0' : ''}${seg} : ${miliseg < 10 ? '0' : ''}${miliseg}`;

    if (miliseg === 99) {
        miliseg = 0;
        seg++;
    }

    if (seg === 60) {
        seg = 0;
        minute++;
    }
    miliseg++;
}

function clear() {
    miliseg = 0;
    seg = 0;
    minute = 0;
    enters.innerHTML = '';
    result.innerHTML = `${minute < 10 ? '0' : ''}${minute} : ${seg < 10 ? '0' : ''}${seg} : ${miliseg < 10 ? '0' : ''}${miliseg}`;
}

function split() {
    result.innerHTML = `${minute < 10 ? '0' : ''}${minute} : ${seg < 10 ? '0' : ''}${seg} : ${miliseg < 10 ? '0' : ''}${miliseg}`;
    enters.innerHTML += `<div class="container">${result.innerHTML}</div>`;
}

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        clear();
    } else if (event.key === 'Enter') {
        split();
    } else if (event.key === ' ') {
        startStop();
    }
})