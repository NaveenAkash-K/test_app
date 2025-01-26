const mongoose = require('mongoose');

const bugLogSchema = new mongoose.Schema({
        logId: {type: mongoose.Schema.Types.ObjectId, auto: true},
        bugId: {type: mongoose.Schema.Types.ObjectId, ref: 'Bug', required: true},
        changedType: {type: String, required: true}, // e.g., "status", "priority", etc.
        oldValue: {type: String},
        newValue: {type: String},
        changedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        reason: {type: String},
    },
    {timestamps: true}
);

module.exports = mongoose.model('BugLog', bugLogSchema);
