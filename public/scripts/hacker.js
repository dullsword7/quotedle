// window.onload = function changeColor() {
//    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//    var a = document.querySelector(".name");
//    var temp =  a.innerText.toString();
//    console.log(temp);
//    let iterations = 0;

//    const interval = setInterval(() => {
//       a.innerText = a.innerText.split("")
//          .map((letter, index) => {
//             if (index < iterations) {
//                return temp[index];
//             }
//             return letters[Math.floor(Math.random() * 26)]
//          })
//          .join("");

//       if (iterations >= temp.length) clearInterval(interval);

//       iterations += 1 / 3;
//    }, 30)
// }

function displayHintOne() {
    var a = document.querySelector("#display-hint-1");
    var b = document.querySelector("#display-hint-2");
    var c = document.querySelector(".tooltip-1");

    if (a.style.display !== 'none') {
        a.style.display = 'none';
        borderFix('10px');
    } else {
        a.style.display = 'block';
        borderFix('10px 10px 0px 0px');
    }

    if (b.style.display !== 'none') {
        b.style.display = 'none';
    }
    c.style.visibility = 'hidden';
}

function displayHintTwo() {
    var a = document.querySelector("#display-hint-1");
    var b = document.querySelector("#display-hint-2");
    var c = document.querySelector(".tooltip-2");

    if (b.style.display !== 'none') {
        b.style.display = 'none';
        borderFix('10px');
    } else {
        b.style.display = 'block';
        borderFix('10px 10px 0px 0px');
    }

    if (a.style.display !== 'none') {
        a.style.display = 'none';
    }
    c.style.visibility = 'hidden';
}

function borderFix(radius) {
    var x = document.querySelector(".hint-box");
    x.style.borderRadius = radius;
}

function showToolTip(element) {
    var x = document.getElementById(element);
    x.style.visibility = 'visible';
}

function hideToolTip(element) {
    var x = document.getElementById(element);
    x.style.visibility = 'hidden';
}
