


document.addEventListener("DOMContentLoaded",()=>{


    function counter(id,start,end,duration) {

  let obj = document.getElementsByClassName(id)[0];
  let range = end - start;
  let current = start;
  let increment = end >start ? 1 : -1;
   let step = Math.abs(Math.floor(duration/range));
   let timer = setInterval(()=>{
        current += increment;
        obj.innerHTML = current;
    if(current == end){
        clearInterval(timer);
    }

   },step);
   
 }
 counter("count1",0,5683,4000);
 counter("count2",100,8000,2500);
 counter("count3",0,2000,1500);
 counter("count4",0,4000,1000);

})

let navBar = Array.from(document.querySelectorAll(".nav-link"));
navBar.forEach((a)=>{
    
    a.addEventListener("click",()=>{
    
        document.querySelector(".navbar-collapse").classList.remove("show");

    })
  
})

