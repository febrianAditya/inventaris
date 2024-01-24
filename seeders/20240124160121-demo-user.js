'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = bcrypt.hashSync('12345', 10);

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const dataDemo = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      firstName: 'Febrian',
      lastName: 'Aditya',
      email: 'example@example.com',
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()

    }
   ]

   await queryInterface.bulkInsert('Users', dataDemo, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
