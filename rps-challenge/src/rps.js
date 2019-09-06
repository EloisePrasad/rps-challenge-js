function RockPaperScissors() {
  this.userChoice = null
  this.options = ['Rock', 'Paper', 'Scissors']
  this.computerChoice = null
  this.outcome = null
};

RockPaperScissors.prototype.userPick = function() {
  return this.userChoice;
}

RockPaperScissors.prototype.chooseRock = function() {
  this.userChoice = 'Rock';
};

RockPaperScissors.prototype.choosePaper = function() {
  this.userChoice = 'Paper';
};

RockPaperScissors.prototype.chooseScissors = function() {
  this.userChoice = 'Scissors';
};

RockPaperScissors.prototype.computerPick = function() {
  return this.computerChoice = this.options[Math.floor(Math.random() * this.options.length)];
};

RockPaperScissors.prototype.result = function() {
  if (this.userChoice === this.computerChoice) {
    this.outcome = "It's a tie!"
  } else if (this.userChoice === 'Rock' && this.computerChoice === 'Paper') {
    this.outcome = 'Computer wins!'
  } else if (this.userChoice === 'Paper' && this.computerChoice === 'Rock') {
    this.outcome = 'You win!'
  } else if (this.userChoice === 'Rock' && this.computerChoice === 'Scissors') {
    this.outcome = 'You win!'
  } else if (this.userChoice === 'Scissors' && this.computerChoice === 'Rock') {
    this.outcome = 'Computer wins!'
  } else if (this.userChoice === 'Paper' && this.computerChoice === 'Scissors') {
    this.outcome = 'Computer wins!'
  } else {
    this.outcome = 'You win!!'
  };
  return this.outcome;
};
