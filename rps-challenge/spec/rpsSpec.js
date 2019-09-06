describe('RockPaperScissors', function() {
  var rps;
  var computerChoice;

  beforeEach(function() {
    rps = new RockPaperScissors();
    computerChoice = jasmine.createSpyObj('computerChoice', ['computerPick']);
    computerChoice.computerPick.and.callFake(function() {
      return 'Rock';
    })
  });

  it('user can choose rock', function() {
    rps.chooseRock();
    expect(rps.userPick()).toEqual('Rock');
  });

  it('user can pick paper', function() {
    rps.choosePaper();
    expect(rps.userPick()).toEqual('Paper');
  });

  it('user can pick scissors', function() {
    rps.chooseScissors();
    expect(rps.userPick()).toEqual('Scissors');
  });

  it('can choose an option for computer', function() {
    expect(computerChoice.computerPick()).toEqual('Rock');
  });

  it('a draw will be declared', function(){
    rps.chooseRock();
    computerChoice.computerPick();
    expect()
  });
});
