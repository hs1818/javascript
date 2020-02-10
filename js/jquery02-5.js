$(document).ready(function() {
    // jquery를 이용하여 html태그의 크기설정 및 반환
        // width(): html태그의 컨텐츠 영역의 너비
        // height(): html태그의 컨텐츠 영역의 높이
        // innerWidth(): html태그의 padding 영역까지의 너비
        // innerHeight(): html태그의 padding 영역까지의 높이
        // outerWidth(): html태그의 border 영역까지의 너비
        // outerHeight(): html태그의 border 영역까지의 높이
        // outerWidth(true): html태그의 margin 영역까지의 너비
        // outerHeight(true): html태그의 margin 영역까지의 높이
    $("#div01Btn1").on("click", function() {
        var text = "";
        text += "div의 너비: " + $("#div01Div1").width() + "<br>"
        text += "div의 높이: " + $("#div01Div1").height();
        $("#div01Div1").html(text); //html태그를 번역해서 사용
        // $("#div01Div1").text(text); //html태그를 문자로서 인식
    });
});