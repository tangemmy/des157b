
    // initialize AOS here
  AOS.init();  

    let capture;
    function setup(){
        createCanvas(320,240);
        capture=createCapture(VIDEO);
        capture.size(320,240);
        capture.hide();
    }
    function draw(){
        background(255);
        image(capture, 0, 0, 320, 240);
        filter('erode');
    }
   // Global variable to hold the video capture objects


