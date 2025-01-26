const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
        commentId: {type: mongoose.Schema.Types.ObjectId, auto: true},
        bugId: {type: mongoose.Schema.Types.ObjectId, ref: 'Bug', required: true},
        userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        parentCommentId: {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'},
        comment: {type: String, required: true},
    },
    {timestamps: true});

module.exports = mongoose.model('Comment', commentSchema);
