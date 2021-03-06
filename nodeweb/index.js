var cors = require('cors');
const express = require('express');

const app = express()
const port = 3000

let originsWhitelist = "http://localhost:4200";
let corsOptions = {
    origin: function (origin, callback) {
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
}

app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type");
    return next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/get-data', (req, res) => {
    res.send({ data: 'Hello World!' });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
