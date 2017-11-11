const express = require('express');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');

const compiler = webpack(config);
const app = express();


app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: config.output.publicPath,
  }),
  webpackHotMiddleware(compiler),
);


const trips = {};

app.get('/trips', (req, res) => {
  fs.readdir(path.join(__dirname, '../trips'), (err, files) => {
    for (let i = 0; i < files.length; i += 1) {
      fs.readFile(path.join(__dirname, '../trips', `/${files[i]}`), 'utf8', (errs, data) => {
        trips[i] = JSON.parse(data);
      });
    }
    res.json(trips);
  });
});


app.listen(3000);
