// Engineer 

const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, gitHubId) {
        super (name, id, email);
        this.gitHubId = gitHubId;
        this.position = 'Engineer';
    }
    getGithubId() {
        return this.gitHubId;
    }
}
module.exports = Engineer; 