img = "";
status = "";

function preload(){
    img = loadImage("bed.jpeg");  
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHtml = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}


function draw(){
    image(img, 0, 0, 640, 420);
    fill("#308a36");
    text("Bed", 45, 75);
    noFill();
    stroke("#308a36");
    rect(30, 60, 560, 340);
}