import express from 'express'
const server = express();

const port = (process.env.PORT || 8080)


function what(req, res, next){
    console.log(req, url);
    next();
}



server.set('port', port);

server.use(express.static('public'));

server.use(what);



server.get("/", (req, res,next) => {
    console.log("Get /");
    res.status(200).send("Hello World").end();
    next();
});





server.listen(server.get('port'), function(){
    console.log('server running', server.get('port'));
})