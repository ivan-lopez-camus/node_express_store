const faker = require('faker');

class UsersService {

  constructor(){
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        image: faker.image.imageUrl(),
      });
    }
  }

  create() {

  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }

}

module.exports = UsersService;
