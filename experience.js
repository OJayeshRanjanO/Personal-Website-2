const expCanvas1 = document.getElementById("TACanvas");
const e1 = expCanvas1.getContext('2d');
expCanvas1.width = window.innerWidth/3;
expCanvas1.height = 3*$(window).height()/4;
var expCanvas1Height = expCanvas1.height;
var expCanvas1Width = expCanvas1.width;
var stage1 = new Stage(expCanvas1Width/2,expCanvas1Height - (expCanvas1Height/10),1,e1);
var exp1TextArray = ["Teaching Assistant","Grading Exams","Proctoring Exams","Writing Assignments","Holding Office Hours","Holding Lab Sessions"]
var ta = new Experience(exp1TextArray);

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
        var experiences = text[0];
        e1.fillText(experiences, this.x - (e1.measureText(experiences).width/2),this.y+expCanvas1Height/6);
        
        var textStartingHeight = this.y+expCanvas1Height/6;
        e1.font = "small-caps 1.5em Orbitron sans-serif";
        e1.fillStyle='#FFFFFF';//#110433
        
        textStartingHeight += e1.measureText("M").width*4;
        for (var i = 1; i < 5; i++){
            e1.fillText(text[i], this.x - (e1.measureText(text[i]).width/2),textStartingHeight);
            textStartingHeight+=e1.measureText("M").width*2;
        }
    }
}

function initialize3(){
    //Stage
    e1.shadowBlur = 0;
    e1.fillStyle = 'rgba(0,0,0,0.05)';
    e1.fillRect(0,expCanvas1Height - (expCanvas1Height/9),expCanvas1Width,expCanvas1Height/9);
    
    //Other Background 
    e1.clearRect(0,0,expCanvas1Width,expCanvas1Height - (expCanvas1Height/9));
    e1.shadowBlur = 0;
    e1.fillStyle = 'rgba(0,0,0,1)';
    e1.fillRect(0,0,expCanvas1Width,expCanvas1Height - (expCanvas1Height/9));
    
    
    ta.draw();
    stage1.update();

    e1.beginPath();

}


initialize3();