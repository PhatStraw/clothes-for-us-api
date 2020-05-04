const fetch = require('node-fetch')

module.exports = {
  createLabel: async (req, res) => {
    try{
      const doc = await fetch('https://api.shipengine.com/v1/labels', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'API-Key': 'TEST_hi3ZR41HfSm28lX5H27fD3rHf3tLuqoAa4nmula7d7I'
          },
          body: JSON.stringify(req.body) 
        }
      )

      if(!doc){
        throw new Error('Could not create label')
      }

      const result = await doc.json()
      res.status(200).json({ result })
    }catch(err){
      res.status(500).json({ message: err })
    }
  },
}
