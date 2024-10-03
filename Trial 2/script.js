
// Get elements
const resultDisplay = document.getElementById('result');
const historyDisplay = document.getElementById('history');
const additionDisplay=document.getElementById('totaladdn');
const substrDisplay=document.getElementById('totalsubstr');

let result = 0;
let addVal=0;
let substrVal=0;
let histUpdate=[];
let histTest='';
// Button event listeners
document.getElementById('minus-two').addEventListener('click', () => {
result -= 2;
substrVal +=2;
histUpdate.push('-2');
histTest += histUpdate[histUpdate.length-1] + "</br>";
updateResult();
});
document.getElementById('clear-data').addEventListener('click',()=>{
result=0;
addVal=0;
substrVal=0;
histTest='';
updateResult();
})

document.getElementById('minus-one').addEventListener('click', () => {
result -= 1;
substrVal +=1;
histUpdate.push('-1');
histTest += histUpdate[histUpdate.length-1] + "</br>";
updateResult();
});

document.getElementById('plus-one').addEventListener('click', () => {
result +=1;
addVal +=1;
histUpdate.push('+1');
histTest += histUpdate[histUpdate.length-1] + "</br>";
updateResult();
});

document.getElementById('plus-two').addEventListener('click', () => {
result += 2;
addVal +=2;
histUpdate.push('+2');
histTest += histUpdate[histUpdate.length-1] + "</br>";
updateResult();
});

document.getElementById('reset').addEventListener('click', () => {
histUpdate.push('Reset');
addVal=0;
substrVal=0;
histTest += histUpdate[histUpdate.length-1] + "</br>";
result = 0;
updateResult();
});

// check total is positive or negative
function checkResStatus(){
let stat=document.getElementById('status')
if(result===0){
stat.innerText='The total is Zero';
} else if(result>0){
stat.innerText='The total is Positive';
} else{
stat.innerText='The total is Negative';
}
}
//update the totak
function updateResult() {
resultDisplay.innerText = result;
historyDisplay.innerHTML=histTest;
additionDisplay.innerHTML=addVal;
substrDisplay.innerHTML=substrVal;
checkResStatus();
}

