function save1ag(){
    var checkbox1ag = document.getElementById('day1ag');
    localStorage.setItem('day1ag', checkbox1ag.checked);
}
function save2ag(){
    var checkbox2ag = document.getElementById('day2ag');
    localStorage.setItem('day2ag', checkbox2ag.checked);
}
function save3ag(){
    var checkbox3ag = document.getElementById('day3ag');
    localStorage.setItem('day3ag', checkbox3ag.checked);
}
function save4ag(){
    var checkbox4ag = document.getElementById('day4ag');
    localStorage.setItem('day4ag', checkbox4ag.checked);
}
function save5ag(){
    var checkbox5ag = document.getElementById('day5ag');
    localStorage.setItem('day5ag', checkbox5ag.checked);
}
function save6ag(){
    var checkbox6ag = document.getElementById('day6ag');
    localStorage.setItem('day6ag', checkbox6ag.checked);
}
function save7ag(){
    var checkbox7ag = document.getElementById('day7ag');
    localStorage.setItem('day7ag', checkbox7ag.checked);
}

function loadag(){
    var checked1ag = JSON.parse(localStorage.getItem('day1ag'));
    document.getElementById("day1ag").checked = checked1ag;

    var checked2ag = JSON.parse(localStorage.getItem('day2ag'));
    document.getElementById("day2ag").checked = checked2ag;

    var checked3ag = JSON.parse(localStorage.getItem('day3ag'));
    document.getElementById("day3ag").checked = checked3ag;

    var checked4ag = JSON.parse(localStorage.getItem('day4ag'));
    document.getElementById("day4ag").checked = checked4ag;

    var checked5ag = JSON.parse(localStorage.getItem('day5ag'));
    document.getElementById("day5ag").checked = checked5ag;

    var checked6ag = JSON.parse(localStorage.getItem('day6ag'));
    document.getElementById("day6ag").checked = checked6ag;

    var checked7ag = JSON.parse(localStorage.getItem('day7ag'));
    document.getElementById("day7ag").checked = checked7ag;

}

var isAllCheckag = false;
function togglecheckboxesag(cbag) {
  var cbagarray = document.getElementsByName(cbag);
  for(var i = 0; i < cbagarray.length; i++){
    cbagarray[i].checked = !isAllCheckag
  }
  isAllCheckag = !isAllCheckag;
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

function resetag()  {
  save1ag();
  save2ag();
  save3ag();
  save4ag();
  save5ag();
  save6ag();
  save7ag();
}

loadag();