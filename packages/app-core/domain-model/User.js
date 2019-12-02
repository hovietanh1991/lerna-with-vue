let counter = 0;

class User {
  constructor(name) {
    this.id = ++counter;
    this.name = name;
  }
}

module.exports = {
  User
};
