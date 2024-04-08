const express = require('express')
const app = express()
const port = 80
const cors = require("cors")

app.use(cors());
app.use(express.json());


app.post('/python', (req, res) => {
  console.log(req.body)
  res.json({message: "success" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})