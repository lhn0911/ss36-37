let button = document.getElementById("demo-id");

button.onclick = function() {
  if (button.innerHTML === "OFF") {
    button.innerHTML = "ON";
    button.classList.add("ON");
  } else {
    button.innerHTML = "OFF";
    button.classList.remove("ON");
  }
}