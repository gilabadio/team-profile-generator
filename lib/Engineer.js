class Engineer{
    constructor(name = "", id, email, github){
        this.name= name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getName() {
        return `Employee Name: ${this.name}`;
    }

    getId(){
        return`ID: ${this.id}`;
    }

    getEmail() {
        return `Email: ${this.email}`;
    }
    getRole(){
        return `Engineer`;
    }
    getGithub(){
        return `Github: github.com/${this.github}/`;
    }
}

module.exports = Engineer;