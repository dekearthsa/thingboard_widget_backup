// const getRandomInt = (max) => {
//   return Math.floor(Math.random() * max);
// }

// const getRandomAlertType = () => {
//     let arrayDemoAlert = []
//     for(let i = 0; i < 3; i++){
//         const randType = getRandomInt(3);
//         arrayDemoAlert.push(randType);
//     }
    
//     const dropDuplicates = [...new Set(arrayDemoAlert)];
//     return dropDuplicates
// }

// const demoAlertReult = getRandomAlertType();
// console.log("rand =>",demoAlertReult);
 
// const alertFirePump = demoAlertReult.includes(0)?true:false
// const alertFireAlarm = demoAlertReult.includes(1)?true:false
// const alertGenerator = demoAlertReult.includes(2)?true:false
 
// function remove widget icon // 
const removingUnnameDevice = (deviceList, widgetDevice) => {
    
    if(deviceList.includes('fire-pump') && deviceList.includes('fire-alarm') && deviceList.includes('generator')){
        return widgetDevice
    }else if(deviceList.includes('fire-pump') && deviceList.includes('fire-alarm')){
        widgetDevice.generator.alarmIcon = ``;
        widgetDevice.generator.normalIcon = ``;
        return widgetDevice
    }else if(deviceList.includes('fire-pump') &&  deviceList.includes('generator')){
        widgetDevice.fireAlarm.alarmIcon = ``;
        widgetDevice.fireAlarm.normalIcon = ``;
        return widgetDevice
    }else if(deviceList.includes('fire-alarm') && deviceList.includes('generator')){
        widgetDevice.firePump.alarmIcon = ``;
        widgetDevice.firePump.normalIcon = ``;
        return widgetDevice
    }else if(deviceList.includes('fire-pump')){
        widgetDevice.fireAlarm.alarmIcon = ``;
        widgetDevice.fireAlarm.normalIcon = ``;
        widgetDevice.generator.alarmIcon = ``;
        widgetDevice.generator.normalIcon = ``;
        return widgetDevice
    }else if(deviceList.includes('fire-alarm')){
        widgetDevice.firePump.alarmIcon = ``;
        widgetDevice.firePump.normalIcon = ``;
        widgetDevice.generator.alarmIcon = ``;
        widgetDevice.generator.normalIcon = ``;
        return widgetDevice
    }else if(deviceList.includes('generator')){
        widgetDevice.firePump.alarmIcon = ``;
        widgetDevice.firePump.normalIcon = ``;
        widgetDevice.fireAlarm.alarmIcon = ``;
        widgetDevice.fireAlarm.normalIcon = ``;
        return widgetDevice
    }
}

const deviceList = ["fire-pump","fire-alarm", "generator"];

let widgetAlertIcon = {
    firePump: {
        alarmIcon:`<div id="fire-pump" class='widget-container'>
                        <div id="icon-pump" style="font-size=14; animation-name: warning-s; animation-duration: 1s; animation-iteration-count: infinite;">
                            <svg style="animation-name: warning-icon; animation-duration: 1s; animation-iteration-count: infinite;" width="30px" height="30px" viewBox2="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <title>water-drop</title>
                                <path d="M25.378 19.75c1.507 6.027-3.162 11.25-9.375 11.25s-10.9-5.149-9.375-11.25c0.937-3.75 5.625-9.375 9.375-18.75 3.75 9.374 8.438 15 9.375 18.75z"></path>
                            </svg>
                            <div>Fire-pump</div>
                        </div>
                     </div>`,
        normalIcon: `<div id="fire-pump" class='widget-container'>
                        <div id="icon" style="color: #BFBEBE; font-size=14">
                            <svg fill="#BFBEBE" width="30px" height="30px" viewBox2="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <title>water-drop</title>
                                <path d="M25.378 19.75c1.507 6.027-3.162 11.25-9.375 11.25s-10.9-5.149-9.375-11.25c0.937-3.75 5.625-9.375 9.375-18.75 3.75 9.374 8.438 15 9.375 18.75z"></path>
                            </svg>
                            <div>Fire-pump</div>
                        </div>
                     </div>`
    },
    fireAlarm: {
        alarmIcon:`<div id="fire-alarm" class='widget-container'>
                        <div id="icon-alarm" style="font-size=14; animation-name: warning-s; animation-duration: 1s; animation-iteration-count: infinite;">
                            <svg style="animation-name: warning-icon; animation-duration: 1s; animation-iteration-count: infinite;" width="30px" height="30px" viewBox2="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.926 20.574a7.26 7.26 0 0 0 3.039 1.511c.107.035.179-.105.107-.175-2.395-2.285-1.079-4.758-.107-5.873.693-.796 1.68-2.107 1.608-3.865 0-.176.18-.317.322-.211 1.359.703 2.288 2.25 2.538 3.515.394-.386.537-.984.537-1.511 0-.176.214-.317.393-.176 1.287 1.16 3.503 5.097-.072 8.19-.071.071 0 .212.072.177a8.761 8.761 0 0 0 3.003-1.442c5.827-4.5 2.037-12.48-.43-15.116-.321-.317-.893-.106-.893.351-.036.95-.322 2.004-1.072 2.707-.572-2.39-2.478-5.105-5.195-6.441-.357-.176-.786.105-.75.492.07 3.27-2.063 5.352-3.922 8.059-1.645 2.425-2.717 6.89.822 9.808z" />
                            </svg>
                            <div>Fire-alarm</div>
                        </div>
                     </div>`,
        normalIcon: `<div id="fire-alarm" class='widget-container'>
                        <div id="icon-alarm" style="color: #BFBEBE; font-size=14">
                            <svg style="fill: #BFBEBE" width="30px" height="30px" viewBox2="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.926 20.574a7.26 7.26 0 0 0 3.039 1.511c.107.035.179-.105.107-.175-2.395-2.285-1.079-4.758-.107-5.873.693-.796 1.68-2.107 1.608-3.865 0-.176.18-.317.322-.211 1.359.703 2.288 2.25 2.538 3.515.394-.386.537-.984.537-1.511 0-.176.214-.317.393-.176 1.287 1.16 3.503 5.097-.072 8.19-.071.071 0 .212.072.177a8.761 8.761 0 0 0 3.003-1.442c5.827-4.5 2.037-12.48-.43-15.116-.321-.317-.893-.106-.893.351-.036.95-.322 2.004-1.072 2.707-.572-2.39-2.478-5.105-5.195-6.441-.357-.176-.786.105-.75.492.07 3.27-2.063 5.352-3.922 8.059-1.645 2.425-2.717 6.89.822 9.808z" />
                            </svg>
                            <div>Fire-alarm</div>
                        </div>
                     </div>`
    },
    generator: {
        alarmIcon:`<div id="generator" class='widget-container'>
                        <div id="icon-alarm" style="font-size=14; animation-name: warning-s; animation-duration: 1s; animation-iteration-count: infinite;">
                            <svg style="animation-name: warning-icon; animation-duration: 1s; animation-iteration-count: infinite;"  width="30px" height="30px" viewBox2="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.078035,0 C11.3724371,0 11.6350302,0.183056678 11.7339285,0.457230801 L12.4396543,2.41370379 C12.6930786,2.47650967 12.9108093,2.54030436 13.0942558,2.60592238 C13.2952001,2.67779926 13.5540423,2.78741449 13.8746747,2.93586046 L15.5184936,2.06596774 C15.794148,1.92009416 16.1343396,1.97375545 16.3504064,2.19719235 L17.7960017,3.69209722 C17.98787,3.8905102 18.0422042,4.18265582 17.9342767,4.43557836 L17.162857,6.24336136 C17.2913496,6.47797752 17.3939318,6.67854463 17.4711247,6.84658462 C17.5553742,7.02998593 17.6588292,7.28241713 17.7829588,7.60671302 L19.580333,8.37623211 C19.8497082,8.4915611 20.0170118,8.76152727 19.9986241,9.05119919 L19.8669066,11.126215 C19.8494975,11.4004703 19.668825,11.6382294 19.4072566,11.7310995 L17.7049419,12.3355083 C17.6562729,12.5705675 17.6053791,12.772402 17.551477,12.9424906 C17.4883274,13.1417599 17.389065,13.3979932 17.2526724,13.7155635 L18.1084613,15.6068822 C18.2316885,15.879218 18.1635045,16.1990386 17.9395819,16.3990196 L16.3138559,17.8509252 C16.0957241,18.0457347 15.7773686,18.084139 15.5182641,17.9469002 L13.8421792,17.0591354 C13.5477413,17.2124998 13.2783109,17.3348831 13.0324612,17.4263047 C12.8127426,17.5080092 12.5685018,17.5992352 12.2997543,17.6999771 L11.6499659,19.5002547 C11.5529743,19.7689756 11.2984077,19.9507082 11.0099151,19.9571805 L9.10927684,20 C8.81300029,20.0064684 8.54492708,19.8269822 8.44118272,19.5525044 L7.6751041,17.5256808 C7.3232066,17.4026533 7.06612795,17.3070148 6.89898146,17.2366139 C6.74058527,17.1698987 6.53544077,17.0722593 6.28058727,16.9426265 L4.38190658,17.7549437 C4.12577479,17.8645252 3.82821583,17.812324 3.62584584,17.6223069 L2.22106797,16.3032781 C2.00593124,16.1012735 1.94386481,15.7866753 2.0664447,15.519534 L2.88322205,13.7395109 C2.76017205,13.4979963 2.65957084,13.2838441 2.58116863,13.0959926 C2.49857708,12.8981035 2.39862152,12.628586 2.28009144,12.2848943 L0.491710371,11.7412063 C0.190471763,11.6496264 -0.0110085834,11.3694211 0.000465944291,11.0580168 L0.071249487,9.13703967 C0.0806273232,8.88253689 0.2313194,8.65393727 0.463026654,8.5427144 L2.34096885,7.64127468 C2.42759746,7.32228988 2.50386559,7.07419005 2.57165467,6.89274074 C2.63878533,6.7130538 2.74293335,6.47740464 2.8854431,6.18143219 L2.06997455,4.45996626 C1.94312228,4.19217928 2.00336838,3.87420996 2.21965377,3.66998322 L3.62443163,2.34352648 C3.82439931,2.15470767 4.11840992,2.10075785 4.37358276,2.20606012 L6.27210909,2.98952564 C6.4823493,2.85093927 6.67247185,2.73658268 6.84371422,2.6461118 C7.04934485,2.53747289 7.3225817,2.42318736 7.66837893,2.29976859 L8.32789678,0.458652854 C8.42637398,0.183743082 8.68933933,0 8.98430143,0 L11.078035,0 Z M10.0237083,7.01854658 C8.35715373,7.01854658 7.00614429,8.35435786 7.00614429,10.0021646 C7.00614429,11.6499713 8.35715373,12.9857826 10.0237083,12.9857826 C11.6902629,12.9857826 13.0412723,11.6499713 13.0412723,10.0021646 C13.0412723,8.35435786 11.6902629,7.01854658 10.0237083,7.01854658 Z"/>
                            </svg>
                            <div>Generator</div>
                        </div>
                     </div>`,
        normalIcon: `<div id="generator" class='widget-container'>
                        <div id="icon-alarm" style="color: #BFBEBE; font-size=14">
                            <svg style="fill: #BFBEBE"  width="30px" height="30px" viewBox2="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path  d="M11.078035,0 C11.3724371,0 11.6350302,0.183056678 11.7339285,0.457230801 L12.4396543,2.41370379 C12.6930786,2.47650967 12.9108093,2.54030436 13.0942558,2.60592238 C13.2952001,2.67779926 13.5540423,2.78741449 13.8746747,2.93586046 L15.5184936,2.06596774 C15.794148,1.92009416 16.1343396,1.97375545 16.3504064,2.19719235 L17.7960017,3.69209722 C17.98787,3.8905102 18.0422042,4.18265582 17.9342767,4.43557836 L17.162857,6.24336136 C17.2913496,6.47797752 17.3939318,6.67854463 17.4711247,6.84658462 C17.5553742,7.02998593 17.6588292,7.28241713 17.7829588,7.60671302 L19.580333,8.37623211 C19.8497082,8.4915611 20.0170118,8.76152727 19.9986241,9.05119919 L19.8669066,11.126215 C19.8494975,11.4004703 19.668825,11.6382294 19.4072566,11.7310995 L17.7049419,12.3355083 C17.6562729,12.5705675 17.6053791,12.772402 17.551477,12.9424906 C17.4883274,13.1417599 17.389065,13.3979932 17.2526724,13.7155635 L18.1084613,15.6068822 C18.2316885,15.879218 18.1635045,16.1990386 17.9395819,16.3990196 L16.3138559,17.8509252 C16.0957241,18.0457347 15.7773686,18.084139 15.5182641,17.9469002 L13.8421792,17.0591354 C13.5477413,17.2124998 13.2783109,17.3348831 13.0324612,17.4263047 C12.8127426,17.5080092 12.5685018,17.5992352 12.2997543,17.6999771 L11.6499659,19.5002547 C11.5529743,19.7689756 11.2984077,19.9507082 11.0099151,19.9571805 L9.10927684,20 C8.81300029,20.0064684 8.54492708,19.8269822 8.44118272,19.5525044 L7.6751041,17.5256808 C7.3232066,17.4026533 7.06612795,17.3070148 6.89898146,17.2366139 C6.74058527,17.1698987 6.53544077,17.0722593 6.28058727,16.9426265 L4.38190658,17.7549437 C4.12577479,17.8645252 3.82821583,17.812324 3.62584584,17.6223069 L2.22106797,16.3032781 C2.00593124,16.1012735 1.94386481,15.7866753 2.0664447,15.519534 L2.88322205,13.7395109 C2.76017205,13.4979963 2.65957084,13.2838441 2.58116863,13.0959926 C2.49857708,12.8981035 2.39862152,12.628586 2.28009144,12.2848943 L0.491710371,11.7412063 C0.190471763,11.6496264 -0.0110085834,11.3694211 0.000465944291,11.0580168 L0.071249487,9.13703967 C0.0806273232,8.88253689 0.2313194,8.65393727 0.463026654,8.5427144 L2.34096885,7.64127468 C2.42759746,7.32228988 2.50386559,7.07419005 2.57165467,6.89274074 C2.63878533,6.7130538 2.74293335,6.47740464 2.8854431,6.18143219 L2.06997455,4.45996626 C1.94312228,4.19217928 2.00336838,3.87420996 2.21965377,3.66998322 L3.62443163,2.34352648 C3.82439931,2.15470767 4.11840992,2.10075785 4.37358276,2.20606012 L6.27210909,2.98952564 C6.4823493,2.85093927 6.67247185,2.73658268 6.84371422,2.6461118 C7.04934485,2.53747289 7.3225817,2.42318736 7.66837893,2.29976859 L8.32789678,0.458652854 C8.42637398,0.183743082 8.68933933,0 8.98430143,0 L11.078035,0 Z M10.0237083,7.01854658 C8.35715373,7.01854658 7.00614429,8.35435786 7.00614429,10.0021646 C7.00614429,11.6499713 8.35715373,12.9857826 10.0237083,12.9857826 C11.6902629,12.9857826 13.0412723,11.6499713 13.0412723,10.0021646 C13.0412723,8.35435786 11.6902629,7.01854658 10.0237083,7.01854658 Z"/>
                            </svg>
                            <div>Generator</div>
                        </div>
                     </div>`
    },
}



widgetAlertIcon = removingUnnameDevice(deviceList, widgetAlertIcon);


let alertFirePump = true;
let alertFireAlarm = false;
let alertGenerator = false;




let demoData = [
        {
            device_name: "fire-pump",
            address: "Payathai3",
            building: "Medical center",
            floor: "19",
            room: "x-ray-1"
        },
        {
            device_name: "fire-pump",
            address: "Payathai3",
            building: "West gate",
            floor: "1",
            room: "Controll room"
        }
    ]
    
    
let stringData = ""
for (let i = 0; i < demoData.length; i++) {
    const genHTML = `<div style="color: #E85656; margin-left: 10px;  margin-top: 5px;">
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#E85656" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_949_22806)">
            <path d="M12 6.5C12.5523 6.5 13 6.94772 13 7.5L13 13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5L11 7.5C11 6.94772 11.4477 6.5 12 6.5Z" fill="#000000"/>
            <path d="M12 18.5C12.8284 18.5 13.5 17.8284 13.5 17C13.5 16.1716 12.8284 15.5 12 15.5C11.1716 15.5 10.5 16.1716 10.5 17C10.5 17.8284 11.1716 18.5 12 18.5Z" fill="#000000"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.82664 2.22902C10.7938 0.590326 13.2063 0.590325 14.1735 2.22902L23.6599 18.3024C24.6578 19.9933 23.3638 22 21.4865 22H2.51362C0.63634 22 -0.657696 19.9933 0.340215 18.3024L9.82664 2.22902ZM12.4511 3.24557C12.2578 2.91814 11.7423 2.91814 11.549 3.24557L2.06261 19.319C1.90904 19.5792 2.07002 20 2.51362 20H21.4865C21.9301 20 22.0911 19.5792 21.9375 19.319L12.4511 3.24557Z" fill="#E85656"/>
        </g>
        <defs>
            <clipPath id="clip0_949_22806">
                <rect width="24" height="24" fill="#E85656"/>
            </clipPath>
        </defs>
    </svg>
    <b>device name:</b> ${demoData[i].device_name}, <b>address:</b> ${demoData[i].address}, <b>building:</b> ${demoData[i].building}, <b>floor:</b> ${demoData[i].floor},  <b>room:</b> ${demoData[i].room}</div>`
    
    stringData += genHTML
}
    


const createdStyleTag = document.createElement("style");
createdStyleTag.textContent = `
    .card2{
        display: grid;
        grid-template-columns:1fr 2fr;
        padding: 10px;
        margin-top: 4px;
        transform: translateX(-10%);
    }
    
    .box2{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%px;
        
    }
    
    .box2-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 12px;
        /*border: 1px solid #C2C2C2;*/
        border-radius: 10px;
        text-align: center;
    }
    
    .detail-alert{
        display: flex;
        padding: 30px;
        border: 1px solid #C2C2C2;
        border-radius: 10px;
        
    }
    
    .container-detail2{
    margin-left: 10%;
        width: 100%;
        height: 100%;
    }
    
    .widget-container{
        margin-left: 20px;
    }
    
    .title{
        color: #7F7F7F;
    
    }
    
    .detail{
        border: 1px solid #BFBEBE;
        height: 150px;
        width: 800px;
        margin-top:10px;
        border-radius: 10px;
        overflow-y: scroll;
    }
    
    .title-w{
        font-weight: bold;
        color: #737373;
        margin-left: 10px;
    }
    @keyframes warning-s {
         0%, 49% {
            color: #BFBEBE;
            opacity: 1;
             
          }
          50%, 100% {
            color: #E85656;
            opacity: 1;
            
            
         }
    }
    
    @keyframes warning-icon{
        0%, 49% {
            fill: #BFBEBE;
            opacity: 1;
             
          }
          50%, 100% {
            fill: #E85656;
            opacity: 1;
         }
    }`;
    
document.body.appendChild(createdStyleTag);

 
if(alertFirePump === true && alertFireAlarm === false && alertGenerator === false ){
        
        const setEl = `
         <div class='card2'>
             <div class='box2'>
                 <div class='box2-container'>
                    ${widgetAlertIcon.firePump.alarmIcon}
                    ${widgetAlertIcon.fireAlarm.normalIcon}
                    ${widgetAlertIcon.generator.normalIcon}
                 </div>
             </div>
             <div class="container-detail2"
                 style="color: #868383 margin-top: 10px margin-left: 10px;">
                 <div class="title">
                     Report
                 </div>
                 <div class="detail" >
                    ${stringData}
                 </div>
             </div>
         </div>
        `
    
        return setEl
        
    }else if((!alertFirePump) && alertFireAlarm && (!alertGenerator)) {
        const setEl = `
         <div class='card2'>
             <div class='box2'>
                 <div class='box2-container'>
                     ${widgetAlertIcon.firePump.normalIcon}
                    ${widgetAlertIcon.fireAlarm.alarmIcon}
                    ${widgetAlertIcon.generator.normalIcon}
                 </div>
             </div>
             <div class="container-detail2"
                 style="color: #868383 margin-top: 10px margin-left: 10px;">
                 <div class="title">
                     Report
                 </div>
                 <div class="detail" >
                    ${stringData}
                 </div>
             </div>
         </div>
        `
        return setEl
    
    } else if ((!alertFirePump) && (!alertFireAlarm) && alertGenerator) {
        
    const setEl = `
         <div class='card2'>
             <div class='box2'>
                 <div class='box2-container'>
                    ${widgetAlertIcon.firePump.normalIcon}
                    ${widgetAlertIcon.fireAlarm.normalIcon}
                    ${widgetAlertIcon.generator.alarmIcon}
                 </div>
             </div>
             <div class="container-detail2"
                 style="color: #868383 margin-top: 10px margin-left: 10px;">
                 <div class="title">
                     Report
                 </div>
                 <div class="detail" >
                    ${stringData}
                 </div>
             </div>
         </div>
        `
        return setEl
    
    } else if (alertFirePump && alertFireAlarm && (!alertGenerator)) {
        const setEl = `
         <div class='card2'>
             <div class='box2'>
                 <div class='box2-container'>
                    ${widgetAlertIcon.firePump.alarmIcon}
                    ${widgetAlertIcon.fireAlarm.alarmIcon}
                    ${widgetAlertIcon.generator.normalIcon}
                 </div>
             </div>
             <div class="container-detail2"
                 style="color: #868383 margin-top: 10px margin-left: 10px;">
                 <div class="title">
                     Report
                 </div>
                 <div class="detail" >
                    ${stringData}
                 </div>
             </div>
         </div>
        `
        return setEl
    }else if((!alertFirePump) && alertFireAlarm && alertGenerator) {
        const setEl = `
         <div class='card2'>
             <div class='box2'>
                 <div class='box2-container'>
                    ${widgetAlertIcon.firePump.normalIcon}
                    ${widgetAlertIcon.fireAlarm.alarmIcon}
                    ${widgetAlertIcon.generator.alarmIcon}
                 </div>
             </div>
             <div class="container-detail2"
                 style="color: #868383 margin-top: 10px margin-left: 10px;">
                 <div class="title">
                     Report
                 </div>
                 <div class="detail" >
                    ${stringData}
                 </div>
             </div>
         </div>
        `
        return setEl
    }else if (alertFirePump && (!alertFireAlarm) && alertGenerator) {
        const setEl = `
         <div class='card2'>
             <div class='box2'>
                 <div class='box2-container'>
                    ${widgetAlertIcon.firePump.alarmIcon}
                    ${widgetAlertIcon.fireAlarm.normalIcon}
                    ${widgetAlertIcon.generator.alarmIcon}
                 </div>
             </div>
             <div class="container-detail2"
                 style="color: #868383 margin-top: 10px margin-left: 10px;">
                 <div class="title">
                     Report
                 </div>
                 <div class="detail" >
                    ${stringData}
                 </div>
             </div>
         </div>
        `
        return setEl
    } else if (alertFirePump && alertFireAlarm && alertGenerator) {
        const setEl = `
         <div class='card2'>
             <div class='box2'>
                 <div class='box2-container'>
                    ${widgetAlertIcon.firePump.alarmIcon}
                    ${widgetAlertIcon.fireAlarm.alarmIcon}
                    ${widgetAlertIcon.generator.alarmIcon}
                 </div>
             </div>
             <div class="container-detail2"
                 style="color: #868383 margin-top: 10px margin-left: 10px;">
                 <div class="title">
                     Report
                 </div>
                 <div class="detail" >
                    ${stringData}
                 </div>
             </div>
         </div>
        `
        return setEl

    }else{
        const setEl = `
         <div class='card2'>
             <div class='box2'>
                 <div class='box2-container'>
                     ${widgetAlertIcon.firePump.normalIcon}
                    ${widgetAlertIcon.fireAlarm.normalIcon}
                    ${widgetAlertIcon.generator.normalIcon}
                 </div>
             </div>
             <div class="container-detail2"
                 style="color: #868383 margin-top: 10px margin-left: 10px;">
                 <div class="title">
                     Report
                 </div>
                 <div class="detail" >
                    ${stringData}
                 </div>
             </div>
         </div>
        `

        return setEl
    }

 