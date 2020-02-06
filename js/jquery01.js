$("document").ready(function() {
             
    // jquery효과: jquery에서 미리 만들어놓은 css효과
        // hide(): 지정한 html태그를 숨김(display= none과 같음)
            // 속도는 총 동작 시간으로 계산
                // 1/1000초로 계산
        // show(): 숨겨진 html태그를 보여줌(display = block or inline)
        // toggle(): hide()/show()의 기능을 번갈아가며 실행
        // 사용
            // $(선택자).hide(속도, 콜백함수)  //콜백함수 = 익명함수(자동실행되는 함수)
        $("#btnHide").on("click",function() {
            // $("#div01p").hide();    //기본사용
            // $("#div01p").hide(500); //속도추가
            $("#div01p").hide(300,function() { //콜백함수 사용- hide이후에 실행될거
                alert("hide실행 후 콜백함수 실행");
            });
        });
        $("#btnShow").on("click", function() {
            // $("#div01p").show();
            // $("#div01p").show(3000);
            $("#div01p").show(1000,function() {
                alert("show실행 후 콜백함수 실행");
            });
        });

        $("#btnToggle").on("click", function() {
            // $("#div01p").toggle();
            // $("#div01p").toggle(5000);
            $("#div01p").toggle(2000, function() {
                alert("toggle실행 후 콜백함수 실행");
            });
        });

        // 슬라이드 효과
            // slideDown(): 지정한 html요소를 아래로 슬라이드
            // slideUp(): 지정요소를 위로 슬라이드
            // slideToggle(): 지정요소를 아래/위로 번갈아 실행
                // 사용
                // $(선택자).slideDown(속도, 콜백);
                // 속도는 slow, fast, 숫자(1/1000 초)
        $("#div02flip1").on("click", function() {
            $("#div02panel1").slideDown(500, function() {
                alert("slidedown실행 후 콜백함수 동작");
            });
        });

        $("#div02flip2").on("click", function() {
            $("#div02panel2").slideUp("fast");
        });

        $("#div02flip3").on("click", function() {
            $("#div02panel3").slideToggle("slow");
        });

        // 애니메이션 효과
            // animate():사용자 정의 애니메이션을 작성할 수 있음
                // 사용
                // $(선택자).animate({옵션}, 속도, 콜백);
                    // 옵션: css속성 입력, object형을 사용하기 때문에 css속성을 여러개 동시에 사용할 수 있음
                        // 컬러 관련css속성은 jQuery.Color플러그인을 추가 설치 후 링크 연결하기
                        // 현재 적용된 값에 증가/감소값을 넣어서 상대값으로 표현이 가능
                    // 속도 1/1000초
                    // 콜백:animate()가 실행된 이후 동작할 작업
                    // 애니메이션을 연속으로 여러개 실행가능
                        // animate()를 여러개 입력 시 입력된 순서에 따라 차례대로 실행됨
        $("#div03btn1").on("click", function() {
                // $("#div03div").animate({left: "250px"});

                // $("#div03div").animate({
                //     left: "400px", //여러가지 옵션 동시에 적용하기
                //     height: "50px",
                //     backgroundColor: jQuery.Color("green")}, 2000,function() {
                //     alert("animate사용 후 콜백함수 동작");
                // });

                // $("#div03div").animate({left: "+=250px"}); //상대값 적용하기 -증감

                // $("#div03div").animate({left: "400px"}); //애니베이션 연속실행 1번방식
                // $("#div03div").animate({width: "400px"});
                // $("#div03div").animate({height: "400px"});
                // $("#div03div").animate({backgroundColor: jQuery.Color("green")});

            var div = $("#div03div"); //애니메이션 연속실행 2번방식 -(속도빠름)
            div.animate({left: "400px"});
            div.animate({width: "400px"});
            div.animate({height: "400px"});
            div.animate({backgroundColor: jQuery.Color("green")});
        });
                // div.animate({left: "400px"}).animate({width: "400px"}).animate({height: "400px"}).animate({backgroundColor: jQuery.Color("green")}); //연속실행 jquery chaining을 이용한 3번방식
        
        // jquery애니메이션 효과 멈추기
            // stop(): 애니메이션이나 jquery효과를 끝나기 전에 중지
                // $(선택자).stop(stopAll, goToEnd)
                    // stopAll: 기본값 false, 연속된 효과가 있을 경우 모두 중지(true)
                    // goToEnd: 기본값 false, 해당 효과의 끝으로 이동(true)
                    // 애니메이션 효과를 여러개 사용했을 경우 stop() 기본형을 사용 시 현재 동작중인 애니메이션 효과만 중지시키고 나머지 애니메이션은 자동으로 시작됨
        $("#div04btn1").on("click", function() {
            $("#div04panel").stop();
        });

        $("#div04btn2").on("click", function() {
            $("#div04div1").stop();
        });

        $("#div04btn3").on("click", function() {
            $("#div04div2").stop();
        });

        $("#div04flip").on("click", function() {
            $("#div04panel").slideDown(5000);
        });

        $("#div04div1").on("click", function() {
            $("#div04div1").fadeOut(5000);
        });

        $("#div04div2").on("click", function() {
            $("#div04div2").animate({left: "500px"}, 5000);
        });
        
        $("#div04btn4").on("click", function() {
            // $("#div04div3").stop(); //기본형 - 처음애니메이션만 멈추고 그다음꺼 실행됨
            // $("#div04div3").stop(false, true); //애니메이션 끝 부분으로 이동
            $("#div04div3").stop(true, false); //애니메이션 여러개 있을 시 모두 정지
            // $("#div04div3").stop(true, true);
        });
        
        $("#div04div3").on("click", function() {
            var div = $("#div04div3")
            div.animate({left: "500px"}, 5000);
            div.animate({height: "500px"}, 5000);
            div.animate({width: "500px"}, 5000);
        });

        // jquery 콜백함수: 제이쿼리 함수를 사용 시 해당 함수가 완전히 실행완료가 된 후 자동으로 호출되는 함수
        $("#div05btn1").on("click", function() {
            $("#div05 > h3").hide("slow");  
            alert("콜백함수 미사용");
        });
        
        $("#div05btn2").on("click", function() {
            $("#div05 > h3").hide("slow", function() {
                alert("콜백함수 사용");
            });
        });

        // jquery 체인: jquery함수 사용 시 여러개의 함수를 한번에 연결해서 입력하는 방식
            // 체인기능 사용 시 선택자를 통해서 2번이상 같은 html요소를 찾을 필요가 없음
            // $(선택자).함수1().함수2()......
        $("#div06btn").on("click", function() {
            $("#div06 > h3")
            .css("color", "red")
            .slideUp(2000)
            .slideDown(2000)
            .fadeOut(2000)
            .fadeIn(2000);
        });

    });        