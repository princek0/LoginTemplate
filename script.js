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
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if ( username == "Test" && password == "Test"){
    document.getElementById("h1").innerHTML = "Successful login";
    return false;
  }
  else{
    document.getElementById("h1").innerHTML = "Unsuccessful login";
    return false;
  }
}
