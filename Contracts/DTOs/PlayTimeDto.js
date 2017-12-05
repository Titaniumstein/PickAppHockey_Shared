function PlayTimeDto(id, playerId, rinkId){
    this.id = id;
    this.startDateTime = null;
    this.endDateTime = null;
    this.playerId = playerId;
    this.rinkId = rinkId;
}

module.exports = PlayTimeDto;