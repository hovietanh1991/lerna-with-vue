const {describe, it} = require('mocha');
const { expect } = require('chai');
const {userService} = require('../domain-service/UserService');


describe('Test user service', () => {
  const testData = ['Sergey', 'Viet Anh'];

  before(() => {
    testData.forEach(name => userService.addUser(name));
  });

  after(() => {
    // some tear down logic here (if needed)
  });

  it('Test adding user function of user service', async () => {
    expect(userService).not.to.be.undefined;
    expect(userService.userList.length).to.be.equal(testData.length);

    for(let i = 0; i < testData.length; i++) {
      expect(userService.userList[i].id).to.be.equal(i + 1);
      expect(userService.userList[i].name).to.be.equal(testData[i]);
    }
  });

  it('Test getting user by id function of user service', async () => {
    expect(userService).not.to.be.undefined;
    expect(userService.userList.length).to.be.equal(testData.length);

    for(let i = 0; i < testData.length; i++) {
      expect(userService.getUserById(i + 1)).not.to.be.undefined;
      expect(userService.getUserById(i + 1).name).to.be.equal(testData[i]);
    }
  });
});
