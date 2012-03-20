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
			
			var returnNumber = function (string) {
				console.log(parseFloat(string));
			};
	
	
	return {
		"isPhoneNumber": isPhoneNumber,
		"isEmail": isEmail,
		"returnNumber": returnNumber
	};
};
var lib = jeffhLib();


var number = "123-456-7890";
lib.isPhoneNumber(number);

var email = "johndoe123@someaccount.com";
lib.isEmail(email);


var stringNumber = "24"

lib.returnNumber(stringNumber);