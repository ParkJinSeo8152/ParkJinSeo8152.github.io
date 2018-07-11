
var sb = new Spacebrew.Client("parkjinseo8152.github.io");
var man;
var locations = [1,0,0,1,0,0,0,0,1,0];
var x = [0,0,0,0,0,0,0,0,0,0];
var y = [0,0,0,0,0,0,0,0,0,0];
function preload() {
    man = loadImage('man.png');
}
function setup(){
    createCanvas(innerWidth-30, innerHeight-20);
    sb.name("소방관");
    sb.description("위치를 알려달라");
    sb.addSubscribe( "loc", "range" );
    sb.connect();
    imageMode(CENTER);
    for(var i = 0; i<4; i++){
        x[i] = width/6;
        y[i] = height/5*(i+1);
    }
    x[4] = 2*width/6;
    y[4] = height/2;
    x[5] = 4*width/6;
    y[5] = height/2;
    for(var i = 6; i<10; i++){
        x[i] = 5*width/6;
        y[i] = height/5*(i-5);
    }
}

function draw(){
    background(0);
    noStroke();
    fill(255);
    rect(0,0,width/3,height);
    rect(2*width/3,0,width/3,height);
    rect(0,height/3,width,height/3);
    sb.onRangeMessage = function onRange(name, value) {
        if(value<locations.length){
            locations[value] = 1;
        }
        else{
            locations = [0,0,0,0,0,0,0,0,0,0];
        }
    }
    for(var i = 0; i<locations.length; i++) {
        if(locations[i]==1){
            image(man, x[i],y[i], width/10,width/10);
        }
    }
}