//importar 1lib de HTTP
const http = require('http');
const url = require('url');


//Criar um servidor web HTTP
var callback = function (request, response){
    //dEFINA CABEÇALHO (header) com o tipo de resposta 
    response.writeHead(200, {"content-type": "text/plain; charsetutf-8"});


    //Faz o parse da URL separando conteúdo e caminho (end-point)
    var parts = url.parse(request.url);


    //Criar os end-points (routas);
    if(parts.path =="/"){
        response.end("index - rota principal");
    }else if (parts.path =="/dsm"){
        response.end("Página do curso DSM")
    }else if(parts.path == "/vestibular"){
        response.end("VEstibular Fatec");
    }else{
        response.end("404 - erro");
    }
    


    //mensagem de retorno 
    response.end("Olá Mundo = Fatec Zona Sul");
};

var server = http.createServer(callback)
server.listen(3000);
console.log("Servidor Iniciado em https://localhost:3000...");
