var restify = require('restify');
var mongojs = require("mongojs");

 
var ip_addr = '127.0.0.1';
var port    =  '8080';
 
function basicResponse(req,res,next){
	res.send('hello world, this is a test. :)');
	next();
}


var server = restify.createServer({
    name : "myapp"
});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
 
server.get('/',basicResponse);


server.listen(port ,ip_addr, function(){
    console.log('%s listening at %s ', server.name , server.url);
});
