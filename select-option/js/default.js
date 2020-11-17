/*Dropdown Menu*/
$('.dropdown').click(function () {
    // $(this).attr('tabindex', 1).focus();
    //  $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    //  $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});


var currentUrl = window.location.href.split("?cate_no=")[1];
var selectedValueName = $('.select span');
var selectedCelebImg = $('.select img');

$('.dropdown-menu li').each(function(){
    var celebListClass = $(this).attr('class');
    if (celebListClass == currentUrl) {
        var currentCelebName = $(this).find('.celeb-name').text();
        var currentCelebImg = $(this).find('.celeb-profile-img-box img').attr('src');
        selectedValueName.text(currentCelebName);
        selectedCelebImg.attr('src',currentCelebImg);
    }
});

// 선택 된 celeb은 list에서 삭제 시작
const currentUrl_ = window.location.href.split("?cate_no=")[1];
//const currentCateNum_ = window.location.search.split("=")[1];
const celebList_ = document.querySelectorAll(".dropdown-menu li");
const selectedValueName_ = document.querySelector(".select span");
const selectedCelebImg_ = document.querySelector('.select img');

for (let i = 0; i < celebList_.length; i++) {
    if(currentUrl_ == celebList_[i].className) {
        console.log(celebList_[i].className);
        celebList_[i].classList.add("active");
    }
}
// 선택 된 celeb은 list에서 삭제 끝

// //
// //
// for (let i = 0; i < celebList.length; i++) {
//     if(currentUrl == celebList[i].className) {
//         celebList[i].
//
//     }
// }
//
// if ( window.addEventListener ) {
//     window.addEventListener("load",selectEvent,false);
// } else if ( window.attachEvent ) {
//     window.attachEvent("onload",selectEvent);
// } else {
//     window.onload = selectEvent;
// }
// function selectEvent() {
//     // 폼이름,셀렉트박스이름 으로 셀렉트박스에 접근합니다.
//     // onchange 이벤트를 적용해줍니다.
//     selectedValue.onchange = selectFun;
// }
// // this.value 로 이벤트가 발생한 곳,자신(this)의 value값을 출력 합니다.
// function selectFun() {
//
//     // for (let i = 0; i < celebList.length; i++) {
//     //     if(currentUrl == celebList[i].className) {
//     //         celebList[i].classList.add("active");
//     //
//     //     }
//     // }
//
//     // value 가 '0000'인 선택하기를 클릭했을때는 얼럿이 뜨지 않도록 예외처리를 해줍니다.
//     if ( this.value == '0000' ) {
//         return false;
//     }
//     alert( this.value );
// }