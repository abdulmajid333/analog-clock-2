

let hr = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");

function displayTime(){
    let date = new Date();

    // get hour min sec from date

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotate = 30 * hh + mm / 2;
    let mRotate = 6 * mm;
    let sRotate = 6 * ss;

    hr.style.transform = `rotate(${hRotate}deg)`;
    min.style.transform = `rotate(${mRotate}deg)`;
    sec.style.transform = `rotate(${sRotate}deg)`;

}

setInterval(displayTime, 1000);