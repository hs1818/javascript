$(document).ready(function() {
    // jquery를 이용하여 html태그의 크기설정 및 반환
        // width(): html태그의 컨텐츠 영역의 너비 (너비 설정/반환)
        // height(): html태그의 컨텐츠 영역의 높이 (높이 설정/반환)
        // innerWidth(): html태그의 padding 영역까지의 너비 (반환)
        // innerHeight(): html태그의 padding 영역까지의 높이 (반환)
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

    $("#div01Btn2").on("click", function() {
        $("#div01Div1").width("500px");
        $("#div01Div1").height("300px");
        $("#div01Div1").css({"padding":  "30px"});
    });

    $("#div01Btn3").on("click", function() {
        var text = "";
        text += "<p>div의 너비: " + $("#div01Div1").width() + "</p>";
        text += "<p>div의 높이: " + $("#div01Div1").height() + "</p>";
        text += "<p>padding까지 너비: " + $("#div01Div1").innerWidth() + "</p>";
        text += "<p>padding까지 높이: " + $("#div01Div1").innerHeight() + "</p>";
        $("#div01Div1").html(text);
    });

    $("#div01Btn4").on("click", function() {
        var text = "";
        text += "<p>border까지 너비: " + $("#div01Div1").outerWidth() + "</p>";
        text += "<p>border까지 높이: " + $("#div01Div1").outerHeight() + "</p>";
        $("#div01Div1").html(text);
    });

    $("#div01Btn5").on("click", function() {
        var text = "";
        text += "<p>margin까지 너비: " + $("#div01Div1").outerWidth(true) + "</p>";
        text += "<p>margin까지 높이: " + $("#div01Div1").outerHeight(true) + "</p>";
        $("#div01Div1").html(text);
    });
});