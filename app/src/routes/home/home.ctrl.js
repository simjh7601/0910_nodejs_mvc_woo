"use strict"


const logger = require("../../config/logger")
const User = require("../../models/User");
const { getUsers } = require("../../models/UserStorage");

// 좀더 직관적으로 알려주기 위한 변수명 output 로 객체생성
const output = {
// 컨트롤러로 분리하기
    home : (req , res)=>{
        logger.info(`GET / 304 "홈 화면으로 이동"` )
        res.render("home/index");     
    },

    login : (req, res) =>{
        logger.info(`GET /login 304 "로그인 화면으로 이동"` )
        res.render("home/login");
    },   

    register : (req, res) => {
        logger.info(`GET /register 304 "회원가입 화면으로 이동"` )
        res.render("home/register");
    },


};




const porcess = {
    // req 는 프론트단에서 보내준 정보를 담아두는 객체
    login : async (req, res) =>{
        const user = new User(req.body);
        // user에 생성한 login을 불러온다
        const response =  await user.login();

        const url = {
            method:"POST",
            path:"/login",
            status: response.err ? 400 : 200,
        }

        log(response,url );
        // 클라이언트한테 json형태로 응답하기위함
        return res.status(url.status).json(response);
    } ,
    register : async (req , res) =>{
        const user = new User(req.body);
        const response = await user.register();

        const url = {
            method:"POST",
            path:"/register",
            status: response.err ? 400 : 200,
        }

        log(response ,url);
        return res.status(url.status).json(response);
    }
};

// chartjs 정보
const view_chart = {
    chart_page : (req, res) =>{
        logger.info(`GET /register 304 "라인 차트 화면으로 이동"` )
        res.render("home/chartjs_line"); 
    },
};

const chart_view_process = {
    chart_view : async (req, res) =>{
        const user = new User(req.body);
        // user에 생성한 login을 불러온다
        const response =  await Chart.reference();

        const url = {
            method:"POST",
            path:"/chart",
            status: response.err ? 400 : 200,
        }

        log(response,url );
        // 클라이언트한테 json형태로 응답하기위함
        return res.status(url.status).json(response);
    } 
}


module.exports = {
    output,
    porcess,
    view_chart,
    chart_view_process,
};

const log = (response , url) =>{
    if (response.err) {
        logger.error(
            `${url.method} ${url.path} ${url.status} Respose: ${response.success}, 
             ${response.err}`
        );
    }
    else {
        logger.info(
            `${url.method} ${url.path} ${url.status} Respose: ${response.success}, 
             ${response.msg || ""} `
        );
    }
}


