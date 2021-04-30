<template>
    <div class="canvas-test">
        <canvas ref="myCanvas" height="880" width="1500" id="myCanvas">
        </canvas>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { ref, reactive, onMounted } from 'vue'

export default defineComponent({
    name: 'canvasTest',
    setup() {
        const myCanvas = reactive(ref(null))
        onMounted(() => {
            const canvas= myCanvas.value
            var ctx = canvas.getContext('2d')
            ctx.globalCompositeOperation = "lighter";
            // window.setInterval(()=>{darw(ctx); ctx.moveTo(ctx.canvas.clientWidth / 2 + 5, ctx.canvas.clientHeight - 20 + 5);}, 800);
            darw(ctx,ctx.canvas.clientWidth/2,ctx.canvas.clientHeight + 160,150,-Math.PI / 2, 10, 30)
            // darw(ctx,ctx.canvas.clientWidth/1.5,ctx.canvas.clientHeight + 160,150,-Math.PI / 2, 10, 30)
        })
        // function randomInt(from, to){
        //     return parseInt(Math.random() * 100);
        // }
        const darw = ((ctx,startx,starty,length,angle,depth,branchWidth) => {
            var rand=Math.random,
            n_length,n_angle,n_depth,maxbranch = 4,
            endx,endy,maxangle=2 * Math.PI / 4;
            var subbranch;
            ctx.beginPath();
            ctx.moveTo(startx,starty);
            endx=startx + length * Math.cos(angle);
            endy=starty + length * Math.sin(angle);
            ctx.lineCap='round';
            ctx.lineWidth=branchWidth;
            ctx.lineTo(endx,endy);
            if(depth<=1 ){
                ctx.strokeStyle= `rgb(${(parseInt(rand() * 256))},${(parseInt(rand() * 256))},${(parseInt(rand() * 256))})`;
            }
            else{
                //树干
                ctx.strokeStyle= `rgb(${(parseInt(rand() * 256))},${(parseInt(rand() * 256))},${(parseInt(rand() * 256))})`;
            }
            ctx.stroke();
            n_depth = depth-1;
            //判断树是否结束
            if(!n_depth){
                return;
            }
            subbranch= (rand() * (maxbranch-1)) + 1;
            branchWidth *=0.5; 
            for(var i=0;i<subbranch;i++){
                n_angle = angle +rand() * maxangle -maxangle *0.5;
                n_length = length * (0.5 + rand() *0.5);
                setTimeout(function (){
                    darw(ctx,endx,endy,n_length,n_angle,n_depth,branchWidth);
                    return;
                },1000 / 60)
            }
        })

        return {
            myCanvas,
        }
    },
})
</script>

<style lang="scss">
    .canvas-test {
        text-align: center;
    }
</style>