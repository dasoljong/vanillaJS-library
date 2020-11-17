// 마우스 호버 이벤트 구역
const _mh = [];

// 블러 커버
_mh.blurCover = document.getElementById("blur-cover"); // 마우스 이동시 움직임 효과를 주기 위함
_mh.bigArea = document.getElementById("first-box"); // #first-box 내부에서만 함수가 실행될 수 있도록 조건 구역을 지정
_mh.bg = document.getElementsByClassName("bg").item(0); // 마우스 이벤트 동작시 등장 또는 사라지는 효과를 주기 위해 지정

_mh.mouse = function (e) {
  // 해상도 1920 x 938 기준으로 맞춤

  // 스크롤 높이 위치 값
  const scrollY = document.documentElement.scrollHeight;

  // 해상도의 넓이값과 높이값을 참조
  const screenX = window.innerWidth / 2;
  const screenY = window.innerHeight / 2 - scrollY;

  // 마우스 위치값과 해상도 값을 계산하여 배경 위치 조정
  const x = e.clientX - screenX;
  const y = e.clientY - screenY;

  // 마우스 인 기능 구현
  if (this == _mh.bigArea) {
    _mh.bg.style.opacity = "1";
  }

  console.log("마우스 인");

  _mh.blurCover.style.backgroundPosition = "" + x + "px " + y + "px";
};

// 마우스 아웃 기능 구현
_mh.mouseOut = function (e) {
  _mh.bg.style.opacity = "0";

  console.log("마우스 아웃");
};

// 사용자가 마우스를 움직이는경우 함수 실행
_mh.bigArea.addEventListener("mousemove", _mh.mouse);
_mh.bigArea.addEventListener("mouseout", _mh.mouseOut);
