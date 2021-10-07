const express = require('express');
const QuestionController = require('../controller/controllerQuestion');

class EstudianteRouter{

    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objQuestionC = new QuestionController();
        this.router.post("/question", objQuestionC.registrar);
        this.router.get("/question", objQuestionC.getEstudiantes);
        this.router.put("/question", objQuestionC.setEstudiante);
        this.router.delete("/question", objQuestionC.delete);
    }

}

module.exports = EstudianteRouter;
