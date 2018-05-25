const canvas3 = document.getElementById("experienceCanvas");
const e = canvas3.getContext('2d');

canvas3.width = window.innerWidth;
canvas3.height = $(window).height();

var innerHeight3 = canvas3.height;
var innerWidth3 = canvas3.width;
var mouseX2 = 0;
var mouseY2 = 0;


function initialize3(){
        //Background
    var backgroundGradient = d.createLinearGradient(0,0,0, canvas2.height);
    backgroundGradient.addColorStop(0,'#000000');//"#952fc4"
    backgroundGradient.addColorStop(0.3,'hsl('+hue+', 85%, 6%)');//"#6e2291"
    backgroundGradient.addColorStop(1,"#000000");//"#000000"
    e.fillStyle=backgroundGradient;
    e.fillRect(0,0,innerWidth2,innerHeight2);
}