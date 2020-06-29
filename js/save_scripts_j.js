function save1j(){
    var checkbox1j = document.getElementById('day1j');
    localStorage.setItem('day1j', checkbox1j.checked);
}
function save2j(){
    var checkbox2j = document.getElementById('day2j');
    localStorage.setItem('day2j', checkbox2j.checked);
}
function save3j(){
    var checkbox3j = document.getElementById('day3j');
    localStorage.setItem('day3j', checkbox3j.checked);
}
function save4j(){
    var checkbox4j = document.getElementById('day4j');
    localStorage.setItem('day4j', checkbox4j.checked);
}
function save5j(){
    var checkbox5j = document.getElementById('day5j');
    localStorage.setItem('day5j', checkbox5j.checked);
}
function save6j(){
    var checkbox6j = document.getElementById('day6j');
    localStorage.setItem('day6j', checkbox6j.checked);
}
function save7j(){
    var checkbox7j = document.getElementById('day7j');
    localStorage.setItem('day7j', checkbox7j.checked);
}
function save8j(){
    var checkbox8j = document.getElementById('day8j');
    localStorage.setItem('day8j', checkbox8j.checked);
}
function save9j(){
    var checkbox9j = document.getElementById('day9j');
    localStorage.setItem('day9j', checkbox9j.checked);
}
function save10j(){
    var checkbox10j = document.getElementById('day10j');
    localStorage.setItem('day10j', checkbox10j.checked);
}
function save11j(){
    var checkbox11j = document.getElementById('day11j');
    localStorage.setItem('day11j', checkbox11j.checked);
}
function save12j(){
    var checkbox12j = document.getElementById('day12j');
    localStorage.setItem('day12j', checkbox12j.checked);
}
function save13j(){
    var checkbox13j = document.getElementById('day13j');
    localStorage.setItem('day13j', checkbox13j.checked);
}
function save14j(){
    var checkbox14j = document.getElementById('day14j');
    localStorage.setItem('day14j', checkbox14j.checked);
}

function loadj(){
    var checked1j = JSON.parse(localStorage.getItem('day1j'));
    document.getElementById("day1j").checked = checked1j;

    var checked2j = JSON.parse(localStorage.getItem('day2j'));
    document.getElementById("day2j").checked = checked2j;

    var checked3j = JSON.parse(localStorage.getItem('day3j'));
    document.getElementById("day3j").checked = checked3j;

    var checked4j = JSON.parse(localStorage.getItem('day4j'));
    document.getElementById("day4j").checked = checked4j;

    var checked5j = JSON.parse(localStorage.getItem('day5j'));
    document.getElementById("day5j").checked = checked5j;

    var checked6j = JSON.parse(localStorage.getItem('day6j'));
    document.getElementById("day6j").checked = checked6j;

    var checked7j = JSON.parse(localStorage.getItem('day7j'));
    document.getElementById("day7j").checked = checked7j;

    var checked8j = JSON.parse(localStorage.getItem('day8j'));
    document.getElementById("day8j").checked = checked8j;

    var checked9j = JSON.parse(localStorage.getItem('day9j'));
    document.getElementById("day9j").checked = checked9j;

    var checked10j = JSON.parse(localStorage.getItem('day10j'));
    document.getElementById("day10j").checked = checked10j;

    var checked11j = JSON.parse(localStorage.getItem('day11j'));
    document.getElementById("day11j").checked = checked11j;

    var checked12j = JSON.parse(localStorage.getItem('day12j'));
    document.getElementById("day12j").checked = checked12j;

    var checked13j = JSON.parse(localStorage.getItem('day13j'));
    document.getElementById("day13j").checked = checked13j;

    var checked14j = JSON.parse(localStorage.getItem('day14j'));
    document.getElementById("day14j").checked = checked14j;
}

var isAllCheckj = false;
function togglecheckboxesj(cbj) {
  var cbjarray = document.getElementsByName(cbj);
  for(var i = 0; i < cbjarray.length; i++){
    cbjarray[i].checked = !isAllCheckj
  }
  isAllCheckj = !isAllCheckj;
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

function resetj()  {
  save1j();
  save2j();
  save3j();
  save4j();
  save5j();
  save6j();
  save7j();
  save8j();
  save9j();
  save10j();
  save11j();
  save12j();
  save13j();
  save14j();
}

loadj();