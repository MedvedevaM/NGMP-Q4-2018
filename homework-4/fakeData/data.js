const data = {
    products: [{
        id: '1',
        name: 'Phone',
        color: 'white',
    }, {
        id: '2',
        name: 'Notebook',
        color: 'white',
    }],
    users: [{
        id: '1',
        email: 'admin@gmail.com',
        password: '1111',
        role: 'admin',
    }, {
        id: '2',
        email: 'user@gmail.com',
        password: '1111',
        role: 'user',
    }],
    reviews: [{
            productId: '1',
            reviewer: 'John',
            comment: 'Good'
        },
        {
            productId: '2',
            reviewer: 'Jack',
            comment: 'Great'
        }
    ],
};

module.exports = data;