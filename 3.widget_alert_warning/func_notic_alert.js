const demoSignalAlert = true;

const createdStyleTag = document.createElement("style");
createdStyleTag.textContent = `
@keyframes warning-title {
         0%, 49% {
            background-color: white;
            opacity: 1;
             
          }
          50%, 100% {
            background-color: #E85656;
            opacity: 1;
            
            
         }
    }
    
    @keyframes warning-title{
        0%, 49% {
            background-color: white;
            opacity: 1;
             
          }
          50%, 100% {
            background-color: #E85656;
            opacity: 1;
         }
    }`


document.body.appendChild(createdStyleTag);

if(demoSignalAlert){
    const e = `<div style="width:200%; height: 40px; transform: translateX(-30%); background-color: #E85656; animation-name: warning-title; animation-duration: 1s; animation-iteration-count: infinite;"></div>
    
    <audio id="alarm-alert" src="https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3" preload="auto"></audio>
    
    <script>
        
        for (i=0; i<30; i++) {
          setTimeout(function(){
              document.getElementById('alarm-alert').play();
          }, i * 800)
        }
    </script>
    `
    return e
}else{
    const e = ``
    return e
}