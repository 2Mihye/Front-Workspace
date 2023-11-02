// 5초 후에 메세지 보이게 하는 함수
function displayMsg(){
    var msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "안녕하세요.";

}

/*
setTimeout(callback, delay); : JavaScript 안에 내장되어있는 타이머 함수 중 하나로 일정시간이 지나면 지정된 함수를 실행하는 역할을 함
callback : 실행하고자 하는 함수나 코드블럭을 지정해서 불러온 후 실행
delay : 함수를 실행하기 전까지 기다려야하는 시간을 지정
*/
setTimeout(displayMsg, 5000); // msg를 5초 후에 보여줄 수 있게 해줌