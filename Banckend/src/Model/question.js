const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    id_question: {
        type: String
    },
    description: {
        type: String
    },
    level: {
        type: String
    },
    answear1: {
        type: String
    },
    answear2: {
        type: String
    },
    answear3: {
        type: String
    },
    answear4: {
        type: String
    },
    correct: {
        type: String
    }

}, {
    collection: 'questions'
});

module.exports = mongoose.model('Question', QuestionSchema);
