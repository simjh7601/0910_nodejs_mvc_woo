"use strict"
// 모듈 생성 후 -> npm install 설치할파일이름 -s 진행 -> 미들웨어를 등록해줘야 한다. 

// 모듈
const { json } = require('express');
const express = require('express');
// bodyParser 버전 업그레이드로 인해 사라짐 express 로 들어감
// const bodyParser = require("body-parser");


// 환경변수 모델
const dotenv = require("dotenv");
dotenv.config()


const app = express();

// 라우팅
const home = require("./src/routes/home");

//앱 세팅
//view
app.set("views" , "./src/views");
app.set("view engine" , "ejs");
// __dirname 은 현재 app.js 가 있는 위치 반환 안에 src 안에 public 폴더를 정적경로로 추가
app.use(express.static(`${__dirname}/src/public`));
// bodyparser 이 json 데이터를 파싱해올수 잇도록 설정
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 
// 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended:true }));
// routes
app.use("/", home)  //use -> 미들 웨어를 등록해주는 메서드
   
module.exports = app;

//package.json