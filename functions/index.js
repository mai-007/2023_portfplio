const functions = require('firebase-functions')
const express = require('express')
const basicAuth = require('basic-auth-connect')
const app = express()

app.all('/*', basicAuth(function(user, password) {
  return user === 'MKPortfolio20230213' && password === 'W2xH3jXd';
}));

app.use(express.static(__dirname + '/dist/'))

exports.app = functions.https.onRequest(app)
