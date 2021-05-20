function realtimeClock() {

  var rtClock = new Date();
  var hours = rtClock.getHours();
  var minutes = rtClock.getMinutes();
  var seconds = rtClock.getSeconds();
  var amPm = (hours < 12) ? "AM" : "PM";

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  document.getElementById('clock').innerHTML = hours + "  :  " + minutes + "  :  " + seconds;
  var t = setTimeout(realtimeClock, 500);

}

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if ( username == "Test" && password == "Test"){
    alert ("Successful login.")
    window.location = "success.html";
    return false;
  }
  else{
    alert ("Unsuccessful login.")
    return false;
  }
}
