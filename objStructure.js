

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    console.log(h + " " + m + " " +s);
                       
}

var hue = 185 + Math.floor(Math.random() * 170);//Random time of day
var gradientChange = 0.1;
function generateBackground(){
    
    //Background
    var backgroundGradient = c.createLinearGradient(0,0,0, canvas.height);
    backgroundGradient.addColorStop(0,"#000000");//"#000000"
    backgroundGradient.addColorStop(0.5,'hsl('+hue+', 62%, 35%)');//"#6e2291"
    backgroundGradient.addColorStop(1,'hsl('+hue+', 61%, 48%)');//"#952fc4"

    c.fillStyle=backgroundGradient;
    c.fillRect(0,0,innerWidth,innerHeight);
    
    
    //Mountains
    createMountainRange(innerHeight / 1, innerHeight, 1, "hsl("+hue+", 65%, 18%)",'hsl('+hue+', 45%, 43%)');//"#39104c",'#813da0'
    createMountainRange(innerHeight / 1.2, innerHeight, 2, "hsl("+hue+", 76%, 13%)",'hsl('+hue+', 45%, 43%)');//"#2a083a",'#813da0'
    createMountainRange(innerHeight / 2.0, innerHeight, 3, "hsl("+hue+", 85%, 8%)",'hsl('+hue+', 45%, 43%)');//"#1b0326",'#813da0'
    
    //Water
    c.fillStyle='hsl('+hue+', 85%, 11%)';//#110433
    c.shadowBlur = 20;
    c.shadowOffsetX = 0;
    c.shadowOffsetY = 0;
    c.shadowColor = 'hsl('+hue+', 27%, 53%)';//#7a68a8
    c.fillRect(0,innerHeight,innerWidth,innerHeight);
    
    hue+=gradientChange;
    if (hue.toFixed(2) == 360){
        hue = 0
    }
    else if (hue.toFixed(2) == 0){
        hue = 360
    }
    
    if (hue.toFixed(2) == 185 || hue.toFixed(2) == 30){
        gradientChange = -gradientChange;
    }    
}


function createMountainRange(height, yPosition, mountainAmount, color,glow) {
    for (var i = 0; i < mountainAmount; i++) {
        var width = canvas.width / mountainAmount;

        // Draw triangle
        c.beginPath();
        c.moveTo(i * width, yPosition);
        c.lineTo(i * width + width + 325, yPosition);

        // Triangle peak
        c.lineTo(i * width + width / 2, yPosition - height / 2);
        c.lineTo(i * width - 325, yPosition);
        c.fillStyle = color;
        c.shadowColor = glow;
        c.shadowBlur = 20;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.fill();
        c.closePath();
    }
}

function Circle(x,y,radius,o){
    
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.opacity = o;
    this.dsize = Math.random() * 0.01;
    this.velocity = 0.005;
    this.radians = 0;
    
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, true);
        c.strokeStyle = "rgba(255,255,255,"+this.opacity+")";
        c.stroke();
        c.closePath();
        c.fillStyle = "rgba(255,255,255,"+this.opacity+")";
        c.shadowColor = "rgba(255,255,255,1)";
        c.shadowBlur = 20;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.fill();
    }
    
    this.update = function(Hspeed,Vspeed){
        this.x += Hspeed;
        this.y += Vspeed;
        this.draw();
    }
    
    this.glow = function(){
        if (this.radius > 2 || this.radius < 0.1 ){
            this.dsize = -this.dsize;
        } 
        this.radius += this.dsize;
        this.draw();

        

    }
    
    this.circular = function(){
        this.radians += this.velocity;
        this.x = this.x + Math.cos(this.radians) * 4;
        this.y = this.y + Math.sin(this.radians) * 2;
        
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, true);
        c.strokeStyle = "#FFFFFF";
        c.stroke();
        c.closePath();
        c.fillStyle = "#FFFFFF";
        c.shadowColor = "#FFFFFF";
        c.shadowBlur = 20;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.fill();
         
    }
    
}

function Comet(){
    this.particleArray = [];
    this.x = -100 + (- Math.random() * 300);
    this.y = 50 + (Math.random() * 300);
    this.size = Math.random();
    this.a = parseInt(20 + (Math.random() * 40));
    this.speed = 10 + (Math.random() * 5);
    
    //Initialize Circles
    for (var i = 0; i < this.a; i++){
        var circle = new Circle(this.x+i,this.y,this.size,i/50);
        this.particleArray.push(circle);
    }
    
    //Update Circles
    this.update = function(){
        for (var i = 0; i < this.particleArray.length; i++){
            this.particleArray[i].update(this.speed,0);
        }
        
        
        //If Comet out of bounds
        var lastCircle = this.particleArray[this.particleArray.length-1].x
        if (lastCircle > (innerWidth+500)){
            
            this.x = - Math.random() * 300;
            this.y = 50 + (Math.random() * 300);
            this.size = Math.random();
            this.a = parseInt(20 + (Math.random() * 40));
            this.speed = 10 + (Math.random() * 5);
            
            for (var i = 0; i < this.particleArray.length; i++){
                this.particleArray[i] = new Circle(this.x+i,this.y,this.size,i/50);;
            }
        }   
        
    }
    
}


function Star(){
    for (var i = 0; i < 10;i++){
        var starLocationX = 2 + (Math.random() * innerWidth) ;
        var starLocationY = 2 + (Math.random() * (innerHeight - innerHeight / 2));
    }
}

function Wave(){
    this.y = (innerHeight+5) + (Math.random() * (canvas.height - (innerHeight+5)))
    this.x = Math.random() * innerWidth;
    this.length = 40 + Math.random() * 50;
    this.draw = function(){
        c.strokeStyle ="#7a68a8";
        c.beginPath();
        c.lineTo(this.x,this.y);
        c.lineTo(this.x+this.length,this.y);
        c.stroke()
    }
    
    this.update = function(){
        this.draw();
        this.x-=1;
        
        if (this.x < -100){
            this.x = innerWidth + (Math.random() * 200);
            this.y = (innerHeight+5) + (Math.random() * (canvas.height - (innerHeight+5)));
            this.length = 40 + Math.random() * 50;

        }
    }
}


function Button(buttonX,buttonY,buttonWidth,buttonHeight,buttonText){
    this.buttonX = buttonX;
    this.buttonY = buttonY;
    this.buttonWidth = buttonWidth;
    this.buttonHeight = buttonHeight;
    this.size = 30;

    this.draw = function(){
//    document.body.style.cursor = "progress";

        c.fillStyle = "#FFFFFF";
        c.shadowColor = "#FFFFFF";
        c.shadowBlur = 0;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.rect(buttonX,buttonY,buttonWidth,buttonHeight);
        this.aboutMeText = buttonText;
        if (mouseX > buttonX && mouseX < buttonX+buttonWidth && mouseY > buttonY && mouseY < buttonY+buttonHeight){
                c.shadowColor = "#FFFFFF";
                c.shadowBlur = 20;
                c.shadowOffsetX = 0;
                c.shadowOffsetY = 0;
        }
        if (canvas.width < 450 ){this.size = 15;}
        else if (canvas.width < 650 ){this.size = 20;}
        else if (canvas.width < 800){this.size = 25;}
        else{this.size = 30;}
        
        
//        console.log("Button X " + buttonX+50 + " Size: " + this.size)
        c.font = "small-caps "+this.size+"px Orbitron sans-serif";
        var textX = (buttonX+buttonWidth/2) - (c.measureText(this.aboutMeText).width/2);
        var textY = (buttonY+buttonHeight/2) + (c.measureText('M').width/3);
        c.fillText(this.aboutMeText, textX ,textY);    
//        c.stroke();
    }
    
}

function createButton(){
    var buttonWidth = (innerWidth/4 * 0.7)//70% Width of quarter of screen
    var buttonGap = (innerWidth - (buttonWidth * 4))/5;
    
    var buttonX = buttonGap;
    var buttonY = innerHeight + ((canvas.height - innerHeight) * 0.3);
    
    var buttonHeight = (canvas.height - innerHeight) * 0.3
    var buttonText = ["About Me","Experience","Project","Contact"]
    
    for (var i = 0; i < 4; i++){
        var button = new Button(buttonX,buttonY,buttonWidth,buttonHeight,buttonText[i]);
        buttonArray.push(button);
        buttonX+=buttonGap+buttonWidth
    }
}

function AboutMeText(text,textY){
    this.text = text;
    this.textY = textY;
    this.color = 255;
    
    
    this.draw = function(){
        d.fillStyle='rgb('+this.color+', '+this.color+', '+this.color+')';//#110433
        d.shadowBlur = 0;
        d.shadowOffsetX = 0;
        d.shadowOffsetY = 0;
        d.shadowColor = 'none';//#7a68a8
        d.font = "small-caps 20px Orbitron sans-serif";
        d.fillText(this.text, innerWidth2/2 - (d.measureText(text).width/2), this.textY);
        
    }
}


function aboutMeFillInText(){
    var textArray = [
        "I am a Full Stack Developer.",
    "I got my B.S. Degree at Stony Brook University",
    "I majored in Computer Science with Specialization in Security",
    "",
    "I was born in India. I came to U.S. for my Bachelor's Degreee",
    "Currently I am actively looking for Full-time positions"];
    for (var i = 0 ; i < textArray.length; i++){
        aboutMeTextArray.push(new AboutMeText(textArray[i],(innerHeight2/3) + (i * 30) ))
    }
}

