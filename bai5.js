let input = document.getElementById("input");
let btn = document.getElementById("btn");
let ul = document.getElementById("list");
updateBackgroundColor();
input.addEventListener("input", function () {
    updateBackgroundColor();
});
btn.onclick = function () {
    let text = document.createElement("li");
    text.innerHTML = input.value;
    ul.appendChild(text);
    input.value = "";
    updateBackgroundColor();
};

function updateBackgroundColor() {
    if (input.value.trim().length === 0) {
        input.style.backgroundColor = "yellow";
    } else {
        input.style.backgroundColor = "white";
    }
}
