
var slideIndex = 2;
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

// COMPARACOES SECTION

var eletcomb = document.getElementsByClassName("comparacoes-btn")[0]
var hidroelet = document.getElementsByClassName("comparacoes-btn")[1]
var combhidro = document.getElementsByClassName("comparacoes-btn")[2]

document.getElementById("eletrico/combustao").style.display = "none";
document.getElementById("combustao/hidrogenio").style.display = "none";

eletcomb.style.opacity = 0.4;
combhidro.style.opacity = 0.4;

eletcomb.onclick = function(){changeEletComb()}
hidroelet.onclick = function(){changeHidroElet()}
combhidro.onclick = function(){changeCombHidro()}



function changeEletComb(){
  eletcomb.style.opacity=1;
  hidroelet.style.opacity=0.4;
  combhidro.style.opacity=0.4;
  document.getElementById("eletrico/combustao").style.display="block";
  document.getElementById("hidrogenio/eletrico").style.display="none";
  document.getElementById("combustao/hidrogenio").style.display="none";
  document.getElementById("comparacoes").scrollIntoView();
}

function changeHidroElet(){
  eletcomb.style.opacity=0.4;
  hidroelet.style.opacity=1;
  combhidro.style.opacity=0.4;
  document.getElementById("eletrico/combustao").style.display="none";
  document.getElementById("hidrogenio/eletrico").style.display="block";
  document.getElementById("combustao/hidrogenio").style.display="none";
  document.getElementById("comparacoes").scrollIntoView();
}
function changeCombHidro(){
  eletcomb.style.opacity=0.4;
  hidroelet.style.opacity=0.4;
  combhidro.style.opacity=1;
  document.getElementById("eletrico/combustao").style.display="none";
  document.getElementById("hidrogenio/eletrico").style.display="none";
  document.getElementById("combustao/hidrogenio").style.display="block";
  document.getElementById("comparacoes").scrollIntoView();
}



// MODELOS SECTION

var litio = document.getElementsByClassName("modelos-btn")[0]
var batata = document.getElementsByClassName("modelos-btn")[1]
var nosso_motor = document.getElementsByClassName("modelos-btn")[2]

document.getElementById("litio").style.display = "none";
document.getElementById("nosso_motor").style.display = "none";

litio.style.opacity = 0.4;
nosso_motor.style.opacity = 0.4;

litio.onclick = function(){changeLitio()}
batata.onclick = function(){changeBatata()}
nosso_motor.onclick = function(){changeNossoMotor()}



function changeLitio(){
  litio.style.opacity=1;
  batata.style.opacity=0.4;
  nosso_motor.style.opacity=0.4;
  document.getElementById("nosso_motor").style.display="none";
  document.getElementById("batata").style.display="none";
  document.getElementById("litio").style.display="block";
  document.getElementById("modelos").scrollIntoView();
}

function changeBatata(){
  litio.style.opacity=0.4;
  batata.style.opacity=1;
  nosso_motor.style.opacity=0.4;
  document.getElementById("nosso_motor").style.display="none";
  document.getElementById("batata").style.display="block";
  document.getElementById("litio").style.display="none";
  document.getElementById("modelos").scrollIntoView();
}
function changeNossoMotor(){
  litio.style.opacity=0.4;
  batata.style.opacity=0.4;
  nosso_motor.style.opacity=1;
  document.getElementById("nosso_motor").style.display="block";
  document.getElementById("batata").style.display="none";
  document.getElementById("litio").style.display="none";
  document.getElementById("modelos").scrollIntoView();
}
