class Manager{
    constructor(name = ""){
        this.name= name;
        this.id = [i];
        this.email = email;
        this.officeNumber = officeNumber;
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
        return `Manager`;
    }
    getOfficeNumber(){
        return `Office Number: ${this.officeNumber}`;
    }
}