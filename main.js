difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,120);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}
function gotPoses(results){
if(results.length>0){
  console.log(results); 

  leftWristX=results[0].pose.leftWrist.x;
  rightWristX=results[0].pose.rightWrist.x;
  difference=floor(leftWristX-rightWristX);
}
}
function modelLoaded(){
    console.log('modelLoaded');
}
function draw(){
    background('#2596be');
    document.getElementById("font_size").innerHTML="Font Size will be ="+difference+"px";
    textSize(difference);
    fill('navy');
    text('Jett',50,400);
}