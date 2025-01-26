const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
        teamId: {type: mongoose.Schema.Types.ObjectId, auto: true},
        productIds: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
        managerIds: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        leaderId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        teamName: {type: String, required: true}
    },
    {timestamps: true});

module.exports = mongoose.model('Team', teamSchema);
