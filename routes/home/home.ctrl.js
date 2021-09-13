"use strict"

// 컨트롤러로 분리하기
const home = (req , res)=>{
    res.render("home/index");
};

const login = (req, res) =>{
    res.render("home/login");
};

module.exports = {
    home,
    login,
};