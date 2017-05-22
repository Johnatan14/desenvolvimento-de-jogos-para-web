$(document).ready(function(){
    var counter = 0;
    var counter2 = 3;    
    var count_down = 0;
    var verificador = setInterval(checker, 500);
    
    $("#timer").text("START");
    $("#timer").click(function(){
        $("#timer").text("3");
        $("#show_score").text(" ");
        gerarCor();
        count_down = setInterval(setup, 1000);
    });
    
    $("#cor1").click(function(){
        verifVitoria(1);
    });
    
    $("#cor2").click(function(){
        verifVitoria(2);
    });
    
    $("#cor3").click(function(){
        verifVitoria(3);
    });
    
    $("#cor4").click(function(){
        verifVitoria(4);
    });
    
    function checker(){
        if(counter == 10){
            document.getElementById("img1").style.margin = "100px -100px";
            document.getElementById("bg").style.backgroundImage = "url(./image/bg_1.gif)";
            document.getElementById("bg").style.backgroundSize = "cover";
            document.getElementById("img1").src="./image/m_1.png";
            document.getElementById("img2").src="./image/m_effect.gif";
        };
        
        if(counter == 20){
            document.getElementById("img1").style.margin="100px -180px";
            document.getElementById("bg").style.backgroundImage = "url(./image/bg_2.gif)";
            document.getElementById("bg").style.backgroundSize = "contain";
            document.getElementById("img1").src="./image/m_2.png";
            document.getElementById("img2").src="./image/m_effect.gif";            
        };
        if(counter == 30){
            document.getElementById("img1").style.margin="100px -160px";
            document.getElementById("bg").style.backgroundImage = "url(./image/bg_3.gif)";
            document.getElementById("bg").style.backgroundSize = "contain";
            document.getElementById("img1").src="./image/m_3.png";
            document.getElementById("img2").src="./image/m_effect.gif";
        };
        if(counter == 40){
            document.getElementById("img1").style.margin="100px -115px";
            document.getElementById("bg").style.backgroundImage = "url(./image/bg_4.gif)";
            document.getElementById("bg").style.backgroundSize = "contain";
            document.getElementById("img1").src="./image/m_4.png";
            document.getElementById("img2").src="./image/m_effect.gif";
        };
        
        if($("#timer").text() < 1){
          reset();
        };
    };
    
    function setup(){   
        counter2--;
        $("#timer").text(counter2.toString());
    };
        
    function verifVitoria(cor){
        var cor;       
        
        if($("#color").text() == "Vermelho" && cor == 1){
            $("#timer").text("3");
            counter2 = 3;
            counter++;
            $("#score").text(counter.toString());
            gerarCor();
        }else if($("#color").text() == "Azul" && cor == 2){
            $("#timer").text("3");
            counter2 = 3;
            counter++;
            $("#score").text(counter.toString());
            gerarCor();
        }else if($("#color").text() == "Verde" && cor == 3){
            $("#timer").text("3");
            counter2 = 3;
            counter++;
            $("#score").text(counter.toString());
            gerarCor();
        }else if($("#color").text() == "Amarelo" && cor == 4){
            $("#timer").text("3");
            counter2 = 3;
            counter++;
            $("#score").text(counter.toString());
            gerarCor();
        }else {
            reset();
        }
    };
    
    function gerarCor(){
        var currentColor = " ";
        var getRandom = Math.floor(Math.random()* 4 + 1);
        color.style.textShadow = "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white";
        $("#color").fadeOut(100);
        $("#color").fadeIn(100);
        
        if(getRandom == 1){
            $("#color").text("Vermelho");
            color.style.color = "red";

            var getRandom2 = Math.floor(Math.random()* 3 + 1);

            if(getRandom2 == 1){
            $("#color").css("color", "blue");
            };

            if(getRandom2 == 2){
            $("#color").css("color", "green");
            };

            if(getRandom2 == 3){
            $("#color").css("color", "#d3c200");
            };

        };

        if(getRandom == 2){
            $("#color").text("Azul");
            currentColor = "blue";

            var getRandom2 = Math.floor(Math.random()* 3 + 1);

            if(getRandom2 == 1){
            $("#color").css("color", "red");
            };

            if(getRandom2 == 2){
            $("#color").css("color", "green");
            };

            if(getRandom2 == 3){
            $("#color").css("color", "#d3c200");
            };

        };

        if(getRandom == 3){
            $("#color").text("Verde");
            currentColor = "green";

            var getRandom2 = Math.floor(Math.random()* 3 + 1);

            if(getRandom2 == 1){
            $("#color").css("color", "blue");
            };

            if(getRandom2 == 2){
            $("#color").css("color", "red");
            };

            if(getRandom2 == 3){
            $("#color").css("color", "#d3c200");
            };

        };

        if(getRandom == 4){
            $("#color").text("Amarelo");
            currentColor = "#d3c200";

            var getRandom2 = Math.floor(Math.random()* 3 + 1);

            if(getRandom2 == 1){
            $("#color").css("color", "blue");
            };

            if(getRandom2 == 2){
            $("#color").css("color", "green");
            };

            if(getRandom2 == 3){
            $("#color").css("color", "red");
            };

        };

    };
    
    function reset(){
        document.getElementById("bg").style.backgroundImage = "url(./image/background_game.gif)";
        document.getElementById("img1").src="./image/1px.png";
        document.getElementById("img2").src="./image/1px.png";
        counter2 = 3;
        var final_score = counter;
        counter = 0;
        clearInterval(count_down);        
        $("#score").text(counter.toString());
        $("#timer").text("RESTART");
        $("#color").text("FIM DE JOGO");
        $("#color").css("color", "white");
        $("#show_score").text(final_score    + " PONTOS");
        color.style.textShadow = "none";
    }
    
})