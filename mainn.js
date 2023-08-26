music1 = "";
music2 = "";
rightwristx = 0;
rightwristy = 0;
leftwristx = 0;
leftwristy = 0;

function preload() {
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(500,500)
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw() {
    image(video,0,0,500,500)
}

function modelLoaded() {
    console.log("Model is loaded (again) :D");
    
}

function gotPoses(results) 
{
    if (results.length > 0) {
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        rightwristy = results[0].pose.rightWrist.y;
        rightwristx = results[0].pose.rightWrist.x;
        console.log("left wrist = " +leftwristx + leftwristy);
        console.log("right wrist = " +rightwristx + rightwristy);
    }
}