const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const userdata = require('../Server/data_user');

server.get('/api/users',(req, res, next) =>{
    res.status(200).send(userdata.getUsers);

});

server.listen(3000,()=>{
    console.log("baskar")
})