
function setTime() {
  const now = new Date();
  const utcTime = now.toUTCString();
  document.getElementById("time").textContent = utcTime;
}

setTime();
setInterval(setTime, 1000);


function getDay() {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[dayOfWeek];
  document.getElementById("DoW").textContent = currentDay;
}

getDay();

