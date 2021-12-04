const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.get('/about', (req, res) => {
    res.send('about');
})

app.get('/htmlfile', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/helloworldfile', (req, res) => {
    res.sendFile(path.join(__dirname,'helloworld.html'));
})

app.get('/navbar', (req, res) => {
    res.sendFile(path.join(__dirname,'navbar.html'));
})

app.listen(port, () => {
    console.log(`node.js demo app listening at http://localhost:${port}`)
})