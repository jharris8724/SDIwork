alert("JavaScript works!");

var say = function (message) {console.log(message); }; // Global Variable

var baseCamp = {
	"isSafe": true, // Boolean Property
	"name": "New Hope", // String Property
	"scavangingGroup": ["Jeff", "Steve"], // Array Property
	"population": 30, // Number Property
	"storeHouse": {
		"weapons": {
			"shotguns": 7,
			"pistols": 12,
			"rifles": 6,
			"melee": 21
		},
		"ammunition": {
			"shotgunShells": 200,
			"pistolRounds": 600,
			"rifleRounds": 500,
		},
		"fuelInGallons": 75,
		"FoodInPounds": 975
	}, // Object Property
	"greetNewComer": function (name) {
		var currentTime = (new Date()).getHours(),
		timeOfDay;
		if (currentTime < 12) {timeofDay = "morning";}
		else if (currentTime < 17) {timeOfDay = "afternoon";}
		else {timeOfDay = "evening";}
		say("Good " + timeOfDay + ", " + name + "! Welcome to " + baseCamp.name
		+ ".");
	} // Procedure Method
	
}; // Global variable



var addMembers = function (newMembers) {
	var currentMembers = baseCamp.scavangingGroup;
	var members = currentMembers.concat(newMembers);
	
	
	return members; // Array Return
}; 
var vehicle = function () {
	var truckBed = []; // local variable
	var fuelTank = [];
	var cargoLoad = function (item) { truckBed.push(item); }; // String arguement passed into this function
	var cargoList = function () {
		say("cargo in truck: " + truckBed + ".");
	};
	var fillUp = function (numberOfGallons) { 
		var fuelAdded = numberOfGallons;
		fuelTank.push(fuelAdded);
	}; // Number argument passed into this function
	var checkFuel = function () {
		var totalFuel = 0
		for(var i = 0; i <fuelTank.length; i += 1) {
			totalFuel += fuelTank[i]; // Math
		}; // Nested For Loop (contains math operation)
		say( "fuel in truck: " + totalFuel + " gallons.");
	};


	var getType = function () { return type; };
		
	return {
		"type": getType,
	 	"cargoLoad": cargoLoad,
	 	"cargoList": cargoList,
	 	"fillUp": fillUp,
	 	"checkFuel": checkFuel
	 	
	 }; // Return Object
};


baseCamp.greetNewComer("stranger");

var groupMembers = addMembers(["Neal", "Rhett"]); // Array Argument

say(groupMembers);

var truck = vehicle();
truck.cargoLoad("fuel");
truck.cargoList();
truck.cargoLoad("ammo");
truck.cargoList();
truck.fillUp(5);
truck.checkFuel();
truck.fillUp(2);
truck.checkFuel();






