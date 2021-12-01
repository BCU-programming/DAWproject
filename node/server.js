const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3100);

// server와 browser 연결될 때까지 기다리는 것
app.listen(app.get('port'),() => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

// 브라우저 뜨는 화면
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/main.html'));
});

app.use(express.static(__dirname + '/public'));