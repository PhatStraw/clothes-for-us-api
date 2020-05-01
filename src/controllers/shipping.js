module.exports = {
  createLabel: async (req, res) => {
    try{
      const options = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(req.body) // body data type must match "Content-Type" header
      }
      const doc = await fetch('https://api.shipengine.com/v1/labels', options)

      res.status(200).json({ doc })
    }catch(err){
      res.status(500).json({ message: err })
    }
  },
}
