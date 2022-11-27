let [_game, _background, _HUD, _BAR, _BALL] = make_Ui();
_settingUI = make_Setting()

_game.child = _settingUI



function make_Ui(){
    let _game = document.createElement("div");
    _game.id = "game"; 

    let _background = make_Background(_game);
    let _HUD = make_HUD(_game);
    let _BAR = make_Bar(_game,barX,barY);
    let _BALL = make_Ball(_game,ballX,ballY);
    return [_game, _background, _HUD, _BAR, _BALL]
}

function make_Background(father){
    let _body = document.body; 
    _background.concat(_game);

    return _background;
}

function make_HUD(){}
function make_Bar(){}
function make_Ball(){}