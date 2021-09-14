"use strict"

class UserStorage{
        // # 은닉
    static #users = {
        id : ["sim","나개발","김팀장"],
        psword : ["1234","12345","123456"],
        name:["개발 1","개발 2","개발 3"],
    };

    static getUsers(...fields){
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
            newUsers[field] = users[field] 
            }
            return newUsers;
        }, {});
            console.log(newUsers);
            return newUsers;
        }
        // 요청한 해당 id만 가져오기 위한 로직
        static getUserInfo(id){
            const users = this.#users;
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

        static save(userInfo){
            const users = this.#users;
            users.id.push(userInfo.id);
            users.name.push(userInfo.name);
            users.psword.push(userInfo.psword);
            return { success :  true };

        }
}




module.exports = UserStorage;