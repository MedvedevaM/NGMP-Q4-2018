let Products = require('../db/models/Products');
let Reviews = require('../db/models/Reviews');
let Users = require('../db/models/Users');
const sequelize = require('../db/connect');

Products = Products(sequelize);
Reviews = Reviews(sequelize);
Users = Users(sequelize);

Reviews.belongsTo(Users, {
    foreignKey: 'reviwerId',
    targetKey: 'id'
});

async function getAll() {
    return Products.findAll({
        limit: 10
    });
}

async function getOne(productId) {
    return Products.findAll({
        where: {
            id: productId,
        },
    });
}
async function create(body) {
    return Products.create(body);
}

async function getReviews(productId) {
    return Reviews.findAll({
        where: {
            productId
        }
    });
}

exports.create = create
exports.getAll = getAll;
exports.getOne = getOne;
exports.getReviews = getReviews;