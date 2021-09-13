
// 모듈
const { json } = require('express');
const express = require('express');
const app = express();

// 라우팅
const home = require("./src/routes/home");

//앱 세팅
//view
app.set("views" , "./src/views");
app.set("view engine" , "ejs");
// __dirname 은 현재 app.js 가 있는 위치 반환 안에 src 안에 public 폴더를 정적경로로 추가
app.use(express.static(`${__dirname}/src/public`));

// routes
app.use("/", home)  //use -> 미들 웨어를 등록해주는 메서드
   
module.exports = app;

//package.json