let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

// Thiết lập sự kiện click cho từng nút
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        handleButtonClick(button.innerText);
    });
});

// Hàm xử lý khi nút được click
function handleButtonClick(value) {
    switch (value) {
        case "=":
            evaluateExpression();
            break;
        case "AC":
            clearDisplay();
            break;
        default:
            updateDisplay(value);
            break;
    }
}

// Hàm cập nhật hiển thị
function updateDisplay(value) {
    display.value += value;
}

// Hàm xử lý khi nút "=" được click
function evaluateExpression() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Hàm xử lý khi nút "AC" được click
function clearDisplay() {
    display.value = "";
}

