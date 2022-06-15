const score1Elem = document.querySelector('#score1');
const score2Elem = document.querySelector('#score2');
const palyingToElem = document.querySelector('#palyingTo');
const btnOfPlayer1 = document.querySelector('#btnPlayer1');
const btnOfPlayer2 = document.querySelector('#btnPlayer2');
const btnReset = document.querySelector('#reset');
const formElem = document.querySelector('form');
let inputValueElem = document.querySelector('#inputValue');

let palyingTo = 5;
let scoreData1 = 2;
let scoreData2 = 3;

palyingToElem.textContent = palyingTo;
score1Elem.textContent = scoreData1;
score2Elem.textContent = scoreData2;
formElem.addEventListener('submit', (e) => {
    e.preventDefault()

    palyingToElem.textContent = palyingTo;
    palyingTo = inputValueElem.value;
    palyingToElem.textContent = palyingTo;
    inputValueElem.value = ''
    
})
btnOfPlayer1.addEventListener('click', (e) => {
    
    scoreData1++;
    score1Elem.textContent = scoreData1;
    
});
btnOfPlayer2.addEventListener('click', () => {
    scoreData2++;
    score2Elem.textContent = scoreData2;
});
btnReset.addEventListener('click', () => {
    console.log('clicked')
});