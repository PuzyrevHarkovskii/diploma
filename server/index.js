const fs = require("fs");
const cors = require("cors")
const express = require('express')
const PythonShell = require('python-shell').PythonShell

const app = express()
const port = 80


app.use(cors());
app.use(express.json());

//Обработка POST-запроса на python:
app.post('/python', (req, res) => {
    fs.writeFileSync('test.py', req.body.code);

    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        args: [1, 2, 3]
      };
      
      PythonShell.run('test.py', options, function (err, results) {
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);
      });

    res.json({message: "success" }); //успешное выполнение запроса
});

//Прослушивание порта
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});