// const id  = document.querySelector("#id"),
//  psword  = document.querySelector("#psword"),
//  longinBtn  = document.querySelector("#button");

// longinBtn.addEventListener("click", login);

// function login(){
//     if (!id.value) return alert("아이디 입력");
//     if (!psword.value ) return alert("비밀번호 입력");
//     const req = {
//         id : id.value,
//         psword : psword.value,
//     };

//     // 첫번째 에는 어떠한 경로로 데이터를 전달해줘야 한다. , 
//     // 두번째 에는 보낼 데이터 body 이름 으로 req(오브젝트) 를 보내야 하는데
//     // JSON 타입으로 보내야 해서 body:JSON.stringify(req)
//     fetch("/login" , {
//         method:"POST",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body:JSON.stringify(req),
//     })
//     .then((res) => res.json())
//     .then((res)=> {
//         if (res.success){
//             location.href = "/"
//         }else {
//             if(res.err) return alert(res.err);
//             alert(res.msg);
//         }
//     })
//     .catch((err) => {
//         console.error(new Error("로그인 중 에러 발생 했다."));
//         console.error(("로그인 중 에러 발생 했다."));
//     });


// };

const chartBtn  = document.querySelector("#button_chart");

chartBtn.addEventListener("click" , chart_view );

function chart_view(){

    // 첫번째 에는 어떠한 경로로 데이터를 전달해줘야 한다. , 
    // 두번째 에는 보낼 데이터 body 이름 으로 req(오브젝트) 를 보내야 하는데
    // JSON 타입으로 보내야 해서 body:JSON.stringify(req)
    fetch("/login" , {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res)=> {
        if (res.success){
            location.href = "/"
        }else {
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생 했다."));
        console.error(("로그인 중 에러 발생 했다."));
    });
};

////////////////////////////
let labels2 = ['test1', 'test2', 'test3', 'test4'];
let data2 = [199.6, 250.3, 126.3, 130];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];

let myChart2 = document.getElementById("myChart2").getContext('2d');


let chart2 = new Chart(myChart2, {
    type: 'line',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Number of passengers carried in 2017 (in mio.)",
            display: true
        },
        legend: {
        display: false
        }
    }
});

