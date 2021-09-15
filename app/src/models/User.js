"use strict";

const UserStorage = require("./UserStorage");



class User{
    constructor(body){
        this.body = body;
    }
    // await 는 async 안에서만 사용가능
    async login() {
        const client = this.body;
        try{
        // await 같은 경우는 getUserInfo 가 반환하는 정보가 객체기 때문에 
        // 모두 반활 할때까지 기다려 라는 구문
        const {id, psword} = await UserStorage.getUserInfo(client.id);

        if(id){
            if(id === client.id && psword === client.psword ){
                return {success : true };
                }
            return {success : false, msg:"비밀번호가 틀렸어..."};
            }
        return {success : false, msg:"존재하지 않는 아이디"};
        }catch (err) {
            return {success : false, err};
        }
    } 
    
    async register() {
        const client = this.body;
        try{
            const response = await UserStorage.save(client)
            return response; 
        }catch (err){
            return {success : false, err};
        }
    }

}

module.exports = User;