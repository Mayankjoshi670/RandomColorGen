 var color = document.querySelector(".color");
 var btn = document.querySelector(".btn");
 var bdy = document.body;
  btn.addEventListener("click" , ()=>{
     var r = Math.floor(Math.random()*256);
     var g = Math.floor(Math.random()*256);
     var b = Math.floor(Math.random()*256);
     bdy.style.backgroundColor = `rgb(${r},${g},${b})`;
     color.textContent = `rgb(${r},${g},${b})`;
  })
