var TOTALSLIDES = 3;
var index = 1;

function show() {
    var i;
    var imgs = document.getElementsByClassName("img");
    var caption = document.getElementById("caption");
    var count = document.getElementById("img-count");

    for (i = 0; i < TOTALSLIDES; i++) {
        imgs[i].style.display = "none";
    }
    imgs[index-1].style.display = "block";
    count.innerHTML = index + "/" + TOTALSLIDES;
    caption.innerHTML = imgs[index-1].alt;
}

function next() {
    if (index < TOTALSLIDES) {
        index += 1;
    } else {
        index = 1;
    }
    show();
}

function prev() {
    if (index === 1) {
        index = TOTALSLIDES;
    } else {
        index -= 1;
    }
    show();
}
