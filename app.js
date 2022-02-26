function showTime(){
     let dateObject = new Date();
     let hour = dateObject.getHours();
     let minute = dateObject.getMinutes();
     let seconds = dateObject.getSeconds();
     let ampm = (hour < 12) ? "AM" : "PM";
     let hour12 = (hour < 12) ? hour : hour%12;
    
     let hour_val = document.getElementById('hour-val');
     let min_val = document.getElementById('min-val');
     let sec_val = document.getElementById('sec-val');
     let am_pm = document.getElementById('AM-PM');

     hour_val.innerHTML = hour12.toString().padStart(2,"0");
     min_val.innerHTML = minute.toString().padStart(2,"0");
     sec_val.innerHTML = seconds.toString().padStart(2,"0");
     am_pm.innerHTML = ampm;
}
setInterval(showTime,1000);
showTime();