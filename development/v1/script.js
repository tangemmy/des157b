
    (function() {
    "use strict";
    // Declare currentImage outside the event listener to maintain its state across clicks
    let currentImage = 0;

    const cont = document.querySelector("#next");
    const bg1 = document.querySelector("#outside");
    const bg2 = document.querySelector("#insideplate");
    cont.addEventListener("click", function(event) {
        event.preventDefault();

        const pictures = ['1.PNG', '2.PNG', '3.PNG', '4.PNG', '5.PNG', '6.PNG', '7.jpg'];
        const myslide = document.querySelector("#slide"); // Ensure this selector matches your HTML
        const myp1 = document.querySelector("#p1");
        // Increment currentImage
        currentImage++;

        // Check if we've reached the last image and loop back to the first
        if (currentImage > pictures.length - 1) {
           // currentImage = 0;
           document.querySelector("#story").className="hidden"
            bg1.className="showing";
        }

        // Update the src attribute of the slide element
        myslide.src = `images/${pictures[currentImage]}`;
        if(currentImage==1){
            myp1.innerHTML="...";
        }
        if(currentImage==2){
            myp1.innerHTML='"UNTIL THIS"';
        }
        if(currentImage==3){
            myp1.innerHTML='"AGAHALFDSLHFJSDFF"';
        }
        if(currentImage==4){
            myp1.innerHTML='"WHY."';
        }
        if(currentImage==5){
            myp1.innerHTML='"ME."';
        }
        if(currentImage==6){
            myp1.innerHTML='" So much for a nice peaceful day. Well, might as well deal with this now. I gotta get a new plate..and this apron fixed.I guess i still get to go out..."';
        }
    });

    const platestore = document.querySelector("#platesoutside");
        const newplates = document.querySelector("#newplates");
        const mugs = document.querySelector("#mugs");
        const bowls = document.querySelector("#bowls");
        const box = document.querySelector("#box");
    const clothesstore = document.querySelector("#clothesoutside");
    const exit = document.querySelector("#exit");
    platestore.addEventListener("click", function(event){
        event.preventDefault();
        bg1.className="hidden";
        bg2.className="showing";

    });
    box.addEventListener("click", function(event){
        event.preventDefault();
        Swal.fire({
            title: "Ceramics and Glass Donation Box!",
            text: "Cracked dishes? broken tiles? Bag them up and drop them off here to the Arts and Crafts Club! Your donations will be used for local mosaic project murals.",
            imageUrl: "images/box.PNG",
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "donation box"
          });
          
    });
    
    exit.addEventListener("click", function(event){
        event.preventDefault();
        if(bg2.className=="showing"){
            bg2.className="hidden";
            bg1.className="showing";
        }else if(bg3.className=="showing"){
            bg3.className="hidden";
            bg1.className="showing";
        }
    });

})();
