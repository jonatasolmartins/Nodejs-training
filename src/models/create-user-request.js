
class createUserRequest {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    // This static method is used to create a new instance of the class from a JSON object.
    static from(json){
        return Object.assign(new createUserRequest(), json);
      }
}

module.exports = createUserRequest;