$(document).ready(function() {
    // html요소의 class속성 추가
        // addClass(): 선택한 html 요소에 하나 이상의 class추가
            // 존재하지 않는 class를 추가하지만 css영역에 class에 대한 속성 미리 설정
            // $(선택자).addClass("추가할class명1 class명2 ...");
        // removeClass(): 선택한 html 요소에서 하나 이상의 class제거
            // $(선택자).removeClass("삭제할 class명"); -동시에 여러개 삭제가능
        // toggleClass(): 선택한 html 요소에서 클래스 추가/제거를 전환
        // css(): 선택한 html 요소의 css속성 설정 or 반환
            // 동시에 여러개 css속성을 설정하려면 {"속성명" : "속성값", "속성명2" : "속성값"}
    $("#div01Btn1").on("click", function() {
        $("h1, h2, p").addClass("blue");
        $("#div01 > div").addClass("important");
    });

    $("#div01Btn2").on("click", function() {
        $("#div01id1").addClass("blue important");
    });

    $("#div01Btn3").on("click", function() {
        $("#div01id1").toggleClass("blue important");
    });

    $("#div02Btn1").on("click", function() {
        $("h1, h2, p").removeClass("blue");
    });

    $("#div03Btn1").on("click", function() {
        $("#div03 > p").css("background-color", "yellow");
    });

    $("#div03Btn2").on("click", function() {
        $("#div03 > p").css({
            "background-color" : "green", 
            "color": "white",
            "border" : "2px solid black"
        });
    });
});