(function(){
    "use strict";
    const videos = document.querySelectorAll("video");
    const bgm = new Audio("sound/chill.mp3");
    bgm.loop = true;

    window.addEventListener("mousemove", function() {
        bgm.play();
    });

    function playVideo(video) {
        video.play();
    }

    // Function to pause the video
    function pauseVideo(video) {
        video.pause();
    }

    // Iterate over each video element
    videos.forEach(video => {
        // Add mouseenter event listener to play the video
        video.addEventListener('mouseleave', function() {
            playVideo(video);
        });

        // Add mouseleave event listener to pause the video
        video.addEventListener('mouseenter', function() {
            pauseVideo(video);
        });
    });

//text
    const myVideo = document.querySelector("#v5");
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');
    const line5 = document.querySelector('#line5');
    const quote = {
    start: [0, 5, 8, 11,16],
    stop: [4, 7, 10, 15,18],
    line: [line1, line2, line3,line4,line5]
    }

    const intervalID = setInterval(checkTime, 1000); //every second they check time

    function checkTime() {
    console.log(parseInt(myVideo.currentTime));

    for (let i = 0; i < quote.start.length; i++) {
        if (quote.start[i] < myVideo.currentTime && myVideo.currentTime < quote.stop[i]) {
        quote.line[i].className = "showing";
        } else {
        quote.line[i].className = "hidden";
        }
    }
    }
})();