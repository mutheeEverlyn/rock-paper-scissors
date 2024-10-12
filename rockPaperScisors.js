let playerText=document.getElementById("player");
let computerText=document.getElementById("computer");
let resultText=document.getElementById("result");
let choiceBtn=document.querySelectorAll(".btn");
let player;
let computer;
let result;

choiceBtn.forEach((btn)=>{btn.addEventListener("click",()=>{
player=btn.textContent;
checkComputer();
playerText.textContent=`Player :${player}`;
computerText.textContent=`computer :${computer}`;
resultText.textContent=checkWinner();
})})

function checkComputer(){
let computerResult=Math.floor(Math.random() * 4);
switch(computerResult){
    case 1:
        computer="rock";
        break;
    case 2:
         computer="paper";
        break;
    case 3:
        computer="scisors"
        break;
}
}

function checkWinner(){
    if(computer==player){
        return "Draw !"
    }
    else if(computer=="rock" && player=="paper"){
       return "player wins !"
    }
    else if(computer=="paper" && player=="rock"){
         return "computer wins !"
    }
    else if(computer=="scisors" && player=="paper"){
        return "computer wins !"
   }
   else if(computer=="paper" && player=="scisors"){
   return "player wins !"
}
else if(computer=="rock" && player=="scisors"){
    return "computer wins !"
 }
 else if(computer=="scisors" && player=="rock"){
    return "player wins !"
 }
}