  function sal1(id) {
        var el = document.getElementById(id);
        var link = document.getElementById('ces');
        if (el.style.display == "block") {
          el.style.display = "none";   
        } else {
            el.style.display = "block";} }


var s=0, c1=0, c2=0, c3=0, c4=0, c5=0, c6=0, c7=0,
c8=0, c9=0, c10=0, c11=0, c12=0, c13=0, c14=0,
c15=0, c16=0; 
  

var w1_div = document.getElementById("w1");
function buy1(){

w1.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel1()" align="center" style="background:#ffff;"/>';


knop1.innerHTML='<input type="button" value="+" onclick="bo1() "/> <input type="button" value="-" onclick="me1()"/>';
naim1.innerHTML='Салат цезарь с креветкой';
cen1.innerHTML=c1+=300;
kol1.innerHTML=k1=1;
sum1();
}

function cancel1(){
w1.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy1()"align="center" style="background:#ffff;" />';
knop1.innerHTML='';
naim1.innerHTML='';
cen1.innerHTML=c1=0;
kol1.innerHTML=k1=0;
cen1.innerHTML='';
kol1.innerHTML='';
sum1();
}

function bo1(){
kol1.innerHTML= k1+=1;
cen1.innerHTML=c1+=300;
sum1();
}
function me1(){
	kol1.innerHTML= k1-=1;
cen1.innerHTML=c1-=300;
if (k1<=0){k1=0; c1=0;
kol1.innerHTML='0'; cen1.innerHTML='0';}
sum1();
}


var w2_div = document.getElementById("w2");
function buy2(){

w2.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel2()" align="center" style="background:#ffff;"/>';
knop2.innerHTML='<input type="button" value="+" onclick="bo2() "/> <input type="button" value="-" onclick="me2()"/>';
naim2.innerHTML='Салат цезарь с курицей';
cen2.innerHTML=c2+=250;
kol2.innerHTML=k2=1;
sum1();
}

function cancel2(){
w2.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy2()"align="center" style="background:#ffff;" />';
knop2.innerHTML='';
naim2.innerHTML='';
cen2.innerHTML=c2=0;
kol2.innerHTML=k2=0;
cen2.innerHTML='';
kol2.innerHTML='';
sum1();
}
function bo2(){
kol2.innerHTML= k2+=1;
cen2.innerHTML=c2+=250;
sum1();
}
function me2(){
	kol2.innerHTML= k2-=1;
cen2.innerHTML=c2-=250;
if (k2<=0){k2=0; c2=0;
kol2.innerHTML='0'; cen2.innerHTML='0';}
sum1();
}

var w3_div = document.getElementById("w3");
function buy3(){

w3.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel3()" align="center" style="background:#ffff;"/>';
knop3.innerHTML='<input type="button" value="+" onclick="bo3() "/> <input type="button" value="-" onclick="me3()"/>';
naim3.innerHTML='Салат греческий';
cen3.innerHTML=c3+=250;
kol3.innerHTML=k3=1;
sum1();
}

function cancel3(){
w3.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy3()"align="center" style="background:#ffff;" />';
knop3.innerHTML='';
naim3.innerHTML='';
cen3.innerHTML=c3=0;
kol3.innerHTML=k3=0;
cen3.innerHTML='';
kol3.innerHTML='';
sum1();
}
function bo3(){
kol3.innerHTML= k3+=1;
cen3.innerHTML=c3+=250;
sum1();
}
function me3(){
	kol3.innerHTML= k3-=1;
cen3.innerHTML=c3-=250;
if (k3<=0){k3=0; c3=0;
kol3.innerHTML='0'; cen3.innerHTML='0';}
sum1();
}

var w4_div = document.getElementById("w4");
function buy4(){

w4.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel4()" align="center" style="background:#ffff;"/>';
knop4.innerHTML='<input type="button" value="+" onclick="bo4() "/> <input type="button" value="-" onclick="me4()"/>';
naim4.innerHTML='Бутерброд с лососем и авокадо';
cen4.innerHTML=c4+=150;
kol4.innerHTML=k4=1;
sum1();
}

function cancel4(){
w4.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy4()"align="center" style="background:#ffff;" />';
knop4.innerHTML='';
naim4.innerHTML='';
cen4.innerHTML=c4=0;
kol4.innerHTML=k4=0;
cen4.innerHTML='';
kol4.innerHTML='';
sum1();
}
function bo4(){
kol4.innerHTML= k4+=1;
cen4.innerHTML=c4+=150;
sum1();
}
function me4(){
	kol4.innerHTML= k4-=1;
cen4.innerHTML=c4-=150;
if (k4<=0){k4=0; c4=0;
kol4.innerHTML='0'; cen4.innerHTML='0';}
sum1();
}

var w5_div = document.getElementById("w5");
function buy5(){

w5.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel5()" align="center" style="background:#ffff;"/>';
knop5.innerHTML='<input type="button" value="+" onclick="bo5() "/> <input type="button" value="-" onclick="me5()"/>';
naim5.innerHTML='Бутерброд с яйцом и ветчиной';
cen5.innerHTML=c5+=100;
kol5.innerHTML=k5=1;
sum1();
}

function cancel5(){
w5.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy5()"align="center" style="background:#ffff;" />';
knop5.innerHTML='';
naim5.innerHTML='';
cen5.innerHTML=c5=0;
kol5.innerHTML=k5=0;
cen5.innerHTML='';
kol5.innerHTML='';
sum1();
}
function bo5(){
kol5.innerHTML= k5+=1;
cen5.innerHTML=c5+=100;
sum1();
}
function me5(){
	kol5.innerHTML= k5-=1;
cen5.innerHTML=c5-=100;
if (k5<=0){k5=0; c5=0;
kol5.innerHTML='0'; cen5.innerHTML='0';}
sum1();
}

var w6_div = document.getElementById("w6");
function buy6(){

w6.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel6()" align="center" style="background:#ffff;"/>';
knop6.innerHTML='<input type="button" value="+" onclick="bo6() "/> <input type="button" value="-" onclick="me6()"/>';
naim6.innerHTML='Торт "Красный бархат"';
cen6.innerHTML=c6+=110;
kol6.innerHTML=k6=1;
sum1();
}

function cancel6(){
w6.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy6()"align="center" style="background:#ffff;" />';
knop6.innerHTML='';naim6.innerHTML='';
cen6.innerHTML=c6=0;kol6.innerHTML=k6=0;
cen6.innerHTML='';kol6.innerHTML='';sum1();
}
function bo6(){
kol6.innerHTML= k6+=1;cen6.innerHTML=c6+=110;
sum1();
}
function me6(){
kol6.innerHTML= k6-=1; cen6.innerHTML=c6-=110;
if (k6<=0){k6=0; c6=0; kol6.innerHTML='0'; cen6.innerHTML='0';}
sum1();
}

var w7_div = document.getElementById("w7");
function buy7(){

w7.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel7()" align="center" style="background:#ffff;"/>';
knop7.innerHTML='<input type="button" value="+" onclick="bo7() "/> <input type="button" value="-" onclick="me7()"/>';
naim7.innerHTML='Торт "Наполеон"';
cen7.innerHTML=c7+=110;
kol7.innerHTML=k7=1;
sum1();
}
function cancel7(){
w7.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy7()"align="center" style="background:#ffff;" />';
knop7.innerHTML=''; naim7.innerHTML='';
cen7.innerHTML=c7=0; kol7.innerHTML=k7=0;
cen7.innerHTML=''; kol7.innerHTML='';sum1();
}
function bo7(){
kol7.innerHTML= k7+=1; cen7.innerHTML=c7+=110;
sum1();
}
function me7(){
kol7.innerHTML= k7-=1; cen7.innerHTML=c7-=110;
if (k7<=0){k7=0; c7=0; kol7.innerHTML='0'; cen7.innerHTML='0';}
sum1();
}

var w8_div = document.getElementById("w8");
function buy8(){

w8.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel8()" align="center" style="background:#ffff;"/>';
knop8.innerHTML='<input type="button" value="+" onclick="bo8() "/> <input type="button" value="-" onclick="me8()"/>';
naim8.innerHTML='Чизкейк клубничный';
cen8.innerHTML=c8+=120;
kol8.innerHTML=k8=1;
sum1();
}
function cancel8(){
w8.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy8()"align="center" style="background:#ffff;" />';
knop8.innerHTML=''; naim8.innerHTML='';
cen8.innerHTML=c8=0; kol8.innerHTML=k8=0;
cen8.innerHTML=''; kol8.innerHTML='';sum1();
}
function bo8(){
kol8.innerHTML= k8+=1; cen8.innerHTML=c8+=120;
sum1();
}
function me8(){
kol8.innerHTML= k8-=1; cen8.innerHTML=c8-=120;
if (k8<=0){k8=0; c8=0; kol8.innerHTML='0'; cen8.innerHTML='0';}
sum1();
}

var w9_div = document.getElementById("w9");
function buy9(){

w9.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel9()" align="center" style="background:#ffff;"/>';
knop9.innerHTML='<input type="button" value="+" onclick="bo9() "/> <input type="button" value="-" onclick="me9()"/>';
naim9.innerHTML='Чизкейк карамельный';
cen9.innerHTML=c9+=120;
kol9.innerHTML=k9=1;
sum1();
}
function cancel9(){
w9.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy9()"align="center" style="background:#ffff;" />';
knop9.innerHTML=''; naim9.innerHTML='';
cen9.innerHTML=c9=0; kol9.innerHTML=k9=0;
cen9.innerHTML=''; kol9.innerHTML='';sum1();
}
function bo9(){
kol9.innerHTML= k9+=1; cen9.innerHTML=c9+=120;
sum1();
}
function me9(){
kol9.innerHTML= k9-=1; cen9.innerHTML=c9-=120;
if (k9<=0){k9=0; c9=0; kol9.innerHTML='0'; cen9.innerHTML='0';}
sum1();
}

var w10_div = document.getElementById("w10");
function buy10(){

w10.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel10()" align="center" style="background:#ffff;"/>';
knop10.innerHTML='<input type="button" value="+" onclick="bo10() "/> <input type="button" value="-" onclick="me10()"/>';
naim10.innerHTML='Эклер карамельный';
cen10.innerHTML=c10+=80;
kol10.innerHTML=k10=1;
sum1();
}
function cancel10(){
w10.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy10()"align="center" style="background:#ffff;" />';
knop10.innerHTML=''; naim10.innerHTML='';
cen10.innerHTML=c10=0; kol10.innerHTML=k10=0;
cen10.innerHTML=''; kol10.innerHTML='';sum1();
}
function bo10(){
kol10.innerHTML= k10+=1; cen10.innerHTML=c10+=80;
sum1();
}
function me10(){
kol10.innerHTML= k10-=1; cen10.innerHTML=c10-=80;
if (k10<=0){k10=0; c10=0; kol10.innerHTML='0'; cen10.innerHTML='0';}
sum1();
}

var w11_div = document.getElementById("w11");
function buy11(){

w11.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel11()" align="center" style="background:#ffff;"/>';
knop11.innerHTML='<input type="button" value="+" onclick="bo11() "/> <input type="button" value="-" onclick="me11()"/>';
naim11.innerHTML='Эклер малиновый';
cen11.innerHTML=c11+=80;
kol11.innerHTML=k11=1;
sum1();
}
function cancel11(){
w11.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy11()"align="center" style="background:#ffff;" />';
knop11.innerHTML=''; naim11.innerHTML='';
cen11.innerHTML=c11=0; kol11.innerHTML=k11=0;
cen11.innerHTML=''; kol11.innerHTML='';sum1();
}
function bo11(){
kol11.innerHTML= k11+=1; cen11.innerHTML=c11+=80;
sum1();
}
function me11(){
kol11.innerHTML= k11-=1; cen11.innerHTML=c11-=80;
if (k11<=0){k11=0; c11=0; kol11.innerHTML='0'; cen11.innerHTML='0';}
sum1();
}

var w12_div = document.getElementById("w12");
function buy12(){

w12.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel12()" align="center" style="background:#ffff;"/>';
knop12.innerHTML='<input type="button" value="+" onclick="bo12() "/> <input type="button" value="-" onclick="me12()"/>';
naim12.innerHTML='Эклер фисташковый';
cen12.innerHTML=c12+=80;
kol12.innerHTML=k12=1;
sum1();
}
function cancel12(){
w12.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy12()"align="center" style="background:#ffff;" />';
knop12.innerHTML=''; naim12.innerHTML='';
cen12.innerHTML=c12=0; kol12.innerHTML=k12=0;
cen12.innerHTML=''; kol12.innerHTML='';sum1();
}
function bo12(){
kol12.innerHTML= k12+=1; cen12.innerHTML=c12+=80;
sum1();
}
function me12(){
kol12.innerHTML= k12-=1; cen12.innerHTML=c12-=80;
if (k12<=0){k12=0; c12=0; kol12.innerHTML='0'; cen12.innerHTML='0';}
sum1();
}

var w13_div = document.getElementById("w13");
function buy13(){

w13.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel13()" align="center" style="background:#ffff;"/>';
knop13.innerHTML='<input type="button" value="+" onclick="bo13() "/> <input type="button" value="-" onclick="me13()"/>';
naim13.innerHTML='Эклер шоколадный';
cen13.innerHTML=c13+=80;
kol13.innerHTML=k13=1;
sum1();
}
function cancel13(){
w13.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy13()"align="center" style="background:#ffff;" />';
knop13.innerHTML=''; naim13.innerHTML='';
cen13.innerHTML=c13=0; kol13.innerHTML=k13=0;
cen13.innerHTML=''; kol13.innerHTML='';sum1();
}
function bo13(){
kol13.innerHTML= k13+=1; cen13.innerHTML=c13+=80;
sum1();
}
function me13(){
kol13.innerHTML= k13-=1; cen13.innerHTML=c13-=80;
if (k13<=0){k13=0; c13=0; kol13.innerHTML='0'; cen13.innerHTML='0';}
sum1();
}

var w14_div = document.getElementById("w14");
function buy14(){

w14.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel14()" align="center" style="background:#ffff;"/>';
knop14.innerHTML='<input type="button" value="+" onclick="bo14() "/> <input type="button" value="-" onclick="me14()"/>';
naim14.innerHTML='Американо';
cen14.innerHTML=c14+=200;
kol14.innerHTML=k14=1;
sum1();
}
function cancel14(){
w14.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy14()"align="center" style="background:#ffff;" />';
knop14.innerHTML=''; naim14.innerHTML='';
cen14.innerHTML=c14=0; kol14.innerHTML=k14=0;
cen14.innerHTML=''; kol14.innerHTML='';sum1();
}
function bo14(){
kol14.innerHTML= k14+=1; cen14.innerHTML=c14+=200;
sum1();
}
function me14(){
kol14.innerHTML= k14-=1; cen14.innerHTML=c14-=200;
if (k14<=0){k14=0; c14=0; kol14.innerHTML='0'; cen14.innerHTML='0';}
sum1();
}

var w15_div = document.getElementById("w15");
function buy15(){

w15.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel15()" align="center" style="background:#ffff;"/>';
knop15.innerHTML='<input type="button" value="+" onclick="bo15() "/> <input type="button" value="-" onclick="me15()"/>';
naim15.innerHTML='Капучино';
cen15.innerHTML=c15+=200;
kol15.innerHTML=k15=1;
sum1();
}
function cancel15(){
w15.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy15()"align="center" style="background:#ffff;" />';
knop15.innerHTML=''; naim15.innerHTML='';
cen15.innerHTML=c15=0; kol15.innerHTML=k15=0;
cen15.innerHTML=''; kol15.innerHTML='';sum1();
}
function bo15(){
kol15.innerHTML= k15+=1; cen15.innerHTML=c15+=200;
sum1();
}
function me15(){
kol15.innerHTML= k15-=1; cen15.innerHTML=c15-=200;
if (k15<=0){k15=0; c15=0; kol15.innerHTML='0'; cen15.innerHTML='0';}
sum1();
}

var w16_div = document.getElementById("w16");
function buy16(){

w16.innerHTML = '<br> <input class="btn" type="button" value="Отменить покупку" onclick="cancel16()" align="center" style="background:#ffff;"/>';
knop16.innerHTML='<input type="button" value="+" style="btn" onclick="bo16() "/> <input type="button" style="btn" value="-" onclick="me16()"/>';
naim16.innerHTML='Латте';
cen16.innerHTML=c16+=200;
kol16.innerHTML=k16=1;
sum1();
}
function cancel16(){
w16.innerHTML = '<br> <input class="btn" type="button" value="Купить" onclick="buy16()"align="center" style="background:#ffff;" />';
knop16.innerHTML=''; naim16.innerHTML='';
cen16.innerHTML=c16=0; kol16.innerHTML=k16=0;
cen16.innerHTML=''; kol16.innerHTML='';sum1();
}
function bo16(){
kol16.innerHTML= k16+=1; cen16.innerHTML=c16+=200;
sum1();
}
function me16(){
kol16.innerHTML= k16-=1; cen16.innerHTML=c16-=200;
if (k16<=0){k16=0; c16=0; kol16.innerHTML='0'; cen16.innerHTML='0';}
sum1();
}
function sum1(){

	sum.innerHTML=s=c1+c2+c3+c4+c5+c6+c7+c8+c9+c10+c11+c12+c13+c14+c15+c16;
}



function zak(){
if (s==0) {
alert('Вы ничего не заказали');

return false
}

if (document.forms[0].name.value == "") {
alert('Пожалуйста, введите Ваше имя');

return false
}

if (document.forms[1].tel.value == "") {
alert('Пожалуйста, введите номер телефона');

return false
}
if (document.forms[2].adres.value == "") {
alert('Пожалуйста, введите Ваш адрес');

return false
}
alert('Ваш заказ принят!');
location.reload();
return true;
}	

