const canvas3 = document.getElementById("experienceCanvas");
const e = canvas3.getContext('2d',{ alpha: false });

canvas3.width = window.innerWidth;
canvas3.height = $(window).height();

var innerHeight3 = canvas3.height;
var innerWidth3 = canvas3.width;
var mouseX3 = 0;
var mouseY3 = 0;
var stage1 = new Stage((innerWidth3/3) - (300),innerHeight3-(innerHeight3/10),1);
var stage2 = new Stage(2*(innerWidth3/3) - (200),innerHeight3-(innerHeight3/10),1);
var stage3 = new Stage(3*(innerWidth3/3) - (200),innerHeight3-(innerHeight3/10),1);

var tempCanvas = document.getElementById("exp1");
ExperienceCanvas(100,100,tempCanvas);

function ExperienceCanvas(x,y,canvas){
    this.x = x;
    this.y = y;
    this.c = canvas.getContext('2d');
    
    canvas.width = 200;//Hardcoded
    canvas.height = window.innerHeight/3;//Hardcoded
    
    e.clearRect(0,innerHeight3,innerWidth3,innerHeight3-(innerHeight3/10));
    e.shadowBlur = 0;
    e.fillStyle = 'rgba(0,0,0,0.05)';
    e.fillRect(0,0,innerWidth3,innerHeight3);
    
    //Other Background
    e.clearRect(0,0,innerWidth3,innerHeight3/2);
    e.shadowBlur = 0;
    e.fillStyle = 'rgba(0,0,0,1)';
    e.fillRect(0,0,innerWidth3,innerHeight3/2);

}



canvas3.addEventListener('mousemove',function(event){
    mouseX3 = event.clientX;
    mouseY3 = event.clientY;
    
    console.log()
})

function Experience(x,y,text){
    this.x = x;
    this.y = y;
    this.text = text;
    
    this.draw = function(){     
    e.fillStyle='hsl('+hue+', 100%, 50%)';//#110433
    e.shadowBlur = 00;
    e.shadowOffsetX = 0;
    e.shadowOffsetY = 0;
    e.shadowColor = '#FFFFFF';//#7a68a8
    e.font = "small-caps 2em Orbitron sans-serif";
    var experiences = "Teaching Assistant";
    e.fillText(experiences, x  + (400/2) - (e.measureText(experiences).width/2),y+100);

    e.font = "small-caps 1.5em Orbitron sans-serif";
    e.fillStyle='#FFFFFF';//#110433
        
    
    experiences = "Grading Exams";
    e.fillText(experiences, x  + (400/2) - (e.measureText(experiences).width/2),y+150);
        
    experiences = "Proctoring Exams";
    e.fillText(experiences, x  + (400/2) - (e.measureText(experiences).width/2),y+180);

    experiences = "Writing Assignments";
    e.fillText(experiences, x  + (400/2) - (e.measureText(experiences).width/2),y+210);


    experiences = "Holding Office Hours";
    e.fillText(experiences, x  + (400/2) - (e.measureText(experiences).width/2),y+240);
        
    experiences = "Holding Lab Sessions";
    e.fillText(experiences, x  + (400/2) - (e.measureText(experiences).width/2),y+270);
        
    }
}
var ta = new Experience(20,280);
function initialize3(){
    //Stage
    e.clearRect(0,innerHeight3,innerWidth3,innerHeight3-(innerHeight3/10));
    e.shadowBlur = 0;
    e.fillStyle = 'rgba(0,0,0,0.05)';
    e.fillRect(0,0,innerWidth3,innerHeight3);
    
    //Other Background
    e.clearRect(0,0,innerWidth3,innerHeight3/2);
    e.shadowBlur = 0;
    e.fillStyle = 'rgba(0,0,0,1)';
    e.fillRect(0,0,innerWidth3,innerHeight3/2);
    
    //Experience - Text
    e.fillStyle='#FFFFFF';//#110433
    e.shadowBlur = 20;
    e.shadowOffsetX = 0;
    e.shadowOffsetY = 0;
    e.shadowColor = '#FFFFFF';//#7a68a8
    e.font = "small-caps 2em Orbitron sans-serif";
    var experiences = "< Experience >";
    e.fillText(experiences, innerWidth3/2 - (e.measureText(experiences).width/2), innerHeight3/6);
//    
    
    stage1.update();
    stage2.update();
    stage3.update();
    e.beginPath();

}


initialize3();