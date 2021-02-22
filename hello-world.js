const express = require('express');


const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World! This is a demo code to learn dockers');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);