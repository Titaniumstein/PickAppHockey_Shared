
function GetPlayTimeTrafficByRinkAndDateTimeQuery(rinkId,startDateTime, endDateTime){
    this.rinkId = rinkId;
    this.startDateTime = startDateTime;
    this.endDateTime = endDateTime;
    this.type = GetPlayTimeTrafficByRinkAndDateTimeQuery.name;
}

module.exports = GetPlayTimeTrafficByRinkAndDateTimeQuery;