function setup()
{
canvas = createCanvas(500, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video, 0,0,500,500)
fill("red")
stroke("black")
circle( 15, 15,20)

fill("blue")
stroke("black")
circle(485,15,20)

fill("green")
stroke("black")
circle(15,485,20)


fill("purple")
stroke("black")
circle(485,485,20)
}

function preload(){

}