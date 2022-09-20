import React from 'react';
import {motion} from 'framer-motion';
import logo from '../../assets/images/pfp.webp';
let mouse = {
   x: null,
   y: null,
   radius: 80
}
function ParticleImage(props){
   const ref = React.useRef(null);
   React.useEffect(()=>{
      const canvas = ref.current;
      const ctx = ref.current.getContext('2d');
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      let particleArray = [];


// get mouse mouse position ///////////////////////////////
//
      window.addEventListener('mousemove',
            function(event){
               mouse.x = event.x + window.pageXOffset;
               mouse.y = event.y + window.pageYOffset;
            });
   
      function drawImage(){
         let imageWidth = png.width || png.naturalWidth;
         let imageHeight = png.height || png.naturalHeight;
         const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
         ctx.clearRect(0,0,canvas.width, canvas.height);
         class Particle {
            constructor(x, y, color, size){
               this.x = x + canvas.width/2-png.width*2;
                     this.y = y + canvas.height/2-png.height*2;
                     this.color = color;
                     this.size = size;
                     this.baseX = x + canvas.width/2-png.width*2;
                     this.baseY = y + canvas.height/2-png.height*2;
                     this.density =12;
            }
            draw() {
               ctx.beginPath();
               ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
               ctx.closePath();
               ctx.fill();
            }
            update() {
               ctx.fillStyle = this.color;
               // check mouse position/particle position - collision detection
               let dx = mouse.x - this.x;
               let dy = mouse.y - this.y;
               let distance = Math.sqrt(dx*dx + dy*dy);
               let forceDirectionX = dx / distance;
               let forceDirectionY = dy / distance ;
               // distance past which the force is zero
               var maxDistance = 90;
               var force = (maxDistance - distance) / maxDistance;
            
               // if we go below zero, set it to zero.
               if (force < 0) force = 0;
            
               let directionX = (forceDirectionX * force * this.density/2);
               let directionY = (forceDirectionY * force * this.density/2);
            
               if (distance < mouse.radius + this.size){
                  this.x -= directionX;
                  this.y -= directionY;
               } else {
                  if (this.x !== this.baseX ) {
                     let dx = this.x - this.baseX;
                     let dy = this.y - this.baseY;
                     this.x -= dx/6;
                  } if (this.y !== this.baseY) {
                     let dx = this.x - this.baseX;
                     let dy = this.y - this.baseY;
                     this.y -= dy/8
                  }
               }
               this.draw();
            }
         }
         function init(){
            particleArray = [];
         
            for (var y = 0, y2 = data.height; y < y2; y++) {
               for (var x = 0, x2 = data.width; x < x2; x++) {
                  if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 100) {
                     let positionX = x;
                     let positionY = y;
                     let color = "rgb("+data.data[(y * 4 * data.width)+ (x * 4)]+","+data.data[(y * 4 * data.width)+ (x * 4) +1]+","+data.data[(y * 4 * data.width)+ (x * 4) +2]+")";
                  
                     particleArray.push(new Particle(positionX*4, positionY*4, color, 5));
                  
                  }
               }
            }
         
         }
         function animate(){
            requestAnimationFrame(animate);
            ctx.fillStyle = "#212121";
            ctx.fillRect(0,0, window.innerWidth,window.innerHeight);
            // ctx.clearRect(0,0,innerWidth,innerHeight);
         
         
            for (let i = 0; i < particleArray.length; i++){
               particleArray[i].update();
            }
         }
         window.addEventListener('resize', ()=>{
            canvas.width=window.innerWidth;
            canvas.height = window.innerHeight;
            init();
         })
         init();
         animate();
      
         // RESIZE SETTING - empty and refill particle array every time window changes size + change canvas size
        
      }
      
   
      var png = new Image();
      png.src= '';
      png.style.borderRadius="50%";
      png.onload=()=>{
         ctx.drawImage(png, 0, 0);
         drawImage();
      }
      
   
      return ()=> {
      
         window.removeEventListener('mousemove',
               function(event){
                  mouse.x = event.x + canvas.clientLeft/2;
                  mouse.y = event.y + canvas.clientTop/2;
               });
         window.removeEventListener('drag',
               function(event){
                  mouse.x = event.x + canvas.clientLeft/2;
                  mouse.y = event.y + canvas.clientTop/2;
               });
   
      }
   },[])
   return(
         <div
               style={{position: 'absolute',left: 0, top: 0, height: "100%", width: "100%"}}
            onMouseMove={(e)=>{
               console.log(e);
            }}>
      <motion.canvas
            ref={ref} id={"ParticleImage"}></motion.canvas>
         </div>
            )
}
export {ParticleImage}