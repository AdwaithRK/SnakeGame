

import React from 'react'
import { foodMaker } from '../SnakeFood';
import Fences from '../Fences';
import animate from '../DrawSnake'

export default class SnakeGrid extends React.Component{


    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
            const ctx = this.refs.canvas.getContext('2d');
            var fence = new Array(8);
            var makeFence = new Fences();
            var GAME_LEVEL=3;
                for(var i = 0;i<fence.length;i++){
                    fence[i] = [];
                }
                // BLANK FENCE 1
                // ctx.clearRect(0, 0, 620, 940);
                fence[0] = [];

                fence[1] = makeFence.level_2_fence();

                //LEVEL 2 FENCE
                fence[2] = makeFence.level_3_fence();
                // LEVEL 3  FENCE
                fence[3] = makeFence.level_4_fence();
                //LEVEL 4 FENCE
                 fence[4] = makeFence.level_5_fence();
                // LEVEL 5 FENCE HORIZONTALS
                 fence[5] = makeFence.level_6_fence();
                //LEVEL 6 FENCE
                 fence[6] = makeFence.level_7_fence();
                //LEVEL 7 FENCE
                fence[7] = makeFence.level_8_fence();



                var foodCordinates=foodMaker(fence,GAME_LEVEL,ctx)

                setInterval( function() { 
                    ctx.clearRect(0, 0, 959, 639);
                    for ( i =0;i<fence[GAME_LEVEL].length;i++){
                        ctx.fillRect(fence[GAME_LEVEL][i].x,fence[GAME_LEVEL][i].y,19,19);
                    }
                    animate(ctx,foodCordinates.rndX,foodCordinates.rndY); 
                },
                 150 );
    }






    render(){
        return (
            <canvas ref="canvas" width={959} height={639}/>

        );
    }
}
