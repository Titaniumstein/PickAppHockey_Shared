
function AddPlayTimeCommand(playTime){
    this.playTime = playTime;
    this.type = AddPlayTimeCommand.name;
}

module.exports = AddPlayTimeCommand;