const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Poem = new Schema({
    title: {
        type: String,
        require: true,
    },
    slug: {
        type: String,
        require: true,
        unique: true,
    },
    type: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    }
}, {
    collection: 'poems',
    timestamps: true
})

module.exports = mongoose.model('Poems', Poem)