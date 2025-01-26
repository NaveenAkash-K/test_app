const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
        roleId: {type: mongoose.Schema.Types.ObjectId, auto: true},
        roleName: {type: String, required: true},
        organizationId: {type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true}
    },
    {timestamps: true});

module.exports = mongoose.model('Role', roleSchema);
p