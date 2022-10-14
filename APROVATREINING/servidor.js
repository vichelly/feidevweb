// Pacotes  necessários
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

// Conexão com o banco de dados
mongoose.connect("mongodb://localhost/AulaExemplo");

// Definição do Schema do usuário
var usuarioSchema = new mongoose.Schema({
    dbNome: 'String',
    dbLogin: 'String',
    dbSenha: 'String'
})
var usuarioModel = mongoose.model("usuarios", usuarioSchema)

// Definições da aplicação
var app = express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
let servidor = http.createServer(app);
servidor.listen(80);
console.log("Servidor rodando...");