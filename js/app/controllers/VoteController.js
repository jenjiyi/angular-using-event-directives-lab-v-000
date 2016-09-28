function VoteController() {
    this.votes = 0;
    var voteIncrease = false;
    var voteDecrease = false;


    this.incrementVotes = function () {
      if (voteIncrease == false){
      this.votes++;
      voteIncrease = true;
      voteDecrease = false;
    } else if (voteIncrease == true){
        this.votes--;
        voteIncrease = false;
        voteDecrease = false;
    }
    };

    this.decrementVotes = function () {
      if ( voteDecrease == false) {
        this.votes--;
        voteIncrease = false;
        voteDecrease = true;
      } else if ( voteDecrease == true) {
        this.votes++;
        voteIncrease = false;
        voteDecrease = false;
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);
