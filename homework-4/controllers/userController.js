let Users = require('../db/models/Users');
let Products = require('../db/models/Products');
const sequelize = require('../db/connect');

Users = Users(sequelize);

async function getAll() {
    return Users.findAll({ limit: 10 });
}

async function getOne(userId) {
    return Users.findAll({
        where: {
            id: userId,
        },
    });
}
async function create(body) {
    return Users.create(body);
}

exports.create = create
exports.getAll = getAll;
exports.getOne = getOne;