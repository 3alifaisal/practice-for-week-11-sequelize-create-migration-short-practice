'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('Colors',
    { id: Sequelize.INTEGER,
      name: Sequelize.STRING});
   
  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.dropTable('Colors');
   
  }
};
