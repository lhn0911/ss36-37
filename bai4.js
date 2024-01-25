let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let resultInput = document.getElementById("resultInput");
let resultDiv = document.getElementById("resultDiv");

// Cách 1 - Sử dụng input và sự kiện input
input1.addEventListener('input', calculateSum);
input2.addEventListener('input', calculateSum);

// Cách 2 - Sử dụng div và sự kiện input
input1.addEventListener('input', calculateSumDiv);
input2.addEventListener('input', calculateSumDiv);

function calculateSum() {
    let value1 = parseFloat(input1.value) || 0;
    let value2 = parseFloat(input2.value) || 0;
    let sum = value1 + value2;
    resultInput.value = sum;
}

function calculateSumDiv() {
    let value1 = parseFloat(input1.value) || 0;
    let value2 = parseFloat(input2.value) || 0;
    let sum = value1 + value2;
    resultDiv.value = sum;
}