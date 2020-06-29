function save1(){
    var checkbox1 = document.getElementById('day1');
    localStorage.setItem('day1', checkbox1.checked);
}
function save2(){
    var checkbox2 = document.getElementById('day2');
    localStorage.setItem('day2', checkbox2.checked);
}
function save3(){
    var checkbox3 = document.getElementById('day3');
    localStorage.setItem('day3', checkbox3.checked);
}
function save4(){
    var checkbox4 = document.getElementById('day4');
    localStorage.setItem('day4', checkbox4.checked);
}
function save5(){
    var checkbox5 = document.getElementById('day5');
    localStorage.setItem('day5', checkbox5.checked);
}
function save6(){
    var checkbox6 = document.getElementById('day6');
    localStorage.setItem('day6', checkbox6.checked);
}
function save11(){
    var checkbox11 = document.getElementById('day11');
    localStorage.setItem('day11', checkbox11.checked);
}
function save22(){
    var checkbox22 = document.getElementById('day22');
    localStorage.setItem('day22', checkbox22.checked);
}
function save33(){
    var checkbox33 = document.getElementById('day33');
    localStorage.setItem('day33', checkbox33.checked);
}
function save44(){
    var checkbox44 = document.getElementById('day44');
    localStorage.setItem('day44', checkbox44.checked);
}
function save55(){
    var checkbox55 = document.getElementById('day55');
    localStorage.setItem('day55', checkbox55.checked);
}
function save66(){
    var checkbox66 = document.getElementById('day66');
    localStorage.setItem('day66', checkbox66.checked);
}
function save111(){
    var checkbox111 = document.getElementById('day111');
    localStorage.setItem('day111', checkbox111.checked);
}
function save222(){
    var checkbox222 = document.getElementById('day222');
    localStorage.setItem('day222', checkbox222.checked);
}
function save333(){
    var checkbox333 = document.getElementById('day333');
    localStorage.setItem('day333', checkbox333.checked);
}
function save444(){
    var checkbox444 = document.getElementById('day444');
    localStorage.setItem('day444', checkbox444.checked);
}
function save555(){
    var checkbox555 = document.getElementById('day555');
    localStorage.setItem('day555', checkbox555.checked);
}
function save666(){
    var checkbox666 = document.getElementById('day666');
    localStorage.setItem('day666', checkbox666.checked);
}


function load(){
    var checked1 = JSON.parse(localStorage.getItem('day1'));
    document.getElementById("day1").checked = checked1;

    var checked2 = JSON.parse(localStorage.getItem('day2'));
    document.getElementById("day2").checked = checked2;

    var checked3 = JSON.parse(localStorage.getItem('day3'));
    document.getElementById("day3").checked = checked3;

    var checked4 = JSON.parse(localStorage.getItem('day4'));
    document.getElementById("day4").checked = checked4;

    var checked5 = JSON.parse(localStorage.getItem('day5'));
    document.getElementById("day5").checked = checked5;

    var checked6 = JSON.parse(localStorage.getItem('day6'));
    document.getElementById("day6").checked = checked6;

    var checked11 = JSON.parse(localStorage.getItem('day11'));
    document.getElementById("day11").checked = checked11;

    var checked22 = JSON.parse(localStorage.getItem('day22'));
    document.getElementById("day22").checked = checked22;

    var checked33 = JSON.parse(localStorage.getItem('day33'));
    document.getElementById("day33").checked = checked33;

    var checked44 = JSON.parse(localStorage.getItem('day44'));
    document.getElementById("day44").checked = checked44;

    var checked55 = JSON.parse(localStorage.getItem('day55'));
    document.getElementById("day55").checked = checked55;

    var checked66 = JSON.parse(localStorage.getItem('day66'));
    document.getElementById("day66").checked = checked66;

    var checked111 = JSON.parse(localStorage.getItem('day111'));
    document.getElementById("day111").checked = checked111;

    var checked222 = JSON.parse(localStorage.getItem('day222'));
    document.getElementById("day222").checked = checked222;

    var checked333 = JSON.parse(localStorage.getItem('day333'));
    document.getElementById("day333").checked = checked333;

    var checked444 = JSON.parse(localStorage.getItem('day444'));
    document.getElementById("day444").checked = checked444;

    var checked555 = JSON.parse(localStorage.getItem('day555'));
    document.getElementById("day555").checked = checked555;

    var checked666 = JSON.parse(localStorage.getItem('day666'));
    document.getElementById("day666").checked = checked666;
}

var isAllCheck = false;
function togglecheckboxes1(cbn){

    var cbnarray = document.getElementsByName(cbn);
    for(var i = 0; i < cbnarray.length; i++){

        cbnarray[i].checked = !isAllCheck
}   
isAllCheck = !isAllCheck;   
}

var isAllCheck2 = false;
function togglecheckboxes2(cba){

    var cbaarray = document.getElementsByName(cba);
    for(var i = 0; i < cbaarray.length; i++){

        cbaarray[i].checked = !isAllCheck2
}   
isAllCheck2 = !isAllCheck2  
}

var isAllCheck3 = false;
function togglecheckboxes3(cbh){

    var cbharray = document.getElementsByName(cbh);
    for(var i = 0; i < cbharray.length; i++){

        cbharray[i].checked = !isAllCheck3
}   
isAllCheck3 = !isAllCheck3  
}

function reset1(){
  save1();
  save2();
  save3();
  save4();
  save5();
  save6();
}

function reset2(){
  save11();
  save22();
  save33();
  save44();
  save55();
  save66();
}

function reset3(){
  save111();
  save222();
  save333();
  save444();
  save555();
  save666();
}

load();