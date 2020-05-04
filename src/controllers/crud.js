const bcrypt = require('bcrypt')

module.exports = {
  create: (model) => async( req,res ) => {
    try{
      const { password } = req.body 
      console.log(req.body)
      if(!password){
        throw new Error('missing password')
      }

      bcrypt.hash(password, 12, async function(err, hash) {
        try{
          const doc =  await model.create({ ...req.body, password: hash })

          res.status(200).json({ doc })
        }catch(err){
          res.status(404).json({ err })
        }
      })

    }catch(err){
      console.log(err)
      res.status(500).json({ message: err })
    }
  },
  update: (model) => async ( req,res ) => {
    try{
      const doc = await model.findOneAndUpdate({_id: req.query.id}, req.body, {new: true} ).lean().exec()
      res.status(200).json({ doc })
    }catch(err){
      res.status(500).json({ message: err })
    }
  },
  read: (model) => async ( req,res ) => {
    try{
      const doc = await model.findOne({_id : req.query.id}).lean().exec()
      res.status(200).json({ doc })
    }catch(err){
      res.status(500).json({ message: err })
    }
  },
  delete: (model) => async ( req,res ) => {
    try{
      const doc = await model.findOneAndDelete({_id : req.query.id}, {new: true}).lean().exec()
      res.status(200).json({ doc })
    }catch(err){
      res.status(500).json({ message: err })
    }
  }
}
