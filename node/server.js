const express = require('express');
const router = require('express').Router();
const path = require('path');
const app = express();

const login = require('./router/js/login');
const afterLogin = require('./router/js/afterLogin');
const join = require('./router/js/join');
const aboutUs = require('./router/js/aboutUs');
const mypage = require('./router/js/mypage');
const writing = require('./router/js/r_writing');
const search = require('./router/js/r_search');

app.set('port', process.env.PORT || 3100);

// server와 browser 연결될 때까지 기다리는 것
app.listen(app.get('port'),() => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

// 브라우저 뜨는 화면
app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, './main.html'));
});


app.use('/login', login);
app.use('/after', afterLogin);
app.use('/join', join);
app.use('/about_us', aboutUs);
app.use('/mypage', mypage);
app.use('/writing', writing);
app.use('/search', search);

app.use(express.static(__dirname + '/public'));