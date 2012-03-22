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
			}; // completed
						
			var isURL = function (website) {
				var someURL = website.substring(0,5),
					someSecureURL = website.substring(0,6)
				;
				if(someURL === "http:" || someSecureURL === "https:") {
					console.log('"' + website + '"' + " is a URL!");
				}
				else {
				console.log('"' + website + '"' + " is not a URL!");
				}

			}; // completed
						
			var addDecimal = function (number) {
				console.log(number.toFixed(2));
			}; // completed
			
			var convertToNumber = function (string) {
				console.log(parseFloat(string));
			}; // completed
			
			var timeElapsed = function (date1, date2) {
				var elapsedTime = date2 - date1;
				var hours = elapsedTime/3600000;
				console.log("There are " + hours + " hours between " + date1
				+ " and " + date2 + ".");
			}; // completed
			
			var findValue = function (array, givenNumber) {
				var arrayNum = 0;
				for (var i = 0; arrayNum <= givenNumber; i++) {
					arrayNum = array[i]
				};
				console.log(arrayNum);
			}; // completed
	
	return {
		"isPhoneNumber": isPhoneNumber,
		"isURL": isURL,
		"addDecimal": addDecimal,
		"convertToNumber": convertToNumber,
		"timeElapsed": timeElapsed,
		"findValue": findValue
	};
};
var lib = jeffhLib();


var phoneNumber = "123-456-7890";
lib.isPhoneNumber(phoneNumber); // works

var website = "http://fullsail.edu";
lib.isURL(website); // works

var number = 10.5
lib.addDecimal(number); // works

var stringNumber = "24"
lib.convertToNumber(stringNumber); // works

var array = [0,1,5,12,26,38,49,63,94,102,150,334],
	givenNumber = 40;
lib.findValue(array, givenNumber); // works

var date1 = new Date(2012, 5, 2), // date listed as year, month, day
	date2 = new Date(2012, 5, 5); // date listed as year, month, day
lib.timeElapsed(date1, date2); // works



