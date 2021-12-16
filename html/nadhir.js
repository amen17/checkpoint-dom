const btn1 = document.querySelector("#btnplus");
const btn2 = document.querySelector("#btnmoins");
const qte = document.querySelector("p");


btn1.addEventListener("click",function(){
 qte.innerHTML++;   
})



btn2.addEventListener("click",function(){
    if(qte.innerHTML>0)
    qte.innerHTML--; 
    
   })
