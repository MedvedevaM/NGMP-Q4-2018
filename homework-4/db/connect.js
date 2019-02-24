const Sequelize = require('sequelize');
const Client = require('pg').Client;

const sequelize = new Sequelize('postgres://postgres:password@localhost:8081/nodejs', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    operatorsAliases: false,
    port: 8081,
    database: "nodejs"
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const сlient = new Client('postgres://postgres:password@localhost:8081/nodejs');
сlient.connect()
    .then(() => console.log('Successfully connected to PostgreSQL'))
    .catch(err => console.error('connection error', err.stack));

module.exports = sequelize;
