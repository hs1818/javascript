$(document).ready(function() {
    
    //문1)
    function div1(score) {
        var level= "";
        if(score>90) {
            if(score>95) {
                level = "A+";
            }
            else {
                level = "A";
            }
        }
        else if(score> 80) {
            if(score>85) {
                level = "B+";
            }
            else {
                level = "B";
            }
        }
        else if(score> 70) {
            if(score>75) {
                level = "C+";
            }
            else {
                level = "C";
            }
        }
        else if(score> 60) {
            if(score>65) {
                level = "D+";
            }
            else {
                level = "D";
            }
        }
        else {
            level = "F";
        }
        // print(score,level);   1. print함수로 저장한 값 불러옴
        return level;  // 2. return
    };
    function print(sc1, lv1) {
        alert("너의 점수는"+sc1+"이고 등급은"+lv1);
    }
    $("#div01Btn1").on("click", function() {
        var a = $("#div01Input").val();
        a = Number(a);
        // div1(a);   1. div1(a)자체를 가져오는데 print함수로 값 출력하는게 있으니까 값이 나옴
        var bb = div1(a); //2. return   반환을 했기떄문에 div1값을 print에 사용할 수 있음(bb)
        print(a,bb);        //2. return
    });

    console.log("-----------------------------------")
    //문2
    
    // var DBS = [
    //     {id: "testid1", pw: "textpw1"},
    //     {id: "testid2", pw: "textpw2"},  //1 -데이터가 많을때 받아왔을떄
    //     {id: "testid3", pw: "textpw3"}
    // ];   


    // 저장된 데이터(DB를 연결해 데이터를 불러와야 하지만 여기는 없어서 전역변수 사용)vs불러온 데이터
    var DB = {id: "testid", pw: "textpw"};   // 2 -원래꺼
    
    function loginCheck(id, pw) {
        result = false;  // 기본적으로 false
        
        // for(var i =0; i< DBS.length; i++) {
        //     if(id == DBS[i].id && pw == DBS[i].pw) {    //1 - 데이터가 많을때 받아왔을떄
        //         result = true;
        //     }
        // };
        if(id == DB.id) {
            if( pw == DB.pw) {          // 2 -원래꺼
                result = true;   
            }
        }
        // if(id == DB.id && pw == DB.pw) {       //2-1 - 번방법
        //     result = true
        // }   
        return result;
    };
    
    function printLogin(state) {
        if(state==true) {
            alert("로그인이 성공하였습니다");
        }
        else {
            alert("ID 혹은 PW가 틀렸습니다");
        }
    }

    $("#div02BtnLogin").on("click", function() {
        var sid = $("#div02UserId").val();
        var xpw = $("#div02UserPw").val();
        
        var outcome = loginCheck(sid, xpw);
        printLogin(outcome);
        
    });

    console.log("-----------------------------------")

    function mix(a,b) {
        var c= a+b;
        var d = a-b;
        var f = a*b;
        var g = a/b;
        return [c,d,f,g];
    }

    $("#div03BtnCal").on("click", function() {
        var num1 = $("#div03InsNum1").val();
        num1 =Number(num1)
        var num2 = $("#div03InsNum2").val();
        num2 =Number(num2)

        var result = mix(num1, num2);
        alert(result[0]);

    });
});