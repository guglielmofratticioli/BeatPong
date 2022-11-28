
let [_game,_canvas] = init_app(document.body);

/**@param {Node} _father */
function init_app(_father){

    let _game = document.createElement("div");
    _game.style.display = "flex";
    _game.style.height = "90%";
    _game.style.aspectRatio = "3/4";
    _game.style.background = "white";
    _game.style.justifyContent = "center"; 

    let _canvas = document.createElement("canvas"); 
    _canvas.style.margin = "10%";
    _canvas.style.aspectRatio = "3/4";
    _canvas.style.border = "1px";
    _canvas.style.borderStyle = "solid";

    _game.appendChild(_canvas); 
    _father.appendChild(_game);
    return [_game,_canvas]; 

}

// Game Model 
const FPS = 60;
const h = _canvas.height;
const w = _canvas.width;
console.log(h);
console.log(w);

const box = {
    x: 0,
    y: 0,
    width: h,
    height: w,
    color: "black",
} 
const paddle = {
    x: .4*w,
    y: .485*h,
    width: .2*w,
    height: .03*h,
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

setInterval(game, 1000/FPS);

function game(){
    update();
    render();
} 

function update(){
  
}   
function render(){
    $.fillStyle = "black"; 
    $.fillRect(paddle.x,paddle.y,paddle.width,paddle.height);
}

