'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("satelites", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      serial_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      planetId: {
        type: Sequelize.INTEGER,
        reference: {model: 'planets', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      createdAt: {
        type: Sequelize.DATE
      },

      updatedAt: {
        type: Sequelize.DATE
      },
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable("satelites")
  }
};
