var currentStreak = 0;
var bestStreak = 0;

var currentstr = document.getElementById('currentstreak');
currentstr.innerHTML = currentStreak;

var beststr = document.getElementById('beststreak');
beststr.innerHTML = bestStreak;

var countopen= 0;
var lan1 =0
var lan2 = 0;
var lan3 = 0;
function XulyNut(nut) {
    currentStreak +=1;
    currentstr.innerHTML = currentStreak;

    countopen += 1;
    var myArray = ['1', '2', '3'];
    var ketqua = myArray[Math.floor(Math.random() * myArray.length)];

    if(countopen == 1 && ketqua== '1')
    {
        lan1= 1;
        myArray = ['2', '3'];
    }
    if(countopen == 1 && ketqua== '2')
    {
        lan1= 2;
        myArray = ['1', '3'];
    }
    if(countopen == 1 && ketqua== '3')
    {
        lan1= 3;
        myArray = ['1', '2'];
    }
    if(countopen == 2 && ketqua== '1')
    {
        lan2= 1;
        myArray = ['2', '3'];
    }
    if(countopen == 2 && ketqua== '2')
    {
        lan2= 2;
        myArray = ['1', '3'];
    }
    if(countopen == 2 && ketqua== '3')
    {
        lan2= 3;
        myArray = ['1', '2'];
    }
    if(countopen == 3 && ketqua== '1')
    {
        lan3= 1;
        myArray = ['2', '3'];
    }
    if(countopen == 3 && ketqua== '2')
    {
        lan3= 2;
        myArray = ['1', '3'];
    }
    if(countopen == 3 && ketqua== '3')
    {
        lan3= 3;
        myArray = ['1', '2'];
    }
    if(lan1 == '1'){
        document.getElementById(nut).src = "images/beach.svg";
    }
    if(lan1 == '2'){
        document.getElementById(nut).src = "images/space.svg";
    }
    if(lan1 == '3'){
        document.getElementById(nut).src = "images/robot.svg";
    }
    if(lan2 == '1'){
        document.getElementById(nut).src = "images/beach.svg";
    }
    if(lan2 == '2'){
        document.getElementById(nut).src = "images/space.svg";
    }
    if(lan2 == '3'){
        document.getElementById(nut).src = "images/robot.svg";
    }
    if(lan3 == '1'){
        document.getElementById(nut).src = "images/beach.svg";
    }
    if(lan3 == '2'){
        document.getElementById(nut).src = "images/space.svg";
    }
    if(lan3 == '3'){
        document.getElementById(nut).src = "images/robot.svg";
    }

    console.log(ketqua)