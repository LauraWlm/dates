function setCurrentTime() {
let date = new Date();
let belgium = date.toLocaleString('en-UK',{
    timeZone: 'Europe/London',
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});

let time = document.querySelector('.belgium')
time.innerHTML =  belgium;
}
setInterval(function() {
    setCurrentTime();
  }, 1000);


