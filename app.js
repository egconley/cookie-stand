var parentEl = document.getElementById('parentElement');
// parentEl.textContent = 'attempting to contact html';

var child = document.createElement('h1');
child.textContent = 'Salmon Cookies';
parentEl.appendChild(child);

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

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

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

//Fills customerEachHour with random data
Store.prototype.genHourlyCustVolume = function() {
  for( var i = 0; i < hours.length; i++ ) {
    //creating a random number for each hour
    var customers = randomNumber(this.minHourlyCust, this.maxHourlyCust);
    //push the random customers into the customersEachHour array
    this.customersEachHour.push(customers);
  }
  console.log(this);
}


// seattle.genHourlyCustVolume()
// tokyo.genHourlyCustVolume()
// dubai.genHourlyCustVolume()
// paris.genHourlyCustVolume()
// lima.genHourlyCustVolume()


Store.prototype.genHourlyCookieVolume = function() {
  this.genHourlyCustVolume();
  for (var i = 0; i < hours.length; i++) {
    var cookiesForOneHour = Math.ceil(this.customersEachHour[i] * this.avgCustCookies);
    this.cookiesEachHour.push(cookiesForOneHour);
    this.totalCookiesForTheDay += cookiesForOneHour;
  }
  console.log(this);
}

Store.prototype.render = function() {
  for( var i = 0; i < hours.length; i++ ) {
    //1. create an element
    var tdEl = document.createElement('td');
    //2. add content
    tdEl.textContent = `${hours[i]}`;
    //append to the DOM; generateCookiesEachHour
    storeHours.appendChild(tdEl);
  }
  for ( var i = 0; i < hours.length; i++ ) {
    //1. create an element
    var tdEl = document.createElement('td');
    //2. add content
    tdEl.textContent = `${this.cookiesEachHour[i]}`;
    //append to the DOM; generateCookiesEachHour
    hourlyCookies.appendChild(tdEl);
  }
  var tdEl = document.createElement('td');
  tdEl.textContent = `Daily Total: ${this.totalCookiesForTheDay}`;
  tdEl.appendChild(tdEl);
}


for (var i=0; i < allStores.length; i++) {
  allStores[i].genHourlyCustVolume();
  allStores[i].genHourlyCookieVolume();
  allStores[i].render();
}

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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