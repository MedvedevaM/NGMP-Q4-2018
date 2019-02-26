const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Products = sequelize.define('products', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        name: Sequelize.STRING,
        brand: Sequelize.STRING
    }, {
        tableName: 'nodejs.products'
    });

    return Products;
};