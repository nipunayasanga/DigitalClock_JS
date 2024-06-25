setInterval(updateClock, 1000);

function updateClock() {
	var myDate = new Date();
	var myClock = document.getElementById("clock");
	
	// getting the Hours, Minutes and Seconds
	var myHours = myDate.getHours();
	var myMinutes = myDate.getMinutes();
	var mySeconds = myDate.getSeconds();
	
	// adding the leading zeros if value is less than 10
	if ( myHours < 10 ) { myHours = "0" + myHours }
	if ( myMinutes < 10 ) { myMinutes = "0" + myMinutes }
	if ( mySeconds < 10 ) { mySeconds = "0" + mySeconds }
	
	// putting it all together
	var myTime = myHours + ":" + myMinutes + ":" + mySeconds;
  myClock.innerText = myTime;
	
}