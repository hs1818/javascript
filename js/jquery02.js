$(document).ready(function() {
    // html DOM조작을 위한 jquery함수
    // text(): 선택한 html요소의 텍스트 내용을 설정하거나 반환 (html코드 제외)
        // $(선택자).text(); -텍스트 내용 가져오기
        // $(선택자).text("입력할 텍스트"); -텍스트 내용 설정
    // html(): 선택한 html요소의 내용을 설정하거나 반환(html코드 포함)
        // $(선택자).html();  - 내용 가져오기
        // $(선택자).html("입력할 내용");  - 내용 설정
    // val(): 선택한 html요소의 속성값을 설정하거나 반환(value속성을 갖고 있을 시 value속성값을 설정or 반환)
        // $(선택자).val();  - value속성값 가져오기
        // $(선택자).val("value값");  - value 설정
    // attr(): 선택한 html요소의 속성을 설정하거나 반환
        // 사용법
            // $(선택자).attr(속성명);   - 속성값 가져오기
            // $(선택자).attr(속성명, 입력할 값);   -속성값 설정
    $("#div01Btn1").on("click", function() {
        alert("text : " +$("#div01Test").text());
    });

    $("#div01Btn2").on("click", function() {
        alert("html: " +$("#div01Test").html());
    });

    $("#div01Btn3").on("click", function() {
        alert("value: " +$("#div01Input").val());
    });

    $("#div01Btn4").on("click", function() {
        alert("href: " +$("#div01Link").attr("href"));
    });

    ///////속성값 변경///////
    $("#div02Btn1").on("click", function() {
        $("#div02Test1").text("text()를 실행해 변경된 텍스트");
    });

    $("#div02Btn2").on("click", function() {
        $("#div02Test2").html("html()를 <b>실행해 변경된</b> 텍스트");
    });

    $("#div02Btn3").on("click", function() {
        $("#div02Test3").val("jquery 3.4.1버전 사용");
    });

    $("#div02Btn4").on("click", function() {
        $("#div02Link").attr("href", "https://www.naver.com");
    });
});
