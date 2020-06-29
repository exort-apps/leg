function save1tw(){
    var checkbox1tw = document.getElementById('day1tw');
    localStorage.setItem('day1tw', checkbox1tw.checked);
}
function save2tw(){
    var checkbox2tw = document.getElementById('day2tw');
    localStorage.setItem('day2tw', checkbox2tw.checked);
}
function save3tw(){
    var checkbox3tw = document.getElementById('day3tw');
    localStorage.setItem('day3tw', checkbox3tw.checked);
}
function save4tw(){
    var checkbox4tw = document.getElementById('day4tw');
    localStorage.setItem('day4tw', checkbox4tw.checked);
}
function save5tw(){
    var checkbox5tw = document.getElementById('day5tw');
    localStorage.setItem('day5tw', checkbox5tw.checked);
}
function save6tw(){
    var checkbox6tw = document.getElementById('day6tw');
    localStorage.setItem('day6tw', checkbox6tw.checked);
}
function save7tw(){
    var checkbox7tw = document.getElementById('day7tw');
    localStorage.setItem('day7tw', checkbox7tw.checked);
}
function save8tw(){
    var checkbox8tw = document.getElementById('day8tw');
    localStorage.setItem('day8tw', checkbox8tw.checked);
}
function save9tw(){
    var checkbox9tw = document.getElementById('day9tw');
    localStorage.setItem('day9tw', checkbox9tw.checked);
}
function save10tw(){
    var checkbox10tw = document.getElementById('day10tw');
    localStorage.setItem('day10tw', checkbox10tw.checked);
}
function save11tw(){
    var checkbox11tw = document.getElementById('day11tw');
    localStorage.setItem('day11tw', checkbox11tw.checked);
}
function save12tw(){
    var checkbox12tw = document.getElementById('day12tw');
    localStorage.setItem('day12tw', checkbox12tw.checked);
}
function save13tw(){
    var checkbox13tw = document.getElementById('day13tw');
    localStorage.setItem('day13tw', checkbox13tw.checked);
}
function save14tw(){
    var checkbox14tw = document.getElementById('day14tw');
    localStorage.setItem('day14tw', checkbox14tw.checked);
}

function loadtw(){
    var checked1tw = JSON.parse(localStorage.getItem('day1tw'));
    document.getElementById("day1tw").checked = checked1tw;

    var checked2tw = JSON.parse(localStorage.getItem('day2tw'));
    document.getElementById("day2tw").checked = checked2tw;

    var checked3tw = JSON.parse(localStorage.getItem('day3tw'));
    document.getElementById("day3tw").checked = checked3tw;

    var checked4tw = JSON.parse(localStorage.getItem('day4tw'));
    document.getElementById("day4tw").checked = checked4tw;

    var checked5tw = JSON.parse(localStorage.getItem('day5tw'));
    document.getElementById("day5tw").checked = checked5tw;

    var checked6tw = JSON.parse(localStorage.getItem('day6tw'));
    document.getElementById("day6tw").checked = checked6tw;

    var checked7tw = JSON.parse(localStorage.getItem('day7tw'));
    document.getElementById("day7tw").checked = checked7tw;

    var checked8tw = JSON.parse(localStorage.getItem('day8tw'));
    document.getElementById("day8tw").checked = checked8tw;

    var checked9tw = JSON.parse(localStorage.getItem('day9tw'));
    document.getElementById("day9tw").checked = checked9tw;

    var checked10tw = JSON.parse(localStorage.getItem('day10tw'));
    document.getElementById("day10tw").checked = checked10tw;

    var checked11tw = JSON.parse(localStorage.getItem('day11tw'));
    document.getElementById("day11tw").checked = checked11tw;

    var checked12tw = JSON.parse(localStorage.getItem('day12tw'));
    document.getElementById("day12tw").checked = checked12tw;

    var checked13tw = JSON.parse(localStorage.getItem('day13tw'));
    document.getElementById("day13tw").checked = checked13tw;

    var checked14tw = JSON.parse(localStorage.getItem('day14tw'));
    document.getElementById("day14tw").checked = checked14tw;
}

var isAllCheckTW = false;
function togglecheckboxestw(cbtw) {
  var cbtwarray = document.getElementsByName(cbtw);
  for(var i = 0; i < cbtwarray.length; i++){
    cbtwarray[i].checked = !isAllCheckTW
  }
  isAllCheckTW = !isAllCheckTW;
}

/*
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
*/

function resettw()  {
  save1tw();
  save2tw();
  save3tw();
  save4tw();
  save5tw();
  save6tw();
  save7tw();
  save8tw();
  save9tw();
  save10tw();
  save11tw();
  save12tw();
  save13tw();
  save14tw();
}

loadtw();