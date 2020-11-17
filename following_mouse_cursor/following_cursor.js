
// mouse cursor start
const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; // mouse pointer's 좌표
const pos = { x: 0, y: 0 }; // cursor's 좌표
const speed = 0.15; // between 0 and 1

const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  // cursorCircle.classList.add("move");
}

window.addEventListener('mousemove', updateCoordinates);


function getAngle(diffX, diffY) {
  return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(
    Math.pow(diffX, 2) + Math.pow(diffY, 2)
  );
  const maxSqueeze = 0.25; // 찌그러지는 크기 조절
  const accelerator = 500;
  return Math.min(distance / accelerator, maxSqueeze);
}


const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);
  
  pos.x += diffX * speed;
  pos.y += diffY * speed;

  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);
  
  const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
  const rotate = 'rotate(' + angle +'deg)';
  const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

// 마우스가 화면 끝으로 가면 커서 사라짐
if ( document.addEventListener ) {
  document.addEventListener("mousemove",resultFun,false);
} else if ( document.attachEvent ) {
  document.attachEvent("onmousemove",resultFun);
} else {
  document.onmousemove = resultFun;
}

function resultFun(x) {
  const positionLeft = x.clientX;
  const positionTop = x.clientY;
  const positionBottom = window.innerHeight;
  const positionRight = window.innerWidth;
  
  if (positionTop < 10 || positionTop > positionBottom - 10 || positionLeft < 10 || positionLeft > positionRight - 10) {
    cursor.classList.add("gone");
  } else {
    cursor.classList.remove("gone");
  } 
}
// 마우스가 화면 끝으로 가면 커서 사라짐 끝


// a 태그 위에 hover 되면 원 크기 줄어듬 시작
const hoverMe = document.querySelectorAll("span a");

for (let i = 0; i < hoverMe.length; i++) {
    hoverMe[i].addEventListener("mouseover", mouse_over, false);
    hoverMe[i].addEventListener("mouseout", mouse_out, false);
}

function mouse_over () {
  // for (let i = 0; i < hoverMe.length; i++) {
  // const objOpacity = hoverMe[i]
  // const thisStyle = getComputedStyle(objOpacity);
  // const opacity = thisStyle.opacity;
  // console.log(opacity);
  cursorCircle.style.width = "24px";
  cursorCircle.style.height = "24px";
  // }
  console.log("mouse over")
}

function mouse_out () {
  cursorCircle.style.width = "58px";
  cursorCircle.style.height = "58px";

  console.log("mouse out");
}
// a 태그 위에 hover 되면 원 크기 줄어듬 끝




// mouse cursor end
