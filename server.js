
var http=require('http');
const app=require('./app/app');
var server=http.createServer(app);
if(server){
    console.log("The server is running on the port" );
}
server.listen(1025);

