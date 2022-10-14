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




// Definições das Actions/methods

app.get(['/','/login'], function(req, resp){
    resp.render('logar');
});

app.get('/cadastra', function(requisicao, resposta){
    resposta.render('cadastrar');
});

app.post("/cadastra_usuario", function (req, resp){
    let nome = req.body.nome;
    let login = req.body.login;
    let senha = req.body.senha;

    let novo = new usuarioModel({
        dbNome: nome,
        dbLogin: login,
        dbSenha: senha
    });

    novo.save()
    resp.render("resposta", {mensagem: "Sucesso", login, senha})

});

app.post("/login", function (req, resp){
    let login = req.body.logar_login;
    let senha = req.body.logar_senha;

    usuarioModel.find({dbLogin: login, dbSenha: senha}, function (err,obj){
        if(obj.length){
            resp.render("resposta", {mensagem: "Sucesso", login, senha})
        } else {
            resp.render("resposta", {mensagem: "Falha", login, senha})
        }
    });
});

app.get('/atualiza', function(requisicao, resposta){
    resposta.render('atualizar');
});

app.post("/atualizar_usuario", function (req, resp){
    let login = req.body.login;
    let senhaAtual = req.body.senha_atual;
    let senha = req.body.senha_nova;

    usuarioModel.updateOne({dbLogin: login, dbSenha: senhaAtual},{$set:{"dbSenha":senha}}, function (err,obj){
        if(obj.n == 0){
            resp.render("resposta", {mensagem: "Erro!", login, senha})
        } else {
            resp.render("resposta", {mensagem: "Sucesso", login, senha})
        }
    });
});

app.get('/remove', function(requisicao, resposta){
    resposta.render('remover');
});

app.post("/remover_usuario", function (req, resp){
    let login = req.body.login;
    let senha = req.body.senha;

    usuarioModel.remove({dbLogin: login, dbSenha: senha},function (err,obj){
        if(obj.n == 0){
            resp.render("resposta", {mensagem: "Erro!", login, senha})
        } else {
            resp.render("resposta", {mensagem: "Removido", login, senha})
        }
    });
});
