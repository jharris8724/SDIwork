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
	var cargoLoad = function (item) { truckBed.push(item); };
	var getType = function () { return type; };
		
	return {
		"type": getType,
	 	"cargoLoad": cargoLoad
	 };
};


var group = groupMembers();
group.addmembers("Neal");
group.memberList();
group.addmembers("Rhett");
group.memberList();

var truck = vehicle();
truck.cargoLoad("fuel");
truck.cargoLoad("ammo");






