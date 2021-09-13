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
}




module.exports = UserStorage;