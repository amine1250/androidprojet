document.write("this is my click:");

var x=15;
var y =17;
function myclick(){
  
  var num1=parseInt(document.getElementById("myINPUT")[0].value);
  
var num2=parseInt(document.getElementsByTagName("TEXTAREA")[0].value); 


var sum=num1+num2;

document.getElementById("myId").innerHTML=sum;
  
}