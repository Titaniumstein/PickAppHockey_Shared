
function GetPlayTimesByPlayerIdQuery(playerId){
    this.playerId = playerId;
    this.type = GetPlayTimesByPlayerIdQuery.name;
}

module.exports = GetPlayTimesByPlayerIdQuery;