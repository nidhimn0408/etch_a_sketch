const row = function (num) {
    const container = document.getElementById('container');
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('rows');
        container.appendChild(row);
    }
    const arr = document.querySelectorAll('.rows')
    for (const item of arr) {
        for (let i = 0; i < num; i++) {
            const coulmn = document.createElement('div');
            coulmn.classList.add('coulm');
            item.appendChild(coulmn);
        }
    }
}
const emptyHTMl = function (parentnode) {
    parentnode.innerHTML = "";
}
const reset = function () {
    const container = document.getElementById('container');
    const Reset = document.querySelector('.reset');
    Reset.addEventListener('click', () => {
        emptyHTMl(container);
    })
}
const gridnum = function () {
    const container = document.getElementById('container');
    const input = document.querySelector('input');
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
        if (input.value <= 0 || input.value > 40) {
            alert('Enter something in between 1 and 40');
        }
        else {
            //to empty inner HTML Here what we  need to do is :
            emptyHTMl(container);
            row(input.value);
            addColor();
            removerColor();
            blackPen();
            mixPen();
            warm();
            cold();
            clear();
            input.value="";
        }

    })
}
const colorChange = function (item) {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "black";
    })
}
const addColor = function () {
    const block = document.querySelectorAll('.coulm');
    block.forEach(colorChange);
}


const bgRemove = function (item) {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "";
    })
}
//we neeed mehtod to remove existing background color when eraser button is clicked and then it is hovered over it 
const removerColor = function () {
    const block = document.querySelectorAll('.coulm');
    const eraser = document.querySelector('img');
    eraser.addEventListener('click', () => {
        block.forEach(bgRemove);
    })
}
const blackPen = function () {
    const block = document.querySelectorAll('.coulm');
    const pen = document.querySelector('.item1')
    pen.addEventListener('click', () => {
        block.forEach(colorChange);
    })
}
const RandomeColorGenerator = function () {
    let letter = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        hexCode += letter[Math.floor(Math.random() * 16)]
    }
    return hexCode;
}
const randomColorSelector = function (item) {
    let color = RandomeColorGenerator();
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = color;
    })
}
const mixPen = function () {
    const block = document.querySelectorAll('.coulm');
    const pen = document.querySelector('.item2')
    pen.addEventListener('click', () => {
        block.forEach(randomColorSelector);
    })
}
const warmColor = function (item) {
    // let color = RandomeColorGenerator();
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "rgb(255, 164, 8)";
    })
}
const warm = function () {
    const block = document.querySelectorAll('.coulm');
    const pen = document.querySelector('.item3')
    pen.addEventListener('click', () => {
        block.forEach(warmColor);
    })
}
const coldColor = function (item) {
    let color = RandomeColorGenerator();
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "rgb(0, 135, 254)";
    })
}
const cold = function () {
    const block = document.querySelectorAll('.coulm');
    const pen = document.querySelector('.item4')
    pen.addEventListener('click', () => {
        block.forEach(coldColor);
    })
}
const bgRem = function (item) {
    item.style.backgroundColor = "";
}
const clear = function () {
    const clr = document.querySelector('.clr')
    const block = document.querySelectorAll('.coulm');
    clr.addEventListener('click', () => {
        block.forEach(bgRem);
    })
}
const run = function () {
    row(16);
    reset();
    gridnum();
    addColor();
    removerColor();
    blackPen();
    mixPen();
    warm();
    cold();
    clear();
}
run();