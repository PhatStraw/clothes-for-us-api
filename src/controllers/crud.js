module.export = {
  create: (model) => async(req,res) => {
    try{
      const doc =  await model.create(req.body)

      res.status(200).json({ doc })
    }catch(err){
      
      res.status(500).json({ message: err })

    }
  },
  // update:
  // read:
  // delete:
}
