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


})();