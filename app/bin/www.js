"use strict"

const app  = require('../app')

const PORT = process.env.PORT || 9010 ;


app.listen(PORT, ()=>{
    console.log("서버가동");
});