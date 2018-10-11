
    // SNAKEDIRECTION DICTIONARY CREATIION
var SnakeDirections = {       UP: 4,        DOWN: 2,        LEFT: 3,        RIGHT: 1    };
var snake = [{x: 40, y: 200}, {x: 60, y: 200}, {x: 80, y: 200}];

export default function animate(ctx,rndX,rndY) {
     
    // ctx.fillStyle = "#384619";

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
    
    snakeshift(snake);

    var snake_head = {x: snake[snake.length - 1].x, y: snake[snake.length - 1].y};
    if (snake_head.x === rndX && snake_head.y === rndY) {
        console.log("Passed Food");
        //aud_foodCaptured.play();
        // snakeshift(snake);
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

}

function snakeshift(snake){
 
    var last_pos = snake[snake.length - 1];
    switch(1){
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




