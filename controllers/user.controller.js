const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
    // select all users without password
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
}