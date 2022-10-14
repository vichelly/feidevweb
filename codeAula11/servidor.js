// inclui o módulo http
let http = require("http");
// inclui o módulo express
let express = require("express");

// cria a variável app, pela qual acessaremos os métodos
// ou funções existentes no framework express
let app = express();

// método use() utilizado para definir em qual
// pasta estará o conteúdo estático
app.use(express.static("./public"));

// cria o servidor
let server = http.createServer(app);

// define o número da porta que o servidor ouvirá
server.listen(80);

// mensagem exibida no console para debug
console.log("Servidor rodando...");
