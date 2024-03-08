const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hora = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if(hora < 10 ) hora = '0' + hora;

  if(min < 10 ) min = '0' + min;

  if(s < 10 ) s = '0' + s;

  horas.textContent = hora;
  minutos.textContent = min;
  segundos.textContent = s;
})