var score = 0;
var aWidth
var aHeight;
var timer;
var iterations = 0; //basically count the number of frames , ends at 30 frames/seconds 

//for animation
var counter = 0;
var imgArray = new Array();

window.addEventListener('load', fillBallAnimationArray);


function setGameAreaBounds() { 
    aWidth = innerWidth;
    aHeight = innerHeight;
    aWidth -= 22;
    aHeight -= 97;
    document.getElementById('gameArea').style.width = aWidth + 'px';
    document.getElementById('gameArea').style.height = aHeight + 'px';

    document.getElementById('dot').addEventListener('click', detectHit);
    aWidth -= 74;
    aHeight -= 74;
    moveDot(); //game loop
    //fillBallAnimationArray();
} 

function detectHit() {
    score += 1;
    document.getElementById('scoreLabel').innerHTML = "Score :" + score;
}

function moveDot() {
    var x = Math.floor(Math.random() * aWidth);
    var y = Math.floor(Math.random() * aHeight);
    if (x < 10)
        x = 10;
    if (y < 10)
        y = 10;

    document.getElementById('dot').style.left = x + 'px';
    document.getElementById('dot').style.top = y + 'px';

    if (iterations < 30) {
        timer = setTimeout("moveDot()", 1000);
    } else {
        document.getElementById('scoreLabel').innerHTML += "      GAME OVER!!";
        document.getElementById('dot').removeEventListener('click', detectHit);
        clearTimeout(timer);
    }
    iterations++;

}

//animate ball
function fillBallAnimationArray() {
    for (var i = 0; i < 24; i++) {
        imgArray[i] = new Image();
        imgArray[i].src = "images/ball" + i + ".gif";
        }
        animateBall();
}
function animateBall()
{   if(counter > imgArray.length -1)
    {
    counter = 0;
    alert("counter exceeds:"+counter);
    }
    document.getElementById('animeBall').src = imgArray[counter].src; 
    alert(counter);
    counter++;   
    setTimeout('animateBall()',50);
    
    
}
