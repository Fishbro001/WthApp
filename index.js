const express = require('express');
const app = express();
var cors = require('cors');
const path = require('path');

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = process.env.PORT || 3000;
app.listen(port);