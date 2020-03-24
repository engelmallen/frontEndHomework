// Homework: 
// write a small program that prints the actual time in real time on the screen.
// the project should have:
// printing the clock in am/pm;
// the background-color of the screen changes dynamically;
// the whole project is styled


var clock = document.getElementById("clock")
var time = document.getElementById("time")
var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var MM = document.getElementById("MM")

var date = new Date()
var hourNow = date.getHours()
var minuteNow = date.getMinutes()
var secondNow = date.getSeconds()
var bgColor = "";



function gettIt(){
	setInterval(function getDates()
			{
			date = new Date()
			hourNow = date.getHours()
			minuteNow = date.getMinutes()
			secondNow = date.getSeconds()

			bgColor = Math.floor(Math.random() * 20)

			// bgColor = Math.floor(Math.random() * 1000000)
			
			},1000)
}gettIt()


hours.value = hourNow;
minutes.value = minuteNow;
seconds.value = secondNow;
		if (hourNow > 12)	
				{hours.value = hourNow-12;}
		if (hourNow > 11)	
				{MM.value = "PM"}
			else 
				{MM.value = "AM"}

// seconds.value = "";
// seconds.value = secondNow;

function setIt(){
	setInterval(function()
		
		{
		if (hourNow > 12)	
				{hours.value = hourNow-12;}
		if (hourNow > 11)	
				{MM.value = "PM"}
			else 
				{MM.value = "AM"}
		
		minutes.value = minuteNow;
		seconds.value = secondNow;
		
		
		console.log(secondNow)
		
		}, 1000)
}setIt()

function bgChng()
{
	setInterval(function()
	{document.body.style.backgroundImage  = "url('img/bg"+bgColor+".jpg')"}	
		,3000)
}bgChng()