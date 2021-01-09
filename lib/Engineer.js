class Engineer{
    constructor(name = ""){
        this.name= name;
        this.id = [i];
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