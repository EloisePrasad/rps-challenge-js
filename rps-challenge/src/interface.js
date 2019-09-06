$(document).ready(function() {
  var rps = new RockPaperScissors;

  $('#rps').text('Welcome to Rock Paper Scissors');

  $('#pick').text('Take your pick ')
  // + $('#name').val());

  $('#rock').click(function() {
    rps.chooseRock();
    $('#user-choice').text('You chose Rock');
    $('#computer-choice').text('The computer has chosen ' + rps.computerPick() );
    $('#result').text(rps.result());
  });

  $('#paper').click(function() {
    rps.choosePaper();
    $('#user-choice').text('You chose Paper');
    $('#computer-choice').text('The computer has chosen ' + rps.computerPick() );
    $('#result').text(rps.result());
  });

  $('#scissors').click(function() {
    rps.chooseScissors();
    $('#user-choice').text('You chose Scissors');
    $('#computer-choice').text('The computer has chosen ' + rps.computerPick() );
    $('#result').text(rps.result());
  })

})
