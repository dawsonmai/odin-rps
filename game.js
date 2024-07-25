console.log("Hello")
function getComputerChoice(){
    let cPickNum = Math.floor(Math.random()*3);
    let cPick;
    if(cPickNum == 0){
        cPick = "Rock";
    } else if(cPickNum==1){
        cPick="Paper";
    }else{
        cPick = "Scissors";
    }
    return cPick;
}

function getHumanChoice(input){
    let hPick;
    if(input=="Rock" || input=="rock" || input=="ROCK"){
        hPick = "Rock";
    } else if(input=="Paper" || input=="paper" || input=="PAPER"){
        hPick = "Paper";
    } else if(input=="Scissors" || input=="scissors" || input=="SCISSORS"){
        hPick = "Paper";
    }

    return hPick;
}

let hScore=0;
let cScore=0;
while(hScore <=5 || cScore<=5){
    let cPick = getComputerChoice();
    let hPick = getHumanChoice(prompt("What do you want to play?"));
    console.log("You played " + hPick + " and computer played " + cPick);
    if(cPick == "Rock" && hPick == "Scissors"){
        console.log("Computer wins!");
        cScore++;
    } else if(cPick == "Paper" && hPick=="Rock"){
        console.log("Computer wins!");
        cScore++;
    } else if(cPick == "Scissors" && hPick=="Paper"){
        console.log("Computer wins!");
        cScore++;
    } else if(cPick == hPick){
        console.log("Tie!")
    }
    else{
        console.log("You win!")
        hScore++;
    }
}

if(hScore>cScore){
    console.log("You win the game! Score was " + hScore + " to " + cScore);
} else{
    console.log("The computer won the game! Score was " + hScore + " to " + cScore);
}
