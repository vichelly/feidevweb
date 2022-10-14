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
    nota1 : Number,
    nota2 : Number
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
    res.render("home")
})

app.post("/calculaMedia", function(req,res){
    let nome = req.body.nome
    let nota1 = req.body.nota1
    let nota2 = req.body.nota2
    let med = (parseInt(nota1)+parseInt(nota2))/2
    let name = "Nome do aluno: "+nome
    let not1 = "Nota 1: "+nota1
    let not2 = "Nota 2: "+nota2
    let media = "Média do Aluno: "+med

    res.render("resposta", {name, not1, not2, media})

    app.post('/salvaDados', function(req,res){
        console.log(nome,nota1,nota2)
        var novo = new modelUsuario({
            nome: nome,
            nota1: nota1,
            nota2: nota2
        })
        
        novo.save();
        if(med>5){
            resposta = "Aluno Aprovado"
        }
        else{
            resposta = 'Aluno Reprovado'
        }

        modelUsuario.find({nome, nota1, nota2}, function(err,obj){
            if(obj.length){
                mensagem = 'Salvo com sucesso!'
                res.render('respostabanco', {resposta,mensagem})
            }else{
                mensagem = 'Erro: Não foi possível salvar!'
                res.render('respostabanco', {resposta,mensagem})
            }
        })
    })
})

app.use(express.static('./public'));

var server = http.createServer(app);

server.listen(80);

console.log('servidor rodando...')