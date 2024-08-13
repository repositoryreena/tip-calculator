
const btn = document.getElementById("btn")
const span = document.getElementById("span")

function calculateTip(){
    let billAmount = document.getElementById("bill-amount").value
const tipPercentage = document.getElementById("tip-percentage").value
let tip = +billAmount*+tipPercentage/100
billAmount = +billAmount
span.innerText = `${(tip+billAmount).toFixed(2)}`
}

btn.addEventListener("click", calculateTip)

