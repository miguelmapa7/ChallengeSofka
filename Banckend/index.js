const express = require("express");
const DatabaseConnection = require("./dataBase/DatabaseConnection");
const QuestionRouter = require('./router/routerQuestion');
const UserRouter = require('./router/routerUser');

//Importar cors
const cors = require('cors');

class Server {

    constructor() {
        //Construir objeto de conexión a la BD
        const dbConnection = new DatabaseConnection();
        //Crear app express
        this.app = express();
        //Configurar parámetros de express para levantar el servidor
        this.config();
    }

    config() {
        //Indicar el puerto por que correrá el servidor
        this.app.set('port', process.env.PORT || 3000);
        //Indicar el uso del formato json para enviar info
        this.app.use(express.json());
        this.app.use(cors());
        //Configurar ruta raíz
        let router = express.Router();
        router.get('/', (req, res) => {
            res.status(200).json({ message: 'All OK' });
        });
        /********CREAR RUTAS********/
        const questionRouter = new QuestionRouter();
        const userRouter = new UserRouter();
        /**********Añadir la rutas a la app express********/
        this.app.use(router);
        this.app.use(questionRouter.router);
        this.app.use(userRouter.router);
        //Levantar el servidor / ponerlo a la escucha
        this.app.listen(this.app.get('port'), () => {
            console.log("Corriendo por el puerto => ", this.app.get('port'));
        });
    }
}

const obj = new Server();
