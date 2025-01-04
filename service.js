import UserRepository from "./repository.js";

class UserService {
  async registerUser(userData) {
    return await UserRepository.createUser(userData);
  }

  async fetchUser(email, telephone_number) {
    return await UserRepository.getUserByEmailOrPhone(email, telephone_number);
  }
}

export default new UserService();
