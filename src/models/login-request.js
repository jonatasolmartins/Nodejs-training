class loginRequest {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  //That function parses a json object into a loginRequest object
  static from(json){
    return Object.assign(new loginRequest(), json);
  }
}

module.exports = loginRequest;