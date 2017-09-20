// scripts.js


function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}


Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var SamsungGalaxyS7 = new Phone("Samsung", 2400, "white");
var Nokia3310 = new Phone("Nokia", 350, "black");


iPhone6S.printInfo();
SamsungGalaxyS7.printInfo();
Nokia3310.printInfo();