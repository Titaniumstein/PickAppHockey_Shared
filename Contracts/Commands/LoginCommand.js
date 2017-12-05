
function LoginCommand(username, hash){
    this.username = username;
    this.hash = hash;
    this.type = LoginCommand.name;
}

module.exports = LoginCommand;