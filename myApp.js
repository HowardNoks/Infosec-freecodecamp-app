const express = require('express');
const helmet = require('helmet');
const app = express();


app.use(helmet());















//module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
// app.use('/..api', api);
app.use('/api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/_api/package.json', (req, res) => {
  res.json(require('./package.json'));
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🥦 Useful programmer info security App started on port ${port}`);
});

module.exports = app;