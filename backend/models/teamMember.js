const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
        teamMemberId: {type: mongoose.Schema.Types.ObjectId, auto: true},
        teamId: {type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true},
        userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        role: {type: String, required: true},
        addedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        addedAt: {type: Date, default: Date.now}
    },
    {timestamps: true});

module.exports = mongoose.model('TeamMember', teamMemberSchema);
