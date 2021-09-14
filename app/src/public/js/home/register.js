"use strict";

// src/views/home/register.ejs 에 만듬 HTML 폼에 있는 로그인 정보 불러오기 위해 생성
// register.ejs 에 <script src="/js/home/register.js" defer/> 만들어서 연결
const id  = document.querySelector("#id"),
 psword  = document.querySelector("#psword"),
 name  = document.querySelector("#name"),
 confirmPsword  = document.querySelector("#confirm-psword"),
 registerBtn  = document.querySelector("#button");

 // 버튼에 클릭 이벤트를 주었다. 이름은 register
registerBtn.addEventListener("click", register);

function register(){
    const req = {
        id : id.value,
        name : name.value,
        psword : psword.value,
        confirmPsword : confirmPsword.value,
    };

    
    // 첫번째 에는 어떠한 경로로 데이터를 전달해줘야 한다. , 
    // 두번째 에는 보낼 데이터 body 이름 으로 req(오브젝트) 를 보내야 하는데
    // JSON 타입으로 보내야 해서 body:JSON.stringify(req)
    fetch("/register" , {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res)=> {
        if (res.success){
            location.href = "/login"
        }else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생 했다."));
        console.error(("회원가입 중 에러 발생 했다."));
    });


};
