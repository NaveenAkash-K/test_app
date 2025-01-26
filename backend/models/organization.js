const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
        organizationId: {type: mongoose.Schema.Types.ObjectId, auto: true},
        adminIds: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        name: {type: String, required: true},
    },
    {timestamps: true}
);

module.exports = mongoose.model('Organization', organizationSchema);
