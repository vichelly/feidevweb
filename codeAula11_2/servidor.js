// inclui o módulo http
let http = require("http");
// inclui o módulo express
let express = require("express");
let bodyParser = require("body-parser")

// cria a variável app, pela qual acessaremos os métodos
// ou funções existentes no framework express
let app = express();

app.set("view engine", "ejs")
app.set("views", "./views")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post("/teste", function (req,resp){
    let login = req.body.login;
    let senha = req.body.senha;
    resp.write("pagina de teste renderizada");
    resp.write(login);
    resp.write(senha)
    resp.end()
})

app.get("/", function(req, resp){
    resp.render("home")
})

app.get("/cadastro", function (req, resp){
    let varLogin = req.query.login
    let varSenha = req.query.senha
    resp.render("resposta", {varLogin, varSenha})
})

// método use() utilizado para definir em qual
// pasta estará o conteúdo estático
app.use(express.static("./public"));

// cria o servidor
let server = http.createServer(app);

// define o número da porta que o servidor ouvirá
server.listen(80);

// mensagem exibida no console para debug
console.log("Servidor rodando...");
