const ponteiroSegundo = document.querySelector(".p_s");
const ponteiroMinuto = document.querySelector(".p_m");
const ponteiroHora = document.querySelector(".p_h");
const digitalHora = document.querySelector(".horas");
const digitalSegundo = document.querySelector(".segundos");
const digitalMinuto = document.querySelector(".minutos");


function updateClock(){
    let now = new Date();
    let segundos = now.getSeconds();
    let minutos = now.getMinutes();
    let horas = now.getHours();
    digitalHora.innerHTML = fixZero(horas);
    digitalMinuto.innerHTML = fixZero(minutos);
    digitalSegundo.innerHTML = fixZero(segundos);

    let sDeg = ((360/60) *segundos)-90;
    let mDeg = ((360/60) *minutos)-90;
    let hDeg = ((360/12) *horas)-90;

    ponteiroHora.style.transform = `rotate(${hDeg}deg)`;
    ponteiroMinuto.style.transform = `rotate(${mDeg}deg)`;
    ponteiroSegundo.style.transform = `rotate(${sDeg}deg)`;
}
setInterval(updateClock,1000);

function fixZero(time) {
    return time <10? "0"+ time : time;
}

updateClock();