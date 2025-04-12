// let addButton = document.querySelector("#mode");
// let currMode = "light";
// addButton.addEventListener("click",()=>{
//     if(currMode=="light"){
//         currMode = "Dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currMode);
// })

// let inpt = prompt("Enter a number");
// console.log(inpt);
let username;
document.querySelector("#mybtn").onclick=()=>{
    username = document.querySelector("#myId").value;
    console.log(username);
}

let addButton = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");
addButton.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "black";
        body.classList.add("dark");
    }else{
        currMode = "light";
        body.classList.add("light");
    }
})