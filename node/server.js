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

const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3100);

// server와 browser 연결될 때까지 기다리는 것
app.listen(app.get('port'),() => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

// 브라우저 뜨는 화면
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './main.html'));
});

app.use(bodyParser.urlencoded ({extended : true}));


app.use('/login', login);
app.use('/after', afterLogin);
app.use('/join', join);
app.use('/about_us', aboutUs);
app.use('/mypage', mypage);
app.use('/search', search);

//글쓰기
app.use('/writing', writing);

app.post('/quotes', (req, res) => {
    console.log(req.body);
});

app.use(express.static(__dirname + '/public'));

//mongoDB 연동

const server = express();
server.listen(3100, (err)=>{
    if(err){
        return console.log(err);
    } else {
        mongoose.connect(progress.env.MONGODB_URL, {useNewUrlParser: true}, (err)=>{
            if(err){
                console.log(err);
            } else {
                console.log('연결에 성공!');
            }
        });
    }
})
const mongoose = require('mongoose');
const post = require('../models/post');
require('dotenv').config({path:'variables.env'});
server.get('/',(req,res)=>{
    const newPost = new post();
    newPost.title = "서울로 놀러오세요";
    newPost.area = "서울";
    newPost.content = "서울놀러가고 싶다 종강하고 언제 한 번은 꼭 가야지 ㅠㅠ 종강시켜주세요 제발";
    newPost.save()
        .then((post)=>{
            console.llog(post);
            res.json({
                message : '성공했단다'
            })
        })
        .catch((err)=>{
            req.json({
                message:'실패했단다'
            })
        })
})

//mongoose.connect(progress.env.MONGODB_URL, {useNewUrlParser: true}, (err)=>{
//    if(err){
//        console.log(err);
//     } else {
//        console.log('연결에 성공!');
//    }
//});