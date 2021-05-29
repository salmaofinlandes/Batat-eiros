// INICIO DA PARTE DE CODIGO PROVENIENTE DE canvas2.html

window.onload=function(){
var canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
canvas.width=735;
canvas.height=744;
img = new Image;
ctx.strokeStyle = 'black';

img.onload = start;
img.src = '/home/mateus/Batat-eiros/img/partes_motor_combustao/0.png';
function start() {
ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
canvas.onmousemove = updateLine;
}
function updateLine(e) {
ctx.beginPath();
ctx.moveTo(359,204);
ctx.lineTo(571,82);
ctx.lineTo(571,3);
ctx.lineTo(532,3);
ctx.lineTo(407,70);
ctx.lineTo(400,16);
ctx.lineTo(358,16);
ctx.lineTo(365,94);
ctx.lineTo(308,121);
ctx.lineTo(224,100);
ctx.lineTo(218,127);
ctx.closePath();
//ctx.stroke();
check(getCursorPosition(canvas, event)[0],getCursorPosition(canvas, event)[1],1);

ctx.beginPath();
ctx.moveTo(315,270);
ctx.lineTo(571,131);
ctx.lineTo(541,109);
ctx.lineTo(410,185);
ctx.lineTo(300,234);
ctx.lineTo(174,200);
ctx.lineTo(167,240);
ctx.closePath();
//ctx.stroke();
check(getCursorPosition(canvas, event)[0],getCursorPosition(canvas, event)[1],2);

ctx.beginPath();
ctx.moveTo(111,248);
ctx.lineTo(264,268);
ctx.lineTo(271,295);
ctx.lineTo(252,318);
ctx.lineTo(253,446);
ctx.lineTo(118,392);
ctx.lineTo(86,271);
ctx.closePath();
//ctx.stroke();
check(getCursorPosition(canvas, event)[0],getCursorPosition(canvas, event)[1],3);

ctx.beginPath();
ctx.moveTo(91,462);
ctx.lineTo(180,436);
ctx.lineTo(207,435);
ctx.lineTo(275,467);
ctx.lineTo(308,458);
ctx.lineTo(314,472);
ctx.lineTo(274,504);
ctx.lineTo(275,593);
ctx.lineTo(254,602);
ctx.lineTo(199,579);
ctx.lineTo(157,592);
ctx.lineTo(133,667);
ctx.lineTo(14,637);
ctx.lineTo(6,611);
ctx.closePath();
//ctx.stroke();
check(getCursorPosition(canvas, event)[0],getCursorPosition(canvas, event)[1],"4,5");

ctx.beginPath();
ctx.moveTo(299,510);
ctx.lineTo(350,515);
ctx.lineTo(359,499);
ctx.lineTo(398,522);
ctx.lineTo(397,548);
ctx.lineTo(359,544);
ctx.lineTo(342,530);
ctx.lineTo(299,529);
ctx.closePath();
//ctx.stroke();
check(getCursorPosition(canvas, event)[0],getCursorPosition(canvas, event)[1],6);

ctx.beginPath();
ctx.moveTo(300,542);
ctx.lineTo(384,553);
ctx.lineTo(383,572);
ctx.lineTo(360,574);
ctx.lineTo(296,564);
ctx.closePath();
//ctx.stroke();
check(getCursorPosition(canvas, event)[0],getCursorPosition(canvas, event)[1],7);

ctx.beginPath();
ctx.moveTo(289,571);
ctx.lineTo(349,585);
ctx.lineTo(388,577);
ctx.lineTo(407,544);
ctx.lineTo(529,481);
ctx.lineTo(543,508);
ctx.lineTo(524,543);
ctx.lineTo(500,539);
ctx.lineTo(427,581);
ctx.lineTo(403,615);
ctx.lineTo(376,622);
ctx.lineTo(329,625);
ctx.lineTo(285,591);
ctx.closePath();
//ctx.stroke();
check(getCursorPosition(canvas, event)[0],getCursorPosition(canvas, event)[1],8);

ctx.beginPath();
ctx.moveTo(677,610);
ctx.lineTo(613,562);
ctx.lineTo(613,547);
ctx.lineTo(556,516);
ctx.lineTo(535,547);
ctx.lineTo(493,551);
ctx.lineTo(429,584);
ctx.lineTo(405,621);
ctx.lineTo(307,634);
ctx.lineTo(403,726);
ctx.lineTo(672,622);
ctx.closePath();
//ctx.stroke();
check(getCursorPosition(canvas, event)[0],getCursorPosition(canvas, event)[1],9);

ctx.beginPath();
ctx.moveTo(712,458);
ctx.lineTo(702,469);
ctx.lineTo(639,479);
ctx.lineTo(633,461);
ctx.lineTo(623,449);
ctx.lineTo(597,418);
ctx.lineTo(540,446);
ctx.lineTo(550,479);
ctx.lineTo(579,519);
ctx.lineTo(621,525);
ctx.lineTo(643,499);
ctx.lineTo(733,474);
ctx.lineTo(731,455);
ctx.closePath();
//ctx.stroke();
check(getCursorPosition(canvas, event)[0],getCursorPosition(canvas, event)[1],10);


ctx.beginPath();
ctx.moveTo(731,366);
ctx.lineTo(659,368);
ctx.lineTo(635,390);
ctx.lineTo(635,418);
ctx.lineTo(623,441);
ctx.lineTo(642,458);
ctx.lineTo(642,471);
ctx.lineTo(693,458);
ctx.lineTo(731,385);
ctx.closePath();
//ctx.stroke();
check(getCursorPosition(canvas, event)[0],getCursorPosition(canvas, event)[1],11);


ctx.beginPath();
ctx.moveTo(685,324);
ctx.lineTo(607,339);
ctx.lineTo(629,388);
ctx.lineTo(605,407);
ctx.lineTo(401,514);
ctx.lineTo(316,463);
ctx.lineTo(307,430);
ctx.lineTo(327,381);
ctx.lineTo(355,389);
ctx.lineTo(381,367);
ctx.lineTo(576,257);
ctx.lineTo(609,310);
ctx.lineTo(697,296);
ctx.lineTo(697,319);
ctx.closePath();
//ctx.stroke();
check(getCursorPosition(canvas, event)[0],getCursorPosition(canvas, event)[1],12);

ctx.beginPath();
ctx.moveTo(625,170);
ctx.lineTo(598,198);
ctx.lineTo(591,244);
ctx.lineTo(380,357);
ctx.lineTo(349,380);
ctx.lineTo(312,358);
ctx.lineTo(277,372);
ctx.lineTo(256,324);
ctx.lineTo(297,283);
ctx.lineTo(574,135);
ctx.lineTo(625,161);
ctx.closePath();
//ctx.stroke();
check(getCursorPosition(canvas, event)[0],getCursorPosition(canvas, event)[1],13);


ctx.beginPath();
ctx.moveTo(718,216);
ctx.lineTo(644,290);
ctx.lineTo(615,285);
ctx.lineTo(626,182);
ctx.lineTo(631,160);
ctx.lineTo(610,134);
ctx.lineTo(614,50);
ctx.lineTo(654,25);
ctx.lineTo(718,77);
ctx.closePath();
//ctx.stroke();
check(getCursorPosition(canvas, event)[0],getCursorPosition(canvas, event)[1],14);

}

function check(x,y,n){
if (ctx.isPointInPath(x,y)){
//document.getElementById("p").innerHTML = n;
  img.src = '/home/mateus/Batat-eiros/img/partes_motor_combustao/'+n+'.png';
  updateLegenda(n)
}
}

function getCursorPosition(canvas, event){

const rect = canvas.getBoundingClientRect()
const x = event.clientX - rect.left
const y = event.clientY - rect.top
text = "("+Math.round(x)+","+Math.round(y)+")"

// uncoment for debugging

//document.getElementById("h1").innerHTML = text
//console.log(Math.round(x),Math.round(y))
return [Math.round(x),Math.round(y)]
}

canvas.addEventListener('mousemove', (e) => {

getCursorPosition(canvas, e);


})

function updateLegenda(n){
  var legenda = document.getElementById("motor_legenda")


  if(n==1){legenda.innerHTML = "<p><b>1.Cabeça do motor -</b> É a “tampa” do motor, que fecha a parte de cima dos cilindros, a árvore de cames e as válvulas.</p>"}
  else if(n==2){legenda.innerHTML ="<p><b>2.Árvore de cames -</b> Peça cilíndrica de aço com peças ovais (cames) que acionam as válvulas de admissão e escape. As cames tornam o movimento rotativo das árvores de cames num movimento vertical das válvulas.</p>"}
  else if(n==3){legenda.innerHTML ="<p><b>3.Engrenagem da árvore de cames -</b> Mantém o tempo de cada uma das fases de funcionamento do motor, permitindo com que as válvulas estejam no mesmo curso que os pistões, dado que esta engrenagem está ligada, por meio de uma corrente, a uma engrenagem da cambota.</p>"}
  else if(n=="4,5"){legenda.innerHTML ="<p><b>4.Cobertura da frente -</b> Proteger os componentes essenciais do motor e também serve como suporte para acessórios, como por exemplo a bomba de água.<br><b>5.Bomba de óleo -</b> A sua função é retirar o óleo do cárter e pressurizá-lo no bloco do motor de modo que este seja distribuído pelas diferentes partes do motor.</p>"}
  else if(n==6){legenda.innerHTML ="<p><b>6.Biela -</b> Haste que liga o pistão à cambota.</p>"}
  else if(n==7){legenda.innerHTML ="<p><b>7.Pistão -</b> É uma peça cilíndrica fechada na parte de cima e aberta na parte de baixo. É uma das principais peças do motor de um carro, com a função de comprimir a mistura de ar/combustível para ser queimada na combustão e fazer rodar a cambota.</p>"}
  else if(n==8){legenda.innerHTML ="<p><b>8.Cambota -</b> Eixo metálico, que se encontra em rotação, ao qual as bielas estão conectadas.</p>"}
  else if(n==9){legenda.innerHTML ="<p><b>9.Cárter de óleo -</b> Reservatório de óleo.</p>"}
  else if(n==10){legenda.innerHTML ="<p><b>10.Volante do motor -</b> Serve para manter o equilíbrio das massas do motor nos intervalos das explosões dos cilindros, ou seja, manter o intervalo de tempo entre tempos sempre constante.</p>"}
  else if(n==11){legenda.innerHTML ="<p><b>11.Termostato -</b> Indica a temperatura do óleo e do motor.</p>"}
  else if(n==12){legenda.innerHTML ="<p><b>12.Bloco dos cilindros -</b> É a localização dos pistões e da câmara de explosões.</p>"}
  else if(n==13){legenda.innerHTML ="<p><b>13.Cabeça dos cilindros -</b> Contém a árvore de cames, válvulas, molas de retorno das válvulas, velas de ignição e injetores (para motores de injeção direta). Para além disso, também passa o líquido de refrigeração nos canais localizados nesta peça.</p>"}
  else if(n==14){legenda.innerHTML ="<p><b>14.Mecanismo das válvulas -</b> Este mecanismo é constituído principalmente pelas molas de retorno da válvulas, que permite que a haste da válvula seja puxada para baixo, fazendo com que ela se abra. Esta mola acoplada na haste também faz com que a válvula se feche posteriormente, completando o ciclo. É importante realçar que esse movimento deve ser sincronizado com o tempo em curso.</p>"}



}
}
