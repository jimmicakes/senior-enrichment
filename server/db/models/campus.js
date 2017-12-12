const Sequelize = require('sequelize');
const db = require('../index');



module.exports = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://pbs.twimg.com/profile_images/694191024416112642/VtJUhbKk_400x400.png'
    },
    description: {
        type: Sequelize.TEXT
    }
})