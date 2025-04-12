let your_score = 0;
let computer_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreShow = document.querySelector("#score-player");
const computerScoreShow = document.querySelector("#score-computer");

const generate_Computer_Choice = ()=>{
    const choices = ["rock","paper","scissor"];
    const choice_index = Math.floor(Math.random()*3);
    return choices[choice_index];
};

const drawGame =()=>{
    // console.log("Draw");
    msg.innerText = "Game is Draw!";
    msg.style.background = "blue";
};

const showWinner = (userWin,userChoice,computerChoice)=>{
    if(userWin){
        // console.log("win");
        your_score++;
        userScoreShow.innerText = your_score;
        msg.innerText = `Hurray! Your ${userChoice} beats ${computerChoice}.`;
        msg.style.background = "green";
    }else{
        // console.log("losse");
        computer_score++;
        computerScoreShow.innerText = computer_score;
        msg.innerText = `Alas! Computer ${computerChoice} beats ${userChoice}.`;
        msg.style.background = "red";
    }
}
const playGame = (userChoice) =>{
    const computerChoice = generate_Computer_Choice();
    // console.log(computerChoice,userChoice);
    if(userChoice === computerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //rock wins against scissor but losses against paper
            userWin = computerChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=computerChoice==="scissor"?false:true;
        }else{
            userWin = computerChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        // console.log("clicked",userChoice);
        playGame(userChoice);
    });
});