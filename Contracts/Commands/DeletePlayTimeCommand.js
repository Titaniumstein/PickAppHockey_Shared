
function DeletePlayTimeCommand(playTimeId){
    this.playTimeId = playTimeId;
    this.type = DeletePlayTimeCommand.name;
}

module.exports = DeletePlayTimeCommand;