const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
        bugId: {type: mongoose.Schema.Types.ObjectId, auto: true},
        releaseId: {type: mongoose.Schema.Types.ObjectId, ref: 'Release'},
        productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
        teamId: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
        title: {type: String, required: true},
        tags: [{type: String}],
        dueDate: {type: Date},
        description: {type: String},
        priority: {type: String, enum: ['low', 'medium', 'high'], default: 'medium'},
        severity: {type: String, enum: ['minor', 'major', 'critical'], default: 'minor'},
        status: {type: String, enum: ['open', 'in progress', 'closed'], default: 'open'},
        assignedTo: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        attachments: [{type: String}],
    },
    {timestamps: true}
);

module.exports = mongoose.model('Bug', bugSchema);
