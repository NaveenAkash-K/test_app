const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
        permissionId: {type: mongoose.Schema.Types.ObjectId, auto: true},
        organizationId: {type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true},
        role: {type: String, required: true},
        canCreateBugs: {type: Boolean, default: false},
        canUpdateBugs: {type: Boolean, default: false},
        canDeleteBugs: {type: Boolean, default: false},
        canAssignBugs: {type: Boolean, default: false},
        canUploadBuilds: {type: Boolean, default: false}
    },
    {timestamps: true}
);

module.exports = mongoose.model('Permission', permissionSchema);
