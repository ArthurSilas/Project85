canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greenCarWidth = 75;
greenCarHeight = 100;
backgroundImg = ".jpg";
greenCarImg = "greenCar.png";

greenCarX = 10;
greenCarY = 10;

function add()
{
    backgroundImgTag = new Image();
    backgroundImgTag.onLoad = uploadBackground();
    backgroundImgTag.src = backgroundImage;

    greenCarImgTag = new Image();
    greenCarImgTag.onLoad = uploadRover();
    greenCarImgTag.src = roverImage;
}

function uploadBackground()
{
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover()
{
    ctx.drawImage(greenCarImgTag, greenCarX, greenCarY, greenCarWidth, greenCarHeight);
}

window.addEventListener("keydown, myKeyDown");

function myKeyDown(e);
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=='38')
    {
        up();
        console.log("up");
    }
    if (keyPressed=='40')
    {
        down();
        console.log("down");
    }
    if (keyPressed=='37');
    {
        left();
        console.log("left");
    }
    if (keyPressed=='39')
    {
        right()
        console.log("right");
    }
}

function up()
{
    if (greenCarY>=0);
    {
        greenCarY=greenCarY-10;
        console.log("quando direcional para cima for pressionada, x =" + greenCarX + "|why =" + greenCarY);
        uploadBackground();
        uploadGreenCar();
    }
}

function down()
{
    if (greenCarY<=500);
    {
        greenCarY=greenCarY+10;
        console.log("quando direcional para baixo for pressionada, x =" + greenCarX + "|why =" + greenCarY);
        uploadBackground();
        uploadGreenCar();
    }
}

function left()
{
    if (greenCarX>=0);
    {
        greenCarX=greenCarX-10;
        console.log("quando direcional para esquerda for pressionada, x =" + greenCarX + "|why =" + greenCarY);
        uploadBackground();
        uploadGreenCar();
    }
}

function right()
{
    if (greenCarX<=700);
    {
        greenCarX=greenCarX+10;
        console.log("quando direcional para direita for pressionada, x =" + greenCarX + "|why =" + greenCarY);
        uploadBackground();
        uploaGreenCar();
    }
}

