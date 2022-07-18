const output = document.querySelector("#output");
const numBer = document.querySelector(".number");
const keys = document.querySelectorAll("button");
keys.forEach(key=>{
    key.addEventListener("click", calculate);
});
function calculate() {
    let buttonText = this.innerText;
    if(buttonText ==="AC"){
        output.innerText = "";
        numBer.innerText = "0";
       // numBer.style.animation = "";
       // output.style.animation = "";
        return;
    }
    if (buttonText === "DEL"){
        output.textContent = output.textContent.substr(0,output.textContent.length-1);
        return;
    }
    if (buttonText === "="){
        numBer.innerText = eval(output.innerText);
    }
    else{
        output.textContent += buttonText;
        return;
    }
}
//console.log(display)

//input
/*function btn11() {
    let number = 3
    start.innerText = number
}
function btn12() {
    start.innerText = ("<")
}
function btn13() {
    start.innerText = ("00")
}
function btn14() {
    start.innerText = ("/")
}
function btn15() {
    start.innerText = 1
}
function btn16() {
    start.innerText = 2
}
function btn17() {
    start.innerText = 3
}
function btn18() {
    start.innerText = ("+")
}
function btn19() {
    start.innerText = 4
}
function btn20() {
    start.innerText = 5
}
function btn21() {
    start.innerText = 6
}
function btn22() {
    start.innerText = ("-")
}
function btn23() {
    start.innerText = 7
}
function btn24() {
    start.innerText = 8
}
function btn25() {
    start.innerText = 9
}
function btn26() {
    start.innerText = ("*")
}
function btn27() {
    start.innerText = 0
}
function btn28() {
    start.innerText = (".")
}/*
function btn29() {
   start.innerText =  7 +8  //("=")
}*/