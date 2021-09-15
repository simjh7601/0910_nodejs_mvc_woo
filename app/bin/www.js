"use strict"

const { LineController } = require('chart.js');
const app  = require('../app')
const logger = require("../src/config/logger");
const PORT = process.env.PORT || 9010 ;


app.listen(PORT, ()=>{
    logger.info(`${PORT} 포트에서 서버가 동작`);
});