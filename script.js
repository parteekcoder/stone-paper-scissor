
const resultDiv=document.querySelector('#result');
const playerScore=document.getElementById('player-score');
const endGameButton=document.getElementById('endGameButton')
endGameButton.addEventListener('click',endGame)
const hands=document.getElementById('hands');
const  totalScore={
    playerScore:0,
    computerScore:0
}
function getComputerChoice() {
  
    const choices=['rock','scissors','paper'];
    let choice=Math.floor(Math.random()*3);
  
    return choices[choice];
}


function getResult(playerChoice, computerChoice) {
  let score=0;
  if(playerChoice==computerChoice) return score= 0;


  if(playerChoice=='rock' && computerChoice=='scissors' ) score=1;
  else if(playerChoice=='scissors' && computerChoice=='paper') score=1;
  else if(playerChoice=='paper' && computerChoice=='rock') score=1;
  else score=-1;

   return score;
  
}

function showResult(score, playerChoice, computerChoice) {
  if(score==1){
    resultDiv.innerText='You Won!';
    

  }else if(score==0){
    resultDiv.innerText='Its a tie';
  }else{
    resultDiv.innerText='You Lose!';
  }
  hands.innerText=`your choice ${playerChoice} , computer chose ${computerChoice}`;
  playerScore.innerText=`Your score ${score}`
}


function onClickRPS(playerChoice) {
  
    const computerChoice=getComputerChoice();
    const score=getResult(playerChoice,computerChoice);
    totalScore['playerScore']+=score;
    totalScore['computerScore']-= score;
    console.log(totalScore)
    showResult(score,playerChoice,computerChoice);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    const rock=document.getElementById('rpsButtonR')

    const scissor=document.getElementById('rpsButtonS')
    const paper=document.getElementById('rpsButtonP')
    rock.onclick = ()=>{
        onClickRPS('rock')
    }
    scissor.onclick = ()=>{
        onClickRPS('scissors')
    }
    paper.onclick = ()=>{
        onClickRPS('paper')
    }
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    totalScore["playerScore"]=0;
    totalScore["computerScore"]=0;
    resultDiv.innerText='';
    hands.innerText=''
    playerScore.innerText=''
}

playGame()