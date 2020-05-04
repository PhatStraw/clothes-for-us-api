const Sender = require('../models/sender')
const Receiver = require('../models/receiver')
const jwt = require('jsonwebtoken')
module.exports = {
  authorized: async (req,res,next) => {
    try{
      const authorized = req.header('Authorization')

      if(!authorized){
        throw new Error('missing token')
      }
      
      const { id, role } = jwt.verify(authorized, process.env.JWT_SECRET)

      if(role === 'senders'){
        const user = await Sender.findById(id).lean().exec()
        
        if(!user){
          throw new Error('could not authenticate user')
        }

        req.user = user
        next()
        return
      }

      const user = await Receiver.findById(id).lean().exec()
      
      if(!user){
        throw new Error('could not authenticate user')
      }

      req.user = user
      next()
      return 
    }catch(err){
      res.status(400).json({message: err})
    }
  },
}
