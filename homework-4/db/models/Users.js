const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Users = sequelize.define('users', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING
    }, {
        tableName: 'nodejs.users'
    });
    
    return Users;
};