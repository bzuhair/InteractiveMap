const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static('build'));

let trips = {};

fs.readdir(path.join(__dirname, '../trips'), (err, files) => {
  for (let i = 0; i < files.length; i += 1) {
    fs.readFile(path.join(__dirname, '../trips', `/${files[i]}`), 'utf8', (errs, data) => {
      trips[i] = JSON.parse(data);
      console.log(trips);
    });
  }
});

app.listen(3000);
