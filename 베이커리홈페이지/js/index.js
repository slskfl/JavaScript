function partpopup(){
    // 함수정의와 함수이름 (매개변수)
    window.open("popup.html", "", "width=800, height=300");
    //창을 연다는 의미, 창의 이름, 다양한설정
}
// setTimeout(익명함수, 밀리초);
setTimeout(function() {
    // alert>> 자동으로 팝업창을 띄움. 밀리초는 딜레이
    alert("저의 베이커리 홈페이지를 방문해주셔서 감사합니다.");
}, 3000);