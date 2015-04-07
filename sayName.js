//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age) {
	this.name = name;
	this.age = age
}




//Now create three instances of Person with data you make up

var tyler = new Person('Tyler', 24);
var cahlan = new Person('Cahlan', 31);
var dustin = new Person('Dustin', 28);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function () {
	alert('My name is ' + this.name)
}

dustin.sayName()