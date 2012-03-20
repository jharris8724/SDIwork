alert("JavaScript works!");

var jeffhLib = function () {

			var isPhoneNumber = function (numberString) {
				if (number.indexOf(0,2) && number.indexOf(4,7) && number.indexOf(9,11)) {
					if (number.length === 12) {
						if (number.charAt(3) && number.charAt(7) === "-") {
						isPhoneNumber = true;
						console.log('"'+ number +'"' + " is a valid phone number.");
						}
						else {
						isPhoneNumber = false;
						console.log('"'+ number +'"' + " is a not valid phone number.");
						};
					}
					else {
					isPhoneNumber = false;
					console.log('"'+ number +'"' + " is a not valid phone number.");
					};
				}
				else {
					isPhoneNumber = false;
					console.log('"'+ number +'"' + " is a not valid phone number.");
				};
			}; 
			
			var isEmail = function (email) {
				
			};
			
			var titleCase = function (string) {
				return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase()
				+ txt.substr(1).toLowerCase();});
			};
	
	
	
	return {
		"isPhoneNumber": isPhoneNumber,
		"isEmail": isEmail
	};
};
var lib = jeffhLib();


var number = "123-456-7890";
lib.isPhoneNumber(number);

var email = "johndoe123@someaccount.com";
lib.isEmail(email);

var title = "hello world!";
lib.titleCase(title);

/*
var myString = "407-679-0100";

var end = myString.indexOf("-");

console.log(myString.substring(0,end));

var start = myString.indexOf("-")+1;
var end = myString.lastIndexOf("-");

console.log(myString.substring(start,end));

var start = myString.lastIndexOf("-")+1;
var end = myString.length;

console.log(myString.substring(start,end));




var isPhoneNumber = function (numberString) {
	var myString = numberString;
	
	if (myString.length === 12)
	var indexString = function () {
		
	};
	
	if (myString === ) {};
	return ;
};




//var phoneNumber = isPhoneNumber("123-456-7890");


var titleCase = function (string) {
	if (string.length === 12) {
		var areaCode = string.indexOf(0,4),
			firstThree = string.indexOf(5,8),
			lastFour = string.indexOf(9,12)
		;
		
		console.log(string.substring(areaCode));
		console.log(firstThree);
		console.log(lastFour);
		
	};
	
};



var word = titleCase("hello world!");

*/
