"use strict";

function calculate(){
		var time = document.getElementById("timeform");
		var date = document.getElementById("dateform");
		var timeoutput = "";
		var dateoutput = "";
		var i;
			
		for (i = 0; i < time.length ;i++) {
		timeoutput += time.elements[i].value + "<br>";
		dateoutput += date.elements[i].value + "<br>";
		
		//calculate what day it is
		var now = new Date();
		var start = new Date(now.getFullYear(), 0, 0);
		var end = new Date(now.getFullYear(), 11, 31);
		var diff = now - start + 1;
		var oneDay = 1000 * 60 * 60 * 24;
		var day = Math.floor(diff / oneDay);
		// how many seconds have passed this year up until the last midnight
		var todayseconds = (day - 1)* 24 * 60 * 60 ;
		//calculate second of the ay
		var dt = new Date();
		//var secs = second of the day
		var secs = dt.getSeconds() + (60 * (dt.getMinutes() + (60 * dt.getHours())));
		var secondsnow = todayseconds + secs;
		
		//next handful of lines are to allow for calculations with the date to be done
		//Seperates Individual letters and sets to strings of the date
		var year1 = String(dateoutput).charAt(0);
		var year2 = String(dateoutput).charAt(1);
		var year3 = String(dateoutput).charAt(2);
		var year4 = String(dateoutput).charAt(3);
		var month1 = String(dateoutput).charAt(5);
		var month2 = String(dateoutput).charAt(6);
		var day1 = String(dateoutput).charAt(8);
		var day2 = String(dateoutput).charAt(9);
		//separates individual characters in the time and sets to strings
		var entertime1 = String(timeoutput).charAt(0);
		var entertime2 = String(timeoutput).charAt(1);
		var entertime3 = String(timeoutput).charAt(3);
		var entertime4 = String(timeoutput).charAt(4);
		
		//combines the hour of the day entered into a single int
		var hourstring = entertime1 + entertime2;
		var h = parseInt(hourstring, 10);
		
		//combines the minutes of the day entered into a single int
		var minutestring = entertime3 + entertime4;
		var om = parseInt(minutestring, 10);
		
		//sets the year entered to y and to int
		var yearstring = year1 + year2 + year3 + year4;
		var y = parseInt(yearstring, 10);
		
		//sets the month entered to m and to an int
		var monthstring = month1 + month2;
		var m = parseInt(monthstring, 10);
		
		//sets the day of the month to d and to an int
		var daystring = day1 + day2;
		var d = parseInt(daystring, 10);
		
		// calculates how many days are left in the year entered
		var ODN = new Date(y,m,d);
		var ODS = new Date(ODN.getFullYear(), 12, 31);
		var ODD = ODS - ODN;
		var OD = Math.floor(ODD / oneDay);
		// Seconds left in year (including day of entry)
		var OTS = OD * (3600 * 24)
		
		//Entered Time Calculations
		//Seconds Left in hour
		var OmDiff = (60 - om) * 60;
		//Seconds left in the day (excluding minutes)
		var hDiff = (24 - h) * 3600;
		//Seconds left in the day of entry
		var secLeft = hDiff + OmDiff;
		
		//Seconds Left in entered year total
		var secondsleftyear = (secLeft+OTS) - 3600;//OTS - secLeft;
		
		//calculate difference in years
		var thisyear = now.getFullYear();
		var yeardiff = (thisyear - y) - 1;
		//calculate how many seconds have passed of the years
		var secLeftyear = yeardiff * 365.25 * 24 * 3600;
		
		//calculate how many seconds have passed total
		var sectotal = secLeftyear + secondsleftyear + secondsnow;
		var total = sectotal.toLocaleString('en');
		
		//IF THIS YEAR Date
		var yearlength = end - start;
		var daysyear = Math.floor(yearlength / oneDay);
		var yearlengthsec = daysyear * 24 * 60 * 60;
		var sectotalalt = -1*((yearlengthsec)-(secondsleftyear + secondsnow)) - 86400;
		var totalalt = sectotalalt.toLocaleString('en');
		}
		
		if (yeardiff < 0) {
		document.getElementById("totalAge").innerHTML = totalalt + " seconds old!" +"<br>" + "Dates within the same year are highly innacurate.";
		}
		else{
		document.getElementById("totalAge").innerHTML = total + " seconds old!";
		}
}
