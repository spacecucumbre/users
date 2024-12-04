const User = require('../models/UserModel');

module.exports = {
    index: (req, res) => {
        User.find({})
        .lean()
        .then((users) => {
            res.render('userViews/users', { users: users})
        }).catch((err) => {
            res.send(err)
        })
    }
}