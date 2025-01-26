const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        productId: {type: mongoose.Schema.Types.ObjectId, auto: true},
        organizationId: {type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true},
        name: {type: String, required: true},
        description: {type: String},
        status: {type: String, enum: ['active', 'inactive'], default: 'active'},
        createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    },
    {timestamps: true});

module.exports = mongoose.model('Product', productSchema);
