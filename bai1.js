let input = document.getElementById("demo-id");
let button = document.getElementById("click");
button.onclick= function(){
    let c= input.value
    if (c.length > 10) {
        alert("không hợp lệ")
    } else {
        alert("Thành công")
    }
}