// เปลี่ยนเป็น value ธรรมดา นะครับถ้า production //
const value_demo = 1;

if (value_demo === 0){
    
    
    const  e = `
    <div style="background-color:#DA1B1B;color:white;font-weight:bold;height:50px;display:flex;align-items:center;justify-content:flex-start; animation-name: warning; animation-duration: 1s; animation-iteration-count: infinite;">
        <span style="height:25px;  width: 25px;background-color: #FFADAD;border-radius: 50%;display: inline-block;margin-right:10px;margin-left:45%"></span>
        Alarm
    </div>
    
    <audio id="xyz" src="https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3" preload="auto"></audio>
    
    <script>
        
        for (i=0; i<30; i++) {
          setTimeout(function(){
              document.getElementById('xyz').play();
          }, i * 800)
        }
    </script>
    `;
    
    const createdStyleTag = document.createElement("style");
    createdStyleTag.textContent = `@keyframes warning {
     0%, 49% {
        color: white;
        opacity: 1;
        background: rgb(229, 87, 87);
      }
      50%, 100% {
        color: #DA1B1B;
        opacity: 1;
        background: rgb(255, 255, 255);
      }
    }`;
    
    document.body.appendChild(createdStyleTag);

    return e
}else{
    const n = `
    <div style="height:50px;display:flex;align-items:center;justify-content:flex-start;">
        <span style="height:25px;  width: 25px;background-color: #88ccaa;border-radius: 50%;display: inline-block;margin-right:10px;margin-left:45%"></span>
        Normal
    </div>`;

    return n
}