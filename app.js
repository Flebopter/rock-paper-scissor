// first game pog
let playgame = confirm("shall we play a game of rock paper scissors");

if (playgame) {

let playerchoice = prompt("please enter rock, paper, or scissors.");

if (playerchoice) {

    let playerone = playerchoice.trim().toLowerCase();
    if(playerone === "rock" || playerone === "paper" || playerone === "scissors") {

        let computerchoice = Math.floor(Math.random() * 3 + 1);
        let computer = computerchoice === 1 ? "rock"
        : computerchoice === 2 ? "paper"
        : "scissors";
    
    let result = 
    playerone === computer
      ? "Tie game!"
      :playerone === "rock" && computer === "paper"
      ? `playerone: ${playerone}\ncomputer: ${computer}
      \ncomputer wins!`

      :playerone === "paper" && computer === "scissors"
      ? `playerone: ${playerone}\ncomputer: ${computer}
      \ncomputer wins!`

      :playerone === "scissors" && computer === "rock"
      ? `playerone: ${playerone}\ncomputer: ${computer}
      \ncomputer wins`
      
      : `playerone: ${playerone}\ncomputer: ${computer}
      \nYou Win!!!`
      alert(result)

      let playagain = confirm("Play Again?")
      playagain ? location.reload() : alert("ok, thanks then");
    
    } else{
        alert("you didnt enter rock paper or scissors.");
    }

} else {
    alert("i guess not");
}

} else {
    alert("Ok, Maybe next time.");
}