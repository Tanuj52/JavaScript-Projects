let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreCard=document.querySelector("#user-score");
const compScoreCard=document.querySelector("#comp-score");


const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
}

const draw=()=> {
    console.log("The game was a draw");
    msg.innerText=`The game was a draw`;
    msg.style.backgroundColor= "#22333b";
}


const showWinner=(userWin,userChoice,compChoice)=> {
    if(userWin){
        userScore++;
        userScoreCard.innerText=userScore;
        console.log("You win");
        msg.innerText=`You win 🥳 your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        compScore++;
        compScoreCard.innerText=compScore;
        console.log("You lose");
        msg.innerText=`You lose 🫤 ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
}
const playGame=(userChoice) => {
    console.log("user choice",userChoice);
    //Generate computer choice
    const compChoice=getCompChoice();
    console.log("computer choice",compChoice);

    let userWin = true;
    if(userChoice===compChoice){
        draw();
    }
    else{
        if(userChoice=="rock"){
            userWin=compChoice=="scissors" ? true:false;
        }
        else if(userChoice=="paper"){
            userWin=compChoice=="rock" ? true:false;
        }
        else{
            userWin=compChoice=="paper" ? true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})