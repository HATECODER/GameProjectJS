let decreasebtn = document.querySelector("#decreaseBtn");
let increasebtn = document.querySelector("#increaseBtn");
let resetbtn = document.querySelector("#resetBtn");
let counterLabel = document.querySelector("#counterLabel");
let count = 0;

decreasebtn.addEventListener("click",()=>{
    count--;
    counterLabel.innerText = count;
    if(count < 0){
        counterLabel.style.color = "red";
    }
   
});

increasebtn.addEventListener("click",()=>{
    count++;
    counterLabel.innerText = count;
    if(count>0){
        counterLabel.style.color = "green";
    }
    
});

resetbtn.addEventListener("click",()=>{
    count = 0;
    counterLabel.innerText = count;
    if(count==0){
        counterLabel.style.color = "black";
    }
});