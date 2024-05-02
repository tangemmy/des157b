(function(){
    'use strict';

    let globalData;
    let numDataPoints;
    async function getData(){
        const myTreats = await fetch('treat.json');
        const data = await myTreats.json();
        // Gets the keys and puts them in an array
        const dataPoints = Object.keys(data);
        // Gets the values and puts them in the globalData array
        globalData = Object.values(data);
        // Gets the number of entries in the JSON file
        numDataPoints = dataPoints.length;
        //console.log(globalData, numDataPoints);
    }

    function showMoodInfo(point, data){
        const day = [
            '<img src= "images/nothing.PNG" alt="nothing" width="380">',
            '<img src="images/mocha.PNG" alt="mocha" width="380">',
            '<img src= "images/boba.PNG" alt="boba" width="380">',
            '<img src= "images/pie.PNG" alt="boba" width="380">',
            '<img src= "images/strawberry.PNG" alt="strawberry" width="380">',
            '<img src= "images/matcha.png" alt="matcha strawberry" width="380">',
        ];
        document.querySelector('#myTreat').innerHTML = data[point].amount;
        document.querySelector('#foodpic').innerHTML = day[ data[point].drink ];
        document.querySelector('#date').innerHTML = data[point].date;
    }

    // Event listener for when the mouse moves
    document.addEventListener('mousemove', reportPos);

    let prevLoc = 0;

    function reportPos(event) {
        const windowSize = window.innerWidth;
        //The window needs to be divided into sections for each time in the JSON data
        const timeSection = windowSize / numDataPoints;
        const xPos = event.clientX;
        // changeTime will be a number from 0-16
        const changeTime = Math.floor(xPos / timeSection);

        // When you move the mouse into the next segment, change the interface.
        if (changeTime !== prevLoc) {
            //console.log(changeTime);
            showMoodInfo(changeTime, globalData);
            prevLoc = changeTime;
        }
    }

    getData();

})(); // end IIFE