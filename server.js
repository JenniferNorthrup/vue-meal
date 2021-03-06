const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + '/app'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, __dirname + '/app/index.html'));
});

app.listen(port);

console.log('Express server listening at port: ', port);
console.log('Express server, __dirname: ', __dirname);
