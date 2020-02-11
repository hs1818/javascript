$(document).ready(function() {
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase(); //$(this) = 현재 선택한 태그 자기자신(myInput) // lowercase = 영어소문자
        // var value = $("myInput").val(); //아래 두줄 = 위 한 줄 
        // value = value.toLowerCase(); 
        $("#myTable tr").filter(function() {
            //toggle() 화면에 출력하거나 숨김
            // indexOf(): 문자열 안에서 지정한 글자위치 반환
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > 1);
        });
    });
});