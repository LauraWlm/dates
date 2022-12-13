function setCurrentTime() {
let date = new Date();
let belgium = date.toLocaleString('en-UK',{
    timeZone: 'Europe/London',
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});

document.getElementById('belgium').innerHTML = belgium;
}
setInterval(function() {
    setCurrentTime();
  }, 1000);


