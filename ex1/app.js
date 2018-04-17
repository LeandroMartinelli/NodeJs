var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render("index");
});

app.get('/editar', function(request, response){
    response.render("editar");
});

app.listen(3000, function(){
    console.log('Servidor Iniciado');
});
