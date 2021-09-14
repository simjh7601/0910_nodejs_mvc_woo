"use strict"

const fs = require("fs").promises;

class UserStorage{
    static #getUserInfo(data , id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        // users의 키값들만 배열로 만들다.
        const userKeys = Object.keys(users); // => [id, psword, name]
        // newUser 에 키값이[info]순차적으로 들어간다. 
        const userInfo = userKeys.reduce((newUser , info) =>{
            newUser[info] = users[info][idx]
            return newUser;
        } ,{}); // <= 초기값
        return userInfo;
    }
    
    static #getUsers(data , isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
            newUsers[field] = users[field] 
            }
            return newUsers;
        }, {});
            console.log(newUsers);
            return newUsers;

    }


    static getUsers(isAll , ...fields){

        return fs
        .readFile("./src/databases/users.json") 
        .then((data) => {
            return this.#getUsers(data , isAll, fields);
        })      
        .catch(console.error);

        }
        // 요청한 해당 id만 가져오기 위한 로직
    static getUserInfo(id){
        //const users = this.#users;
       return fs
            .readFile("./src/databases/users.json") 
            .then((data) => {
                return this.#getUserInfo(data , id);
            })      
            .catch(console.error);

        }

        // 가독성 있게 은닉해서 생성


    static async save(userInfo){
        const users = await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디 입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        // 데이터 추가
        fs.writeFile("./src/databases/users.json" , JSON.stringify(users));
        return { success : true}
    }
}




module.exports = UserStorage;