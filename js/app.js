

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
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    color: "black",
} 

                    //                  

            
 
const $ = _canvas.getContext("2d");
document.body.addEventListener("mousemove", movePaddle);

setInterval(game, 1000/FPS);

function game(){
    update();
    render();
} 
function update(){
  
}   
function render(){
    setCanvasSize();
    paddle.height = .0125*_canvas.height;
    paddle.width = .2*_canvas.width;

    $.clearRect(0, 0, _canvas.width, _canvas.height);
    // draw paddle
    $.fillStyle = "black"; 
    $.fillRect(paddle.x,paddle.y,paddle.width,paddle.height);
}

//document.addEventListener("resize", setCanvasSize);

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
    
    if(dy < 0 ) paddle.y = 0; 
        else if(dy > rect.height - paddle.height) { paddle.y = rect.height - paddle.height;}
        else    paddle.y = event.clientY - rect.y;


}

