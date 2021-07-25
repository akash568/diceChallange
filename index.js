var myNumber = Math.floor(Math.random() * 6 + 1);
var yourNumber = Math.floor(Math.random() * 6 + 1);
function randomis(){
  var a=document.querySelector(".dice .img1");
  var b=document.querySelector(".dice .img2");
  var d=document.querySelector("h1");
  a.setAttribute("src", "images/dice"+myNumber+".png");
  b.setAttribute("src","images/dice"+yourNumber+".png");
  if(myNumber>yourNumber){
    d.innerHTML="Player 1 Won The Match 🏆";
  }
  else if(myNumber==yourNumber){
    d.innerHTML="Its a tie";
  }
  else{
    d.innerHTML="Player 2 Won The Match 🏆";
  }
  d.style.fontSize="3rem";
}



