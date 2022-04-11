require('dotenv').config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const controllers = require('./controllers');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['https://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS','PATCH','PUT','DELETE']
  })
);
app.use(cookieParser());

// GET:자료(row) 가져오기
app.get('/auth', controllers.auth);
app.get('/items', controllers.getItems);

// POST:자료(row) 생성하기
app.post('/signup', controllers.signup);
app.post('/signin', controllers.signin);
app.post('/signout', controllers.signout);
app.post('/dropsign', controllers.dropsign);

//PATCH:자료(row)의 속성 변경하기
app.patch('/userinfo', controllers.changeUserInfo);
app.patch('/password', controllers.changePassword);

//PUT:자료(row)를 전부 새것으로 변경하기

//DELETE: 자료(row) 삭제하기

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

let server;
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log('https server runnning'));
} else {
  server = app.listen(HTTPS_PORT, () => console.log('http server runnning'));
}
module.exports = server;