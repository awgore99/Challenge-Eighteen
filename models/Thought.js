const { Schema, model } = require('mogoose');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [
        {
            type: Schema.types.ObjectId,
            ref: 'Reaction'
        }
    ],
},
{
    toJSON: {
        getters: true,
        virtuals: true,
    },
    id: false
});

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;