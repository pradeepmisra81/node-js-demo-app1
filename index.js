const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.get('/about', (req, res) => {
    res.send('about');
})

app.listen(port, () => {
    console.log(`node.js demo app listening at http://localhost:${port}`)
})