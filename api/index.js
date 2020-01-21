const express = require('express');
const proxy = require('http-proxy-middleware');
const btoa = require('btoa');
const app = express();
const config = require('platformsh-config').config();
const cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors())
app.options('*', cors(corsOptions))

app.get('/', function (req, res) {
    var token = req.query.token;
    res.json({ 'message': 'Hello ' + token + '!' })
})

app.listen(config.port, () => console.log('Server running at http://localhost:' + config.port + ' 🚀'));
