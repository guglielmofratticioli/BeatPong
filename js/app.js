
let [_game,_canvas] = init_app(document.body);

/**@param {Node} _father */
function init_app(_father){

    let _game = document.createElement("div");
        _game.style.display = "flex"; 
        _game.style.margin = "10%"; 
        _game.style.aspectRatio = "1/1";
        _game.style.background = "white";
        _game.style.justifyContent = "center"; 

    _father.appendChild(_game);
    let _canvas = document.createElement("canvas"); 
        _canvas.style.objectFit = "cover";
        _canvas.style.border = "1px";
        _canvas.style.borderStyle = "solid";
    _game.appendChild(_canvas); 
    
    return [_game,_canvas]; 

}

// Game Model 

const FPS = 60;

const box = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    color: "black",
} 
const paddle = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    color: "black",
} 
const ball = {
    x: _canvas.width/2,
    y: _canvas.height/2,
    r: 10,
    cx: 8,
    cy: 8,
    speed: 8,
    color: "black",
} 



            
 
const $ = _canvas.getContext("2d");
document.body.addEventListener("mousemove", movePaddle);
setCanvasSize();
setInterval(game, 1000/FPS);

function game(){
    update();
    render();
}
function collision(b, p) {
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    b.top = b.y - b.r;
    b.bottom = b.y + b.r;
    b.left = b.x - b.r;
    b.right = b.x + b.r;

    return (
        p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top
    );
}

function resetBall() {
    ball.x = _canvas.width/4;
    ball.y = _canvas.height/4;
    ball.speed = 5;
    ball.cx = -ball.cx;
}

function update(){
    ball.x += ball.cx;
    ball.y += ball.cy;

    if (ball.x - ball.r < 0 || ball.x + ball.r > _canvas.width) {
        ball.cx = -ball.cx;
    }
    if (ball.y - ball.r < 0) {
        ball.cy = -ball.cy;
    }
    if(ball.y + ball.r > _canvas.height){
        ball.cy = -ball.cy;
    }


    if (collision(ball, paddle)) {
        let collidePoint =
            (ball.x - (paddle.x + paddle.width / 2)) / (paddle.width / 2);

        let angleRad = (Math.PI / 4) * collidePoint;

        let directiony = ball.y + ball.r < _canvas.height / 2 ? 1 : -1;
        ball.cx =  ball.speed * Math.sin(angleRad);
        ball.cy = directiony * ball.speed * Math.cos(angleRad);
        //ball.cx = ball.cx;
        //ball.cy = - ball.cy;
        ball.speed += 0.1;

    }

}   
function render(){
    paddle.height = .0125*_canvas.height;
    paddle.width = .2*_canvas.width;



    $.clearRect(0, 0, _canvas.width, _canvas.height);
    // draw paddle
    $.fillStyle = "black"; 
    $.fillRect(paddle.x,paddle.y,paddle.width,paddle.height);

    //draw ball
    $.beginPath();
    $.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    $.closePath();
    $.fill();
}

window.addEventListener("resize", setCanvasSize);

function setCanvasSize() {
    console.log("resize");
    let parent = _canvas.parentNode;
    let styles = getComputedStyle(parent);
    const w = parseInt(styles.getPropertyValue("width"), 10);
    const h = parseInt(styles.getPropertyValue("height"), 10);
    _canvas.width = w;
    _canvas.height = h;
    console.log([w,h]);
}

function movePaddle(event){
    let rect = _canvas.getBoundingClientRect();
    let dx = event.clientX - rect.x; 
    let dy = event.clientY - rect.y;

    if(dx < 0 ) paddle.x = 0; 
        else if(dx > rect.width - paddle.width) { paddle.x = rect.width - paddle.width;}
        else    paddle.x = event.clientX - rect.x;
    
    /*if(dy < 0 ) paddle.y = 0;
       else if(dy > rect.height - paddle.height) { paddle.y = rect.height - paddle.height;}
        else    paddle.y = event.clientY - rect.y;*/


}
