const expCanvas1 = document.getElementById("TACanvas");
const e1 = expCanvas1.getContext('2d');
expCanvas1.width = window.innerWidth/3;
expCanvas1.height = 3*$(window).height()/4;
var expCanvas1Height = expCanvas1.height;
var expCanvas1Width = expCanvas1.width;
var stage1 = new Stage(expCanvas1Width/2,expCanvas1Height - (expCanvas1Height/10),1,e1);

function Experience(text){
    this.x = expCanvas1Width/2;
    this.y = 50;
    this.text = text;  
    this.draw = function(){     
        e1.fillStyle='hsl('+hue+', 100%, 50%)';//#110433
        e1.shadowBlur = 0;
        e1.shadowOffsetX = 0;
        e1.shadowOffsetY = 0;
        e1.shadowColor = '#FFFFFF';//#7a68a8
        e1.font = "small-caps 2em Orbitron sans-serif";
        var experiences = "Teaching Assistant";
        e1.fillText(experiences, this.x - (e1.measureText(experiences).width/2),this.y+100);
        e1.font = "small-caps 1.5em Orbitron sans-serif";
        e1.fillStyle='#FFFFFF';//#110433
        experiences = "Grading Exams";
        e1.fillText(experiences, this.x - (e1.measureText(experiences).width/2),this.y+150);
        experiences = "Proctoring Exams";
        e1.fillText(experiences, this.x  - (e1.measureText(experiences).width/2),this.y+180);
        experiences = "Writing Assignments";
        e1.fillText(experiences, this.x - (e1.measureText(experiences).width/2),this.y+210);
        experiences = "Holding Office Hours";
        e1.fillText(experiences, this.x  - (e1.measureText(experiences).width/2),this.y+240);
        experiences = "Holding Lab Sessions";
        e1.fillText(experiences, this.x - (e1.measureText(experiences).width/2),this.y+270);
    }
}

var ta = new Experience();
function initialize3(){
    //Stage
    e1.shadowBlur = 0;
    e1.fillStyle = 'rgba(0,0,0,0.05)';
    e1.fillRect(0,expCanvas1Height - (expCanvas1Height/8),expCanvas1Width,expCanvas1Height/8);
    
    //Other Background 
    e1.clearRect(0,0,expCanvas1Width,expCanvas1Height - (expCanvas1Height/8));
    e1.shadowBlur = 0;
    e1.fillStyle = 'rgba(0,0,0,1)';
    e1.fillRect(0,0,expCanvas1Width,expCanvas1Height - (expCanvas1Height/8));
    
    
    ta.draw();
        stage1.update();

    e1.beginPath();

}


initialize3();