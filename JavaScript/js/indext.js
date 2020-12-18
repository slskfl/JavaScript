window.onload=function(){
    var date=new Date();
    var hour=date.getHours();
    var output="";
    // 15시가 지나면 메뉴가 바뀜.
    if(hour<15){
        output+="<ul>";
        optput+="<li>김치찌개</li>";
        optput+="<li>된장찌개</li>";
        optput+="<li>칼국수</li>";
        output+="</ul>";
    }else{
        output+="<ul>";
        optput+="<li>후라이드치킨</li>";
        optput+="<li>양념치킨</li>";
        optput+="<li>골뱅이무침</li>";
        output+="</ul>";
    } document.body.innerHTML+=output;
}