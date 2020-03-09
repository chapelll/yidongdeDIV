var div1 = document.createElement("div")
// 创建一个div

div1.className = "demo"

document.body.appendChild(div1)
// 放到body里

var dragging = false

var yuanX
var yuanY

div1.onmousedown = function (e) {
    dragging = true
    // 获取鼠标的原始X和Y
    yuanX = e.clientX
    yuanY = e.clientY
}

document.body.onmousemove = function (e) {
    if (dragging == true) {
        // console.log(e.clientX,e.clientY);这是现在的X和Y
        var dX = e.clientX - yuanX
        var dY = e.clientY - yuanY
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        div1.style.top = top + dY + "px"
        // top是Y纵坐标，left是X横坐标
        div1.style.left = left + dX + "px"


        yuanY = e.clientY
        yuanX = e.clientX
    }
}

div1.onmouseup = function () {
    dragging = false
}
