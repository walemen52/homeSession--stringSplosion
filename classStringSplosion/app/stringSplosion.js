/* A string class that takes a constructor parameter,
the class has a method manipulate() that manipulates a string
e.g 'ab' => 'aab'
*/
'use strict'

	const StringSplosion = class //a StringSplosion class declared using arrow function
	{
		constructor(string) //a constructor that passes in a parameter string 
		{
		this.string = string; // a this method used to refer parameter for the current instance of the object
		}
		manipulate() // a manipulate method called when an instance of the class is created
		{ 
			const string_array = [];
			for (let counter = 1; counter <= this.string.length; counter++){
				let subString = this.string.substr(0, counter);
				string_array.push(subString);
			} 
			return string_array.join('');
		}
	}

	module.exports = StringSplosion;