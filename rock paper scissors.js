 const res = document.getElementById('result');
    const scoreDisplay = document.getElementById('score');
    let score = { win: 0, lose: 0, tied: 0 };

    function getComputerChoice() {
      const rand = Math.random();
      if (rand < 1/3) return 'Rock';
      if (rand < 2/3) return 'Paper';
      return 'Scissors';
    }
    function finalscore(){
        if(score.win===0 && score.lose===0 && score.tied===0){
            res.innerHTML=`No games played yet.`;
        }
      else if(score.win>score.lose){
        res.innerHTML=`Congrats! you won`;
      }
      else if(score.win<score.lose){
        res.innerHTML=`Uh Oh you lose!`;
      }
      else{
        res.innerHTML=`Match tied   `;
      } 
       }
    function play(userChoice) {
      const computerChoice = getComputerChoice();
      let outcome = '';
      let emoji = { Rock: "✊", Paper: "✋", Scissors: "✌️" };

      if (userChoice === computerChoice) {
        outcome = `<strong>Tied!</strong> You both chose <span>${emoji[userChoice]}</span> <b>${userChoice}</b>.`;
        score.tied++;
      } else if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
      ) {
        outcome = `<strong>You Won!</strong> You chose <span>${emoji[userChoice]}</span> <b>${userChoice}</b>, computer chose <span>${emoji[computerChoice]}</span> <b>${computerChoice}</b>.`;
        score.win++;
      } else {
        outcome = `<strong>You Lost!</strong> You chose <span>${emoji[userChoice]}</span> <b>${userChoice}</b>, computer chose <span>${emoji[computerChoice]}</span> <b>${computerChoice}</b>.`;
        score.lose++;
      }
      res.innerHTML = outcome;
      showScore();
    }

    function showScore() {
      scoreDisplay.innerHTML = `Wins: <b>${score.win}</b> &nbsp;|&nbsp; Losses: <b>${score.lose}</b> &nbsp;|&nbsp; Ties: <b>${score.tied}</b>`;
    }

    function resetScore() {
      score = { win: 0, lose: 0, tied: 0 };
      res.innerHTML = '';
      showScore();
    }
    showScore();