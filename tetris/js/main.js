
var svgNS = "http://www.w3.org/2000/svg";
var endR = 500;
var endL = 0;
var endT = 0;
var endB = 650;
var x = 0;

function createShape1() {
  var newEndR = endR - 50;
  var newEndR2 = endR + 50;
  var newEndL = endL - 50;
  var newEndL2 = endL + 50;
  var newEndT = endT - 50;
  var newEndT2 = endT + 50;
  var newEndB = endB - 50;
  var newEndB2 = endB + 50;
  var elem = document.getElementById("container");
  var outer = document.createElementNS(svgNS, "svg");
  var leftG = document.getElementById("left");
  var rightG = document.getElementById("right");
  leftG.onclick = moveLeft;
  rightG.onclick = moveRight;
  elem.append(outer);
  outer.id = "outer";
  outer.style.background = "transparent";
  outer.style.height = "100px";
  outer.style.width = "150px";
  outer.style.left = "150px";
  outer.style.top = "0px";
  outer.style.position = "relative";
  var shape = document.createElementNS(svgNS, "rect");
  shape.id = "shape";
  shape.style.width = "50px";
  shape.style.x = "50px";
  shape.style.y = "0px"
  shape.style.height = "51px";
  shape.style.fill = "purple";
  shape.style.position = "relative"
  outer.append(shape);
  var shape2 = document.createElementNS(svgNS, "rect");
  shape2.id = "shape2"
  shape2.style.fill = "purple";
  shape2.style.x = "0%";
  shape2.style.y = "50px";
  shape2.style.width = "100%";
  shape2.style.height  = "50%";
  outer.append(shape2);
  var t = setInterval(down, 1000);
  var xPos = parseInt(outer.style.width);
  var yPos = parseInt(outer.style.top);
  var w = parseInt(outer.style.width);
  var h = parseInt(outer.style.height);
  var ymath = yPos + h;
  var ymath = yPos + h;
  elem.addEventListener('contextmenu', rotateRight);
  function down() {
    if (ymath < endB) {
      yPos += 50;
      ymath = yPos + h;
      outer.style.top = yPos +'px';
      if (outer.style.transform === "rotate(90deg)") {
        endL = newEndL;
      }
      if (outer.style.transform === "rotate(180deg)") {
        endL = newEndL;
        endR = newEndR;
        console.log(endB);
      }
      if (outer.style.transform === "rotate(270deg)") {
        endR = newEndR2;
        endL = newEndL;
        endB = newEndB;
      }
    } else {
      clearInterval(t); 
    }
  }
  function rotateRight(e) {
    e.preventDefault();
    var outer = document.getElementById("outer");
    var xPos = parseInt(outer.style.left);
    var w = parseInt(outer.style.width);
    var yPos = parseInt(outer.style.top);
    var h = parseInt(outer.style.height);
    var xmath = xPos + w;
    var xmath2 = xPos - w;
    var ymath = yPos + h;
    if (xmath < newEndR2) {
      if (ymath < endB && yPos > endT) {
        x += 90
        outer.style.transform = "rotate(" + x + "deg)";
        if (x === 360) {
          x = 0;
        }
        outer.style.transformOrigin = "100px 50px";
      }
    }
  }
  function moveLeft() {
    var outer = document.getElementById("outer");
    var xPos = parseInt(outer.style.left);
    var w = parseInt(outer.style.width);
    var yPos = parseInt(outer.style.top);
    var h = parseInt(outer.style.height);
    var xmath = xPos;
    var ymath = yPos + h;
    if (xmath > endL && ymath < endB) {
      xPos -= 50;
      xmath += w;
      outer.style.left = xPos + "px";
    }
  }
  function moveRight() {
    var outer = document.getElementById("outer");
    var xPos = parseInt(outer.style.left);
    var w = parseInt(outer.style.width);
    var yPos = parseInt(outer.style.top);
    var h = parseInt(outer.style.height);
    var ymath = yPos + h;
    var xmath = xPos + w;
    if (xmath < endR && ymath < endB) {
      xPos += 50;
      outer.style.left = xPos + "px";
      ymath += h;
      xmath += w;
    }
  }
};


function createShape2() {
  var newEndR = endR - 50;
  var newEndR2 = endR + 50;
  var newEndL = endL - 50;
  var newEndL2 = endL + 50;
  var newEndT = endT - 50;
  var newEndT2 = endT + 50;
  var newEndB = endB - 50;
  var newEndB2 = endB + 50;
  var elem = document.getElementById("container");
  var outer = document.createElementNS(svgNS, "svg");
  var leftG = document.getElementById("left");
  var rightG = document.getElementById("right");
  leftG.onclick = moveLeft;
  rightG.onclick = moveRight;
  elem.append(outer);
  outer.id = "outer";
  outer.style.background = "transparent";
  outer.style.height = "100px";
  outer.style.width = "150px";
  outer.style.left = "150px";
  outer.style.top = "0px";
  outer.style.position = "absolute";
  var shape = document.createElementNS(svgNS, "rect");
  shape.id = "shape";
  shape.style.width = "50px";
  shape.style.x = "0px";
  shape.style.y = "0px"
  shape.style.height = "51px";
  shape.style.fill = "orange";
  shape.style.position = "relative"
  outer.append(shape);
  var shape2 = document.createElementNS(svgNS, "rect");
  shape2.id = "shape2"
  shape2.style.fill = "orange";
  shape2.style.x = "0px";
  shape2.style.y = "50px";
  shape2.style.width = "150px";
  shape2.style.height  = "50px";
  outer.append(shape2);
  var t = setInterval(down, 1000);
  var xPos = parseInt(outer.style.width);
  var yPos = parseInt(outer.style.top);
  var w = parseInt(outer.style.width);
  var h = parseInt(outer.style.height);
  var ymath = yPos + h;
  var ymath = yPos + h;
  elem.addEventListener('contextmenu', rotateRight);
  function down() {
    if (ymath < endB) {
      yPos += 50;
      ymath = yPos + h;
      outer.style.top = yPos +'px';
      var ninety = x / 90
      var oneEighty = x / 90
      if (outer.style.transform === "rotate(90deg)") {
        endL = newEndL;
        console.log(outer.style.transform)
      }
      if (outer.style.transform === "rotate(180deg)") {
        endR = newEndR;
        endL = newEndL;
      }
      if (outer.style.transform === "rotate(270deg)") {
      }
    } else {
      clearInterval(t); 
    }
  }

  function rotateRight(e) {
    e.preventDefault();
    var outer = document.getElementById("outer");
    var xPos = parseInt(outer.style.left);
    var w = parseInt(outer.style.width);
    var yPos = parseInt(outer.style.top);
    var h = parseInt(outer.style.height);
    var xmath = xPos + w;
    var xmath2 = xPos - w;
    var ymath = yPos + h;
    if (xmath < endR) {
      if (ymath < endB && yPos > endT) {
        x += 90
        outer.style.transform = "rotate(" + x + "deg)";
        if (x === 360) {
          x = 0;
        }
        outer.style.transformOrigin = "100px 50px";
      }
    }
  }

  function moveLeft() {
    var outer = document.getElementById("outer");
    var xPos = parseInt(outer.style.left);
    var w = parseInt(outer.style.width);
    var yPos = parseInt(outer.style.top);
    var h = parseInt(outer.style.height);
    var xmath = xPos;
    var ymath = yPos + h;
    if (xmath > endL && ymath < endB) {
      xPos -= 50;
      xmath += w;
      outer.style.left = xPos + "px";
    }
  }

  function moveRight() {
    var outer = document.getElementById("outer");
    var xPos = parseInt(outer.style.left);
    var w = parseInt(outer.style.width);
    var yPos = parseInt(outer.style.top);
    var h = parseInt(outer.style.height);
    var ymath = yPos + h;
    var xmath = xPos + w;
    if (xmath < endR && ymath < endB) {
      xPos += 50;
      outer.style.left = xPos + "px";
      ymath += h;
      xmath += w;
    }
  }
};
