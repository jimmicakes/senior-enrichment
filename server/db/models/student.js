const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    gpa: {
        type: Sequelize.DECIMAL(2, 1),
        validate: {
            min: 0,
            max: 4
        }
    }
}, {
        getterMethods: {
            name() {
                return this.firstName + ' ' + this.lastName
            }
        }
    });