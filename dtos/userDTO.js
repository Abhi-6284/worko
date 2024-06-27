
class CreateUserDTO {
    constructor(email, name, age, city, zipCode) {
      this.email = email;
      this.name = name;
      this.age = age;
      this.city = city;
      this.zipCode = zipCode;
    }
  }
  
  class UserDTO {
    constructor(id, email, name, age, city, zipCode) {
      this.id = id;
      this.email = email;
      this.name = name;
      this.age = age;
      this.city = city;
      this.zipCode = zipCode;
    }
  }
  
  module.exports = {
    CreateUserDTO,
    UserDTO
  };
  