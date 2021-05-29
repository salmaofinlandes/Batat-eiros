
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


function imageEffects(opacity, grayscale){
  var i;
  for(i=0; i< document.getElementsByTagName("img").length; i++){
    if (document.getElementsByTagName("img")[i].style.display == "block"){
      document.getElementsByTagName("img")[i].style.opacity = opacity;
      document.getElementsByTagName("img")[i].style.filter = "grayscale("+ grayscale.toString() +"%)";
    }
    else{continue;}
  }
}

function mouseOver(){
  document.getElementById("button").style.opacity = 1;
  imageEffects(0.7,70);
}

function mouseOut(){
  document.getElementById("button").style.opacity = 0.5;
  imageEffects(1,0);
}

function verMais(){
  if (document.getElementsByClassName("mySlides")[0].style.display=="block"){changeEletrico()}
  else if (document.getElementsByClassName("mySlides")[1].style.display=="block"){changeCombustao()}
  else if (document.getElementsByClassName("mySlides")[2].style.display=="block"){changeHidrogenio()}
  document.getElementById("motores").scrollIntoView();
}

function changeDirection(newdir){
  if (newdir==-1){
    for (i=0; i< document.getElementsByClassName("mySlides").length; i++){
      document.getElementsByClassName("mySlides")[i].classList.remove("w3-animate-right");
      document.getElementsByClassName("mySlides")[i].classList.add("w3-animate-left");
    }
}
  else if (newdir==1) {
    for (i=0; i< document.getElementsByClassName("mySlides").length; i++){
      document.getElementsByClassName("mySlides")[i].classList.remove("w3-animate-left");
      document.getElementsByClassName("mySlides")[i].classList.add("w3-animate-right");
  }
}
}


// MOTOR SECTION

var eletrico = document.getElementsByClassName("motor-btn")[0]
var combustao = document.getElementsByClassName("motor-btn")[1]
var hidrogenio = document.getElementsByClassName("motor-btn")[2]

eletrico.style.opacity = 0.4;
hidrogenio.style.opacity = 0.4;


function changeEletrico(){
  eletrico.style.opacity=1;
  combustao.style.opacity=0.4;
  hidrogenio.style.opacity=0.4;
  document.getElementById("hidrogenio").style.display="none";
  document.getElementById("canvas-container").style.display="none";
  document.getElementById("eletrico").style.display="block";
  document.getElementById("motores").scrollIntoView();

}

function changeCombustao(){

  combustao.style.opacity=1;
  eletrico.style.opacity=0.4;
  hidrogenio.style.opacity=0.4;
  document.getElementById("hidrogenio").style.display="none";
  document.getElementById("eletrico").style.display="none";
  document.getElementById("canvas-container").style.display="table";
  document.getElementById("motores").scrollIntoView();
}

function changeHidrogenio(){

  hidrogenio.style.opacity=1;
  combustao.style.opacity=0.4;
  eletrico.style.opacity=0.4;
  document.getElementById("eletrico").style.display="none";
  document.getElementById("canvas-container").style.display="none";
  document.getElementById("hidrogenio").style.display="block";
  document.getElementById("motores").scrollIntoView();

}

eletrico.onclick = function(){changeEletrico()}
combustao.onclick = function(){changeCombustao()}
hidrogenio.onclick = function(){changeHidrogenio()}

// END MOTOR SECTION
