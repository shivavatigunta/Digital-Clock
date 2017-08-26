//code to display the time and date
$(document).ready(function(){
	function displayTime(){
		var currentTime = new Date(); // to get the date from the javascript
		var hours = currentTime.getHours(); //get hours 
		var minutes = currentTime.getMinutes(); // get minutes
		var seconds = currentTime.getSeconds(); // get seconds
		var meridiem = "AM"; //intialize te meridiem default as AM

		var date = currentTime.getDate(); // get date (1-31)
		var day = currentTime.getDay(); // get day (0-6) [0-sunday...6-saturday]
		var year = currentTime.getFullYear();// get full year (YYYY)
		var month = currentTime.getMonth(); // get month (0-11) [0-January....11-December]

		switch(day){
			case 0: 
				day = 'Sunday';
				break;
			case 1: 
				day = 'Monday';
				break;
			case 2: 
				day = 'Tuesday';
				break;
			case 3: 
				day = 'Wednesday';
				break;
			case 4: 
				day = 'Thursday';
				break;
			case 5: 
				day = 'Friday';
				break;
			case 6: 
				day = 'Saturday';
				break;					
		}


		switch(month){
			case 0:
				month = 'January';
				break;
			case 1:
				month = 'Febraury';
				break;
			case 2:
				month = 'March';
				break;
			case 3:
				month = 'April';
				break;
			case 4:
				month = 'May';
				break;
			case 5:
				month = 'June';
				break;
			case 6:
				month = 'July';
				break;
			case 7:
				month = 'August';
				break;
			case 8:
				month = 'September';
				break;
			case 9:
				month = 'October';
				break;
			case 10:
				month = 'November';
				break;
			case 11:
				month = 'December';
				break;
		}

		if (seconds < 10) {
		    seconds = "0" + seconds;
		}

		if (hours > 12) {
			hours = hours -12;
			meridiem = "PM";
		}

		if (hours == 0) {
			hours = 12;
		}

		var clockDiv = document.getElementById('clock');
		clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;

		var dateDiv = document.getElementById('date');
		dateDiv.innerText = day + ", " + month + " " + date + ", " + year; 
	}

	setInterval(displayTime, 1000); // calling the function for every second
});