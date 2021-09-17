"use strict"

const db = require("../config/db");

class Chart_db{
 
    static getChart_Line_Data(){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM chart_line  ;";
            db.query( query , (err, data) =>{
                //db 쿼리문이 성공하면 resolve를 실행  실패하면 reject를 실행(err)
                if(err) reject(`${err}`);
                // 쿼리문이 배열로 반환되기 때문에 인덱스번호 입력[0]
                else resolve(data[0]);
                console.log(data[0].num1);       
            })
        });
    }

    // static async save(userInfo){
    //     return new Promise((resolve, reject) => {
    //         const query = "INSERT INTO users (id, name, psword) values( ?, ?, ?);";
    //         db.query( query ,[userInfo.id, userInfo.name , userInfo.psword], (err) =>{
    //             if(err) reject(`${err}`);
    //             else resolve( {success : true} );       
    //         })
    //     });
    //  }
}




module.exports = Chart_db;