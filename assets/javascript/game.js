    //make pc pick a random number 1-100
    $(function() {
        var pcRandomNum = Math.floor(Math.random() * 100) + 1;
        $("#randomNum").text(pcRandomNum);
        
    });
     // console.log(pcRandomNum)
   

//make 4 img's hold a value 1-10
var jewel1 = (Math.floor(Math.random() * 10) + 1);
    console.log(jewel1)

var jewel2 = (Math.floor(Math.random() * 10) + 1);
    console.log(jewel2)

var jewel3 = (Math.floor(Math.random() * 10) + 1);
    console.log(jewel3)

var jewel4 = (Math.floor(Math.random() * 10) + 1);
    console.log(jewel4)

var yourScore = Number(jewel1) + Number(jewel2) + Number(jewel3) + Number(jewel4)
    $("#myScore").text(yourScore);


//var button = document.getElementById("clickme"),
 // count = 0;
//button.onclick = function() {
  //count += 1;
  //button.innerHTML = "Click me: " + count;
//};

//make pcRandomNum show up on randomNum div in html
//pcRandomNum.onload = function pcGuess(){
    //$("#randomNum")= (Math.floor(Math.random() * 100) + 1);
    //}
//console.log(pcRandomNum)

//window.onload = function(){
    //pcGuess(pcRandomNum);
//}
    


//add your score together when one of the 4 imgs are selected 
//make a win alert when your score is equal to the random pc number 
//make a lose alert when your score goes over pc random number
//reset your score when you win or lose
//reset pc's random number
//reset image values