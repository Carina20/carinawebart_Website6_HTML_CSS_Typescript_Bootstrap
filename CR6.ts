

class Location {
	teaser ="";
	address = "";
	zip_code = "";
	city = "";
	image = "";
	

constructor(teaser, address, zip_code, city, image) {
	this.teaser = teaser;
	this.address = address;
	this.zip_code = zip_code;
	this.city = city;
	this.image = image;
}

display () {

	return `${this.teaser} <br> ${this.address} <br> ${this.zip_code} ${this.city} <br> ${this.image}`;
}
}


let location1 = new Location ("<img src=img_CR6/teaser_Prater.jpg width=100%>", "Prater", "1020", "Wien", "<img class=image2 src=img_CR6/PraterFree.jpg width=100%>");
let location2 = new Location ("<img src=img_CR6/teaser_Schoenbrunn.jpg width=100%>", "Schönbrunner Schloßstraße 47", "1130", "Wien", "<img class=image2 src=img_CR6/Schoenbrunn.jpeg width=100%>");

let locations =[location1, location2];

for (let i=0; i <locations.length; i++){

	document.getElementsByClassName("field_location")[i].innerHTML += locations[i].display(i);

}

class Restaurant extends Location {
	type ="";

constructor(teaser, address, zip_code, city, image, type) {
	super(teaser, address, zip_code, city, image);
	this.type = type;
	
}

display () {

	return `${super.display()} ${this.type}`;
}
}

let restaurant1 = new Restaurant ("<img src=img_CR6/teaser_Schnitzel.jpg width=100%>", "Stephansplatz", "1010","Wien","<img class=image2 src=img_CR6/Stephansplatz.jpg width=100%>", "City centre");
let restaurant2 = new Restaurant ("<img src=img_CR6/teaser_Sacher.jpg width=100%>", "Philharmonikerstraße 4", "1010", "Wien", "<img class=image2 src=img_CR6/Sacher.JPG width=100%>","Hotel, Restaurant, Café");

let restaurants =[restaurant1, restaurant2];

for (let i=0; i <restaurants.length; i++){

	document.getElementsByClassName("field_restaurant")[i].innerHTML += restaurants[i].display(i);

}

class Event extends Location {
	EventDate ="";
	EventTime ="";
	price = "";

constructor(teaser, address, zip_code, city, image, EventDate, EventTime, price) {
	super(teaser, address, zip_code, city, image);
	this.EventDate = EventDate;
	this.EventTime = EventTime;
	this.price = price;
}

display () {

	return `${super.display()} ${this.EventDate} <br> ${this.EventTime} ${this.price}`;
}
}

let event1 = new Event ("<img src=img_CR6/teaser_event1.jpg width=100%>", "Kulturstraße 1", "1080","Wien", "<img class=image2 src=img_CR6/event1.jpg width=100%>", "July 31", "17:00<br>", "Admission free");
let event2 = new Event ("<img src=img_CR6/teaser_event2.jpg width=100%>", "Balkongasse 3", "1200", "Wien", "<img class=image2 src=img_CR6/event2.jpg width=100%>", "August 14", "20:00<br>", "8€");

let events =[event1, event2];

for (let i=0; i <events.length; i++){

	document.getElementsByClassName("field_events")[i].innerHTML += events[i].display(i);

}

