
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
