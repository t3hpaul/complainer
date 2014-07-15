var restify = require('restify');
var mongojs = require("mongojs");

#Root User:     admin
#Root Password: 9ramFj1Xzgm7
#Database Name: complaints
#mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/
 
var ip_addr = '127.0.0.1';
var port    =  '8080';
 
function basicResponse(req,res,next){
	res.send('hello world, this is a test. :)');
	next();
}

function newMessageParge(req,res,next){
	res.send('thanks, your complaint has been noted.');
	next();
}

var server = restify.createServer({
    name : "myapp"
});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
 
server.get('/',basicResponse);
server.get('/incoming/new',newMessageParse);

server.listen(port ,ip_addr, function(){
    console.log('%s listening at %s ', server.name , server.url);
});
