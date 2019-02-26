const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Reviews = sequelize.define('review', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        productId: Sequelize.UUID,
        reviewerId: Sequelize.UUID,
        comment: Sequelize.STRING
    }, {
        tableName: 'nodejs.reviews'
    });
    
    return Reviews;
};