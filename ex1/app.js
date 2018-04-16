var http = require('http');

var server = http.createServer(function(request, response){
    if(request.url == "/editar"){
        response.end('<html><body><h1>Edit world</h1></body></html>');
    } else {
        response.end('<html><body><h1>Hello world</h1></body></html>');
    }
});
server.listen(3000);
console.log('Servidor Iniciado');

