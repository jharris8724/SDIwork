alert("JavaScript works!");

var say = function (message) {console.log(message); };

var groupMembers = function () {
	var members = ["Jeff", "Steve"];
	var addmembers = function (member) {
		members.push(member);
	};
	var memberList = function () {
		say("Members in group: " + members + ".");
	};
	
	return {
		"addmembers": addmembers,
		"memberList": memberList
		};
}; 

var vehicle = function () {
	var truckBed = [];
	var fuelTank = [];
	var cargoLoad = function (item) { truckBed.push(item); };
	var cargoList = function () {
		say("cargo in truck: " + truckBed + ".");
	};
	var fillUp = function (numberOfGallons) { 
		var fuelAdded = numberOfGallons;
		fuelTank.push(fuelAdded);
	};
	var checkFuel = function () {
		say(name + "fuel (in gallons): " + fuelTank + ".");
	};


	var getType = function () { return type; };
		
	return {
		"type": getType,
	 	"cargoLoad": cargoLoad,
	 	"cargoList": cargoList,
	 	"fillUp": fillUp,
	 	"checkFuel": checkFuel
	 	
	 };
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






