
//Dynamically size element to window height
var wh = window.innerHeight
var d = document

window.onload = function re() {
    d.getElementById("top").style.height=wh + "px";
    d.getElementById("l-btn").style.paddingTop= (wh / 2.5) + "px";
}

window.onresize = function re() {
    d.getElementById("top").style.height=wh + "px";
    d.getElementById("l-btn").style.paddingTop= (wh / 2.5) + "px";
}