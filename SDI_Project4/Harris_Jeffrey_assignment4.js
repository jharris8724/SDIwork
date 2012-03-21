alert("JavaScript works!");

var jeffhLib = function () {

			var isPhoneNumber = function (number) {
				var areaCode = isNaN(number.substring(0,3)),
					firstThree = isNaN(number.substring(4,7)),
					lastFour = isNaN(number.substring(8,12))
				;
				if (areaCode===false && firstThree===false && lastFour===false) {
					if (number.length === 12) {
						if (number.charAt(3)==="-" && number.charAt(7)==="-") {
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
					console.log('"' + number + '"' + " is a not valid phone number.");
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

