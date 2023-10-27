// window.onload = function changeColor() {
//    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//    var hint1 = document.querySelector(".name");
//    var temp =  hint1.innerText.toString();
//    console.log(temp);
//    let iterations = 0;

//    const interval = setInterval(() => {
//       hint1.innerText = hint1.innerText.split("")
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
    var hint1 = document.querySelector("#display-hint-1");
    var hint2 = document.querySelector("#display-hint-2");
    var tooltip1 = document.querySelector(".tooltip-1");

    if (hint1.style.display !== 'none') {
        hint1.style.display = 'none';
        borderFix('10px');
    } else {
        hint1.style.display = 'block';
        borderFix('10px 10px 0px 0px');
    }

    if (hint2.style.display !== 'none') {
        hint2.style.display = 'none';
    }
    tooltip1.style.visibility = 'hidden';
}

function displayHintTwo() {
    var hint1 = document.querySelector("#display-hint-1");
    var hint2 = document.querySelector("#display-hint-2");
    var tooltip2 = document.querySelector(".tooltip-2");

    if (hint2.style.display !== 'none') {
        hint2.style.display = 'none';
        borderFix('10px');
    } else {
        hint2.style.display = 'block';
        borderFix('10px 10px 0px 0px');
    }

    if (hint1.style.display !== 'none') {
        hint1.style.display = 'none';
    }
    tooltip2.style.visibility = 'hidden';
}

// Fixes border radius when hint box is opened
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
