

export default class Fences{


    

    level_2_fence(){
        var fence = [];
        for(var i = 0;i< 48;i++){
            fence.push({x:i*20,y:0},{x:i*20,y:620});
        }
        for( i = 1;i< 31;i++){
            fence.push({y:i*20,x:0},{y:i*20,x:940});
        }

        return fence;
    }

    level_3_fence(){
        var fence = [];

        for( var i = 0;i<7;i++){
            fence.push({x:i*20,y:0},{x:940 - i*20,y:0},
                {x:i*20,y:620},{x:940 - i*20,y:620},
                {x:0,y:i*20},{x:0,y:620 - i*20},
                {x:940,y:i*20},{x:940,y:620 - i *20}
            );
        }
        var shift_X = 220;
        var shift_Y = 200;
        for( i = 0;i<25;i++) {
            fence.push({x: i * 20 + shift_X, y: shift_Y},
                {x: i * 20 + shift_X, y: 620 - shift_Y});
        }

        return fence

    }

    level_4_fence(){
        var fence = [];
        var level_3_shiftX = 300;
        var level_3_shiftY = 100;
        for( var i = 0;i<20;i++){
            fence.push({x:level_3_shiftX,y:620-i*20},{x:940-level_3_shiftX,y:i*20});
        }
        for( i = 0;i<20;i++){
            fence.push({x:i*20,y:level_3_shiftY},{x:940-i*20,y:620-level_3_shiftY});
        }

        return fence;
    }

    level_5_fence(){
        var fence = [];
        for(var i = 0;i<48;i++){
            fence.push({x:i*20,y:0},{x:i*20,y:620})
        }
        for(i = 0;i<10;i++){
            fence.push({x:0,y:i*20},{x:940,y:i*20},
                {x:0,y:620-i*20},{x:940,y:620-i*20}
            )
        }
        var shift_X = 300;
        var shift_Y = 100;
        var Y_Offet = 120;
        for(i = 0;i<20;i++){
            fence.push({x:+ shift_X,y:shift_Y +Y_Offet+ i*20},
                {x:940 - shift_X,y:shift_Y +i*20});
        }

        return fence;
    }

    level_6_fence(){
        var fence = [];
        for(var i =0;i<10;i++){
            fence.push({x:i*20,y:0});
        }
        for(i =16;i<35;i++){
            fence.push({x:i*20,y:0});
        }
        for(i =0;i<26;i++){
            fence.push({x:i*20,y:260});
        }
        for(i =34;i<48;i++){
            fence.push({x:i*20,y:260});
        }
        for(i =0;i<48;i++){
            fence.push({x:i*20,y:460});
        }
        //VERTICALS
        for(i =1;i<=8;i++){
            fence.push({x:0,y:i*20});
        }
        for(i =1;i<=12;i++){
            fence.push({x:500,y:i*20});
        }
        for(i =1;i<=12;i++){
            fence.push({x:700,y:460+i*20});
        }

        return fence;
    }


    level_7_fence(){
        var fence = [];
        for(var i=0;i<48;i++){
            fence.push({x:i*20,y:320})
        }
        for(i=0;i<48;i++){
            fence.push({x:460,y:i*20})
        }

        return fence
    }

    level_8_fence(){
        var fence = [];
        for(var i=0;i<48;i++){
            fence.push({x:i*20,y:420})
        }
        for(i = 0;i<11;i++){
            fence.push({x:240,y:420+i*20},{x:740,y:420+i*20})
        }

        return fence
    }

} 