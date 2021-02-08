leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
score_right = 0;
score_left = 0;
status = "";

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
    console.log("It works!!");
}

function gotresults(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.leftWrist.y;
        score_left = results[0].pose.keypoints[9].score;
        score_right = results[0].pose.keypoints[10].score;
    }
}

function draw(){
    image(video,0,0,600,500);
    song_status = song.isPlaying();
    fill('darkgoldenrod');
    stroke('darkgoldenrod');

    if(score_left > 0.2){
        circle(leftWristX,leftWristY,20);
        song2.stop();

        if(song_status == false){
            song.play()
            document.getElementById("play").innerHTML= "Song name: Beleiver fairlane remix";
        }
    }

    song2_status = song2.isPlaying();
    fill('darkgoldenrod');
    stroke('darkgoldenrod');

    if(score_right > 0.2){
        circle(leftWristX,leftWristY,20);
        song.stop();

        if(song2_status == false){
            song2.play()
            document.getElementById("play").innerHTML= "Song name: Centuries";
        }
    }
}

function play(){
    song.play();
    song.setVolume(0.5)
    song.rate(1)
}
