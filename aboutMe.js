const canvas2 = document.getElementById("aboutMeCanvas");
const d = canvas2.getContext('2d');

canvas2.width = window.innerWidth;
canvas2.height = $(window).height();

var innerHeight2 = canvas2.height;
var innerWidth2 = canvas2.width;
var mouseX2 = 0;
var mouseY2 = 0;
var aboutMeTextArray = []
aboutMeFillInText();

canvas2.addEventListener('mousemove',function(event){
    mouseX2 = event.clientX;
    mouseY2 = event.clientY;
//    console.log(mouseX + " " + mouseX2);
//    console.log("Mouse Y " + mouseY2);
    
    for (var i = 0; i < aboutMeTextArray.length;i++){
        var textObj = aboutMeTextArray[i];
        if (aboutMeTextArray[aboutMeTextArray.length-1].textY > mouseY2){
            textObj.color = (mouseY2/textObj.textY) * 255
        }else{
            textObj.color = ((innerHeight2 - mouseY2)/textObj.textY) * 255
        }
    }

});



function initialize2(){
    
    //Background
    var backgroundGradient = d.createLinearGradient(0,0,0, canvas2.height);
    backgroundGradient.addColorStop(0,'hsl('+hue+', 85%, 11%)');//"#952fc4"
    backgroundGradient.addColorStop(0.3,'hsl('+hue+', 85%, 6%)');//"#6e2291"
    backgroundGradient.addColorStop(1,"#000000");//"#000000"
    d.fillStyle=backgroundGradient;
    d.fillRect(0,0,innerWidth2,innerHeight2);
    
//    //About Me - Text
    d.fillStyle='#FFFFFF';//#110433
    d.shadowBlur = 20;
    d.shadowOffsetX = 0;
    d.shadowOffsetY = 0;
    d.shadowColor = '#FFFFFF';//#7a68a8
    d.font = "small-caps 2em Orbitron sans-serif";
    var aboutMe = "< About Me >";
    d.fillText(aboutMe, innerWidth2/2 - (d.measureText(aboutMe).width/2), innerHeight2/6);
            d.fillStyle='rgb(100, 100,100)';//#110433

    //For Comets    
    for (var i = 0; i < aboutMeTextArray.length; i++){
        aboutMeTextArray[i].draw();
    }
}
//initialize2();


