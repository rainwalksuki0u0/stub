document.addEventListener("DOMContentLoaded", function() {
    var preloader = document.getElementById("preloader");
    const preloaderImage = document.querySelector(".preloader-image");

    // 延遲1秒後隱藏前導動畫
    setTimeout(function() {
        preloader.style.opacity = "0";
        preloader.style.pointerEvents = "none";
    }, 1500);  
});

