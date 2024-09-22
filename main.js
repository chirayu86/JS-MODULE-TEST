document.addEventListener("DOMContentLoaded", function() {
    let pcScoreboard = document.getElementById("computer_score");
    let userScoreboard = document.getElementById("player_score");

    if(localStorage.getItem("pcscore")==null) {
    localStorage.setItem("pcscore", 0);
    localStorage.setItem("userscore", 0);
    }

    pcScoreboard.innerHTML = localStorage.getItem("pcscore");
    userScoreboard.innerHTML = localStorage.getItem("userscore");

  });

function showRules() {
    let rules = document.getElementById("rules");
    rules.style.opacity = 100;
}


function hideRules() {
    let rules = document.getElementById("rules");
    rules.style.opacity = 0;
}

function playgame(choice) {
    
    hidePlayscreen("hidden")
    hideResultScreen("visible")
    const pcChoiceList = ["stone","paper","scissor"];
    let pcChoice = getRandomElement(pcChoiceList);

    if(pcChoice==choice) {
      setupResult("tie",pcChoice,choice);
    }

    if(choice=="stone"&&pcChoice=="paper") {
        setupResult("loss",pcChoice,choice);
    }

    if(choice=="stone"&&pcChoice=="scissor") {
        setupResult("win",pcChoice,choice)
    }

    if(choice=="paper"&&pcChoice=="scissor") {
        setupResult("loss",pcChoice,choice);
    }

    if(choice=="paper"&&pcChoice=="stone") {
        setupResult("win",pcChoice,choice);
    }

    if(choice=="scissor"&&pcChoice=="stone") {
        setupResult("loss",pcChoice,choice);
    }

    if(choice=="scissor"&&pcChoice=="paper") {
        setupResult("win",pcChoice,choice);
    }
   
    let pcscore = localStorage.getItem("pcscore");
    let playerscore = localStorage.getItem("userscore");

    if(Number(playerscore)>Number(pcscore)) {
        showhideNext("visible")
     } else {
         showhideNext("hidden")
     }
}

function hidePlayscreen(val) {
    let screen = document.getElementById("playarea");
    let triangle = document.getElementById("triangle");
    screen.style.visibility = val;
    triangle.style.visibility = val;
}

function hideResultScreen(val) {
    let screen = document.getElementById("result_screen");
    screen.style.visibility = val
}

function getRandomElement(array) {

    if (array.length === 0) {
      return null; 
    }

    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];

  }


function setupResult(result,pcchoice,playerchoice){
   let your_pick = document.getElementById("your_pick_btn");
   let pc_pick = document.getElementById("pc_pick_btn");
   let message = document.getElementById("winMessage");
   let pcScoreboard = document.getElementById("computer_score");
   let userScoreboard = document.getElementById("player_score");
   let pcscore = localStorage.getItem("pcscore");
   let userscore = localStorage.getItem("userscore");

  if(result=="tie") {
    message.innerHTML = "YOU TIE"

    if(pcchoice=="stone") {
      pc_pick.style.borderColor = "#0074B6"
      pc_pick.style.backgroundImage = "url('Assests/stone.svg')"
      your_pick.style.borderColor = "#0074B6"
      your_pick.style.backgroundImage = "url('Assests/stone.svg')"
    } 

    if(pcchoice=="paper") {
        pc_pick.style.borderColor = "#FFA943"
        pc_pick.style.backgroundImage = "url('Assests/paper.svg')"
        your_pick.style.borderColor = "#FFA943"
        your_pick.style.backgroundImage = "url('Assests/paper.svg')"
    }

    if(pcchoice=="scissor") {
        pc_pick.style.borderColor = "#BD00FF"
        pc_pick.style.backgroundImage = "url('Assests/scissor.svg')"
        your_pick.style.borderColor = "#BD00FF"
        your_pick.style.backgroundImage = "url('Assests/scissor.svg')"
    }
  }

   if(result=="win"){
    localStorage.setItem("userscore",Number(userscore)+1)
    userScoreboard.innerHTML = Number(userscore)+1;
    message.innerHTML = "YOU WIN"
    console.log(pcchoice)

    if(pcchoice=="stone") {
        pc_pick.style.borderColor = "#0074B6"
        pc_pick.style.backgroundImage = "url('Assests/stone.svg')"
        your_pick.style.borderColor = "#FFA943"
        your_pick.style.backgroundImage = "url('Assests/paper.svg')"
    }

    if(pcchoice=="paper") {
        pc_pick.style.borderColor = "#FFA943"
        pc_pick.style.backgroundImage = "url('Assests/paper.svg')"
        your_pick.style.borderColor = "#BD00FF"
        your_pick.style.backgroundImage = "url('Assests/scissor.svg')"
    }

    if(pcchoice=="scissor") {
        pc_pick.style.borderColor = "#BD00FF"
        pc_pick.style.backgroundImage = "url('Assests/scissor.svg')"
        your_pick.style.borderColor = "#0074B6"
        your_pick.style.backgroundImage = "url('Assests/stone.svg')"
    }
    
   }

   if(result=="loss"){
     localStorage.setItem("pcscore",Number(pcscore)+1)
     pcScoreboard.innerHTML = Number(pcscore)+1;
     message.innerHTML = "YOU LOSE"

     if(pcchoice=="stone") {
        pc_pick.style.borderColor = "#0074B6"
        pc_pick.style.backgroundImage = "url('Assests/stone.svg')"
        your_pick.style.borderColor = "#BD00FF"
        your_pick.style.backgroundImage = "url('Assests/scissor.svg')"
    }

    if(pcchoice=="paper") {
        pc_pick.style.borderColor = "#FFA943"
        pc_pick.style.backgroundImage = "url('Assests/paper.svg')"
        your_pick.style.borderColor = "#0074B6"
        your_pick.style.backgroundImage = "url('Assests/stone.svg')"
    }

    if(pcchoice=="scissor") {
        pc_pick.style.borderColor = "#FFA943"
        pc_pick.style.backgroundImage = "url('Assests/scissor.svg')"
        your_pick.style.borderColor = "#0074B6"
        your_pick.style.backgroundImage = "url('Assests/paper.svg')"
    }
   }
}


function showhideNext(val) {
    let nextBtn = document.getElementById("next_button");
    nextBtn.style.visibility = val;
}

function playAgain() {
    hidePlayscreen("visible")
    hideResultScreen("hidden")
}
