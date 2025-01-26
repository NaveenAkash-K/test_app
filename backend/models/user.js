const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        userId: {type: mongoose.Schema.Types.ObjectId, auto: true},
        organizationId: {type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        username: {type: String, required: true},
        status: {type: String, enum: ['active', 'inactive'], default: 'active'},
        role: [{type: mongoose.Schema.Types.ObjectId, ref: 'Role'}],
        fullname: {type: String},
        profileLink: {type: String},
        lastLogin: {type: Date}
    },
    {timestamps: true});

module.exports = mongoose.model('User', userSchema);
