var num1 = Math.floor(Math.random() * 101);
var num2 = Math.floor(Math.random() * 101);


document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;



function enter() {

    var num = parseInt(document.getElementById("num").value);

    if ((num1 + num2) == num) {
        document.getElementById("result").style.opacity = 1;
        document.getElementById("result").innerHTML = "<img src='img/correct.png'>";
        document.getElementById("result-text").innerHTML = "Correct";
        document.getElementById("result-text").style.color = "#0eb10e";
    } else {
        document.getElementById("result").innerHTML = "<img src='img/fail.png'>";
        document.getElementById("result").style.opacity = 1;
        document.getElementById("result-text").innerHTML = "Fail";
        document.getElementById("result-text").style.color = "red";
    }

}

