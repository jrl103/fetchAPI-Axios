import React from "react";
import axios from "axios";

// fetch 써서 Mock API 하고 통신하기 ! ==============================
// : Requset 보다 훨씬 간단하게 쓸 수 있음

function App() {
  const callSomething = async () => {
    // Post 방식
    // 1. 보내주기 위한 데이터(생성하기 위한 데이터) 만들기
    let data = {
      "day": "일",
      "sleep_time": "10:00",
      // id는 자동으로 생성되므로 누락
    };  // --> 이제 이 데이터를 fetch에 option(객체형식)으로 넘겨주기 !

    // fetch("요청을 보는 url", "요청을 보낼 url")
    // fetch는 promise를 반환하므로 async await 써줘야함
    // 안써주면 콘솔 찍을때 promise <pending> 만 뜸
    // ---> so, callSomething 이라는 함수 하나 만들어서 async await 만들기
    const response = await fetch("http://localhost:5001/sleep_times", {
      method: "POST",
       //요청하고 응답할때 어떤 데이터로 왔다갔다 할건지 정하기 (header)
      headers: {
        "content=Type": "application/json; charset-utf-8"
      },
      body: JSON.stringify(data)
      // data json으로 보낼 수 있게 해줌
      // 개발자도구의 statusText : "Created" 뜨면 잘 된것
      // --> db.json 가서 잘 생성됐는지 확인하기
     
    });

    console.log(response);
  };


// Axios (쓰는 방법 2가지) ==============================================
// Axios 가 알아서 json화 해서 요청을 보내기 때문에
// json 형식으로 바꿔주는 작업 안해도 오류가 안남


const callSomethingAxios = 
// 방법 1. axios({options 넣기}) = config 설정
// 방법 2. axios.get() or axios.post() 와 같은 요청 method 사용

/* // ------------- 1 ) get
  axios({
    method: "get",
    url:"http://localhost:5001/sleep_times"
  }).then(response => {
    // 잘 가지고 왔는지 확인해 보기 !
    // async await 대신에 then 사용해 본것
      console.log(response);
  }); // ---> useEffect 에서 호출하기 */

/* // --------------2 ) 요청메소드 get
axios.get("http://localhost:5001/sleep_times".then(response => {
// 혹시라도 무언가 데이터를 더 넣어줘야 할 일이 있거나,
// header 라던가 config 설정을 추가로 해주고 싶으면
// "" 옆에 , 붙이고 그 다음에 넣으면 됨 {~~~}

console.log(response);
})) */


// ----------2 ) 요청메소드 post
// axios.post("http://localhost:5001/sleep_times", {데이터}, {어떤 config} )
 
let data = {
  "day": "일",
  "sleep_time": "10:00",
  // id는 자동으로 생성되므로 누락
}; 

axios.post("http://localhost:5001/sleep_times", data).then(response => {
  console.log(response);
  //넣은 data 잘 나오는지 확인
})


// ===============================================================
  React.useEffect(() => {
    // callSomething();
    callSomethingAxios();
  }, []);

  return <div className="App"></div>;
}

export default App;
