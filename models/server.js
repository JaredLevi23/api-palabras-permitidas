const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../config/db-config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Connection to bd
        this.connectionDB();
        //Middlewares
        this.middlewares();
        //Routes 
        this.routes();
    }

    async connectionDB(){
        await dbConnection();
    }

    middlewares(){
        // json
        this.app.use( express.json() );
        //Cors
        this.app.use( cors() );
        // Public Directory
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use( '/api', require('../routes/words') );        
    }

    listen(){
        this.app.listen(  process.env.PORT, ()=> {
            console.log(`Server running in port ${ this.port }`);
        });
    }
}


module.exports = Server;