require('dotenv').config();
const mongoose = require('mongoose');
const server = require('express')();
const bp = require('body-parser');
const cors = require('cors');

const senderRouter = require('./src/routes/sender.js')
const receiverRouter = require('./src/routes/receiver.js')

server.use(
    bp.urlencoded({
      extended: true
    })
);

server.use(cors({ origin: '*' }));

server.use(bp.json());

//routers
server.use('/sender', senderRouter)
server.use('/receiver', receiverRouter)

server.get('/', (req, res) => res.send('Hello World!'))


async function start(){
    try{
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017,localhost:27018,localhost:27019/clothes?replicaSet=rs', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        server.listen(process.env.PORT, function(){
            console.log(`listening on *:${process.env.PORT}`);
        })
    }catch(err){
        return err
    }
}
start()
