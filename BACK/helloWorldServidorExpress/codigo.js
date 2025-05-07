var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Olá Mundo!");
})

var server = app.listen(8081, function(){
    var host = server.address().address;
    var porta = server.address().port;
    console.log("Exemplo de aplicativo no endereco: %s %s", host, porta);
})