song="";
function setup(){
canvas=createCanvas(500, 500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video, 0, 0, 500, 500);
}
function preload(){
    song=loadSound("music.mp3");
    song=loadSound("music.mp2")
}
function play(){
    song.play();
}
function pause(){
    song.pause();
}