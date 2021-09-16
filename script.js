var num1 = Math.floor(Math.random() * 101);
var num2 = Math.floor(Math.random() * 101);


document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;



function test () {

    var num = parseInt(document.getElementById("num").value);


    if ((num1 + num2) == num) {
        document.getElementById("result1").innerHTML = "RIGHT"
        document.getElementById("result2").innerHTML = "";
    } else {
        document.getElementById("result2").innerHTML = "FAIL";
        document.getElementById("result1").innerHTML = "";
    }
 
}

