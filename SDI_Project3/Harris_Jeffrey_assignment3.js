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

var group = groupMembers();
group.addmembers("Neal");
group.memberList();
group.addmembers("Rhett");
group.memberList();



