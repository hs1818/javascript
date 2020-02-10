$(document).ready(function() {
    $("#div01Btn1").on("click", function() {
        var addText = "<li>" + $("#div01Input").val() + "</li>";
        $("#div01Ul").append(addText);
        $("#div01Input").val(""); //추가 후 빈칸 만들어줌(기존에 입력된 input태그의 value값을 모두 삭제)
        $("#div01Input").focus(); //박스에 커서 이동(버튼에 주어진 포커스를 textbox로 이동)
    });

    $("#div02Btn1").on("click", function() {
        $("#div02Ul").addClass("fontsize");
    });

    $("#div02Btn2").on("click", function() {
        $("#div02Ul").addClass("color");
    });

    $("#div02Btn3").on("click", function() {
        $("#div02Ul").addClass("fontweight");
    });

    $("#div02Btn4").on("click", function() {
        $("#div02Ul").removeClass("fontsize color fontweight");
        // $("#div02Ul").removeClass(); //해당 태그에 적용된 모든 class삭제
    });
});