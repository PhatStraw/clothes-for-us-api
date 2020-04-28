require("dotenv").config();
var mongoose = require('mongoose');
var server = require("express")();
var bp = require("body-parser");
var cors = require("cors");

var senderRouter = require('./src/routes/sender.js')
var receiverRouter = require('./src/routes/receiver.js')

server.use(
    bp.urlencoded({
      extended: true
    })
);

server.use(cors({ origin: '*' }));

server.use(bp.json());

//routers
server.use("/sender",senderRouter)
server.use("/receiver",receiverRouter)

server.get('/', (req, res) => res.send('Hello World!'))


async function start(){
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017,localhost:27018,localhost:27019/todo?replicaSet=rs", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    server.listen(process.env.PORT, function(){
        console.log(`listening on *:${process.env.PORT}`);
    })
}
start()
