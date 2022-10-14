var http = require('http');


let bodyParser = require("body-parser")

var mongoose = require('mongoose')
var express = require('express');
const { response } = require('express');
const { query } = require('express');
const { render } = require('express/lib/response');
var app = express();

mongoose.connect("mongodb://localhost/AulaExemplo")

var modelUsuarioSchema = new mongoose.Schema ({
    nome : String,
    mail : String,
    telefone : String
})

var modelUsuario = mongoose.model('Usuarios', modelUsuarioSchema)

modelUsuario.find({}, function (err, obj){
    console.log(obj);
})

app.set("view engine", 'ejs')
app.set('views', './views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.render("1home")
})

app.post('/cadastro', function(req,res){
    res.render('2cadastro')
})

app.post("/teste", function(req,res){
    let nome = req.body.nome
    let mail = req.body.mail
    let telefone = req.body.telefone
    var novo = new modelUsuario({
        nome: nome,
        mail: mail,
        telefone: telefone
    })
    novo.save();
    let name = "Nome: "+nome
    let email = "E-mail: "+mail
    let tel = "Telefone: "+telefone
    modelUsuario.find(function(erro, listausuarios){
        console.log(listausuarios)
        res.render("3resposta", {lista: listausuarios, name, email, tel})
    })
})

app.use(express.static('./public'));

var server = http.createServer(app);

server.listen(80);

console.log('servidor rodando...')