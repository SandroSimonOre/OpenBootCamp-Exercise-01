export class Contact {
    firstName = '';
    lastName = '';
    email= '';
    online = true;

    constructor(firstName, lastName, email, online){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.online = online;
    }
}