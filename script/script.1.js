/*let zones = ['Europe/Brussels', 'America/Anchorage', 'Atlantic/Reykjavik', 'Europe/Moscow'];
let date = new Date;
zones.forEach((timeZone) =>
{
  let strTime = date.toLocaleString("en-US", {timeZone: `${timeZone}`});
  console.log(timeZone, strTime);
});*/


let date = new Date();

//usa
let usa = date.toLocaleString('en-US',{timeZone: 'America/Anchorage', year: 'numeric', month: 'short',day: 'numeric', hour: 'numeric',minute: 'numeric',second: 'numeric'});

document.getElementById('usa').innerHTML = 'Anchorage (USA): ' + usa;

//iceland
let iceland = date.toLocaleString('is-IS',{timeZone: 'Atlantic/Reykjavik', year: 'numeric', month: 'short',day: 'numeric', hour: 'numeric',minute: 'numeric',second: 'numeric'});

document.getElementById('iceland').innerHTML = 'Reykjavik (Iceland): ' + iceland;

//russia
let russia = date.toLocaleString('ru-RU',{timeZone: 'Europe/Moscow', year: 'numeric', month: 'short',day: 'numeric', hour: 'numeric',minute: 'numeric',second: 'numeric'});

document.getElementById('russia').innerHTML = 'Saint-Petersburg (Russia): ' + russia;

//brussels
let brussels = date.toLocaleString('fr-BE',{timeZone: 'Europe/Brussels',year: 'numeric',
 month: 'short',day: 'numeric', hour: 'numeric',minute: 'numeric',second: 'numeric'});

document.getElementById('brussels').innerHTML = 'Brussels (BE): ' + brussels;


