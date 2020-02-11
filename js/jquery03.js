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
    function widthHeight() {
        var text = "";
        text += "div의 너비: " + $("#div01").width() + "<br>"
        text += "div의 높이: " + $("#div01").height();
        return text;
    };
    $("#btn1").on("click", function() {
        var text1 = widthHeight();
        $("#div01").html(text1);
    });

    function innerWidthHeight(text3_0) {
        text3_0 += "<p>padding까지 너비: " + $("#div01").innerWidth() + "</p>";
        text3_0 += "<p>padding까지 높이: " + $("#div01").innerHeight() + "</p>";
        return text3_0;
    }
    $("#btn3").on("click", function() {
        var text3_1 = widthHeight();
        text3_1 = innerWidthHeight(text3_1);
        $("#div01").html(text3_1);
    });

    function outerWidthHeight(flag, text) {
        if (flag == true) {
            text += "<p>margin까지 너비: " + $("#div01").outerWidth(true) + "</p>";
            text += "<p>margin까지 높이: " + $("#div01").outerHeight(true) + "</p>";
        }
        else {
            text += "<p>border까지 너비: " + $("#div01").outerWidth() + "</p>";
            text += "<p>border까지 높이: " + $("#div01").outerHeight() + "</p>";
        }
        return text;
    };
    $("#btn4").on("click", function() {
        var text4 = widthHeight();
        text4 = outerWidthHeight(false,text4);
        $("#div01").html(text4);
        
    });
    $("#btn5").on("click", function() {
        var text5 = widthHeight();
        text5 = outerWidthHeight(true, text5);
        $("#div01").html(text5);
    });
});