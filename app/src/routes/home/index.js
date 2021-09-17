"use strict"

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl')

// 컨트롤로 분리한 후 가져오기
// router.get( PATH(경로), HANDLER )
// router.post( PATH(경로), HANDLER )
// PATH는 해당하는 프로젝트 내의 서버 경로
// HANDLER는 라우트가 일치할 때 발생하는 함수이다.

// router.get("/", ctrl.output.home); 좀더 명확하게 명시하기
router.get("/", ctrl.output.home);

router.get("/chartjs_line", ctrl.view_chart.chart_page);

router.get("/login" , ctrl.output.login);
router.get("/register", ctrl.output.register);


router.post("/login" , ctrl.porcess.login);
router.post("/register", ctrl.porcess.register);
router.post("/chartjs_view", ctrl.chart_view_process.chart_view)


module.exports = router;