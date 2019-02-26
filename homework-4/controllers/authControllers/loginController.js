const jwt = require('jsonwebtoken');
const data = require('../../fakeData/data');

const login = (req, res) => {
    const {
        login,
        password
    } = req.body;
    const user = data.users.find(user => user.email === login && user.password === password);
    if (user) {
        const token = jwt.sign({
            login,
            password
        }, 'secret', {
            expiresIn: 60 * 60
        });
        res.send(`Token: ${token}`);
    } else {
        res.redirect('/');
    }
};

module.exports = login;