// Initial Setup
const canvas = document.getElementById("landingPageCanvas");
const c = canvas.getContext('2d',{ alpha: false });

canvas.width = window.innerWidth;
canvas.height = $(window).height();

var innerHeight = canvas.height - (canvas.height-(canvas.height*0.8));
var innerWidth = canvas.width;

var cometArray = [new Comet(),new Comet(),new Comet()]
var waveArray = [new Wave(),new Wave(),new Wave(),new Wave(),new Wave(),new Wave(),new Wave(),new Wave(),new Wave(),new Wave()]
var starArray = []
for (var i = 0 ; i < 10; i++){
    starArray.push(new Circle(2 + (Math.random() * innerWidth),2 + (Math.random() * (innerHeight - innerHeight / 2)),0.1,1));
}
//Moon
//var moon = new Circle(innerWidth/2,innerHeight/4,20,1);
var buttonArray = [];//document.getElementsByClassName("homePageButton");
createButton();

var mouseX = 0;
var mouseY = 0;


function initialize(){
    c.clearRect(0,0,innerWidth,innerHeight);

    generateBackground();
    
    
//    startTime();
    
    //Moon
//    moon.circular();
    
    //For Waves
    for (var i = 0; i < waveArray.length; i++){
        waveArray[i].update();
    }
    
    //For Comets    
    for (var i = 0; i < cometArray.length; i++){
        cometArray[i].update();
    }
    
    //For Stars
    for (var i = 0; i < starArray.length; i++){
        starArray[i].glow();
    }   
    
//    //For Buttons
//    for (var i = 0; i < buttonArray.length; i++){
//        buttonArray[i].draw();
//    } 
//    
//    
//    //Intro Text
//    c.fillStyle='#FFFFFF';//#110433
//    c.shadowBlur = 20;
//    c.shadowOffsetX = 0;
//    c.shadowOffsetY = 0;
//    c.shadowColor = '#FFFFFF';//#7a68a8
//    c.font = "small-caps 2em Orbitron sans-serif";
//    var introText = "< Jayesh Ranjan >";
//    c.fillText(introText, innerWidth/2 - (c.measureText(introText).width/2), innerHeight/2.2);
    
    c.beginPath();

}



function animate(){
    requestAnimationFrame(animate);
    

    initialize();
    initialize2();
    initialize3();


    
    
}
initialize();


animate();























//EVENT LISTENERS
document.addEventListener('onload',function(){
    location.reload();
    window.location.href = "#landingPageCanvas";
});

window.addEventListener('resize',function(){
    location.reload();
    console.log(canvas.width + " " + canvas.height);
});


canvas.addEventListener('mousemove',function(event){
    mouseX = event.clientX;
    mouseY = event.clientY;
//    console.log(mouseX + " " + mouseY);
    
    for (var i = 0; i < buttonArray.length; i++){
        var buttonX = buttonArray[i].buttonX;
        var buttonWidth = buttonArray[i].buttonWidth
        var buttonY = buttonArray[i].buttonY;
        var buttonHeight = buttonArray[i].buttonHeight;
        
        if (((mouseX > buttonX) && (mouseX < (buttonX+buttonWidth))) && ((mouseY > buttonY) && (mouseY < (buttonY+buttonHeight)))){
            document.body.style.cursor = "pointer";
            break;
        }else{
             document.body.style.cursor = "auto";
        }
    } 
});

canvas.addEventListener('click',function(event){
    for (var i = 0; i < buttonArray.length; i++){
        var buttonX = buttonArray[i].buttonX;
        var buttonWidth = buttonArray[i].buttonWidth
        var buttonY = buttonArray[i].buttonY;
        var buttonHeight = buttonArray[i].buttonHeight;
        
        if (((mouseX > buttonX) && (mouseX < (buttonX+buttonWidth))) && ((mouseY > buttonY) && (mouseY < (buttonY+buttonHeight)))){
            if (buttonArray[i].aboutMeText == "About Me"){
                document.body.style.cursor = "auto";
//                window.location.href = "#aboutMeCanvas";
                window.scroll({
                  top: canvas.height, 
                  behavior: 'smooth' 
                });
            }
            break;
        }
    } 
    
});

