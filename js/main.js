var countDownDate = new Date("Apr 24, 1999 08:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = now -countDownDate;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("ngayyeu").innerHTML = days + " Ngày " + hours + " Giờ " + minutes + " Phút " + seconds + " Giây ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("ngayyeu").innerHTML = "EXPIRED";
  }
}, 1000);