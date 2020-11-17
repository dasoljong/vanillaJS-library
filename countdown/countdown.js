function getTime() {
  //     now = new Date()
  //     console.log(now);
  //     dday = new Date(2020,07,29,16,00,00); // 원하는 날짜, 시간 정확하게 초단위까지. 0이 1월입니다

  var now = new Date().getTime() + new Date().getTimezoneOffset() * 1000 * 60; //시스템 date를 UTC로 변경
  var dday = new Date(2020, 06, 29, 12, 00, 00) - 540 * 1000 * 60; //한국기준-UTC 기준을 위한 오프셋, 06이 7월, 540은 한국의 타임존 오프셋

  days = (dday - now) / (1000 * 60 * 60 * 24);
  dRound = Math.floor(days);

  hours = ((dday - now) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
  hhRound = Math.floor(hours);

  minutes = ((dday - now) % (1000 * 60 * 60)) / (1000 * 60);
  mRound = Math.floor(minutes);

  seconds = ((dday - now - 1) % (1000 * 60)) / 1000;
  sRound = Math.round(seconds);

  //document.getElementById("counter1").innerHTML = dRound;
  document.getElementById("counter2").innerHTML = hhRound;
  document.getElementById("counter3").innerHTML = mRound;
  document.getElementById("counter4").innerHTML = sRound;
  newtime = window.setTimeout("getTime();", 1000);
}

getTime();
