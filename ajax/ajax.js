// ajax의 두가지 특징:
// 1) 페이지 새로고침 없이 서버에 요청
// 2) 서버로부터 데이터를 받고 작업을 수행

(function () {
  let httpRequest;
  document.getElementById("ajaxButton").addEventListener("click", makeRequest);

  function makeRequest() {
    // js를 이용하여 서버로 보내는 HTTP request를 만들기 위해서는 그에 맞는 기능을 제공하는 Object의 인스턴스가 필요하다.
    httpRequest = new XMLHttpRequest(); // non IE

    if (!httpRequest) {
      alert("XMLHTTP 인스턴스를 만들 수가 없어요ㅠㅠ");
      return false;
    }
    // onreadystatechange 메소드
    // 서버가 작업을 마치고 클라이언트에게 정보를 돌려줄 때 자동으로 실행할 메소드를 지정한다.
    httpRequest.onreadystatechange = alertContents;
    // open(); 주소를 보내기위해 하는 준비작업
    httpRequest.open("GET", "ajax.html");
    // send(); 보내는 명령어
    httpRequest.send();
  }

  function alertContents() {
    // 통신 에러(서버가 다운되는 등) 상황에서, status 필드를 접근하려 하면 onreadystatechange 메서드에서 예외에러를 발생 시킬 것이다.
    // 이러한 문제를 예방하기 위해서 if...then 구문을 try...catch 구문으로 감싸주자.
    try {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          alert(httpRequest.responseText);
        } else {
          alert("request에 문제가 있어요.");
        }
      }
    } catch (e) {
      alert("Caught Exception: " + e.description);
    }
  }
})();
