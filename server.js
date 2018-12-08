
//Install express server
const express = require('express');
const path = require('path');

const app = express();

const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/statistic-indicators'));

app.get('/create-node-info/:nodeId/:soilMoisture/:soilTemperature/:airHumidity/:airTemperature', function (req, res) {
    console.log('fytgsufhijokdpla[s;');
    res.send(200, req.body);
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/statistic-indicators/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);