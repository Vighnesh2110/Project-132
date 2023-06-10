img = "";
status = "";

function preload() {
    img = loadImage("tv_ac.jpeg");
}

function setup() {
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


function draw() {
    image(img, 0, 0, 640, 420);
    fill("#308a36");
    text("T.V", 45, 120);
    noFill();
    stroke("#308a36");
    rect(30, 100, 560, 200);
}