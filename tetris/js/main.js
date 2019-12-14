
function startGame() {
    var box = document.getElementById("box1");
    console.log(box)
    var pos = 0;
    var t = setInterval(down, 1000);
    function down() {
        if (pos >= 550) {
            clearInterval(t);
        } else {
            pos += 50;
            box.style.top = pos + 'px';
        };
    }
};
window.addEventListener("click", startGame, {once: true});
var pos = 200;
var top = 0
function moveLeft() {
    var box = document.getElementById("box1");
    if (pos < 400 && box.style.top < "550px") {
        top += 50
        pos += 50;
        box.style.right = pos + "px";
    }
};
function moveRight() {
    var box = document.getElementById("box1");
    if (pos > 0 && box.style.top < "550px") {
        pos -= 50;
        box.style.right = pos + "px";
    }
};
