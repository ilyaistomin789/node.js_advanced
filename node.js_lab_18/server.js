const http = require('http');
const httpHandler = require('./components/handler/httpHandler')
http.createServer().listen(3000).on('request', (req,res) => {httpHandler.handler(req,res)});
