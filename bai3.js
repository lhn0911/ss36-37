let input = document.getElementById("input");
let resultDiv1 = document.getElementById("resultDiv1");
let resultDiv2 = document.getElementById("resultDiv2");

// cách 1 - onkeyup
input.onkeyup = function() {
    resultDiv1.innerHTML = "innerHTML (onkeyup): " + input.value;
}

// cách 2 - onkeydown
input.onkeydown = function() {
    resultDiv2.innerText = "innerText (onkeydown): " + input.value;
}
