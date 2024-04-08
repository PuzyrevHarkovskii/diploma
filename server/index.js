const fs = require("fs");
const cors = require("cors")
const express = require('express')

const app = express()
const port = 80


app.use(cors());
app.use(express.json());


app.post('/python', (req, res) => {
    fs.writeFileSync('test.py', req.body.code)
    res.json({message: "success" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})