
(function() {
    "use strict";
    // Swal.fire({
    //     title: "Welcome!",
    //     text: "Please complete the following: Walk to the store, Enter the store and Browse items",
    //     icon: "question"
    //   });
    // Declare currentImage outside the event listener to maintain its state across clicks
    let currentImage = 0;
    let currentImage2 = 0;
    const cont = document.querySelector("#next");
    const cont2 = document.querySelector("#next2");
    const tasks = document.querySelector("#tasklist");
      const t1 = document.querySelector("#donateplate");
      const t2 = document.querySelector("#buyplate");
      const t3 = document.querySelector("#repairapron");
    const bg1 = document.querySelector("#outside");
    const bg2 = document.querySelector("#insideplate");
    const bg3 = document.querySelector("#insideclothes");
    
    new TypeIt("#p1", {
      strings: 'March 19th, 20XX <br> Daisy: "Today I had the loveliest morning. The sun was finally shining after such a cloudy week and the birds were chirping away. I was even motivated to get started cleaning early so I could go for a nice stroll downtown."',
      speed: 30,
      loop: false,
    }).go();
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
            tasks.className="showing";
        }
       
        // Update the src attribute of the slide element
        myslide.src = `images/${pictures[currentImage]}`;
    
        if(currentImage==1){
          myp1.innerHTML='';
            new TypeIt("#p1", {
              strings: '...',
              speed: 30,
              loop: false,
            }).go();
        }
        if(currentImage==2){
          myp1.innerHTML='';
            new TypeIt("#p1", {
              strings: '"UNTIL THIS"',
              speed: 50,
              loop: false,
            }).go();
        }
        if(currentImage==3){
            myp1.innerHTML='';
            new TypeIt("#p1", {
              strings: '"AGAHALFDSLHFJSDFF"',
              speed: 50,
              loop: false,
            }).go();
        }
        if(currentImage==4){
            myp1.innerHTML='';
            new TypeIt("#p1", {
              strings: '"You have got"',
              speed: 50,
              loop: false,
            }).go();
        }
        if(currentImage==5){
            myp1.innerHTML='';
            new TypeIt("#p1", {
              strings: '"to be kidding me "',
              speed: 50,
              loop: false,
            }).go();
        }
        if(currentImage==6){
          myp1.innerHTML='';
            new TypeIt("#p1", {
              strings: '" So much for a nice peaceful day. Well, might as well deal with this now. I gotta get a new plate..and this apron fixed. I guess I still get to go out..."',
              speed: 30,
              loop: false,
            }).go();
        }
    });

    
    const checklist = () => {
      if(t1.className=="done" && t2.className=="done" && t3.className=="done"){
        
        setTimeout(function() {
          Swal.fire({
            title: "Tasks Completed!",
            text: "Awesome! I did everything I needed to do. ",
            icon: "success"
          }).then((result)=>{
            tasks.className="hidden";
            bg1.className="hidden";
            bg2.className="hidden";
            bg3.className="hidden";
            document.querySelector("#end").className="showing";
            new TypeIt("#p2", {
              strings: 'Daisy: "Ah. Feels nice to finish all my errands"',
              speed: 75,
              loop: false,
            }).go();
           
          })
        }, 4000);
      }
      
    };
    cont2.addEventListener("click", function(event) {
      event.preventDefault();

      const pictures2 = ['8.PNG', '9.PNG', '10.PNG', '10.PNG','11.PNG','11.PNG', '12.PNG'];
      const myslide2 = document.querySelector("#slide2"); // Ensure this selector matches your HTML
      const myp2 = document.querySelector("#p2");
      // Increment currentImage
      currentImage2++;

      // Check if we've reached the last image and loop back to the first
      // if (currentImage2 > pictures2.length - 1) {
      //    // currentImage = 0;
      //    document.querySelector("#story").className="hidden"
      //     bg1.className="showing";
      //     tasks.className="showing";
      // }
     
      // Update the src attribute of the slide element
      myslide2.src = `images/${pictures2[currentImage2]}`;
  
      if(currentImage2==1){
        myp2.innerHTML='';
          new TypeIt("#p2", {
            strings: '<h2>What Happened to the Plate?</h2> <br> The plate was bagged and donated to the local arts and crafts center for use in their next project. This center hosts many public workshops, including sessions on making jewelry or keychains from ceramic scraps. For their next large project, they are creating a community mosaic mural for the library. The idea is that even if you did not directly work on the mural, your donation still plays a significant role in bringing the project to life. When the mural is completed, Daisy may be able to spot the plate she donated.',
            speed: 10,
            loop: false,
          }).go();
      }
      if(currentImage2==2){
        myp2.innerHTML='';
          new TypeIt("#p2", {
            strings: 'Ceramics cannot be recycled or decomposed in compost, so many people end up throwing them in the landfill. However, instead of discarding broken ceramics, they can be repaired and given new life using special adhesives, porcelain filler, or even gold. Kintsugi, a popular Japanese art form, is a method of repairing cracks with gold, often a symbol of embracing and seeing the beauty of imperfections.',
            speed: 10,
            loop: false,
          }).go();
      }
      if(currentImage2==3){
          myp2.innerHTML='';
          new TypeIt("#p2", {
            strings: 'Other alternatives for broken ceramics can be for gardening. Smaller bits can be mixed into soil to provide drainage and aeration for plants.',
            speed: 10,
            loop: false,
          }).go();
      }
      if(currentImage2==4){
          myp2.innerHTML='';
          new TypeIt("#p2", {
            strings: "<h2>How did the Apron Turn Out?</h2> <br> It's just like new! And even more unique than before. Daisy is a long term customer of Taylor's and knowing her so well, Taylor ended up embroidering a cat over it. Daisy loves cats.",
            speed: 10,
            loop: false,
          }).go();
      }
      if(currentImage2==5){
          myp2.innerHTML='';
          new TypeIt("#p2", {
            strings: 'By repairing the apron instead of immediately discarding it, we can prevent clothes and textiles from unnecessarily piling up in landfills. Choosing reparations instead of buying new things in general help us reduce our over all environmental impact on the earth. These practices help reduce waste and minimize the environmental impact of ceramics in landfills, promoting sustainable living by repurposing materials that would otherwise contribute to environmental degradation',
            speed: 10,
            loop: false,
          }).go();
      }
      if(currentImage2==6){
        cont2.className="hidden";
        myp1.innerHTML='';
          new TypeIt("#p2", {
            strings: 'Remember to repair and rewear! And also reuse!',
            speed: 20,
            loop: false,
          }).go();
      }
  });
    const platestore = document.querySelector("#platesoutside");
        const newplates = document.querySelector("#newplates");
        const mugs = document.querySelector("#mugs");
        const bowls = document.querySelector("#bowls");
        const box = document.querySelector("#box");
    const clothesstore = document.querySelector("#clothesoutside");
        const tay =document.querySelector("#tay");
        const top = document.querySelector("#top");
        const coat = document.querySelector("#coat");
    const exit = document.querySelector("#exit");
    const exit2 = document.querySelector("#exit2");

    

    clothesstore.addEventListener("click", function(event){
        event.preventDefault();
        bg1.className="hidden";
        tasks.className="hidden";
        bg3.className="showing";
    })
    platestore.addEventListener("click", function(event){
        event.preventDefault();
        bg1.className="hidden";
        tasks.className="hidden";
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
            imageAlt: "donation box",
            confirmButtonText: "Donate the cracked plate!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Donation Recieved!",
                text: "Thank you So much for your donation. Keep your eyes peeled to see your scraps in the next town mosaic!",
                icon: "success"
              });
             
              t1.className="done";
              checklist();
            }
          });
          
    });
    newplates.addEventListener("click", function(event){
        event.preventDefault();
        Swal.fire({
            title: "Blue Rose Plates",
            text: "Beautiful hand crafted white places with hand painted blue roses. Made by Johnathan (@jnny_kiln) from Kiln Kreations.  Crafted 20XX",
            imageUrl: "images/newplates.png",
            imageWidth: 240,
            imageHeight: 300,
            imageAlt: "new plates",
            confirmButtonText: "Purchase"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Thank you for shopping at Plates n' Thingz",
                text: "Yay! I got a new plate. This money will go towards helping Johnathan sustain his business and put food on the table for him and his family.",
                icon: "success"
              });
              t2.className="done";
              checklist();
            };
          
    });
          
    });
    mugs.addEventListener("click", function(event){
        event.preventDefault();
        Swal.fire({
            title: "Padded Puffer Mugs",
            text: "Cute and Whimsy, these mugs come in many different colors you're sure to find one you'll love. Made by Samantha Keith (@SamMakes) from Color Me Joy. Crafted 20XX",
            imageUrl: "images/mug.png",
            imageWidth: 350,
            imageHeight: 200,
            imageAlt: "new mugs"
          });
          
    });
    bowls.addEventListener("click", function(event){
        event.preventDefault();
        Swal.fire({
            title: "Red Mixing Bowls",
            text: "Elegant bowls with bold colors to add color and personality to your kitchen. Made by Claire (@laireflaire) from Kiln Kreations. Crafted 20XX",
            imageUrl: "images/bowls.png",
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: "new bowls"
          });
          
    });
    tay.addEventListener("click", function(event){
        event.preventDefault();
        Swal.fire({
            title: "Taylor: the owner",
            text: "Taylor is here for all your tailoring needs! Repairs and customs for anyone, just let her know!",
            imageUrl: "images/taylor.PNG",
            imageWidth: 250,
            imageHeight: 300,
            imageAlt: "taylor be sewing",
            confirmButtonText: "Submit a repair ticket for the apron"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Request Recieved",
                text: "You're in luck, the rip wasnt too bad so you can come by tomorrow to pick up your apron. Feel free to browse."
              });
              t3.className="done";
              checklist();
            }
          });
          
    });
    top.addEventListener("click", function(event){
        event.preventDefault();
        Swal.fire({
            title: "Teal Milk Maid Top",
            text: "Cute cottage themed top with puffed sleeves made from breathable linen. Hand-dyed by Karol Fabrics and constructed and designed by Jessica (@jss312), from Hillside. Crafted 20XX",
            imageUrl: "images/top.PNG",
            imageWidth: 250,
            imageHeight: 300,
            imageAlt: "top"
          });
    });
    coat.addEventListener("click", function(event){
        event.preventDefault();
        Swal.fire({
            title: "Wool Tie-Over Coat",
            text: "A unique take on a classic long overcoat with hanbok inspired tie closure. Wool sourced and processed by Woolenco. Hand-dyed by CoveryTextiles and constructed and designed by SeongMi (@mimiseo), from Yeppun. Crafted 20XX",
            imageUrl: "images/coat.PNG",
            imageWidth: 220,
            imageHeight: 320,
            imageAlt: "coat"
          });
    });
    skirt.addEventListener("click", function(event){
        event.preventDefault();
        Swal.fire({
            title: "Aysmetrical Ruffle Edge Skirt",
            text: "Ultimate simple but girlish skirt made from cotton satin. Can easily be dressed up or down for a casual brunch or night out.Textiles from Global Textiles. Constructed and designed by Taylor, from Taylor's. Crafted 20XX",
            imageUrl: "images/skirt.PNG",
            imageWidth: 200,
            imageHeight: 300,
            imageAlt: "skirt"
          });
    });
    exit.addEventListener("click", function(event){
        event.preventDefault();
        if(bg2.className=="showing"){
            bg2.className="hidden";
            bg1.className="showing";
        }
        tasks.className="showing";
    });
    exit2.addEventListener("click", function(event){
        event.preventDefault();
        if(bg3.className=="showing"){
            bg3.className="hidden";
            bg1.className="showing";
        }
        tasks.className="showing";
    });

    
  
})();
