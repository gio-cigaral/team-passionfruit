const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path')

app.use(express.static(__dirname + ''))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dashboard.html')); 
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
