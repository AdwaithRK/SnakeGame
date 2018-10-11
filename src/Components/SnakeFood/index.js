export function foodMaker(fence,GAME_LEVEL,ctx){
    var rndX = Math.round(Math.random() * 38)*20;
    var rndY = Math.round(Math.random() * 38)*20;
    console.log(rndX,rndY);
    while(rndX > 920 || rndY > 600){
        rndX = Math.round(Math.random() * 38)*20;
        rndY = Math.round(Math.random() * 38)*20;
    }

    try {
        var total_length = fence[GAME_LEVEL].length ||0;

    }
    catch(err) {
        var total_length = 0;

    }
    for (var i = 0;i<total_length;i++){
        if (fence[GAME_LEVEL][i].x === rndX && fence[GAME_LEVEL][i].y === rndY){
            rndX = Math.round(Math.random() * 38)*20;
            rndY = Math.round(Math.random() * 38)*20;
            i = 0;
            console.log("IN FENSE");
        }
        console.log("LOOPING");
    }

    snakeFoodDraw(rndX,rndY,ctx)

    return [rndX, rndY]
}

export function snakeFoodDraw(rndX,rndY,ctx) {
    // Changed Shape of Food
    ctx.fillRect(rndX + 6,rndY,6,6);
    ctx.fillRect(rndX + 6,rndY + 12,6,6);
    ctx.fillRect(rndX,rndY + 6,6,6);
    ctx.fillRect(rndX + 12,rndY + 6,6,6);
}
