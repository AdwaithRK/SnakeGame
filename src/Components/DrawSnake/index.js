
    // SNAKEDIRECTION DICTIONARY CREATIION
var SnakeDirections = {       UP: 4,        DOWN: 2,        LEFT: 3,        RIGHT: 1    };
var snake = [{x: 40, y: 200}, {x: 60, y: 200}, {x: 80, y: 200}];
var direction = SnakeDirections.RIGHT;
document.addEventListener("keydown", function (e) {
    // console.log("in event listner")
    var keyCode = e.keyCode;
    var keyList = {39:false,40:false,37:false,38:false};
    keyList[keyCode] = true;

    // PRECAUTION TO PREVENT HITTING MUTLIPLE KEY( IMPLIMENTED A BOOLEAN FUNCTION WITH VARIABLES WHICH SHOWS TRUE WHEN ONLY ONE VARIABLE IS TRUE)
    // USED HERE TO DETECT WHETHER TWO KEYS HAS BEEN STRUCK TOGETHER
    if(!keyList[39] && !keyList[40] && !keyList[37] && keyList[38] ||
        !keyList[39] && !keyList[40] && keyList[37] && !keyList[38] ||
        !keyList[39] && keyList[40] && !keyList[37] && !keyList[38] ||
        keyList[39] && !keyList[40] && !keyList[37] && !keyList[38]
    ){
        if ((keyCode === 39) && direction != SnakeDirections.LEFT) {
            // key_executed = false;
            direction = SnakeDirections.RIGHT;
            // aud_btnPress.play();
        }
        else if ((keyCode === 40) && direction != SnakeDirections.UP ) {
            // key_executed = false;
            direction = SnakeDirections.DOWN;
            // aud_btnPress.play();
        }
        else if ((keyCode === 37)&& direction != SnakeDirections.RIGHT ) {
            // key_executed = false;
            direction = SnakeDirections.LEFT;
            // aud_btnPress.play();
        }
        else if ((keyCode === 38) && direction != SnakeDirections.DOWN ) {
            // key_executed = false;
            direction = SnakeDirections.UP;
            // aud_btnPress.play();
        }
    }
});
export default function animate(ctx,rndX,rndY,fence) {
     
    // ctx.fillStyle = "#384619";
    
    
    // console.log("directon in main function is",direction)
    // LOOP FOR DRAWING SNAKE
    for (var i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, 19, 19);


        // IF ELSE SECTION TO DETECT WHETHER THE SNAKE HEAD HAS PASSED ORIGIN
        // AND SET APPROPIRATE  CO ORDIATES
        if (snake[i].x > 940) {
            snake[i].x = 0;
        }
        if (snake[i].y > 620) {
            snake[i].y = 0;
        }
        if (snake[i].x < 0) {
            snake[i].x = 960;
        }
        if (snake[i].y < 0) {
            snake[i].y = 640;
        }
    }

    snake.shift(); // USED TO MOVE SNAKE
    
    snakeshift(snake,direction);

    var snake_head = {x: snake[snake.length - 1].x, y: snake[snake.length - 1].y};
    console.log(snake_head);
    console.log("food is",rndX,rndY);
    if (snake_head.x === rndX && snake_head.y === rndY) {
        console.log("Passed Food !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        // process.exit();
        // aud_foodCaptured.play();
        snakeshift(snake,direction);
        // if(score%10 == 0){
        //     snake = [{x: 40, y: 180}, {x: 60, y: 180}, {x: 80, y: 180}];
        //     direction = SnakeDirections.RIGHT;
        //     GAME_LEVEL = GAME_LEVEL + 1;
        //     foodMaker();
        //     if(GAME_LEVEL === 8){
        //         GAME_LEVEL = 0;
        //         REFRESH_DELAY = REFRESH_DELAY - 20;
        //         clearInterval(interval_id);
        //         interval_id = setInterval(animate,REFRESH_DELAY);
        //         level = level + 1;
        //     }
        // }
    }

    for(var i = 0;i< fence[GAME_LEVEL].length;i++){
        if (snake_head.x === fence[GAME_LEVEL][i].x && snake_head.y === fence[GAME_LEVEL][i].y){
            selfBite();
        }
    }

}

function snakeshift(snake,direction){
    //   console.log("direction is",direction);
    var last_pos = snake[snake.length - 1];
    switch(direction){
        case 1:
            snake.push({x:last_pos.x + 20,y:last_pos.y});
            break;
        case 2:
            snake.push({x:last_pos.x,y:last_pos.y + 20});
            break;
        case 3:
            snake.push({x:last_pos.x - 20,y:last_pos.y});
            break;
        case 4:
            snake.push({x:last_pos.x,y:last_pos.y - 20});
            break;
        default:
        break;
    }
}




