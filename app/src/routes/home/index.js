"use strict"

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl')

// 컨트롤로 분리한 후 가져오기
// router.get("/", ctrl.output.home); 좀더 명확하게 명시하기
router.get("/", ctrl.output.home);

router.get("/login" , ctrl.output.login);
router.post("/login" , ctrl.porcess.login);
router.get("/register", ctrl.output.register);

module.exports = router;