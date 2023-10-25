window.onload = function changeColor(){
   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   var a = document.querySelector(".name");
   var temp =  a.innerText.toString();
   console.log(temp);
   let iterations = 0;

   const interval = setInterval(() => {
      a.innerText = a.innerText.split("")
         .map((letter, index) => {
            if (index < iterations) {
               return temp[index];
            }
            return letters[Math.floor(Math.random() * 26)]
         })
         .join("");

      if (iterations >= temp.length) clearInterval(interval);

      iterations += 1 / 3;
   }, 30)


}
