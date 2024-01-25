let a = document.getElementById("a");
let b = document.getElementById("b");
let manualSumInput = document.getElementById("manualSum");
let autoSumInput = document.getElementById("autoSumInput");
let btn = document.getElementById("btn");
btn.onclick = function () {
    manualSumInput.value = Number(a.value) + Number(b.value);
}
function autoUpdateSum() {
    autoSumInput.value = Number(a.value) + Number(b.value);
}
a.addEventListener('input', autoUpdateSum);
b.addEventListener('input', autoUpdateSum);
