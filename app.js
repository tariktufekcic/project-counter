let count = 0;
let countEl = document.getElementById ("brojac");
let historyEl = document.getElementById("history-el");


function increment() {
    count++;
    countEl.innerText = count;
}
function save() {
    let countStr = " " + count + " - "
    historyEl.innerText += countStr;
    countEl.innerText = count = 0;
}





   