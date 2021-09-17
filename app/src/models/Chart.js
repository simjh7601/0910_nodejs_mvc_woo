"use strict";

const UserStorage = require("./Chart_db");



class Chart{
    constructor(body){
        this.body = body;
    }
    // await 는 async 안에서만 사용가능
    async reference() {
        const client = this.body;
        try{
        // await 같은 경우는 getUserInfo 가 반환하는 정보가 객체기 때문에 
        // 모두 반활 할때까지 기다려 라는 구문
        const user = await Chart_db.getChart_Line_Data();
        console.log(user);
        // if(user){
        //     if(user.id === client.id && user.psword === client.psword ){
        //         return {success : true };
        //         }
        //     return {success : false, msg:"비밀번호가 틀렸어..."};
        //     }
        return {success : false, msg:" 조회 실패 "};
        }catch (err) {
            return {success : false, err};
        }
    } 
    
    // async register() {
    //     const client = this.body;
    //     try{
    //         const response = await UserStorage.save(client)
    //         return response; 
    //     }catch (err){
    //         return {success : false, err};
    //     }
    // }

}

module.exports = Chart;