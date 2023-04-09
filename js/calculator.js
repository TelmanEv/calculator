const numBtnsArr = document.querySelectorAll('.num-btns');
const operBtnsArr = document.querySelectorAll('.oper-btns');

for(let i=0; i < numBtnsArr.length; i++){
    numBtnsArr[i].addEventListener('click', onNumberClick);
}
for(let i=0; i < operBtnsArr.length; i++){
    operBtnsArr[i].addEventListener('click', onOperatorClick);
}
const equalsBtn = document.querySelector('.equals-btn');
equalsBtn.addEventListener('click', calculateAnswer);

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', clearBox);

const numBox = document.getElementById('num-box');
numBox.textContent = "";

let numStr = "";
let num = 0;
let nums = [];
let oper = '';
let answer = 0;

function onNumberClick(){
    numStr += this.id; 
    numBox.textContent += this.id
}

function onOperatorClick(){
    oper = this.id;
    num = Number(numStr);
    nums.push(num);
    numStr = '';
    numBox.textContent += ' ' + this.id + ' ';
}

function calculateAnswer(){
    num = Number(numStr);
    nums.push(num);
    if(oper == '+') answer = nums[0] + nums[1];
    if(oper == '-') answer = nums[0] - nums[1];
    if(oper == '*') answer = nums[0] * nums[1];
    if(oper == '/') answer = nums[0] / nums[1];
    if(Number.isInteger(answer)){
        numBox.textContent += ' = ' + answer;
    } else {
        numBox.textContent += ' = ' + answer.toFixed(4);
    }
}

function clearBox(){
    numBox.textContent = '';
    nums = [];
    num = 0;
    oper = '';
    total = 0;
    numStr = '';
}