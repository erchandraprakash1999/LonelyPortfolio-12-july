// let canvas = document.getElementById('canvas');
// let info = document.querySelector('.info');
// const ctx = canvas.getContext('2d');
// canvas.width = info.clientWidth;
// canvas.height = info.clientHeight;
// let spots = [];
// let hue =0;

// let mouse = {
//     x:undefined,
//     y:undefined
// }

// canvas.addEventListener('mousemove',(e)=>{
//     mouse.x = e.x;
//     mouse.y = e.y;
//     // console.log(e.x,"------",e.y);
//     spots.push(new Particle());
// })

export default class Particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random()*7 + 0.1;
        this.speedx = Math.random()*0.3-1;
        this.speedy = Math.random()*1 -1;
        this.color = `hsl(${hue},100%,50%)`;
    }
    update(){
        this.x += this.speedx;
        this.y += this.speedy;
        if(this.size > 0.1) this.size -= 0.03;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
        ctx.fill();
    }
}


// function handleparticle(){
//     for(let i=0;i<spots.length;i++){
//         spots[i].update();
//         spots[i].draw();
//         for(let j=i; j<spots.length;j++){
//             const dx = spots[i].x - spots[j].x;
//             const dy = spots[i].y - spots[j].y;
//             const distance = Math.sqrt(dx*dx+dy*dy);
//             if(distance < 90){
//                 ctx.beginPath();
//                 ctx.strokeStyle = spots[j].color;
//                 ctx.lineWidth = spots[j].size / 10;
//                 ctx.moveTo(spots[i].x,spots[i].y);
//                 ctx.lineTo(spots[j].x,spots[j].y);
//                 ctx.stroke();
//             }
//         }
//         if(spots[i].size <= 0.3){
//             spots.splice(i,1); i--;
//         }
//     }
// }


// function animate(){
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     handleparticle();
//     hue++;
//     requestAnimationFrame(animate);
// }
// window.addEventListener('resize',()=>{
//     canvas.height = innerHeight
//     canvas.width = innerWidth;
//     init();
// })
// window.addEventListener('mouseout',()=>{
//     mouse.x = undefined,
//     mouse.y = undefined
// })
// animate();

