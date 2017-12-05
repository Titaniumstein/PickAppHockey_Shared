
//not in use
function GetPlayerByLoginQuery(playerName, playerHash){
    this.playerName = playerName;
    this.playerHash = playerHash;
    this.type = GetPlayerByLoginQuery.name;
}

module.exports = GetPlayerByLoginQuery;