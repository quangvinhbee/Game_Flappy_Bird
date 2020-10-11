var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var scoreShow = document.getElementById('score');

var birdimg = new Image();
var OngKhoiTren = new Image();
var OngKhoiDuoi = new Image();
var Background = new Image();

Background.src = "Image/nenchinh.png";
birdimg.src = "Image/bird.png";
OngKhoiDuoi.src = "Image/ongduoi.png";
OngKhoiTren.src = "Image/ongtren.png";

var bird = {
    x: 155,
    y: Background.height / 2
}

var ong = [];
ong[0] = {
    x: canvas.width,
    y: 0
}

var check = true;

function run() {
    var score = 0;
    var khoangcachhaiong = 140;
    var khoangcachdenongduoi;

    
    context.drawImage(Background, 0, 0);
    context.drawImage(birdimg, bird.x, bird.y);
    for (var i = 0; i < ong.length; i++) {
        khoangcachdenongduoi = OngKhoiTren.height + khoangcachhaiong;
        context.drawImage(OngKhoiTren, ong[i].x, ong[i].y);

        context.drawImage(OngKhoiDuoi, ong[i].x, ong[i].y + khoangcachdenongduoi);
        ong[i].x -= 5;


        if (ong[i].x == canvas.width / 2) {
            ong.push({
                x: canvas.width,
                y: Math.floor(Math.random() * OngKhoiTren.height) - OngKhoiTren.height
            })
        }
        if (ong[i].x == 0) ong.slice(0, 1);

        if (ong[i].x == bird.x) {
            score++;
            scoreShow.innerHTML = "Score: " + score;
        }

        if (bird.y + birdimg.height == canvas.height || bird.x + birdimg.width >= ong[i].x && bird.x <= ong[i].x + OngKhoiTren.width
            && (bird.y <= ong[i].y + OngKhoiTren.height || bird.y + birdimg.height >= ong[i].y + khoangcachdenongduoi)) {
            return;
        }
    }

    bird.y += 3;
    requestAnimationFrame(run);
}
document.addEventListener("keyup", function () {
    bird.y -= 60;
})
function play() {
    
    while(check){
        document.addEventListener("keyup", () =>{
            bird = {
                x: 155,
                y: Background.height / 2
            }
            ong = [];
            ong[0] = {
                x: canvas.width,
                y: 0
            }
            run();
            console.log(k);
        });
        check=false;
    }
    

}
play();