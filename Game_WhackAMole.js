const canvas = document.getElementById("GameWindow"),  canvasLeft = canvas.offsetLeft + canvas.clientLeft,
    canvasTop = canvas.offsetTop + canvas.clientTop;
const context = canvas.getContext("2d");
const background = new Image();
let burrows = [], burrows_c;
const minDelay = 1000;
const maxDelay = 3000;
const maxMoles = 3; // максимум кротов на экране

function ImageFrame(offsetY, offsetX) {
    const imgLoc = 'images/Games/WhackAMole/mole_spritesheet.png';
    const imgSize = 128;
    const imgOffsetY = offsetY;
    const imgOffsetX = offsetX;

    function getOffsetX() {
        return imgOffsetX;
    }

    function getOffsetY() {
        return imgOffsetY;
    }
}

function Mole() {
    let sprites = new Image();
    let animations = [];
    let animFrame = 0;
    let timePerFrames = 100;
    let state = "in";
    let outDelay = 3000;

    function canBeBeaten() {
        if (state == "out") return true;
        else return false;
    }

    function getOut() {
        //draw animation frame
        state = "gettingOut";
        if (animFrame < 2) {animFrame++; setTimeout(getOut, timePerFrames);}
        else {
            animFrame = 0;
            state = "out";
        }
    }

    function getIn() {
        //draw animation frame
        state = "gettingIn";
        animFrame++;
        if (animFrame < 2) {animFrame++; setTimeout(getIn, timePerFrames);}
        else {
            state = "in";
        }
    }

    function smack() {
        //draw animation frame
        state = "smack";
        animFrame++;
        if (animFrame < 2) {animFrame++; setTimeout(smack, timePerFrames);}
        else {
            state = "in";
        }
    }

    function draw() {
        switch (state) {
            case "gettingOut":
                //draw image frame
                break;
            case "gettingIn":
                //draw image frame
                break;
            case "smack":
                //draw image frame
                break;
            case "in":
                //do nothing
                break;
            case "out":
                //draw mole out frame
                break;
            default: //do nothing
        }
    }
}

function isFinished() {
    return false;
}

function redraw() {
    background.src = 'images/Games/WhackAMole/background.png';
    background.onload = function() {
        context.drawImage(background, 0, 0);
    };
    if (!isFinished()) context.requestAnimationFrame(redraw);
}

function startGame() {

    let gameEnded = false;
    let score = 0;

    for (let i = 0; i < 3; i++) {
        burrows.push(burrows_c = [])
        for (let j = 0; j < 3; j++) {
            burrows[i].push(null);
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            burrows[i][j] = new Mole();
        }
    }

    context.requestAnimationFrame(redraw);
}

window.onload = function() {
    startGame();
}