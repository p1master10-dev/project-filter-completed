var eyeX = 0;
var eyeY = 0;

function preload() {
     spectacles = loadImage('https://i.postimg.cc/Gp7cpQmr/SPECS.png');
}

function setup() {
     canvas = createCanvas(300, 300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300, 300);
     video.hide();

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function modelLoaded() {
     console.log('PoseNet loaded !');
}

function gotPoses(results) {
     if (results.length > 0) {
          console.log(results);
          eyeX = results[0].pose.leftEye.x;
          eyeY = results[0].pose.leftEye.y;
          console.log('eye1 x = ' + eyeX);
          console.log('eye1 y = ' + eyeY);
          console.log('eye2 x = ' + results[0].pose.rightEye.x);
          console.log('eye2 y = ' + results[0].pose.rightEye.y);
     }
}

function draw() {
     image(video, 0, 0, 300, 300);
     image(spectacles, eyeX - 60, eyeY - 16, 90, 40);
}

function take_snapshot() {
     save('myFunnyImage.png');
}