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
	
	
}; // Global variable

var groupMembers = function () {
	var members = ["Jeff", "Steve"];
	var addmembers = function (member) {
		members.push(member);
	};
	var memberList = function () {
		say("Members in group: " + members + "."); // Output
	};
	
	return {
		"addmembers": addmembers,
		"memberList": memberList
		};
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


var group = groupMembers();
group.addmembers("Neal");
group.memberList();
group.addmembers("Rhett");
group.memberList();

var truck = vehicle();
truck.cargoLoad("fuel");
truck.cargoList();
truck.cargoLoad("ammo");
truck.cargoList();
truck.fillUp(5);
truck.checkFuel();
truck.fillUp(2);
truck.checkFuel();






