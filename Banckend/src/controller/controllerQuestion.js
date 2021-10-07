const question = require('../model/question');

class EstudianteController {

    constructor() {

    }

    registrar(req, res) {
        question.create(req.body, (error, data) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.status(201).json(data);
            }
        });
    }

    getQuestion(req, res) {
        question.find((error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        })
    }
   

    setQuestion(req, res) {
        // Capturar los datos del cuerpo de la peticion
        let { id_question,
            description,
            level,
            answear1,
            answear2,
            answear3,
            answear4,
            correct } = req.body;
        //Crear un objeto con los datos capturados del cuerpo de la petición
        let objQuestion = {
            id_question,
            description,
            level,
            answear1,
            answear2,
            answear3,
            answear4,
            correct
        }
        // Actualizar un 
        question.findByIdAndUpdate(id, { $set: objQuestion }, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.status(200).json(data);
            }
        })
    }

    // 
    delete(req, res) {
        let { id } = req.body;
        question.findByIdAndRemove(id, (error, data) => {
            if (error) {
                res.status(500).json({ error });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}

module.exports = QuestionController;
