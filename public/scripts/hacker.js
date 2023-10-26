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

   if (a.style.display !== 'none') {
         a.style.display = 'none';
   } else {
      a.style.display = 'block';
   }

   if (b.style.display !== 'none') {
         b.style.display = 'none';
   }
}

function displayHintTwo() {
   var a = document.querySelector("#display-hint-1");
   var b = document.querySelector("#display-hint-2");

   if (b.style.display !== 'none') {
         b.style.display = 'none';
   } else {
      b.style.display = 'block';
   }

   if (a.style.display !== 'none') {
         a.style.display = 'none';
   }
}
