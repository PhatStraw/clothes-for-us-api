const Sender = require('../models/sender')
const Receiver = require('../models/receiver')
module.exports = {
  authorized: (req,res,next) => {
    try{
      const authorized = req.header('authorized')
      if(!authorized){
        throw new Error('missing token')
      }
      
      const { role, id } = jwt.verify(authorized, process.env.JWT_SECRET)

      if(role === 'sender'){
        const user = Sender.findOneById(id).lean().exec()
        
        if(!user){
          throw new Error('could not authenticate user')
        }
        next()
      }

      const user = Receiver.findOneById(id).lean().exec()
      
      if(!user){
        throw new Error('could not authenticate user')
      }
      next()
      
    }catch(err){
      res.status(400).json({message: err})
    }
  },
}
