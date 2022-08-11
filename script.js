function today() {
  var days;
  var years;
  years = document.getElementById("year").value;
  console.log(years);
  days = years * 365;
  document.getElementById("today").innerHTML = "Age in days is:" + days;
}
