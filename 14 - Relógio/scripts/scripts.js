const showCorrectHourBtn = document.querySelector('#start')

const currentTime = () => {
  let date = new Date()
  let hour = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()

  hour = updateTime(hour)
  min = updateTime(min)
  sec = updateTime(sec)

  document.getElementById('clock').innerText = hour + ':' + min + ':' + sec
  const execCurrentTime = () => currentTime()

  setTimeout(execCurrentTime, 1000)
}

const updateTime = (hourMinOrSec) => {
  if (hourMinOrSec < 10) { return '0' + hourMinOrSec } else { return hourMinOrSec }
}

showCorrectHourBtn.addEventListener('click', () => currentTime())