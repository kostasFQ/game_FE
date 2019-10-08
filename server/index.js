const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
 
app.post('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(9000)