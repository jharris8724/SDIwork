alert("JavaScript works!");

var touristDestination1 = "Stonehenge",
	touristDestination2 = "British Museum",
	exhibitNames = [
	"Ancient Egypt", 
	"Ancient Greece and Rome",
	"Americas",
	"Asia",
	"Middle East"
	],
	minutesPerExhibit = [75, 60, 30, 45, 60],
	hoursToSeeExhibits = 5
;
	

var checkWeather = function (weather) {
	if (weather === "sunny")
		console.log("It looks like a great day to visit " + touristDestination1
		+ ".");
	else
		console.log ("This would be a perfect day to visit "
		+ touristDestination2 + ".");
}; // Procedure

var visitExhibit = function (number, exhibitNumber){
	var hoursToVisit = number,
		exhibitName = exhibitNames[exhibitNumber],
		minutesThisExhibit = minutesPerExhibit[exhibitNumber]
	;
	console.log("Let's visit the " + exhibitName + " exhibit!");
	
	for(var minutes = 0; minutes < minutesThisExhibit; minutes += 15) {
		var minutesLeft = minutesThisExhibit - minutes;
		console.log(minutes + " minutes have passed. We still have " + minutesLeft
		+ " left to view the " + exhibitName + " exhibit.");
	};
	console.log("well, we've finished that exhibit.");
}; // Array Function

var stringFunction = function (message1, message2) {
	var string1 = message1,
		string2 = message2
	;
	
	return (string1 + " " + string2);
}; // String Function

var isThereEnoughTime = function (timeAvailable, timeRequired) {
	if (timeAvailable >= timeRequired ) {
		enoughTime = true
	}
	else {
		enoughTime = false
	};
	
	return enoughTime;
}; // Boolean Function
	
var getBeer = function (money) {
	var beerMoney = money,
		costPerBeer = 5,
		numberOfBeers = 0
	;
	console.log("Well, I have " + beerMoney + " pounds. Let's see"
	+ " how many beers I can get with it.");
	while(beerMoney >= costPerBeer) {
		var moneyLeft = beerMoney - costPerBeer;
		console.log("I have " + beerMoney + " pounds. Might as well buy another beer.");
		numberOfBeers++;
		beerMoney = moneyLeft;
	};
	return numberOfBeers;
}; // Number Function

console.log("It looks like it's raining today.");

checkWeather("rainy");

console.log("Do I have enough time to view the all the exhibits I would like?")
var enoughTime = isThereEnoughTime(hoursToSeeExhibits, 5)
console.log("It is " + enoughTime + ". I have enough time.");

var statement = stringFunction("The museum should be great.", "What exhibit should I see first?");
console.log(statement);


for (var exhibitNumber = 0, e = exhibitNames.length; exhibitNumber < e; 
	exhibitNumber++) {visitExhibit(hoursToSeeExhibits, exhibitNumber);};
	
console.log("the British Museum was great! Time to head to the pub for a beer or two.");


var beersHad = getBeer(20);
console.log("Well, I've had " + beersHad + " beers. I'm glad"
	+ " public transportation is so good here. I think it's time to head back to the hotel.");