let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-button");
let newGameBtn=document.querySelector("#new-button");
let msgContainer= document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

let turnO=true;
let count=0;
const winningpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("This box was clicked");
        if(turnO==true){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        count++;
        box.disabled=true;
        let isWinner=checkWinner();
        if(count==9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw=()=>{
    msg.innerText=`Game was a draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner= ()=>{
    for(pattern of winningpatterns){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if(posval1!="" && posval2!="" && posval3!="" ){
            if(posval1==posval2 && posval2==posval3){
                console.log("winner", posval1);
                showWinner(posval1);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);