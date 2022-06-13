const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/password-generator'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/password-generator/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log('App is running on http://localhost:' + port);
