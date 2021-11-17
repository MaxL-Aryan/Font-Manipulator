noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(530,400);
    video.position(20,150);
    canvas = createCanvas(550,500);
    canvas.position(600,108);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#c02ad1');

    document.getElementById("square_sides").innerHTML="Size of the square is = "+difference+"px";

    textSize(difference);
    fill('#ffea00');
    text('Aryan',noseX,noseY);
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);

        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X = "+noseX+"Nose Y = "+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);
        console.log("Left Wrist X = "+leftWristX+"Right Wrist X = "+rightWristX);
    }
}