var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log("Requisição GET");
    res.send('Olá GET');
})

app.post('/', function(req, res){
    console.log("Requisição POST");
    res.send('Olá POST');
})

app.delete('/apagar', function(req, res){
    console.log("Requisição DELETE");
    res.send('Olá DELETE');
})

app.get('/listar', function(req, res){
    console.log("Requisição GET com listing");
    res.send('Olá Listing');
})

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Exemplo de aplicativo no endereco http://%s:%s", host, port);
})