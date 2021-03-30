var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Location = /** @class */ (function () {
    function Location(teaser, address, zip_code, city, image) {
        this.teaser = "";
        this.address = "";
        this.zip_code = "";
        this.city = "";
        this.image = "";
        this.teaser = teaser;
        this.address = address;
        this.zip_code = zip_code;
        this.city = city;
        this.image = image;
    }
    Location.prototype.display = function () {
        return this.teaser + " <br> " + this.address + " <br> " + this.zip_code + " " + this.city + " <br> " + this.image;
    };
    return Location;
}());
var location1 = new Location("<img src=img_CR6/teaser_Prater.jpg width=100%>", "Prater", "1020", "Wien", "<img class=image2 src=img_CR6/PraterFree.jpg width=100%>");
var location2 = new Location("<img src=img_CR6/teaser_Schoenbrunn.jpg width=100%>", "Schönbrunner Schloßstraße 47", "1130", "Wien", "<img class=image2 src=img_CR6/Schoenbrunn.jpeg width=100%>");
var locations = [location1, location2];
for (var i = 0; i < locations.length; i++) {
    document.getElementsByClassName("field_location")[i].innerHTML += locations[i].display(i);
}
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(teaser, address, zip_code, city, image, type) {
        var _this = _super.call(this, teaser, address, zip_code, city, image) || this;
        _this.type = "";
        _this.type = type;
        return _this;
    }
    Restaurant.prototype.display = function () {
        return _super.prototype.display.call(this) + " " + this.type;
    };
    return Restaurant;
}(Location));
var restaurant1 = new Restaurant("<img src=img_CR6/teaser_Schnitzel.jpg width=100%>", "Stephansplatz", "1010", "Wien", "<img class=image2 src=img_CR6/Stephansplatz.jpg width=100%>", "City centre");
var restaurant2 = new Restaurant("<img src=img_CR6/teaser_Sacher.jpg width=100%>", "Philharmonikerstraße 4", "1010", "Wien", "<img class=image2 src=img_CR6/Sacher.JPG width=100%>", "Hotel, Restaurant, Café");
var restaurants = [restaurant1, restaurant2];
for (var i = 0; i < restaurants.length; i++) {
    document.getElementsByClassName("field_restaurant")[i].innerHTML += restaurants[i].display(i);
}
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(teaser, address, zip_code, city, image, EventDate, EventTime, price) {
        var _this = _super.call(this, teaser, address, zip_code, city, image) || this;
        _this.EventDate = "";
        _this.EventTime = "";
        _this.price = "";
        _this.EventDate = EventDate;
        _this.EventTime = EventTime;
        _this.price = price;
        return _this;
    }
    Event.prototype.display = function () {
        return _super.prototype.display.call(this) + " " + this.EventDate + " <br> " + this.EventTime + " " + this.price;
    };
    return Event;
}(Location));
var event1 = new Event("<img src=img_CR6/teaser_event1.jpg width=100%>", "Kulturstraße 1", "1080", "Wien", "<img class=image2 src=img_CR6/event1.jpg width=100%>", "July 31", "17:00<br>", "Admission free");
var event2 = new Event("<img src=img_CR6/teaser_event2.jpg width=100%>", "Balkongasse 3", "1200", "Wien", "<img class=image2 src=img_CR6/event2.jpg width=100%>", "August 14", "20:00<br>", "8€");
var events = [event1, event2];
for (var i = 0; i < events.length; i++) {
    document.getElementsByClassName("field_events")[i].innerHTML += events[i].display(i);
}
