'use strict';

var parentEl = document.getElementById('parentElement');
parentEl.textContent = 'Salmon Cookies';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// array that store all instantiation of the Store constructor
var allStores = [];

function Store(storeName, minHourlyCust, maxHourlyCust, avgCustCookies) {
  this.storeName = storeName;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCustCookies = avgCustCookies;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookiesForTheDay = 0;
  allStores.push(this);
}

//Note: prototypes will only work on an instantiation of the constructor.

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

//Fills customerEachHour with random data
Store.prototype.genHourlyCustVolume = function() {
  for (var i = 0; i < hours.length; i++) {
    //creating a random number for each hour
    var customers = randomNumber(this.minHourlyCust, this.maxHourlyCust);
    //push the random customers into the customersEachHour array
    this.customersEachHour.push(customers);
  }
  console.log(this);
}

Store.prototype.genHourlyCookieVolume = function() {
  for (var i = 0; i < hours.length; i++) {
    var cookiesForOneHour = Math.ceil(this.customersEachHour[i] * this.avgCustCookies);
    this.cookiesEachHour.push(cookiesForOneHour);
    this.totalCookiesForTheDay += cookiesForOneHour;
  }
  console.log(this);
}

//Populate the top left cell of the table with "Location"
var tableDataEl = document.getElementById('tableData');
var trEl = document.createElement('tr');
var tdEl = document.createElement('td');
tdEl.textContent = 'Location';
trEl.appendChild(tdEl);
tableDataEl.appendChild(trEl);

//Populate the top row with store hours
for (var i =0; i < hours.length; i++) {
  tdEl = document.createElement('td');
  tdEl.textContent = hours[i];
  trEl.appendChild(tdEl);
  tableDataEl.appendChild(trEl);
}

var tableDataEl = document.getElementById('tableData');
var tdEl = document.createElement('td');
tdEl.textContent = 'Total';
trEl.appendChild(tdEl);
tableDataEl.appendChild(trEl);

//make a table row for each intantiation of Store with hourly cookie totals and the daily total
Store.prototype.render = function() {
  //1. create an element
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  //2. add content
  tdEl.textContent = this.storeName;
  //append to the DOM; generateCookiesEachHour
  trEl.appendChild(tdEl);
  //loop over cookiesEachHour array to populate the table row left to right
  for (var i =0; i < this.cookiesEachHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }
  // add the total cookies for the day at the far right
  var tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesForTheDay;
  trEl.appendChild(tdEl);
  // append the whole row (store name, hourly cookie totals, and daily cookie total) to the table element in index.html.
  tableDataEl.appendChild(trEl);
}

// make footer row.
var footer = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);

  for (var i=0; i < hours.length; i++) {
    var allStoresHourlyTotal = 0;
    var td = document.createElement('td');

    for (var j=0; j < allStores.length; j++) {
      allStoresHourlyTotal += allStores[j].cookiesEachHour[i];
    }
    td.textContent = allStoresHourlyTotal;
    trEl.appendChild(td);
  }
  tableDataEl.appendChild(trEl);
}

for (var i=0; i < allStores.length; i++) {
  allStores[i].genHourlyCustVolume();
  allStores[i].genHourlyCookieVolume();
  allStores[i].render();
}

footer();


// function randoNumberGen(min, max) {
//   return Math.floor(Math.random() * (max-min)) + min;
// }

// var seattle = {
//   shopHours: hours,
//   hourCustomerVisits: [],
//   min: 23,
//   max: 65,
//   avgCookiesPerCustVisit: 6.3,
//   cookiesPurchased: [],
//   totCookiesSold: [0],
//   locationName: 'Seattle',
//   displayStoreName: function() {
//     var childEl0 = document.createElement('h2');
//     childEl0.textContent = `${this.locationName}`;
//     parentEl.appendChild(childEl0);
//   },
//   render: function() {
//     for (var i = 0; i < this.shopHours.length; i++) {
//       var childEl = document.createElement('li');
//       this.hourCustomerVisits.push(randoNumberGen(this.min, this.max));
//       this.cookiesPurchased.push(this.hourCustomerVisits[i]*this.avgCookiesPerCustVisit);
//       this.totCookiesSold.push(this.totCookiesSold[i]+this.cookiesPurchased[i]);
//       childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourCustomerVisits[i]} ~ Cookies Purchased: ${this.cookiesPurchased[i]}`;
//       parentEl.appendChild(childEl);
//     }
//   },
//   totalSold: function() {
//     var childEl2 = document.createElement('li');
//     childEl2.textContent = `Total Cookies Sold: ${this.totCookiesSold[this.shopHours.length -1]}`;
//     parentEl.appendChild(childEl2);
//   }
// }
// seattle.displayStoreName();
// seattle.render();
// seattle.totalSold();

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var tokyo = {
//   shopHours: hours,
//   hourCustomerVisits: [],
//   min: 3,
//   max: 24,
//   avgCookiesPerCustVisit: 1.2,
//   cookiesPurchased: [],
//   totCookiesSold: [0],
//   locationName: 'Tokyo',
//   displayStoreName: function() {
//     var childEl0 = document.createElement('h2');
//     childEl0.textContent = `${this.locationName}`;
//     parentEl.appendChild(childEl0);
//   },
//   render: function() {
//     for (var i = 0; i < this.shopHours.length; i++) {
//       var childEl = document.createElement('li');
//       this.hourCustomerVisits.push(randoNumberGen(this.min, this.max));
//       this.cookiesPurchased.push(this.hourCustomerVisits[i]*this.avgCookiesPerCustVisit);
//       this.totCookiesSold.push(this.totCookiesSold[i]+this.cookiesPurchased[i]);
//       childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourCustomerVisits[i]} ~ Cookies Purchased: ${this.cookiesPurchased[i]}`;
//       parentEl.appendChild(childEl);
//     }
//   },
//   totalSold: function() {
//     var childEl2 = document.createElement('li');
//     childEl2.textContent = `Total Cookies Sold: ${this.totCookiesSold[this.shopHours.length -1]}`;
//     parentEl.appendChild(childEl2);
//   }
// }
// tokyo.displayStoreName();
// tokyo.render();
// tokyo.totalSold();

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var dubai = {
//   shopHours: hours,
//   hourCustomerVisits: [],
//   min: 11,
//   max: 38,
//   avgCookiesPerCustVisit: 3.7,
//   cookiesPurchased: [],
//   totCookiesSold: [0],
//   locationName: 'Dubai',
//   displayStoreName: function() {
//     var childEl0 = document.createElement('h2');
//     childEl0.textContent = `${this.locationName}`;
//     parentEl.appendChild(childEl0);
//   },
//   render: function() {
//     for (var i = 0; i < this.shopHours.length; i++) {
//       var childEl = document.createElement('li');
//       this.hourCustomerVisits.push(randoNumberGen(this.min, this.max));
//       this.cookiesPurchased.push(this.hourCustomerVisits[i]*this.avgCookiesPerCustVisit);
//       this.totCookiesSold.push(this.totCookiesSold[i]+this.cookiesPurchased[i]);
//       childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourCustomerVisits[i]} ~ Cookies Purchased: ${this.cookiesPurchased[i]}`;
//       parentEl.appendChild(childEl);
//     }
//   },
//   totalSold: function() {
//     var childEl2 = document.createElement('li');
//     childEl2.textContent = `Total Cookies Sold: ${this.totCookiesSold[this.shopHours.length -1]}`;
//     parentEl.appendChild(childEl2);
//   }
// }
// dubai.displayStoreName();
// dubai.render();
// dubai.totalSold();

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var paris = {
//   shopHours: hours,
//   hourCustomerVisits: [],
//   min: 20,
//   max: 38,
//   avgCookiesPerCustVisit: 2.3,
//   cookiesPurchased: [],
//   totCookiesSold: [0],
//   locationName: 'Paris',
//   displayStoreName: function() {
//     var childEl0 = document.createElement('h2');
//     childEl0.textContent = `${this.locationName}`;
//     parentEl.appendChild(childEl0);
//   },
//   render: function() {
//     for (var i = 0; i < this.shopHours.length; i++) {
//       var childEl = document.createElement('li');
//       this.hourCustomerVisits.push(randoNumberGen(this.min, this.max));
//       this.cookiesPurchased.push(this.hourCustomerVisits[i]*this.avgCookiesPerCustVisit);
//       this.totCookiesSold.push(this.totCookiesSold[i]+this.cookiesPurchased[i]);
//       childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourCustomerVisits[i]} ~ Cookies Purchased: ${this.cookiesPurchased[i]}`;
//       parentEl.appendChild(childEl);
//     }
//   },
//   totalSold: function() {
//     var childEl2 = document.createElement('li');
//     childEl2.textContent = `Total Cookies Sold: ${this.totCookiesSold[this.shopHours.length -1]}`;
//     parentEl.appendChild(childEl2);
//   }
// }
// paris.displayStoreName();
// paris.render();
// paris.totalSold();

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var lima = {
//   shopHours: hours,
//   hourCustomerVisits: [],
//   min: 2,
//   max: 16,
//   avgCookiesPerCustVisit: 4.6,
//   cookiesPurchased: [],
//   totCookiesSold: [0],
//   locationName: 'Lima',
//   displayStoreName: function() {
//     var childEl0 = document.createElement('h2');
//     childEl0.textContent = `${this.locationName}`;
//     parentEl.appendChild(childEl0);
//   },
//   render: function() {
//     for (var i = 0; i < this.shopHours.length; i++) {
//       var childEl = document.createElement('li');
//       this.hourCustomerVisits.push(randoNumberGen(this.min, this.max));
//       this.cookiesPurchased.push(this.hourCustomerVisits[i]*this.avgCookiesPerCustVisit);
//       this.totCookiesSold.push(this.totCookiesSold[i]+this.cookiesPurchased[i]);
//       childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourCustomerVisits[i]} ~ Cookies Purchased: ${this.cookiesPurchased[i]}`;
//       parentEl.appendChild(childEl);
//     }
//   },
//   totalSold: function() {
//     var childEl2 = document.createElement('li');
//     childEl2.textContent = `Total Cookies Sold: ${this.totCookiesSold[this.shopHours.length -1]}`;
//     parentEl.appendChild(childEl2);
//   }
// }
// lima.displayStoreName();
// lima.render();
// lima.totalSold();