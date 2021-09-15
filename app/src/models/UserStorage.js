"use strict"

const db = require("../config/db");

class UserStorage{
 
    static getUserInfo(id){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users where id = ? ;";
            db.query( query ,[id], (err, data) =>{
                //db 쿼리문이 성공하면 resolve를 실행  실패하면 reject를 실행(err)
                if(err) reject(`${err}`);
                // 쿼리문이 배열로 반환되기 때문에 인덱스번호 입력[0]
                resolve(data[0]);       
            })
        });
    }

    static async save(userInfo){
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users (id, name, psword) values( ?, ?, ?);";
            db.query( query ,[userInfo.id, userInfo.name , userInfo.psword], (err) =>{
                if(err) reject(`${err}`);
                resolve( {success : true} );       
            })
        });
        

        }
}




module.exports = UserStorage;