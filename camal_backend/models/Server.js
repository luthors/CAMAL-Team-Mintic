const express = require('express'); 
const http = require('http');
const path = require('path');
const cors = require('cors');

const { dbConnection } = require('../database/config');


class Server {

    constructor() {

        this.app = express() ;
        this.port = process.env.PORT;

        //Configuracion de http server
        this.server = http.createServer(this.app);
    }

    middlewares() {
        this.app.use( express.static(path.resolve(__dirname, '../public')));

        this.app.use(cors());

        //Para lectura del body de las peticiones
        this.app.use( express.json() );

        //Definición de rutas
        this.app.use('/api/auth', require('../routes/auth'));

    }

    initServer() {

        //conexion DB
        dbConnection();
        
        this.middlewares();

        this.server.listen(this.port, () => {
            console.log('Servidor escuchando desde puerto ', this.port);
        });
    }
}

module.exports = Server;