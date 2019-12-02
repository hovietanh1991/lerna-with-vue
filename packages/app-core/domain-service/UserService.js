const {User} = require('../domain-model/User');

class UserService {
  constructor() {
    this.userList = [];
  }

  addUser(name) {
    this.userList.push(new User(name));
  }

  getUserById(id) {
    for(let i = 0; i < this.userList.length; i++) {
      let user = this.userList[i];
      if(user && user.id === id) return user;
    }
    return null;
  }
}

const userService = new UserService();

module.exports = {
  userService
};
