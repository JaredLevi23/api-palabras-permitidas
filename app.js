require('dotenv').config();
const Server = require('./models/server')

// Instance of Server
const server = new Server();
server.listen();



