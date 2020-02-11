$(document).ready(function() {
    // jquery를 이용한 트레버싱(필터링)
        // first(): 지정한 요소의 첫번쨰 요소를 선택
        // last():  지정한 요소의 마지막 요소를 선택
        // eq(): 지정한 요소의 특정 색인번호 번쨰의 요소를 선택, index번호 0부터 시작
        // filter():  조건으로 입력한 요소를 선택
        // not(): 조건으로 입력한 요소와 일치하지 않는 요소를 선택
    $("#div01 > div").first().css({"background-color": "yellow"});

    $("#div02 > div").last().css({"background-color": "yellow"});
    
    $("#div03 > p").eq(0).css({"background-color": "yellow"});
    
    $("#div04 > p").filter(".intro").css({"background-color": "yellow"});

    $("#div05 > p").not(".intro").css({"background-color": "yellow"});
});