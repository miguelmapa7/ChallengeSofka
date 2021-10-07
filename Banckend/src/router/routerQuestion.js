const express = require('express');
const QuestionController = require('../controller/controllerQuestion');

class QuestionRouter{

    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objQuestionC = new QuestionController();
        this.router.post("/question", objQuestionC.registrar);
        this.router.get("/question", objQuestionC.getQuestion);
        this.router.put("/question", objQuestionC.setQuestion);
        this.router.delete("/question", objQuestionC.delete);
    }

}

module.exports = QuestionRouter;
