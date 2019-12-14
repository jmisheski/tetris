
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
    }var svgNS = "http://www.w3.org/2000/svg";
var count = 0;
var count2 = 1000000;

var elm = ""
function createShape1() {
    var elem = document.getElementById("container");
    var shape = document.createElementNS(svgNS, "rect");
    count++
        shape.id = "shape" + count;
        shape.className = "class";
        elm = document.getElementById("shape");
        console.log(elm);
        shape.style.width = "150px";
        shape.style.height = "50px";
        shape.style.fill = "purple";
        shape.style.y = "50px";
        shape.style.x = "150px"
        shape.style.position = "absolute"
        elem.append(shape);
    var shape2 = document.createElementNS(svgNS, "rect");
    count2++;
        shape2.id = "shape" + count2;
        shape2.style.fill = "purple";
        shape2.style.x = "200px";
        shape2.style.width = "50px";
        shape2.style.height  = "51px";
        elem.append(shape2);
};

window.onload = randShape;
function createShape2() {
    var elem = document.getElementById("container");
    var shape = document.createElementNS(svgNS, "rect");
    count++;
        shape.id = "shape" + count;
        console.log(shape.id)
        shape.style.width = "100px";
        shape.style.height = "100px";
        shape.style.fill = "red";
        shape.style.x = "200px"
        shape.style.position = "absolute"
        elem.append(shape);
};
function createShape3() {
    var elem = document.getElementById("container");
    var shape = document.createElementNS(svgNS, "rect");
    count++;
        shape.id = "shape" + count;
        console.log(shape.id)
        shape.style.width = "50px";
        shape.style.height = "200px";
        shape.style.fill = "blue";
        shape.style.x = "200px"
        shape.style.position = "absolute"
        elem.append(shape);
}
function createShape4() {
    var elem = document.getElementById("container");
    var shape = document.createElementNS(svgNS, "rect");
    count++;
        shape.id = "shape" + count;
        console.log(shape.id)
        shape.style.width = "100px";
        shape.style.height = "51px";
        shape.style.fill = "green";
        shape.style.x = "200px"
        shape.style.position = "absolute"
        elem.append(shape);
    var shape2 = document.createElementNS(svgNS, "rect");
    count2++;
        shape2.id = "shape" + count2;
        console.log(shape2.id)
        shape2.style.width = "100px";
        shape2.style.height = "50px";
        shape2.style.fill = "green";
        shape2.style.x = "150px"
        shape2.style.y = "50px"
        shape2.style.position = "absolute"
        elem.append(shape2);
}
function createShape5() {
    var elem = document.getElementById("container");
    var shape = document.createElementNS(svgNS, "rect");
    count++;
        shape.id = "shape" + count;
        console.log(shape.id)
        shape.style.width = "50px";
        shape.style.height = "150px";
        shape.style.fill = "orange";
        shape.style.x = "200px"
        shape.style.position = "absolute"
        elem.append(shape);
    var shape2 = document.createElementNS(svgNS, "rect");
        shape2.id = "shape" + count2;
        console.log(shape2.id)
        shape2.style.width = "51px";
        shape2.style.height = "50px";
        shape2.style.fill = "orange";
        shape2.style.x = "249px";
        shape2.style.position = "absolute";
        elem.append(shape2);
}
var shapes = [createShape1, createShape2, createShape3, createShape4, createShape5]
function randShape() {
    var x = Math.floor(Math.random() * 5);
    shapes[x]();
    var shape = document.getElementById("shape" + count);
    var shape2 = document.getElementById("shape" + count2);
    console.log(shape2.style.x)
    console.log(shape.style.fill)
};
};
