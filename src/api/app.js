const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../../.env.local')});

// Create express app
const app = express();
// Setup server port
const port = process.env.API_PORT || 3000;

// Parse requests of content type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// Parse requests of content-type - application/json
app.use(bodyParser.json())

// Use cors
app.use(cors())

app.get('/', (req, res) => {
  res.send("Bak Tracker REST API");
});

// Use attempt group routes
const attemptGroupRoutes = require('./src/routes/attemptGroup.routes');
app.use('/api/v1/attempt-groups', attemptGroupRoutes)

http.createServer(app).listen(port);