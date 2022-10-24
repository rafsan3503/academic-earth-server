const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log('server is running')
})

