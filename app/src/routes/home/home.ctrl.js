"use strict"




// 좀더 직관적으로 알려주기 위한 변수명 output 로 객체생성
const output = {
// 컨트롤러로 분리하기
    home : (req , res)=>{
        res.render("home/index");
    },

    login : (req, res) =>{
        res.render("home/login");
    },   
};

const users = {
    id : ["sim","나개발","김팀장"],
    psword : ["1234","12345","123456"],
};

const porcess = {
    // req 는 프론트단에서 보내준 정보를 담아두는 객체
    login : (req, res) =>{
        const id = req.body.id,
        psword = req.body.psword;

        if(users.id.includes(id) ) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] == psword){
                return res.json({
                    success:true,
                });
            }
        }

        return res.json({
            success:false,
            msg:"로그인에 실패하셨습니다.",
        });
    } 
}


module.exports = {
    output,
    porcess,
    
};