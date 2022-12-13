let birthDate = new Date ("1993-10-22")
let dayDate = new Date()

let moi = ((dayDate.getTime() - birthDate.getTime()) / (1000 * 60* 60 * 24) + ' how many days have passed since the date of my birth')
document.body.innerHTML = moi;