"use strict"


const logger = require("../../config/logger")
const User = require("../../models/User");
const { getUsers } = require("../../models/UserStorage");

// 좀더 직관적으로 알려주기 위한 변수명 output 로 객체생성
const output = {
// 컨트롤러로 분리하기
    home : (req , res)=>{
        logger.info(`GET / 200 "홈 화면으로 이동"` )
        res.render("home/index");
         
    },

    login : (req, res) =>{
        logger.info(`GET /login 200 "로그인 화면으로 이동"` )
        res.render("home/login");
    },   

    register : (req, res) => {
        logger.info(`GET /register 200 "회원가입 화면으로 이동"` )
        res.render("home/register");
    },
};


const porcess = {
    // req 는 프론트단에서 보내준 정보를 담아두는 객체
    login : async (req, res) =>{
        const user = new User(req.body);
        // user에 생성한 login을 불러온다
        const response =  await user.login();
        if(response.err)
            logger.error( `POST /login 200 Respose: "success: ${response.success}, ${response.err}"`
            );
        else 
            logger.info(
                `POST /login 200 Respose: "success: ${response.success}, msg: ${response.msg}"`
                );
        // 클라이언트한테 json형태로 응답하기위함
        return res.json(response);
    } ,
    register : async (req , res) =>{
        const user = new User(req.body);
        const response = await user.register();
        if(response.err)
        logger.error( `POST /register 200 Respose: "success: ${response.success}, ${response.err}"`
        );
        logger.info(
            `POST /register 200 Respose: "success: ${response.success}, msg: ${response.msg}"`
        );
        return res.json(response);
    }
};


module.exports = {
    output,
    porcess,
    
};


