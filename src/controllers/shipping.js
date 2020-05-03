module.exports = {
  createLabel: async (req, res) => {
    try{
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(req.body) 
      }
      const doc = await fetch('https://api.shipengine.com/v1/labels', options)
      
      res.status(200).json({ doc })
    }catch(err){
      res.status(500).json({ message: err })
    }
  },
}
