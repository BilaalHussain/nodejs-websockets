const express = require('express')

const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log("Recieved request");
    next();
});

app.get('/frontend.js', (req, res) => {
    res.sendFile(__dirname + '/frontend.js');
});

app.get('/', (req, res) =>
	res.sendFile(__dirname + '/index.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
