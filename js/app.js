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

make_app(document.body);

/**@param {Node} _father */
function make_app(_father){

    let _game = document.createElement("div");
    _game.style.display = "flex";
    _game.style.margin = "10%";
    _game.style.aspectRatio = "3/4";
    _game.style.background = "white";
    _game.style.justifyContent = "center"; 

    let _canvas = document.createElement("canvas"); 
    _canvas.style.margin = "10%";
    _canvas.style.aspectRatio = "3/4";
    _canvas.style.border = "1px";
    _canvas.style.borderStyle = "solid";

    setInterval(game, 1000/FPS);


    _game.appendChild(_canvas); 
    _father.appendChild(_game);
    return _game; 

}

function game(){


} 
function update(){

}
function render(){

}

