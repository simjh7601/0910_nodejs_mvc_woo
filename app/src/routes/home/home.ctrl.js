"use strict"



const User = require("../../models/User");
const { getUsers } = require("../../models/UserStorage");

// 좀더 직관적으로 알려주기 위한 변수명 output 로 객체생성
const output = {
// 컨트롤러로 분리하기
    home : (req , res)=>{
        res.render("home/index");
         
    },

    login : (req, res) =>{
        res.render("home/login");
    },   

    register : (req, res) => {
        res.render("home/register");
    },
};


const porcess = {
    // req 는 프론트단에서 보내준 정보를 담아두는 객체
    login : (req, res) =>{
        const user = new User(req.body);
        // user에 생성한 login을 불러온다
        const response = user.login();
        // 클라이언트한테 json형태로 응답하기위함
        console.log(response);
        return res.json(response);
    //     const id = req.body.id,
    //     psword = req.body.psword;

    //  //   const UserStorage = new UserStorage();
    //     const users = UserStorage.getUsers("id","psword");

    //      const response = {};
    //     if(users.id.includes(id) ) {
    //         const idx = users.id.indexOf(id);
    //         if(users.psword[idx] == psword){
    //             response.success = true;
    //             return res.json({
    //             });
    //         }
    //     }

    //     response.success = false;
    //     response.msg = "로그인 실패"
    //     return res.json(response);
    } ,
};


module.exports = {
    output,
    porcess,
    
};


