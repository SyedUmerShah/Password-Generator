var alphS = "abcdefghijklmnopqrstuvwxyz"
var alphC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "01234567890"
var sym = "~!@#$%^&*,."
var password = ""

  password=alphC[Math.floor(Math.random()*26)]+alphS[Math.floor(Math.random()*26)]+num[Math.floor(Math.random()*10)]+sym[Math.floor(Math.random()*11)]+alphC[Math.floor(Math.random()*26)]+alphS[Math.floor(Math.random()*26)]+alphC[Math.floor(Math.random()*26)]+num[Math.floor(Math.random()*10)]+sym[Math.floor(Math.random()*11)]+alphS[Math.floor(Math.random()*26)]

document.write("<center>" + "<h1>"+ "YOUR 10 DIGITS PASSWORD IS:"+"</h1>" +"<h2>" + password + "</h2>"+'<a href="">' +"<h3>"  + "Click Here To Reset Your Password."  +"</h3>"+ "</a>" +"</center>") 




















































































