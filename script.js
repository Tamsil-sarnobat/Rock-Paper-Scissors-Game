let userScore = 0;
let compScore = 0;
let msg = document.querySelector(".msg-board");
let choices = document.querySelectorAll(".circle");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) =>{
//computers choice
    const compChoice = genComputer();
if(userChoice === compChoice){
    //Game Draw
    drawGame();
 }else{
        let userWin = true;
        if(userChoice === "rock"){
             //paper,scissors
             userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ?false : true;
        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

const genComputer = ()=>{
    const options = [ "rock","paper","scissors"];
    let ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
    
};

const drawGame = ()=>{
    msg.innerText = "It was A Draw!";
};

const showWinner = (userWin) =>{
    if(userWin === true){
        userScore ++;
        msg.innerText = "Congrats,You Win!!";
        userScorePara.innerText = userScore;
    }else{
        compScore ++;
        msg.innerText = "Oops! You lose.";
        compScorePara.innerText = compScore;
    }
};