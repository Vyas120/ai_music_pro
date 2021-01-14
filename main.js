leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song = loadSound("Beleiver(fairlane_remix).mp3");
    song2 = loadSound("centuries.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    PoseNet = ml5.poseNet(video,modelloaded)
    PoseNet.on('pose',gotresults)
}


function modelloaded(){
    console.log("It works!!")
}

function gotresults(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.leftWrist.y;
    }
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song.play();
    song.setVolume(0.5)
    song.rate(1)
}