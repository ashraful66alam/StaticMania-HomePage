window.onload = function () {
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

};