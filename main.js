const get_weather = require("./get_weather")
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
  get_weather(139,30)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
