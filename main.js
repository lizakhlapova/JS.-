function resul1(){
    var multi_1, multi_2, result;
    multi_1  =  document.getElementById('n11').value;
    multi_2  =  document.getElementById('n12').value;

    if(multi_1>multi_2){
        result=multi_1;
    }
    else{
        result=multi_2;
    }
    document.getElementById('result_multi_1').innerHTML = result;
}
function resul2(){
    var multi_1, multi_2, multi_3, result;
    multi_1  =  document.getElementById('n21').value;
    multi_2  =  document.getElementById('n22').value;
    multi_3  =  document.getElementById('n23').value;
    

    if(multi_1>multi_2 && multi_1>multi_3){
        result=multi_1;
    }
    else if (multi_2>multi_3 && multi_2>multi_1){
        result=multi_2;
    }
    else{
        result = multi_3
    }
    document.getElementById('result_multi_2').innerHTML = result;
}

function resul3(){
    var multi_1, multi_2, result;
    multi_1  =  document.getElementById('x').value;
    multi_2  =  document.getElementById('y').value;

    if(multi_1!=0 && multi_2!=0){
        if (multi_1>0 && multi_2>0){
            result='Первая четверть';
        }
        else if (multi_1<0 && multi_2>0){
            result='Вторая четверть'
        }
        else if (multi_1<0 && multi_2<0){
            result='Третья четверть'
        }
        else {
            result='Четвертая четверть'
        }
    }
    else{
        result='Начало координатной оси';
    }
    document.getElementById('result_multi_3').innerHTML = result;
}
function resul4(){
    var multi_1, multi_2, result_1, result_2;
    multi_1  =  document.getElementById('k').value;
    multi_2  =  document.getElementById('l').value;

    if (parseInt(multi_1)==multi_1 && parseInt(multi_2)==multi_2){
        if(multi_1!=multi_2){
            if(multi_1>multi_2){
                multi_2=multi_1;
            }
            else{
                multi_1=multi_2;
            }
        }
        else{
            multi_1=0;
            multi_2=0;
        }
    }
    else if (parseInt(multi_1)!=multi_1 && parseInt(multi_2)==multi_2){
        multi_1='Не целое число';
    }
    else if (parseInt(multi_1)==multi_1 && parseInt(multi_2)!=multi_2){
        multi_2='Не целое число';
    }
    else{
        multi_1='Не целое число';
        multi_2='Не целое число';
    }

    result_1=multi_1
    result_2=multi_2
    document.getElementById('result_multi_4_1').innerHTML = result_1;
    document.getElementById('result_multi_4_2').innerHTML = result_2;
}
function resul5(){
    var multi_1, result;
    multi_1  =  document.getElementById('p').value;

    if (parseInt(multi_1)==multi_1){
        if(multi_1>=10 && multi_1<100){
            if(multi_1%2==0){
                result='Двузначное четное число';
            }
            else{
                result='Двузначное нечетное число';
            }
        }
        else{
            if(multi_1%2==0){
                result='Недвузначное четное число';
            }
            else{
                result='Недвузначное нечетное число';
            }
        }
    }
    else{
        result='Не целое число'
    }
    document.getElementById('result_multi_5').innerHTML = result;
}

function resul6(){
    var number, result;
    number  =  document.getElementById('p1').value;
    if (number>0){
        if (number%2==0 && number%3==0){
            result='Число р кратно 2 и 3 ';
        }
        else if (number%2==0 && number%5!=0){
            result='Число р кратно 2 и не кратно 5';
        }
        else if (number<3){
            result='Число р Є (0;3)';
        }
        else{
            result='Ошибка';
        }
    }
    else if (number>=-2 && number<=0){
        result='Число р [-2;0]';
    }
    else {
        result='Ошибка';
    }
    document.getElementById('result_multi_6').innerHTML = result;
}

function resul8(){
    var number, result;
    number  =  document.getElementById('a').value;
    if (number>=100 && number<1000){
        if ((number-number%100)/100==number%10){
            result='Трехзначное число полиндром';
        }
        else{
            result='Трехзначное число не полиндром';
        }
    }
    else {
        result='Ошибка';
    }
    document.getElementById('result_multi_8').innerHTML = result;
}
function resul9(){
    var multi_1, multi_2, result;
    multi_1  =  document.getElementById('hour').value;
    multi_2  =  document.getElementById('minute').value;
    if (multi_1>=0 && multi_1<24 && multi_2>=0 && multi_2<60){
        if (multi_1>6 && multi_1<12){
            result='Доброе утро'
        }
        else if (multi_1>=12 && multi_1<18){
            result='Добрый день';
        }
        else if (multi_1>=18 && multi_1<24){
            result='Добрый вечер';
        }
        else{
            result='Спокойной ночи';
        }
    }
    else {
        result='Ошибка'
    }
    document.getElementById('result_multi_9').innerHTML = result;
}
function resul10(){
    var number, result;
    number  =  document.getElementById('num').value;
    if (number%10==5){
        result='Так как число заканчивается на 5, оно делится на 5';
        }
    else if (number%10==0){
        result='Так как число заканчивается на 0, оно делится на 5';
    }
    else {
        result='Число не делится на 5';
    }
    document.getElementById('result_multi_10').innerHTML = result;
}

function resul11(){
    var a, b, c, d, result;
    a  =  document.getElementById('x_1').value;
    b  =  document.getElementById('y_1').value;
    c  =  document.getElementById('z_1').value;
    d  =  document.getElementById('a_1').value;

    if(a<d && b<d){
        result='Кирпичь пройдет';
    }
    else if (a<d && c<d){
        result='Кирпичь пройдет';
    }
    else if (b<d && c<d){
        result='Кирпичь пройдет';
    }
    else if ((a>=d && b>=d) || (a>=d && c>=d) || (b>=d && c>=d)){
        result ='Кирпичь не пройдет';
    }
    document.getElementById('result_multi_11').innerHTML = result;
}

function resul12(){
    var a, b, result;
    a  =  document.getElementById('x_2').value;
    b  =  document.getElementById('y_2').value;

    if(a>0){
        if (a>b){
            result=a;
        }
        else {
            result=b;
        }
    }
    else if (a<=0) {
        if (a<b){
            result=a;
        }
        else {
            result=b;
        }
    }
    document.getElementById('result_multi_12').innerHTML = result;
}

function resul13(){
    var a, b, c, d, result_a, result_b;
    a  =  document.getElementById('x_3').value;
    b  =  document.getElementById('y_3').value;
    
    c=a;
    d=b;

    if (a>b){
        b=c/2+d/2;
        a=c*d;
        result_a=a;
        result_b=b;
    }
    else {
        a=c/2+d/2;
        b=c*d;
        result_b=b;
        result_a=a;
        }
    document.getElementById('result_multi_13_1').innerHTML = result_a;
    document.getElementById('result_multi_13_2').innerHTML = result_b;
}

function resul14(){
    var a, b, result;
    a  =  document.getElementById('x_4').value;
    b  =  document.getElementById('y_4').value;

    if (a%2==0){
        if (a>b){
            result=a;
        }
        else{
            result=b;
        }
    }
    else {
        result=a/2+b/2
        }
    document.getElementById('result_multi_14').innerHTML = result;
}

function resul15(){
    var a, b, result_ed, result_ost;
    a  =  document.getElementById('p_15').value;
    b  =  document.getElementById('t_15').value;

    if (a>b){
        result_ed=a%10;
        result_ost=result_ed%3;
    }
    else {
        result_ed=b%10;
        result_ost=result_ed%3;
    }
    document.getElementById('result_multi_15_1').innerHTML = result_ed;
    document.getElementById('result_multi_15_2').innerHTML = result_ost;    
}