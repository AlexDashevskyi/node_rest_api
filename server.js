const http = require('http');
const app = require('./core/app');
import mongoConnection from './core/dataBase'

const port = process.env.PORT || 3001;
const server = http.createServer(app);

mongoConnection();

server.listen(port);