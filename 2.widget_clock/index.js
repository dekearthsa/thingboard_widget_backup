self.onInit = function() {
    const checkTime = (i) => {
        if (i < 10) {
            i = "0" + i
        } // add zero in front of numbers < 10
        return i;
    }
    
    const startClock = () => {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('time-data').textContent = `${h} : ${m} : ${s}`;
    }
    
    const startDate = () => {
        const today = new Date();
        let d = today.getDate();
        let m = today.getMonth() + 1;
        let y = today.getFullYear();
        d = checkTime(d);
        m = checkTime(m);
        document.getElementById('date-data').textContent = `${d} / ${m} / ${y}`; 
    }
    startClock();
    startDate();
    setInterval(startClock, 1000);
    setInterval(startDate, 60000);
}

self.actionSources = function() {
    return {
        'elementClick': {
            name: 'widget-action.element-click',
            multiple: true
        }
    };
}

self.onDestroy = function() {}