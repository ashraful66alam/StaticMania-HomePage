window.onload = function () {

    // select room js 
    document.getElementById("room1").addEventListener("click", function () {
        document.getElementById("room1").classList.add("big");
        document.getElementById("room1").classList.remove("small");

        document.getElementById("room2").classList.add("small");
        document.getElementById("room2").classList.remove("big");

        document.getElementById("room3").classList.add("small");
        document.getElementById("room3").classList.remove("big");
    });

    document.getElementById("room2").addEventListener("click", function () {
        document.getElementById("room2").classList.add("big");
        document.getElementById("room2").classList.remove("small");

        document.getElementById("room1").classList.add("small");
        document.getElementById("room1").classList.remove("big");

        document.getElementById("room3").classList.add("small");
        document.getElementById("room3").classList.remove("big");
    });

    document.getElementById("room3").addEventListener("click", function () {
        document.getElementById("room3").classList.add("big");
        document.getElementById("room3").classList.remove("small");

        document.getElementById("room2").classList.add("small");
        document.getElementById("room2").classList.remove("big");

        document.getElementById("room1").classList.add("small");
        document.getElementById("room1").classList.remove("big");
    });


    // move response js
    document.getElementById("moveLeft").addEventListener("click", function () {
        const computedStyle = window.getComputedStyle(document.getElementById("responseContainer"));
        const currentLeft = computedStyle.left;
        const currentLeftNum = parseFloat(currentLeft.replace(/px$/, ""));
        const newLeft = currentLeftNum + -456 + "px";
        document.getElementById("responseContainer").style.left = newLeft;
    });

    document.getElementById("moveRight").addEventListener("click", function () {
        const computedStyle = window.getComputedStyle(document.getElementById("responseContainer"));
        const currentLeft = computedStyle.left;
        const currentLeftNum = parseFloat(currentLeft.replace(/px$/, ""));
        const newLeft = currentLeftNum + 456 + "px";
        document.getElementById("responseContainer").style.left = newLeft;
    });


};