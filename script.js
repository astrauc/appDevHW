
let buttons = document.querySelector(".head-button");
let count = 0;

buttons.addEventListener("click", increment());
console.log("hello world");

document.getElementById("click-count").textContent = "new teext";

function increment(){
    document.getElementById("click-count").textContent = count.toString();
    console.log(count);
    count++;
}