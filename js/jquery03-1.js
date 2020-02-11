$(document).ready(function() {
    // jquery를 이용한 트레버싱
    // 조상태그 선택
        // parent(): 지정한 html태그의 한 단계 위의 부모태그 선택
        // parents(): 지정한 html태그의 모든 조상태그를 선택(html까지)
        // parentsUntil(): 2개의 html태그를 선택하고 2개의 태그 사이에 있는 조상태그를 선택
    $("#div01 span").parent().css({
        "color": "red",
        "border": "3px solid red"
    });

    // $("#div02 span").parents().css({
    //     "color": "red",
    //     "border": "3px solid green"
    // });

    $("#div03 span").parentsUntil("#div03 > div").css({
        "color": "red",
        "border": "3px solid blue" 
    });

    // 후손태그 선택
        // children(): 지정한 태그의 한 단계 아래의 자손태그들을 선택
            // 형제 선택자 사용 시 자손 태그 중에서 하나를 선택하는 것도 가능
        // find(): 지정한 태그의 후손태그를 선택
    $("#div04 > div").children().css({
        "color": "red",
        "border": "3px solid red"
    });

    $("#div04 > div").children("p.first").css({  //클래스first만 변경
        "color": "red",
        "border": "3px dashed blue"
    });

    $("#div05 > div").find("span").css({
        "color": "red",
        "border": "3px solid red"
    });

    // $("#div05 > div").find("*").css({  // * 사용시 모든 후손태그 선택
    //     "color": "red",
    //     "border": "3px solid red"
    // });

    // 형제태그 선택
        // siblings(): 지정한 태그의 모든 형제태그를 선택
        // next(): 지정한 태그의 다음 형제 태그를 선택
        // nextAll(): 지정한 태그의 다음 모든 형제태그를 선택
        // nextUntil(): 2개의 태그를 선택 후 2개의 태그 사이에 있는 모든 형제태그를 선택
        // prev(): 지정한 태그의 이전 태그를 선택
        // prevAll(): 지정한 태그의 이전의 모든 태그를 선택
        // prevUntil(): 2개의 태그를 선택 후 2개의 태그 사이에 있는 모든 형제태그를 선택
    $("#div06 >div > h2").siblings().css({
        "color": "red",
        "border": "3px solid red"
    });

    // siblings의 매개변수로 선택자 사용 시 형제태그들 중에서 매개변수로 지정한 태그만 선택됨
    // $("#div06 >div > h2").siblings("p").css({ //p만 선택
    //     "color": "red",
    //     "border": "3px solid red"
    // });

    $("#divH2").next().css({
        "color": "red",
        "border": "3px solid red"
    });

    $("#div08 > div > span").nextAll().css({
        "color": "red",
        "border": "3px solid red"
    });

    $("#div09 > div > h2").nextUntil("#div09 > div > h6").css({
        "color": "red",
        "border": "3px solid red"
    });

    $("#div10 h2").prev().css({
        "color": "red",
        "border": "3px solid red"
    });

    $("#div11 h2").prevAll().css({
        "color": "red",
        "border": "3px solid red"
    });

    $("#div12 h6").prevUntil("#div12 h2").css({
        "color": "red",
        "border": "3px solid red"
    });
});