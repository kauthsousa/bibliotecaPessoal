var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200,{'Contest-Type': 'text/plain'});
    response.end('Olá Mundo!\n');
}).listen(8081);

console.log('Servidor em execução em: http://127.0.0.1:8081/');