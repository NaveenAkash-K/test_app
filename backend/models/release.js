const mongoose = require('mongoose');

const releaseSchema = new mongoose.Schema({
        releaseId: {type: mongoose.Schema.Types.ObjectId, auto: true},
        productIds: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true}],
        teamId: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
        releaseNotes: {type: String},
        version: {type: String, required: true},
        changeLog: {type: String},
        filePath: {type: String},
        uploadedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        uploadedAt: {type: Date, default: Date.now}
    },
    {timestamps: true});

module.exports = mongoose.model('Release', releaseSchema);