/*jshint esversion: 6 */
const faker = require('faker');

export class PasswordGenerator {
  getPassword(config) {
    return Array.from(faker.lorem.word());
  }
}
